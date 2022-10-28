import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <div className="bg-neutral-50 dark:bg-neutral-900">
          <Component {...pageProps} />
    </div>
  )
}

export default MyApp
