export class Track {
    isrc: string;
    title: string;
    author: string;

    constructor(id: string, title: string, author: string) {
        this.isrc = id;
        this.title = title;
        this.author = author;
    }
}
