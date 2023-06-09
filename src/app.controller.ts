import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Param } from '@nestjs/common';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('via-cep/:cep')
  getCep(@Param('cep') cep: object): object {
    return this.appService.getCep(cep);
  }

}
