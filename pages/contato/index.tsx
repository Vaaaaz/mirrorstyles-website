import { useRouter } from "next/router";

import Icon from '@mdi/react';
import { mdiEmail, mdiInstagram, mdiWhatsapp } from '@mdi/js';

import contact from "@/public/contact.svg";

import Header from "@/components/header";
import Image from "next/image";
import Footer from "@/components/footer";


export default function Contact() {

  const Router = useRouter();

  return (
  
    <div className="bg-primaryBlue h-screen">
      <Header /> 

      <div className="mt-12 flex px-32 pt-12 justify-around items-center">
        <div className="mr-5">
          <Image src={contact} width={450} alt="Contato" />
        </div>

        <div className="ml-5">
          <h1 className="font-out text-darkB text-4xl font-black mb-2">Precisando de suporte? </h1>
          <p className="font-out text-darkB text-2xl ">Contate-nos em algum meio abaixo.</p>

          <div className="flex gap-2 mt-5 items-center p-2 bg-[#212A3E] w-max rounded-2xl hover:scale-110 transition-all">
            <Icon path={mdiInstagram} size={1} color={"#F1F6F9"}/>
            <a target="_blank" href="https://instagram.com/mirrorstyles_" className="font-out text-[#F1F6F9]" rel="noopener noreferrer"> Instagram</a>
          </div>

          <div className="flex gap-2 items-center mt-5 p-2 bg-[#212A3E] w-max rounded-2xl hover:scale-110 transition-all">
            <Icon path={mdiEmail} size={1} color={"#F1F6F9"}/>
            <a target="_blank" href="mailto:contato@mirrorstyles.com.br" className="font-out text-[#F1F6F9]" rel="noopener noreferrer"> Email</a>
          </div>

          <div className="flex gap-2 items-center mt-5 p-2 bg-[#212A3E] w-max rounded-2xl hover:scale-110 transition-all">
            <Icon path={mdiWhatsapp} size={1} color={"#F1F6F9"}/>
            <a target="_blank" href="https://instagram.com/mirrorstyles_" className="font-out text-[#F1F6F9]" rel="noopener noreferrer"> Whatsapp</a>
          </div>

        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
