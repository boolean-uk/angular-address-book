import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: any;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactService.getContactById(id);
    if (!this.contact) {
      this.errorMessage = 'Contact not found!';
    }
  }

  saveContact() {
    if (this.contact) {
      // Save the updated contact details
      this.router.navigate(['/contact-list']);
    }
  }
}