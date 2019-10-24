import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
	{ path: 'add', component: AddComponent },
	{ path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
