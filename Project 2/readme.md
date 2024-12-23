# Project: Inline Styles, Basic Interaction, and Server-Side Validation  

This project demonstrates how to enhance web forms with inline styles, interactive features, and validation both on the client-side and server-side using Node.js.

## Summary  
This task involves creating a simple web application with the following features:
- A form for users to input their **username** and **email**.
- Client-side form validation using inline JavaScript.
- Server-side validation to ensure the submitted form data is correct.
- Temporary server-side storage of the validated data.
- Dynamic user feedback based on form submission.

### Key Features  
1. **Inline Styles**: Form styling is applied directly within the HTML using inline CSS.
2. **Client-Side Validation**: Form fields are validated using JavaScript to provide immediate feedback to users.
3. **Server-Side Validation**: The server verifies the form data and ensures it's safe to process.
4. **Temporary Data Storage**: Validated data is stored temporarily on the server.

## Technologies Used  
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Form Validation**: Inline JavaScript (client-side), Node.js (server-side)
- **Development Tool**: Nodemon

## Setup Instructions  

### Prerequisites  
- [Node.js](https://nodejs.org/) installed on your machine.  

### Steps to Run the Project  

1. **Clone the Repository**
   ```bash
   git clone https://github.com/CodingPheonix/Cognifyz-technologies-Internship.git
   cd Project 2
   ```

2. **Install Dependencies**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Start the Server**
   Use Nodemon to start the server:
   ```bash
   nodemon server.js
   ```

4. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Example Usage
1. Navigate to the home page (`/`).
2. Fill out the form.
3. Check for errors by keeping various inputs empty or insufficient password length.
4. Submit the form and move to terminal to see server side data storage.

## Acknowledgements
A big thank you to **Cognifyz Technologies** for providing this task and an opportunity to learn and grow!

## License
This project is for educational purposes and can be modified or reused under appropriate credit.
