import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";


export const routes: Routes = [

    {
      path: 'auth',
      loadChildren: () => import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
    },
    {
      path: '',
      loadChildren: () => import('./notes/notes-routing.module').then((m) => m.NotesRoutingModule),
    }


  ]
;
