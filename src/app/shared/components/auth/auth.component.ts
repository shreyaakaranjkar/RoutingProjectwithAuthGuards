import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  allReadyHaveAccount : boolean = true;
  loginForm ! : FormGroup;
  signUpForm! : FormGroup;
  
  constructor(private _authService : AuthService,
    private _router : Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.crateSignUpForm();
  }


  createLoginForm(){
    this.loginForm = new FormGroup({
     email : new FormControl(null,[Validators.required]),
     password : new FormControl(null,[Validators.required]),
    })
  }
  
  crateSignUpForm(){
    this.signUpForm = new FormGroup({
      fullName : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      contactNo : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required]),
      confirmPassword: new FormControl(null,[Validators.required]),
    })
  }

  onLogIn(){
    if(this.loginForm.valid){
    let obj = this.loginForm.value
    console.log(obj);
    this._authService.logIn(obj);
    this._router.navigate(['Home'])
   }  
   else{
    alert('Please Enter Valid Details to login!')
   }
  }
  onSignUp(){
    this._router.navigate(['Home'])
  }

}
