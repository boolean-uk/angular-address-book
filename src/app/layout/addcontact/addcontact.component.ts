import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact, ContactserviceService } from 'src/app/contactservice.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit{

  constructor(private fb: FormBuilder,private contactservice : ContactserviceService){
  }
  ngOnInit(): void {
    
  }

  userForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],

  });

  submit(event: Event) {
    //if (this.userForm.valid) {
      const newContact: Contact = {
        firstname: this.userForm.value.firstname as string,
        lastname: this.userForm.value.lastname as string,
        street: this.userForm.value.street as string,
        city: this.userForm.value.city as string,
      };
      this.contactservice.addContact(newContact);
      console.log(newContact)

    //   this.userForm.reset()
    // console.log(this.userForm);
 // }
    }
}
