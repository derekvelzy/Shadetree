import * as React from 'react';
import { Parallax, Background } from 'react-parallax';
import Search from './Search';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import colors from './meta/colors';

const Header: React.FC = () => (
  <Head>
    <div style={{ height: "1vh", background: `#${colors.cream}` }}></div>
    <Parallax strength={300}>
      <Background>
        <BGImage src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/racerEdit.jpg" />
      </Background>
      <Container>
        <HeaderBar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon src="https://shadetree-project.s3-us-west-1.amazonaws.com/whiteIcon.png"/>
            <Title className={styles.cur}>Shadetree</Title>
          </div>
          <HeaderDetails>
            <div style={{ fontSize: "18px" }}>Become a Mech</div>
            <ProfileIcon></ProfileIcon>
          </HeaderDetails>
        </HeaderBar>
        <Search />
      </Container>
    </Parallax>
  </Head>
)

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
  justify-content: space-between;
  width: 250px;
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  height: 44px;
  margin-right: 30px;
`
const ProfileIcon = styled.div`
  border: 1px solid white;
  width: 50px;
  height: 50px;
  align-self: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
`
const Title = styled.div`
  font-weight: 500;
  font-size: 50px;
`

export default Header;

//height: "82vh", overflow: "hidden", objectFit: "cover"