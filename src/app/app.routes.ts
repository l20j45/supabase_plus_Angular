import {Routes} from '@angular/router';
import {privateGuard} from "./shared/guard/private.guard";
import {publicGuard} from "./shared/guard/public.guard";




export const routes: Routes = [

    {
      path: 'auth',
      canActivate: [publicGuard],
      loadChildren: () => import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
    },
    {
      path: '',
      canActivate: [privateGuard],
      loadChildren: () => import('./notes/notes-routing.module').then((m) => m.NotesRoutingModule),
    }


  ]
;
