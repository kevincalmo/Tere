import React from 'react'
import { NavigationBarProps } from '../../models/NavigationBarProps'
import { Button, Flex, Image, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { NavigationItems } from '../../models/NavigationItems'
import Logo from '../../assets/logo.png'
import Mobile from './Mobile'

const NavigationBar: React.FunctionComponent<NavigationBarProps> = (props) => {
    const [isMobile] = useMediaQuery('(max-width: 800px)')
    return (
        <>
            {
                isMobile ?
                    <Mobile />
                    :
                    (<Box>
                        <Flex alignItems='center' justifyContent='space-between'>
                            <Box as='section'>
                                <Image
                                    src={Logo} />
                            </Box>
                            <Box as='section'>
                                <Flex alignItems='center' justifyContent='center'>
                                    {
                                        NavigationItems.map((item, index) => (
                                            <Text
                                                cursor='pointer'
                                                fontSize='17.16px'
                                                lineHeight='21px'
                                                marginInline='30px'
                                                key={index}
                                            > {item.name}</Text>
                                        ))
                                    }
                                    <Button
                                        colorScheme='green'
                                    >
                                        Help Center
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex >
                    </Box >)
            }
        </>


    )
}

export default NavigationBar