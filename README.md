# 🎬 MovieStream Finder

A powerful, intelligent movie streaming service finder that helps you discover where to watch your favorite films across all major streaming platforms.

## 🌟 Product Description

MovieStream Finder is your ultimate companion for navigating the complex world of streaming services. With the ever-expanding landscape of digital platforms, finding where to watch a specific movie has become increasingly challenging. Our solution provides a seamless, Google-like search experience that instantly tells you where any American or English blockbuster movie (released after 2000) is available to stream.

**Why MovieStream Finder?**
- **Universal Search**: One search across all major streaming platforms
- **Intelligent Matching**: Advanced semantic search finds the closest match even with typos or partial titles
- **Real-time Suggestions**: Smart autocomplete shows options as you type
- **Comprehensive Database**: Covers all major blockbuster releases since 2000
- **Clean Interface**: Simple, intuitive design inspired by Google's search experience

## ✨ Key Features

### 🔍 Smart Search Experience
- **Google-like Interface**: Clean, minimalist homepage with instant search
- **Real-time Autocomplete**: Movie suggestions appear as you type
- **Semantic Search**: Finds movies even with partial titles, typos, or alternative names
- **Instant Results**: Fast response times with comprehensive streaming availability

### 🎯 Comprehensive Movie Coverage
- **Extensive Database**: All American/English blockbuster movies from 2000 onwards
- **Multi-Platform Support**: Integration with major streaming services:
  - Netflix
  - Amazon Prime Video
  - Disney+
  - HBO Max
  - Hulu
  - Apple TV+
  - Paramount+
  - And many more...

### 🚀 Advanced Technology
- **AI-Powered Matching**: Semantic search engine for accurate movie identification
- **Real-time Data**: Up-to-date streaming availability information
- **Fast Performance**: Optimized for quick search and response times
- **Mobile Responsive**: Works seamlessly across all devices

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Query** - Data fetching and caching

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web application framework
- **PostgreSQL** - Primary database
- **Redis** - Caching layer
- **Elasticsearch** - Search engine

### APIs & Services
- **TMDB API** - Movie metadata
- **JustWatch API** - Streaming availability
- **Custom ML Model** - Semantic search matching

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v13 or higher)
- Redis (v6 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/moviestream-finder.git
   cd moviestream-finder
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Configure your environment variables
   # - Database connection strings
   # - API keys (TMDB, JustWatch)
   # - Redis configuration
   ```

4. **Database Setup**
   ```bash
   # Run database migrations
   cd backend
   npm run migrate

   # Seed initial movie data
   npm run seed
   ```

5. **Start the application**
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend (in another terminal)
   cd frontend
   npm start
   ```

Visit `http://localhost:3000` to access the application.

## 📱 Usage

### Basic Search
1. Navigate to the homepage
2. Start typing a movie title in the search bar
3. Select from the autocomplete suggestions or press Enter
4. View streaming availability results

### Advanced Features
- **Fuzzy Search**: Works with partial titles like "Iron Man" → "Iron Man 3"
- **Alternative Titles**: Finds movies by their international or alternative names
- **Year Filtering**: Add release year to narrow down results
- **Genre Browsing**: Explore movies by category

## 🔧 API Documentation

### Search Endpoint
```http
GET /api/movies/search?q={query}&limit={limit}
```

**Parameters:**
- `q`: Movie title query (required)
- `limit`: Number of results (default: 10)

**Response:**
```json
{
  "movies": [
    {
      "id": "12345",
      "title": "The Dark Knight",
      "year": 2008,
      "poster": "https://...",
      "streaming_services": [
        {
          "name": "Netflix",
          "type": "subscription",
          "url": "https://netflix.com/...",
          "quality": "HD"
        }
      ]
    }
  ],
  "total": 1
}
```

### Streaming Availability
```http
GET /api/movies/{movie_id}/streaming
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Update documentation as needed
- Follow the existing code style

## 📊 Roadmap

### Phase 1 (Current)
- [x] Basic search functionality
- [x] Major streaming service integration
- [x] Responsive web interface

### Phase 2 (Upcoming)
- [ ] Mobile app (iOS/Android)
- [ ] User accounts and watchlists
- [ ] Price comparison for rentals
- [ ] Social sharing features

### Phase 3 (Future)
- [ ] Recommendation engine
- [ ] International content support
- [ ] Offline search capability
- [ ] Browser extension

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **The Movie Database (TMDB)** for comprehensive movie data
- **JustWatch** for streaming availability information
- **OpenAI** for semantic search capabilities
- All contributors and beta testers

## 📞 Support

- **Email**: support@moviestreamfinder.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/moviestream-finder/issues)
- **Documentation**: [Wiki](https://github.com/yourusername/moviestream-finder/wiki)

---

**Made with ❤️ for movie lovers everywhere**

## 🏃‍♂️ Quickstart

This repository now includes a minimal prototype server and simple frontend.

### Install dependencies

```bash
cd backend
npm install
```

### Run the server

```bash
node server.js
```

The server will start on port `3001` and serve the frontend from the `frontend` folder. Open `http://localhost:3001` in your browser to try the search interface.
