import Icon from '@mdi/react';
import { mdiEmail, mdiInstagram, mdiWhatsapp } from '@mdi/js';

export default function Footer() {
    return (
        <div className="bg-primaryGrey rounded-[30px] mx-12 min-h-16 mt-10">
            <div className="">
                <div className="flex justify-between mx-5 py-5">
                    <div>
                        <h1 className="text-center font-bold">POLÍTICAS</h1>
                    </div>

                    <div>
                        <h1 className="text-center items-center font-bold">CONTATO</h1>
                        <div className="flex gap-2 items-center mt-1 p-2 w-max hover:scale-110 transition-all">
                        <Icon path={mdiEmail} size={0.7} color={"#F1F6F9"} />
                        <a target="_blank" href="mailto:contato@mirrorstyles.com.br" className="font-out text-[#F1F6F9]" rel="noopener noreferrer"> Email</a>
                    </div>

                    <div className="flex gap-2 items-center mt-1 p-2 w-max  hover:scale-110 transition-all">
                        <Icon path={mdiWhatsapp} size={0.7} color={"#F1F6F9"} />
                        <a target="_blank" href="https://instagram.com/mirrorstyles_" className="font-out text-[#F1F6F9]" rel="noopener noreferrer"> Whatsapp</a>
                    </div>
                    </div>

                    <div>
                        <div>
                            <h1 className="text-center font-bold">REDES SOCIAIS</h1>
                        </div>
                        <div className="flex gap-1 mt-2 items-center p-2 w-max hover:scale-110 transition-all">
                            <Icon path={mdiInstagram} size={0.7} color={"#F1F6F9"} />
                            <a target="_blank" href="https://instagram.com/mirrorstyles_" className="font-out text-[#F1F6F9]" rel="noopener noreferrer"> Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="h-max flex items-center justify-center bg-[#212a3e] py-5 rounded-[30px]">
                    <p className="text-center text-secundaryWhite text-xl">
                        Mirror ®️ Copyright 2023. Todos os Direitos Reservados.
                    </p>
                </div>

            </div>
        </div>

    );
}
