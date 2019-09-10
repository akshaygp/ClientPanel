import { Injectable } from '@angular/core';
import { CanActivate, Router, RouteReuseStrategy } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { map } from 'rxjs/operators';

@Injectable()
export class RegisterGuard implements CanActivate{
    constructor(
        private router: Router,
        
        private settingsService: SettingsService
    ){}

    canActivate(): boolean{
       if(this.settingsService.getSettings().allowRegistration){
        return true;
       } else {
        this.router.navigate(['/login']);
        return false;
       }
        }
    }
