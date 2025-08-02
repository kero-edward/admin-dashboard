import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const eToken = localStorage.getItem('eToken');

  if (eToken) {
    const { username, password } = JSON.parse(eToken);
    const modifiedReq = req.clone({
      setHeaders: {
        'X-Username': username,
        'X-Password': password,
      },
    });
    return next(modifiedReq);
  }

  return next(req);
};
