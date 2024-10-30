# PayTM (Basic Version)

## Introduction

This project is a simplified version of PayTM, designed to demonstrate core functionalities such as user registration, login, and transferring money between accounts. The project consists of a **Backend** built using Node.js, Express.js, Mongoose, and other essential dependencies, and a **Frontend** built with React.js.

### Backend Overview
The backend is developed using **Node.js** and **Express.js**. We use **JWT (JSON Web Token)** for authentication and **Mongoose** to interact with a **MongoDB** database. The core feature of this backend is to allow users to securely transfer amounts between their accounts. Transaction management is implemented to ensure all transfers happen atomically and reliably.

### Frontend Overview
The frontend is a simple **React.js** app that allows users to register, log in, and perform actions such as transferring amounts and viewing balances. **Axios** is used to make HTTP requests to the backend.

## Features

1. **User Authentication**: Registration, Login, and Token-based Authentication (JWT).
2. **Account Management**: Create accounts and fetch balances.
3. **Money Transfer**: Transfer amounts between different user accounts securely.
4. **Transaction Safety**: Uses session-based transaction management in MongoDB to ensure secure operations.

## Installation

### Prerequisites
- **Node.js**: Install Node.js from [Node.js Official Website](https://nodejs.org/).
- **MongoDB**: Set up a local MongoDB instance or use a cloud instance like MongoDB Atlas.

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo-url/paytm-backend.git
   cd paytm-backend
2. **Install dependencies**:
```bash
    Copy code
    npm install
```
3. **Configure environment variables: Create a .env file in the root directory and add the following**:
```   
    MONGODB_URI=<Your MongoDB Connection URI>
    JWT_SECRET=<Your JWT Secret>
    PORT=5000
```
4. **Run the backend**:

```bash
npm start
```

The backend server will start at http://localhost:5000.