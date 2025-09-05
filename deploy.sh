#!/bin/bash

# DigitalOcean App Platform Deployment Script for NestJS
# This script helps prepare and deploy your NestJS app

echo "🚀 Preparing NestJS app for DigitalOcean App Platform deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run this from your project root."
    exit 1
fi

# Check if we have the necessary files
if [ ! -f ".do/app.yaml" ]; then
    echo "❌ Error: .do/app.yaml not found. Please ensure DigitalOcean configuration is set up."
    exit 1
fi

if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found."
    exit 1
fi

if [ ! -f "tsconfig.json" ]; then
    echo "❌ Error: tsconfig.json not found. Please ensure TypeScript configuration is set up."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Security audit
echo "🔒 Running security audit..."
npm audit

# Lint check
echo "🔍 Running linting..."
npm run lint

# Build the application
echo "🔨 Building NestJS application..."
npm run build

# Test build output
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

echo "✅ Build successful! dist directory created."

# Git status
echo "📝 Git status:"
git status

echo ""
echo "✅ Your NestJS app is ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Commit your changes:"
echo "   git add ."
echo "   git commit -m 'Ready for DigitalOcean NestJS deployment'"
echo ""
echo "2. Push to GitHub:"
echo "   git push origin main"
echo ""
echo "   Repository: https://github.com/dineshh-karpe/sample-nodejs"
echo ""
echo "3. Deploy via DigitalOcean Console:"
echo "   - Go to https://cloud.digitalocean.com/apps"
echo "   - Click 'Create App'"
echo "   - Connect your GitHub repository"
echo "   - Select the main branch"
echo "   - Deploy!"
echo ""
echo "🌊 Happy deploying your NestJS app on DigitalOcean!"
echo ""
echo "📊 Available endpoints after deployment:"
echo "   - Main app: https://your-app.ondigitalocean.app/"
echo "   - Health check: https://your-app.ondigitalocean.app/api/v1/health"
echo "   - App info: https://your-app.ondigitalocean.app/api/v1/info"
