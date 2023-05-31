import { Injectable } from '@nestjs/common';

@Injectable()
export class VotesService {
  SongsList: { name: string; artist: string[]; uri: string; votes: number }[] =
    [];
  voteSong(name, artist, uri): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this.SongsList.find((Song) => Song.uri == uri) !== undefined) {
        this.SongsList.find((Song) => Song.uri == uri).votes++;
        resolve('this Song is already in the Votes');
      } else {
        try {
          this.SongsList.push({
            name: name,
            artist: [...artist],
            uri: uri,
            votes: 1,
          });
          console.log(this.SongsList);
          resolve(
            'Thanks for your suggestion, you added ' +
              name +
              'by ' +
              artist[0] +
              'to the queue',
          );
        } catch (err) {
          reject(err);
        }
      }
    });
  }
  getVotes(): { name: string; artist: string[]; uri: string; votes: number }[] {
    return this.SongsList;
  }

  pushSong() {
    console.log('Push a song to spotify to get it into the queue');
  }
}
