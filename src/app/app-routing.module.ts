import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LoginspotifyComponent } from './loginspotify/loginspotify.component';
import { PlaylistsPreflightComponent } from './playlists-preflight/playlists-preflight.component';

const routes: Routes = [
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'playlist/:id', component: PlaylistComponent},
  {path: 'playlists/preflight', component: PlaylistsPreflightComponent},
  {path: 'spotify_callback', component: LoginspotifyComponent},
  {path: 'login', component: LoginspotifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
