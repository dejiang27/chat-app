import { Component, OnInit } from '@angular/core';
import{AuthService} from '../services/auth.service';
@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }

}
