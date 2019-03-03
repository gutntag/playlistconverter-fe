import { Track } from './Track';
export class Playlist {
    id: number;
    title: string;
    description: string;

    link: string;
    creator: string;

    tracks: Track[];

    deezerId: string;
    spotifyId: string;
    externalId: string;
    provider: string;
    type: string;

    constructor(id: number, title: string, tracks: Track[]) {
        this.id = id;
        this.title = title;
        this.tracks = tracks;
    }
  }
