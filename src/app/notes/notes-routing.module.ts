import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoteListComponent} from "./features/note-list/note-list.component";
import {AddNoteComponent} from "./features/add-note/add-note.component";
import {EditNoteComponent} from "./features/edit-note/edit-note.component";

const routes: Routes = [
  {
    path: '',
    component: NoteListComponent
  },
  {
    path: 'add',
    component: AddNoteComponent
  },
  {
    path: 'edit/:id',
    component: EditNoteComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {
}
