import { Component, inject } from '@angular/core';
import { Person } from '../models/person';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newPerson: Person = {id: 1, firstName: '', lastName: '', street: '', city: ''};
  personForm: FormGroup;
  personService= inject(PeopleService)
  router = inject(Router)
  constructor(private formBuilder: FormBuilder){
    this.personForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  addPerson(){
    this.newPerson = {
      id: this.personService.people.length + 1,
      firstName: this.personForm.value.firstName,
      lastName: this.personForm.value.lastName,
      street: this.personForm.value.street,
      city: this.personForm.value.city
    }
    console.log(this.newPerson)
    this.personService.addPerson(this.newPerson)
    this.router.navigate(["contacts"])
  }
}
