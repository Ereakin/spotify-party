import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
    isloaded = false;
    hasVoted = false;
    hasVotedfor: string[] = [];
    SongsList: {
        name: string;
        artist: string[];
        uri: string;
        votes: number;
        hasVoted: boolean;
    }[];
    constructor(private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.GetVotes();
    }
    GetVotes(): void {
        try {
            fetch('http://localhost:3000' + '/vote', {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    this.SongsList = data;
                    this.isloaded = true;
                    console.log(data);
                });
        } catch (error) {
            console.log(error);
        }
    }
    Vote(name: string, artist: string[], uri: string) {
        fetch('http://localhost:3000' + '/vote', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, artist: artist, uri: uri }),
        }).then((response) => {
            this.GetVotes();
        });
    }

    openSnackBar() {
        this._snackBar.open('Thank you for your vote!', 'Party!', {
            duration: 2000,
        });
    }
    //Fix this: One Button should be disabled longer than the other
    disable(position) {
        this.openSnackBar();
        this.SongsList[position].hasVoted = true;
        this.hasVoted = true;
        console.log(this.SongsList[position].hasVoted);
        setTimeout(() => {
            this.hasVoted = false;
        }, 1000);
        setTimeout(() => {
            this.SongsList[position].hasVoted = false;
            console.log(this.SongsList[position].hasVoted);
        }, 10000);
    }
}
