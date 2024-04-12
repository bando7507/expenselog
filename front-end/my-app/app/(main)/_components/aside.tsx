"use client";
import React from "react";
import { DollarSign, Grid, HelpCircle, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Aside = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white w-72">
      <nav className="p-10">
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              href="/dash"
              className={`flex gap-1 items-center text-xl text-gray-300 z-30 ${
                pathname == "/dash" ? "text-[#b34c4c]" : ""
              }`}
            >
              <Grid />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`flex gap-1 items-center text-xl text-gray-300 ${
                pathname == "/" ? "text-black" : ""
              }`}
            >
              <DollarSign /> Bills & Payements
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`flex gap-1 items-center text-xl text-gray-300 ${
                pathname == "/" ? "text-black" : ""
              }`}
            >
              <Settings /> Setting
            </Link>
          </li>
          <li className="flex gap-1 items-center text-xl text-gray-300">
            <Link
              href="/"
              className={`flex gap-1 items-center text-xl text-gray-300 ${
                pathname == "/" ? "text-black" : ""
              }`}
            >
              <HelpCircle />
              Get Help
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
