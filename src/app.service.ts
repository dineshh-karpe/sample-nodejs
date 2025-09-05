import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Welcome to NestJS on DigitalOcean App Platform! 🚀';
  }

  getAppInfo() {
    return {
      name: 'Sample NestJS App',
      version: '1.0.0',
      description: 'A secure and scalable NestJS application for DigitalOcean App Platform',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      features: [
        'TypeScript',
        'NestJS Framework',
        'Health Checks',
        'Rate Limiting',
        'Security Headers',
        'Auto-scaling',
        'Docker Support',
      ],
    };
  }
}
