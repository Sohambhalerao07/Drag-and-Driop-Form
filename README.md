# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  # Project Name: Drag and Drop Form
  
#Overview
This project allows users to create a website by filling out a detailed form with various information. It includes functionality for uploading and editing .txt files directly in a text area using drag-and-drop. Users can easily modify the text content of the .txt file once it's uploaded, or delete it entirely.

The form includes fields such as:

Website Title
Business Category
Sub-domain
Contact Information (Phone, Address, City)
Logo Upload
Checkbox for showing address on the website
The drag-and-drop functionality enhances user experience, and all user data is managed using React’s state management system.

# Features
Drag-and-Drop File Upload: Users can drag and drop .txt files into the text area. The content of the file is automatically loaded into the text box.
Text Editing: Once the file is dropped, users can edit the contents of the text area as needed.
Delete Functionality: Users can clear the text in the text area with a delete button.
Form Handling: A dynamic form collects various information for a website, including the title, business category, logo, and contact details.
Responsive Design: The form is styled using Tailwind CSS, ensuring that it’s mobile-friendly and responsive.
Architecture
This project follows a component-based architecture, leveraging React for building reusable UI components. The main components are:

1. WebsiteForm
This is the main container for the form. It manages the state of the form fields and handles form submissions.
It imports and uses the FormField component to render different fields (like text inputs, file upload, checkboxes).
2. FormField
A reusable form field component for each input element, including the text area with drag-and-drop functionality.
Manages input changes, drag-and-drop events, and file reading via the FileReader API.
Supports the drag-and-drop behavior for .txt files and offers a delete option for clearing text.

# Approach
1. State Management
The form data is managed in the parent WebsiteForm component using React’s useState hook.
Each form field’s state is controlled by the parent, and changes are propagated through props.
2. Drag-and-Drop File Upload
The react-dropzone library is used to handle drag-and-drop file uploads.
When a .txt file is dropped, the content is read and displayed in the text area using the FileReader API.
The FormField component includes an onDropText handler that reads the file’s contents and updates the text state in the parent component.
3. Handling Form Submission
When the form is submitted, the form data is logged to the console (for now, as a placeholder).
The form can be extended to send the data to an API or store it in a database.
4. Styling
Tailwind CSS is used to style the form and make it responsive.
The design is clean and simple, with a focus on user experience.

# Installation
Prerequisites
Node.js and npm are required to run this project. You can download Node.js from here.
Steps to Run the Project
Clone the repository:

bash
Copy code
git clone https://github.com/Sohambhalerao07/Drag-and-Driop-Form.git
cd website-form-project
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to see the form in action.

# Usage
Website Title: Enter the title of your website or business.
Business Category: Provide the business category (e.g., Local Business).
Sub-domain: Enter a desired sub-domain (e.g., yourwebsite.websites.com).
Contact Information:
Phone Number: Enter your business phone number.
City: Enter the city where your business is located.
Postal Address: Provide your street address.
Postal Code: Enter your postal code.
Logo Upload: Drag and drop a logo image to upload it (this feature is currently only an image drop area).
Show Address Checkbox: Select this if you want to display the address on your website.
Text File Upload: Drag and drop a .txt file into the text area to auto-load the file’s content. You can edit or clear the content.
Contributing
If you would like to contribute to this project, follow these steps:

# Fork the repository.
Create a new branch for your feature (git checkout -b feature/your-feature).
Make changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgements
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for creating responsive designs.
react-dropzone: A library for handling drag-and-drop file uploads.
