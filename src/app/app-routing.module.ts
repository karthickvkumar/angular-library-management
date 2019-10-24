import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', 
		redirectTo: '/app', 
		pathMatch: 'full' 
	},
	{
    path: 'app',
    loadChildren: () => import('./feature-modules/login/login.module').then(module => module.LoginModule) 
    //data: { preload: true }
  },
  {
    path: 'library',
    loadChildren: () => import('./feature-modules/library/library.module').then(module => module.LibraryModule) 
    //data: { preload: false },
  },
  {
    path: 'report',
    loadChildren: () => import('./feature-modules/report/report.module').then(module => module.ReportModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
