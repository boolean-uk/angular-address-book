import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact$ = new Observable<Contact>();
  route = inject(ActivatedRoute);
  id: string | null = this.route.snapshot.paramMap.get('id');
  constructor(private readonly contactsService: ContactsService) {
    this.contact$ = this.contactsService.getContactById(this.id as string);
  }
}
