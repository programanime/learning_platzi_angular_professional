import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { map, tap } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    if(this.form.valid){
        this.authService.login(this.form.value.email, this.form.value.password).then(()=>{
            this.router.navigate(["/products"]);
        }).catch(()=>{
            alert("no es valido");
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  
  loginRestApi(){
      this.authService.loginRestApi("nicolas@nicola.com", "123456")
      .subscribe(data=>{
          console.log(data);
      });
  }

}
