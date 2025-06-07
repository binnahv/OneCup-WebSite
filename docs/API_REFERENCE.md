# API Reference

## Base URL

    http://localhost:3000/api

---

### Create Reservation

- **Endpoint**: `/reservations`
- **Method**: POST
- **Description**: Creates a new reservation.
- **Request Body**:

    {
        "name": "John Doe",
        "email": "john@example.com",
        "date": "2025-06-10",
        "time": "18:00",
        "people": 4,
        "password": "securepassword"
    }

- **Response**:

    {
        "message": "Reservation created successfully.",
        "reservationId": "abc123"
    }

- **Error Responses**:

    {
        "error": "Missing required fields."
    }
    {
        "error": "Time slot not available."
    }

---

### Login for Reservation Management

- **Endpoint**: `/reservations/login`
- **Method**: POST
- **Description**: Logs in a user to manage their reservation.
- **Request Body**:

    {
        "email": "john@example.com",
        "password": "securepassword"
    }

- **Response**:

    {
        "message": "Login successful.",
        "reservation": { ... }
    }

- **Error Responses**:

    {
        "error": "Invalid email or password."
    }
    {
        "error": "Reservation not found."
    }

---

### Edit Reservation

- **Endpoint**: `/reservations/:id`
- **Method**: PUT
- **Description**: Edits an existing reservation.
- **Request Body**:

    {
        "date": "2025-06-11",
        "time": "19:00",
        "people": 2
    }

- **Response**:

    {
        "message": "Reservation updated successfully."
    }

- **Error Responses**:

    {
        "error": "Reservation not found."
    }
    {
        "error": "Invalid update parameters."
    }

---

### Confirm Reservation

- **Endpoint**: `/reservations/:id/confirm`
- **Method**: PUT
- **Description**: Confirms a reservation.
- **Response**:

    {
        "message": "Reservation confirmed."
    }

- **Error Responses**:

    {
        "error": "Reservation not found."
    }
    {
        "error": "Reservation already confirmed or canceled."
    }

---

### Cancel Reservation

- **Endpoint**: `/reservations/:id`
- **Method**: DELETE
- **Description**: Cancels a reservation.
- **Response**:

    {
        "message": "Reservation canceled."
    }

- **Error Responses**:

    {
        "error": "Reservation not found."
    }
    {
        "error": "Reservation already canceled."
    }

---

### Join Queue

- **Endpoint**: `/queue`
- **Method**: POST
- **Description**: Adds a user to the waiting queue.
- **Request Body**:

    {
        "name": "Alice",
        "email": "alice@example.com",
        "people": 2
    }

- **Response**:

    {
        "message": "Added to queue successfully.",
        "position": 5
    }

- **Error Responses**:

    {
        "error": "Missing required fields."
    }
    {
        "error": "Already in queue."
    }

---

### Get Queue Status

- **Endpoint**: `/queue/:email`
- **Method**: GET
- **Description**: Returns the current position of the user in the queue.
- **Response**:

    {
        "position": 3,
        "estimatedWaitTime": "15 minutes"
    }

- **Error Responses**:

    {
        "error": "User not found in queue."
    }

---

### Leave Queue

- **Endpoint**: `/queue/:email`
- **Method**: DELETE
- **Description**: Removes the user from the queue.
- **Response**:

    {
        "message": "Removed from queue."
    }

- **Error Responses**:

    {
        "error": "User not found in queue."
    }
