import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
     this.router.navigate(['login'])
  }
  BMI(){
    this.router.navigate(['bmi'])
  }
  showGuidlines(){
    this.router.navigate(['guide'])
  }
  portionControll(){
    this.router.navigate(['portion']);
  }
  
}
