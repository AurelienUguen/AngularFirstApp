import { Component } from '@angular/core';
import { OrderComponent } from '../order/order.component';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  model: OrderComponent = new OrderComponent();

  constructor() {}

  onSubmit() {

    console.log(this.model);
  }

}
