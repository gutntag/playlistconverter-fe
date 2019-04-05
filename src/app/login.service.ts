import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { User } from 'src/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /**
   * Retrieves access_token from backend and saves it for further requests.
   * Backend retrieves access_token and stores it in the DB for the user
   * @param code oauth2 auth code from spotify
   */
  springBootLogin(code: string): Observable<HttpResponse<User>> {
    const myparams: HttpParams = new HttpParams()
                                .set('code', code);
    return this.httpClient.get<User>('http://localhost:8080/login/spotify/code', {observe: 'response', params: myparams}).pipe(
      tap(resp => this.setToken(resp.body))
      );
  }

  public refreshAccessToken() {
    return this.httpClient.get<User>('http://localhost:8080/login/spotify/refresh', {observe: 'response'}).pipe(
      tap(resp => this.setTokenFromHeader(resp.headers.get('access_token')))
      );
  }

  public setTokenFromHeader(token: string) {
    console.log('Token is being set now: ' + token);
    localStorage.setItem('token', token);
  }

  public setToken(loginResult) {
    console.log('Token is being set now: ' + loginResult.spotifyAccessToken);
    localStorage.setItem('token', loginResult.spotifyAccessToken);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token').length > 0;
  }

  public getUser(): Observable<User> {
    return this.httpClient.get<User>('http://localhost:8080/user');
  }

  /** Log a LoginService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LoginService: ${message}`);
  }

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
}
