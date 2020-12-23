import * as React from 'react';
import styled from 'styled-components';
import colors from './meta/colors';
import { Service } from '../database/model/model';

interface ServiceProp {
  item: Service;
}

const CarouselItem: React.FC<ServiceProp> = (props) => {
  return (
    <Container>
      <CaroImage src={props.item.photo_url} />
      <Label>
        <div>{props.item.service}</div>
        <Results>Show Results</Results>
      </Label>
    </Container>
  )
}

const CaroImage = styled.img`
  display: block;
  height: 170px;
  width: 175px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
const Container = styled.div`
  margin: 16px 36px 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: all .4s ease;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 18px;
  }
`
const Label = styled.div`
  background: white;
  text-align: center;
  padding: 8px 0px;
  width: 171px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #${colors.navy};
`
const Results = styled.button`
  border: none;
  background: #${colors.red};
  padding: 5px 8px;
  border-radius: 8px;
  margin: 10px 0px 5px 0px;
  color: #${colors.cream};
`

export default CarouselItem;