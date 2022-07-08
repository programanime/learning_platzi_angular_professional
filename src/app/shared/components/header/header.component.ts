import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from "../../../core/services/cart/cart.service"
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthService } from './../../../core/services/auth/auth.service';
import { Router } from "@angular/router";


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges{
    total = 0;
    counter = 0;
    counter$:Observable<number>;
    @Input() title;
    
    constructor(private router:Router,private cartService:CartService, private authService:AuthService){
        this.counter$ = this.cartService.cart$.pipe(map(products => products.length));
        
        this.cartService.cart$.pipe(map(products => products.length)).subscribe(counter => {
            this.counter=counter;
        })
        
        this.cartService.cart$.subscribe(products => {
            this.total=products.length;
        })
    }
    
    ngOnChanges(changes:SimpleChanges){
        console.log("2.ngOnChanges")
        console.log(changes)
    }
    
    ngOnInit(){
        console.log("3.ngOnInit")
    }
    
    logout(){
        this.authService.logout().then(()=>{
            this.router.navigate(["/auth/login"]);
        });
    }
}

