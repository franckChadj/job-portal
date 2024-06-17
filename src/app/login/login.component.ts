import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email:['',[Validators.email,Validators.required]],
    pwd:['',Validators.required], 
  });
  errorMessage: string | null = null;
 
  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder){

  }

  onLogin(){
    if(this.loginForm.valid){
      const form = this.loginForm.getRawValue();
      this.auth.login(form.email as string,form.pwd as string).then(
        ()=> this.router.navigate(['/home']),
        error => this.errorMessage = error.message
      );
    }
  }
}
