import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormBuilder, FormGroup} from "@angular/forms";
import { ProductsService } from "../../../core/services/products/products.service"
import { Product } from "./../../../product.model"
import { MyValidators } from "./../../../utils/validators"
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
    form:FormGroup;
    image:string;
    
    constructor(
        private formBuilder:FormBuilder,
        private productsService:ProductsService,
        private router:Router,
        private angularFireStorage:AngularFireStorage
    ) { 
      this.buildForm();
    }

    ngOnInit(): void {
        
    }
    
    private buildForm(){
        this.form = this.formBuilder.group({
            id:new FormControl("", [Validators.required]),
            title:new FormControl("", [Validators.required]),
            price:new FormControl(0, [Validators.required, MyValidators.isPriceValid]),
            image:new FormControl(""),
            description:new FormControl("", [Validators.required])
        })
    }
    
    async saveProduct(event:Event){
        event.preventDefault()
        debugger;
        await this.productsService.createProduct({...this.form.value, image:this.image}).toPromise();    
        this.router.navigate(["/products/list"]);
    }
    
    uploadFile(event){
        const file = event.target.files[0];
        const dir = file.name;
        const fileRef = this.angularFireStorage.ref(dir);
        const task = this.angularFireStorage.upload(dir, file);
        
        task.snapshotChanges().pipe(finalize(()=>{
            fileRef.getDownloadURL().subscribe((url)=>{
                this.image=url;
                
            });
        })).subscribe();
    }
    
    get controlPrice(){
        return this.form.get('price');
    }
}
