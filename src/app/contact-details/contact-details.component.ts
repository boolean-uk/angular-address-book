import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Contact } from 'src/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact:any
  constructor(private readonly route: ActivatedRoute ,private contactService: ContactService) {}
     
   id: number | null = Number(this.route.snapshot.paramMap.get('id'));

  

  paramsSub: Subscription | null = null;

  async ngOnInit(): Promise<void> {
    this.paramsSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    console.log(this.contactService.getContactById(Number(this.id)))
    this.contact = this.contactService.getContactById(Number(this.id))

  }

 
}