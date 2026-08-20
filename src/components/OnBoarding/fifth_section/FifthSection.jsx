import React from "react";
import Button from "../../common/Button";

const FifthSection = () => {
  return (
    <section className='lg:min-h-[80vh] text-white  bg-[url("/images/fifth-section-bg.webp")] bg-cover bg-no-repeat px-5 py-20 grid items-center md:px-10 lg:px-20 z-10 bg-primary relative'>
      <div>
        {/* titles  */}
        <div className="grid gap-3 h-fit divide-y-2">
          {/* title  */}
          <p className="text-4xl font-medium md:text-4xl lg:w-[30%] xl:text-7xl py-5">
            Join Our Premium Club
          </p>
          {/* description  */}
          <p className="text-lg md:text-2xl md:w-[80%] xl:w-[40%] py-5">
            Our premium membership will give you exclusive access to our
            early-bird sales, new arrivals and other special offers.
          </p>
        </div>

        {/* button  */}
        <div className="flex justify-center lg:justify-start">
          <Button className={"h-fit"}>Join Now</Button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
