import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
  })

  ngOnInit(): void {
    this.contactForm.controls.firstName.addValidators(Validators.required)
    this.contactForm.controls.lastName.addValidators(Validators.required)
    this.contactForm.controls.street.addValidators(Validators.required)
    this.contactForm.controls.city.addValidators(Validators.required)
  }

  submit(event: Event){
    event.preventDefault()
    console.log(this.contactForm);
  }

}
