import { NextRequest } from "next/server";
import {
  createOpenApiFetchHandler
} from 'trpc-openapi';
import { router } from "./_router";
import { createContext } from "./_context";

const handler = createOpenApiFetchHandler({
  router: router as any,
  createContext,
  endpoint: "/api/trpc",
});

export const GET = handler;
export const POST = handler;
