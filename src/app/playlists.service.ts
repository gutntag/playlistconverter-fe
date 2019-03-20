import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { Track } from './Track';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {


  tracks: Track[] = [
    new Track('1', 'My live', 'Hans'),
    new Track('2', 'mein block', 'sido'),
    new Track('3', 'Hello', 'world')
  ];

  playlists: Playlist[] = [
    new Playlist(1, 'test 1', this.tracks),
    new Playlist(2, 'Playlist 2', this.tracks)
  ];

  getPlaylists(): Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>('http://localhost:8080/spotify/playlists')
      .pipe(
        tap(_ => this.log('fetched Playlists'))
      );
  }

  getPlaylist(id: string): Observable<Playlist> {
    const url = `http://localhost:8080/spotify/playlist/${id}`;
    console.log(`starting fetching getPlaylist from ${url}`);
    return this.httpClient.get<Playlist>(url)
      .pipe(
        tap(_ => this.log(`fetched playlist id=${id}`))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PlaylistService: ${message}`);
  }

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
}
