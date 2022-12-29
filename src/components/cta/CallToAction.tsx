import { Box, Button, Flex, FormControl, Input, Text } from '@chakra-ui/react'
import React from 'react'

const CallToAction = () => {
    return (
        <Box
            borderRadius='5px'
            margin={{
                base: '30px 0'
            }}
            bg='green'

            padding={{
                base: '25px',
                md: '25px 60px'
            }}
        >
            <Flex
                direction={{
                    base: 'column',
                    md: 'row'
                }}
                alignItems='center'
                justifyContent={{
                    base: 'center',
                    md: 'space-between'
                }}
            >
                <Text
                    fontSize={{
                        base: '24px',
                        xl: '34px'
                    }}
                    lineHeight={{
                        base: '24px',
                        xl: '40px'
                    }}
                    color='white'
                    textAlign={{ base: 'center', md: 'left' }}>
                    Let’s go. Get a link to download the app.
                </Text>
                <FormControl>
                    <Flex
                        direction={{
                            base: 'column',
                            xl: 'row'
                        }}
                        justifyContent={{
                            base: 'center',
                            xl: 'flex-end'
                        }}
                        alignItems='center'
                    >
                        <Input
                            width={{
                                base: '100%',
                                xl: '100%'
                            }}
                            margin={{
                                base: '20px 0 25px'
                            }}
                            marginRight={{
                                base: '0',
                                md: '10px'
                            }}
                            type='text' bg='white' placeholder='Enter mobile phone number' />
                        <Button
                        fontWeight={'extrabold'}
                            size={'lg'}
                            width={{
                                base: '100%',
                            }} color='white'
                            background={'black'}>APPLY TO DRIVE</Button>
                    </Flex>

                </FormControl>
            </Flex>

        </Box>
    )
}

export default CallToAction