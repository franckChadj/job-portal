import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private auth: RegisterService, private router: Router,private fb: FormBuilder){

  }

  onRegister(){}
}
