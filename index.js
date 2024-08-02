import express from "express";
import { MongoClient } from 'mongodb';
import 'dotenv/config'

const app = express()

// Middleware for parsing JSON request bodies
app.use(express.json());

// Connection URL

const PORT = process.env.PORT || 3000;

const url = process.env.MONGO_URL

const client = new MongoClient(url);

async function ConnectDB() {
    try {
      await client.connect();
      console.log("Connected to the database....");
      return client;
    } catch (error) {
      if (error instanceof MongoServerError) {
        console.log(`Error worth logging: ${error}`); // special case for some reason
      }
      throw error; // still want to crash
    }
  }
  
  await ConnectDB();


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})


