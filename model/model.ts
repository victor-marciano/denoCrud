import db from '../config/database.ts';
import { User } from './userModel.ts';

db.link([
    User
]);

await db.sync({
    drop: false 
});

const ModelList = {
    User
}

export { ModelList };