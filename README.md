# Discover Real Estate 🏠

A modern, AI-powered Australian property marketplace built with Next.js and NestJS, featuring intelligent search, personalized recommendations, and automated listing tools.

## 🚀 Project Overview

Discover Real Estate differentiates from competitors like Zillow and realestate.com.au through:

- **AI-Powered Search**: Natural language property search ("3 bed house near good schools under $1.2M")
- **Smart Agent Tools**: Auto-generated descriptions, pricing recommendations, lead scoring
- **Personalized Discovery**: ML-driven property recommendations and insights
- **Map-Centric Experience**: Interactive property search with real-time clustering

## 🏗️ Architecture

### Frontend (Next.js 14)
- **Framework**: Next.js with TypeScript, SSR/SSG for SEO
- **Styling**: Tailwind CSS + shadcn/ui components
- **State**: TanStack Query + Zustand
- **Maps**: Mapbox GL JS
- **Location**: `/frontend/`

### Backend (NestJS)
- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL + PostGIS + pgvector
- **Search**: Elasticsearch
- **AI/ML**: OpenAI GPT-4, LangChain
- **Location**: `/backend/`

### Infrastructure
- **Local Development**: Docker Compose
- **Production**: Vercel (frontend) + AWS (backend)
- **Authentication**: Auth0
- **Media**: Cloudinary CDN

## 🛠️ Development Setup

### Prerequisites

1. **Install Docker Desktop** (required for databases)
   - Download from: https://docs.docker.com/desktop/
   - Start Docker Desktop application

2. **Node.js 18+** 
   ```bash
   node --version  # Should be 18+
   ```

### Quick Start

1. **Clone and Install**
   ```bash
   git clone https://github.com/zumu-g/discover_property.git
   cd discover_property
   
   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   
   # Install backend dependencies
   cd backend
   npm install
   cd ..
   ```

2. **Environment Setup**
   ```bash
   # Frontend environment
   cp frontend/.env.local.example frontend/.env.local
   
   # Backend environment
   cp backend/.env.example backend/.env
   
   # Edit the .env files and add your API keys:
   # - OpenAI API key
   # - Mapbox access token
   # - Auth0 credentials (optional for basic development)
   ```

3. **Start Database Services**
   ```bash
   # Start PostgreSQL, Elasticsearch, and Redis
   docker compose up -d postgres redis elasticsearch
   
   # Verify containers are running
   docker compose ps
   ```

4. **Start Development Servers**
   ```bash
   # Terminal 1: Backend (API)
   cd backend
   npm run start:dev    # Runs on http://localhost:3001
   
   # Terminal 2: Frontend (UI)
   cd frontend
   npm run dev          # Runs on http://localhost:3000
   ```

5. **Open Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Elasticsearch: http://localhost:9200
   - Kibana: http://localhost:5601

## 🔑 Required API Keys

### Essential for Core Features
- **OpenAI API Key**: For AI-powered search and content generation
- **Mapbox Access Token**: For interactive maps and geocoding

### Optional (for full features)
- **Auth0 Credentials**: User authentication
- **Cloudinary**: Image optimization
- **Pinecone**: Vector database for advanced AI features

## 📋 Development Workflow

### Current Sprint: Phase 1 Foundation ✅

**Completed Tasks:**
- ✅ Next.js 14 + TypeScript setup
- ✅ NestJS backend initialization  
- ✅ OpenAI + LangChain integration
- ✅ PostgreSQL + PostGIS configuration
- ✅ Tailwind CSS + shadcn/ui setup
- ✅ Mapbox GL JS installation
- ✅ Docker Compose environment
- ✅ ESLint + Prettier configuration

**Next: Phase 2 - Core Map Search (Weeks 3-5)**
- 🔄 Interactive map with property pins
- 🔄 Natural language search processing
- 🔄 Advanced filtering system
- 🔄 Property listing detail pages

### Project Structure
```
discover_property/
├── frontend/          # Next.js application
├── backend/           # NestJS API
├── database/          # PostgreSQL initialization scripts
├── docker-compose.yml # Local development environment
├── PRD.md            # Product Requirements Document
├── DEVELOPMENT_PLAN.md # 12-week development roadmap
└── AI_FEATURES_DETAILED.md # AI feature specifications
```

## 🤖 AI Features

### For Agents
- **Smart Description Generator**: Auto-create compelling property listings
- **Pricing Assistant**: ML-powered price recommendations
- **Lead Scoring**: Prioritize high-intent buyers
- **Photo Enhancement**: Automatic optimization and ordering

### For Buyers
- **Conversational Search**: "Find me a family home near parks under $800k"
- **Personalized Recommendations**: Properties you might like
- **Neighborhood Intelligence**: AI-generated area insights
- **Document Analysis**: Upload contracts for AI review

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test
npm run test:e2e

# Lint and format
npm run lint
npm run format
```

## 📚 Documentation

- [Product Requirements Document](./PRD.md)
- [Development Plan](./DEVELOPMENT_PLAN.md) 
- [AI Features Specification](./AI_FEATURES_DETAILED.md)

## 🔧 Troubleshooting

### Docker Issues
```bash
# Check Docker is running
docker --version

# Restart services
docker compose down
docker compose up -d

# View logs
docker compose logs postgres
```

### Database Connection
```bash
# Test PostgreSQL connection
docker compose exec postgres psql -U discover_user -d discover_property -c "SELECT version();"
```

### Port Conflicts
- Frontend: 3000
- Backend: 3001  
- PostgreSQL: 5432
- Elasticsearch: 9200
- Redis: 6379

## 🎯 Success Metrics

- **Week 4 Milestone**: Map-based search functional
- **Week 8 Milestone**: User auth + basic agent portal  
- **Week 12 Milestone**: Full MVP with AI features

## 🤝 Contributing

1. Follow the development plan phases
2. Run tests before commits
3. Use conventional commit messages
4. Update documentation for new features

---

**Current Status**: Phase 1 Complete ✅ | Next: Core Map Search Implementation 🗺️