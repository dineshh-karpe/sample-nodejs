export declare class AppService {
    getHello(): string;
    getAppInfo(): {
        name: string;
        version: string;
        description: string;
        environment: string;
        timestamp: string;
        uptime: number;
        features: string[];
    };
}
