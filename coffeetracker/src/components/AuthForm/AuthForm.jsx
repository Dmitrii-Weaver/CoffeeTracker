import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)


  return (
    <Box >
      <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        This is the auth form
        {isLogin ? <Login /> : <Signup />}

        <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={"pointer"}>
          {isLogin ? "Sign up" : "Log in"}
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm