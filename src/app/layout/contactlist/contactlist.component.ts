import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, ContactserviceService } from 'src/app/contactservice.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})

export class ContactlistComponent {

  contactList : Contact[];
  constructor(private contactservice : ContactserviceService, private router : Router){

    console.log(this.contactservice.getContacts());
     this.contactList = this.contactservice.getContacts();
  }


  click(id: number){
    this.router.navigate(["/contact",id]);
  }




}
