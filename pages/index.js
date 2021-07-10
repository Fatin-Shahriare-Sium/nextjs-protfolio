import About from "../component/about"
import Hero from "../component/hero"
import SkillSection from "../component/skill-section"
// import nextjsBlog from '../assets/nextjs-blog.jpg'
import Image from 'next/image'
import SingleProject from "../component/single-project"

//nextjs-blog img - https://res.cloudinary.com/sium/image/upload/v1625911072/nextjs-blog_jxei2f.jpg
//e-commerce img - https://res.cloudinary.com/sium/image/upload/v1625911762/Screenshot_2021-07-10_at_16-02-09_https_nextjs-e-commerce-two_vercel_app_1_ohiumh.png
//task maneger img - https://res.cloudinary.com/sium/image/upload/v1625911901/Screenshot_2021-07-10_at_16-10-26_Task_Manager_1_dziig7.png
// holy quran img - https://res.cloudinary.com/sium/image/upload/v1625912663/Screenshot_2021-07-10_at_16-23-50_The_Holy_Quran_cpzvyf.png
//twitter clone img- https://res.cloudinary.com/sium/image/upload/v1625940318/Screenshot_2021-07-11_at_00-03-29_React_App_1_xdkxzw.png

// need to watch for background and animation - https://adeolaadeoti.netlify.app/
//https://adeolaadeoti.netlify.app/home-bg.19753168.svg
export default function Home() {

  return (
    <div>
      <Hero />
      <About />
      <SkillSection />
      <SingleProject />

    </div>
  )
}
