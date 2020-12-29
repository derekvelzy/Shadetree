import * as React from 'react';
import { useContext, useState } from 'react';
import Router from 'next/router';
import { Context } from '../context/context';
import styled from 'styled-components';
import colors from '../meta/colors';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import { couldStartTrivia } from 'typescript';

const Welcome: React.FC = () => {
  const cont = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [page, setPage] = useState(true);
  const [location, setLocation] = useState('');
  const [auth, setAuth] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    e.preventDefault();

    switch (type) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'first':
        setFirst(e.target.value);
        break;
      case 'last':
        setLast(e.target.value);
        break;
      case 'location':
        setLocation(e.target.value);
        break;
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
        console.log(results);
        if (results.data.message === 'failed authorization') {
          setAuth(false);
        } else if (results.data !== "") {
          Router.push('/');
        } else {
          console.log('error')
        }
      })
  }

  const handleSignup = () => {
    axios.post('http://localhost:3000/api/signup', {
      data: {
        first,
        last,
        username,
        password,
        location
      }
    })
      .then((results) => {
        console.log(results);
        if (results.data.message === "approved") {
          Router.push('/');
        } else {
          setAuth(false);
        }
      })
  }

  return (
    <Container>
      <Form>
        <div style={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
          <Icon src="https://shadetree-project.s3-us-west-1.amazonaws.com/whiteIcon.png"/>
          <Title className={styles.cur}>Shadetree</Title>
        </div>
        {auth ? (<div></div>) : (<div style={{ color: `#${colors.red}`, marginBottom: "20px" }}>Failed Login</div>)}
        {page ? (<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Input style={{  padding: "8px 20px" }} type="text" placeholder="username" value={username} onChange={(e) => handleChange(e, 'username')}/>
          <Input style={{  padding: "8px 20px" }} type="text" placeholder="password" value={password} onChange={(e) => handleChange(e, 'password')}/>
          <Login onClick={() => handleLogin()}>Login</Login>
        <Signup onClick={() => setPage(!page)}>Sign up</Signup>
        </div>) :
        (<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div>
            <Input style={{  padding: "8px 5px", marginRight: "10px" }} type="text" placeholder="first" value={first} onChange={(e) => handleChange(e, 'first')}/>
            <Input style={{  padding: "8px 5px" }} type="text" placeholder="last" value={last} onChange={(e) => handleChange(e, 'last')}/>
          </div>
          <Input style={{  padding: "8px 20px" }} type="text" placeholder="username" value={username} onChange={(e) => handleChange(e, 'username')}/>
          <Input style={{  padding: "8px 20px" }} type="text" placeholder="password" value={password} onChange={(e) => handleChange(e, 'password')}/>
          <Input style={{  padding: "8px 20px" }} type="text" placeholder="location" value={location} onChange={(e) => handleChange(e, 'location')}/>
          <Login onClick={() => setPage(!page)}>Login</Login>
          <Signup onClick={() => handleSignup()}>Sign up</Signup>
        </div>)}
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-image: url("https://shadetree-project.s3-us-west-1.amazonaws.com/matthew-t-rader-fF5dZ1EbzyI-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: 100vw auto;
  overflow: hidden;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  width: 500px;
  height: auto;
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
  margin: 20px 0px 40px 0px;
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