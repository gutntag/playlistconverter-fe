import { Component, OnInit, Input } from '@angular/core';
import { WizardService } from '../wizard.service';
import { Playlist } from '../playlist';
import { PlaylistsService } from '../playlists.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists-preflight',
  templateUrl: './playlists-preflight.component.html',
  styleUrls: ['./playlists-preflight.component.css']
})
export class PlaylistsPreflightComponent implements OnInit {

  playlists: Set<Playlist> = new Set();
  preflightedPlaylists: Set<Playlist> = new Set();

  constructor(
    private wizardService: WizardService,
    private playlistsService: PlaylistsService,
    private router: Router) { }

  ngOnInit() {
    this.playlists = this.wizardService.getSelectedPlaylists();

    this.playlistsService.addPlaylistsPreflight(Array.from(this.playlists)).subscribe(
      result => {
        this.preflightedPlaylists = new Set(result);
      }
    );
  }

  transferPlaylists() {
    this.wizardService.setTransferPlaylists(this.preflightedPlaylists);
    this.router.navigate(['/playlists/transfer']);
  }

}
