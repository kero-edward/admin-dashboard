import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('eToken');

  if (token) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
