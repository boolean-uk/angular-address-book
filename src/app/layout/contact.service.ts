import {Injectable} from "@angular/core";

@Injectable(
  {
  providedIn: 'root'
})

export class ContactService{
  contacts: { firstName: string; lastName: string; street: string; city: string;}[] = []

  constructor() {
  }
}
