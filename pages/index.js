

import About from "../component/about"
import Hero from "../component/hero"
import SkillSection from "../component/skill-section"
import Image from 'next/image'
import SingleProject from "../component/single-project"
import ProjectSection from "../component/project-section"
import ContactSingleBox from "../component/contact-single-box"
import ContactSection from "../component/contact"


// need to watch for background and animation - https://adeolaadeoti.netlify.app/
//https://adeolaadeoti.netlify.app/home-bg.19753168.svg
export default function Home() {

  return (
    <div>
      <Hero />
      <About />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}
