export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
};

export const CONTACTS: Contact[] = [
  {
    id: 1,
    firstName: 'Marcus',
    lastName: 'Palm',
    street: '1 test street',
    city: 'city',
  },
  {
    id: 2,
    firstName: 'Carlo',
    lastName: 'lastname',
    street: '2 test street',
    city: 'city',
  },
  {
    id: 3,
    firstName: 'Victor',
    lastName: 'Adamson',
    street: '3 test street',
    city: 'city',
  },
];
