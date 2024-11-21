import { Component, inject } from '@angular/core';
import { Person } from '../models/person';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  updatePerson: Person = {id: 1, firstName: '', lastName: '', street: '', city: ''};
  personForm: FormGroup;
  personService= inject(PeopleService)
  route= inject(ActivatedRoute)
  router = inject(Router)
  id: number
  constructor(private formBuilder: FormBuilder){
    this.personForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    })
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!)
  }

  ngOnInit(){
    this.updatePerson = this.personService.getPersonById(this.id)!
    this.populateForm()
  }
  populateForm(){
    this.personForm.patchValue({
      firstName: this.updatePerson.firstName,
      lastName: this.updatePerson.lastName,
      street: this.updatePerson.street,
      city: this.updatePerson.city
    })
  }
  editPerson(){
    this.updatePerson = {
      id: this.id,
      firstName: this.personForm.value.firstName,
      lastName: this.personForm.value.lastName,
      street: this.personForm.value.street,
      city: this.personForm.value.city
    }
    console.log(this.updatePerson)
    this.personService.editPerson(this.updatePerson)
    this.router.navigate(["contacts"])
  }
}
