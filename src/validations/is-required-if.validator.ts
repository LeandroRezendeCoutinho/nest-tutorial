import { buildMessage, ValidateBy, ValidationOptions } from "class-validator"

export const IS_REQUIRED_IF = 'IsRequiredIf'

export function isNotEmpty(value: unknown): boolean {
    return value !== '' && value !== null && value !== undefined
}

export function IsRequiredIf(
    condition: (object?: any, value?: any) => boolean,
    validationOptions?: ValidationOptions): PropertyDecorator {
    return ValidateBy(
        {
            name: IS_REQUIRED_IF,
            validator: {
                validate: (value, args): boolean => {
                    if (condition(args.object)) {
                        return isNotEmpty(value)
                    }

                    return true
                },
                defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property is required',
                    validationOptions),
            },
        },
        validationOptions
    )
}