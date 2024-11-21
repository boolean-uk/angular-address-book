export type Contact = {
    id: number;
    firstname: string,
    lastname: string,
    street: string,
    city: string
  };
  
  export const CONTACTS: Contact[] = [
    {
      id: 1,
      firstname: 'Elias',
      lastname: 'Soprani',
      street: '12345',
      city: 'växjö'
    },
    {
        id: 2,
        firstname: 'Alex',
        lastname: 'Niklasson',
        street: '12345',
        city: 'växjö'
      },
  ];