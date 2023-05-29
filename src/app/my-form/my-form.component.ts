import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})

export class MyFormComponent {
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // get Observable from FormGroup
    this.orderForm.valueChanges
      // listen to value change
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });
   }

  addPayments() {

    const paymentForm = this.fb.group({
      date: ['', Validators.required],
      amount: ['', Validators.required]
   });

    const payments = this.orderForm.get('payments') as FormArray;

    payments.push(paymentForm);
  }

  get payments(): FormArray {
    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }

  onSubmit() {
    console.log('orderForm submitted : ', this.orderForm.value);
  }
}
