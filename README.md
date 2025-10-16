# Discover Property

AI-powered Australian property marketplace built with Next.js 15, TypeScript, and Tailwind CSS.

## 📂 Project Structure

```
/
├── src/app/           # Next.js App Router pages
├── backend/           # NestJS API server
├── database/          # PostgreSQL configuration
├── tests/             # Playwright test suites
└── scripts/           # Utility scripts
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🔧 Development Status

**Phase 1: Complete ✅**
- [x] Project structure setup
- [x] Next.js 15 + TypeScript configuration
- [x] Tailwind CSS styling
- [x] Clean monorepo structure
- [x] Vercel deployment configuration fixed

**Deployment Issues Resolved:**
- ✅ Removed duplicate frontend directories 
- ✅ Moved frontend to root for standard Next.js deployment
- ✅ Fixed TypeScript config to exclude backend/database files
- ✅ Excluded Playwright and scripts from build process

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: NestJS, TypeScript
- **Database**: PostgreSQL
- **Testing**: Playwright
- **Deployment**: Vercel

## 📝 Notes

Project paused at commit `d6456d7` with TypeScript build configuration fixes applied. 
Vercel deployment should now work correctly with the cleaned monorepo structure.
