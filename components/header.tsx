import Image from "next/image";
import Mirror from "@/public/logodemon.svg";
import Search from "@/public/searchIco.svg";

import Menu from "./menu";

export default function Header() {
  return (
    <div className="mt-4">

      <div className="p-2 bg-[#9BA4B5] rounded-[50px] w-1/2 mx-auto h-max">
        <div className="flex justify-center items-center ">
          <Menu />
          <Image src={Mirror} width={30} alt="Mirror" />
          <div className=" flex">
            <Image src={Search} width={25} alt="Busca" />
          </div>
        </div>
      </div>
    </div>
  );
}
