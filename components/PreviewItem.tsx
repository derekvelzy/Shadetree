import * as React from 'react';
import styled from 'styled-components';
import colors from './meta/colors';
import PreviewItemCarousel from './PreviewItemCarousel';
import { TopTotal } from './context/context';

export interface TopProp {
  item: TopTotal;
}

const PreviewItem: React.FC<TopProp> = (props) => {
  const list = props.item.service.map((s) => {
    return (<Service>{s}</Service>);
  });


  return (
    <Container>
      <TopProfile>
        <ProfilePic src={props.item.photo} />
        <ProfileInfo>
          <Title>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>{props.item.first} {props.item.last}</div>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>{props.item.rating}</div>
          </Title>
          <div style={{ fontSize: "16px", marginTop: "8px", color: `#${colors.red}` }}>
            @{props.item.username}
          </div>
          <div style={{ fontSize: "16px", marginTop: "8px" }}>{props.item.location}, CA</div>
        </ProfileInfo>
      </TopProfile>
      <Services>
        {list}
      </Services>
    </Container>
  )
}

const Container = styled.div`
  color: #${colors.navy};
  padding: 20px 30px;
  margin: 0px 0px 30px 0px;
  background: #${colors.blue};
  background: white;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 18px;
  border-radius: 20px;
  width: 480px;
`
const ProfileInfo = styled.div`
  margin-left: 50px;
`
const ProfilePic = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
`
const Service = styled.div`
  margin-right: 16px;
  cursor: pointer;
  color: #${colors.blue};
  border: 1px solid #${colors.blue};
  font-size: 14px;
  padding: 2px 5px;
  border-radius: 5px;
  &:hover {
    color: #${colors.navy};
    border: 1px solid #${colors.navy};
  }
`
const Services = styled.div`
  display: flex;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
`
const TopProfile = styled.div`
  height: 120px;
  display: flex;
`


export default PreviewItem;