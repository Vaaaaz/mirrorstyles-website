import Header from "@/components/header";
import Image, { StaticImageData } from "next/image";
import ReflexFront from "@/public/reflexfront.png";
import ReflexBack from "@/public/reflexback.png";
import SpheraFront from "@/public/spherafront.png";
import SpheraBack from "@/public/spheraback.png";
import { useState } from "react";
import Tee from "@/components/tee"; 
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="h-screen bg-primaryBlue mb-16 ">
      <Header />
      <div className="mx-16 mt-20">
        <div className="flex items-center">
          <Tee {... {
            front: ReflexFront,
            back: ReflexBack,
            name: "Reflex",
            description: '"Reflex" autoconhecimento, análise crítica e questionamento profundo de si mesmo e do mundo.',
            backDescription: 'É um convite para a reflexão filosófica sobre a vida, a mente, a ética e outros aspectos.',
            direction: "left"
          }} />
          <div className="ml-10 w-1/2">
            <h1 className="font-out font-semibold text-2xl">
              Sustineri! 
            </h1>
            <p className="mt-2 font-out font-light">
            "Sustineri" é um termo em latim que significa sustentabilidade. É o nome escolhido para o drop da sua marca de roupas. O drop "Sustineri" é uma coleção voltada para a conscientização ambiental e responsabilidade social. As peças são criadas com materiais sustentáveis e processos de produção ecologicamente corretos, visando reduzir o impacto ambiental da indústria da moda.
              <br />
              <br /> Além disso, a marca busca promover valores como a reciclagem, o comércio justo e a valorização da mão de obra local. O drop "Sustineri" é uma expressão de moda que une estilo e responsabilidade, permitindo que os consumidores se vistam com consciência e contribuam para um futuro mais sustentável.
            </p>
            <button className="mt-2 bg-[#44576e9a] rounded-xl p-2">
              Veja mais!
            </button>
          </div>
          <Tee {... {
            front: SpheraFront,
            back: SpheraBack,
            name: "Sphera",
            description: '"Sphera" Simboliza a importância de cuidar do nosso planeta e de preservar e proteger o meio ambiente.',
            backDescription: "Mensagem de conscientização para um futuro sustentável. ",
            direction: "right"
          }} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
