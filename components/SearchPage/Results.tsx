import * as React from 'react';
import { useContext, useState, useEffect }from 'react';
import { Context } from '../context/context';
import styled from 'styled-components';
import colors from '../meta/colors';
import Link from 'next/link';

const Results: React.FC = () => {
  const cont = useContext(Context);
  console.log(cont);

  useEffect(() => {

  }, [])

  return (
    <Container>
      <div>Showing results for <span style={{ textDecoration: "underline" }}>{cont.selectedService}</span> in <span style={{ textDecoration: "underline" }}>{cont.selectedCity}</span></div>
      <Divide>
        <Res>results</Res>
        <Map>map</Map>
      </Divide>
    </Container>
  )
}

const Container = styled.div`
  width: 1120px;
  margin: 20px auto 0px auto;
`
const Divide = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
const Res = styled.div`
  width: 49%;
`
const Map = styled.div`
  width: 49%;
  b
`

export default Results;