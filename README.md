# Sample NestJS App - DigitalOcean App Platform Ready

A secure and scalable NestJS application with TypeScript, health monitoring, and comprehensive build system optimized for deployment on DigitalOcean App Platform.

## 🚀 Features

- **NestJS Framework**: Modern, scalable Node.js framework with TypeScript
- **Security First**: Helmet.js, rate limiting, security headers, validation
- **Production Ready**: Environment-based configuration, comprehensive health checks
- **Scalable**: Auto-scaling configuration for DigitalOcean
- **TypeScript**: Full TypeScript support with strict type checking
- **Health Monitoring**: Advanced health checks with memory, disk, and service monitoring
- **Build System**: Optimized multi-stage Docker build with dist output

## 🔒 Security Features

- **Helmet.js**: Comprehensive security headers
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: HSTS headers
- **Input Validation**: Request size limits and sanitization

## 🛠️ Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: NestJS (TypeScript)
- **Language**: TypeScript 5.1+
- **Template Engine**: Pug
- **Security**: Helmet, @nestjs/throttler, class-validator
- **Health Monitoring**: @nestjs/terminus
- **Build System**: NestJS CLI, TypeScript compiler
- **Testing**: Jest, Supertest

## 📋 Prerequisites

- Node.js 18+ 
- npm 8+
- DigitalOcean account
- Git repository

## 🚀 Quick Start

### One-Click Deploy

[![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/dineshh-karpe/sample-nodejs/tree/main)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/dineshh-karpe/sample-nodejs.git
   cd sample-nodejs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run start:dev
   ```

4. **Access the application**
   - Main app: http://localhost:3000
   - API: http://localhost:3000/api/v1
   - Health check: http://localhost:3000/api/v1/health
   - App info: http://localhost:3000/api/v1/info

### Production Deployment

#### Option 1: DigitalOcean App Platform (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for DigitalOcean deployment"
   git push origin main
   ```

2. **Deploy via DigitalOcean Console**
   - Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
   - Click "Create App"
   - Connect your GitHub repository
   - Select the `main` branch
   - Choose Node.js environment
   - Configure environment variables:
     - `NODE_ENV`: `production`
     - `PORT`: `3000`
   - Deploy!

3. **Configure Auto-scaling**
   - Set min instances: 1
   - Set max instances: 5
   - CPU threshold: 70%

#### Option 2: Docker Deployment

1. **Build the image**
   ```bash
   docker build -t sample-nestjs-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 -e NODE_ENV=production sample-nestjs-app
   ```

## 🔧 Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | `development` | Environment mode |
| `PORT` | `3000` | Server port |

### Security Configuration

The app includes several security layers:

- **Helmet.js**: Security headers
- **Rate Limiting**: 100 req/15min per IP
- **CSP**: Content Security Policy
- **HSTS**: HTTP Strict Transport Security
- **XSS Protection**: Cross-site scripting protection

## 📊 Monitoring & Health Checks

### Health Endpoints
- **Basic Health**: `/api/v1/health` - Complete health check with memory, disk, and service status
- **Readiness**: `/api/v1/health/ready` - Application readiness check
- **Liveness**: `/api/v1/health/live` - Application liveness check
- **Detailed**: `/api/v1/health/detailed` - Comprehensive system metrics

### Built-in Monitoring
- Application uptime tracking
- Request/response logging
- Error handling and logging
- Performance metrics

## 🔄 Auto-scaling

The app is configured for automatic scaling on DigitalOcean:

- **Minimum Instances**: 1
- **Maximum Instances**: 5
- **CPU Threshold**: 70%
- **Memory Threshold**: 80%

## 🚨 Alerts

Configured alerts for:
- Deployment failures
- Domain failures
- High CPU utilization (>80%)
- High memory utilization (>80%)

## 📁 Project Structure

```
sample-nestjs/
├── .do/                 # DigitalOcean App Platform config
├── src/                 # NestJS source code
│   ├── health/          # Health check module
│   ├── home/            # Home page module
│   ├── app.module.ts    # Main application module
│   ├── app.controller.ts # Main application controller
│   ├── app.service.ts   # Main application service
│   └── main.ts          # Application entry point
├── public/              # Static assets
├── views/               # Pug templates
├── dist/                # Compiled TypeScript output
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── nest-cli.json        # NestJS CLI configuration
├── Dockerfile          # Docker configuration
├── .dockerignore       # Docker exclusions
└── README.md           # This file
```

## 🧪 Testing

```bash
# Run security audit
npm run security-check

# Run linting
npm run lint

# Run tests
npm run test

# Run tests with coverage
npm run test:cov

# Run e2e tests
npm run test:e2e

# Build the application
npm run build
```

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**
   - Check if another process is using port 3000
   - Use `lsof -i :3000` to identify

2. **Permission denied**
   - Ensure proper file permissions
   - Check Docker user configuration

3. **Health check failing**
   - Verify `/health` endpoint is accessible
   - Check application logs

### Logs

- **Development**: Console output
- **Production**: Combined format with timestamps
- **Docker**: `docker logs <container-id>`

## 📈 Performance Optimization

- **Static Assets**: Served from `/public` directory
- **Template Caching**: Pug templates cached in production
- **Compression**: Built-in Express compression
- **Memory Management**: Proper cleanup and garbage collection

## 🔐 Security Best Practices

1. **Keep dependencies updated**
   ```bash
   npm audit fix
   npm update
   ```

2. **Environment variables**
   - Never commit `.env` files
   - Use DigitalOcean App Platform secrets

3. **Regular security audits**
   ```bash
   npm audit
   npm run security-check
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- **Documentation**: [DigitalOcean App Platform](https://docs.digitalocean.com/products/app-platform/)
- **Issues**: Create an issue in this repository
- **Community**: [DigitalOcean Community](https://www.digitalocean.com/community)

---

**Ready for production deployment on DigitalOcean App Platform! 🚀**