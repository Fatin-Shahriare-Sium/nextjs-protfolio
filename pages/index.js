

// import SkillSection from "../component/skill-section"
import Hero from "../component/hero.jsx"
import About from "../component/about"
import Opener from "../component/opener"
import { useEffect, useState } from "react"
import Head from 'next/head'
import logo from '../assets/logo.svg'



// need to watch for background and animation - https://adeolaadeoti.netlify.app/
//https://adeolaadeoti.netlify.app/home-bg.19753168.svg
export default function Home() {

  let [expand, setExpand] = useState(false)

  let [skillSec, setSkillSec] = useState('')
  let [projectSec, setProjectSec] = useState('')
  let [contact, setContact] = useState('')
  useEffect(async () => {

    setTimeout(() => {
      setExpand(true)
    }, [3500])
  }, [])

  useEffect(() => {

    if (expand) {
      // import('../component/hero.jsx').then(({ default: Herox }) => {
      //   setxr(<Herox />)
      // })


      import("../component/skill-section.jsx").then(({ default: SkillSection }) => {
        setSkillSec(<SkillSection />)
      })
      import('../component/project-section.jsx').then(({ default: ProjectSection }) => {
        setProjectSec(<ProjectSection />)
      })
      import('../component/contact.jsx').then(({ default: Contact }) => {
        setContact(<Contact />)
      })
    }


  }, [expand])



  if (expand) {
    return (
      <div>
        <Head>
          <link href="/static/logo.png" rel="icon" sizes="32x32" type="image/png" />
          <title>Fatin Shahriare Sium</title>
          <meta content='I am Fatin Shahriare Sium.I have been able to learn web design and development by the grace of Allah.I am professional developer specialized on JavaScript-based technologies.I love to write clean and maintainable code for websites and passionate about learning and exploring new technologies. 
          'name='description' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Fatin Shahriare Sium' />
          <meta property='og:title' content='Fatin Shahriare Sium' />
          <meta property='og:image' content='./siumx.jpg' />
          <meta property="og:image:alt" content="Fatin shahriare sium" />
          <meta property='og:description' content='I am Fatin Shahriare Sium.I have been able to learn web design and development by the grace of Allah.I am professional developer specialized on JavaScript-based technologies.I love to write clean and maintainable code for websites and passionate about learning and exploring new technologies.' />
          <meta property="og:url" content="" />
          <meta property='twitter:title' content='Fatin Shahriare Sium' />
          <meta property="twitter:description" content="I am Fatin Shahriare Sium.I have been able to learn web design and development by the grace of Allah.I am professional developer specialized on JavaScript-based technologies.I love to write clean and maintainable code for websites and passionate about learning and exploring new technologies. " />
          <meta property='twitter:img' content='./siumx.jpg' />
          <meta property="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Fatin shahriare sium" />
        </Head>
        <Hero />
        <About />
        {skillSec}
        {projectSec}
        {contact}
      </div >
    )
  } else {
    return (
      <div>
        <Head>
          <link href="/static/logo.png" rel="icon" sizes="56x32" type="image/png" />
          <title>Fatin Shahriare Sium</title>
          <meta content='I am Fatin Shahriare Sium.I have been able to learn web design and development by the grace of Allah.I am professional developer specialized on JavaScript-based technologies.I love to write clean and maintainable code for websites and passionate about learning and exploring new technologies. 
          'name='description' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Fatin Shahriare Sium' />
          <meta property='og:title' content='Fatin Shahriare Sium' />
          <meta property='og:image' content='./siumx.jpg' />
          <meta property="og:image:alt" content="Fatin shahriare sium" />
          <meta property='og:description' content='I am Fatin Shahriare Sium.I have been able to learn web design and development by the grace of Allah.I am professional developer specialized on JavaScript-based technologies.I love to write clean and maintainable code for websites and passionate about learning and exploring new technologies.' />
          <meta property="og:url" content="" />
          <meta property='twitter:title' content='Fatin Shahriare Sium' />
          <meta property="twitter:description" content="I am Fatin Shahriare Sium.I have been able to learn web design and development by the grace of Allah.I am professional developer specialized on JavaScript-based technologies.I love to write clean and maintainable code for websites and passionate about learning and exploring new technologies. " />
          <meta property='twitter:img' content='./siumx.jpg' />
          <meta property="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Fatin shahriare sium" />
        </Head>
        <Opener />
        <div style={{ margin: '90% 0px' }}>
          <About />
        </div>
      </div>
    )
  }





}
