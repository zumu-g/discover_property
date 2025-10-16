#!/bin/bash

# Create Standalone Frontend Repository for Vercel Deployment
# This eliminates all monorepo complexity

echo "🚀 Creating standalone frontend repository..."

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: frontend directory not found. Run this from project root."
    exit 1
fi

# Create new directory for standalone frontend
mkdir -p ../discover-property-frontend
cd ../discover-property-frontend

# Initialize git
git init

# Copy all frontend files to root of new repo
cp -r ../discover_property/frontend/* .
cp ../discover_property/frontend/.* . 2>/dev/null || true

# Remove any parent references
rm -f .env.production

# Create simple .env.example
cat > .env.example << 'EOF'
NEXT_PUBLIC_API_URL=https://api.discover-property.com
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here
EOF

# Create clean README
cat > README.md << 'EOF'
# Discover Real Estate Frontend

A modern, AI-powered Australian property marketplace frontend built with Next.js 14.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deploy

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/discover-property-frontend)

## 🏗️ Built With

- **Next.js 14** - React framework with SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components

## 🎨 Features

- ⚡ **AI-Powered Search** - Natural language property search
- 🗺️ **Interactive Maps** - Mapbox integration ready
- 📱 **Mobile-First** - Responsive design
- 🔍 **SEO Optimized** - Server-side rendering
EOF

# Commit everything
git add .
git commit -m "feat: standalone frontend for Discover Real Estate

- AI-powered property search interface
- Next.js 14 with TypeScript and Tailwind CSS
- Optimized for Vercel deployment
- Mobile-first responsive design

🤖 Generated with Claude Code"

echo ""
echo "✅ Standalone frontend repository created!"
echo "📍 Location: ../discover-property-frontend"
echo ""
echo "🚀 Next steps:"
echo "1. cd ../discover-property-frontend"
echo "2. Create new GitHub repository: discover-property-frontend"
echo "3. git remote add origin https://github.com/yourusername/discover-property-frontend.git"
echo "4. git push -u origin main"
echo "5. Deploy to Vercel (will work perfectly!)"
echo ""
echo "This eliminates all monorepo complexity and will deploy flawlessly to Vercel!"