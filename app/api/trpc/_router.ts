import { initTRPC } from "@trpc/server";
import { OpenApiMeta, generateOpenApiDocument } from 'trpc-openapi';
import { Context } from "./_context";
import z from "zod";

const t = initTRPC.context<Context>().meta<OpenApiMeta>().create();

export const middleware = t.middleware;
export const publicProcedure = t.procedure;

export const router = t.router({
  echo: publicProcedure.meta({ openapi: { method: "GET", path: "/echo" } }).input(z.object({
    str: z.string()
  })).output(z.string()).query(async ({ input }) => {
    return input.str;
  })
});

export const openApiDocument = generateOpenApiDocument(router as any, {
  title: 'Example CRUD API',
  description: 'OpenAPI compliant REST API built using tRPC with Next.js',
  version: '1.0.0',
  baseUrl: 'http://localhost:3000/api',
  docsUrl: 'https://github.com/jlalmes/trpc-openapi',
  tags: ['auth', 'users', 'posts'],
});
