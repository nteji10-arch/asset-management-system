# Asset Management System

## Overview

Asset Management System is a full-stack web application developed using Django REST Framework and React. The system allows organizations to manage assets efficiently by providing authentication, asset tracking, dashboard analytics, and complete CRUD operations.

---

## Features

### Authentication

* JWT Authentication using SimpleJWT
* Secure Login System
* Protected Routes
* Logout Functionality

### Asset Management

* Add New Assets
* View Assets
* Edit Assets
* Delete Assets
* Asset Status Tracking

### Dashboard

* Total Assets Count
* Available Assets Count
* Assigned Assets Count
* Repair Assets Count

### Search & Filter

* Search Assets by Name
* Filter Assets by Status
* Status Badges for Better Visualization

### User Interface

* Responsive Design
* Bootstrap Styling
* Dashboard Cards
* Navigation Bar
* Professional Layout

---

## Tech Stack

### Frontend

* React JS
* Axios
* React Router DOM
* Bootstrap

### Backend

* Django
* Django REST Framework
* SimpleJWT

### Database

* SQLite

### Version Control

* Git
* GitHub

---

## Project Structure

asset-management-system/

├── assetsys/

├── management/

├── frontend/

│ ├── src/

│ ├── public/

│ └── package.json

├── manage.py

├── db.sqlite3

└── requirements.txt

---

## API Endpoints

### Authentication

POST /api/login/

POST /api/refresh/

### Assets

GET /api/assets/

POST /api/assets/

GET /api/assets/{id}/

PUT /api/assets/{id}/

DELETE /api/assets/{id}/

---

## Installation

### Clone Repository

git clone YOUR_GITHUB_REPOSITORY_URL

cd asset-management-system

### Backend Setup

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver

### Frontend Setup

cd frontend

npm install

npm run dev

---

## Future Enhancements

* PostgreSQL Integration
* Docker Support
* Deployment on Cloud
* Employee Management Module
* Inventory Tracking Module
* Repair Ticket Management
* Role-Based Access Control

---

## Author

Neil Teji

Python Full Stack Developer

---

## Project Status

Completed and actively maintained.
