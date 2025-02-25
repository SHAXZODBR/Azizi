import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const SideBar = () => {
  return (
    <div className="md:col-span-1">
      <div className="bg-[#003366] p-4 text-white mb-6">
        <h3 className="text-lg mb-4">Авторам</h3>
        <p className="font-medium text-xs pb-2">Вы можете отправить статью</p>
        <Button
          variant="secondary"
          className="w-full text-sm bg-blue-600"
          asChild
        >
          <a href="#">ОТПРАВИТЬ СТАТЬЮ</a>
        </Button>
      </div>
      <div className="text-center">
        <Image
          src="/1.png"
          alt="Вестник журнала"
          width={300}
          height={280}
          className="inline-block border border-gray-300"
        />
      </div>
      <p className="font-medium text-xs text-blue-500">
        <a href="#" className="hover:underline">
          Вестник Томского государственного университета. 2025 №510
        </a>
      </p>
    </div>
  );
};

export default SideBar;
