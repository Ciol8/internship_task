# RAM Inventory Management System

A full-stack web application built for managing and editing RAM inventory data. This project consists of a RESTful API backend and a React-based frontend.

## Tech Stack

* **Frontend:** React
* **Backend:** Node.js, Express.js
* **Database:** MySQL

## Libraries & Tools Used

### Frontend (React)
* **Vite** 
* **Axios** 
* **React Router Dom** 

### Backend (Node.js / Express)
* **Express.js** 
* **Sequelize** 
* **mysql2** 
* **Cors** 
* **Nodemon** 
* **dotenv** 

## Getting Started & Installation

### Prerequisites
Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/)
* [MySQL Server](https://www.mysql.com/)

### I. Database Setup
1. Open your MySQL client (e.g., MySQL Workbench).
2. Create a new, empty schema named `ram_inventory` (or update the name in your `.env` file).
*Note: The application uses Sequelize, which will automatically synchronize the models and create the necessary tables (`Rams` and `RamTypes`) upon starting the backend server.*

### II. Backend Setup
1. Navigate to the backend directory:
   cd backend

2. Install dependencies:
    npm install

3. Create a .env file in the root of the backend directory and add your MySQL credentials:

    `DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_mysql_password
    DB_NAME=ram_inventory
    PORT=3001`

4. Start the backend server:

npm run dev
(Assuming nodemon is set to the 'dev' script in package.json)

### III. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:

    cd frontend

2. Install dependencies:

    npm install

3. Start the Vite development server:

    npm run dev

Open the link provided in the terminal (usually http://localhost:5173) in your browser.