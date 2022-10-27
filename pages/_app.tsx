import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  return(
    <div className="bg-zinc-50 dark:bg-zinc-900">
      { 
        isLoading ? 
          <Loading />
        :
          <Component {...pageProps} />
      }
    </div>
  )
}

export default MyApp
