
 ## Real-Time Chatting App

A modern, full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io, supporting instant messaging, user authentication, presence updates, and a seamless chat experience.

🔗 Live Demo: https://chatting-app-rlv4.onrender.com/

📦 Tech Stack: React.js • Vite • Node.js • Express • MongoDB • Socket.io • JWT • Zustand • Render • GitHub Actions

✨ Features
🔐 Secure Authentication

JWT-based auth stored in httpOnly cookies

Protected routes & session management

Secure password hashing and validation

⚡ Real-Time Communication

Built using Socket.io for instant messaging

Typing indicators, online/offline presence

Handles 100+ concurrent users smoothly

📱 Modern Frontend

React + Zustand for lightweight global state

Vite for lightning-fast bundling

30% faster load time using dynamic imports

Responsive and clean UI design

🛠️ Backend Architecture

Modular Express routes & controllers

Scalable REST APIs

Efficient MongoDB data models

Error handling & input validation

🚀 Deployment & DevOps

CI/CD pipeline via GitHub Actions

Frontend & backend deployed on Render

Environment-based configuration (dev/prod)

🔧 Tech Stack Breakdown

Frontend:

React.js

Zustand

Vite

TailwindCSS (if used)

Backend:

Node.js

Express.js

MongoDB / Mongoose

Socket.io

JWT Authentication

DevOps:

GitHub Actions (CI/CD)

Render Deployment

📸 Screenshots

Add UI screenshots here for better visibility (Login, Chat Window, Online Users, etc.)

📂 Project Structure (High-Level)
root/
 ├── client/        # Frontend (React + Vite)
 ├── server/        # Backend (Node + Express)
 ├── socket/        # Socket.io events
 ├── models/        # MongoDB Schemas
 ├── controllers/   # API Logic
 ├── utils/         # Helpers & Middleware

🚀 Getting Started
1️⃣ Clone the Repo
git clone <your-repo-url>
cd chatting-app

2️⃣ Install Dependencies
cd client && npm install
cd ../server && npm install

3️⃣ Add Environment Variables

Create .env file in server:

MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:5173

4️⃣ Run the App
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm run dev

📬 API & Real-Time Events
Authentication

/api/auth/register

/api/auth/login

/api/auth/logout

/api/auth/me

Chats & Messages

/api/messages/:conversationId

/api/conversations

Socket.io Events

user_online

send_message

receive_message

typing

stop_typing

📈 Future Enhancements

Group chat support

Message read receipts

File and image sharing

Dark mode UI

Push notifications

🙌 Acknowledgements

Thanks to open-source libraries, Render free tier, and the developer community for guidance and tools that made this project possible.
