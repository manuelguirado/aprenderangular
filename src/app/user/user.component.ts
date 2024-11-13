import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  favgame = ''; //createa a variable to store the favorite game
  getFavoriteGame(gameName: string) {
     this.favgame = gameName; //create a function to store the favorite game and  update the variable favgame to the game name
  }
greet() {
  alert('hello how are you');
}
   username = 'manudev';
   isLogginIn = false;
}
