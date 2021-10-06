import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from './models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadGuard implements CanActivate, CanLoad {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    return this.checkUser();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUser();
  }

  checkUser(): boolean {
    const user: IUser | null = !!localStorage.getItem('user')
      ? JSON.parse(`${localStorage.getItem('user')}`) as IUser
      : null;
    return !!user;
  }
}
