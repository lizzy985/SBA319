# EasySorter Dashboard

Welcome to the EasySorter Dashboard! This web application allows users to manage and view different categories of items including users, clothes, books, and furniture.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

EasySorter Dashboard is a web application designed to help users easily manage and sort various items. The application provides a user-friendly interface for adding, viewing, editing, and deleting items in multiple categories: users, clothes, books, and furniture.

## Features

- View lists of users, clothes, books, and furniture.
- Add new items to each category.
- Edit existing items.
- Delete items.
- Simple and intuitive user interface.

## Technologies

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Frontend**: HTML, CSS, EJS
- **Styling**: Custom CSS

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/easysorter-dashboard.git
    cd easysorter-dashboard
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up MongoDB**:
    - Ensure MongoDB is installed and running on your local machine.
    - Create a `.env` file in the root directory and add your MongoDB connection string:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    ```

4. **Run the application**:
    ```sh
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Navigate to the dashboard**:
    - Open your browser and go to `http://localhost:3000`.

2. **View categories**:
    - Click on the links to view users, clothes, books, and furniture.

3. **Manage items**:
    - Use the provided forms to add, edit, or delete items in each category.

## Folder Structure

