import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthSignUpComponent} from "./auth-sign-up/auth-sign-up.component";
import {AuthLogInComponent} from "./auth-log-in/auth-log-in.component";

const routes: Routes = [

  {
    path: 'signup',
    component: AuthSignUpComponent
  },
  {
    path: 'login',
    component: AuthLogInComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
