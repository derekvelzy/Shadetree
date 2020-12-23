import * as React from 'react';
import { useContext, useState } from 'react';
import { Context } from './context/context';
import CarouselItem from './CarouselItem';
import styled from 'styled-components';
import { Service } from '../database/model/model';

const Carousel: React.FC = () => {
  const [position, setPosition] = useState(0);
  const cont = useContext(Context);

  const move = (dir: String) => {
    const max = (cont.services.length - 5) * 211;
    if (dir === 'b' && position < 0) {
      setPosition(position + (211 * 5));
    } else if (dir === 'f' && position > (-1 * max)) {
      setPosition(position - (211 * 5));
    }
    console.log(position);
  }

  return (
    <Container>
      <Browse>Browse Services</Browse>
      <CaroContainer>
        <MoveButtonLeft onClick={() => move('b')}>&#60;</MoveButtonLeft>
          <Caro>
            <div style={{ display: "flex", marginLeft: `${position}px`, transition: "all .5s ease" }}>
              {cont.services.map((item: Service) => {
                return (<CarouselItem item={item}/>)
              })}
            </div>
          </Caro>
        <MoveButtonRight onClick={() => move('f')}>&#62;</MoveButtonRight>
      </CaroContainer>
    </Container>
  )
}

const Browse = styled.div`
  margin: 0px 0px 10px 0px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`
const CaroContainer = styled.div`
  display: flex;
`
const Caro = styled.div`
  overflow: hidden;
  margin: 0px 50px;
  width: 1020px;
`
const Container = styled.div`
  height: 40vh;
  margin: 60px 0px 0px 0px;
`
const MoveButtonLeft = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 1;
  margin-top: 100px;
  background: white;
  border-radius: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 20px;
  cursor: pointer;
  transition: all .3s ease;
  &:focus {
    outline: none
  }
  &:hover {
    background: rgb(233, 233, 233);
    box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 20px;
  }
`
const MoveButtonRight = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  margin: 100px 0px 0px 1080px;
  z-index: 1;
  background: white;
  border-radius: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 20px;
  cursor: pointer;
  transition: all .3s ease;
  &:focus {
    outline: none
  }
  &:hover {
    background: rgb(233, 233, 233);
    box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 20px;
  }
`

export default Carousel;