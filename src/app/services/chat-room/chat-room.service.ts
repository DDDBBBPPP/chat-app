import { computed, inject, Injectable, signal } from '@angular/core';
import { Chatroom } from 'src/app/interfaces/chatroom.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatRoomService {

  private auth = inject(AuthService);

  userId = computed(() => this.auth.getUid());

  chatrooms = signal<Chatroom[]>([
    {
      name: 'John Doe',
      photo: 'https://i.pravatar.cc/300?img=11',
      lastMessage: 'Hey there!',
      lastMessageTimestamp: '2026-08-25T10:30:00Z',
      roomId: 'room_001',
      room: {
        usersIds: [1, 10]
      }
    },
    {
      name: 'Jane Smith',
      photo: 'https://i.pravatar.cc/300?img=47',
      lastMessage: 'Are you coming to the meeting?',
      lastMessageTimestamp: '2026-08-25T09:45:00Z',
      roomId: 'room_002',
      room: {
        usersIds: [2, 10]
      }
    },
    {
      name: 'Michael Brown',
      photo: 'https://i.pravatar.cc/300?img=12',
      lastMessage: 'I will send you the files later.',
      lastMessageTimestamp: '2026-08-24T18:20:00Z',
      roomId: 'room_003',
      room: {
        usersIds: [3, 10]
      }
    },
    {
      name: 'Emily Davis',
      photo: 'https://i.pravatar.cc/300?img=45',
      lastMessage: 'Thank you so much!',
      lastMessageTimestamp: '2026-08-24T16:10:00Z',
      roomId: 'room_004',
      room: {
        usersIds: [4, 10]
      }
    },
    {
      name: 'David Wilson',
      photo: 'https://i.pravatar.cc/300?img=13',
      lastMessage: 'Let me check and get back to you.',
      lastMessageTimestamp: '2026-08-24T12:35:00Z',
      roomId: 'room_005',
      room: {
        usersIds: [5, 10]
      }
    },
    {
      name: 'Sarah Miller',
      photo: 'https://i.pravatar.cc/300?img=44',
      lastMessage: 'See you tomorrow!',
      lastMessageTimestamp: '2026-08-23T21:15:00Z',
      roomId: 'room_006',
      room: {
        usersIds: [6, 10]
      }
    },
    {
      name: 'James Anderson',
      photo: 'https://i.pravatar.cc/300?img=16',
      lastMessage: 'That sounds like a great idea.',
      lastMessageTimestamp: '2026-08-23T17:40:00Z',
      roomId: 'room_007',
      room: {
        usersIds: [10, 11]
      }
    },
    {
      name: 'Olivia Thompson',
      photo: 'https://i.pravatar.cc/300?img=41',
      lastMessage: 'Can you call me when you are free?',
      lastMessageTimestamp: '2026-08-23T14:05:00Z',
      roomId: 'room_008',
      room: {
        usersIds: [10, 12]
      }
    }
  ]);

  checkExistingChatroom(userIds: number[]) {

    const userIdsString = JSON.stringify(userIds);

    const chatRoomData = this.chatrooms().find((chatroom: Chatroom) =>
      JSON.stringify(chatroom.room.usersIds) === userIdsString);

    console.log(chatRoomData);

    return chatRoomData;
  }

  async createChatroom(user: User) {
    try {
      const currentUserId = await this.userId();
      console.log(currentUserId);

      const userIds = [parseInt(currentUserId!), user.id].sort(
        (a, b) => a - b);
      console.log(userIds);

      let chatRoomData = this.checkExistingChatroom(userIds);

      if (!chatRoomData) {

        this.chatrooms.update((chatrooms) => {
          const chatRoomRecord: Chatroom = {
            roomId: 'room_10',
            name: user.name,
            photo: user.photo,
            lastMessage: null,
            lastMessageTimestamp: null,
            room: {
              usersIds: userIds
            }
          };
          chatRoomData = chatRoomRecord;
          return [chatRoomRecord, ...chatrooms];
        });
      }
      return chatRoomData;
    } catch (e) {
      throw (e);
    }
  }

  getChatRoom(roomId: string) {
    return this.chatrooms().find((chatroom)=> chatroom.roomId === roomId);
  }

}
