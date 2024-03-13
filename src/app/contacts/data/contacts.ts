import { Contact, ContactDTO } from "../models/contact";

export class MockDatabase {
    private static currentId = 3;

    private static CONTACTS: Contact[] = [
        {id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@email.com'},
        {id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@email.com'}
    ]

    static getAll() : Contact[] {
        return this.CONTACTS;
    }

    static getById(id :number | null) : Contact | undefined {
        return this.CONTACTS.find(c => c.id === id);
    }

    static addEntry(contactInput : ContactDTO) : void {
        const contact : Contact = {
            ...contactInput,
            id : this.currentId
        }
        this.CONTACTS.push(contact);
        this.currentId += 1;
    }

    static updateEntry(id: number, contactInput : ContactDTO) {
        this.CONTACTS[this.CONTACTS.findIndex(c => c.id === id)] = {...contactInput, id: id}
    }
}