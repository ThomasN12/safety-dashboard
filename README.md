# Safety Dashboard

## Overview
The Safety Dashboard is a single-page application developed to visualize and manage safety incidents reported across various projects. It's designed to provide a quick and intuitive overview of incidents, allowing the Safety Manager to effectively monitor and analyze safety-related data.

## Functionalities

### Data Visualization
- **Dynamic Table Display**: Presents safety incident data in a tabular format. The table dynamically updates to reflect the current dataset.
- **Sorting and Filtering**: Users can sort and filter the incident data based on different parameters such as date, project, severity, type, and employer.

### Interactive Features
- **Search Functionality**: Includes a search bar that allows users to quickly find specific incidents by keywords.
- **Responsive Filters**: Offers responsive input filters for each column, enabling users to narrow down the dataset based on specific criteria.

## How It Works

### Data Handling
- **CSV Parsing**: The application parses a CSV file containing the incident data using `PapaParse`, converting it into a format suitable for display and manipulation within the app.
- **State Management**: Utilizes React's `useState` and `useEffect` hooks for state management and data fetching.

### UI Components
- **React-Table Integration**: Leverages `react-table` for rendering the data in an organized, interactive table.
- **Bootstrap Styling**: Employs Bootstrap for styling, ensuring a clean and user-friendly interface.

### Deployment and Hosting
- The application is deployed on `Vercel`, accessible at [URL](https://safety-dashboard.netlify.app/).

## Getting Started
- **Prerequisites**: Instructions on what needs to be installed or setup to run the project locally (e.g., Node.js, npm).
- **Installation**: Steps to clone the repo, install dependencies, and run the project locally.
