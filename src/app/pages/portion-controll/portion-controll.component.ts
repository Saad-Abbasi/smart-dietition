import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  diet: string;
  male: string
}
export interface fixDiet2 {
  diet: string;
 bF: string;
  lunch:string;
  dinner:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {diet: 'Carbs', male: '4-6p'},
  {diet: 'Protein', male: '2-3p'},
  {diet: 'Fruits', male: '1-2p'},
  {diet: 'Fats', male: '2-3p'},
  {diet: 'Dairy', male: '2-3p'},
  {diet: 'Vegetables', male: 'Unlimited'}
];

const fixDietData: fixDiet2[] = [
  {diet: 'Carbs', bF: '2p', lunch: '2p',dinner: '2p',},
  {diet: 'Protein', bF: '1p',lunch: '1p',dinner: '1p'},
  {diet: 'Fruits', bF: '1p',lunch: '1p',dinner: '1p'},
  {diet: 'Fats', bF: '1p',lunch: '1p',dinner: '1p'},
  {diet: 'Dairy', bF: '1p',lunch: '1p',dinner: '1p'},
  {diet: 'Vegetables', bF: 'Unlimited',lunch:'Unlimited',dinner:'Unlimited'}
];

@Component({
  selector: 'app-portion-controll',
  templateUrl: './portion-controll.component.html',
  styleUrls: ['./portion-controll.component.scss']
})
export class PortionControllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['diet',  'male'];
  dataSource = ELEMENT_DATA;

  displayedDiet2: string[] = ['diet','bF','lunch','dinner'];
  dataSource2 = fixDietData;
}
