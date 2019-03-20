import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiError } from './api-error';
import { MessageService } from './message.service';
import { Injector } from '@angular/core';

export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(0),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              const errorObj: ApiError = error.error as ApiError;
              if (error.status === 401 && errorObj.action !== '') {
                  if (errorObj.action.startsWith('redirect')) {
                    const redirUrl = errorObj.action.substr(9);
                    console.log('REDIRECT to: ' + redirUrl);
                    this.redirect(redirUrl);
                  }
              }
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            this.messageService.add(errorMessage);
            return throwError(errorMessage);
          })
        );
    }

    redirect(url: string) {
        window.location.href = url;
    }
}
