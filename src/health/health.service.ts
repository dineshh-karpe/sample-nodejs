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

  getMemoryHealth(): HealthIndicatorResult {
    const memoryUsage = process.memoryUsage();
    const totalMemory = require('os').totalmem();
    const freeMemory = require('os').freemem();
    const usedMemory = totalMemory - freeMemory;
    
    const rssMB = Math.round(memoryUsage.rss / 1024 / 1024);
    const heapUsedMB = Math.round(memoryUsage.heapUsed / 1024 / 1024);
    const systemUsagePercent = Math.round((usedMemory / totalMemory) * 100);
    
    return {
      'memory-status': {
        status: 'ok' as HealthIndicatorStatus,
        timestamp: new Date().toISOString(),
        details: {
          rss: `${rssMB} MB`,
          heapUsed: `${heapUsedMB} MB`,
          systemUsage: `${systemUsagePercent}%`,
          thresholds: {
            rss: '1GB',
            heap: '500MB',
          },
        },
      },
    };
  }

  getDetailedHealth() {
    const memoryUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();

    // Calculate memory usage percentages
    const totalMemory = require('os').totalmem();
    const freeMemory = require('os').freemem();
    const usedMemory = totalMemory - freeMemory;

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
        system: {
          total: `${Math.round(totalMemory / 1024 / 1024)} MB`,
          free: `${Math.round(freeMemory / 1024 / 1024)} MB`,
          used: `${Math.round(usedMemory / 1024 / 1024)} MB`,
          usagePercent: `${Math.round((usedMemory / totalMemory) * 100)}%`,
        },
        thresholds: {
          rss: '1GB',
          heap: '500MB',
        },
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
