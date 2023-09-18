import { fastify } from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify();

app.get("/prompts", async () => {
  const prompts = await prisma.prompt.findMany({
    
  })
  return "Hello world!";
});

app
  .listen({
    port: 3333,
  })
  .then(() => "HTTP SERVER RUNNING");
