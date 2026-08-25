import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { IonAvatar, IonButton, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonList, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/angular/standalone';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent,
            IonHeader,
            IonTitle,
            IonToolbar,
            FormsModule,
            IonItem, 
            IonList,
            IonAvatar,
            IonLabel,
            IonToggle,
            IonFooter,
            IonToolbar,
            IonButton,
            IonText,
           ]
})
export class SettingsPage implements OnInit {

  public theme = inject(ThemeService);
  public auth = inject(AuthService);

  constructor() { }

  ngOnInit() {
  }

}
