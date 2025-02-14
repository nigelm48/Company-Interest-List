# Company Interest List App 📃

A simple web application that allows users to maintain a list of companies they are interested in. This app enables users to add companies to a list, remove them, and prevents duplicate entries (case-insensitive). The data is persisted in the browser using LocalStorage, so the list remains even after refreshing the page.

## Features ✅

- **Add Company** : Users can add a company by typing its name and clicking the "Add" button.
- **Remove Company**: Users can remove a company from the list by clicking the "Delete" button next to each entry.
- **Duplicate Prevention**: The application checks for duplicate entries (ignoring case) and alerts the user if a duplicate is detected.
- **Persistent Storage**: The company list is saved using LocalStorage, so the data persists between sessions.

## Implementation Details 👨‍💻

**index.html**
The HTML file sets up the basic structure of the application. It includes:

- A header with the title.
- A main section with an input form for entering company names.
- A section that displays the list of companies.
- Links to the external CSS for styling and the JavaScript file for functionality.

**styles.css**
This file defines the visual presentation of the application:

- Global Styles: Resets and box-sizing rules.
- Layout: A modern gradient background with a centered container.
- Input Section: Styled form for user input.
- List Section: Card-like list items with a delete button that changes color on hover.

**script.js**
Contains the application logic:

- LocalStorage Management: Functions to get and save companies.
- Rendering: Dynamically updates the list in the DOM.
- Event Handling: Listens for form submission to add companies and button clicks to remove them.
- Duplicate Checking: Prevents adding a company that already exists (ignoring case).

## File Structure 📂
- index.html
- styles.css
- script.js
- README.md (this file)


## Setup Instructions ⚙️
- Download or clone this repository
- Open the index.html file (should open in your default browser)

