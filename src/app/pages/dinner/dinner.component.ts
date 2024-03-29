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
  {diet: 'carbs', ratio: '1',food:'100ml Milk'},
  {diet: 'protein', ratio: '1',food:'200ml Milk tea'},
  {diet: 'fat', ratio: '0.5',food:'10g Chocolate'},
  {diet: 'dairy', ratio: '0.5',food:'1 one Cup Coffee'},
  {diet: 'fruit', ratio: '1',food:'4 tbs Raitah'}
];


@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {

  dinnerData ={
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
  totalProtein; //DP
  totalDairy;//DD
  totalFats;//DF
  totalFruit;//DFr
  // Copy from here 
  msgNot = 'Not Completed'
  msgYes = 'Portion Completed'
  msgOver = 'Over';
  DC = this.msgNot;
  DP = this.msgNot;
  DD = this.msgNot;
  DF =this.msgNot;
  DFr = this.msgNot ;
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
   if(+row.carbs < 2 && +row.carbs > 0 && +row.carbs != 1.5){
    this.DC = 'Take one portion more in snacks';
  }
  else if(+row.carbs > 1 && +row.carbs<2){
    this.DC = 'Take 0.5 portion more in snacks';
  }
  else if(+row.carbs > 2){
    this.DC = this.msgOver
  }
  else{
    this.DC = this.msgYes
  }
  this.syncData(this.keyDate)
  this.dinnerData.carbs = row.carbs;
  this.dbService.addDinner(this.dinnerData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
    this.dinnerData.carbs = row.carbs;
  this.dinnerData.cRatio = row.ratio;
    this.dbService.updateDinner(this.keyDate,this.dinnerData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
}
proteinDiet(row,index){
  this.selectedIndex2 = index;
  if(+row.protein > 1 ){
    this.DP = this.msgOver;
  }
  else if(+row.protein < 1 ){
    this.DP = 'Take 0.5 portion in snacks'
  }
  else{
    this.DP = this.msgYes;
  }
  this.syncData(this.keyDate)
  this.dinnerData.protein = row.protein;
  this.dinnerData.pRatio = row.ratio;
  this.dbService.addDinner(this.dinnerData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
    this.dinnerData.protein = row.protein;
    this.dinnerData.pRatio = row.ratio;
    this.dbService.updateDinner(this.keyDate,this.dinnerData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
  
}

fatDiet(row,index){
  this.selectedIndex3 = index;
  if(+row.fat >0 && +row.fat < 1){
      
    this.DF = 'Take 0.5 Portion in snacks'
  }
  else if(+row.fat >1){
    this.DF = this.msgOver
  }
  else{
    this.DF = this.msgYes
  }
  this.syncData(this.keyDate)
  this.dinnerData.fats = row.fat;
  this.dinnerData.fRatio = row.ratio;
  this.dbService.addDinner(this.dinnerData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
  this.dinnerData.fats = row.fat;
  this.dinnerData.fRatio = row.ratio;
    console.log('data befor update', this.dinnerData)
    this.dbService.updateDinner(this.keyDate,this.dinnerData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
}
async dairyDiet(row,index){
  this.selectedIndex4 = index;
  if(+row.dairy < 1){
    this.DD = 'Take more portion'
  }
  else if (+row.dairy > 1){
    this.DD = this.msgOver;
  }
  else{
    this.DD = this.msgYes
  }
  await this.syncData(this.keyDate)
  this.dinnerData.dairy = row.dairy;
    this.dinnerData.dRatio = row.ratio
  this.dbService.addDinner(this.dinnerData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
    this.dinnerData.dairy = row.dairy;
    this.dinnerData.dRatio = row.ratio
    console.log('data befor update', this.dinnerData)
    this.dbService.updateDinner(this.keyDate,this.dinnerData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
 
}
async fruitDiet(row,index){
  this.selectedIndex5 = index;
  if(+row.fruit < 1){
    this.DFr= 'Take more portion'
  }
  else if (+row.fruit > 1){
    this.DFr = this.msgOver;
  }
  else {
    this.DFr = this.msgYes
  }
  await this.syncData(this.keyDate)
  this.dinnerData.fruit = row.fruit;
  this.dinnerData.frRatio = row.ratio;
  console.log(this.dinnerData)
  this.dbService.addDinner(this.dinnerData)
  .then(async (res) => {
    console.log('Saved in DB, DB is now', res);
  })
  .catch(e => {
    this.dinnerData.fruit = row.fruit;
    this.dinnerData.frRatio = row.ratio;
    this.dbService.updateDinner(this.keyDate,this.dinnerData);
    // alert(' Already Exist!')
    // console.log('Error: ' + (e.stack || e));
  
  });
  
}

syncData(keyDate){
  this.dbService.getDinner(keyDate).then( async (res)=>{
    console.log("Data of Dinner  is ", res)
    this.dinnerData.carbs = res.carbs;
    this.dinnerData.cRatio = res.cRatio;
    this.dinnerData.protein = res.protein;
    this.dinnerData.pRatio = res.pRatio;
    this.dinnerData.fats = res.fats;
    this.dinnerData.fRatio = res.fRatio;
    this.dinnerData.dairy = res.dairy;
    this.dinnerData.dRatio = res.dRatio;
    this.dinnerData.fruit = res.fruit;
    this.dinnerData.frRatio = res.frRatio;
  })
}
}
