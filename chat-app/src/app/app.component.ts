import { Component, Inject } from '@angular/core';

//Importing the services
import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

import { ChatExampleData } from './data/chat-example-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService) {
      ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
