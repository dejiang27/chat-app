import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

import { FromNowPipe } from './pipes/from-now.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatPageComponent,
    ChatMessageComponent,
    ChatThreadComponent,
    FromNowPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MessagesService,
    ThreadsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
