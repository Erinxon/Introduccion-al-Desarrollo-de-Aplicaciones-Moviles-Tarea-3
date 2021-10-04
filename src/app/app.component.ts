import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Sumadora', url: '/sumadora', icon: 'calculator-outline' },
    { title: 'Traductor', url: '/traductor-numeros-letras', icon: 'apps-outline' },
    { title: 'Tabla de multiplicar', url: '/tabla-multiplicar', icon: 'stop-outline' },
    { title: 'Video', url: '/video-youtube', icon: 'videocam-outline' },
  ];
  constructor() {}
}
