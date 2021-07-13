import { Injectable } from '@angular/core';
import {User} from '../shared/models/user';
import Dexie from 'dexie';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  // private db: IDBPDatabase<MyDB>;
  private db: any;
  constructor() {
    this.createDatabase()
    // this.connectToDb();
  }
// Create database 
private createDatabase() {
  this.db = new Dexie('dietDb');
  this.db.version(1).stores({
    user: 'email,password,fName,lName'
  });
}



 registerUser(user: User) {
  return this.db.user.add(user)
    
}

async getUser(email:string){


 return this.db.user.get({email: email})
//  .then(async (result) => {
//   console.log('Found in DB, DB is now', result);
// })
// .catch(e => {
//   alert('Error: ' + (e.stack || e));
// });

  // this.db.user
  // .add(user)
  // .then(async () => {
  //   const allItems: User = await this.db.user.toArray();
  //   console.log('saved in DB, DB is now', allItems);
  // })
  // .catch(e => {
  //   alert('Error: ' + (e.stack || e));
  // });
    
}
  // async connectToDb() {
  //   this.db = await openDB<MyDB>('my-db', 1, {
  //     upgrade(db) {
  //       db.createObjectStore('user-store');
  //     },
  //   });
  // }

//   addUser(user: User) {
    
//     console.log('funtion called')
//     return this.db.put('user-store',user)
    
//   }

//   deleteUser(key: string) {
//     return this.db.delete('user-store', key);
//   }
// }

// interface MyDB extends DBSchema {
//   'user-store': {
//     key: string;
//     value: string;
//   };
}
