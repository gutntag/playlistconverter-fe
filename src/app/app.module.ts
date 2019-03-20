import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FormsModule } from '@angular/forms';
import { PlaylistsComponent } from './playlists/playlists.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LoginspotifyComponent } from './loginspotify/loginspotify.component';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { MessageService } from './message.service';
import { AuthIntercepter } from './auth.interceptor';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    PlaylistsComponent,
    MessagesComponent,
    LoginspotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccordionModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
      deps: [MessageService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepter,
      multi: true,
      deps: [MessageService, LoginService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
