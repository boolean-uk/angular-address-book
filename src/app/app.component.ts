import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-address-book';
  contacts: any = [];

  onContactAdded(event: Event){
    console.log(event);
    this.contacts.push(event);
  }

  
}
