import Link from "next/link";
import React from "react";

const CatagoryCard = ({ src, title, href }) => {
  return (
    <>
      <Link
        href={href}
        className="grid gap-5 place-items-center w-full group"
      >
        {/* image  */}
        <div className="w-[80%] h-[400px] lg:w-[300px] xl:w-full xl:max-w-[400px] xl:h-[500px] overflow-hidden relative cursor-pointer rounded-lg bg-primary/30">
          <img
            src={src}
            alt={title}
            className="object-cover w-full h-full absolute inset-0 hover:scale-110 transition-all duration-700 hover:brightness-50"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

        {/* title  */}
        <p className="text-xl font-medium group-hover:scale-150 transition-all duration-500 capitalize">
          {title}
        </p>
      </Link>
    </>
  );
};

export default CatagoryCard;
