import * as React from 'react';
import Carousel from './Carousel';
import Preview from './Preview';
import styled from 'styled-components';

const Home: React.FC = () => {

  return (
    <Container>
      <Carousel />
      <Preview />
    </Container>
  )
}

const Container = styled.div`
  margin: auto;
  width: 1120px;
`

export default Home;