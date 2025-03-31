# Backend Project

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Lucky12-call/IntelliSQR_ass_MERN/tree/main/backend
   cd backend
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   npm install express dotenv cors prisma @prisma/client
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   DATABASE_URL=<your-database-url>
   ```

## Running the Project Locally

1. **Start the Development Server**:

   ```bash
   npm run dev
   ```

2. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

### Tech Stack

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing application data.

### Project Structure

```
backend/
├── src/
│   ├── controllers/
│       └── user.controller.tx     # Request handlers
│   ├── routes/                    # API routes
│       └── user.route.ts          # User Login route
│   ├── server.ts                  # Express app entry point
│   └── app.ts                     # Express app setup
├── .env                           # Environment variables
├── package.json                   # Project metadata and dependencies
└── README.md                      # Project documentation
```
