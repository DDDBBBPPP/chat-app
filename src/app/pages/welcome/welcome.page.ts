import { NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IonContent, IonicSlides, IonButton } from '@ionic/angular/standalone';
import { Strings } from 'src/app/enums/strings.enum';
import { StorageService } from 'src/app/services/storage/storage.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonContent, NgStyle, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomePage implements OnInit {

  slides= [
     'assets/on-boarding-screens/1.png',
     'assets/on-boarding-screens/2.png',
     'assets/on-boarding-screens/3.png'

  ];

  swiperModules = [IonicSlides];


  private router = inject(Router);
  private storage = inject(StorageService);

  constructor() { }

  ngOnInit() {
  }

  goToLogin(){
      this.storage.setStorage(Strings.INTRO_KEY, 'welcome');
      this.router.navigateByUrl('/login',{
        replaceUrl: true
      })
  }

}
