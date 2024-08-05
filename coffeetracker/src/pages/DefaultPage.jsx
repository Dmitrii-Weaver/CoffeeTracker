import { Button, Container, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const DefaultPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Container maxW={"container.md"} padding={0}>
                <Flex flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
                    <Flex>
                        <Button>View Stats!</Button>
                    </Flex>
                    <Flex>
                        <Text>
                            Log in 1
                        </Text>
                        <VStack>
                            <Text>form here</Text>

                        </VStack>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default DefaultPage