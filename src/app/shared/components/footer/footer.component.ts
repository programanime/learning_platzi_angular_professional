import {FormControl, Validators} from "@angular/forms";

import { 
    Component,
    OnDestroy,
    Input,
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    SimpleChanges,
    DoCheck 
} from '@angular/core';

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements 
    OnChanges,
    AfterContentChecked,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    OnInit
{
    emailField: FormControl;
    
    @Input() title;
    @Input() name;
    
    constructor(){
        this.emailField=new FormControl('dmo',
            [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(11),
            ]
        );
        this.emailField.valueChanges.subscribe(value=>{
            console.log(value);
        })
    }
    
    ngOnChanges(changes:SimpleChanges){
        console.log("title in ngOnChanges "+this.title)
        console.log("2.footer-ngOnChanges")
        console.log(changes)
    }
    
    ngOnInit(){
        console.log("title in ngOnInit "+this.title)
        console.log("3.footer-ngOnInit")
        
        setTimeout(()=>{
            this.title="daniel";
        }, 5000);
    }
    
    
    ngAfterContentInit(){}
    ngAfterContentChecked(){}
    ngAfterViewInit(){}
    ngAfterViewChecked(){}
    ngOnDestroy(){}
    
    sendMail(){
        if(this.emailField.valid){
            console.log(this.emailField.value)
        }
    }
}

