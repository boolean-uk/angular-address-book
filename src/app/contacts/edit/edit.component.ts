import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  editContactForm: FormGroup;
  id: any;
  contact: any;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute
  ){
    this.editContactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    })  
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.contact = this.contactsService.getContactById(Number(this.id));
    this.editContactForm.patchValue({name: this.contact?.name});
  }
  editContact() {
    if(this.editContactForm.valid) {
        this.contact.firstName = this.editContactForm.value.firstName;
        this.contact.lastName = this.editContactForm.value.lastName;
        this.contact.street = this.editContactForm.value.street;
        this.contact.city = this.editContactForm.value.city;
        this.contactsService.editContact(this.contact!);
        this.editContactForm.reset();
    }
  }

}
