import { Request, Response } from 'express';
import Resource from '../models/Resource';

// Create a new resource
export const createResource = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  try {
    const resource = await Resource.create({ name, description });
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create resource' });
  }
};

// List resources with basic filters
export const listResources = async (req: Request, res: Response) => {
  try {
    const resources = await Resource.findAll();
    res.status(200).json(resources);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch resources' });
  }
};

// Get details of a specific resource
export const getResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const resource = await Resource.findByPk(id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch resource' });
  }
};

// Update a resource
export const updateResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const resource = await Resource.findByPk(id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    resource.name = name;
    resource.description = description;
    await resource.save();
    res.status(200).json(resource);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update resource' });
  }
};

// Delete a resource
export const deleteResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const resource = await Resource.findByPk(id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    await resource.destroy();
    res.status(200).json({ message: 'Resource deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete resource' });
  }
};
