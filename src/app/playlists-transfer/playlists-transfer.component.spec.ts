import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsTransferComponent } from './playlists-transfer.component';

describe('PlaylistsTransferComponent', () => {
  let component: PlaylistsTransferComponent;
  let fixture: ComponentFixture<PlaylistsTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
