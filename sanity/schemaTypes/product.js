import { component } from "sanity/structure";
import GetMainCat from "../schemaFunctions/GetMainCat";
import GetSubCat from "../schemaFunctions/GetSubCat";
import GetProdTitle from "../schemaFunctions/GetProdTitle";

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bestSeller",
      title: "Best Seller",
      type: "boolean",
      default: false,
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      readOnly : true,
      components : {
        input : GetProdTitle
      }
    },
    {
      name: "mainCategory",
      title: "Main Category",
      type: "string",
      options: {
        list: [],
      },
      components: {
        input: GetMainCat,
      },
    },
    {
      name: "subCategory",
      title: "Sub Category",
      type: "string",
      options: {
        list: [],
      },
      components: {
        input: GetSubCat,
      },
    },
  ],
};
