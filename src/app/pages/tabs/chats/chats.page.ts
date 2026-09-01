import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonSearchbar, IonText, IonTitle, IonToolbar, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircle, createOutline } from 'ionicons/icons';
import { NoRecordFoundComponent } from 'src/app/components/no-record-found/no-record-found.component';
import { UsersComponent } from 'src/app/components/users/users.component';
import { Chatroom } from 'src/app/interfaces/chatroom.interface';
import { ChatRoomService } from 'src/app/services/chat-room/chat-room.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
    IonSearchbar,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
    IonText,
    DatePipe,
    NoRecordFoundComponent,
    IonModal,
    UsersComponent,
  ]
})
export class ChatsPage implements OnInit {


  //chatrooms = signal<Chatroom[]>([]);
  chatrooms = computed(() => this.chatroomService.chatrooms())
  model = {
    icon: 'chatbubbles-outline',
    title: 'No Chat Rooms',
    color: 'tertiary',
  }
  isDarkMode = computed(() => this.theme.paletteToggle());
  isNewChat = signal<boolean>(false);

  presentingElement: any = null; // Reference to ion-router-outlet

  private theme = inject(ThemeService);
  private chatroomService = inject(ChatRoomService);
  public userService = inject(UsersService);

  constructor() {
    addIcons({
      createOutline,
      closeCircle,
    });


  }

  ngOnInit() {

    this.presentingElement = document.querySelector('.ion-page');


  }

  setIsNewChat(value: boolean) {
    this.isNewChat.set(value);
  }

}
