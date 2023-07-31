import {Component, OnInit} from '@angular/core';
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  cont: { firstName: string; lastName: string; street: string; city: string;}[] = []
  constructor(private contactService: ContactService) { }
  ngOnInit(): void {
    this.cont = this.contactService.contacts
  }
}
