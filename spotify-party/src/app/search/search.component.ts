import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import QueryString = require('qs');

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    SongsList: { name: string; artist: string[]; uri: string }[] = [];
    isloaded = false;
    hasSearched = false;
    constructor(private _snackBar: MatSnackBar) {}

    ngOnInit(): void {}

    Search(searchstring: string) {
        fetch(
            'http://localhost:3000' +
                '/search?' +
                QueryString.stringify(
                    {
                        q: searchstring,
                    },
                    { encode: false }
                ),
            {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                this.SongsList = data;
                this.isloaded = true;
                this.hasSearched = true;
            });
        //this.SongsList = data von API;
        //return SongsList;
    }

    Suggest(name: string, artist: string[], uri: string) {
        fetch('http://localhost:3000' + '/vote', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, artist: artist, uri: uri }),
        }).then((response) => {
            this.SongsList = [];
            this.isloaded = false;
            this.hasSearched = false;
        });
    }

    openSnackBar() {
        this._snackBar.open('Thank you for your Suggestion!', 'Party!', {
            duration: 2000,
        });
    }
}
