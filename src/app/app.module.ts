import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ValidationButtonComponent } from './validation-button/validation-button.component';
import { BlockComponentComponent } from './block-component/block-component.component';


import { MyFormComponent } from './my-form/my-form.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationButtonComponent,
    BlockComponentComponent,
    MyFormComponent,
    OrderComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
