import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from "../../../core/services/products/products.service"
import { Product } from "./../../../product.model"
import { switchMap, retry } from "rxjs/operators";
import * as Sentry from "@sentry/angular";
import { saveAs } from "file-saver";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    product:Product;
    
    constructor(
        private route:ActivatedRoute,
        private productsService:ProductsService
    ) { 
        
    }

    async ngOnInit() {
        this.route.params.subscribe(async (params:Params)=>{
            const idProduct = params["id"]
            this.fetchProduct(idProduct)
        })
    }
    
    async fetchProduct(idProduct){
        this.product = await this.productsService.getProduct(idProduct).toPromise();
    }
    
    async createProduct(){
        const newProduct:Product={
            id:"222",
            title: "nuevo desde angular",
            image:"assets/images/banner-1.jpg",
            price:3000,
            description:"nuevo producto"
        };
        
        this.productsService.createProduct(newProduct);
    }
    
    updateProduct(){
        const newProduct: Partial<Product> = {
            price:555555,
            description: "new title"
        }
        
        this.productsService.updateProduct('2', newProduct).subscribe((result)=>{
            console.log(result)
        })
    }
    
    deleteProduct(){
        this.productsService.deleteProduct("2").subscribe((result)=>{
            console.log(result)
        })
    }
    
    test(){
        this.productsService.getRandomUsers().subscribe(console.log);
    }
    
    testSubError(){
        this.productsService.getRandomUsersSub().subscribe(
            (result)=>{
                console.log(result)
            },
            (error)=>{
                Sentry.captureException(error);
                console.log("the error is")
                console.log(error) 
            }
        )
    }
    
    getFile(){
        this.productsService.getFile()
        .subscribe(content => {
            console.log(content)
            saveAs(new Blob([content], {type:"text/plain;charset=utf-8"}), "file.txt");
        });
    }
}
