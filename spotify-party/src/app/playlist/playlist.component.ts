import { Component, OnInit } from '@angular/core';
import FetchWrapper from 'src/Fetch-Wrapper';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
    BackEnd = new FetchWrapper('http://localhost:3000');
    SongsList: { name: string; artist: string[] }[];
    isloaded: boolean = false;
    constructor() {}

    ngOnInit() {
        try {
            fetch('http://localhost:3000' + '/songs', {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    this.SongsList = data;
                    this.isloaded = true;
                    console.log(this.SongsList);
                });
        } catch (error) {
            console.log(error);
        }
    }
}
