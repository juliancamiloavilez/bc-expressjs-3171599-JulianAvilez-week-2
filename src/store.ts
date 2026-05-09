import { Machine, CreateMachineDto } from './types';

let machines: Machine[] = [
  {
    id: 1,
    name: 'Neo Arcade',
    game: 'Street Fighter',
    tokensRequired: 2,
    available: true,
  },
  {
    id: 2,
    name: 'Retro Blast',
    game: 'Pac-Man',
    tokensRequired: 1,
    available: true,
  },
];

export const getAll = (): Machine[] => {
  return machines;
};

export const getById = (id: number): Machine | undefined => {
  return machines.find((machine) => machine.id === id);
};

export const create = (data: CreateMachineDto): Machine => {
  const newMachine: Machine = {
    id: machines.length + 1,
    ...data,
  };

  machines.push(newMachine);

  return newMachine;
};

export const update = (
  id: number,
  data: CreateMachineDto
): Machine | undefined => {
  const machine = machines.find((machine) => machine.id === id);

  if (!machine) {
    return undefined;
  }

  machine.name = data.name;
  machine.game = data.game;
  machine.tokensRequired = data.tokensRequired;
  machine.available = data.available;

  return machine;
};

export const remove = (id: number): boolean => {
  const initialLength = machines.length;

  machines = machines.filter((machine) => machine.id !== id);

  return machines.length < initialLength;
};