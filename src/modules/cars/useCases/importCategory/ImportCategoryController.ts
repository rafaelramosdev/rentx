import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUserCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUserCase);

    await importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
