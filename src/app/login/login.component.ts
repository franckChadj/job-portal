import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(private auth: LoginService, private router: Router, private fb: FormBuilder){

  }

  onLogin(){}
}
