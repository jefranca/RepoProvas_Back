import joi from "joi";

const newExamSchema = joi.object({
  name: joi.string().required(),
  category_id: joi
    .number()
    .integer()
    .message("category_id must contain a valid ID")
    .positive()
    .message("category_id must contain a valid ID")
    .required(),
  professor_id: joi
    .number()
    .integer()
    .message("teacher_id must contain a valid ID")
    .positive()
    .message("teacher_id must contain a valid ID")
    .required(),
  url: joi
    .string()
    .pattern(/^(https*:\/\/)*(www.)*.+\/.+\.(pdf|PDF)$/)
    .message("link must be a valid pdf file")
    .max(255)
    .required(),
});

export { newExamSchema };
