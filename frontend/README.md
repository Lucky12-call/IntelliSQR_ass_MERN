# Frontend Project Setup

## Setup Instructions

1. **Clone the Repository**:

```bash
git clone https://github.com/Lucky12-call/IntelliSQR_ass_MERN/tree/main/frontend
cd frontend
```

2. **Install Dependencies**:
   Ensure you have Node.js installed. Then run:

```bash
npm install
npm install tailwindcss @tailwindcss/vite zod react-hook-form axios @tanstack/react-query react-hot-toast
```

## How to Run the Project Locally

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`.

## Tech Stack Overview

- **Frontend Framework**: React.js - javascript library form building UI components
- **Styling**: Tailwind CSS - CSS framework for styling
- **HTTP Client**: Axios @tanstack/react-query - library for API calling

## Project Structure

```
frontend/
├── public/                   # Static assets
├── src/
│   ├── components/
│       └── UserLoginForm.tsx # User form component
│   ├── zod/
│       └── userForm.ts       # zod validation file
│   ├── index.css
│   ├── main.tsx              # Main app component
│   ├── App.tsx               # Main app component
│   └── index.ts              # Entry point
└── package.json              # Project metadata and dependencies
```
