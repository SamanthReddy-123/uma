import { Observable } from '@nativescript/core';

export class SearchViewModel extends Observable {
    private _categories: any[];

    constructor() {
        super();

        this._categories = [
            { name: "Podcasts", image: "~/images/podcast.jpg" },
            { name: "New Releases", image: "~/images/new.jpg" },
            { name: "Charts", image: "~/images/charts.jpg" },
            { name: "Concerts", image: "~/images/concerts.jpg" },
            { name: "Made for You", image: "~/images/foryou.jpg" },
            { name: "Mood", image: "~/images/mood.jpg" }
        ];

        this.notifyPropertyChange('categories', this._categories);
    }

    get categories(): any[] {
        return this._categories;
    }

    onSearch(args) {
        const searchBar = args.object;
        console.log("Searching for:", searchBar.text);
        // Implement search functionality
    }
}