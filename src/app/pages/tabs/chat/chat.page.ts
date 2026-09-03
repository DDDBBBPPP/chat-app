import { Component, computed, effect, inject, OnInit, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonSpinner, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubblesOutline, checkmarkDoneOutline, send } from 'ionicons/icons';
import { ChatBoxComponent } from 'src/app/components/chat-box/chat-box.component';
import { NoRecordFoundComponent } from 'src/app/components/no-record-found/no-record-found.component';
import { Chat } from 'src/app/interfaces/chat.interface';
import { Chatroom } from 'src/app/interfaces/chatroom.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ChatRoomService } from 'src/app/services/chat-room/chat-room.service';
import { ChatService } from 'src/app/services/chat/chat.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonAvatar,
    IonButtons,
    IonBackButton,
    IonList,
    NoRecordFoundComponent,
    ChatBoxComponent,
    IonFooter,
    IonTextarea,
    FormsModule,
    IonButton,
    IonIcon,
    IonSpinner
  ]
})
export class ChatPage implements OnInit {


  /* chats = computed(()=> this.chatService.messages()); */
  chats = signal<Chat[]>([]);
  message = signal<string | null>(null);
  chatroom!: Chatroom;
  user: User | null = null;
  isLoading = signal<boolean>(false);

  content = viewChild<IonContent>(IonContent);

  model = {
    icon: 'chatbubbles-outline',
    title: 'No Messages',
    color: 'tertiary',
  };

  private route = inject(ActivatedRoute);
  private chatroomService = inject(ChatRoomService);
  private userService = inject(UsersService);
  public theme = inject(ThemeService);
  private chatService = inject(ChatService);

  constructor() {

    effect(() => {
      if (this.chats()?.length! > 0) {
        setTimeout(() => {
          this.scrollToBottom();
        }, 500);
      }
    });

    addIcons({
      chatbubblesOutline,
      send,
      checkmarkDoneOutline,
    })
  }

  ngOnInit() {
    const room_id: any = this.route.snapshot.paramMap.get
      ('id');


    if (!room_id) {
      //go back
      return;
    }

    this.getChatroomById(room_id);

  }

  getChatroomById(room_id: string) {
    const chatroom = this.chatroomService.getChatRoom(room_id);

    if (!chatroom) {
      //return back
      return;
    }

    this.chatroom = chatroom;

    this.chats.set(this.chatService.getMessages(chatroom?.roomId));

    //get user
    this.getUser(chatroom?.room?.usersIds);
  }

  async getUser(userIds: number[]) {
    try {

      const currentUserId = await this.chatroomService.userId();

      const otherUserId = userIds.find(id => id !== parseInt(currentUserId!));

      this.user = this.userService.getUser(otherUserId!)?? null;



    } catch (e) {
      console.log(e);
    }

  }

  scrollToBottom() {
    this.content()?.scrollToBottom(500);
  }

  setIsLoading(value: boolean) {
    this.isLoading.set(value);
  }

  async sendMessage() {
    if (!this.message() || this.message()?.trim() == '') {
      //show anything
      return;
    }
    try {

      this.setIsLoading(true);

      const currentUserId = await this.chatroomService.userId();

      const newChat = await this.chatService.sendMessage(
        this.chatroom.roomId, this.message()!, parseInt(currentUserId!));

      //update chats array
      this.chats.update((chatsArray) => [...chatsArray, newChat]);

      this.message.set('');

      this.setIsLoading(false);
    } catch (e) {
      this.setIsLoading(false);
      console.log(e);
    }
  }

}
