import { Contact, ContactInsertDTO } from "../models/contact";

export class MockDatabase {
    private static currentId = 3;

    static CONTACTS: Contact[] = [
        {id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@email.com'},
        {id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@email.com'}
    ]

    static addEntry(contactInput : ContactInsertDTO) : void {
        const contact : Contact = {
            ...contactInput,
            id : this.currentId
        }
        this.CONTACTS.push(contact);
        this.currentId += 1;
    }
}