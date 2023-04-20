import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { clerkClient } from "@clerk/nextjs/api";
import { TRPCError } from "@trpc/server";
import { filterUserForClient } from "~/server/helpers/filterUserForClient";

export const profileRouter = createTRPCRouter({
  getUserByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    // we can use Zod instead of filterUserForClient
    // .output(
    //   z.object({
    //     id: z.string(),
    //     emailAddresses: z.object({ emailAddress: z.string() }).array(),
    //     profileImageUrl: z.string(),
    //   })
    // )
    .query(async ({ input }) => {
      const user = await clerkClient.users.getUser(input.userId);

      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User not found",
        });
      }

      return filterUserForClient(user);
    }),
});
