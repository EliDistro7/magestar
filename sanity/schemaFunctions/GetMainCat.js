"use client";
import React, { useEffect, useState } from "react";
import { client } from "../lib/client";

const GetMainCat = (props) => {
  const { schemaType, renderDefault } = props;
  const { options } = schemaType;
  const [mainCat, setMainCat] = useState([]);

  useEffect(() => {
    const fetchMainCat = async () => {

      const response = await client.fetch(
        `*[_type == "category"] | order(title asc){title}`
      );

      const mainCat = response.map((cat) => {
        return {
          title: cat.title,
          value: cat.title,
        };
      });
      setMainCat(mainCat);
    };
    fetchMainCat();
  }, [props]);

  return renderDefault({
    ...props,
    schemaType: {
      ...schemaType,
      options: {
        ...options,
        list: mainCat,
      },
    },
  });
};

export default GetMainCat;
