import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AddressEntry } from 'src/app/services/addressbook.service';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css'],
})
export class PersonItemComponent {
  @Input({ required: true }) person!: AddressEntry;

  constructor() {}
}
