import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './search/search.controller';
import { SearchService } from './search/search.service';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';
import { VotesController } from './votes/votes.controller';
import { VotesService } from './votes/votes.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    SongsController,
    VotesController,
    SearchController,
  ],
  providers: [AppService, SongsService, VotesService, SearchService],
})
export class AppModule {
  authcode = '';
}
