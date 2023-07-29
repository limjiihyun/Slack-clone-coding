import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //공통주소
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() 
  getHello(){
    return this.appService.getHello();
  }
}