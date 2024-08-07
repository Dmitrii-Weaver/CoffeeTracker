import { Button, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../components/AuthForm/AuthForm'

const DefaultPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} backgroundColor={"#856852"}>
            <Container maxW={"container.md"} padding={0}>
                <Flex  flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} p={5} backgroundColor={""} >
                    <Flex w={"48%"} minH={"50vh"} borderRadius={5} borderColor={'black'} padding={5} border={"1px solid"} background={"#C5A880"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                        <Text>See stats report across all users!</Text>
                        <Image mt={5} mb={5} w={"400px"} src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.engineeringintro.com%2Fwp-content%2Fuploads%2F2012%2F04%2FBar-Graph1.png&f=1&nofb=1&ipt=f867dd7d002e008ec4395be19259dfc08adeea062d117f426c4db8ff076fce7c&ipo=images'></Image>
                        <Button>View Stats!</Button>
                    </Flex>
                    <Flex w={"48%"} minH={"50vh"} borderRadius={5} borderColor={'black'} padding={5} border={"1px solid"} background={"#C5A880"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                        <Text>
                            Log in to track!
                        </Text>
                        <VStack>
                            <AuthForm />

                        </VStack>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default DefaultPage