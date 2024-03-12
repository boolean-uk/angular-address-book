import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const contactId = parseInt(id, 10);
      this.contact = this.contactService.getContactById(contactId);
      if (!this.contact) {
        this.errorMessage = 'Contact not found';
      }
    } else {
      // Handle case when ID is not provided
    }
  }

  saveContactChanges() {
    if (this.contact) {
      this.contactService.updateContact(this.contact);
      this.router.navigate(['/contacts', this.contact.id]);
    }
  }
}
