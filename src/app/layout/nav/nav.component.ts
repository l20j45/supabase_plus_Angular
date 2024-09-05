import {Component, OnInit} from '@angular/core';
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
export class NavComponent implements OnInit {
  isAuthenticated: any;

  constructor(private authService: AuthService, private router: Router) {
  }

  async logout() {
    const {error} = await this.authService.signOut();
    this.isAuthenticated = false;
    await this.router.navigateByUrl("auth/log-in");

  }

  async ngOnInit() {
    const {data: {session}} = await this.authService.session()
    this.isAuthenticated = session?.user.aud;

  }
}
