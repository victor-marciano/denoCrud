import { ModelList } from '../model/model.ts';
import { Context } from "https://deno.land/x/denotrain@v0.5.0/src/Context.ts";

export class UserController {

    static async get () {
        return await ModelList.User.all();
    }
    
    static async getById (ctx: Context) {
        return await ModelList.User.find(ctx.req.params.user);
    }
    
    static async new (ctx: Context) { 
        try {
            await ModelList.User.create({
                name: ctx.req.body.name,
                birthdate: ctx.req.body.birthdate 
            });    
        } catch (error) {
            return ctx.res.setBody({error: error.message});
        }   
    }
    
    static async update (ctx: Context) {
        const id = ctx.req.params.user;  
        const { name, birthdate } = ctx.req.body; 
        
        try {
            const result = await ModelList.User
                .where("id", "=" , id.toString())
                .update({ name: name, birthdate: birthdate });
                    
            return new Promise(resolve => resolve({response: result}));                 
        } catch (error) {
            ctx.res.setStatus(400);
            return new Promise(reject => reject({error: error.message}));
        }
    }
    
    static async destroy (ctx: Context) {
        try {
            const result = await ModelList.User.deleteById(ctx.req.params.user.toString());    
            return new Promise(resolve => resolve({response: result})); 
        } catch (error) {
            ctx.res.setStatus(400);
            return new Promise(reject => reject({error: error.message}));
        }
    }
}