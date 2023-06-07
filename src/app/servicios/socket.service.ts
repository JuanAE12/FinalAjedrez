import { Injectable } from '@angular/core';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  io = io('http://localhost:4000/',{
    transports: ['websocket'],
    withCredentials: true,
    autoConnect: true
  });
  constructor() { 
    this.io.emit('verificar');
  }
}
