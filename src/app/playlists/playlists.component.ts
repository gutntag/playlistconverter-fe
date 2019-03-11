import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Playlist } from '../playlist';
import { Track } from '../Track';
import { PlaylistsService } from '../playlists.service';
import { Observable } from 'rxjs';
import { PlaylistComponent } from '../playlist/playlist.component';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists: Map<string, Playlist> = new Map(); // map von playlists und dann onClick updated das element der map mit details?
  selectedPlaylist: Playlist;


  getPlaylists(): void {
    this.playlistsService.getPlaylists().subscribe(pls => pls.map(pl => this.playlists.set(pl.externalId, pl)));
  }

  onSelect(playlist: Playlist) {
    if(playlist.tracks.length < 1) {
      this.playlistsService.getPlaylist(playlist.externalId).subscribe(
        details => this.playlists.get(details.externalId).tracks = details.tracks
        );
      console.log('Selected playlist: ' + playlist.title);
    }
  }

  constructor(private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.getPlaylists();
  }

}
