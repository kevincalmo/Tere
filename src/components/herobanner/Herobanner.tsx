import { Box, Button, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import android from '../../assets/play-store.png'
import apple from '../../assets/app-store.png'
import herobanner from '../../assets/herobanner-image.png'

const Herobanner = () => {
    return (
        <Box
            padding={'3%'}
            marginTop={{
                base: '15px',

            }}>
            <Grid
                templateAreas={{
                    base: `"image"
                            "text"`,
                    xl: `"text image"`
                }
                }
                gridTemplateRows={{
                    base: "1fr",
                    xl: "1fr"
                }}
                gridTemplateColumns={{
                    base: "1fr",
                    xl: '1fr 1fr'
                }}
                gap={{
                    base: 0,
                    xl: '50px'
                }}
            >
                <GridItem area={'text'}>
                    <Box height={'100%'} width='100%'>
                        <Flex height={'100%'} direction='column' alignItems='center' justifyContent='space-around'>
                            <Heading
                                width={'100%'}
                                marginTop={{
                                    base: '15px',
                                    md: '50px'
                                }}
                                fontSize={{
                                    base: '30px',
                                    md: '60px'
                                }}
                                fontWeight={800} as='h1'>
                                DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!
                            </Heading>
                            <Text
                                width={'100%'}
                                marginTop={{
                                    base: '12px',
                                    md: '27px'
                                }}
                                marginBottom={{
                                    base: '22px',
                                    md: '62px'
                                }}
                                fontSize={{
                                    base: '18px',
                                    xl: '24px'
                                }}
                                lineHeight={{
                                    base: '22px',
                                    xl: '28px'
                                }}
                            >
                                Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ? Lets ride together
                            </Text>
                            <Box width='100%'>
                                <Flex justifyContent='space-between'>
                                    <Button
                                        marginRight={'5%'}
                                        width={{
                                            base: '100%'
                                        }}
                                        size={{
                                            base: 'sm',
                                            md: 'lg'
                                        }}
                                        color='white'
                                        background={'black'}
                                    >
                                        <Image src={android} />
                                        DOWNLOAD
                                    </Button>
                                    <Button
                                        marginLeft={'5%'}
                                        width={{
                                            base: '100%'
                                        }}
                                        size={{
                                            base: 'sm',
                                            md: 'lg'
                                        }}
                                        color='white'
                                        background={'black'}>
                                        <Image src={apple} />
                                        DOWNLOAD
                                    </Button>
                                </Flex>

                            </Box>
                        </Flex>

                    </Box>
                </GridItem>
                <GridItem area={'image'}>
                    <Box >

                        <Image
                            src={herobanner}
                            height='100%'
                            width={'100%'}
                        />


                    </Box>
                </GridItem>

            </Grid>
        </Box>
    )
}

export default Herobanner