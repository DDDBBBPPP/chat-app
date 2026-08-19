import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Strings } from 'src/app/enums/strings.enum';
import { StorageService } from 'src/app/services/storage/storage.service';

export const welcomeGuard: CanActivateFn = async (route, state) => {
  const storage = inject(StorageService);
  const router = inject(Router);

  const  data = await storage.getStorage(Strings.INTRO_KEY);
  if(data && data?.value === 'welcome') {
    return true;

  }
  router.navigateByUrl('/welcome', {replaceUrl: true});
  return false;
};
