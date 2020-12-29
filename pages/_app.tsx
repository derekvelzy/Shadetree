import '../styles/globals.css'
import { ConfigProvider } from '../components/context/context';
import Welcome from './welcome';

const MyApp = ({ Component, pageProps }) => {
  if (Component === Welcome) {
    return (
      <Welcome {...pageProps}/>
    )
  } else {
    return (
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    )
  }
}

export default MyApp
