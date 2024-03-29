import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import {Provider} from "react-redux"
import {store} from "../src/app/store"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>)
}

export default MyApp
