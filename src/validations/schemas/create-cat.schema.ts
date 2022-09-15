import Joi from "joi"

export const createCatSchema = Joi.object({
    name: Joi.string(),
    age: Joi.number().integer(),
    breed: Joi.string()
})