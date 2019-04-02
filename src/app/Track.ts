export class Track {
    isrc: string;
    title: string;
    artist: string;

    externalId: string;
    link: string;

    provider: string;

    constructor(id: string, title: string, artist: string) {
        this.isrc = id;
        this.title = title;
        this.artist = artist;
    }
}
