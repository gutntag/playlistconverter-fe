import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Playlist } from './playlist';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

    private userDataComplete = true;

    private playlistSelectionComplete = false;
    private selectedPlaylists: Set<Playlist> = new Set();

    private playlistsTransferComplete = false;

    public toggleUserDataFlag() {
      if (this.isUserDataComplete) {
        this.userDataComplete = false;
      } else {
        this.userDataComplete = true;
      }
    }
    public isUserDataComplete(): boolean {
      return this.loginService.isLoggedIn();
      // return this.userDataComplete;
    }

    public setPlaylistSelectionComplete(value: boolean) {
      this.playlistSelectionComplete = value;
    }
    public isPlaylistSelectionComplete(): boolean {
      return this.playlistSelectionComplete;
    }
    public setSelectedPlaylists(playlists: Set<Playlist>) {
      this.selectedPlaylists = playlists;
    }
    public getSelectedPlaylists(): Set<Playlist> {
      return this.selectedPlaylists;
    }

    public setPlaylistsTransferComplete(value: boolean) {
      this.playlistsTransferComplete = value;
    }
    public isPlaylistsTransferComplete(): boolean {
      return this.playlistsTransferComplete;
    }

  constructor(private loginService: LoginService) { }
}
