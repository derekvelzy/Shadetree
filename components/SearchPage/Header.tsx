import * as React from 'react';
import { useContext, useState, useEffect }from 'react';
import SearchBar from '../SearchBar';
import UserInfo from '../UserInfo';
import { Context } from '../context/context';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import colors from '../meta/colors';
import Link from 'next/link';

const Header: React.FC = () => {
  const cont = useContext(Context);

  useEffect(() => {
    console.log(cont)
  }, [cont])

  console.log(cont);

  return (
    <Head>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", width: "880px" }}>
          <Link href="/">
            <TitleIcon>
              <Icon src="https://shadetree-project.s3-us-west-1.amazonaws.com/whiteIcon.png"/>
              <Title className={styles.cur}>Shadetree</Title>
            </TitleIcon>
          </Link>
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
        </div>
        <UserContainer>
          <UserInfo />
        </UserContainer>
      </Container>
    </Head>
  )
}

const Container = styled.div`
  width: 1120px;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin: 0 auto;
  padding-top: 1vh;
  align-items: baseline;
`
const Head = styled.div`
  height: 11vh;
  width: 100%;
  background: #${colors.blue}
`
const Icon = styled.img`
  height: 26px;
  margin-right: 14px;
`
const SearchBarContainer = styled.div`
  margin-top: -25px;
`
const Title = styled.div`
  font-weight: 500;
  font-size: 34px;
  padding-top: 1.5vh;
`
const TitleIcon = styled.div`
  display: flex;
  align-items: baseline;
  cursor: pointer;
`
const UserContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 20px;
  border-radius: 25px;
`

export default Header;