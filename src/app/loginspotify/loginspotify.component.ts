import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginspotify',
  templateUrl: './loginspotify.component.html',
  styleUrls: ['./loginspotify.component.css']
})
export class LoginspotifyComponent implements OnInit {

  test: string;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private loginService: LoginService) { }

  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code');
    console.log('code: ' + code);
    if (code !== '') {
      this.loginViaSpring(code);
    }
  }

  loginViaSpring(code: string) {
    console.log('loginViaSpring');
    this.loginService.springBootLogin(code).subscribe(resp => this.test = resp.headers.get('Set-Cookie'));
  }

  loginViaSpotify(code: string) {
    this.loginService.spotifyLogin(code);
  }

}
