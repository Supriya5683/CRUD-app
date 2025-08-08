# Data Collection Portal

A comprehensive web portal for collecting and managing user data including academic details, internships, work experience, certificates, and skills. The system features role-based authentication with separate user and admin access levels.

## 🚀 Features

### Authentication & Authorization
- **Two-level Authentication**: User and Admin roles
- **JWT-based Authentication**: Secure token-based system
- **Role-based Access Control**: Users can only access their own data, admins can view all data
- **Password Security**: Bcrypt hashing with salt rounds
- **Rate Limiting**: Protection against brute force attacks

### Data Management
- **Academic Details**: Institution, degree, subject, marks, year of passing
- **Internship Records**: Company, project, role, duration, location, description
- **Work Experience**: Professional history with detailed information
- **Certificates**: Professional certifications and domains
- **Skills Management**: Technical and soft skills tracking

### Admin Panel
- **User Management**: Add, view, edit, and delete user accounts
- **Data Overview**: Access to all users' data for administrative purposes
- **User Activity Monitoring**: Track user registrations and activities

### Frontend Features
- **Modern UI**: Built with React and Tailwind CSS
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Dashboard**: Real-time data visualization
- **Form Management**: Easy-to-use forms for data entry
- **Navigation**: Intuitive routing with React Router DOM

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: Bcrypt, Helmet, CORS
- **Validation**: Express Validator

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/data-collection-portal.git
cd data-collection-portal
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your configurations
nano .env
```

### 3. Environment Configuration
Create a `.env` file in the backend directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/dataPortal

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-complex
JWT_EXPIRES_IN=7d

# Frontend Configuration
FRONTEND_URL=http://localhost:3000

# Optional: Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 4. Database Setup
```bash
# Start MongoDB service
sudo service mongod start

# Or if using MongoDB Atlas, ensure your connection string is correct in .env
```

### 5. Start the Backend Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

### 6. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm start
```
