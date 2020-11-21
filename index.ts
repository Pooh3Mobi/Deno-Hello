import { serve, Server, ServerRequest } from "https://deno.land/std/http/server.ts";
import { helloMessage, HelloWorld } from "./helloworld-service.ts";
import { respondNotFound, respondWithBody, parseRequestBody } from "./utilities.ts";

const app: Server = serve({ port: 4040 });
console.log('server started on localhost:4040')

for await (const req of app) {
    switch (req.url) {
        case "/hello": {
            switch (req.method) {
                case "GET": {
                    respondWithBody(req, helloMessage());
                    break;
                }
                default:
                    respondNotFound(req);
            }
            break;
        }
        default:
            respondNotFound(req);
    }
}
