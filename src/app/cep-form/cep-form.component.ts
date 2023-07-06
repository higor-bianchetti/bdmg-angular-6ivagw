import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { CepModel } from '../models/cep.model';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-cep-form',
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.css'],
})
export class CepFormComponent {
  cep: CepModel;
  form: FormGroup = {} as FormGroup;
  loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: AppService,
    public dialog: MatDialog
  ) {
    this.getCep();
  }

  getCep() {
    this.cepService.getCep().subscribe({
      next: (_cep: CepModel) => {
        this.loading = false;
        this.cep = _cep;
        this.buildForm();
      },
      error: (err) => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data: {
            hasError: true,
            headerMsg: 'Erro',
            msg: 'Erro ao carregar a API',
          },
        });
      },
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      cep: [this.cep.cep],
      logradouro: [this.cep.logradouro],
      complemento: [this.cep.complemento],
      bairro: [this.cep.bairro],
      localidade: [this.cep.localidade],
      uf: [this.cep.uf],
      ibge: [this.cep.ibge],
      gia: [this.cep.gia],
      ddd: [this.cep.ddd],
      siafi: [this.cep.siafi],
    });
  }
}
