import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { MessageService } from './message.service';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {

    constructor(private messageService: MessageService, private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.loginService.getToken();
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set('access_token', token)
            });

            return next.handle(cloned).pipe(
                resEvent => {
                    console.log('test123');
                    if (resEvent instanceof HttpResponse){
                        console.log('checking...');
                        const access_token = resEvent.headers.get('access_token');
                        if (access_token !== '' && access_token !== 'null' && access_token !== null){
                            this.loginService.setToken(access_token);
                            console.log('changing token...');
                        }
                    }
                    return resEvent;
                }
            );
        } else {
            return next.handle(req);
        }
        // throw new Error("Method not implemented.");
    }

}