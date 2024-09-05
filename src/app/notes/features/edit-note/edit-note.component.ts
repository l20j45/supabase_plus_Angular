import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
export class EditNoteComponent implements OnInit {
  form: any;

  @Input() notaSeleccionada: any;
  @Output() editVerificacion = new EventEmitter<boolean>();
  @Input() deleteNote: boolean | undefined;


  constructor(private noteService: NotesService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group<noteForm>({
      title: this.formBuilder.control(null, Validators.required),
      description: this.formBuilder.control(null),
    });


  }

  async send() {
    if (this.form.invalid) return;
    const result = await this.noteService.updateNote({
      title: this.form.value.title ?? '',
      description: this.form.value.description!
    }, this.notaSeleccionada.id);
    console.log(result);
    if (result.success) {
      this.editVerificacion.emit(true);
    } else {
      this.editVerificacion.emit(false);
    }
  }

  ngOnInit(): void {
    this.form.setValue({
      title: this.notaSeleccionada.title,
      description: this.notaSeleccionada.description,
    });
  }

  cerrar() {
    console.log("entre");
    this.form.setValue({
      title: "",
      description: "",
    });
    this.editVerificacion.emit(false);
  }

  async borrar() {
    if (this.form.invalid) return;
    const result =
      await this.noteService
        .deleteNote(this.notaSeleccionada.id);

    if (result.success) {
      this.editVerificacion.emit(true);
    } else {
      this.editVerificacion.emit(false);
    }
  }
}
