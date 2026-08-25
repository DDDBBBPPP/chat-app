import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, AnimationController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubbleEllipsesOutline, chatbubblesOutline, cogOutline, peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs,
            IonTabBar,
            IonTabButton,
            IonIcon,
            IonLabel,
            NgClass,
  ]
})
export class TabsPage implements OnInit {

  selectedTab = signal<string>('chats');

  private animationCtrl = inject(AnimationController);

  constructor() { 
    addIcons({
      chatbubblesOutline,
      cogOutline,
      peopleOutline,
      chatbubbleEllipsesOutline,
    })
  }

  ngOnInit() {
  }

  getSelected(event: any){
    console.log(event);
    this.selectedTab.set(event?.tab);

    this.applyAnimation();
  }

  applyAnimation(){
    const tabButton = document.querySelector(
      `ion-tab-button[tab="${this.selectedTab()}"]`
    );

    const fadeAnimation = this.createFadeAnimation(
    tabButton as HTMLElement);

    fadeAnimation.keyframes([
      {offset: 0, transform: 'scale(1)'},
      {offset: 0.4, transform: 'scale(1.2)'},
      {offset: 1, transform: 'scale(1)'},

    ]);

    fadeAnimation.play();
  }

  createFadeAnimation(baseEl: HTMLElement){
    return this.animationCtrl.create()
    .addElement(baseEl)
    .duration(300)
    .easing('ease-in-out')
    .fromTo('opacity','0', '1');
  }


}
