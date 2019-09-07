import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainningComponent } from './trainning/trainning.component';

const routes: Routes = [
 { path : '', component:WelcomeComponent},
 { path : 'signup', component:SignUpComponent},
 { path : 'login', component:LoginComponent},
 { path :'traning', component:TrainningComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
