import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class Contact implements OnInit {
  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    firstMame: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required]
  });

  ngOnInit(): void {}

  submit(event: Event) {
    console.log('form submitted', this.userForm);
  }
}

// export class addNewContact implements OnInit {
//   constructor(private fb: FormBuilder) {}

//   userForm = this.fb.group({
//     firstMame: ['', Validators.required],
//     lastName: ['', Validators.required],
//     street: ['', Validators.required],
//     city: ['', Validators.required]
//   });

//   ngOnInit(): void {}

//   submit(event: Event) {
//     console.log('form submitted', this.userForm);
//   }
// }