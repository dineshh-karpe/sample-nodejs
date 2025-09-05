import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getHomeData() {
    return {
      title: 'Welcome to NestJS on DigitalOcean!',
      message: 'Your secure and scalable NestJS application is running successfully.',
      features: [
        'TypeScript Support',
        'NestJS Framework',
        'Health Monitoring',
        'Rate Limiting',
        'Security Headers',
        'Auto-scaling Ready',
        'Docker Support',
      ],
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    };
  }

  getRandomData() {
    const randomId = Math.random().toString(36).substring(7);
    const randomNumber = Math.floor(Math.random() * 1000);
    
    return {
      title: 'Random Data Generator',
      randomId,
      randomNumber,
      timestamp: new Date().toISOString(),
      message: 'This is a random data endpoint for testing purposes.',
    };
  }
}
