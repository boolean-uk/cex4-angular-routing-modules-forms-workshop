export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export const USERS: User[] = [
  {
    id: 1,
    name: 'carlo',
    email: 'carlo@example.com',
    password: '12345',
  },
  {
    id: 2,
    name: 'najem',
    email: 'najem@example.com',
    password: '12345',
  },
];
