import { mdiClose, mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const Router = useRouter();

    function toggleMenu() {
        if (menuOpen) {
            setMenuOpen(false);
            return;
        }
        setMenuOpen(true);
    }

    function sendTo(path: string) {
        Router.push(path);
    }

    return <div className={`${menuOpen ? "left-0 bottom-0 overflow-y-hidden" : "left-[27%]"} absolute`}>
        <div onClick={() => toggleMenu()} className="hover: cursor-pointer mt-9 transition-all">
            <Icon path={mdiMenu} className={`${menuOpen ? "invisible" : "visible"}`} size={1} color={"#F1F6F9"} />
        </div>

        {/* hidden={!menuOpen} className="w-full absolute h-full right-0 top-0 left-0" */}

        <div className={`${menuOpen ? "h-screen w-screen" : "invisible"} bg-blue-700 `}>
            <div className={""}>
                <div onClick={() => setMenuOpen(false)}>
                    <Icon path={mdiClose} className="mt-2 mr-2 w-full float-right hover:cursor-pointer" size={1.2} color={"#F1F6F9"} />
                </div>
            </div>
        </div>


        {/* <div className={`${menuOpen ? "visible" : "w-0 invisible"} absolute rounded-2xl z-50 overflow-hidden bg-[#212a3eed] transition-all`}>
            <div onClick={() => setMenuOpen(false)}>
                <Icon path={mdiClose} className="mt-2 mr-2 w-full float-right hover:cursor-pointer" size={1.2} color={"#F1F6F9"} />
            </div>
            <div className="p-2">
                <h1 className="h1-selection" onClick={() => sendTo('/')}>Início</h1>
                <h1 className="h1-selection" onClick={() => sendTo('/produtos')}>Produtos</h1>
                <h1 className="h1-selection" onClick={() => sendTo('/contato')}>Contato</h1>
            </div>

        </div> */}
    </div>
}