import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact?: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const contact = this.contactService.getContact(Number(id));
      if (contact) {
        this.contact = contact;
      } else {
        this.router.navigate(['/contacts']);
      }
    }
  }

  onEdit(): void {
    if (this.contact) {
      this.router.navigate(['/contacts', this.contact.id, 'edit']);
    }
  }

  onDelete(): void {
    if (this.contact && confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(this.contact.id);
      this.router.navigate(['/contacts']);
    }
  }
} 