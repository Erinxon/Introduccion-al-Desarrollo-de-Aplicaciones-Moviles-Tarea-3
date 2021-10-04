import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tabla-multiplicar.page.html',
  styleUrls: ['./tabla-multiplicar.page.scss'],
})
export class TablaMultiplicarPage implements OnInit {
  form: FormGroup;
  textNumber: string;
  table: number[]=[];
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      numero: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  generarTabla(){
    this.table=[];
    this.textNumber = this.form.value.numero;
    for(let i = 1; i <= 13; i++){
      this.table.push(i*Number(this.textNumber));
    }
  }

}
