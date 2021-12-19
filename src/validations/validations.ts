import ValidationError from '../errors/ValidationError';
import {newExam} from '../interfaces/newExam';
import * as schemas from './schemas';

async function validateNewExam(exam: newExam) {
  const joiValidation = schemas.newExamSchema.validate(exam);
  if (joiValidation.error) throw new ValidationError(joiValidation.error.details[0].message);
}

export {
  validateNewExam,
};