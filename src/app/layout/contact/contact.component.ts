import { Component, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input('contact') contact: Contact | null = null;

  constructor(private router: Router) {}
}
