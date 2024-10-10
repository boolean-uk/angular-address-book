export type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    city: string;
    
  };
  
  export const CONTACTS: Contact[] = [
    {
      id: 1,
      firstName: 'Gordon',
      lastName: 'Gordonsson',
      email: 'gordon@example.com',
      street: 'Gordonstreet',
      city: 'Gordoncity'
    },
    {
      id: 2,
      firstName: 'Gunnar',
      lastName: 'Gunnarsson',
      email: 'gunnar@example.com',
      street: 'Gunnarstreet',
      city: 'Gunnartown'
    },
  ];
