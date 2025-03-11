import express, { Request, Response } from 'express';
import {
  createResource,
  listResources,
  getResource,
  updateResource,
  deleteResource,
} from '../controllers/resourceController';

const router = express.Router();

// Explicitly define the request and response types for each route
router.post('/', async (req: Request, res: Response) => {
  await createResource(req, res);
});

router.get('/', async (req: Request, res: Response) => {
  await listResources(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
  await getResource(req, res);
});

router.put('/:id', async (req: Request, res: Response) => {
  await updateResource(req, res);
});

router.delete('/:id', async (req: Request, res: Response) => {
  await deleteResource(req, res);
});

export default router;
