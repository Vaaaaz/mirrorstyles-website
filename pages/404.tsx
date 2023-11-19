import Header from "@/components/header";
import Image from "next/image";
import error404 from "@/public/404.svg"
import Footer from "@/components/footer";

export default function custom404() {

    return (

        <div className="bg-primaryBlue h-screen">
            <Header />

            <div className="h-screen flex items-center justify-center">
                <div>
                    <h1 className="font-out text-2xl text-darkB mb-8 font-black text-center">Página não encontrada!</h1>
                    <Image className="m-auto" src={error404} width={250} alt="404" />
                    <p className="font-out text-darkB text-center mt-4">Não foi possível encontrar esse local, volte para o ínicio. </p>
                </div>
                
            </div>
            <Footer/>
            
        </div>
    )

}