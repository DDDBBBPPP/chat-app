import { Component, input, OnInit, output } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonListHeader, IonList, IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/angular/standalone";
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone:true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonListHeader,
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel
]
})
export class UsersComponent  implements OnInit {
  users = input<User[]>([]);
  close = output<boolean>();

  constructor() { }

  ngOnInit() {}

  closeModal(){
    this.close.emit(true);

  }

}
