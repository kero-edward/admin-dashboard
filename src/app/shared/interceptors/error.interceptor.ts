import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      let message = 'Something went wrong';

      switch (error.status) {
        case 401:
          message = 'Unauthorized. Redirecting to login...';
          localStorage.removeItem('eToken');
          router.navigate(['/login']);
          break;

        case 404:
          message = 'Requested resource not found.';
          break;

        case 500:
          message = 'Server error occurred. Please try again later.';
          break;

        case 0:
          message = 'No connection to server.';
          break;

        default:
          message = error?.error?.message || message;
          break;
      }

      Swal.fire('Error', message, 'error');
      return throwError(() => error);
    })
  );
};
