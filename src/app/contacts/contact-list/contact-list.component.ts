import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


export type ContactType = {
  firstName: string | null,
  lastName: string | null,
  address: string | null,
  phoneNumber: string | null
}
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit{
  contacts: ContactType[] = [{
    firstName: "Wojtek",
    lastName: "Zolkowski",
    phoneNumber: "728",
    address: "Warsaw"
  }]

  private subscription: Subscription | null = null

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
    this.contacts.push(history.state)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }



}
