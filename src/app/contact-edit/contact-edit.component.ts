import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  contact: any = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  };

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contactId = Number(this.route.snapshot.paramMap.get('id'));

    const existingContact = this.contactService.getContactById(contactId);
    if (existingContact) {
      this.contact = { ...existingContact };
    } else {
      this.router.navigate(['/contacts']);
    }
  }

  onSubmit() {
    const contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.updateContact(contactId, this.contact);

    this.router.navigate(['/contacts']);
  }
}
