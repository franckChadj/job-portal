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
    email:['',[Validators.email,Validators.required]],
    pwd:['',Validators.required],
    userName:['',Validators.required], 
  });
  errorMessage: string | null = null;

  constructor(private auth: AuthService, private router: Router,private fb: FormBuilder){

  }

  onRegister(){
    if(this.registerForm.valid){
      const form = this.registerForm.getRawValue();
      this.auth.register(form.email as string,form.pwd as string,form.pwd as string).then(
        ()=> this.router.navigate(['/home']),
        error => this.errorMessage = error.message
      );
    }
  }

 
}

