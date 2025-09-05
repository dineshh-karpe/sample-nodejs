import { Injectable } from '@nestjs/common';
import { HealthIndicatorResult, HealthIndicatorStatus } from '@nestjs/terminus';

@Injectable()
export class HealthService {
  getBasicHealth(): HealthIndicatorResult {
    return {
      'basic-health': {
        status: 'ok' as HealthIndicatorStatus,
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
        version: process.env.npm_package_version || '1.0.0',
      },
    };
  }

  getReadinessCheck(): HealthIndicatorResult {
    // Add any readiness checks here (database connections, external services, etc.)
    return {
      'readiness-check': {
        status: 'ok' as HealthIndicatorStatus,
        message: 'Application is ready to serve traffic',
        timestamp: new Date().toISOString(),
      },
    };
  }

  getLivenessCheck(): HealthIndicatorResult {
    // Add any liveness checks here (basic application health)
    return {
      'liveness-check': {
        status: 'ok' as HealthIndicatorStatus,
        message: 'Application is alive',
        timestamp: new Date().toISOString(),
      },
    };
  }

  getDetailedHealth() {
    const memoryUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();

    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      memory: {
        rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
        external: `${Math.round(memoryUsage.external / 1024 / 1024)} MB`,
      },
      cpu: {
        user: cpuUsage.user,
        system: cpuUsage.system,
      },
      platform: {
        node: process.version,
        platform: process.platform,
        arch: process.arch,
      },
      pid: process.pid,
    };
  }
}
