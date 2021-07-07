import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface dailyReport {
  groups:string
  breakFast: string;
  lunch: string;
  dinner:string;
  mSnacks:string;
  eSnacks:string;
  total:string;
}

const REPORT_DATA: dailyReport[] = [
  {groups: 'Carbs', breakFast: '1p',lunch:'2 breads',dinner:'--',mSnacks:'--',eSnacks:' --',total:'--'},
  {groups: 'Proteins', breakFast: '1p',lunch:'2 breads',dinner:'--',mSnacks:'--',eSnacks:'--',total:'--'},
  {groups: 'Dairy', breakFast: '1p',lunch:'2 breads',dinner:'--',mSnacks:'--',eSnacks:'--',total:'--'},
  {groups: 'Fats', breakFast: '1p',lunch:'2 breads',dinner:'--',mSnacks:'--',eSnacks:'--',total:'--'},
  {groups: 'Fruits', breakFast: '1p',lunch:'2 breads',dinner:'--',mSnacks:'--',eSnacks:'--',total:'--'}
 
]

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumnsReport: string[] = ['groups','breakFast', 'lunch','dinner','mSnacks','eSnacks','total'];
  dataSourceReport = new MatTableDataSource<dailyReport>(REPORT_DATA);

}
