import { Component } from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from "../models/contact";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private _contactService: ContactService) {
    this.contacts = this._contactService.contacts;
  }
}
