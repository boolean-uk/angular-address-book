import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent {
  contactForm: FormGroup = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    street: new FormControl(""),
    city: new FormControl(""),
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
    })
  }

  onSubmit(): void {
    console.log(this.contactForm?.value)
  }

}
