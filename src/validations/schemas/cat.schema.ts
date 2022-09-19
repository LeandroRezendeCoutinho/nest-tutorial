import * as Joi from "joi"

export const CatSchema = Joi.object({
    name: Joi.string(),
    age: Joi.number().integer(),
    breed: Joi.string()
})