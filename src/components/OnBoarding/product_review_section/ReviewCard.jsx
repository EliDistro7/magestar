import Image from "next/image";
import React from "react";

const ReviewCard = ({ image, user, createdAt, review, product }) => {
  return (
    <div className="border-[0.8px] border-secondary border-opacity-50 w-[90%] aspect-[3/4]">
      {/* image  */}
      <div className="w-full h-[50%] relative">
        <Image
          src={image}
          alt={product}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* contents  */}
      <div className="p-5 text-secondary grid gap-3">
        {/* user  */}
        <div className="opacity-70">
          <p className="font-medium ">{user}</p>
          <p className="text-sm">{createdAt}</p>
        </div>

        {/* product name  */}
        <div className="text-2xl font-medium ">{product}</div>

        {/* review  */}
        <div className="opacity-80 overflow-hidden text-ellipsis text-wrap">
          {review}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
