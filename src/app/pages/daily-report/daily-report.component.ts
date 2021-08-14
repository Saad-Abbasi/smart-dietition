import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {DbService} from '../../shared/db.service'

export interface dailyReport {
  dietTime:string
  carbs: number;
  proteins: number;
  dairy:number;
  fats:number;
  fruits:number;
  total:number;
}

const REPORT_DATA: dailyReport[] = [
  {dietTime: 'Breakfast', carbs: 0,proteins:0,dairy:0,fats:0,fruits:0,total:0},
  {dietTime: 'M Snacks', carbs: 0,proteins:0,dairy:0,fats:0,fruits:0,total:0},
  {dietTime: 'lunch',carbs: 0,proteins:0,dairy:0,fats:0,fruits:0,total:0},
  {dietTime: 'E Snacks',carbs: 0,proteins:0,dairy:0,fats:0,fruits:0,total:0},
  {dietTime: 'Dinner', carbs: 0,proteins:0,dairy:0,fats:0,fruits:0,total:0}
 
]

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {
today = new Date().getDate()
  constructor(private dbService:DbService) { }

  ngOnInit(): void {
    this.getBreakFast(this.today);
    this.getMSnacks(this.today);
    this.getLunch(this.today);
    this.getESnacks(this.today);
    this.getDinner(this.today);
   }

getBreakFast(today){
  this.dbService.getBreakFast(today)
  .then(res=>{
    if(res){
      console.log('Breakfast data is ', res)
      REPORT_DATA[0].carbs = res.carbs;
      REPORT_DATA[0].dairy = res.dairy;
      REPORT_DATA[0].proteins = res.protein;
      REPORT_DATA[0].fats = res.fats;
      REPORT_DATA[0].fruits= res.fruit;
      // Uniray Plust to make total because our data come in string.
      REPORT_DATA[0].total =  + REPORT_DATA[0].carbs + +REPORT_DATA[0].dairy + +REPORT_DATA[0].proteins + +REPORT_DATA[0].fats +  +REPORT_DATA[0].fruits
      
    }
    else{
      console.log('No data for today', this.today)
    }
  })
}
getMSnacks(today){
  this.dbService.getmSnacks(today)
  .then(res=>{
    if(res){
      console.log('Msnacks data is ', res)
      if(res.diet=="fruit"){
        REPORT_DATA[1].fruits= res.ratio;
      }
      else if(res.diet = 'carbs'){
        REPORT_DATA[1].carbs = res.ratio;
      }
      else if (res.diet == 'dairy'){
        REPORT_DATA[1].dairy = res.ratio;
      }
      else if(res.diet == 'proteins'){
        REPORT_DATA[1].proteins = res.ratio;
      }
      else if(res.diet == 'fats'){
        REPORT_DATA[1].fats = res.ratio;
      }
      
      
      // Uniray Plust to make total because our data come in string.
      REPORT_DATA[1].total =  + REPORT_DATA[1].carbs + +REPORT_DATA[1].dairy + +REPORT_DATA[1].proteins + +REPORT_DATA[1].fats +  +REPORT_DATA[1].fruits
      
    }
    else{
      console.log('No data for today', this.today)
    }
  })
}
getLunch(today){

  this.dbService.getLunch(today)
  .then(res=>{
    if(res){
      console.log('Lunch data is ', res)
      REPORT_DATA[2].carbs = res.carbs;
      REPORT_DATA[2].dairy = res.dairy;
      REPORT_DATA[2].proteins = res.protein;
      REPORT_DATA[2].fats = res.fats;
      REPORT_DATA[2].fruits= res.fruit;
      // Uniray Plust to make total because our data come in string.
      REPORT_DATA[2].total =  + REPORT_DATA[2].carbs + +REPORT_DATA[2].dairy + +REPORT_DATA[2].proteins + +REPORT_DATA[2].fats +  +REPORT_DATA[2].fruits
      
    }
    else{
      console.log('No data for today', this.today)
    }
  })


}
getESnacks(today){
  this.dbService.geteSnacks(today)
  .then(res=>{
    if(res){
      console.log('Esnacks data is ', res)
      if(res.diet=="fruit"){
        REPORT_DATA[3].fruits= res.ratio;
      }
      else if(res.diet = 'carbs'){
        REPORT_DATA[3].carbs = res.ratio;
      }
      else if (res.diet == 'dairy'){
        REPORT_DATA[3].dairy = res.ratio;
      }
      else if(res.diet == 'proteins'){
        REPORT_DATA[3].proteins = res.ratio;
      }
      else if(res.diet == 'fats'){
        REPORT_DATA[3].fats = res.ratio;
      }
      
      
      // Uniray Plust to make total because our data come in string.
      REPORT_DATA[3].total =  + REPORT_DATA[3].carbs + +REPORT_DATA[3].dairy + +REPORT_DATA[3].proteins + +REPORT_DATA[3].fats +  +REPORT_DATA[3].fruits
    }
    else{
      console.log('No data for today', this.today)
    }
  })
}
getDinner(today){
  this.dbService.getDinner(today)
  .then(res=>{
    if(res){
      console.log('Dinner data is ', res)
      REPORT_DATA[4].carbs = res.carbs;
      REPORT_DATA[4].dairy = res.dairy;
      REPORT_DATA[4].proteins = res.protein;
      REPORT_DATA[4].fats = res.fats;
      REPORT_DATA[4].fruits= res.fruit;
      // Uniray Plust to make total because our data come in string.
      REPORT_DATA[4].total =  + REPORT_DATA[4].carbs + +REPORT_DATA[4].dairy + +REPORT_DATA[4].proteins + +REPORT_DATA[4].fats +  +REPORT_DATA[4].fruits
      
    }
    else{
      console.log('No data for today', this.today)
    }
  })
}

// End Methods


  displayedColumnsReport: string[] = ['dietTime','carbs', 'proteins','dairy','fats','fruits','total'];
  dataSourceReport = new MatTableDataSource<dailyReport>(REPORT_DATA);

}
