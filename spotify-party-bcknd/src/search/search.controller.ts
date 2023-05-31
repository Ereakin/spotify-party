import { SearchService } from './search.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('search')
export class SearchController {
  constructor(private readonly appService: SearchService) {}

  @Get()
  async search(@Query('q') requeststring: string) {
    return this.appService.search(requeststring);
  }
}
