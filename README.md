Problem Statement!!

"To-Do List" API.

Build a RESTful API for managing a to-do list using Node.js and Express. The API should allow users to create, retrieve, update, and delete to-do items.

Requirements:
1.	Create a To-Do Item :
    ○	Endpoint: POST /todo
    ○	Request Body: { "title": "string", "completed": "boolean" }
    ○	Response: The newly created to-do item with a unique ID.
2.	Retrieve All To-Do Items:
    ○	Endpoint: GET /todos
    ○	Response: An array of all to-do items.
3.	Retrieve a Single To-Do Item by ID:
    ○	Endpoint: GET /todos/:id
    ○	Response: The to-do item with the specified ID.
4.	Update a To-Do Item by ID:
    ○	Endpoint: PUT /todos/:id
    ○	Request Body: { "title": "string", "completed": "boolean" }
    ○	Response: The updated to-do item.
5.	Delete a To-Do Item by ID:
    ○	Endpoint: DELETE /todos/:id
    ○	Response: A message indicating success or failure.
