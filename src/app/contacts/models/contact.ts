export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface ContactInsertDTO {
    firstName: string;
    lastName: string;
    email: string;
}