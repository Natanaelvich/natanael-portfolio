import { Flex, HStack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import {AiOutlineTwitter,AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Flex direction='column' h='100vh' w='100vw' alignItems='center' p='12'  >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex justifyContent='space-between' w='100%' maxW='1200'>

        <Flex >
      <Text fontSize="sm" fontWeight='bold' mr='2'>TRABALHOS</Text>
      <Text fontSize="sm" fontWeight='bold'>CONTATOS</Text>
        </Flex >

        <Flex >
      <IoLogoJavascript size={24} color='yellow'  />
        </Flex >

        <HStack spacing='5' >
        <AiOutlineTwitter />
        <AiFillGithub />
        <AiFillLinkedin />
        </HStack >
      </Flex>

      <Text fontFamily='Uchen, serif' fontSize="4xl" marginTop='10'>Natanael Lima</Text>
      <Text fontFamily='Uchen, serif' fontSize="4xl">Desenvolvedor React Native</Text>
      <Text fontFamily='Uchen, serif' fontSize="4xl">Timbiras-MA Brasil</Text>

    </ Flex>
  )
}
