import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  // publicProcedure,
} from "~/server/api/trpc";

export const guessRouter = createTRPCRouter({
    create: protectedProcedure
    .input(z.object({ 
      challenge: z.string(),
      latitude: z.number().or(z.undefined()),
      longitude: z.number().or(z.undefined()),
      
     }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (input.latitude && input.longitude) {
        return ctx.db.guess.create({
          data: {
            lat: input.latitude,
            lng: input.longitude,
            guesser_id: ctx.session.user.id,
            challenge_id: input.challenge
          },
        });
      }
    }),
});