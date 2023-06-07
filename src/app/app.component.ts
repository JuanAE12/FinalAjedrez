import { Component } from '@angular/core';
import { SocketService } from './servicios/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalAjedrez';

  constructor(private socketService: SocketService) {

  }
}
//var board1 = Chessboard('board1', 'start');