import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsPreflightComponent } from './playlists-preflight.component';

describe('PlaylistsPreflightComponent', () => {
  let component: PlaylistsPreflightComponent;
  let fixture: ComponentFixture<PlaylistsPreflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsPreflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsPreflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
