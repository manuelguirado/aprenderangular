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
greet() {
  alert('hello how are you');
}
   username = 'manudev';
   isLogginIn = false;
}
