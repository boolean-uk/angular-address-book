import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly contactService: ContactsService, private router: Router){}
  contacts: [Contact] = this.contactService.contacts

  ngOnInit(){
    console.log(this.contacts)
  }

  edit(id: number){
    this.router.navigateByUrl(`contacts/edit/${id}`);
  }
  
}
