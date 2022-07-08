import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormBuilder, FormGroup} from "@angular/forms";
import { ProductsService } from "../../../core/services/products/products.service"
import { Product } from "./../../../product.model"
import { MyValidators } from "./../../../utils/validators"
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
    form:FormGroup;
    id:string;
    
    constructor(
        private formBuilder:FormBuilder,
        private productsService:ProductsService,
        private router:Router,
        private activatedRoute:ActivatedRoute
    ) { 
      this.buildForm();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params:Params)=>{
            const idProduct = params["id"]
            this.id=idProduct
            this.productsService.getProduct(idProduct).subscribe((product)=>{
                this.form.patchValue(product);
            })
        })
    }
    
    private buildForm(){
        this.form = this.formBuilder.group({
            title:new FormControl("", [Validators.required]),
            price:new FormControl(0, [Validators.required, MyValidators.isPriceValid]),
            image:new FormControl(""),
            description:new FormControl("", [Validators.required])
        })
    }
    
    async saveProduct(event:Event){
        event.preventDefault()
        debugger;
        await this.productsService.updateProduct(this.id,this.form.value).toPromise();    
        this.router.navigate(["/products/list"]);
    }
    
    get controlPrice(){
        return this.form.get('price');
    }
}
