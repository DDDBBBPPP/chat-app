import { Component, inject, input, OnInit, output } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonListHeader, IonList, IonItem, IonThumbnail, IonImg, IonLabel, ModalController } from "@ionic/angular/standalone";
import { User } from 'src/app/interfaces/user.interface';
import { ChatRoomService } from 'src/app/services/chat-room/chat-room.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
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
export class UsersComponent implements OnInit {
  users = input<User[]>([]);
  close = output<boolean>();
  private chatroom = inject(ChatRoomService);
  private router = inject(Router);
  private modalCtrl = inject(ModalController);

  constructor() { }

  ngOnInit() { }

  closeModal() {
    this.close.emit(true);
  }

  async startChat(user: User) {
    try {

      const data = await this.chatroom.createChatroom(user);
      console.log(data);
      this.modalCtrl.dismiss();

      //navigate to single chat screen
      this.router.navigate(['/', 'tabs', 'chat', data?.roomId ]);

    } catch (e) {
      throw (e);
    }

  }


}
