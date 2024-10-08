import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contactId!: number;
  contact: { name: string; email: string; phone: string }  | null = null; ;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contactId = +this.route.snapshot.paramMap.get('id')!;
    const fetchedContact = this.contactsService.getContactById(this.contactId);
    if (fetchedContact) {
      this.contact = fetchedContact;
      this.errorMessage = null;
    } else {
      this.errorMessage = `Contact with ID ${this.contactId} not found.`;
    }

  }

  saveChanges(): void {
    if (!this.contact) {
      this.errorMessage = "Unable to save changes. Please check the contact details.";
      return;
    }

    const existingContact = this.contactsService.getContactById(this.contactId);
    if (existingContact) {

      this.contactsService.updateContact(this.contactId, {
        name: this.contact.name,
        email: this.contact.email,
        phone: this.contact.phone
      });
      this.router.navigate(['/contacts']);
    } else {
      this.errorMessage = `Cannot update contact with ID ${this.contactId}. Contact does not exist.`;
    }
  }
}
