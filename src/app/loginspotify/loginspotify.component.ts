import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';
import { User } from 'src/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loginspotify',
  templateUrl: './loginspotify.component.html',
  styleUrls: ['./loginspotify.component.css']
})
export class LoginspotifyComponent implements OnInit {

  code: string;
  user: User;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private loginService: LoginService,
              private messageService: MessageService) { }

  ngOnInit() {
    const path = this.route.snapshot.url[0].path;
    if(path === 'spotify_callback') {
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

  }

  loginViaSpring(code: string) {
    console.log('loginViaSpring');
    return this.loginService.springBootLogin(code).subscribe( user => this.user = user.body);
  }

}
