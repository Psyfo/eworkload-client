import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/layout/admin/user/user.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.userService.currentUser();

    // if (user.Role === next.data.role) {
    //   return true;
    // }

    // navigate to not found page
    this.router.navigate(['/access-denied']);
    return false;
  }
}
