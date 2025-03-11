
# Project Setup with Docker

This guide will walk you through the steps to set up and run the project using Docker and Docker Compose.

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to set up and run the project:

### 1. Build and Run the Containers

To build and run the containers, use the following Docker Compose command:

```sh
docker-compose up --build
```

This will build the Docker images and start the containers as defined in the `docker-compose.yml` file.

### 2. Access the Services

Once the containers are running, you can access the services:

- Node.js API: [http://localhost:3000/api/resources/](http://localhost:3000/api/resources/)

### 3. Stop the Containers

To stop the running containers, use this command:

```sh
docker-compose stop
```

---

## API Documentation

### 1. Create a Resource (POST)

- **URL:** `POST http://localhost:3000/api/resources`
- **Request Body:**
  ```json
  {
    "name": "New Resource",
    "description": "This is a new resource"
  }
  ```
- **Response:**
  - **Status:** 201 (Created)
  - **Response Body:**
  ```json
  {
    "id": 1,
    "name": "New Resource",
    "description": "This is a new resource"
  }
  ```

---

### 2. List Resources (GET)

- **URL:** `GET http://localhost:3000/api/resources`
- **Response:**
  - **Status:** 200 (OK)
  - **Response Body:**
  ```json
  [
    {
      "id": 1,
      "name": "New Resource",
      "description": "This is a new resource"
    }
  ]
  ```

---

### 3. Get Resource Details (GET by ID)

- **URL:** `GET http://localhost:3000/api/resources/{id}`
  - Replace `{id}` with the ID of the resource you want to retrieve (e.g., `/api/resources/1`).
- **Response:**
  - **Status:** 200 (OK)
  - **Response Body:**
  ```json
  {
    "id": 1,
    "name": "New Resource",
    "description": "This is a new resource"
  }
  ```

---

### 4. Update a Resource (PUT)

- **URL:** `PUT http://localhost:3000/api/resources/{id}`
  - Replace `{id}` with the ID of the resource you want to update (e.g., `/api/resources/1`).
- **Request Body:**
  ```json
  {
    "name": "Updated Resource",
    "description": "This is an updated resource"
  }
  ```
- **Response:**
  - **Status:** 200 (OK)
  - **Response Body:**
  ```json
  {
    "id": 1,
    "name": "Updated Resource",
    "description": "This is an updated resource"
  }
  ```

---

### 5. Delete a Resource (DELETE)

- **URL:** `DELETE http://localhost:3000/api/resources/{id}`
  - Replace `{id}` with the ID of the resource you want to delete (e.g., `/api/resources/1`).
- **Response:**
  - **Status:** 200 (OK)
  - **Response Body:**
  ```json
  {
    "message": "Resource deleted"
  }
  ```

