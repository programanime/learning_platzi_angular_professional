import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  
  saveToken(token:string){
      localStorage["token"]=token;
  }
  
  getToken(){
      return localStorage["token"] || "123";
  }
}
