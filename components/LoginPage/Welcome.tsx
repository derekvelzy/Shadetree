import * as React from 'react';
import { useContext, useState } from 'react';
import Router from 'next/router';
import { Context } from '../context/context';
import styled from 'styled-components';
import colors from '../meta/colors';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

const Welcome: React.FC = () => {
  const cont = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    e.preventDefault();
    if (type === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleLogin = () => {
    axios.post('http://localhost:3000/api/login', {
      data: {
        username,
        password
      }
    })
      .then((results) => {
        if (results.data !== "") {
          cont.setAuth(results.data.authToken);
        } else {
          console.log('error')
        }
      })
      .then(() => {
        Router.push('/');
      })
  }

  return (
    <Container>
      <Form>
        <div style={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
          <Icon src="https://shadetree-project.s3-us-west-1.amazonaws.com/whiteIcon.png"/>
          <Title className={styles.cur}>Shadetree</Title>
        </div>
        <Input type="text" placeholder="username" value={username} onChange={(e) => handleChange(e, 'username')}/>
        <Input type="text" placeholder="password" value={password} onChange={(e) => handleChange(e, 'password')}/>
        <Login onClick={() => handleLogin()}>Login</Login>
        <Signup>Sign up</Signup>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("https://shadetree-project.s3-us-west-1.amazonaws.com/matthew-t-rader-fF5dZ1EbzyI-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: 100vw auto;
  overflow: hidden;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18vh;
  background: rgba(0, 0, 0, 0.6);
  width: 500px;
  height: 360px;
`
const Icon = styled.img`
  height: 44px;
  margin-right: 30px;
`
const Input = styled.input`
  text-align: center;
  background: white;
  font-size: 20px;
  border: none;
  margin-bottom: 20px;
  padding: 8px 20px;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`
const Login = styled.button`
  height: 40px;
  width: 100px;
  background: #${colors.blue};
  border: none;
  border-radius: 20px;
  color: white;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #${colors.navy};
    cursor: pointer;
  }
`
const Signup = styled.button`
  height: 40px;
  width: 100px;
  margin-top: 20px;
  background: #${colors.red};
  border: none;
  border-radius: 20px;
  color: white;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #${colors.maroon};
    cursor: pointer;
  }
`
const Title = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: white;
`

export default Welcome;