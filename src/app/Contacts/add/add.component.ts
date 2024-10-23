import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
contactForm : FormGroup;
cService : ContactService;
constructor(
  private formBuilder: FormBuilder,
  private readonly contactService: ContactService
){
  this.contactForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
});
this.cService = this.contactService;
}

addContact() : void {
  const newContact  = {
    id: 0,
    firstName: this.contactForm.value.firstName, 
    lastName: this.contactForm.value.lastName,
    address: this.contactForm.value.address,
    city: this.contactForm.value.city
  };
  this.cService.addContact(newContact); 
  this.contactForm.reset();
}
}
