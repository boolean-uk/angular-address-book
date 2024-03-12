import { Injectable } from '@angular/core';
import { People } from './data/people';
import { Person } from './people/models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private currentId: number = People.length
  public people: Person[] = People

  public getAllPeople(): Person[]{
    return this.people
  }

  public getPersonById(id: number | null): Person | null{
    const person =this.people.find((person) => person.id === id)
    if(!person){
      return null
    }
    return person
  }

  public addPerson(person: Person){
    this.people.push(person)
  }

  public editPerson(updatedPerson: Person){
    const index = this.people.findIndex((person) => (person.id) === updatedPerson.id)
    if(index !== -1){
      this.people[index] = updatedPerson
    }
  }

  constructor() { }
}
