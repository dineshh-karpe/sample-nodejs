export declare class HomeService {
    getHomeData(): {
        title: string;
        message: string;
        features: string[];
        timestamp: string;
        environment: string;
    };
    getRandomData(): {
        title: string;
        randomId: string;
        randomNumber: number;
        timestamp: string;
        message: string;
    };
}
