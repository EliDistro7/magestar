"use client";
import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { useFormValue } from "sanity";

const GetSubcat = (props) => {
  const { schemaType, renderDefault } = props;
  const { options } = schemaType;
  const [subcat, setSubcat] = useState([]);
  const mainCategory = useFormValue(['mainCategory']);

  useEffect(() => {
    const fetchSubcat = async () => {
      if (!mainCategory) return;

      try {
        const response = await client.fetch(
          `*[_type == "category"  && title == '${mainCategory}']{subcategorie}`,
        );
        setSubcat(response[0].subcategorie.map(subcat => ({ title: subcat, value: subcat})));
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchSubcat();
  }, [mainCategory]);

  return renderDefault({
    ...props,
    schemaType: {
      ...schemaType,
      options: {
        ...options,
        list: subcat,
      },
    },
  });
};

export default GetSubcat;
