import Layout from '../../components/Layout'
import {Box, Heading, Divider, Text} from '@chakra-ui/core'
import {css} from '@emotion/core'
import axios from "axios";
import {baseURL} from "../../axiosConfig";

const DetailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img{
    margin-bottom: 10px;
    display: block;
  }
  
`

export default function Detail({ detail }) {
    console.log(detail)
  return (
    <Layout>
      <Box maxW={1200} mx={'auto'} mt={'70px'}>
          <Heading as={'h2'} fontSize={'xl'}>{detail.title}</Heading>
          <Heading as={'h4'} fontSize={'lg'} mt={'10px'} color={'gray.500'} fontWeight={'light'}>{detail.sub}</Heading>
          <Divider mt={'10px'} />
          <Box overflow={'hidden'} mt={'10px'}>
              <Text float={'left'}>作者: {detail.author}</Text>
              <Text float={'right'}>发布时间: {detail.publish}</Text>
          </Box>
          <Divider mt={'10px'} />
          <Box css={DetailContainer} dangerouslySetInnerHTML={{__html: detail.content}} />
      </Box>
    </Layout>
  );
}

// 获取到用户能够访问到的所有路由参数
export async function getStaticPaths(){
    let {data} = await axios.get('/api/videos', {baseURL});
    let paths = data.map(d => ({params: {id: d}}));
    return {
        paths,
        fallback: false
    }
}

// 根据参数获取其对应的数据
export async function getStaticProps({params}){
    let id = params.id;
    let {data: detail} = await axios.get('/api/detail?id=' + id, {baseURL})

    return {
        props: {
            detail
        }
    }
}