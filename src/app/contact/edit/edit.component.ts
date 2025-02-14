import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, CreateContact } from 'src/model/contact';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  editForm : FormGroup;
  id: number;
  currentContact: Contact | undefined;
    constructor(
      private readonly formBuilder: FormBuilder,
      private readonly contactService: ContactService,
      private readonly router : Router,
      private route: ActivatedRoute,
    ) {
      this.id = this.route.snapshot.params["id"];
      this.currentContact = contactService.GetContactById(this.id);
      if (this.currentContact !== undefined){
        this.editForm = formBuilder.group({
          firstName: [this.currentContact.firstName, Validators.required],
          lastName: [this.currentContact.lastName, Validators.required],
          street: [this.currentContact.street, Validators.required],
          city: [this.currentContact.city, Validators.required]
      })
      }
      else{
        this.editForm = formBuilder.group({
          firstName: ["", Validators.required],
          lastName: ["", Validators.required],
          street: ["", Validators.required],
          city: ["", Validators.required]
      })
      }
    }
  
    UpdateContact() : void{
      const contact : CreateContact = {
        firstName: this.editForm.value.firstName,
        lastName: this.editForm.value.lastName,
        street: this.editForm.value.street,
        city: this.editForm.value.city
      }
  
      this.contactService.UpdateContact(Number(this.id), contact);
      this.router.navigate(["/Contacts"])
    }
}
