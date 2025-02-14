import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
  standalone: false,
})
export class ViewComponent {
  contactService = inject(ContactsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  deleteContact(): void {
    this.contactService.deleteContactWithId(Number(this.id))
    this.router.navigate(['contacts'])
  }
}
