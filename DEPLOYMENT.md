# Deployment Guide

This guide covers deploying the NestJS application to DigitalOcean App Platform.

## 🚀 Quick Deploy

### Option 1: One-Click Deploy

[![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/AiStartup101/sample-nodejs/tree/main)

### Option 2: Manual Deploy

1. **Fork this repository** to your GitHub account
2. **Go to DigitalOcean App Platform**: https://cloud.digitalocean.com/apps
3. **Click "Create App"**
4. **Connect GitHub** and select `AiStartup101/sample-nodejs`
5. **Select the main branch**
6. **Configure environment variables**:
   - `NODE_ENV`: `production`
   - `PORT`: `3000`
7. **Deploy!**

## 🔧 Configuration

### Environment Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Environment mode |
| `PORT` | `3000` | Application port |
| `NPM_CONFIG_PRODUCTION` | `true` | NPM production mode |

### Auto-scaling Settings

- **Minimum Instances**: 1
- **Maximum Instances**: 5
- **CPU Threshold**: 70%
- **Memory Threshold**: 80%

## 📊 Health Monitoring

After deployment, your app will be available at:

- **Main App**: `https://your-app.ondigitalocean.app/`
- **API**: `https://your-app.ondigitalocean.app/api/v1/`
- **Health Check**: `https://your-app.ondigitalocean.app/api/v1/health`
- **App Info**: `https://your-app.ondigitalocean.app/api/v1/info`

## 🔄 CI/CD with GitHub Actions

This repository includes GitHub Actions for:

- **Automated Testing**: Linting, unit tests, and security audits
- **Automated Deployment**: Deploy to DigitalOcean on main branch pushes
- **Dependency Updates**: Automated via Dependabot

### Required Secrets

Add these secrets to your GitHub repository:

- `DIGITALOCEAN_APP_ID`: Your DigitalOcean App ID
- `DIGITALOCEAN_API_TOKEN`: Your DigitalOcean API token

## 🐳 Docker Deployment

### Local Docker Build

```bash
# Build the image
docker build -t sample-nestjs-app .

# Run the container
docker run -p 3000:3000 -e NODE_ENV=production sample-nestjs-app
```

### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (requires 18+)
   - Ensure all dependencies are installed
   - Verify TypeScript compilation

2. **Health Check Failures**
   - Verify `/api/v1/health` endpoint is accessible
   - Check application logs in DigitalOcean console

3. **Memory Issues**
   - Monitor memory usage in DigitalOcean dashboard
   - Adjust instance size if needed

### Logs

- **DigitalOcean Console**: View real-time logs
- **GitHub Actions**: Check CI/CD logs
- **Local Development**: `npm run start:dev`

## 📈 Performance Optimization

- **Enable CDN**: Static assets served via DigitalOcean CDN
- **Database**: Add managed database if needed
- **Caching**: Implement Redis for session storage
- **Load Balancing**: Automatic with multiple instances

## 🔐 Security

- **HTTPS**: Automatically enabled by DigitalOcean
- **Security Headers**: Configured via Helmet.js
- **Rate Limiting**: Built-in throttling
- **Input Validation**: Class-validator integration

---

**Ready to deploy? Click the deploy button above! 🚀**
