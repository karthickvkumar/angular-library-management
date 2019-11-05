import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './core-components/page-not-found/page-not-found.component';
import { CustomPreloadingStrategy } from './custom-preloading.service';
import { NoAccessComponent } from './core-components/no-access/no-access.component';
import { AuthGuardService as AuthGuard } from './core-services/guard/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./feature-modules/login/login.module').then(module => module.LoginModule),
    data: { preload: true }
  },
  {
    path: 'library',
    loadChildren: () => import('./feature-modules/library/library.module').then(module => module.LibraryModule),
    data: { preload: true },
    canLoad: [AuthGuard]
  },
  {
    path: 'report',
    loadChildren: () => import('./feature-modules/report/report.module').then(module => module.ReportModule),
    data: { preload: true }
  },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
