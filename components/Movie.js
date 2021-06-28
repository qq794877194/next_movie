import {Box, Heading, HStack, Image, Text} from '@chakra-ui/core'
import {MdMovie} from 'react-icons/md'
import axios from "axios";
import {baseURL} from "../axiosConfig";

export default function Movie({ data, title }) {
  return (
    <Box maxW={1200} mx={'auto'} mt={'20px'}>
        <HStack fontSize={'24px'}>
            <MdMovie />
            <Heading as={'h3'} fontSize={'24px'}>{title}</Heading>
        </HStack>
        <HStack mt={'20px'} spacing={3}>
            {data.map(d => (
                <Box w={290} key={d.id}>
                    <Image src={d.url} />
                    <Text mt={'10px'} fontSize={14}>{d.title}</Text>
                </Box>
            ))}
        </HStack>
    </Box>
  );
}

export function loadMovie(){
    return axios.get('/api/movie', {baseURL});
}

