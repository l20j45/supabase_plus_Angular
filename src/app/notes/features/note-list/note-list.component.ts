import {AfterViewInit, Component, inject} from '@angular/core';
import {NotesService} from "../../data-access/notes.service";
import {AddNoteComponent} from "../add-note/add-note.component";

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [
    AddNoteComponent
  ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements AfterViewInit {

  protected noteService = inject(NotesService);

  ngAfterViewInit() {
    this.noteService.getUserNotes();
  }
}
