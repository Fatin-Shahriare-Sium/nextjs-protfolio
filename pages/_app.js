
import Layout from '../component/layout'
import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/opener.css'
import '../styles/hero.css'
import '../styles/icon.css'
import '../styles/navbar.css'
import '../styles/about.css'
import '../styles/skill-box.css'
import '../styles/single-project.css'
import '../styles/contact.css'
import '../styles/offcanvas.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import('../styles/globals.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/layout.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/hero.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/icon.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/navbar.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/about.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/skill-box.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/single-project.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/contact.css').then(({ default: style }) => {
  //     return style
  //   })
  //   import('../styles/offcanvas.css').then(({ default: style }) => {
  //     return style
  //   })
  // }, [])
  return <Layout>
    <Component {...pageProps} />
  </Layout>

}

export default MyApp
