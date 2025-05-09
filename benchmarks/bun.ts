'use strict'
import { serve } from "bun";
serve({
  port: 3000,
  async fetch(request) {
    return Response.json({ hello: 'world' })
  }
});

