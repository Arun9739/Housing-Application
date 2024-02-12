# Real Estate Application Documentation

## Introduction
Welcome to the documentation for the Real Estate API. This application allows users to upload details of houses up for sale in a specified area and retrieve information about these houses.

Base URl: 

## Authentication
Authentication is not currently required to access the API endpoints.

## Endpoints
### Upload House Details

Upload details of a house up for sale.

- **Endpoint:** `POST /houses`
- **Request Body:**
  ```json
  {
    "house_type": "string",
    "address": {
      "city": "string",
      "area": "string",
      "pincode": "string",
      "state": "string",
      "country": "string"
    },
    "price": "number",
    "negotiable": "string",
    "owner_details": {
      "name": "string",
      "address": "string",
      "email": "string",
      "phone": "string"
    },
    "status": "string"
  }
    ```
- **Response:**
    ```json
    {
        "message": "House details uploaded successfully"
    }
    ```
- **Status Code:** 201

### Get House Details

Retrieve details of a specific house by its ID.

- **Endpoint:** `GET /houses/:id`
- **Response:**
    ```json
    {
        "house_type": "string",
        "address": {
            "city": "string",
            "area": "string",
            "pincode": "string",
            "state": "string",
            "country": "string"
        },
        "price": "number",
        "negotiable": "string",
        "owner_details": {
            "name": "string",
            "address": "string",
            "email": "string",
            "phone": "string"
        },
        "status": "string"
    }
    ```
- **Status Code:** 200

### List houses

Retrieve a list of all houses up for sale.

- **Endpoint:** `GET /houses`
- **Response:**
    ```json
    [
        {
            "house_type": "string",
            "address": {
                "city": "string",
                "area": "string",
                "pincode": "string",
                "state": "string",
                "country": "string"
            },
            "price": "number",
            "negotiable": "string",
            "owner_details": {
                "name": "string",
                "address": "string",
                "email": "string",
                "phone": "string"
            },
            "status": "string"
        }
    ]
    ```
- **Status Code:** 200

## Error Codes
- **400 Bad Request:** The request body is invalid.
- **404 Not Found:** The requested resource does not exist.
- **500 Internal Server Error:** An error occurred on the server.

## Running the Application

### Prerequisites
- Node.js
- MongoDB

### Setting up the Application
1. Clone the repository
2. Install the dependencies by running `npm install`
3. Navigate to the 'api' directory
4. Start the server by running `npm start`


## Testing the Application

To run the tests for the applicatiion we can use Postman or any other API testing tool.



