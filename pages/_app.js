import Main from '../components/Layout/Main'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Main><Component {...pageProps} /></Main>
}

export default MyApp
