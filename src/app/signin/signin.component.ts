import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model = new User ('testmail', 'testpass');
  // model = new User ();

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert('submit');
  }

    get diagnostic() { return JSON.stringify(this.model); }
}
