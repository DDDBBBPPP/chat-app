import { Injectable, signal } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  messages = signal<Chat[]>([
    // John Doe - room_001
    {
      senderId: 1,
      message: 'Hi! How are you doing?',
      timestamp: new Date('2026-08-25T09:35:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_001',
      userId: 10
    },
    {
      senderId: 10,
      message: 'I am doing well, thanks! I have been working on the mobile application we discussed last week.',
      timestamp: new Date('2026-08-25T09:40:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_001',
      userId: 1
    },
    {
      senderId: 1,
      message: 'That sounds great. Were you finally able to solve the navigation problem between the login page and the main chat screen?',
      timestamp: new Date('2026-08-25T09:45:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_001',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Yes, the navigation is working now. The problem was related to one of the routes and a component that was not being imported correctly.',
      timestamp: new Date('2026-08-25T09:50:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_001',
      userId: 1
    },
    {
      senderId: 1,
      message: 'Nice! Those problems can be difficult to find because the error message does not always point directly to the file that is causing the issue.',
      timestamp: new Date('2026-08-25T09:55:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_001',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Exactly. Now I am creating mock conversations so I can test the message bubbles, timestamps, automatic scrolling and the general layout of the chatroom.',
      timestamp: new Date('2026-08-25T10:00:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_001',
      userId: 1
    },
    {
      senderId: 1,
      message: 'You should include several long messages as well. Short messages are useful, but they do not show whether the text wrapping and maximum bubble width are working properly.',
      timestamp: new Date('2026-08-25T10:05:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_001',
      userId: 10
    },
    {
      senderId: 10,
      message: 'That is precisely what I am testing now. I also want enough content to make the page scroll and confirm that the newest message remains accessible above the input area.',
      timestamp: new Date('2026-08-25T10:10:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_001',
      userId: 1
    },
    {
      senderId: 1,
      message: 'Remember to check it on different screen sizes. A conversation that looks correct in the browser may behave differently on a narrow mobile device.',
      timestamp: new Date('2026-08-25T10:15:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_001',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Yes, I will test it using the responsive device simulator when the basic structure is finished.',
      timestamp: new Date('2026-08-25T10:20:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_001',
      userId: 1
    },
    {
      senderId: 1,
      message: 'Perfect. Let me know if you need help checking the layout.',
      timestamp: new Date('2026-08-25T10:25:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_001',
      userId: 10
    },
    {
      senderId: 1,
      message: 'Hey there!',
      timestamp: new Date('2026-08-25T10:30:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_001',
      userId: 10
    },

    // Jane Smith - room_002
    {
      senderId: 10,
      message: 'Hi Jane, is the meeting still scheduled for today?',
      timestamp: new Date('2026-08-25T08:45:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_002',
      userId: 2
    },
    {
      senderId: 2,
      message: 'Yes, it is. We need to review the current progress and decide which tasks should be completed before the end of the week.',
      timestamp: new Date('2026-08-25T08:50:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_002',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Perfect. I have prepared a short summary of what is already working and a list of the errors that still need to be investigated.',
      timestamp: new Date('2026-08-25T08:55:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_002',
      userId: 2
    },
    {
      senderId: 2,
      message: 'Could you also include the changes made to the chat interface? I think the rest of the team will want to see how the new message components behave.',
      timestamp: new Date('2026-08-25T09:00:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_002',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Of course. The message bubbles now distinguish between the current user and the other participant, and the timestamps appear below the message text.',
      timestamp: new Date('2026-08-25T09:05:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_002',
      userId: 2
    },
    {
      senderId: 2,
      message: 'Great. It would also be useful to demonstrate a conversation with several messages so that we can verify the scrolling behaviour during the presentation.',
      timestamp: new Date('2026-08-25T09:10:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_002',
      userId: 10
    },
    {
      senderId: 10,
      message: 'I have already added enough mock data for that. Some of the messages are deliberately long to make sure the text wraps correctly inside each bubble.',
      timestamp: new Date('2026-08-25T09:15:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_002',
      userId: 2
    },
    {
      senderId: 2,
      message: 'Excellent. Please bring your laptop because the meeting room computer sometimes has problems when running development projects locally.',
      timestamp: new Date('2026-08-25T09:20:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_002',
      userId: 10
    },
    {
      senderId: 10,
      message: 'No problem. I will arrive a little early so I have enough time to open the project and check that everything is running correctly.',
      timestamp: new Date('2026-08-25T09:25:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_002',
      userId: 2
    },
    {
      senderId: 2,
      message: 'Good idea. The meeting starts at eleven, but we can enter the room fifteen minutes earlier.',
      timestamp: new Date('2026-08-25T09:30:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_002',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Perfect, I will see you there.',
      timestamp: new Date('2026-08-25T09:38:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_002',
      userId: 2
    },
    {
      senderId: 2,
      message: 'Are you coming to the meeting?',
      timestamp: new Date('2026-08-25T09:45:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_002',
      userId: 10
    },

    // Michael Brown - room_003
    {
      senderId: 3,
      message: 'I have finished reviewing the first version of the documents you shared with me yesterday.',
      timestamp: new Date('2026-08-24T17:15:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_003',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Great. Did you find any important issues, or are they mostly small formatting changes?',
      timestamp: new Date('2026-08-24T17:20:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_003',
      userId: 3
    },
    {
      senderId: 3,
      message: 'Most of them are minor corrections, but one section needs a clearer explanation because it assumes that the reader already understands how the authentication process works.',
      timestamp: new Date('2026-08-24T17:25:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_003',
      userId: 10
    },
    {
      senderId: 10,
      message: 'That makes sense. I wrote that section after working on the authentication service all afternoon, so I probably skipped some context without noticing.',
      timestamp: new Date('2026-08-24T17:30:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_003',
      userId: 3
    },
    {
      senderId: 3,
      message: 'It happens all the time. When you know the implementation well, it is easy to forget that another person does not have the same information.',
      timestamp: new Date('2026-08-24T17:35:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_003',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Could you leave a comment next to that section? I will rewrite it tomorrow and include a simple example showing the complete flow.',
      timestamp: new Date('2026-08-24T17:40:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_003',
      userId: 3
    },
    {
      senderId: 3,
      message: 'Sure. I have also corrected a couple of filenames and updated the screenshots that were showing an older version of the application.',
      timestamp: new Date('2026-08-24T17:45:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_003',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Thank you. The interface has changed quite a bit since those screenshots were taken, especially the header and the message input area.',
      timestamp: new Date('2026-08-24T17:50:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_003',
      userId: 3
    },
    {
      senderId: 3,
      message: 'Yes, the current version looks cleaner. The spacing is more consistent, and it is much easier to identify who sent each message.',
      timestamp: new Date('2026-08-24T17:55:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_003',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Great, could you send everything to me when you finish?',
      timestamp: new Date('2026-08-24T18:05:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_003',
      userId: 3
    },
    {
      senderId: 3,
      message: 'Yes. I just need to organise the corrected documents and make sure that none of the original files are missing.',
      timestamp: new Date('2026-08-24T18:12:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_003',
      userId: 10
    },
    {
      senderId: 3,
      message: 'I will send you the files later.',
      timestamp: new Date('2026-08-24T18:20:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_003',
      userId: 10
    },

    // Emily Davis - room_004
    {
      senderId: 4,
      message: 'Hi! Could you help me with an issue I found while testing the application on my phone?',
      timestamp: new Date('2026-08-24T14:55:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_004',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Sure. Tell me what happened and which page you were using when the problem appeared.',
      timestamp: new Date('2026-08-24T15:00:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_004',
      userId: 4
    },
    {
      senderId: 4,
      message: 'I was inside a conversation and tried to scroll to the newest message, but the input container covered part of the final message at the bottom.',
      timestamp: new Date('2026-08-24T15:05:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_004',
      userId: 10
    },
    {
      senderId: 10,
      message: 'That probably means the content does not have enough bottom spacing to compensate for the fixed message input. Does it happen in every conversation?',
      timestamp: new Date('2026-08-24T15:10:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_004',
      userId: 4
    },
    {
      senderId: 4,
      message: 'I only noticed it in the longest conversation. The shorter chats fit on the screen, so there is no scrolling and the problem is not visible.',
      timestamp: new Date('2026-08-24T15:15:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_004',
      userId: 10
    },
    {
      senderId: 10,
      message: 'That explains why I did not see it earlier. My mock conversations were too short to reproduce the situation properly.',
      timestamp: new Date('2026-08-24T15:20:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_004',
      userId: 4
    },
    {
      senderId: 4,
      message: 'It might be worth adding several long messages to the mock data. That would let you test scrolling, text wrapping and the position of the input at the same time.',
      timestamp: new Date('2026-08-24T15:25:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_004',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Good idea. I will create longer conversations for the first few rooms and leave the others short so I can compare both situations easily.',
      timestamp: new Date('2026-08-24T15:30:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_004',
      userId: 4
    },
    {
      senderId: 4,
      message: 'Make sure you test messages sent by both users. The bubbles are aligned differently, so the available width and the line wrapping will not be exactly the same.',
      timestamp: new Date('2026-08-24T15:35:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_004',
      userId: 10
    },
    {
      senderId: 10,
      message: 'I will. I also want to confirm that the timestamp and delivery icon remain aligned when a message occupies four or five lines.',
      timestamp: new Date('2026-08-24T15:40:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_004',
      userId: 4
    },
    {
      senderId: 4,
      message: 'That should give you enough test coverage for the current component. You can always add edge cases later if you find another layout problem.',
      timestamp: new Date('2026-08-24T15:48:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_004',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Sure, I have just sent you the solution.',
      timestamp: new Date('2026-08-24T16:05:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_004',
      userId: 4
    },
    {
      senderId: 4,
      message: 'Thank you so much!',
      timestamp: new Date('2026-08-24T16:10:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_004',
      userId: 10
    },

    // David Wilson - room_005
    {
      senderId: 10,
      message: 'Did you have time to review the latest changes?',
      timestamp: new Date('2026-08-24T12:20:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_005',
      userId: 5
    },
    {
      senderId: 5,
      message: 'I have not checked them yet.',
      timestamp: new Date('2026-08-24T12:28:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_005',
      userId: 10
    },
    {
      senderId: 5,
      message: 'Let me check and get back to you.',
      timestamp: new Date('2026-08-24T12:35:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_005',
      userId: 10
    },

    // Sarah Miller - room_006
    {
      senderId: 6,
      message: 'Are we still meeting tomorrow morning?',
      timestamp: new Date('2026-08-23T21:00:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_006',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Yes, I will be there at ten.',
      timestamp: new Date('2026-08-23T21:08:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_006',
      userId: 6
    },
    {
      senderId: 6,
      message: 'See you tomorrow!',
      timestamp: new Date('2026-08-23T21:15:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_006',
      userId: 10
    },

    // James Anderson - room_007
    {
      senderId: 10,
      message: 'We could add that feature to the next version.',
      timestamp: new Date('2026-08-23T17:25:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_007',
      userId: 11
    },
    {
      senderId: 11,
      message: 'Yes, it would make the application much better.',
      timestamp: new Date('2026-08-23T17:33:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_007',
      userId: 10
    },
    {
      senderId: 11,
      message: 'That sounds like a great idea.',
      timestamp: new Date('2026-08-23T17:40:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_007',
      userId: 10
    },

    // Olivia Thompson - room_008
    {
      senderId: 12,
      message: 'Hi, I need to ask you something.',
      timestamp: new Date('2026-08-23T13:50:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_008',
      userId: 10
    },
    {
      senderId: 10,
      message: 'Of course. I will be available this afternoon.',
      timestamp: new Date('2026-08-23T13:58:00Z').getTime(),
      isCurrentUser: true,
      roomId: 'room_008',
      userId: 12
    },
    {
      senderId: 12,
      message: 'Can you call me when you are free?',
      timestamp: new Date('2026-08-23T14:05:00Z').getTime(),
      isCurrentUser: false,
      roomId: 'room_008',
      userId: 10
    }
  ]);

  getMessages(roomId: string) {
    return this.messages().filter((message) => message.roomId === roomId);
  }

  async sendMessage(roomId: string, message: string, currentUserId: number){
    try{

      const data:Chat = {
      id: '1',
      senderId: currentUserId,
      message,
      timestamp: Date.now(),
      isCurrentUser: true,
      roomId
    };
    // send it to the server

    return data;

    }catch(e){
      console.log(e);
      throw(e);
    }
    

  }
}
