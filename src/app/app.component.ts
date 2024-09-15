import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-address-book';
  contacts: any[] = [];

  onContactAdded(newContact: any) {
    this.contacts.push(newContact);
  }
}
