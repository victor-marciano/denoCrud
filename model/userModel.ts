import { Model, DATA_TYPES } from 'https://deno.land/x/denodb/mod.ts';

export class User extends Model {
    static table = 'user';
    static timestamps = false;

    static fields = {
        id: {
          primaryKey: true,
          autoIncrement: true,
        },
        name: DATA_TYPES.STRING,
        birthdate: DATA_TYPES.DATETIME,
        admin: DATA_TYPES.BOOLEAN
    };
    
    static defaults = {
        admin: false,
    };
}
