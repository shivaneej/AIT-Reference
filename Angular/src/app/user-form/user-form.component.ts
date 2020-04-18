import { Component, OnInit } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  model = new User('Chloe Decker', 'chloe@gmail.com', 9876543210);
  submitted = false;
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }

  newUser() {
    this.model = new User('', '', );
  }


}

