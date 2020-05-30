import { ModelList } from '../../model/model.ts';
import Fiona from 'https://deno.land/x/fiona/deno/index.js';

for (let i = 0; i < 50; i++) {
    let fiona = Fiona(i);
    
    await ModelList.User.create({
        name: fiona.firstname({ gender: 'female' }),
        birthDate: fiona.date({
            min: '1960',
            max: '2001',
            long: false
        })
    }); 
}


