import {AfterViewInit, Component, inject} from '@angular/core';
import {NotesService} from "../../data-access/notes.service";
import {AddNoteComponent} from "../add-note/add-note.component";
import {note} from "../../../shared/models/models";
import {EditNoteComponent} from "../edit-note/edit-note.component";

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [
    AddNoteComponent,
    EditNoteComponent
  ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements AfterViewInit {

  protected noteService = inject(NotesService);
  noteSelected: note | null | undefined;
  addNoteVerification: boolean = false;
  editNoteVerification: boolean = false;
  deleteNoteValidation: boolean | undefined;


  ngAfterViewInit() {
    this.noteService.getUserNotes();
  }

  editNote(note: note) {
    this.noteSelected = note;
    this.editNoteVerification = true;
  }

  deleteNote(note: note) {
    this.noteSelected = note;
    this.editNoteVerification = true;
    this.deleteNoteValidation = true;
  }

  addNote() {
    this.addNoteVerification = true;
  }

  recibirDato(check: boolean) {
    if (check) alert("Nota dada de alta")
    this.addNoteVerification = false;
    this.editNoteVerification = false;

  }

  ordernarIds() {
    return this.noteService.notesSignalComputed().sort((a: any, b: any) => a.id - b.id);
  }
}
