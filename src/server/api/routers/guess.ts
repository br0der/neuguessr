import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  // publicProcedure,
} from "~/server/api/trpc";

export const guessRouter = createTRPCRouter({
    create: protectedProcedure
    .input(z.object({ 
      latitude: z.number(),
      longitude: z.number(),
      challenge: z.string(),
     }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.guess.create({
        data: {
          lat: input.latitude,
          lng: input.longitude,
          guesser_id: ctx.session.user.id,
          challenge_id: input.challenge
        },
      });
    }),
});