import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { Track } from './Track';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  addPlaylistsPreflight(playlists: Playlist[]): Observable<Playlist[]> {
    console.log('checking deezer playlists against spotify tracks... ' + playlists);
    return this.httpClient.post<Playlist[]>('http://localhost:8080/spotify/playlists/preflight', playlists).pipe(
      tap(_ => this.log('checked spotify playlists: ' + playlists))
    );
  }

  addPlaylists(playlists: Playlist[]): Observable<HttpResponse<Playlist[]>> {
    console.log('adding playlist... ' + playlists);
    return this.httpClient.post<Playlist[]>('http://localhost:8080/spotify/playlist', playlists, {observe: 'response'}).pipe(
      tap(_ => this.log('created spotify playlist: ' + playlists))
    );
  }

  getPlaylists(): Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>('http://localhost:8080/deezer/playlists')
      .pipe(
        tap(_ => this.log('fetched Playlists'))
      );
  }

  getPlaylist(id: string): Observable<Playlist> {
    const url = `http://localhost:8080/deezer/playlist/${id}`;
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
