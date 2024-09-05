import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NotesService} from "../../data-access/notes.service";
import {noteForm} from "../../../shared/models/models";

@Component({
  selector: 'app-edit-note',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent {
  form: any;
  constructor(private noteService: NotesService, private formBuilder: FormBuilder) {
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
