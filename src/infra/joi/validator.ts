import { RequestValidator } from '../../presentation/contracts';
import Joi from 'joi';

export class ResquestValidator implements RequestValidator {
  constructor(private readonly schema: Joi.ObjectSchema) {}

  public validate = async (data: unknown): Promise<boolean> => {
    const { error } = this.schema.validate(data);

    if (error) return false;
    return true;
  };
}
