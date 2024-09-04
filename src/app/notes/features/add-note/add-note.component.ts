import {Component} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NotesService} from "../../data-access/notes.service";
import {AuthService} from "../../../auth/service/auth.service";
import {FormSignup} from "../../../shared/models/models";
import {SupabaseService} from "../../../shared/data-access/supabase.service";

interface noteForm {
  title: FormControl<string | null>;
  description: FormControl<string | null>;

}

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {
  form: any;


  constructor(private noteService: NotesService, private authService: AuthService, private formBuilder: FormBuilder, private supaBaseService: SupabaseService) {

    this.form = this.formBuilder.group<noteForm>({
      title: this.formBuilder.control(null, Validators.required),
      description: this.formBuilder.control(null),
    });

  }

  send() {
    if (this.form.invalid) return;

    this.noteService.insertNote({
      title: this.form.value.title ?? '',
      description: this.form.value.description!
    })
  }
}
