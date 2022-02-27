import { Box, Button, Center, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const Login = (props) => {
  return (
        <Center minH={'100vh'}>
            <Box minW={'50%'} borderWidth='3px' p='10' borderColor={'blackAlpha.400'} backgroundColor='blue.200' color={'whitesmoke'}>
                <form style={{flex: 1}}>   
                        <FormControl flex={1}>
                            <FormLabel htmlFor='email'>Alamat Email</FormLabel>
                            <Input id='email' type='email' name='email' />
                            <FormHelperText>Silahkan masukkan email yang valid</FormHelperText>
                        </FormControl>
                        <FormControl flex={1}>
                            <FormLabel htmlFor='password'>Kata Sandi</FormLabel>
                            <Input id='password' type='password' name='password' />
                            <FormHelperText>Silahkan masukkan password anda</FormHelperText>
                        </FormControl>
                        <Button width={'full'} mt='5' colorScheme='blue' onClick={props.onLogin}>Masuk</Button>
                </form>
            </Box>  
        </Center>


  )
}

export default Login