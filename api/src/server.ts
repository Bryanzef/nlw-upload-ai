import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoot } from "./routes/get-all-prompts";

const app = fastify();

app.register(getAllPromptsRoot);

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP SERVER RUNNING ON http://localhost:3333"));
