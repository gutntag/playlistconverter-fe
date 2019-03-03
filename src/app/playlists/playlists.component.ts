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
export class PlaylistsComponent implements OnInit{

  playlists: Playlist[];
  selectedPlaylist: Playlist;


  getPlaylists(): void {
    this.playlistsService.getPlaylists().subscribe(playlists => this.playlists = playlists);
  }

  onSelect(playlist: Playlist) {
    this.playlistsService.getPlaylist(playlist.externalId).subscribe(details => this.selectedPlaylist = details);
    console.log('Selected playlist: ' + playlist);
  }

  constructor(private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.getPlaylists();
  }

}
