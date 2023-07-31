import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactType } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contact: ContactType | null = null
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.contact = history.state
  }
}
