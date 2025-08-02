import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('eToken');

  if (token) return true;
  else {
    router.navigate(['/login']);
    return false;
  }
};
