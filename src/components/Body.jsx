import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { ReactComponent as Group } from '../svg/Group.svg'
import { ReactComponent as Delete } from '../svg/Delete.svg'
import { ReactComponent as Plus } from '../svg/plus.svg'
import { Checkbox } from "@chakra-ui/checkbox";

import data from '../data'

export default function Body() {

    let getStatus = (status) => {
        switch (status) {
            case 'progress':
                return <Box bg='#E87D00' px='2' borderRadius='12px' fontSize='10px' fontWeight='500' color='white' d='flex' justifyContent='center' alignItems='center'>
                    IN PROGRESS
                </Box>
            case 'completed':
                return <Box bg='#00AF85' px='2' borderRadius='12px' fontSize='10px' fontWeight='500' color='white' d='flex' justifyContent='center' alignItems='center'>
                    COMPLETED
                </Box>
            case 'todo':
                return <Box bg='#A24E33' px='2' borderRadius='12px' fontSize='10px' fontWeight='500' color='white' d='flex' justifyContent='center' alignItems='center'>
                    TO-DO
                </Box>
            default:
                return
        }
    }

    return (
        <Box
            minH='100vh'
            flex='1'
            w='100%'
        >
            <Box
                w='100%'
                d='flex'
                justifyContent='flex-end'
                alignItems='center'
                my='1.5rem'
                px='2rem'
            >
                <Button
                    variant='outline'
                    fontSize='14px'
                    fontFamily='Roboto'
                    leftIcon={<Group />}
                    mr='2'
                >
                    ASSIGN TO PROJECT
                </Button>
                <Button
                    variant='outline'
                    fontSize='14px'
                    fontFamily='Roboto'
                    leftIcon={<Delete />}
                    mr='2'
                >
                    DELETE
                </Button>
                <Button
                    variant='outline'
                    fontFamily='Roboto'
                    fontSize='14px'
                    leftIcon={<Plus />}
                >
                    NEW PERSON
                </Button>
            </Box>

            <Box
                w='100%'
                d='flex'
                justifyContent='center'
                alignItems='center'
                boxShadow='1px 1px 8px 2px rgba(0, 0, 0, 0.2)'
            >
                <Box
                    w='95%'
                    d='flex'
                    justifyContent='flex-start'
                    alignItems='center'
                    h='5vh'
                >
                    <Box
                        py='2'
                        h='100%'
                        d='flex'
                        justifyContent='center'
                        alignItems='center'
                        w='5%'
                    >
                        <Checkbox></Checkbox>
                    </Box>
                    <Box
                        bg='#f2f2f2'
                        h='100%'
                        d='flex'
                        justifyContent='center'
                        alignItems='center'
                        w='20%'
                    >
                        Name
                    </Box>
                    <Box
                        h='100%'
                        d='flex'
                        justifyContent='center'
                        alignItems='center'
                        w='25%'
                    >
                        Active Topics
                    </Box>
                    <Box
                        d='flex'
                        justifyContent='center'
                        alignItems='center'
                        h='100%'
                        w='25%'
                    >
                        Projects
                    </Box>
                    <Box
                        h='100%'
                        d='flex'
                        justifyContent='center'
                        alignItems='center'
                        w='25%'
                    >
                        Previous 1:1s
                    </Box>
                </Box>
            </Box>

            <Box
                w='100%'
                d='flex'
                justifyContent='center'
                alignItems='center'
                flexDir='column'
                my='1rem'
            >
                {
                    data.map((val, idx) => <Box
                        my='1rem'
                        w='95%'
                        d='flex'
                        justifyContent='flex-start'
                        alignItems='center'
                        key={idx}
                        boxShadow='2px 2px 16px 5px rgba(0, 0, 0, 0.1)'
                        borderRadius='18px'
                    >
                        <Box
                            py='2'
                            h='100%'
                            d='flex'
                            justifyContent='center'
                            alignItems='center'
                            w='5%'
                        >
                            <Checkbox></Checkbox>
                        </Box>
                        <Box
                            bg='#f2f2f2'
                            d='flex'
                            justifyContent='center'
                            alignItems='stretch'
                            w='20%'
                            fontSize='20px'
                            height = '100%'
                            fontWeight='500'
                            py = '3rem'
                        >
                            <Text>
                                {val.name}
                            </Text>
                        </Box>
                        <Box
                            h='100%'
                            d='flex'
                            justifyContent='center'
                            alignItems='center'
                            w='25%'
                            flexDir='column'
                            py='3'
                        >
                            {
                                val.topics.length > 0 ?
                                    val.topics.map((topic, id) => <Text key={id}>{topic}</Text>) :
                                    <Box d='flex' flexDir='column'>
                                        <Text fontSize='14px'>No Active Topics</Text>
                                        <Text fontWeight='700' fontSize='14px' color='#00AF85'>Add Topic</Text>
                                    </Box>
                            }
                        </Box>
                        <Box
                            py='3'
                            d='flex'
                            justifyContent='center'
                            alignItems='center'
                            h='100%'
                            w='25%'
                            flexDir='column'
                        >
                            {
                                val.projects.length > 0 ?
                                    val.projects.map((project, id) => <Box key={id} d='flex' w='100%' justifyContent='flex-start' alignItems='center' pl='5rem'>
                                        <Text mr='2'>{project[0]}</Text>
                                        {getStatus(project[1])}
                                    </Box>) :
                                    <Box d='flex' flexDir='column'>
                                        <Text fontSize='14px'>No Current Projects</Text>
                                        <Text fontWeight='700' fontSize='14px' color='#00AF85'>Assign to Project</Text>
                                    </Box>
                            }
                        </Box>
                        <Box
                            py='3'
                            h='100%'
                            d='flex'
                            justifyContent='center'
                            alignItems='center'
                            w='25%'
                            flexDir='column'
                        >
                            {
                                val.previous.length > 0 ?
                                    val.previous.map((prev, id) => <Text key={id}>{prev}</Text>) :
                                    <Box d='flex' flexDir='column'>
                                        <Text fontSize='14px'>No 1:1s</Text>
                                        <Text fontWeight='700' fontSize='14px' color='#00AF85'>Start first 1:1</Text>
                                    </Box>
                            }
                        </Box>
                    </Box>)
                }


            </Box>


        </Box>
    )
}