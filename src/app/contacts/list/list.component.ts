import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private readonly router = inject(Router);

  public contacts$ = new Observable<Contact[]>();

  constructor(private readonly contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contacts$ = this.contactsService.getContacts();
    this.contacts$.subscribe((contacts) => {
      contacts.forEach((contact) => {
        console.log(contact.firstName + ' ' + contact.lastName);
      });
    });
  }
  refreshContacts(): void {
    this.contacts$ = this.contactsService.getContacts();
  }
  deleteContact(id: string): void {
    const confirmed = confirm('Are you sure you want to delete this contact?');
    if (confirmed) {
      this.contactsService.deleteContactById(id).subscribe({
        next: () => {
          console.log(`Contact with ID ${id} deleted successfully.`);
          //this.router.navigate(['/contacts']); // this doesn't work as we are already on /contacts so we'll call a refresh method instead
          this.refreshContacts();
        },
        error: (err) => {
          console.error('Delete failed:', err);
        },
      });
    }
  }
}
