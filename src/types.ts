export interface Machine {
  id: number;
  name: string;
  game: string;
  tokensRequired: number;
  available: boolean;
}

export type CreateMachineDto = Omit<Machine, 'id'>;