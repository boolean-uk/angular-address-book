import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  formContact = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit(event: Event) {
    event.preventDefault();
    console.log('form submitted', this.formContact);
  }
}
