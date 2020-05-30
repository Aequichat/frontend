import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'aequi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username = new FormControl('');
  public password = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
