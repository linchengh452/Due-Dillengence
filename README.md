# IT-project-Team92

## Tech Stack:
+ Python 3.12
+ FastAPI: For building high-performance Web APIs.
+ Tortoise ORM: For interacting with the database.
+ Pydantic: For data validation and serialization.
+ JWT: For user authentication and authorization.
+ Docker: For containerizing the application, simplifying deployment and development.

## Project Structure
```plaintext
.
├── app
│   ├── api                    # Routes and views
│   │   ├── admin.py           # Admin-related routes
│   │   ├── auth.py            # User authentication-related routes
│   │   ├── __init__.py        # Route initialization
│   ├── config.py              # Configuration file, manages environment variables
│   ├── db
│   │   ├── init_db.py         # Database initialization
│   ├── main.py                # Application entry point
│   ├── models                 # Database model definitions
│   │   ├── company.py         # Company model
│   │   ├── __init__.py        # Model initialization
│   │   ├── risk.py            # Risk assessment-related models
│   │   └── user.py            # User model
│   ├── schemas                # Pydantic models for data validation
│   │   ├── __init__.py
│   │   └── user.py            # Pydantic models related to users
│   └── utils                  # Utility tools and helper functions
│       ├── security.py        # Security-related functions (e.g., password hashing)
│       └── token.py           # JWT token-related functions
├── docker-compose.yml         # Docker Compose configuration file
├── Dockerfile                 # Docker image build file
├── requirements.txt           # Python dependencies list
└── tests                      # Test cases
    ├── conftest.py
    ├── __init__.py
    └── test_user.py           # User-related tests
```

## Installation & Running
### Prerequisites
- Docker
- Docker Compose

### Clone the Project
```bash
git clone https://github.com/RoyX0423/IT-project-Team92.git
cd research-due-diligence
```

### Running with Docker

1. Build and start services
```bash
docker compose up --build -d # Build and start all services in Docker, and run in the background
```
For real-time debugging of the backend service, run the backend service separately in Docker
```bash
docker compose up web # Start the web service in Docker and run in the foreground
```

2. The database management service will run at http://localhost:8000, no additional database management software is required.
3. Swagger UI will provide API documentation at http://localhost:8001/docs.

## Features Overview
### User Management
- [x] User Registration: POST /users/register
- [x] User Login: POST /users/login
- [x] Get Current User Information: GET /users/me
- [x] Change Password: PUT /users/password

### Admin Features
- [x] Admin Dashboard: GET /admin/admin-dashboard
- [x] View All Users: GET /admin/users
