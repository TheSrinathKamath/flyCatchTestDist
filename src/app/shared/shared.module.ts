import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { ApiErrorComponent } from './api-error/api-error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    ApiErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    ApiErrorComponent
  ]
})
export class SharedModule { }
