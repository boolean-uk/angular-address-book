import { Component } from '@angular/core';
import { first } from 'rxjs';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactsService]
})

export class AppComponent {
  title = 'angular-address-book';
  
  constructor(private contactsService: ContactsService){
    
  }

  
}
