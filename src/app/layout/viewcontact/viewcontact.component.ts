import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactserviceService } from 'src/app/contactservice.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent  implements OnInit{

  contact :Contact | null = null ;

  constructor(private service: ContactserviceService, private route: ActivatedRoute){
    
    //this.contact = service.getContact();
  }
 
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.contact = this.service.getContact(id);
    });
  }
}
