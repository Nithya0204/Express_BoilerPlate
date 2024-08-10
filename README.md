You need to create a RESTful API for managing a contact list. The API should handle the following CRUD functionalities:

1. Create a Contact
    Endpoint: POST /contacts
    Request Body: { "name": "John Doe", "email": "john.doe@example.com", "phone": "123-456-7890" }
    Response: { "id": "1", "name": "John Doe", "email": "john.doe@example.com", "phone": "123-456-7890" }

2. Read Contacts
    Get All Contacts:
    Endpoint: GET /contacts
    Response: [ { "id": "1", "name": "John Doe", "email": "john.doe@example.com", "phone": "123-456-7890" }, ... ]

3. Get a Single Contact:
    Endpoint: GET /contacts/:id
    Response: { "id": "1", "name": "John Doe", "email": "john.doe@example.com", "phone": "123-456-7890" }

4. Update a Contact
    Endpoint: PUT /contacts/:id
    Request Body: { "name": "John Smith", "email": "john.smith@example.com", "phone": "098-765-4321" }
    Response: { "id": "1", "name": "John Smith", "email": "john.smith@example.com", "phone": "098-765-4321" }
    
5. Delete a Contact
    Endpoint: DELETE /contacts/:id
    Response: { "message": "Contact deleted successfully" }
 
