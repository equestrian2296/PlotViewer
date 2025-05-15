## `DOCUMENTATION.md`

```markdown
# Plot Viewer - Technical Documentation

## Overview

Plot Viewer is a React-based web application that allows users to upload and visualize data files (CSV and Excel). The application supports bar and scatter plots using Plotly.js and enables users to export the plots as PNG images. It is designed for client-side execution to preserve data privacy.

---

## Architecture

### Frontend

- **Framework**: React (Functional components with hooks)
- **Styling**: Tailwind CSS
- **Charting**: Plotly.js
- **File Parsing**: PapaParse (CSV), SheetJS (XLSX)
- **Export**: html2canvas

All state management is handled via `useState` and `useEffect`.

---

## Component Breakdown

### App.js

- Root component
- Manages global state for:
  - Uploaded data
  - Plot type (bar, scatter)
  - Parsed results
- Renders FileUpload and PlotDisplay components

### components/FileUpload.js

- Handles drag-and-drop or manual file selection
- Accepts `.csv`, `.xls`, and `.xlsx`
- Parses CSV with PapaParse
- Parses Excel files using SheetJS (`xlsx`)
- Triggers callback with formatted data

### components/PlotDisplay.js

- Accepts structured data and renders Plotly charts
- Supports bar and scatter plots
- Exports charts to PNG using `html2canvas`

---

## Backend Considerations (Future Scope)

Although the current implementation is frontend-only, the following backend features can be integrated:

- File upload persistence using Flask or Express.js
- User session management
- Database integration for saving plot configurations
- Authentication for secure access

---

## API Design (Planned)

Example endpoints:

- `POST /api/plot` - Save a new plot configuration
- `GET /api/plot/:id` - Retrieve a saved plot
- `POST /api/file` - Upload and parse a CSV/Excel file on the backend

---

## Security

- No sensitive user data is stored
- All parsing and rendering is handled on the client side
- Potential future backend should include input sanitization and access control

---

## Testing

- Validate both CSV and Excel workflows
- Check compatibility on major browsers (Chrome, Firefox, Edge)
- Ensure responsiveness on mobile and desktop viewports

---

## Deployment

This project can be deployed on:

- **Vercel**: Zero config for React apps
Build using:

```bash
npm run build
