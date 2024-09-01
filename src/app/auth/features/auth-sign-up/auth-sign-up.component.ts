import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-auth-sign-up',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl:'auth-sign-up.component.html',
  styleUrl: './auth-sign-up.component.scss'
})
export class AuthSignUpComponent {

}
