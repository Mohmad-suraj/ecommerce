import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {
  canActivate()
    {
      
    if(localStorage.getItem('tokenallowed')){
      return true;
    }
    if(localStorage.getItem('product')){
      return true;
    }
  }
  
}
