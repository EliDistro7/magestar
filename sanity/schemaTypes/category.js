export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "categoryImage",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "subcategorie",
      title: "Subcategories",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
