import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private loginService: LoginService;

  constructor(private loginServiceParam: LoginService) {
    this.loginService = loginServiceParam;
  }

  checkToken(): boolean {
    return this.loginService.getToken() !== '';
  }

  title = 'Hallo bei playlistapp-fe hehe';
}
