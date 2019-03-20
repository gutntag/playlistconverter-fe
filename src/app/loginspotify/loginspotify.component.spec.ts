import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginspotifyComponent } from './loginspotify.component';

describe('LoginspotifyComponent', () => {
  let component: LoginspotifyComponent;
  let fixture: ComponentFixture<LoginspotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginspotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
