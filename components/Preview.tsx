import * as React from 'react';
import { useContext } from 'react';
import { Context } from './context/context';
import PreviewItem from './PreviewItem';
import styled from 'styled-components';
import colors from './meta/colors';
import { TopTotal } from './context/context';

const Preview: React.FC = () => {
  const cont = useContext(Context);

  return (
    <Container>
      <Label>Top Rated Mechs in San Francisco</Label>
      <Cards>
        {cont.topUsers.map((item: TopTotal) => (<PreviewItem item={item} />))}
      </Cards>
    </Container>
  )
}

const Container = styled.div`
  height: 40vh;
  margin-top: 50px;
  width: 1120px;
`
const Label = styled.div`
  margin: 30px 0px 26px 20px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #${colors.navy}
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default Preview;