# Plot Viewer

Plot Viewer is a web-based data visualization tool built with React. It allows users to upload `.csv` or `.xlsx` files, choose between scatter or bar charts, and generate interactive visualizations using Plotly.js. This project is designed to serve researchers, students, and professionals who require a lightweight and secure platform for quick data exploration.

## Features

- Upload support for CSV and Excel (.xlsx) files
- Interactive bar and scatter plot visualizations
- Simple and responsive dark-themed user interface
- Client-side rendering for data privacy
- Plot export functionality (as PNG)
- Component-based architecture for scalability
 
## Screenshots


## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher)

### Usage
Upload a .csv or .xlsx file using the file dropzone or click to select a file.

Choose the chart type: Bar or Scatter.

Interact with the rendered Plotly chart.

Optionally export the chart to PNG.

### Technologies Used
React

Plotly.js

PapaParse (CSV parsing)

SheetJS (Excel parsing)

Tailwind CSS (UI styling)

html2canvas (PNG export)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-org/plot-viewer.git
cd plot-viewer
npm install
npm start

## The application will start on http://localhost:3000.

