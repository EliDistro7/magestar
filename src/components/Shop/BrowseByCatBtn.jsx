import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";

const BrowseByCatBtn = ({ className , onClick , title }) => {
  
  return (
    <div onClick={onClick} className={`${className} bg-slate-200 py-2 w-fit px-5 rounded text-sm`} >
        Browse by : {title || 'All Products'}
    </div>
  )
}

export default BrowseByCatBtn