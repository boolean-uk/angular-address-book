import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactsService} from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute} from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  

  public contact:Contact|null ={id:0,firstName:'', lastName:'', street:''};
  
  id = this.route.snapshot.paramMap.get('id');



  contactForm: FormGroup;
  constructor(

    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    
    if(this.id){
      this.contact = this.contactService.getContactById(Number(this.id))
    }

    this.contactForm = this.formBuilder.group({
      firstname: [this.contact?.firstName, Validators.required],
      lastname: [this.contact?.lastName, Validators.required],
      street:this.contact?.street
    });
  }
 
  UpdateContact() {
    if (this.contactForm.valid) {
      try{
            
         const newContact: Contact = {
        id: Number(this.id),
        firstName: this.contactForm.value.firstname,
        lastName: this.contactForm.value.lastname,
        street: this.contactForm.value.street,
      };
      this.contactService.EditContact(newContact);
      this.contactForm.reset();
      }catch(error){
        alert("Contact not updated")

      }
    }
  }

}
