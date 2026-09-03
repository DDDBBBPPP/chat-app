import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Strings } from 'src/app/enums/strings.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private storage = inject(StorageService);
  uid = signal<string | null>(null);
  private router = inject(Router);

  setUserData(value: string ) {
    //this.storage.setStorage(Strings.TOKEN_KEY, JSON.stringify(value));
    this.storage.setStorage(Strings.TOKEN_KEY, value);
  }

 async getUid(){
    if(!this.uid()){
      const data = await this.storage.getStorage(Strings.TOKEN_KEY);
      if(!data?.value || data?.value == null){
        return null;
      }
      this.uid.set(data.value);
    }
    return this.uid();
  }

  setUid(uid: string | null) {
    this.uid.set(uid);
  }

  async login(email: string, password: string): Promise<string> {

    try {

      //work with backend to login

      const uid = '10';
      //save in storage
      this.setUserData(uid);
      this.setUid(uid);
      return uid;


    } catch (e) {
      throw (e);
    }


  }

  async signup(name: string, email: string, password: string): Promise<string> {

    try {

      //work with backend to register user

      const uid = '1';
      //save in storage
      this.setUserData(uid);
      this.setUid(uid);
      return uid;

    } catch (e) {
      throw (e);
    }



  }


  async resetPassword(email: string): Promise<void> {
    try{
      console.log('forgot password')

    }catch(e){
      throw(e);
    }
  }

  async isAuthenticated(): Promise<boolean> {
    const data = await this.storage.getStorage(Strings.TOKEN_KEY);

    if( data?.value && data?.value != null){
      return !!data.value;
    }

    return false
  }


  logout(){
    this.storage.removeStorage(Strings.TOKEN_KEY);
    this.setUid(null);

    this.navigateByUrl('/login');
  }


  navigateByUrl(url: string) {
    this.router.navigateByUrl(url, { replaceUrl: true });
  }

}
