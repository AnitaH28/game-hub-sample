import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px' borderRadius='15px'/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar