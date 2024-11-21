import { Component } from '@angular/core';
import { Contact, CreatedContactsService } from '../created-contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact!: Contact | undefined;
  id!: number;

  constructor(
    public createdContactsService: CreatedContactsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.createdContactsService
      .getContacts()
      .find((el) => el.id === this.id);
  }
}
