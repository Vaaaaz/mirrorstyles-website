import { StaticImageData } from "next/image";

export interface TeeDTO {

    front: StaticImageData,
    back: StaticImageData,
    name: string, 
    description: string,
    backDescription: string,
    direction: string
    
}