import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.scss']
})
export class BmrComponent implements OnInit {
  bmrForm:FormGroup;
  BMI;
  BMR
  weightReport;
  durationInSeconds = 5;
  constructor() { }

  ngOnInit(): void {
    this.bmrForm = new FormGroup({
      age: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
    });
    }

  calculate(){
    if(this.bmrForm.valid){

      // weight (kg) / [height (m)]2
    let age =  this.bmrForm.get('age').value;
    let gender =  this.bmrForm.get('gender').value;
    let weight =  this.bmrForm.get('weight').value;
    let height = this.bmrForm.get('height').value ;

    if (gender == 'male') {
      this.BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      this.BMR = this.BMR.toFixed(2);
    } else if (gender == 'female') {
  
      this.BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      this.BMR = this.BMR.toFixed(2);
    }
    
}
}
}