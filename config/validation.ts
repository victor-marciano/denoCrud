import { ValidationError, validate, isString, isRequired, isNotEmpty, Validatable } from 'https://deno.land/x/valideno/mod.ts';
import { Context } from "https://deno.land/x/denotrain@v0.5.0/src/Context.ts";

export const check = (rules: Validatable) => {
    return async (ctx: Context) => {    
        const errors: ValidationError[] = await validate(ctx.req.body, rules);
    
        if (errors.length > 0) {    
            ctx.res.setStatus(422); 
            return new Promise(reject => reject({"errors": errors}));;
        }
    }
}

export const userRules = {    
    name: [
        isRequired(),
        isNotEmpty(),
        isString()
    ],
    birthdate: [
        isRequired(),
        isNotEmpty(),
        isString(),    
    ]
};