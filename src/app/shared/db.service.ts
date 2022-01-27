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
  this.db.version(4).stores({
    user: 'email,password,fName,lName',
    breakFast:'date,carbs,cRatio,protein,pRatio,fat,fRatio,dairy,dRatio,fruit,frRatio',
    mSnacks:'date,diet,ratio,food',
    lunch:'date,carbs,cRatio,protein,pRatio,fat,fRatio,dairy,dRatio,fruit,frRatio',
    eSnacks:'date,diet,ratio,food',
    dinner:'date,carbs,cRatio,protein,pRatio,fat,fRatio,dairy,dRatio,fruit,frRatio'
    
  });
}


// Adding updating data in database 

// Create new user in Db
 registerUser(user: User) {
  return this.db.user.add(user)
}
// Get User 
async getUser(email:string){
  return this.db.user.get({email: email})
}

// Creating breakFast
addBreakfast(breakFast){
  return this.db.breakFast.add({
    date: new Date().getDate(),
    carbs:breakFast.carbs,
    cRatio:breakFast.cRatio,
    protein:breakFast.protein,
    pRatio:breakFast.pRatio,
    fats:breakFast.fats,
    fRatio:breakFast.fRatio,
    dairy:breakFast.dairy,
    dRatio:breakFast.dRatio,
    fruit:breakFast.fruit,
    frRatio:breakFast.frRatio
  })
}
// Update BreakFast
updateBreakfast(key,breakFastData){
  this.db.breakFast.update(key, breakFastData).then(function (updated) {
    if (updated)
      console.log ("BreakFast Record Updated");
    else
      console.log ("Nothing was updated ");
  });
}
// Get breakfast From Db 
async getBreakFast(date){
    return this.db.breakFast.get({date: date})
}

// Creating Morning Snacks
addmSnacks(mSnacks){
  return this.db.mSnacks.add({
    date: new Date().getDate(),
    diet: mSnacks.diet,
    ratio: mSnacks.ratio,
    food: mSnacks.food
  })

}
// Creating Lunch
addlunch(lunch){
  return this.db.lunch.add({
    date: new Date().getDate(),
    carbs:lunch.carbs,
    cRatio:lunch.cRatio,
    protein:lunch.protein,
    pRatio:lunch.pRatio,
    fats:lunch.fats,
    fRatio:lunch.fRatio,
    dairy:lunch.dairy,
    dRatio:lunch.dRatio,
    fruit:lunch.fruit,
    frRatio:lunch.frRatio
  })
}
// Update BreakFast
updateLunch(key,lunchData){
  this.db.lunch.update(key, lunchData).then(function (updated) {
    if (updated)
      console.log ("Lunch Updated Record");
    else
      console.log ("Nothing was updated ");
  });
}
// Get breakfast
async getLunch(date){
    return this.db.lunch.get({date: date})
}


// Update mSnacks
updateMSnacks(key,mSnacksData){
  this.db.mSnacks.update(key, mSnacksData).then(function (updated) {
    if (updated)
      console.log ("Updated mSnacks Record");
    else
      console.log ("Nothing was in mSnacks updated ");
  });
}
// Get mSnacks
async getmSnacks(date){
    return this.db.mSnacks.get({date: date})
}




// Creating Evening Snacks
addeSnacks(eSnacks){
  
  return this.db.eSnacks.add({
    date: new Date().getDate(),
    diet: eSnacks.diet,
    ratio: eSnacks.ratio,
    food: eSnacks.food
  })
}

// update Evingin snacks

updateESnacks(key,eSnacks){
  this.db.eSnacks.update(key, eSnacks).then(function (updated) {
    if (updated)
      console.log ("Updated Record");
    else
      console.log ("Nothing was updated ");
  });
}

//get Esnacks
async geteSnacks(date){
  return this.db.eSnacks.get({date: date})
}

// Creating Dinner
addDinner(dinner){
  return this.db.dinner.add({
    date: new Date().getDate(),
    carbs:dinner.carbs,
    cRatio:dinner.cRatio,
    protein:dinner.protein,
    pRatio:dinner.pRatio,
    fats:dinner.fats,
    fRatio:dinner.fRatio,
    dairy:dinner.dairy,
    dRatio:dinner.dRatio,
    fruit:dinner.fruit,
    frRatio:dinner.frRatio
  })
}
// Update Dinner
updateDinner(key,dinnerData){
  this.db.dinner.update(key, dinnerData).then(function (updated) {
    if (updated)
      console.log ("Dinner Updated Record");
    else
      console.log ("Nothing was updated ");
  });
}
// Get Dinner
async getDinner(date){
    return this.db.dinner.get({date: date})
}




}
