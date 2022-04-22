import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router:Router){

  }

  canActivate(): Observable<boolean>| boolean {


    if(localStorage.getItem('usuario')){
      return true;
    }else{
      this.router.navigateByUrl('/login')
      return false;
    }
  }
  canLoad(): Observable<boolean> | boolean {
    if(localStorage.getItem('usuario')){
      return true;
    }else{this.router.navigateByUrl('/login')
      return false;
    }
  }
}
