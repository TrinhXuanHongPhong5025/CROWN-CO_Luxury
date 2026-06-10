## API Examples

### 1. Health Check
```bash
curl -X GET http://localhost:9000/health
```

### 2. Get All Users
```bash
curl -X GET "http://localhost:9000/api/users?page=1&limit=10"
```

### 3. Get User by ID
```bash
curl -X GET http://localhost:9000/api/users/1
```

### 4. Create User
```bash
curl -X POST http://localhost:9000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Brown",
    "email": "alice@example.com"
  }'
```

### 5. Update User
```bash
curl -X PUT http://localhost:9000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Updated",
    "email": "john.updated@example.com"
  }'
```

### 6. Delete User
```bash
curl -X DELETE http://localhost:9000/api/users/1
```

## Using Postman

### Import steps:
1. Open Postman
2. Click "Import"
3. Choose "Raw text"
4. Paste the collection below:

```json
{
  "info": {
    "name": "CROWN-CO Backend API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "url": "http://localhost:9000/health"
      }
    },
    {
      "name": "Get All Users",
      "request": {
        "method": "GET",
        "url": "http://localhost:9000/api/users?page=1&limit=10"
      }
    },
    {
      "name": "Get User by ID",
      "request": {
        "method": "GET",
        "url": "http://localhost:9000/api/users/1"
      }
    },
    {
      "name": "Create User",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"name\": \"Alice Brown\", \"email\": \"alice@example.com\"}"
        },
        "url": "http://localhost:9000/api/users"
      }
    },
    {
      "name": "Update User",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"name\": \"John Updated\", \"email\": \"john.updated@example.com\"}"
        },
        "url": "http://localhost:9000/api/users/1"
      }
    },
    {
      "name": "Delete User",
      "request": {
        "method": "DELETE",
        "url": "http://localhost:9000/api/users/1"
      }
    }
  ]
}
```

## Expected Responses

### Success Response (201 Created)
```json
{
  "status": true,
  "code": "SUCCESS",
  "message": "User created successfully",
  "data": {
    "id": 4,
    "name": "Alice Brown",
    "email": "alice@example.com",
    "created_at": "2026-06-10T10:30:00.000Z"
  }
}
```

### Error Response (Validation Error)
```json
{
  "status": false,
  "code": "VALIDATION_ERROR",
  "message": "Email is required"
}
```

### Error Response (Not Found)
```json
{
  "status": false,
  "code": "NOT_FOUND",
  "message": "User with id 999 not found"
}
```

### Error Response (Duplicate Email)
```json
{
  "status": false,
  "code": "VALIDATION_ERROR",
  "message": "Email already exists"
}
```

## Pagination Example
```bash
# Page 1 with 10 items per page
curl -X GET "http://localhost:9000/api/users?page=1&limit=10"

# Page 2 with 20 items per page
curl -X GET "http://localhost:9000/api/users?page=2&limit=20"
```

Response includes pagination info:
```json
{
  "status": true,
  "code": "SUCCESS",
  "message": "Users retrieved successfully",
  "data": [...],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10
  }
}
```
