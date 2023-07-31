import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css'],
})
export class ContactListItemComponent {
  @Input() contact!: Contact;
  @Output() contactDeleted = new EventEmitter<void>();

  constructor(private contactService: ContactService) {}

  deleteContact() {
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.contactDeleted.emit();
    });
  }
}
