
import Layout from '../component/layout'
import '../styles/layout.css'

import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('../styles/globals.css').then(({ default: style }) => {
      return style
    })
    import('../styles/opener.css').then(({ default: style }) => {
      return style
    })
    import('../styles/hero.css').then(({ default: style }) => {
      return style
    })
    import('../styles/icon.css').then(({ default: style }) => {
      return style
    })
    import('../styles/navbar.css').then(({ default: style }) => {
      return style
    })
    import('../styles/about.css').then(({ default: style }) => {
      return style
    })
    import('../styles/skill-box.css').then(({ default: style }) => {
      return style
    })
    import('../styles/single-project.css').then(({ default: style }) => {
      return style
    })
    import('../styles/contact.css').then(({ default: style }) => {
      return style
    })
    import('../styles/offcanvas.css').then(({ default: style }) => {
      return style
    })
  }, [])
  return <Layout>
    <Component {...pageProps} />
  </Layout>

}

export default MyApp
