import {FormControl} from "@angular/forms";

export interface formSignup {
  email: FormControl<string| null>;
  password: FormControl<string| null>;
}

export interface note {
  id: string;
  title: string;
  description: string | null;
  user_id: string;
}

export interface noteState {
  notes: note[];
  loading: boolean;
  error: boolean;
}


export interface noteForm {
  title: FormControl<string | null>;
  description: FormControl<string | null>;
}
