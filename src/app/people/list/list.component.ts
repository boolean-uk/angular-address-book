import { Component, inject } from '@angular/core';
import { PeopleService } from 'src/app/people.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  peopleService = inject(PeopleService)
  people: Person[] = this.peopleService.getAllPeople()
}
