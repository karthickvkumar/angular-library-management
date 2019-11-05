import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  CanDeactivate
} from '@angular/router';

import { AddComponent } from '../../feature-modules/library/add/add.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<AddComponent> {
  constructor(public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.info(route, state);

    let userType: string = localStorage.getItem('mode');

    if (userType == 'admin' && route.data.page == 'add-page') {
      return true
    } else {
      this.router.navigateByUrl('/no-access');
      return false;
    }
  }

  canActivateChild(): boolean {
    let userType: string = sessionStorage.getItem('type');
    if (userType == 'admin') {
      return true;
    } else {
      this.router.navigateByUrl('/no-access');
      return false;
    }
  }

  canLoad(): boolean {
    //this.router.navigateByUrl('/no-access');
    return true;
  }

  canDeactivate(component: AddComponent): boolean {
    console.info(component);
    if (component.unsavedChanges) {
      return confirm('Are you sure?');
    }
    return true;
  }

}
