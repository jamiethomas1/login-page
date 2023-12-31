'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg='gray.700'
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'gray.600'
      }}
      target="_blank">
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg='gray.500'
      color='gray.200'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 Jamie Thomas. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/jamie-thomas-88b318198/'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'GitHub'} href={'https://github.com/jamiethomas1'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}