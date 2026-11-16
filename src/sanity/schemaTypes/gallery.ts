import { defineType, defineField } from "sanity";

export const gallerySchema = defineType({
  name: "galleryItem",
  title: "Galerie",
  type: "document",
  fields: [
    defineField({
      name: "mediaType",
      title: "Typ",
      type: "string",
      options: {
        list: [
          { title: "Foto", value: "photo" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "photo",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      hidden: ({ document }) => document?.mediaType !== "photo",
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: { accept: "video/*" },
      hidden: ({ document }) => document?.mediaType !== "video",
    }),
    defineField({
      name: "caption",
      title: "Beschriftung (optional)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "caption", subtitle: "mediaType", media: "image" },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "(kein Titel)",
        subtitle: subtitle === "video" ? "Video" : "Foto",
        media,
      };
    },
  },
});
