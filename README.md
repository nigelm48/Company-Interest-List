# Company Interest List App 📃

A simple web application that allows users to maintain a list of companies they are interested in. This app enables users to add companies to a list, remove them, and prevents duplicate entries (case-insensitive). The data is persisted in the browser using LocalStorage, so the list remains even after refreshing the page.

## Features ✅

- **Add Company**: Users can add a company by typing its name and clicking the "Add" button.
- **Remove Company**: Users can remove a company from the list by clicking the "Delete" button next to each entry.
- **Duplicate Prevention**: The application checks for duplicate entries (ignoring case) and alerts the user if a duplicate is detected.
- **Persistent Storage**: The company list is saved using LocalStorage, so the data persists between sessions.

## Implementation Details 👨‍💻

- **HTML**: Provides the structure for the application including the header, input form, and a list container for displaying companies.
- **CSS**: Uses modern design elements such as a gradient background, card-like styling for list items, and responsive layouts to enhance the user interface.
- **JavaScript**: 
  - Manages the application logic.
  - Retrieves and stores the company list in LocalStorage.
  - Handles adding new companies while checking for duplicates.
  - Renders the company list dynamically.
  - Listens to user events (form submissions and delete button clicks).

## File Structure 📂
- index.html
- script.js
- styles.css
- README.md (this file)

## Setup Instructions ⚙️
- Download or clone this repository
- Open the index.html file (should open in your default browser)

