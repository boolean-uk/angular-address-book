import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AddressEntry,
  AddressbookService,
} from 'src/app/services/addressbook.service';

@Component({
  selector: 'app-single-person-view',
  templateUrl: './single-person-view.component.html',
  styleUrls: ['./single-person-view.component.css'],
})
export class SinglePersonViewComponent implements OnInit {
  id: string | null = null;
  person!: AddressEntry;

  constructor(
    private route: ActivatedRoute,
    private addressbookService: AddressbookService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('contactId'); // 'id' must

    this.person = this.addressbookService.people.find(
      (p) => p.id.toString() === this.id
    )!;
    console.log(this.person);
  }
}
