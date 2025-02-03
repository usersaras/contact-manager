# Contact Manager API

Welcome to the Contact Manager API built using Node.js! This application allows users to create an account, log in, and manage their contacts. Users can create, view, edit, and delete contacts, providing a convenient way to organize and maintain their contact information.

## Table of Contents

- Installation
- Routes
- Features
- Dependencies
- Contributing

## Installation

Step 1: Clone the repository to your local machine:

```
git clone https://github.com/your-username/contact-manager.git

```

Step 2: Navigate to the project directory:

```
cd contact-manager

```

Step 3: Install dependencies:

```
npm install

```

Step 4: Setup environment

- Set 'PORT' to your desired port in '.env' file.
- Set 'ACCESS_TOKEN_SECRET' in '.env' file for jsonwebtoken.
- Create a MongoDB database.
- Set 'CONNECTION_STRING' with your database connection string in '.env' file.

Step 5: Start the application

```
npm run start

```

Or, if it's for development purposes:

```
npm run dev

```

The application will be accessible at http://localhost:{{PORT variable in ENV}}.

## Routes

Work in progress.

## Features

- User Authentication:

  - Users can create an account with a unique username and password.
  - Existing users can log in securely.

- Contact Management:
  - Users can create new contacts with details such as name, phone number, and email.
  - View a list of all contacts.
  - Edit contact details.
  - Delete unwanted contacts.

## Dependencies

- node.js
- express.js
- mongoDB (Mongoose)
- jsonwebtoken for authentication
- winston for logging
- bcypt for password hashing
- http-status-codes for sending status codes in response
- express-async-handler
- dotenv

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or a pull request.
