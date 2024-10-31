import { Observable } from '@nativescript/core';

export class HomeViewModel extends Observable {
    private _recommendations: any[];
    private _currentTrack: any;

    constructor() {
        super();

        this._recommendations = [
            { name: "Blinding Lights", artist: "The Weeknd", image: "~/images/song1.jpg" },
            { name: "Stay", artist: "Kid Laroi & Justin Bieber", image: "~/images/song2.jpg" },
            { name: "Good 4 U", artist: "Olivia Rodrigo", image: "~/images/song3.jpg" },
            { name: "Levitating", artist: "Dua Lipa", image: "~/images/song4.jpg" }
        ];

        this._currentTrack = {
            name: "Blinding Lights",
            artist: "The Weeknd",
            image: "~/images/song1.jpg",
            isPlaying: false
        };

        this.notifyPropertyChange('recommendations', this._recommendations);
        this.notifyPropertyChange('currentTrack', this._currentTrack);
    }

    get recommendations(): any[] {
        return this._recommendations;
    }

    get currentTrack(): any {
        return this._currentTrack;
    }

    onPlaylistTap() {
        console.log("Playlist tapped");
        // Navigate to playlist detail page
    }

    onPlayPause() {
        this._currentTrack.isPlaying = !this._currentTrack.isPlaying;
        this.notifyPropertyChange('currentTrack', this._currentTrack);
    }
}