import { Component } from '@angular/core';
import { Contact } from '../models/contacts';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact : Contact | null = null;

  constructor(
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute,
    private location: Location
  ) {
    this.contact = this.contactService.GetContactById(
      Number(route.snapshot.paramMap.get('id'))
    );
  }

  goBack(): void {
    this.location.back();
  }
}
