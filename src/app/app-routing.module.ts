import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.gard';


const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {path : 'home', component: HomeComponent},
  { path: 'job/:id', component: JobDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
