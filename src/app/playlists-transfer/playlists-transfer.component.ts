import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';
import { Playlist } from '../playlist';
import { PlaylistsService } from '../playlists.service';

@Component({
  selector: 'app-playlists-transfer',
  templateUrl: './playlists-transfer.component.html',
  styleUrls: ['./playlists-transfer.component.css']
})
export class PlaylistsTransferComponent implements OnInit {

  private transferPlaylists: Set<Playlist> = new Set();
  public successFullyTransferedPlaylists: Set<Playlist> = new Set();


  constructor(private wizardService: WizardService, private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.transferPlaylists = this.wizardService.getTransferPlaylists();
    const firstPlaylist: Playlist = this.transferPlaylists.values().next().value;
    this.playlistsService.addPlaylist(firstPlaylist).subscribe(
      result => {
        if (result.ok) { this.successFullyTransferedPlaylists.add(result.body); }
      }
    );
  }

}
