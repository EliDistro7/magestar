export default {
  name: "services",
  title: "Services",
  type: "document",

  fields: [
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
      name: "serviceImage",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "serviceDescription",
      title: "Service Description",
      type: "string",
    },
    {
      name: "serviceExampleImage",
      title: "Service Example Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "serviceExampleTitle",
      title: "Service Example Title",
      type: "string",
    },
    {
      name: "serviceExamples",
      title: "Service Examples",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
