import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LoginspotifyComponent } from './loginspotify/loginspotify.component';
import { PlaylistsPreflightComponent } from './playlists-preflight/playlists-preflight.component';
import { PlaylistsTransferComponent } from './playlists-transfer/playlists-transfer.component';

const routes: Routes = [
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'playlist/:id', component: PlaylistComponent},
  {path: 'playlists/preflight', component: PlaylistsPreflightComponent},
  {path: 'playlists/transfer', component: PlaylistsTransferComponent},
  {path: 'spotify_callback', component: LoginspotifyComponent},
  {path: 'login', component: LoginspotifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
