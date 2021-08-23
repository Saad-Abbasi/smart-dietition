import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DbService } from 'src/app/shared/db.service';

export interface carbs {
  carbs: string;
  ratio: string
}
export interface proteins {
  protein: string;
  ratio: string
}

export interface proteins {
  protein: string;
  ratio: string
}

export interface fats {
  fat: string;
  ratio: string
}

export interface dairy {
  dairy: string;
  ratio: string
}

export interface fruit {
  fruit: string;
  ratio: string
}

export interface snacks {
  diet: string;
  ratio:string;
  food:string;
}

// DataSources
//Lunch
const CARBS_DATA: carbs[] = [
  {carbs: '2', ratio: '1 Cd Size Roti'},
  {carbs: '2', ratio: '12 tbs Palau'},
  {carbs: '1', ratio: '60g Nan'},
  {carbs: '1', ratio: '120g Boiled Rice'},
  {carbs: '2', ratio: '5tbs Flour'}
];
const PROTEIN_DATA: proteins[] = [
  {protein: '2', ratio: '160 Bbq'},
  {protein: '1', ratio: '5 tbs Mix Dall'},
  {protein: '1', ratio: 'Palm Size chicken Tikkah'},
  {protein: '1', ratio: '140g Channa'},
  {protein: '1', ratio: '70g Boiled Dall'}
];

const FATS_DATA: fats[] = [
  {fat: '1', ratio: '1ts Cooking Oil'},
  {fat: '1', ratio: '1ts Desi Ghee'},
  {fat: '1', ratio: ' 2ts Coconut Oil'},
  {fat: '0.5', ratio: '1ts Olive Oil'},
  {fat: '0.5', ratio: '1ts Cheese'}
];

const DAIRY_DATA: dairy[] = [
  {dairy: '1', ratio: '3tbs Dahi'},
  {dairy: '1', ratio: '1 Glass Lasi'},
  {dairy: '1', ratio: '200ml Milk Shake'},
  {dairy: '1', ratio: '200 milk'},
  {dairy: '1', ratio: '4 tbs Raita'}
];

const FRUIT_DATA: fruit[] = [
  {fruit: '1', ratio: '80g Cherries'},
  {fruit: '1', ratio: 'Palm Size Plam'},
  {fruit: '1', ratio: '3 Dates'},
  {fruit: '1', ratio: '80g Gava'},
  {fruit: '1', ratio: '80g Mango'}
];
const SNACKS_DATA: snacks[] = [
  {diet: 'carbs', ratio: '1',food:'2 breads'},
  {diet: 'protein', ratio: '0.5',food:'8g chicken'},
  {diet: 'fat', ratio: '1',food:'1 chocolates'},
  {diet: 'dairy', ratio: '1',food:'200ml milk'},
  {diet: 'fruit', ratio: '1',food:'79g mango'}
];






@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {
  lunchData ={
    carbs:'',
    cRatio:'',
    protein:'',
    pRatio:'',
    fats:'',
    fRatio:'',
    dairy:'',
    dRatio:'',
    fruit:'',
    frRatio:''
  }
  selectedIndex;
  selectedIndex2;
  selectedIndex3;
  selectedIndex4;
  selectedIndex5;
  keyDate = new Date().getDate();
    constructor(private dbService:DbService) { }

  ngOnInit(): void {
  }

  displayedColumnsCarbs: string[] = ['carbs', 'ratio','select'];
  displayedColumnsProtein: string[] = ['protein', 'ratio','select'];
  displayedColumnsFat: string[] = ['fat', 'ratio','select'];
  displayedColumnsDairy: string[] = ['dairy', 'ratio','select'];
  displayedColumnsFruit: string[] = ['fruit', 'ratio','select'];
  displayedColumnsSnacks: string[] = ['diet', 'ratio','food','select'];


  dataSourceCarbs = new MatTableDataSource<carbs>(CARBS_DATA);
  dataSourceProtein = new MatTableDataSource<proteins>(PROTEIN_DATA);
  dataSourceFat = new MatTableDataSource<fats>(FATS_DATA);
  dataSourceDairy = new MatTableDataSource<dairy>(DAIRY_DATA);
  dataSourceFruit = new MatTableDataSource<fruit>(FRUIT_DATA);
  dataSourceSnacks = new MatTableDataSource<snacks>(SNACKS_DATA);

  selectionCarbs = new SelectionModel<carbs>(true, []);
  selectionProtein = new SelectionModel<proteins>(true, []);
  selectionFat = new SelectionModel<fats>(true, []);
  selectionDairy = new SelectionModel<dairy>(true, []);
  selectionFruit = new SelectionModel<fruit>(true, []);
  selectionSnacks = new SelectionModel<snacks>(true, []);


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedCarbs() {
    const numSelected = this.selectionCarbs.selected.length;
    const numRows = this.dataSourceCarbs.data.length;
    return numSelected === numRows;
  }

  isAllSelectedProtein() {
    const numSelected = this.selectionProtein.selected.length;
    const numRows = this.dataSourceProtein.data.length;
    return numSelected === numRows;
  }

  isAllSelectedFat() {
    const numSelected = this.selectionFat.selected.length;
    const numRows = this.dataSourceFat.data.length;
    return numSelected === numRows;
  }

  isAllSelectedDairy() {
    const numSelected = this.selectionDairy.selected.length;
    const numRows = this.dataSourceDairy.data.length;
    return numSelected === numRows;
  }

  isAllSelectedFruit() {
    const numSelected = this.selectionFruit.selected.length;
    const numRows = this.dataSourceFruit.data.length;
    return numSelected === numRows;
  }

  isAllSelectedSnacks() {
    const numSelected = this.selectionSnacks.selected.length;
    const numRows = this.dataSourceSnacks.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelectedCarbs()) {
      this.selectionCarbs.clear();
      return;
    }
  
    this.selectionCarbs.select(...this.dataSourceCarbs.data);
  }

  masterToggleProtein(){
    if(this.isAllSelectedProtein()){
      this.selectionProtein.clear();
      return;
    }
    this.selectionProtein.select(...this.dataSourceProtein.data);
  }

  masterToggleFat(){
    if(this.isAllSelectedFat()){
      this.selectionFat.clear();
      return;
    }
    this.selectionFat.select(...this.dataSourceFat.data);
  }

  masterToggleDairy(){
    if(this.isAllSelectedDairy()){
      this.selectionDairy.clear();
      return;
    }
    this.selectionDairy.select(...this.dataSourceDairy.data);
  }

  masterToggleFruit(){
    if(this.isAllSelectedFruit()){
      this.selectionFruit.clear();
      return;
    }
    this.selectionFruit.select(...this.dataSourceFruit.data);
  }

  masterToggleSnacks(){
    if(this.isAllSelectedSnacks()){
      this.selectionSnacks.clear();
      return;
    }
    this.selectionSnacks.select(...this.dataSourceSnacks.data);
  }


  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: carbs): string {
    if (!row) {
      return `${this.isAllSelectedCarbs() ? 'deselect' : 'select'} all`;
    }
    return `${this.selectionCarbs.isSelected(row) ? 'deselect' : 'select'} row ${row.carbs + 1}`;
  }

  checkboxLabelProtein(row?: proteins): string {
    if (!row) {
      return `${this.isAllSelectedProtein() ? 'deselect' : 'select'} all`;
    }
    return `${this.selectionProtein.isSelected(row) ? 'deselect' : 'select'} row ${row.protein + 1}`;
  }

  checkboxLabelFat(row?: fats): string {
    if (!row) {
      return `${this.isAllSelectedFat() ? 'deselect' : 'select'} all`;
    }
    return `${this.selectionFat.isSelected(row) ? 'deselect' : 'select'} row ${row.fat + 1}`;
  }

  checkboxLabelDairy(row?: dairy): string {
    if (!row) {
      return `${this.isAllSelectedDairy() ? 'deselect' : 'select'} all`;
    }
    return `${this.selectionDairy.isSelected(row) ? 'deselect' : 'select'} row ${row.dairy + 1}`;
  }

  checkboxLabelFruit(row?: fruit): string {
    if (!row) {
      return `${this.isAllSelectedFruit() ? 'deselect' : 'select'} all`;
    }
    return `${this.selectionFruit.isSelected(row) ? 'deselect' : 'select'} row ${row.fruit + 1}`;
  }

  checkboxLabelSnacks(row?: snacks): string {
    if (!row) {
      return `${this.isAllSelectedSnacks() ? 'deselect' : 'select'} all`;
    }
    return `${this.selectionSnacks.isSelected(row) ? 'deselect' : 'select'} row ${row.diet + 1}`;
}
carbsDiet(row,index){
  this.selectedIndex = index;
  this.syncData(this.keyDate)
  this.lunchData.carbs = row.carbs;
  this.lunchData.cRatio = row.ratio;
  this.dbService.addlunch(this.lunchData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
    this.lunchData.carbs = row.carbs;
  this.lunchData.cRatio = row.ratio;
    this.dbService.updateLunch(this.keyDate,this.lunchData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
}
proteinDiet(row,index){
  this.selectedIndex2 = index;
  this.syncData(this.keyDate)
  this.lunchData.protein = row.protein;
  this.lunchData.pRatio = row.ratio;
  this.dbService.addlunch(this.lunchData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
    this.lunchData.protein = row.protein;
    this.lunchData.pRatio = row.ratio;
    this.dbService.updateLunch(this.keyDate,this.lunchData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
  
}

fatDiet(row,index){
  this.selectedIndex3 = index;
  this.syncData(this.keyDate)
  this.lunchData.fats = row.fat;
  this.lunchData.fRatio = row.ratio;
  this.dbService.addlunch(this.lunchData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
  this.lunchData.fats = row.fat;
  this.lunchData.fRatio = row.ratio;
    console.log('data befor update', this.lunchData)
    this.dbService.updateLunch(this.keyDate,this.lunchData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
}
async dairyDiet(row,index){
  this.selectedIndex4 = index;
  await this.syncData(this.keyDate)
  this.lunchData.dairy = row.dairy;
    this.lunchData.dRatio = row.ratio
  this.dbService.addlunch(this.lunchData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
    this.lunchData.dairy = row.dairy;
    this.lunchData.dRatio = row.ratio
    console.log('data befor update', this.lunchData)
    this.dbService.updateLunch(this.keyDate,this.lunchData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
 
}
async fruitDiet(row,index){
  this.selectedIndex5 = index;
  await this.syncData(this.keyDate)
  this.lunchData.fruit = row.fruit;
  this.lunchData.frRatio = row.ratio;
  console.log(this.lunchData)
  this.dbService.addlunch(this.lunchData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
    this.lunchData.fruit = row.fruit;
    this.lunchData.frRatio = row.ratio;
    this.dbService.updateLunch(this.keyDate,this.lunchData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
  
}

syncData(keyDate){
  this.dbService.getLunch(keyDate).then( async (res)=>{
    console.log("Data of BreakFast is ", res)
    this.lunchData.carbs = res.carbs;
    this.lunchData.cRatio = res.cRatio;
    this.lunchData.protein = res.protein;
    this.lunchData.pRatio = res.pRatio;
    this.lunchData.fats = res.fats;
    this.lunchData.fRatio = res.fRatio;
    this.lunchData.dairy = res.dairy;
    this.lunchData.dRatio = res.dRatio;
    this.lunchData.fruit = res.fruit;
    this.lunchData.frRatio = res.frRatio;
  })
}
// carbsDiet(row){
//   console.log(row)
// }
// fatDiet(row){
//   console.log(row)
// }
// dairyDiet(row){
//   console.log(row)
// }
// fruitDiet(row){
//   console.log(row)
// }
// proteinDiet(row){
//   console.log(row)
// }
// snacksDiet(row){
//   console.log(row)
// }
}
