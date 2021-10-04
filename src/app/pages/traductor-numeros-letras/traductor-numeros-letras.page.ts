import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransformNumberIntoLetterService } from 'src/app/pages/traductor-numeros-letras/services/transform-number-into-letter.service';

@Component({
  selector: 'app-traductor-numeros-letras',
  templateUrl: './traductor-numeros-letras.page.html',
  styleUrls: ['./traductor-numeros-letras.page.scss'],
})
export class TraductorNumerosLetrasPage implements OnInit {
  form: FormGroup;
  textNumber: string;
  constructor(private formBuilder: FormBuilder, private tranformServices: TransformNumberIntoLetterService) {
    this.form = this.formBuilder.group({
      numero: ['', [Validators.required, Validators.min(1),Validators.max(1000)]],
    });
  }

  ngOnInit() {
  }

  transformNumberIntoLetter() {
    const numero = Number(this.form.get('numero').value);
    this.textNumber = this.tranformServices.transform(numero);
  }

}
