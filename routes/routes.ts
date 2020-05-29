import { Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { UserController } from "../controller/userController.ts";

const router = new Router();

router.get('/user', UserController.get);
router.get('/user/:user', UserController.getById);
router.post('/user/', UserController.new);
router.put('/user/:user', UserController.update);
router.delete('/user/:user', UserController.destroy);

export default router;