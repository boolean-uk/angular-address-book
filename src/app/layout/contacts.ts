export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
};

export type ContactArray = Contact[];

export const CONTACTS: ContactArray = [
  {
    id: 1,
    firstName: 'Emma',
    lastName: 'Starling',
    street: 'Test Street',
    city: 'Testville',
  },
  {
    id: 2,
    firstName: 'Matt',
    lastName: 'Smith',
    street: 'React Route',
    city: 'JavaScriptVille',
  },
];
