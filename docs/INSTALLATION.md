# Installation Guide

Follow these steps to set up and run the OneCup Reservation System locally.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (installed and running)

## Steps

### 1. Clone the Repository

Open a terminal and run:

    git clone https://github.com/binnahv/OneCup-WebSite.git
    cd OneCup-WebSite

### 2. Install Dependencies

    npm install

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

    MONGODB_URI=your_mongodb_connection_string
    PORT=3000

### 4. Start the Application

    npm start

### 5. Access the Application

Go to your browser and open:

    http://localhost:3000

The app should now be running locally.
