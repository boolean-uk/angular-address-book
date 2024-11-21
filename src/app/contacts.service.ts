export class ContactsService {
  id: number = 0
  contacts: any = []

  addContact(contact: any){
      console.log(contact)
      this.id++;
      const newId = this.id;
      const newContact = {id: newId, ...contact}
      this.contacts.push(newContact);
  }

  getContact(id: number | null){
      return this.contacts.filter((element: any) => element.id == id)[0];
  }
}