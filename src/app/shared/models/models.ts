import {FormControl} from "@angular/forms";

export interface FormSignup {
  email: FormControl<string| null>;
  password: FormControl<string| null>;
}
