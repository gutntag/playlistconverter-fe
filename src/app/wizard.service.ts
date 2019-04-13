import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Playlist } from './playlist';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

    private userDataComplete = false;
    private deezerUserId = 0;

    private playlistSelectionComplete = false;
    private selectedPlaylists: Set<Playlist> = new Set();

    private playlistsTransferComplete = false;
    private transferPlaylists: Set<Playlist> = new Set();

    public isUserDataComplete(): boolean {
      return this.userDataComplete && this.loginService.isLoggedIn();
    }
    public setUserId(deezerUserId: number) {
      this.deezerUserId = deezerUserId;
      this.userDataComplete = true;
    }
    public getUserId() {
      return this.deezerUserId;
    }

    public setPlaylistSelectionComplete(value: boolean) {
      this.playlistSelectionComplete = value;
    }
    public isPlaylistSelectionComplete(): boolean {
      return this.playlistSelectionComplete;
    }
    public setSelectedPlaylists(playlists: Set<Playlist>) {
      this.selectedPlaylists = playlists;
      this.setPlaylistSelectionComplete(true);
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
    public setTransferPlaylists(playlists: Set<Playlist>) {
      this.transferPlaylists = playlists;
      this.setPlaylistsTransferComplete(true);
    }
    public getTransferPlaylists(): Set<Playlist> {
      return this.transferPlaylists;
    }

  constructor(private loginService: LoginService) { }
}
