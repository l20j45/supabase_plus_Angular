import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthSignUpComponent} from "../auth/features/auth-sign-up/auth-sign-up.component";
import {AuthLogInComponent} from "../auth/features/auth-log-in/auth-log-in.component";
import {NoteListComponent} from "./features/note-list/note-list.component";

const routes: Routes = [
  {
    path: '',
    component: NoteListComponent
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
