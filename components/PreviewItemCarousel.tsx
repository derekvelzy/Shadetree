import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { TopProp } from './PreviewItem';

const PreviewItemCarousel: React.FC<TopProp> = (props) => {
  const [position, setPosition] = useState(0);
  const list = props.item.photo_url.map((photo) => {
    return (<Image src={photo} />)
  })

  return (
    <Caro>
      {list}
    </Caro>
  )
}

const Image = styled.img`
  display: block;
  height: 164px;
  width: 164px;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 20px;
`
const Caro = styled.div`
  display: flex;
  width: 440px;
  overflow: hidden;
`

export default PreviewItemCarousel;