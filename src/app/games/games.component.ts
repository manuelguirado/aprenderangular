import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
     <ul>
       @for (item of games; track $index) {
         <li>{{item.name}}</li>
       }
     </ul>
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
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
