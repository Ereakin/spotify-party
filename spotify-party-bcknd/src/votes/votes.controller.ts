import { Body, Controller, Get, Post } from '@nestjs/common';
import { VotesService } from './votes.service';

@Controller('vote')
export class VotesController {
  constructor(private readonly appService: VotesService) {}

  @Post()
  voteSong(@Body() body) {
    return this.appService.voteSong(body.name, body.artist, body.uri);
  }

  @Get()
  getVotes() {
    return this.appService.getVotes();
  }
}
