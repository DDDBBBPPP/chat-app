import { Injectable, signal } from '@angular/core';
import { Chatroom } from 'src/app/interfaces/chatroom.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatRoomService {

  chatrooms = signal<Chatroom[]>([
      {
        name: 'John Doe',
        photo: 'https://i.pravatar.cc/300?img=11',
        lastMessage: 'Hey there!',
        lastMessageTimestamp: '2026-08-25T10:30:00Z',
        roomId: 'room_001'
      },
      {
        name: 'Jane Smith',
        photo: 'https://i.pravatar.cc/300?img=47',
        lastMessage: 'Are you coming to the meeting?',
        lastMessageTimestamp: '2026-08-25T09:45:00Z',
        roomId: 'room_002'
      },
      {
        name: 'Michael Brown',
        photo: 'https://i.pravatar.cc/300?img=12',
        lastMessage: 'I will send you the files later.',
        lastMessageTimestamp: '2026-08-24T18:20:00Z',
        roomId: 'room_003'
      },
      {
        name: 'Emily Davis',
        photo: 'https://i.pravatar.cc/300?img=45',
        lastMessage: 'Thank you so much!',
        lastMessageTimestamp: '2026-08-24T16:10:00Z',
        roomId: 'room_004'
      },
      {
        name: 'Daniel Wilson',
        photo: 'https://i.pravatar.cc/300?img=15',
        lastMessage: 'Let me check and get back to you.',
        lastMessageTimestamp: '2026-08-24T12:35:00Z',
        roomId: 'room_005'
      },
      {
        name: 'Sarah Miller',
        photo: 'https://i.pravatar.cc/300?img=44',
        lastMessage: 'See you tomorrow!',
        lastMessageTimestamp: '2026-08-23T21:15:00Z',
        roomId: 'room_006'
      },
      {
        name: 'James Anderson',
        photo: 'https://i.pravatar.cc/300?img=14',
        lastMessage: 'That sounds like a great idea.',
        lastMessageTimestamp: '2026-08-23T17:40:00Z',
        roomId: 'room_007'
      },
      {
        name: 'Olivia Taylor',
        photo: 'https://i.pravatar.cc/300?img=48',
        lastMessage: 'Can you call me when you are free?',
        lastMessageTimestamp: '2026-08-23T14:05:00Z',
        roomId: 'room_008'
      }
    ]);

}
