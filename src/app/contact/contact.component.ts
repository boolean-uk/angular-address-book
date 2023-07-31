import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input('Contact') contact: { firstName: string; lastName: string; street: string; city: string; } | undefined

  @Output('addNewContact') addNewContact = new EventEmitter();
  clicked() {
    this.addNewContact.emit(this.contact);
  }
}
