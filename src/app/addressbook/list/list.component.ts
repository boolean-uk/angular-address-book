import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressbookService } from '../addressbook.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(
    private readonly addressbookService: AddressbookService,
    private readonly router: Router // Inject Router service
  ) {}

  contacts: Contact[] = this.addressbookService.contacts;

  editContact(id: number): void {
    this.router.navigate(['/contacts', id, 'edit']); // Navigate to the edit page
  }
}
