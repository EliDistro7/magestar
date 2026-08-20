"use client";
import React, { useEffect } from "react";
import { useFormValue, PatchEvent, set, unset } from "sanity";

const createPatchFrom = (value) => {
  return PatchEvent.from(value === "" ? unset() : set(value));
};

const GetProdTitle = (props) => {
  const { renderDefault, onChange, path } = props;
  const name = useFormValue(["name"]);
  const mainCategory = useFormValue(["mainCategory"]);

  useEffect(() => {
    if (!mainCategory || !name) return;

    const generatedTitle = `${mainCategory.replace(/\s+/g, "-").toLowerCase()}-${name.replace(/\s+/g, "-").toLowerCase()}`;

    // Trigger the onChange event with the patched value
    onChange(createPatchFrom(generatedTitle), path);

  }, [mainCategory, name, onChange, path]);

  return renderDefault(props);
};

export default GetProdTitle;
