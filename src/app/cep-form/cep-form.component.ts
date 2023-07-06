import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    this.getCep();
  }

  getCep() {
    this.loading = true;
    this.localStorage = this.cepService.getLocalStorage('cep');

    if (!this.localStorage) {
      this.getCepApi();
    } else {
      this.buildForm(this.localStorage);
    }
  }

  buildForm(cep: CepModel) {
    this.form = this.formBuilder.group({
      cep: [cep.cep],
      logradouro: [cep.logradouro],
      complemento: [cep.complemento],
      bairro: [cep.bairro],
      localidade: [cep.localidade],
      uf: [cep.uf],
      ibge: new FormControl({ value: cep.ibge, disabled: true }),
      gia: [cep.gia],
      ddd: [cep.ddd],
      siafi: new FormControl({ value: cep.siafi, disabled: true }),
    });
  }

  getCepApi() {
    this.cepService.getCep().subscribe({
      next: (_cep: CepModel) => {
        this.loading = false;
        this.buildForm(_cep);
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

  onSubmit() {
    this.cepService.saveLocalStorage('cep', this.form.value);
    this.localStorage = this.cepService.getLocalStorage('cep');
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
      if (confirm) {
        this.cepService.deleteLocalStorage('cep');
        this.getCep();
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
