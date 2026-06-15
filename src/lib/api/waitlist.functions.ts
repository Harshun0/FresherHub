import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getDb } from "../db.server";

const joinWaitlistInput = z.object({
  email: z.string().email(),
  source: z.enum(["home", "waitlist"]).default("waitlist"),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .validator(joinWaitlistInput)
  .handler(async ({ data }) => {
    const db = await getDb();
    const waitlist = db.collection("waitlist");

    await waitlist.createIndex({ email: 1 }, { unique: true });

    const email = data.email.trim().toLowerCase();

    try {
      await waitlist.insertOne({
        email,
        source: data.source,
        createdAt: new Date(),
      });
      return { ok: true as const, alreadyRegistered: false };
    } catch (error) {
      if (
        error instanceof Error &&
        "code" in error &&
        (error as { code?: number }).code === 11000
      ) {
        return { ok: true as const, alreadyRegistered: true };
      }
      throw error;
    }
  });
