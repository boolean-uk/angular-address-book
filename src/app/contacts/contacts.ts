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
    firstName: 'Bob',
    lastName: 'Kerman',
    street: 'Realstreet 2',
    city: 'Kerbin',
  },
  {
    id: 2,
    firstName: 'Bill',
    lastName: 'Kerman',
    street: 'Nunya',
    city: 'Beeswax',
  },
];
