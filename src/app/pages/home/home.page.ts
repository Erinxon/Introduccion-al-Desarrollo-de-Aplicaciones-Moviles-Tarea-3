import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  datos = { nombre: 'Erinxon', apellido: 'Santana', correo: '20197708@itla.edu.do' };
  constructor() { }

  ngOnInit() {
  }

}
