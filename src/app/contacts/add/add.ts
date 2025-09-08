import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact-service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {

  contactForm: FormGroup
  formBuilder = inject(FormBuilder)
  contactService = inject(ContactService)
  router = inject(Router)

  constructor(){
    this.contactForm = this.formBuilder.group({

      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],

    })

  }


  addCar(){
    console.log(this.contactForm.value)
    this.contactService.addContact(this.contactForm.value)
    this.router.navigate(["contacts"])
  }


}
