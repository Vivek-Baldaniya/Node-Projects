// const text = "This is some deno text!";

// const encoder = new TextEncoder();
// const data = encoder.encode(text);

// Deno.writeFile("message.txt", data).then(() => {
//   console.log("Wrote to file.");
// });

// import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

// // const server = serve({ port: 3000 });

// // for await (const req of server) {
// //   req.respond({ body: "Hello World!" });
// // }

// serve(() => new Response("Hello World\n"));

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
