import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { LibraryComponent } from './library.component';

import { AuthGuardService as AuthGuard } from '../../core-services/guard/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'add',
        component: AddComponent,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard],
        data: { page: 'add-page' }
      },
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
