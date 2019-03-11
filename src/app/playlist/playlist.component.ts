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
  /* {
    id: 1,
    title: 'Erste Playlist',
    description: 'Test descr2.',
    tracks: [
      new Track('1', 'My live', 'Hans'),
      new Track('2', 'mein block', 'sido'),
      new Track('3', 'Hello', 'world')
    ]
  }; */

  selectedTracks: Map<string, Track> = new Map();

  onSelect(track: Track) {
    if(!this.selectedTracks.has(track.isrc)){
      this.selectedTracks.set(track.isrc, track);
    }
    console.log('Selected track: ' + track);
  }

  constructor(private route: ActivatedRoute,
              private playlistService: PlaylistsService,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // this.getPlaylist(this.playlist.externalId);
  }

  getPlaylist(id: string): void {
    console.log('PlaylistComponent: getPlaylist called');
    this.playlistService.getPlaylist(id).subscribe(playlist => this.playlist = playlist);
  }

  goBack(): void {
    this.location.back();
  }

}
