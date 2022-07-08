import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpEvent,HttpHandler } from '@angular/common/http';
import {Observable} from "rxjs";
import {TokenService} from "@core/services/token/token.service"

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private tokenService:TokenService) { 
      
  }
  
  intercept(request:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
      request = this.addToken(request);
      return next.handle(request);
  }
  
  private addToken(request){
       const token=this.tokenService.getToken();
    //  const token="123";
      
      if(true){
          request = request.clone({setHeaders:{token:token}});
      }
      return request;
  }
}
