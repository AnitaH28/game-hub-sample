import { platform } from "../hooks/useGames"
import {FaWindows, FaPlaystation, FaBox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { HStack, Icon  } from "@chakra-ui/react";
import { IconType } from "react-icons/lib/esm/iconBase";


interface Props {
    platforms: platform[]
    
}



const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key: string]: IconType} = {

        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaBox,
        apple: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe,


    }
    return (
        <HStack marginY={'10px'}>
           {platforms.map((platform) => (
           <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
        
           ))}
        </HStack>
    )  
}

export default PlatformIconList