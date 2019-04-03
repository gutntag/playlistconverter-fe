import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private loginService: LoginService;
  title = 'Transfer your playlists from Deezer to Spotify!';

  constructor(private loginServiceParam: LoginService) {
    this.loginService = loginServiceParam;
  }

  checkToken(): boolean {
    return this.loginService.getToken() !== '';
  }

}
