import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config";

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;

// MongoDB connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);

async function ConnectDB() {
  try {
    await client.connect();
    console.log("✔✔ Connected to the database ✔✔");
    return client;
  } catch (error) {
    console.error(`Error connecting to the database: ${error}`);
    throw error;
  }
}

await ConnectDB();

// Database and Collection setup
const dbName = "Contacts";
const db = client.db(dbName);
const collection = db.collection("contacts");

// Home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create a Contact (POST /contacts)
app.post("/contacts", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = { name, email, phone };
    const result = await collection.insertOne(newContact);

    res.status(201).json({
      id: result.insertedId,
      ...newContact,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create contact", error });
  }
});

// Read All Contacts (GET /contacts)
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await collection.find({}).toArray();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve contacts", error });
  }
});

// Read a Single Contact (GET /contacts/:id)
app.get("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await collection.findOne({ _id: new ObjectId(id) });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve contact", error });
  }
});

// Update a Contact (PUT /contacts/:id)
app.put("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const updatedContact = { name, email, phone };
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedContact }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ id, ...updatedContact });
  } catch (error) {
    res.status(500).json({ message: "Failed to update contact", error });
  }
});

// Delete a Contact (DELETE /contacts/:id)
app.delete("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete contact", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🎉🎉🎉`);
});
