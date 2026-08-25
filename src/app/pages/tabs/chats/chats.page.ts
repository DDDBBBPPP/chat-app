import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { createOutline } from 'ionicons/icons';
import { ThemeService } from 'src/app/services/theme/theme.service';

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
          ]
})
export class ChatsPage implements OnInit {


  chatrooms = signal<any>([]);
  isDarkMode = computed(() => this.theme.paletteToggle());
  private theme = inject(ThemeService);

  constructor() { 
    addIcons({
      createOutline,
    });


  }

  ngOnInit() {
    
    this.chatrooms.set([
    {
      name: 'John Doe',
      photo: 'https://i.pravatar.cc/300?img=11',
      lastMessage: 'Hey there!',
      lastMessageTime: '2026-08-25T10:30:00Z'
    },
    {
      name: 'Jane Smith',
      photo: 'https://i.pravatar.cc/300?img=47',
      lastMessage: 'Are you coming to the meeting?',
      lastMessageTime: '2026-08-25T09:45:00Z'
    },
    {
      name: 'Michael Brown',
      photo: 'https://i.pravatar.cc/300?img=12',
      lastMessage: 'I will send you the files later.',
      lastMessageTime: '2026-08-24T18:20:00Z'
    },
    {
      name: 'Emily Davis',
      photo: 'https://i.pravatar.cc/300?img=45',
      lastMessage: 'Thank you so much!',
      lastMessageTime: '2026-08-24T16:10:00Z'
    },
    {
      name: 'Daniel Wilson',
      photo: 'https://i.pravatar.cc/300?img=15',
      lastMessage: 'Let me check and get back to you.',
      lastMessageTime: '2026-08-24T12:35:00Z'
    },
    {
      name: 'Sarah Miller',
      photo: 'https://i.pravatar.cc/300?img=44',
      lastMessage: 'See you tomorrow!',
      lastMessageTime: '2026-08-23T21:15:00Z'
    },
    {
      name: 'James Anderson',
      photo: 'https://i.pravatar.cc/300?img=14',
      lastMessage: 'That sounds like a great idea.',
      lastMessageTime: '2026-08-23T17:40:00Z'
    },
    {
      name: 'Olivia Taylor',
      photo: 'https://i.pravatar.cc/300?img=48',
      lastMessage: 'Can you call me when you are free?',
      lastMessageTime: '2026-08-23T14:05:00Z'
    }
  ]);

  }

}
