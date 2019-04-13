import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';
import { User } from 'src/User';
import { Observable } from 'rxjs';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-loginspotify',
  templateUrl: './loginspotify.component.html',
  styleUrls: ['./loginspotify.component.css']
})
export class LoginspotifyComponent implements OnInit {

  code: string;
  user: User;
  deezerId: number;
  validDeezerUser = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private loginService: LoginService,
              private messageService: MessageService,
              private wizardService: WizardService) { }

  ngOnInit() {
    const path = this.route.snapshot.url[0].path;
    if (path === 'spotify_callback') {
      this.code = this.route.snapshot.queryParamMap.get('code');

      console.log('code: ' + this.code);
      if (this.code !== '') {
        this.loginViaSpring(this.code);
      } else {
        this.messageService.add('Auth Code is missing!');
      }
    } else if (path === 'login') {
      if (this.loginService.getToken() !== '') {
        this.loginService.getUser().subscribe(user => this.user = user);
      }
    }

    if (this.wizardService.getUserId() !== 0) {
      this.deezerId = this.wizardService.getUserId();
      this.validDeezerUser = true;
    }

  }

  loginViaSpring(code: string) {
    console.log('loginViaSpring');
    return this.loginService.springBootLogin(code).subscribe( user => this.user = user.body);
  }

  checkDeezerId() {
    this.loginService.verifyDeezerUser(this.deezerId).subscribe(
      response => {
        if (response.ok) {
          this.validDeezerUser = true;
          this.wizardService.setUserId(this.deezerId);
          this.router.navigate(['/playlists']);
        } else {
          this.validDeezerUser = false;
        }
      }
    );
  }

}
