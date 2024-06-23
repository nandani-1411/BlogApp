# Blog Application

This repository contains the code for a blog application built using Node.js and Express. The application includes features such as user authentication, blog creation, and comment management. Below is an overview of the key features and structure of the project.

## Features
- **User Authentication**: Middleware to handle authentication via cookies.
- **Blog Management**: Routes to create, read, update, and delete blog posts.
- **Commenting System**: Models and routes to manage comments on blog posts.
- **Environment Configuration**: Utilizes `.env` for environment variables.
- **Template Engine**: Uses EJS for rendering dynamic content.
- **Static Files**: Serves static files from the `public` directory.

## Project Structure
- **Models**:
  - `blog`: Schema and model for blog posts.
  - `comment`: Schema and model for comments.
  - `user`: Schema and model for users.
- **Routes**:
  - `userRoute`: Handles user-related routes.
  - `blogRoute`: Handles blog-related routes.
- **Middleware**:
  - `isLoggedinAuth`: Middleware to check if a user is authenticated.
- **Utilities**:
  - `db-connection`: Manages database connection.

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.
- **MongoDB**: This application uses MongoDB for data storage.

### Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/nandani-1411/BlogApp.git
  
