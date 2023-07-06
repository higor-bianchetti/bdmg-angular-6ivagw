import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from '../hello.component';
import { AppService } from './app.service';
import { AngularMaterialModule } from './shared/angular-material.module';
import { CepFormComponent } from './cep-form/cep-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  declarations: [CepFormComponent, AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [AppService],
})
export class AppModule {}
