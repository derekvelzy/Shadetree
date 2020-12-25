import * as React from 'react';
import { Parallax, Background } from 'react-parallax';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import colors from './meta/colors';

const Header: React.FC = () => {

  return (
    <Head>
      <div style={{ height: "1vh", background: `#${colors.cream}` }}></div>
      <Parallax strength={300}>
        <Background>
          <BGImage src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/racerEdit.jpg" />
        </Background>
        <Container>
          <HeaderBar>
            <div style={{ display: "flex", justifyContent: "space-between", width: "980px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Icon src="https://shadetree-project.s3-us-west-1.amazonaws.com/whiteIcon.png"/>
                <Title className={styles.cur}>Shadetree</Title>
              </div>
              <HeaderDetails>Become a Mech</HeaderDetails>
            </div>
            <UserContainer>
              <UserInfo />
            </UserContainer>
          </HeaderBar>
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
        </Container>
      </Parallax>
    </Head>
  )
}

const BGImage = styled.img`
  width: 97vw;
  height: 76vh;
  object-fit: cover;
  margin-top: 1.4vh;
  border-radius: 35px;
`
const Container = styled.div`
  height: 76vh;
  margin: auto;
  width: 1120px;
`
const Head = styled.div`
  height: 76vh;
  width: 100%;
`
const HeaderBar = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin-top: 20px;
  align-items: center;
`
const HeaderDetails = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  height: 44px;
  margin-right: 30px;
`
const SearchBarContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 20px;
  width: 600px;
  border-radius: 22px;
`
const Title = styled.div`
  font-weight: 500;
  font-size: 50px;
`
const UserContainer = styled.div`
  align-self: flex-center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 20px;
  height: 50px;
  border-radius: 25px;
`

export default Header;

//height: "82vh", overflow: "hidden", objectFit: "cover"