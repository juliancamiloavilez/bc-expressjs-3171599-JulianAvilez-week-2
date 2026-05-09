import { Router } from 'express';

import {
  getAll,
  getById,
  create,
  update,
  remove,
} from '../store';

const router = Router();

router.get('/', (req, res) => {
  const machines = getAll();

  res.json(machines);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const machine = getById(id);

  if (!machine) {
    return res.status(404).json({
      message: 'Machine not found',
    });
  }

  res.json(machine);
});

router.post('/', (req, res) => {
  const newMachine = create(req.body);

  res.status(201).json(newMachine);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);

  const updatedMachine = update(id, req.body);

  if (!updatedMachine) {
    return res.status(404).json({
      message: 'Machine not found',
    });
  }

  res.json(updatedMachine);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  const deleted = remove(id);

  if (!deleted) {
    return res.status(404).json({
      message: 'Machine not found',
    });
  }

  res.status(204).send();
});

export default router;