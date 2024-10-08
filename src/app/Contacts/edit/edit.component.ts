import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contact: Contact | null = null;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContactById(Number(id)).subscribe(
        contact => {
          if (contact) {
            this.contact = contact;
          } else {
            this.errorMessage = 'Contact not found.';
          }
        },
        error => {
          this.errorMessage = 'An error occurred while fetching the contact.';
        }
      );
    } else {
      this.errorMessage = 'Invalid contact ID.';
    }
  }

  onSubmit(): void {
    if (this.contact) {
      this.contactService.updateContact(this.contact).subscribe(() => {
        this.router.navigate(['/contacts', this.contact?.id]);
      });
    }
  }
}