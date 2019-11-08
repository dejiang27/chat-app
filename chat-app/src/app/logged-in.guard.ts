import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authservice: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean {
      const isLoggedIn = this.authservice.isLoggedIn();
      console.log('canActivate', isLoggedIn);
    return isLoggedIn;
  }
  
}
