import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { Track } from './Track';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


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
    this.messageService.add('PlaylistService: fetched playlists');
    return of(this.playlists);
  }

  getPlaylist(id: number): Observable<Playlist> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(this.playlists.find(playlist => playlist.id === id));
  }

  constructor(private messageService: MessageService) { }
}
