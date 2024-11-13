import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>this is my favorites games de {{username}}</h3>
     <ul>
       @for (item of games; track $index) {
         <li (click)="fav(games[$index].name) ">{{item.name}}</li>
       }
     </ul>
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  fav(gameName : string){
    this.favGame.emit(gameName); //emit the event to the parent


  }
  @Output()  favGame = new EventEmitter<string>(); //Ccreate a custom event to send to the pather component the favorite game
  @Input()  username : string =  ''; //get the valor for the parent component and show it here
   games = [ 
    {
      id:1,
      name:'Halo'
    },
    {
      id:2,
      name:'Halo 2'
    },
    {
      id:3,
      name:'Halo 3'
    }
   ]
}
