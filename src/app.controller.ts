import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SomeType } from './types/something';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const something : SomeType = {
      comment: "solo",
      id: "algo"
    }
    return JSON.stringify(something);
  }
}
