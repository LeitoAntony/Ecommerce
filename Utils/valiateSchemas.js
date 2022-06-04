var Joi = require('joi')
export const schemaEmail = Joi.object({
    email: Joi.string()
        .email({tlds:{allow: false}})
        .empty()
        .messages({
            "string.email": "Formato no válido",
            "string.empty": "Campo obligatorio",
        })
})
