import { Observable } from '@nativescript/core';

export class LibraryViewModel extends Observable {
    private _playlists: any[];

    constructor() {
        super();

        this._playlists = [
            { 
                name: "Liked Songs",
                type: "Playlist",
                image: "~/images/liked.jpg",
                songCount: 125
            },
            {
                name: "Daily Mix 1",
                type: "Made for you",
                image: "~/images/mix1.jpg",
                songCount: 50
            },
            {
                name: "Workout Mix",
                type: "Playlist",
                image: "~/images/workout.jpg",
                songCount: 32
            },
            {
                name: "Chill Vibes",
                type: "Playlist",
                image: "~/images/chill.jpg",
                songCount: 45
            }
        ];

        this.notifyPropertyChange('playlists', this._playlists);
    }

    get playlists(): any[] {
        return this._playlists;
    }

    onCreatePlaylist() {
        console.log("Creating new playlist");
        // Implement playlist creation
    }
}