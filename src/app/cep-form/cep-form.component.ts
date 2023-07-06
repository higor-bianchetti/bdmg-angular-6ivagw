import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cep-form',
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.css'],
})
export class CepFormComponent {
  form: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cep: [null],
      logradouro: [null],
      complemento: [null],
      bairro: [null],
      localidade: [null],
      uf: [null],
      ibge: [null],
      gia: [null],
      ddd: [null],
      siafi: [null],
    });
  }
}
