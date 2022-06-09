import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  num1: number = 0;
  num2: number = 0;
  res:  number = 0;

  sumar(){
    this.res = this.num1 + this.num2;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
