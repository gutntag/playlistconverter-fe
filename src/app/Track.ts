export class Track {
    isrc: string;
    title: string;
    artist: string;

    spotifyId: string;
    deezerId: string;
    spotifyLink: string;
    deezerLink: string;

    provider: string;
    type: string;

    constructor(id: string, title: string, artist: string) {
        this.isrc = id;
        this.title = title;
        this.artist = artist;
    }
}
