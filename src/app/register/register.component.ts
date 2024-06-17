import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    uName:['',Validators.required],
    pwd:['',Validators.required],
    email:['',[Validators.email,Validators.required]]
  });

  constructor(private auth: AuthService, private router: Router,private fb: FormBuilder){

  }

  onRegister(){}
}
