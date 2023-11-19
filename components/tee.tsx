import { TeeDTO } from "@/model/TeeDTO";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export default function Tee({ front, back, name, description, backDescription, direction }: TeeDTO) {
    const [state, setState] = useState("Front");
    const [displayDescription, setDisplayDescription] = useState(description);
    const [teeImage, setTeeImage] = useState(front);

    console.log(direction)

    function toggle() {
        if (state == "Front") {
            setState("Back");
            setTeeImage(back);
            setDisplayDescription(backDescription);
            return;
        }

        setState("Front");
        setTeeImage(front);
        setDisplayDescription(description);
    }

    return <div className={`w-[250px] ml-10 h-96 rounded-3xl bg-[#9ba4b5e1] ${direction == "left" ? 'force-skew-left': 'force-skew-right'} hover:bg-[#C1C7CF] hover:cursor-pointer transition-all`}
        onMouseEnter={() => toggle()}
        onMouseLeave={() => toggle()}
    >
        <h1 className="text-center mt-5 font-out font-semibold"> {name}</h1>
        <Image src={teeImage} alt="Reflex Stock Image" width={250} />
        <p className="text-center font-out font-thin">{displayDescription}</p>
    </div>;
}
