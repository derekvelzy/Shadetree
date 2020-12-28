import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Context } from './context/context';
import styled from 'styled-components';
import colors from './meta/colors';

const UserInfo: React.FC = () => {
  const [photo, setPhoto] = useState<String>('');
  const [open, setOpen] = useState(false);

  const cont = useContext(Context);
  // useEffect(() => {
  //   setPhoto(cont.user.photo)
  // }, [cont])

  return (
    <Container>
      <DropDown>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => setOpen(!open)}>
          <Arrow style={{ transform: open ? "rotate(180deg)" : "none" }} src="https://shadetree-project.s3-us-west-1.amazonaws.com/dropdown.png" />
          <ProfileImage src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
        </div>
        <Menu style={{ height: open ? "116px" : "0px", width: open ? "98px" : "20px", transition: "all 0.3s ease", overflow: "hidden" }}>
          <MenuItem style={{ display: open ? "block" : "none", marginTop: "10px" }}>messages</MenuItem>
          <MenuItem style={{ display: open ? "block" : "none" }}>history</MenuItem>
          <MenuItem style={{ display: open ? "block" : "none" }}>account</MenuItem>
        </Menu>
      </DropDown>
    </Container>
  )
}

const Arrow = styled.img`
  margin: 15px 20px 0px 15px;
  height: 16px;
`
const Container = styled.div`
  border-radius: 25px;
  z-index: 5;
`
const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 25px;
  background: white;
`
const Menu = styled.div`
  color: black;
  padding: 5px;
`
const MenuItem = styled.div`
  font-size: 15px;
  padding: 4px 12px 6px 12px;
  margin: 3px 0px;
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    background: #${colors.blue};
    color: white;
  }
`
const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin: 5px 5px -5px 5px;
  border-radius: 50%;

`

export default UserInfo;
