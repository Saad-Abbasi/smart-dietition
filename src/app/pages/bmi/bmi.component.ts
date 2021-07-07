import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

export interface bmi_table {
  category: string;
  bmiRange: string
}
const BMI_DATA: bmi_table[] = [
  {category: 'Very Seriously Underweight', bmiRange: 'Less than 15'},
  {category: 'Seriously Underweight', bmiRange: '15 to 16'},
  {category: 'Underweight', bmiRange: '16 to 18.5'},
  {category: 'Good', bmiRange: '18.5 to 21'},
  {category: 'Perfect', bmiRange: '21 to 25'},
  {category: 'Overweigh', bmiRange: '25 to 30'},
  {category: 'Moderately Obese', bmiRange: '30 to 35'},
  {category: 'Seriously Obese', bmiRange: '35 to 40'},
  {category: 'Very Seriously Obese', bmiRange: 'more than 40'}
];

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
  // Table 
  displayedColumnsBMI: string[] = ['category', 'bmiRange'];

  dataSourceBMI = new MatTableDataSource<bmi_table>(BMI_DATA);
  
 


}

