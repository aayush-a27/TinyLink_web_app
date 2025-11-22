# TinyLink - URL Shortener

A full-stack URL shortener application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS.

## Features

- ✅ Create short links with optional custom codes
- ✅ URL validation and conflict detection
- ✅ Click tracking and analytics
- ✅ Link management dashboard
- ✅ Individual link statistics
- ✅ Responsive design with Tailwind CSS
- ✅ Health check endpoint
- ✅ Copy-to-clipboard functionality

## Tech Stack

**Frontend:**
- React 18 with Vite
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- CORS enabled
- Environment-based configuration

## Project Structure

```
TinyLink_web_app/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # API utilities
│   │   └── ...
│   └── package.json
├── backend/                 # Express backend
│   ├── src/
│   │   ├── config/         # Database config
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   └── ...
│   └── package.json
└── README.md
```

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TinyLink_web_app
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI
   npm run dev
   ```

3. **Setup Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env with your backend URL
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000
   - Health Check: http://localhost:5000/healthz

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/links` | Create a new short link |
| GET | `/api/links` | Get all links |
| GET | `/api/links/:code` | Get link statistics |
| DELETE | `/api/links/:code` | Delete a link |
| GET | `/:code` | Redirect to original URL |
| GET | `/healthz` | Health check |

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tinylink
BASE_URL=http://localhost:5000
NODE_ENV=development
```

### Frontend (.env)
```
VITE_BACKEND_URL=http://localhost:5000
```

## Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Render/Railway)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy the backend service

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas cluster
2. Get connection string
3. Update MONGODB_URI in backend environment

## Development

### Frontend Development
```bash
cd frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

### Backend Development
```bash
cd backend
npm run dev        # Start with nodemon
npm start          # Start production server
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details