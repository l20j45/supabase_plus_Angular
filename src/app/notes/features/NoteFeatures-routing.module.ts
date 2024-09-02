import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoteListComponent} from "./note-list/note-list.component";

const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./note-list/note-list.component').then(m => m.NoteListComponent),
    },
    // {
    //   path: '**',
    //   redirectTo: '',
    // }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteFeaturesRoutingModule {
}
