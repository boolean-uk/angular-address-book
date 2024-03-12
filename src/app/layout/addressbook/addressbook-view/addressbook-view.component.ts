import { Component, OnInit } from '@angular/core';
import {
  AddressEntry,
  AddressbookService,
} from '../../../services/addressbook.service';
// import {
//   AddressEntry,
//   AddressbookService,
// } from 'src/app/services/addressbook.service';

@Component({
  selector: 'app-addressbook-view',
  templateUrl: './addressbook-view.component.html',
  styleUrls: ['./addressbook-view.component.css'],
})
export class AddressbookViewComponent implements OnInit {
  people: AddressEntry[] = [];

  constructor(private addressbookService: AddressbookService) {}

  ngOnInit(): void {
    this.people = this.addressbookService.people;
    console.log(this.people);
  }
}
