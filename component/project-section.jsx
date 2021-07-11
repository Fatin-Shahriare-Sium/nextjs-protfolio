
import React from 'react'
import SingleProject from '../component/single-project'

//nextjs-blog img - https://res.cloudinary.com/sium/image/upload/v1625911072/nextjs-blog_jxei2f.jpg
//e-commerce img - https://res.cloudinary.com/sium/image/upload/v1625911762/Screenshot_2021-07-10_at_16-02-09_https_nextjs-e-commerce-two_vercel_app_1_ohiumh.png
//task maneger img - https://res.cloudinary.com/sium/image/upload/v1625911901/Screenshot_2021-07-10_at_16-10-26_Task_Manager_1_dziig7.png
// holy quran img - https://res.cloudinary.com/sium/image/upload/v1625912663/Screenshot_2021-07-10_at_16-23-50_The_Holy_Quran_cpzvyf.png
//twitter clone img- https://res.cloudinary.com/sium/image/upload/v1625940318/Screenshot_2021-07-11_at_00-03-29_React_App_1_xdkxzw.png
const ProjectSection = () => {
    let projectData = [
        {
            title: 'MERN Stack E-commerce',
            img: ' https://res.cloudinary.com/sium/image/upload/v1625911762/Screenshot_2021-07-10_at_16-02-09_https_nextjs-e-commerce-two_vercel_app_1_ohiumh.png',
            description: "It is fully functional MERN Stack e-commerce website.This app's frontEnd is created using Nextjs .For,backend [admin panel/CMS] i use ReactJs,Nodejs,Expressjs and for database MongoDB. ",
            technologies: 'Nextjs . Reactjs . Nodejs . MongoDB . Expressjs',
            link: {
                github: 'https://github.com/Fatin-Shahriare-Sium/nextjs-e-commerce',
                website: 'https://nextjs-e-commerce-two.vercel.app/'
            }
        },
        {
            title: 'MERN Task Manager App',
            img: 'https://res.cloudinary.com/sium/image/upload/v1625911901/Screenshot_2021-07-10_at_16-10-26_Task_Manager_1_dziig7.png',
            description: "A modern web application to maintain daily task.This app's frontEnd is created using Nextjs .For,backend [admin panel/CMS] i use ReactJs,Nodejs,Expressjs and for database MongoDB. ",
            technologies: ' Reactjs . Chartjs . Nodejs . MongoDB . Expressjs',
            link: {
                github: 'https://github.com/Fatin-Shahriare-Sium/mern-task',
                website: 'https://task-managerx.netlify.app/'
            }
        },
        {
            title: 'The Holy Quran',
            img: 'https://res.cloudinary.com/sium/image/upload/v1625912663/Screenshot_2021-07-10_at_16-23-50_The_Holy_Quran_cpzvyf.png',
            description: "A holy quran website to spread the truth.Actuallly,it is made using Quran.com's Api.It is the most complex api i have ever seen in my life ",
            technologies: ' Reactjs . Quran.com API',
            link: {
                github: 'https://github.com/Fatin-Shahriare-Sium/holy-quran',
                website: 'https://holyquran.netlify.app/'
            }
        },
        {
            title: 'Nextjs Blog',
            img: 'https://res.cloudinary.com/sium/image/upload/v1625911072/nextjs-blog_jxei2f.jpg',
            description: "A modern blog website.It has on page SEO and SSR.It is a great website for SEO Rankings.I build dasboard from scratch for this blog website to maintain post .This app's frontEnd is created using Nextjs .For,backend [dasboard/CMS] i use ReactJs,Nodejs,Expressjs and for database MongoDB",
            technologies: ' Reactjs . . Nodejs . MongoDB . Expressjs ',
            link: {
                github: 'https://github.com/Fatin-Shahriare-Sium/nextjs-blog',
                website: 'https://nextjs-blog-lovat-xi.vercel.app/'
            }
        },
        {
            title: 'Twitter Clone',
            img: 'https://res.cloudinary.com/sium/image/upload/v1625940318/Screenshot_2021-07-11_at_00-03-29_React_App_1_xdkxzw.png',
            description: "This clone is done by Reactjs.I use firebase for database.I have cloned only the design , post functionalities, post showing  and like functionalities almost like Twitter ",
            technologies: ' Reactjs . Firebase . Material Ui',
            link: {
                github: 'https://github.com/Fatin-Shahriare-Sium/twitter-clone',
                website: 'https://github.com/Fatin-Shahriare-Sium/twitter-clone'
            }
        }
    ]
    return (
        <div className='project-section'>
            <p className="project-section__haeder">#Projects</p>
            <div className="project-section__container">
                {projectData.map((sig, index) => <SingleProject name={sig.title} img={sig.img} description={sig.description} tech={sig.technologies} link={sig.link} />)}
            </div>
        </div>
    )
}

export default ProjectSection;
