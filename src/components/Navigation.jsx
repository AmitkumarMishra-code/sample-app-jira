import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import {ReactComponent as People} from '../svg/People.svg'
import {ReactComponent as Topics} from '../svg/Topics.svg'
import {ReactComponent as Projects} from '../svg/Projects.svg'
import {ReactComponent as MyTasks} from '../svg/MyTasks.svg'
import { useState } from "react";

export default function Navigation() {
    const [selected, setSelected] = useState(0)

    return (
        <Box
            w='8vw'
            h='100vh'
            bg='#4b33a2'
        >
            <Box
                w='100%'
                d='flex'
                justifyContent='center'
                alignItems='center'
                py = '1.5rem'
            >
                <Image src='/images/logo.png' alt = 'logo' width = '83px' height = '45px' />
            </Box>

            <Box
                w='100%'
                d='flex'
                justifyContent='center'
                alignItems='center'
                py = '2rem'
                flexDir = 'column'
                bg = {selected === 0 && '#EDE8FF'}
                cursor = 'pointer'
                onClick = {() => setSelected(0)}
            >
                <People width = '23px' height = '28px' stroke = {selected === 0 ? '#4b33a2' :'#ffffff'} fill = {selected === 0 ? '#4b33a2' :'#ffffff'} />
                <Text mt = '0.5rem' color = {selected === 0 ? '#4b33a2' :'#ffffff'} fontSize = '14px' fontWeight = '500'>People</Text>
            </Box>

            <Box
                w='100%'
                d='flex'
                justifyContent='center'
                alignItems='center'
                py = '2rem'
                flexDir = 'column'
                bg = {selected === 1 && '#EDE8FF'}
                cursor = 'pointer'
                onClick = {() => setSelected(1)}
                
            >
                <Topics width = '23px' height = '28px' stroke = {selected === 1 ? '#4b33a2' :'#ffffff'} fill = {selected === 1 ? '#4b33a2' :'#ffffff'} />
                <Text mt = '0.5rem' color = {selected === 1 ? '#4b33a2' :'#ffffff'} fontSize = '14px' fontWeight = '500'>Topics</Text>
            </Box>

            <Box
                w='100%'
                d='flex'
                justifyContent='center'
                alignItems='center'
                py = '2rem'
                flexDir = 'column'
                bg = {selected === 2 && '#EDE8FF'}
                cursor = 'pointer'
                onClick = {() => setSelected(2)}
            >
                <Projects width = '23px' height = '28px' stroke = {selected === 2 ? '#4b33a2' :'#ffffff'} fill = {selected === 2 ? '#4b33a2' :'#ffffff'} />
                <Text mt = '0.5rem' color = {selected === 2 ? '#4b33a2' :'#ffffff'} fontSize = '14px' fontWeight = '500'>Projects</Text>
            </Box>

            <Box
                w='100%'
                d='flex'
                justifyContent='center'
                alignItems='center'
                py = '2rem'
                flexDir = 'column'
                bg = {selected === 3 && '#EDE8FF'}
                cursor = 'pointer'
                onClick = {() => setSelected(3)}
            >
                <MyTasks width = '23px' height = '28px' stroke = {selected === 3 ? '#4b33a2' :'#ffffff'} fill = {selected === 3 ? '#4b33a2' :'#ffffff'} />
                <Text mt = '0.5rem' color = {selected === 3 ? '#4b33a2' :'#ffffff'} fontSize = '14px' fontWeight = '500'>My Tasks</Text>
            </Box>
        </Box>
    )
}