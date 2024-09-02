import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormSignup} from "../../../shared/models/models";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-auth-log-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: "./auth-log-in.component.html",
  styleUrl: './auth-log-in.component.scss'
})
export class AuthLogInComponent implements OnInit {
  form: any;


  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group<FormSignup>({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  async submit() {
    if (this.form.invalid) {
      console.log(this.form.invalid)
      return
    }

    const authResponse = await this.authService.logIn(this.form.value);
    console.log(authResponse);

    if (authResponse.error == null) {
      alert("Te loggeaste bien")
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
