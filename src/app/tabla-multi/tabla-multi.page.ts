import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-multi',
  templateUrl: './tabla-multi.page.html',
  styleUrls: ['./tabla-multi.page.scss'],
})
export class TablaMultiPage implements OnInit {

  num: number;
  tabla: number[] = [];
  show: boolean;

  multiplicar(){
    for(let i = 0; i < 14; i++){
      this.tabla.push(i * this.num)
    }
    this.show = true
  }

  ocultar(){
    this.show = false
    this.tabla = []
  }

  constructor() { }

  ngOnInit() {
  }

}
