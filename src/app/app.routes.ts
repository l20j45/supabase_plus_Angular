import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/features/features-routing.module').then((m) => m.FeaturesRoutingModule),
      }
    ]
  },
];
