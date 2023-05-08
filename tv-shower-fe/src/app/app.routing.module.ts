import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Route[] = [
  {
    path: 'list',
    loadChildren: () =>
      import('./features/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'add-show',
    loadChildren: () =>
      import('./features/add-show/add-show.module').then(
        (m) => m.AddShowModule
      ),
  },
  {
    path: 'edit-show/:id',
    loadChildren: () =>
      import('./features/edit-show/edit-show.module').then(
        (m) => m.EditShowModule
      ),
  },
  {
    path: 'details-show/:id',
    loadChildren: () =>
      import('./features/details-show/details-show.module').then(
        (m) => m.DetailsShowModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
