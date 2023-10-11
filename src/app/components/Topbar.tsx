import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex w-full bg-[#011936] rounded-3xl p-4 align-middle justify-between">
      <div className="m-4 text-[40px]">OST Museum</div>
      <div className="m-4">
        <Link
          href={"https://github.com/WanekNia/Hackathon23-24_Grp9"}
          className="text-[70px] cursor-pointer"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}
