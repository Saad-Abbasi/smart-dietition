import { Component, OnInit } from '@angular/core';
import {DbService } from '../../shared/db.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 ;

  constructor(private db:DbService, 
             private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  postSync() {
    let obj = {
      name: 'Saad',
    };
    //api call
    this.http.post('http://localhost:3000/data', obj).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.db
          .addUser(obj.name)
          .then(this.backgroundSync)
          .catch(console.log);
        //this.backgroundSync();
      }
    );
  }

  backgroundSync() {
    navigator.serviceWorker.ready
      .then((swRegistration) => swRegistration.sync.register('post-data'))
      .catch(console.log);
  }

}
