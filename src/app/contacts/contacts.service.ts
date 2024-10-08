import { Injectable } from "@angular/core";
import { Contact } from "./models/contact";
import { max } from "rxjs/operators";
import { from } from "rxjs";


@Injectable({
    providedIn: 'root',
})

export class ContactService {
    public contacts: Contact[] = [{id:1,name: 'Nigel',address: 'Address1'}, {id:2, name: 'Nigel II', address: 'Second st.'}]

    public AddContact(c: Contact) {
        from(this.contacts).pipe(
            max((a, b) => a.id - b.id)
        ).subscribe(maxContact => {
            c.id = maxContact.id + 1;
            this.contacts.push(c);
        });
    }

    public GetContactById(id: number) {
        const contact = this.contacts.find((contact) => contact.id === id)
        if (contact) {
            return contact;
        } else {
            return null;
        }
    }
}