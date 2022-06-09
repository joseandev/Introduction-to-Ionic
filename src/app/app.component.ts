import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public nameApp = 'Ionic App';
  public subtitleApp = 'Introduction to Ionic';

  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'calculator' },
    { title: 'Traductor de No', url: '/numeros-letras', icon: 'repeat' },
    { title: 'Tabla de multiplicar', url: '/tabla-multi', icon: 'math' },
    { title: 'Experiencia', url: '/experiencia', icon: 'play' },
  ];

  constructor() {}
}
