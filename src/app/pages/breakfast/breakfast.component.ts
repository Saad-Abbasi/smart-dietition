import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {DbService} from '../../shared/db.service'

export interface carbs {
  carbs: string;
  ratio: string
}
export interface proteins {
  protein: string;
  ratio: string
}

// export interface proteins {
//   protein: string;
//   ratio: string
// }

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
// DataSources
const CARBS_DATA: carbs[] = [
  {carbs: '1', ratio: '40g Pasta'},
  {carbs: '1.5', ratio: '8 Spoon Boiled Rice'},
  {carbs: '1.5', ratio: '40g Roti +4 tbs Rice'},
  {carbs: '2', ratio: '12 ts Rice'},
  {carbs: '2', ratio: '160g Boil Rice'}
];
const PROTEIN_DATA: proteins[] = [
  {protein: '1', ratio: '80g lamb keema'},
  {protein: '1', ratio: '5 tbs Rajma '},
  {protein: '2', ratio: '5 tbs Channa'},
  {protein: '0.5', ratio: '45g Chicken'},
  {protein: '1', ratio: '5 tbs Moong Daal'}
];

const FATS_DATA: fats[] = [
  {fat: '1', ratio: '1 ts Cooking Oil'},
  {fat: '1', ratio: '2 ts Coconut Flour'},
  {fat: '1', ratio: '1 ts Fat Spread'},
  {fat: '0.5', ratio: '1 tbs Cheese'},
  {fat: '1', ratio: '1 tbs Desi Gee'}
];

const DAIRY_DATA: dairy[] = [
  {dairy: '1', ratio: '3tbs Dahi'},
  {dairy: '1', ratio: '1 Glass Lasi'},
  {dairy: '1', ratio: '200ml Milk Shake'},
  {dairy: '1', ratio: '200 Milk'},
  {dairy: '1', ratio: '4 tbs Raita'}
];

const FRUIT_DATA: fruit[] = [
  {fruit: '1', ratio: '80g Cherries'},
  {fruit: '1', ratio: '80g Mango'},
  {fruit: '1', ratio: '2 Banana'},
  {fruit: '2', ratio: '1 Apple'},
  {fruit: '1', ratio: '80g Grapes'}
];

const SNACKS_DATA: snacks[] = [
  {diet: 'carbs', ratio: '1',food:'2 breads'},
  {diet: 'protein', ratio: '0.5',food:'2 breads'},
  {diet: 'fat', ratio: '1',food:'1 chocolates'},
  {diet: 'dairy', ratio: '1',food:'200ml milk'},
  {diet: 'fruit', ratio: '1',food:'79g mango'}
];


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})
export class BreakfastComponent implements OnInit {
breakFastData ={
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
totalCarbs; // shortName for messages bC (breakfast carbs)
totalProtein; //bP
totalDairy;//bD
totalFats;//bF
totalFruit;//bFr
// Copy from here 
msgNot = 'Not Completed'
msgYes = 'Portion Completed'
msgOver = 'Over';
bC = this.msgNot;
bP = this.msgNot;
bD = this.msgNot;
bF =this.msgNot;
bFr = this.msgNot ;
// to here 
selectedIndex;
selectedIndex2;
selectedIndex3;
selectedIndex4;
selectedIndex5;
keyDate = new Date().getDate();
  constructor(private dbService:DbService) { }

  ngOnInit(): void {
    this.syncData(this.keyDate)
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
    
    if(+row.carbs < 2 && +row.carbs > 0 && +row.carbs != 1.5){
      this.bC = 'Take one portion more in snacks';
    }
    else if(+row.carbs > 1 && +row.carbs<2){
      this.bC = 'Take 0.5 portion more in snacks';
    }
    else if(+row.carbs > 2){
      this.bC = this.msgOver
    }
    else{
      this.bC = this.msgYes
    }
// till here 
    this.syncData(this.keyDate)
    this.breakFastData.carbs = row.carbs;
    this.breakFastData.cRatio = row.ratio;
    this.dbService.addBreakfast(this.breakFastData)
    .then(async (res) => {
      console.log('Saved in DB, DB is now', res);
    })
    .catch(e => {
      this.breakFastData.carbs = row.carbs;
    this.breakFastData.cRatio = row.ratio;
      this.dbService.updateBreakfast(this.keyDate,this.breakFastData);
      // alert(' Already Exist!')
      // console.log('Error: ' + (e.stack || e));
    
    });
  }
  proteinDiet(row,index){
    this.selectedIndex2 = index;

    if(+row.protein > 1 ){
      this.bP = this.msgOver;
    }
    else if(+row.protein < 1 ){
      this.bP = 'Take 0.5 portion in snacks'
    }
    else{
      this.bP = this.msgYes;
    }

    this.syncData(this.keyDate)
    this.breakFastData.protein = row.protein;
    this.breakFastData.pRatio = row.ratio;
    this.dbService.addBreakfast(this.breakFastData)
    .then(async (res) => {
      console.log('Saved in DB, DB is now', res);
    })
    .catch(e => {
      this.breakFastData.protein = row.protein;
      this.breakFastData.pRatio = row.ratio;
      this.dbService.updateBreakfast(this.keyDate,this.breakFastData);
      
      // alert(' Already Exist!')
      // console.log('Error: ' + (e.stack || e));
    
    });
    
  }
  
  fatDiet(row,index){
    this.selectedIndex3 = index;
   
    if(+row.fat >0 && +row.fat < 1){
      
      this.bF = 'Take 0.5 Portion in snacks'
    }
    else if(+row.fat > 1){
      this.bF = this.msgOver
    }
    else{
      this.bF = this.msgYes
    }

    this.syncData(this.keyDate)
    this.breakFastData.fats = row.fat;
    this.breakFastData.fRatio = row.ratio;
    this.dbService.addBreakfast(this.breakFastData)
    .then(async (res) => {
      console.log('Saved in DB, DB is now', res);
    })
    .catch(e => {
    this.breakFastData.fats = row.fat;
    this.breakFastData.fRatio = row.ratio;
      console.log('data befor update', this.breakFastData)
      this.dbService.updateBreakfast(this.keyDate,this.breakFastData);
      // alert(' Already Exist!')
      // console.log('Error: ' + (e.stack || e));
    
    });
  }
  async dairyDiet(row,index){
    this.selectedIndex4 = index;

    if(+row.dairy < 1){
      this.bD = 'Take more portion'
    }
    else if (+row.dairy > 1){
      this.bD = this.msgOver;
    }
    else{
      this.bD = this.msgYes
    }

    await this.syncData(this.keyDate)
    this.breakFastData.dairy = row.dairy;
      this.breakFastData.dRatio = row.ratio
    this.dbService.addBreakfast(this.breakFastData)
    .then(async (res) => {
      console.log('Saved in DB, DB is now', res);
    })
    .catch(e => {
      this.breakFastData.dairy = row.dairy;
      this.breakFastData.dRatio = row.ratio
      console.log('data befor update', this.breakFastData)
      this.dbService.updateBreakfast(this.keyDate,this.breakFastData);
      // alert(' Already Exist!')
      // console.log('Error: ' + (e.stack || e));
    
    });
   
  }
  async fruitDiet(row,index){
    this.selectedIndex5 = index;
    if(+row.fruit < 1){
      this.bFr= 'Take more portion'
    }
    else if (+row.fruit > 1){
      this.bFr = this.msgOver;
    }
    else {
      this.bFr = this.msgYes
    }

    await this.syncData(this.keyDate)
    this.breakFastData.fruit = row.fruit;
    this.breakFastData.frRatio = row.ratio;
    console.log(this.breakFastData)
    this.dbService.addBreakfast(this.breakFastData)
    .then(async (res) => {
      console.log('Saved in DB, DB is now', res);
    })
    .catch(e => {
      this.breakFastData.fruit = row.fruit;
      this.breakFastData.frRatio = row.ratio;
      this.dbService.updateBreakfast(this.keyDate,this.breakFastData);
      // alert(' Already Exist!')
      // console.log('Error: ' + (e.stack || e));
    
    });
    
  }
  
  syncData(keyDate){
    
    this.dbService.getBreakFast(keyDate).then( async (res)=>{
      console.log("Data of BreakFast is ", res)
      this.breakFastData.carbs = res.carbs;
      this.breakFastData.cRatio = res.cRatio;
      this.breakFastData.protein = res.protein;
      this.breakFastData.pRatio = res.pRatio;
      this.breakFastData.fats = res.fats;
      this.breakFastData.fRatio = res.fRatio;
      this.breakFastData.dairy = res.dairy;
      this.breakFastData.dRatio = res.dRatio;
      this.breakFastData.fruit = res.fruit;
      this.breakFastData.frRatio = res.frRatio;
      this.calculateBreakfast(res);
    });
    
  }
  
  // Breakfast Calculation
  calculateBreakfast(res){
    console.log(typeof(+res.carbs))
    // if(+res.carbs < 2){
    //   this.bC = 'Not Completed'
    // }
    // else{
    //   this.bC = 'Completed'
    // }
    // if(+res.protein < 2){
    //   this.bP = 'Not Completed'
    // }
    // else{
    //   this.bP = 'Completed'
    // }
    // if(+res.fats < 2){
    //   this.bF = 'Not Completed'
    // }
    // else{
    //   this.bF = 'Completed'
    // }

    // if(+res.dairy < 2){
    //   this.bD = 'Not Completed'
    // }
    // else{
    //   this.bD = 'Completed'
    // }
    // if(+res.fruit < 2){
    //   this.bFr= 'Not Completed'
    // }
    // else {
    //   this.bFr = 'Completed'
    // }
  }
  getbP(){
    return this.bP;
  }
}
