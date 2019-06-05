import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  getActiveRouteId() {
      return this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToRoute(route: string){
      this.router.navigate([route]);
  }


}
