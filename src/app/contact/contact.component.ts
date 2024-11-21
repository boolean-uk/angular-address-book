import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: Contact | undefined;
  constructor(private _contactService: ContactService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const contactId: string | null = this.route.snapshot.paramMap.get('id')

    if(contactId === null) return;
    this.contact = this._contactService.getContactById(Number(contactId));
  }
}
