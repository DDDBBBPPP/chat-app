import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

 export const authGuard: CanActivateFn = async (route, state) => {

  const auth = inject(AuthService);

  const isAuthenticated = await auth.isAuthenticated();
  if(isAuthenticated){
    return true;
  }

  auth.navigateByUrl('/login');
  return false;
};
