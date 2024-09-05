import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../auth/service/auth.service";

export const publicGuard: CanActivateFn = async () => {

  const router = inject(Router);
  const authService = inject(AuthService);
  const {data: {session}} = await authService.session();

  if (session) {
    await router.navigateByUrl('/');
  }

  return !session;
};
