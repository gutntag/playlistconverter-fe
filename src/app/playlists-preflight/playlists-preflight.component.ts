import { Component, OnInit, Input } from '@angular/core';
import { WizardService } from '../wizard.service';
import { Playlist } from '../playlist';
import { PlaylistsService } from '../playlists.service';

@Component({
  selector: 'app-playlists-preflight',
  templateUrl: './playlists-preflight.component.html',
  styleUrls: ['./playlists-preflight.component.css']
})
export class PlaylistsPreflightComponent implements OnInit {

  playlists: Set<Playlist> = new Set();
  preflightedPlaylist: Playlist;

  constructor(private wizardService: WizardService, private playlistsService: PlaylistsService) { }

  ngOnInit() {
    console.log('initing preflight...');
    this.playlists = this.wizardService.getSelectedPlaylists();
    const firstPlaylist: Playlist = this.playlists.values().next().value;

    this.playlistsService.addPlaylistPreflight(firstPlaylist).subscribe(
      result => {
        this.preflightedPlaylist = result;
        console.log('received shit');
        //this.playlists.get(String(result.externalId)).tracks = result.tracks;
      }
    );
  }

}
