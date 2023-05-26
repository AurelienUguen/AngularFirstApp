import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user: UserComponent = new UserComponent();

  constructor() {}

  onSubmit() {

    console.log(this.user);
  }

}
