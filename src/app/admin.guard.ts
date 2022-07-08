import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import {AuthService} from "./core/services/auth/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    isLogged:Observable<any>;
    
    constructor(private authService:AuthService, private router:Router){
        this.isLogged = this.authService.hasUser()
        .pipe(
            tap(user=>console.log(user)),
            map((user)=> user=== null ? router.navigate(["/auth/login"]): true));
    }
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.isLogged;    
    }

}
