import React from "react";
import Image from "next/image";
interface Props {
  name: string;
  role: string;
  image: string;
}
export default function Card({ name, role, image }: Props) {
  return (
    <div className="m-4 flex">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="object-cover rounded-full"
      />
      <div>
        <div className="ml-4 text-[30px]">{name}</div>
        <div className="ml-4 text-[25px]">{role}</div>
      </div>
    </div>
  );
}
