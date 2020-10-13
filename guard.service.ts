import { Injectable } from '@angular/core';
import{LoginService} from 'src/services/login.service';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private _loginService:LoginService, private _router: Router){}
  canActivate():boolean{
    
      if(this._loginService.loggedIn())
    {console.log(this._loginService.loggedIn())
      return true;
      
    }
    else
    {
     localStorage.removeItem('access_token')
     localStorage.removeItem('access_role')
     this._router.navigateByUrl('login')
    }
  }
}