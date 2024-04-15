"use client";

import React from "react";
import Image from "next/image";

export const Map = () => {
  return (
    <Image
      className="scale-110 object-cover saturate-[1.3] dark:brightness-75 dark:saturate-0"
      width={1080}
      height={1080}
      src={"/map-dark.png"}
      alt=""
    />
  );
};
