import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  diet: string;
  female: string;
  male: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {diet: 'Carbs', male: '4-6p', female: '7-8p'},
  {diet: 'Protein', male: '2-3p', female: '3p'},
  {diet: 'Fruits', male: '2-3p', female: '2-3p'},
  {diet: 'Fats', male: '2p', female: '2p'},
  {diet: 'Dairy', male: '3p', female: '3p'},
  {diet: 'Vegetables', male: 'As desired', female: 'As desired'}
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
  displayedColumns: string[] = ['diet', 'female', 'male'];
  dataSource = ELEMENT_DATA;

}
