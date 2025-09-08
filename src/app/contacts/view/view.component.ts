import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact: Contact | null = null;
  contactId: number | null = null;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactsService.GetContactById(this.contactId).subscribe((c) => {
      c != undefined
        ? this.contact = c
        : this.contact = null
    })
  }
}
