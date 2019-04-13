import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../playlist';
import { Track } from '../Track';
import { ActivatedRoute } from '@angular/router';
import { PlaylistsService } from '../playlists.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Input() playlist: Playlist;

  selectedTracks: Map<string, Track> = new Map();

  onSelect(track: Track) {
    if (!this.selectedTracks.has(track.isrc)) {
      this.selectedTracks.set(track.isrc, track);
    } else {
      this.selectedTracks.delete(track.isrc);
    }
  }

  constructor(private route: ActivatedRoute,
              private playlistService: PlaylistsService,
              private location: Location) { }

  ngOnInit() {
    // todo: standalone playlist component by receiving playlist id from path?
    // const id = this.route.snapshot.paramMap.get('id');
    // this.getPlaylist(this.playlist.externalId);
  }

  getPlaylist(id: string): void {
    console.log('PlaylistComponent: getPlaylist called');
    this.playlistService.getPlaylist(id).subscribe(playlist => this.playlist = playlist);
  }

}
