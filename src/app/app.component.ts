import { Component } from '@angular/core';
import { CONTACTS, ContactArray } from './layout/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-address-book';
  contacts: ContactArray = CONTACTS;
}
