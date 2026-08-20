import React, { useEffect, useState } from "react";
import CatagoryCard from "./CatagoryCard";
import Button from "../../common/Button";
import { useRouter } from "next/navigation";
import { client } from "../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const ShopByCatagory = () => {
  const [catagories, setCatagories] = useState([]);
  const router = useRouter();
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    const query = `*[_type == "category" ]{
  title,
    "slug" : slug.current,
    "image" : categoryImage
}`;
    client.fetch(query).then((res) => {
      setCatagories(res);
      console.log(res);
    });
  }, []);

  return (
    <section className=" px-5 py-10 grid gap-10 xl:gap-10 lg:py-20 z-10 bg-primary relative">
      {/* hedear  */}
      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between md:px-10">
        {/* title  */}
        <p className="text-3xl font-semibold lg:text-4xl">Shop by Category</p>
        {/* shop button  */}
        <Button
          onClick={() => router.push("/shop")}
          inverse={true}
          className={"px-10"}
        >
          Shop
        </Button>
      </div>

      {/* catagory  */}
      <div className="grid gap-5 place-items-center md:grid-cols-2 xl:grid-cols-4 h-fit">
        {catagories?.map((cat, index) => (
          <CatagoryCard
            key={index}
            src={builder?.image(cat.image).url()}
            href={`/shop/${cat.slug}`}
            title={cat.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopByCatagory;
