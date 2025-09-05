import { HomeService } from './home.service';
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    getHome(): {
        title: string;
        message: string;
        features: string[];
        timestamp: string;
        environment: string;
    };
    getRandom(): {
        title: string;
        randomId: string;
        randomNumber: number;
        timestamp: string;
        message: string;
    };
}
