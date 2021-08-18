import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../../admin/user/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  userId: string;
  user: IUser;

  private unsubscribe = new Subject();

  constructor(
    public router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.items = [];

    // Get current user ID
    const authData = JSON.parse(localStorage.getItem('authData'));
    this.userService.byUserId(authData.userId).subscribe((data) => {
      this.user = data;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  logout() {
    this.authService.logout();
  }
}
