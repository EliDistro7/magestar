import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatagoryCard = ({ src, title, href }) => {
  return (
    <>
      {src && (
        <Link
          href={href}
          className="grid gap-5 place-items-center w-full group"
        >
          {/* image  */}
          <div className="w-[80%] h-[400px] lg:w-[300px] xl:w-full xl:max-w-[400px] xl:h-[500px] overflow-hidden relative cursor-pointer rounded-lg">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover w-auto h-auto hover:scale-110 transition-all duration-700 hover:brightness-50"
            />
          </div>

          {/* title  */}
          <p className="text-xl font-medium group-hover:scale-150 transition-all duration-500 capitalize">
            {title}
          </p>
        </Link>
      )}
    </>
  );
};

export default CatagoryCard;
