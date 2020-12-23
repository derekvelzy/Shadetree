import * as React from 'react';
import { ConfigProvider } from './context/context';
import Header from './Header';
import Home from './Home';
// import styled from 'styled-components';

const App: React.FC = () => {

  return (
    <ConfigProvider>
      <Header />
      <Home />
    </ConfigProvider>
  )
}

export default App;
