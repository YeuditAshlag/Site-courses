

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

    someCondition: boolean = true;

    constructor(private _router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem("user") == "" && localStorage.getItem("password") == "") {
            alert("You are not connected!")
            this._router.navigate(['/login'])
            return false;
        }
        return true;
    }
}