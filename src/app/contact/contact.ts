export type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export const CONTACTS: Contact[] = [
    {
        id: 1,
        firstName: 'Conan',
        lastName: 'Gray',
        email: 'Conan@example.com'
    },
    {
        id: 2,
        firstName: 'Renee',
        lastName: 'Rapp',
        email: 'Renee@example.com'
    },
    {
        id: 3,
        firstName: 'Jonna',
        lastName: 'Buckwood',
        email: 'Jonna@example.com'
    },
];