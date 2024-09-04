import {FormControl} from "@angular/forms";

export interface FormSignup {
  email: FormControl<string| null>;
  password: FormControl<string| null>;
}

export interface Note {
  id: string;
  title: string;
  description: string | null;
  user_id: string;
}

export interface NoteState {
  notes: Note[];
  loading: boolean;
  error: boolean;
}
