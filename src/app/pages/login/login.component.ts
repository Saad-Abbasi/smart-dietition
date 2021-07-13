import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DbService} from '../../shared/db.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private router: Router,
              private dbService:DbService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });

  }
  login(){
    if(this.loginForm.valid){
      this.dbService.getUser(this.loginForm.get('email').value)
      .then(res=>{
        console.log(res)
        console.log(this.loginForm.value)
        if(res && res.password == this.loginForm.get('pass').value){
          this.router.navigate(['home']);
        }
        else{
          alert('Email or password incorrect')
        }
       
      }),
      (error)=>{
        console.log(error)
      }
   
    }
    
  }
}
