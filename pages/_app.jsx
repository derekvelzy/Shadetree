import '../styles/globals.css'
import { ConfigProvider } from '../components/context/context';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
