import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>this is my favorites games de {{username}}</h3>
     <ul>
       @for (item of games; track $index) {
         <li>{{item.name}}</li>
       }
     </ul>
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input()  username : string =  '';
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
