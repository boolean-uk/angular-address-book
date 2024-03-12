import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/people.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  personService = inject(PeopleService)
  route = inject(ActivatedRoute)

  id = this.route.snapshot.paramMap.get('id')
  person: Person | null = this.personService.getPersonById(Number(this.id))
}
