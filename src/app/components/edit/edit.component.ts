import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  contactId: number;
  contact: Contact | null = null;
  isEditMode: boolean = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.contactId = idParam !== null ? +idParam : 0;
    
    if (this.contactId) {
      this.isEditMode = true;
      const contact = this.contactService.getContact(this.contactId);
      if (contact == null || contact == undefined){
        this.router.navigate(['/not-found']);
      } else {
        this.contact = contact;
      }
    } else {
      this.contact = { firstName: '', lastName: '', street: '', city: '' };
    }
  }

  onFormSubmit(contactData: Contact) {
    if (this.isEditMode) {
      contactData.id = this.contactId;
      this.contactService.updateContact(contactData);
    } else {
      this.contactService.addContact(contactData);
    }
    this.router.navigate(['/']);
  }
}
