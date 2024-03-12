import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], 
  imports: [RouterModule, CommonModule]
})
export class ListComponent {
  constructor(private readonly contactService :ContactsService){ }
  contacts: Contact[] = this.contactService.contacts;
}
