
import { UserProvider } from "@auth0/nextjs-auth0"

function MyApp({ Component, pageProps }) {
  <UserProvider>
    return <Component {...pageProps} />
  </UserProvider>
}

export default MyApp
