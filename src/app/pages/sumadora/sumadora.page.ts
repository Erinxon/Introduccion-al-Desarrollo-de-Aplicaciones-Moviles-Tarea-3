import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {
  form: FormGroup;
  resultado: number;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      num1: ['', Validators.required],
      num2: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  sumar() {
    this.resultado = Number(this.form.value.num1) + Number(this.form.value.num2);
  }

}
