import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
    pubDate: z.coerce.date(),
  }),
});

const workCollection = defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      heroImage: z.string().optional(),
      pubDate: z.coerce.date(),
    }),
  });

export const collections = {
  'blog': blogCollection,
  'work': workCollection,

};
