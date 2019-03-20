import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
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

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
        // throw new Error("Method not implemented.");
    }

}