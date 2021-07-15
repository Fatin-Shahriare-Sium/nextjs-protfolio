

// import SkillSection from "../component/skill-section"
import Hero from "../component/hero.jsx"
import About from "../component/about"
import Opener from "../component/opener"
import { useEffect, useState } from "react"





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
        <Opener />
        <div style={{ margin: '90% 0px' }}>
          <About />
        </div>
      </div>
    )
  }





}
