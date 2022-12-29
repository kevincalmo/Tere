import { Box, Card, CardBody, CardHeader, Center, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import cercle from '../../assets/cercle.png'
import phone from '../../assets/iphone.png'

/* Image pouyr la section 1 */
import Image1 from '../../assets/1.png'
import Image2 from '../../assets/2.png'
import Image3 from '../../assets/3.png'
import Image4 from '../../assets/4.png'
import Iphone from '../public/iphone.png'

/* Image pour la section 2 */
import CardEx1 from '../../assets/cardEx1.png'
import CardEx2 from '../../assets/cardEx2.png'
import CardEx3 from '../../assets/cardEx3.png'

const SliderSection = () => {
    const HOW_TERE_WORK = [
        {
            area: 'section1',
            image: Image1
            ,
            title: 'REQUEST A RIDE',
            description: 'Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you'
        },
        {
            area: 'section2',
            image: Image2,
            title: 'POST A RIDE',
            description: 'Going somewhere but hate to travel alone - just post your ride details and publish it'
        },
        {
            area: 'section3',
            image: Image3,
            title: 'INSTANT NOTIFICATIONS',
            description: 'Get instant notifications for your rides and be in contact with fellow riders all the time'
        },
        {
            area: 'section4',
            image: Image4,
            title: 'CASHLESS PAYMENT',
            description: 'Payment made easy by using your own Wallet - no more cash to carry'
        },
    ];

    const TERE_BENEFITS = [
        {
            area: 'section1',
            picture: CardEx1,
            title: 'Flexible working hours',
            description: 'You can decide when, and how much time you want to drive.'
        },
        {
            area: 'section2',
            picture: CardEx2,
            title: 'Earnings',
            description: 'By driving with tere you can earn more.'
        },
        {
            area: 'section3',
            picture: CardEx3,
            title: 'Customer support 24/7',
            description: 'Tere is a local service provider and we are proud to support you in your local language. We are proud to be at your service 24/7!'
        },
    ];
    return (
        <>
            <Box margin={'100px 0'}>
                {/* Présentation */}
                <Box marginBottom={'40px'} paddingInline={'10%'}>
                    <Flex
                        direction={'column'}
                        alignItems='center'
                        justifyContent={'center'}
                    >
                        <Heading textAlign={'center'} marginBottom={'20px'}>HOW <Text textAlign={'center'} color={'green'} as='span'>TERE</Text> WORKS</Heading>
                        <Text textAlign={'center'}>
                            Download and install the tere app. Enter your phone number and make your user account. when approved you may start driving.
                        </Text>
                    </Flex>
                </Box>
                {/* sections */}
                <Grid
                    alignItems={'center'}

                    templateAreas={{
                        base: `"phone"
                        "section1"
                        "section2"
                        "section3"
                        "section4"`,
                        md: `"section1 phone section2"
                        "section3 phone section4"`
                    }}
                    gridTemplateColumns={{
                        base: '1fr',
                        md: '2fr 1.5fr 2fr'
                    }}
                    gridColumnGap={'20px'}
                >
                    <GridItem area={'phone'}>

                        <Flex width={'auto'} backgroundImage={cercle} backgroundSize={'contain'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'} justifyContent={'center'}>
                            <Image
                                src={phone}
                            />
                        </Flex>
                    </GridItem>
                    {HOW_TERE_WORK.map((item, index) => (
                        <GridItem area={item.area}>
                            <Card boxShadow={'none'}>
                                <CardHeader marginBottom={0}>
                                    <Flex
                                        direction={'column'}
                                        alignItems={{
                                            base: 'center',
                                            md: index % 2 !== 0 ? 'flex-start' : 'flex-end'
                                        }}
                                        justify={'flex-start'}
                                    >
                                        <Image src={item.image} />
                                        <Heading margin={'15px 0'} textAlign={'center'} fontSize={{
                                            base: '22px',
                                        }} as='h4'>{item.title}</Heading>
                                    </Flex>

                                </CardHeader>
                                <CardBody marginTop={'-40px'}>
                                    <Text textAlign={{
                                        base: 'center',
                                        md: index % 2 !== 0 ? 'left' : 'right'
                                    }}>{item.description}</Text>
                                </CardBody>
                            </Card>
                        </GridItem>
                    ))}

                </Grid>
            </Box>

            <Box margin={'100px 0'}>
                {/* Présentation */}
                <Box paddingInline={'10%'}>
                    <Flex
                        direction={'column'}
                        alignItems='center'
                        justifyContent={'center'}
                    >
                        <Heading><Text textAlign={'center'} color={'green'} as='span'>TERE</Text> BENEFITS</Heading>
                    </Flex>
                </Box>
                <Flex
                    direction={'column'}
                    justifyContent='center'
                >
                    {TERE_BENEFITS.map((item, index) => (
                        <Box marginTop={'50px'} alignSelf={{
                            base: 'center',
                            xl: 'flex-start'
                        }} width={{ base: '100%', xl: '80%' }} as='section' key={index}>
                            <Grid
                                alignItems={'center'}
                                templateAreas={{
                                    base: `"title"
                                            "picture"
                                            "description"`,
                                    xl: index !== 1 ?
                                        `"title picture"
                                    "description picture"`:
                                        `"picture title"
                                    "picture description"`
                                }}
                                gridTemplateColumns={{
                                    base: '1fr',
                                    xl: '2fr 1fr'
                                }}
                                gridTemplateRows='1fr'
                                gridRowGap={'10'}
                            >
                                <GridItem area={'title'}>
                                    <Text fontWeight={'800'} fontSize={{ base: '25px', xl: '34px' }} textAlign={'center'}> <Text fontSize={{ base: '64px', xl: '88px' }} color={'green'} as='span'>0{index + 1}.</Text> {item.title}</Text>

                                </GridItem>
                                <GridItem area={'picture'}>
                                    <Center>
                                        <Image src={item.picture} />
                                    </Center>

                                </GridItem>
                                <GridItem justifySelf={'center'} area={'description'}>
                                    <Center>
                                        <Text marginTop={{
                                            xl:'-100px'
                                        }} fontSize={{ base: '17px', xl: '22px' }} textAlign={'center'}>{item.description}</Text>
                                    </Center>

                                </GridItem>

                            </Grid>
                        </Box>
                    ))}
                </Flex>

            </Box>
        </>

    )
}

export default SliderSection