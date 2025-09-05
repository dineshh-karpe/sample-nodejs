import { Controller, Get, Render } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @Render('index')
  getHome() {
    return this.homeService.getHomeData();
  }

  @Get('random')
  @Render('random')
  getRandom() {
    return this.homeService.getRandomData();
  }
}
