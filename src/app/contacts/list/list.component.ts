import { Component } from '@angular/core';
import { Contact } from 'src/app/types';
import { ContactsModule } from '../contacts.module';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactsmodule : ContactsModule){
    this.contacts= this.contactsmodule.contacts;
    console.log(this.contacts)
  }
  
}
