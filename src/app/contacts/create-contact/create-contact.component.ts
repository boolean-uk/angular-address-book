import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service'; 

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
   // @ts-ignore
   form: FormGroup;
   // @ts-ignore
   contactService: ContactsService;
 
   constructor(private fb: FormBuilder, contactService: ContactsService) {
     this.contactService = contactService;
}

ngOnInit(): void {
  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
}

onSubmit() {
  console.log('Valid?', this.form.valid);
  console.log('Name', this.form.value.name);
  console.log('Email', this.form.value.email);

  // create contact
  this.contactService.createContact(
    this.form.value.name,
    this.form.value.email
  );
}
}
