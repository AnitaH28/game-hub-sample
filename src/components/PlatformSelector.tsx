import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/useplatforms";
import { platform } from "../hooks/useGames";


interface Props {
    onSelectPlatform: (platform: platform ) => void
    selectedPlatform: platform | null;
}

const platformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const {data, error} = usePlatforms ();
    if (error) return null;
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={BsChevronBarDown}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default platformSelector
