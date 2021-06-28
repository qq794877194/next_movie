import {Box, Container, Button, Image} from '@chakra-ui/core'
import styled from '@emotion/styled';
import {FaSignInAlt, FaSearch} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {css} from '@emotion/core'
const logo = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
`
const SignAndJoin = styled.div`
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  float: left;
  color: white;
  line-height: 46px;
  & > button{
    padding: 0 10px;
  }
  & > button:nth-of-type(1):after{
    content: '';
    width: 1px;
    height: 10px;
    background: #fff;
    position: absolute;
    right: 0;
    top: 19px;
  }
`
const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: white;
  font-size: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

export default function Header() {
  return (
    <Box h={52} bgColor={'#202020'} borderBottom={'1px solid #393939'}>
        <Container h={52} maxW={1200} position={'relative'}>
            <SignAndJoin>
                <Button leftIcon={<FaSignInAlt />}>登录</Button>
                <Button leftIcon={<BsFillPersonFill />}>注册</Button>
            </SignAndJoin>
            <Image src={'/images/logo.png'} css={logo} />
            <Search>
                <FaSearch />
            </Search>
        </Container>
    </Box>

  );
}
