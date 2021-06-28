import {Carousel} from 'react-responsive-carousel';
import Head from 'next/head'
import {css} from '@emotion/core';
import styled from '@emotion/styled'
import {Box, Button, Heading, Text} from '@chakra-ui/core'
import axios from 'axios'
import {baseURL} from '../axiosConfig'
import Link from 'next/link'

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child{
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`
const CarouselItem = styled.div`
  position: relative;
  & > div{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: white;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p{
      margin: 10px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img{
    filter: brightness(50%);
  }
`


export default function Swiper({ data }) {
  return (
    <>
        <Head>
            <link rel="stylesheet" href="/css/carousel.min.css"/>
        </Head>
        <Carousel css={swiperContainer} showArrows={false} showIndicators={false} showStatus={false}>
            {data.map(d => (
                <CarouselItem key={d.id}>
                    <img src={d.url} alt=""/>
                    <Box>
                        <Heading as={'h2'} size={'lg'}>{d.title}</Heading>
                        <Text>{d.description}</Text>
                        <Button colorSchema={'red'}>
                            <Link href="/detail/[id]" as={`/detail/${d.vid}`}>
                                <a>
                                    查看详情
                                </a>
                            </Link>
                        </Button>
                    </Box>
                </CarouselItem>
            ))}
        </Carousel>
    </>
  );
}

export function loadSwiper(){
    return axios.get('/api/swiper', {baseURL});
}

