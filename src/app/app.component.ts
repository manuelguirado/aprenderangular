import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';  
import { CommetsComponent } from './commets/commets.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, UserComponent,CommetsComponent],
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css'],
  

})
export class AppComponent {
   city = 'almunecar';
    greet(){
     alert('hello how are you');  
   }

}
