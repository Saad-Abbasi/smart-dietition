import { Component, OnInit } from '@angular/core';
import {DbService} from '../../shared/db.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../../shared/models/user'
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 regForm:FormGroup
 user: User ={
  fName:'',
  lName:'',
  email:'',
  password:''
}
 
  constructor(private dbService:DbService, 
             private http:HttpClient) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });

    // Define object 
    
  }

  registerUser(){
    if(this.regForm.valid){
      
      this.user.fName = this.regForm.get('fName').value;
      this.user.lName = this.regForm.get('lName').value;
      this.user.email = this.regForm.get('email').value;
      this.user.password = this.regForm.get('pass').value;
      this.dbService.registerUser(this.user)
      .then(async (res) => {
        console.log('saved in DB, DB is now', res);
      })
      .catch(e => {
        alert('Email already Exist!')
        console.log('Error: ' + (e.stack || e));
      });;
      this.regForm.reset();
    } 
    else{
      alert('Invalid Form')
      return;
    }
   
    // this.db
    //       .addUser('Abbasi')
    //       .then(this.backgroundSync)
    //       .catch(console.log);
    //     //this.backgroundSync();
  }
  // postSync() {
  //   let obj = {
  //     name: 'Saad',
  //   };
  //   //api call
  //   this.http.post('http://localhost:3000/data', obj).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       this.db
  //         .addUser(obj.name)
  //         .then(this.backgroundSync)
  //         .catch(console.log);
  //       //this.backgroundSync();
  //     }
  //   );
  // }

  // backgroundSync() {
  //   navigator.serviceWorker.ready
  //     .then((swRegistration) => swRegistration.sync.register('post-data'))
  //     .catch(console.log);
  // }

}
