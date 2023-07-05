import { NextRequest } from "next/server";
import {
  createOpenApiFetchHandler
} from 'trpc-openapi';
import { router } from "../trpc/_router";
import { createContext } from "../trpc/_context";

const handler = createOpenApiFetchHandler({
  router: router as any,
  createContext,
  endpoint: "/api",
});

export const GET = (req: NextRequest) => {
  return handler(req);
};
export const POST = handler;
