import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage {
  messages: { text: string; incoming: boolean }[] = [
    { text: 'Hello!', incoming: true },
    { text: 'Hi there!', incoming: false },
    { text: 'How are you?', incoming: true },
    { text: 'I\'m fine, thanks!', incoming: false },
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, incoming: false });
      this.newMessage = '';
    }
  }
}
