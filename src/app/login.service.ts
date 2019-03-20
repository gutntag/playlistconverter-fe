import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /**
   * Retrieves token from backend. Backend retrieves access_token,
   * connects it to a new spring session and stores it in memory
   * @param code auth_code
   */
  spotifyLogin(code: string): Observable<string> {
    return this.httpClient.get<string>('http://localhost:8080/spotify_login')
    .pipe(
      tap(_ => this.log('logged in with code' + code))
    );
  }

  springBootLogin(code: string): Observable<HttpResponse<Object>> {
    console.log('JAP');
    const myparams: HttpParams = new HttpParams()
                                .set('code', code);
    return this.httpClient.get('http://localhost:8080/login/spotify/code', {observe: 'response', params: myparams}).pipe(
      tap(resp => this.setToken(resp.body))
      );
  }

  private setToken(loginResult) {
    console.log('Token is being set now: ' + loginResult.spotifyAccessToken);
    localStorage.setItem('token', loginResult.spotifyAccessToken);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  /** Log a LoginService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LoginService: ${message}`);
  }

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
}
