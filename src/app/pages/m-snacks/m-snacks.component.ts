import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DbService } from 'src/app/shared/db.service';

export interface snacks {
  diet: string;
  ratio:string;
  food:string;
}
const SNACKS_DATA: snacks[] = [
  {diet: 'carbs', ratio: '1',food:'2 breads'},
  {diet: 'protein', ratio: '0.5',food:'2 breads'},
  {diet: 'fat', ratio: '1',food:'1 chocolates'},
  {diet: 'dairy', ratio: '1',food:'200ml milk'},
  {diet: 'fruit', ratio: '1',food:'79g mango'}
];
@Component({
  selector: 'app-m-snacks',
  templateUrl: './m-snacks.component.html',
  styleUrls: ['./m-snacks.component.scss']
})
export class MSnacksComponent implements OnInit {
  selectedIndex;
  snacksData:snacks = {
    diet:'',
    ratio:'',
    food:'',
  }
  constructor(private dbService: DbService) { }

  ngOnInit(): void {
  }
  displayedColumnsSnacks: string[] = ['diet', 'ratio','food','select'];

  
  dataSourceSnacks = new MatTableDataSource<snacks>(SNACKS_DATA);
  

  snacksDiet(row,index){
    console.log(row.diet)
    this.selectedIndex = index;
    
        this.snacksData.diet =  row.diet;
        this.snacksData.food = row.food;
        this.snacksData.ratio = row.ratio;
        this.dbService.addmSnacks(this.snacksData)
        .then(async (res) => {
          console.log('saved mSnacks in DB, DB is now', res);
        })
        .catch(e => {
          let keyDate = new Date().getDate();
          // alert(' Already Exist!')
          // console.log('Error: ' + (e.stack || e));
          this.dbService.updateMSnacks(keyDate,row)
        });;
        
      }

}
