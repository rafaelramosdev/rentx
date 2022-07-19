import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  const category = {
    // id: uuidv4(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category);

  return response.status(201).send();
});

export { categoriesRoutes };
