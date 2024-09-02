import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../../service/auth.service";
import {FormSignup} from "../../../shared/models/models";


@Component({
  selector: 'app-auth-sign-up',
  standalone: true,
  imports: [
    RouterLink, ReactiveFormsModule, NgIf
  ],
  templateUrl: 'auth-sign-up.component.html',
  styleUrl: './auth-sign-up.component.scss'
})
export class AuthSignUpComponent implements OnInit {
  form: any;


  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group<FormSignup>({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  async submit() {
    if (this.form.invalid) {
      console.log(this.form.invalid)
      return
    }
    const authResponse = await this.authService.signUp(this.form.value);

    console.log(authResponse);
    if (authResponse.error == null) {
      alert("Se creo el usuario satisfactoriamente")
    } else {
      alert(authResponse.error.message);
      console.log(authResponse.error.message)
    }
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }


}
