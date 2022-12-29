import React from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import {
    HamburgerIcon, CloseIcon
} from '@chakra-ui/icons';
import Logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import { NavigationItems } from '../../models/NavigationItems';

const Mobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex alignItems='end' justifyContent='space-between'>
                <Box as='section'>
                    <Image
                        src={Logo} />
                </Box>
                <Button onClick={onOpen}>
                    <Image src={menu}
                    />
                </Button>

            </Flex>

            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                        <Flex justifyContent='end'>
                            <CloseIcon cursor='pointer' onClick={onClose} />
                        </Flex>

                    </DrawerHeader>
                    <DrawerBody>
                        <Flex direction='column' alignItems='center' justifyContent='center'>
                            {
                                NavigationItems.map((item, index) => (
                                    <Text
                                        marginTop='20px'
                                        cursor='pointer'
                                        fontSize='17.16px'
                                        lineHeight='21px'
                                        marginInline='30px'
                                        key={index}
                                    > {item.name}</Text>
                                ))
                            }
                            <Button
                                marginTop='20px'
                                colorScheme='green'
                            >
                                Help Center
                            </Button>
                        </Flex>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Mobile