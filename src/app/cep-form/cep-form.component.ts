import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  localStorage: CepModel = {} as CepModel;
  loading: boolean = false;
  confirmDialog: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: AppService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.localStorage = this.cepService.getLocalStorage('cep');

    if (!this.localStorage) {
      this.getCep();
    } else {
      this.buildForm(this.localStorage);
    }
  }

  getCep() {
    this.loading = true;

    this.cepService.getCep().subscribe({
      next: (_cep: CepModel) => {
        this.loading = false;
        this.cep = _cep;
        this.buildForm(this.cep);
      },
      error: (err) => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data: {
            confirmDialog: false,
            hasError: true,
            headerMsg: 'Erro',
            msg: 'Erro ao carregar a API',
          },
        });
      },
    });
  }

  buildForm(cep: CepModel) {
    this.form = this.formBuilder.group({
      cep: [cep.cep],
      logradouro: [cep.logradouro],
      complemento: [cep.complemento],
      bairro: [cep.bairro],
      localidade: [cep.localidade],
      uf: [cep.uf],
      ibge: [cep.ibge],
      gia: [cep.gia],
      ddd: [cep.ddd],
      siafi: [cep.siafi],
    });
  }

  onSubmit() {
    this.cepService.saveLocalStorage('cep', this.form.value);
    this.openSnackBar('Cep Salvo no localStorage', 'Ok');
  }

  clear() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        confirmDialog: true,
        hasError: true,
        headerMsg: 'Confirmação',
        msg: 'Deseja realmente apgar o cep do localStorage?',
      },
    });

    dialogRef.afterClosed().subscribe((confirm) => {
      if(confirm)
        this.cepService.deleteLocalStorage('cep');
    });

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
