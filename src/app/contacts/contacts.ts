export type Contact = {
  id: number;
  name: string;
  surname: string;
  street: string;
  city: string;
};

export let CONTACTS: Contact[] = [
  {
    id: 1,
    name: 'Temp',
    surname: 'Tempsson',
    street: 'Tempssonstreet 43',
    city: 'TempssonVally ',
  },
  {
    id: 2,
    name: 'Example',
    surname: 'Examplesson',
    street: 'Examplestreet 12',
    city: 'ExampleVally',
  },
];
