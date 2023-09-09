export interface Administrateur {
  pseudo: string;
  password: string;

  role?: string;
}

export const administrateurs: Administrateur[] = [
  { pseudo: 'JabbaWockeeZ', password: 'killbill', role: 'admin' },
];
