import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Playlist } from '../playlist';
import { Track } from '../Track';
import { PlaylistsService } from '../playlists.service';
import { Observable } from 'rxjs';
import { PlaylistComponent } from '../playlist/playlist.component';
import { Router } from '@angular/router';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists: Map<string, Playlist> = new Map(); // Map<externalId, Playlist>
  selectedPlaylists: Set<Playlist> = new Set();

  preflightPlaylists() {
    this.wizardService.setSelectedPlaylists(this.selectedPlaylists);
    this.router.navigate(['/playlists/preflight']);
  }

  getPlaylists(): void {
    this.playlistsService.getPlaylists().subscribe(pls => pls.map(pl => this.playlists.set(pl.externalId, pl)));
  }

  selectPlaylist(playlist: Playlist) {
    if (this.selectedPlaylists.has(playlist)) {
      this.selectedPlaylists.delete(playlist);
    } else {
      this.selectedPlaylists.add(playlist);
    }
  }

  loadPlaylistDetails(playlist: Playlist) {
    if (playlist.tracks.length < 1) {
      this.playlistsService.getPlaylist(playlist.externalId).subscribe(
        details => this.playlists.get(details.externalId).tracks = details.tracks
        );
    }
  }

  constructor(private playlistsService: PlaylistsService, private wizardService: WizardService, private router: Router) { }

  ngOnInit() {
    this.getPlaylists();
  }

}
