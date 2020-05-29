import { Model } from '../model/model.ts';
import { Context } from "https://deno.land/x/denotrain@v0.5.0/src/Context.ts";

export class UserController {

    static async get () {
        return await Model.User.all();
    }
    
    static async getById (ctx: Context) {
        return await Model.User.find(ctx.req.params.user);
    }
    
    static async new (ctx: Context) {
        return await Model.User.create({
            name: ctx.req.body.name,
            birthDate: ctx.req.body.birthDate 
        });
    }
    
    static async update (ctx: Context) {
        return await Model.User.find(ctx.req.params.user);
    }
    
    static async destroy (ctx: Context) {
        return await Model.User.find(ctx.req.params.user);
    }
}