import { z } from "zod";

export const AppSchema = z.object({
  database: z.object({
    tables: z.array(
      z.object({
        name: z.string(),
        fields: z.array(
          z.object({
            name: z.string(),
            type: z.string(),
          })
        ),
      })
    ),
  }),

  api: z.object({
    endpoints: z.array(
      z.object({
        path: z.string(),
        method: z.string(),
      })
    ),
  }),

  ui: z.object({
    pages: z.array(
      z.object({
        name: z.string(),
        components: z.array(z.string()),
      })
    ),
  }),

  auth: z.object({
    roles: z.array(z.string()),
  }),
});