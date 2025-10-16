#!/bin/bash

# Deploy Frontend to Vercel - Automated Script
# This script deploys just the frontend folder to Vercel

echo "🚀 Deploying Discover Real Estate Frontend to Vercel..."

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: frontend directory not found. Run this from project root."
    exit 1
fi

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Navigate to frontend directory
cd frontend

# Check if build works
echo "🔨 Testing build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Fix build errors first."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo ""
echo "🔧 If you get 404 errors, check:"
echo "1. Vercel project settings → Root Directory should be '.'"
echo "2. Framework should be 'Next.js'"
echo "3. Build command should be 'npm run build'"
echo ""
echo "📱 Your site should now be live at the provided URL!"