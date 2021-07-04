import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BMIComponent implements OnInit {
  bmiForm:FormGroup;
  BMI;
  weightReport;
  durationInSeconds = 5;
  constructor(private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.bmiForm = new FormGroup({
      height: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
    });
  }
  calculate(){
    if(this.bmiForm.valid){

      // weight (kg) / [height (m)]2
    let weight =  this.bmiForm.get('weight').value;
    let height = this.bmiForm.get('height').value ;
    height /= 39.3700787;
    this.BMI = weight/Math.pow(height,2);
    this.BMI = this.BMI.toFixed(2);

     if (this.BMI < 18.5) this.weightReport=  "Underweight";
     if (this.BMI >= 18.5 && this.BMI <= 25) this.weightReport = "Normal";
     if (this.BMI >= 25 && this.BMI <= 30) this.weightReport= "Obese";
     if (this.BMI > 30) this.weightReport= "Overweight"; 
      console.log('Your Bmi is',this.BMI , this.weightReport)
     
    }
    
    
  }
  
 


}

