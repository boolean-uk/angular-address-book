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
      lastName: 'Johnson',
      email: 'gordon@example.com',
      street: 'ExampleStreet',
      city: 'ExampleCity'
    },
    {
      id: 2,
      firstName: 'Gunnar',
      lastName: 'Gunnarsson',
      email: 'gunnar@example.com',
      street: 'GunnarStreet',
      city: 'GunnarTown'
    },
  ];