import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NotesService} from "../../data-access/notes.service";

import {noteForm} from "../../../shared/models/models";


@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {


  form: any;
  @Output() addVerificacion = new EventEmitter<boolean>();


  constructor(private noteService: NotesService, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group<noteForm>({
      title: this.formBuilder.control(null, Validators.required),
      description: this.formBuilder.control(null),
    });

  }

  async send() {
    if (this.form.invalid) return;

    const result = await this.noteService.insertNote({
      title: this.form.value.title ?? '',
      description: this.form.value.description!
    })
    if (result.success) {
      this.addVerificacion.emit(true);
    } else {
      this.addVerificacion.emit(false);
    }
  }
}
