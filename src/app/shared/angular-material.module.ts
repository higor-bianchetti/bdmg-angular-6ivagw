import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class AngularMaterialModule {}
