import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  async logout() {
    const {error} = await this.authService.signOut();
    this.router.navigateByUrl("auth/log-in");
  }
}
