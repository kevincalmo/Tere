import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import footerLogo from '../../assets/logo_footer.png'
import React from 'react'
import android from '../../assets/play-store.png'
import apple from '../../assets/app-store.png'

const Footer = () => {
    return (
        <footer>
            <Box>
                <Grid
                    alignItems={'center'}
                    templateAreas={{
                        base: `"logo"
                            "text1"
                            "android"
                            "apple"`,
                        md: `"logo text1 text2 android apple"`
                    }}
                >
                    <GridItem area={'logo'}>
                        <Flex justifyContent={'center'}>
                            <Image width='100px' src={footerLogo} />
                        </Flex>

                    </GridItem>
                    <GridItem marginTop={{
                        base: '20px', md: 0
                    }} area={'text1'}>
                        <Flex direction='column' alignItems='center' justifyContent='center'>
                            <Text fontWeight='bold'>Be your friend</Text>
                            <Text color={'gray'} marginTop='5px'>3, Season Park, Jakarta</Text>
                            <Text color={'gray'} marginTop='5px'>support@foodyar.co,id</Text>
                            <Text color={'gray'} marginTop='5px'>021 - 1111 - 2222</Text>
                        </Flex>
                    </GridItem>
                    <GridItem display={{
                        base: 'none',
                        md: 'block'
                    }} area={'text2'}>
                        <Flex direction='column' alignItems='center' justifyContent='center'>
                            <Text fontWeight='bold'>Be your friend</Text>
                            <Text color={'gray'} marginTop='5px'>3, Season Park, Jakarta</Text>
                            <Text color={'gray'} marginTop='5px'>support@foodyar.co,id</Text>
                            <Text color={'gray'} marginTop='5px'>021 - 1111 - 2222</Text>
                        </Flex>
                    </GridItem>
                    <GridItem marginTop={{
                        base: '20px', md: 0
                    }} area={'android'}>
                        <Flex justifyContent='center'>
                            <Button
                                marginRight={{ base: 0, md: '5%' }}
                                width={{
                                    base: 'auto',
                                    md: '100%'
                                }}
                                size={{
                                    base: 'sm',
                                }}
                                color='white'
                                background={'black'}
                            >
                                <Image src={android} />
                                DOWNLOAD
                            </Button>
                        </Flex>

                    </GridItem>
                    <GridItem marginTop={{
                        base: '20px', md: 0
                    }} area={'apple'}>
                        <Flex justifyContent='center'>
                            <Button
                                marginLeft={{
                                    base: 0,
                                    md: '5%'
                                }}
                                width={{
                                    base: 'auto',
                                    md: '100%'
                                }}
                                size={{
                                    base: 'sm',
                                }}
                                color='white'
                                background={'black'}>
                                <Image src={apple} />
                                DOWNLOAD
                            </Button>
                        </Flex>

                    </GridItem>

                </Grid>
            </Box>
            {/* Signature */}
            <Text color={{ base: 'gray.400', md: 'green' }} marginTop={{ base: '23px' }} textAlign='center'>All Rights Reserved tere by Codematics 2022</Text>
        </footer>
    )
}

export default Footer