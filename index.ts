import { Application, Context } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./routes/routes.ts";

const app = new Application({
    port: 8000,
    hostname: '127.0.0.1'
});

app.use(router);

await app.run();




