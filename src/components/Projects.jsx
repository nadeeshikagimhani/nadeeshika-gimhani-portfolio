import { SquareArrowOutUpRight } from 'lucide-react';
import projectImg from '../assets/projectImg.png'
import mangoVacationImg from '../assets/mango-vacation.jpg'
import kingCoconutImg from '../assets/king cocnut.jpg'
import HandmadeHaven from '../assets/handmade haven.jpg'
import solutionMaster from '../assets/solution master.jpg'
import taraLeisure from '../assets/tara leisure.jpg'
import { FaGithub, FaFigma } from "react-icons/fa";

const Projects = ({ darkMode }) => {

  const projects = [
    {
      status: "Live",
      image: mangoVacationImg,
      title: "Mango Vacations",
      subTitle: "A fully custom, highly responsive tourism website built and maintained for a live client.",
      tags: ["WordPress","Divi Builder","Frontend Development","Responsive Design","Website Maintenance"],
      description: "Developed the complete frontend architecture and user interface using the Divi ecosystem, translating client requirements into a seamless booking and browsing experience. Following the successful launch, I continue to handle routine platform maintenance, performance optimization, and content updates.",
      liveSite: "https://mango-vacations.com/",
    },
    {
      status: "In Progress",
      image: kingCoconutImg,
      title: "King Coconut Holidays",
      subTitle: "An ongoing, collaborative travel platform built from custom Figma prototypes to dynamic WordPress architecture.",
      tags: ["UI/UX Design","Figma","WordPress","ACF/CPT","Collaborative Workflow", "Dynamic CMS"],
      description: "Designed the entire user interface from scratch in Figma before collaborating with a developer partner to build out the functional site. I engineered the dynamic backend structure using Custom Post Types (CPT) and Advanced Custom Fields (ACF) to handle complex holiday listings, while managing the complete frontend development using Divi.",
      liveSite: "https://kingcoconutholidays.zeebrart.com/",
      secondaryLink: {
        text: "Figma",
        url: "https://www.figma.com/design/W5DUD0dypKwwRgwjQ8O8ND/Kingcoconut-holidays?node-id=2101-2&t=nyp9LMdBBwEnuT77-1",
        type: "figma"
      }
    },
    {
      status: "Case Study/Learning",
      image: solutionMaster,
      title: "Solution Master",
      subTitle: "A comprehensive UI redesign and dynamic content restructuring for an engineering and corporate business website.",
      tags: ["Figma UI Design","Elementor","ACF/CPT","Corporate Web Design", "Digital Asset Management"],
      description: "Created a modern corporate UI layout in Figma and executed the full build using Elementor. I integrated Advanced Custom Fields and Custom Post Types to build automated portfolio grids and gallery engines for project showcases. This project serves as a real-world modernization case study for an established business, paired with cross-functional social media management.",
      liveSite: "https://solutionmaster.zeebrart.com/",
      secondaryLink: {
        text: "Figma",
        url: "https://www.figma.com/design/NXzjLKa7N9UvxTJVJ5MZsk/Solution-Master?node-id=0-1&t=kc80PzjhwlYq3kpq-1",
        type: "figma"
      }
    },
    {
      status: "Case Study/Learning",
      image: projectImg,
      title: "Full-Stack Notes App",
      subTitle: "A foundational MERN stack CRUD application built to master backend logic and database architectures.",
      tags: ["MERN Stack","Node.js","Express.js","MongoDB", "REST APIs","Backend Learnin"],
      description: "My introductory project into full-stack JavaScript development, built explicitly to understand server-side operations. I engineered RESTful API endpoints using Node.js and Express, configured schema modeling using MongoDB, and connected the system to a clean frontend to handle persistent, real-time user data creation and retrieval.",
      liveSite: "#",
      secondaryLink: {
        text: "Github",
        url: "https://www.figma.com/design/NXzjLKa7N9UvxTJVJ5MZsk/Solution-Master?node-id=0-1&t=kc80PzjhwlYq3kpq-1",
        type: "github"
      }
    },
    {
      status: "Active Development",
      image: HandmadeHaven,
      title: "Handmade Haven",
      subTitle: "An active, full-stack E-commerce web application currently under development using the MERN ecosystem.",
      tags: ["MERN Stack", "JavaScript (ES6+)", "React.js", "E-commerce","Backend Learnin"],
      description: "An ongoing personal project designed to simulate a modern, component-driven online marketplace. I am currently designing and coding the responsive frontend layout using React and JavaScript, with plans to integrate secure database handling and state management pipelines as the project transitions into active full-stack testing.",
      liveSite: "#",
      secondaryLink: {
        text: "Github",
        url: "#",
        type: "github"
      }
    },
    {
      status: "In Progress",
      image: taraLeisure,
      title: "Tara Leisure By Gerard",
      subTitle: "A collaborative UI design and bespoke WordPress portfolio platform built for an elite, veteran travel curation business.",
      tags: ["UI/UX Design (Figma)", "WordPress","Elementor", "Collaborative Workflow", "Travel Portfolio Design", "Active Development"],
      description: "Partnered with a fellow developer to design and engineer a premium travel portfolio for an industry veteran with over 40 years of European tourist guiding experience in Sri Lanka. I translated the client's rich legacy into a high-converting, modern UI layout using Figma. We are currently executing the frontend architecture inside WordPress using Elementor, focusing heavily on immersive visual storytelling, seamless itinerary browsing, and an intuitive booking inquiry funnel.",
      liveSite: "#",
      secondaryLink: {
        text: "Github",
        url: "#",
        type: "github"
      }
    },
  ];

  const iconMap = {
    github: <FaGithub className="w-4 h-4" />,
    figma: <FaFigma className="w-4 h-4" />,
  };

  const darkTheme = {
    borderCard: 'border border-dark-border text-dark-text-primary',
    textPrimary: 'text-dark-text-secondary',
    textSecondary: 'text-dark-secondary',
    bodyText: 'text-dark-text-primary',
    coloredTag: 'border border-dark-border bg-dark-card text-dark-text-primary',
    statusTag: 'bg-dark-highlight-yellow px-4 py-1 text-dark-tags',
    button1: 'bg-dark-secondary text-white px-4 py-3 text-[15px]',
    button2: 'bg-dark-secondary/20 border border-darl-secondary/30 text-white px-4 py-3 text-[15px]'
  };

  const lightTheme = {
    borderCard: 'border border-light-card-border text-light-text-primary',
    textPrimary: 'text-light-text-primary',
    textSecondary: 'text-light-secondary',
    bodyText: 'text-light-text-primary',
    coloredTag: 'border border-light-card-border bg-light-card text-light-text-primary',
    statusTag: 'bg-dark-highlight-yellow px-4 py-1 text-dark-tags',
    button1: 'bg-dark-secondary text-white px-4 py-3 text-[15px]',
    button2: 'bg-dark-secondary/20 border border-darl-secondary/30 text-white px-4 py-3 text-[15px]'
  };

  const theme = darkMode ? darkTheme : lightTheme;


  return (
    <section
    id="projects"
    style={{
      backgroundColor: darkMode ? '#0F161C' : '#F7F9FD'
    }}>
      <div className="container mx-auto px-6 p-20">

        {/* Heading and subheadline */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <h1 className={`${theme.textPrimary} text-4xl md:text-5xl font-raleway font-bold leading-12 lg:leading-16 m-4 text-center lg:text-left reveal-up`}>Recent <span className={`${theme.textSecondary}`}>Projects</span></h1>

            <p className={`${theme.bodyText} text-[15px] lg:text-[16px] font-poppins font-base leading-7 lg:leading-8 text-center lg:text-left w-full lg:w-1/2 reveal-up`}>
            Exploring the custom WordPress architectures and frontend layouts I’ve developed to solve real business needs.
            </p>

          </div>

          {/* projects display */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
            {projects.map((item, index) => (
              <div
              key={index}
              className={`${theme.borderCard} relative group px-3 py-3 rounded-xl`}
              >

                <div className='relative'>

                  <img src={item.image} alt='' className='w-full object-cover rounded'/>

                  <span className={`${theme.statusTag} rounded font-semibold font-poppins absolute top-4 left-4 text-[12px]`}>{item.status}</span>

                </div>

                <div className='my-6'>
                  <h3 className={`${theme.textPrimary} font-raleway font-semibold text-[18px]`}>{item.title}</h3>
                  <p className={`${darkMode ? 'text-white/90' : 'text-black'} leading-5.5 font-poppins font-medium pt-3 pb-5 text-[14px]`}>{item.subTitle}</p>

                  <div className='flex flex-wrap gap-2'>
                    {item.tags.map((tagItem, index) => (
                      <span key={index} className={`${theme.coloredTag} px-3 py-1 rounded-full text-xs font-poppins`}>{tagItem}</span>
                    ))}
                  </div>
                </div>
                <p className="font-poppins text-[13px] mt-2 leading-5.5">{item.description}</p>

                <div className='flex gap-3 mt-4'>
                  <a
                  className='bg-dark-secondary text-white font-raleway font-semibold tracking-wide text-sm py-2 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#2E64C0] hover:shadow-[0_8px_25px_rgba(56,112,208,0.3)] hover:scale-105 transition-all duration-500'
                  href=' '>
                    Live Site
                    <SquareArrowOutUpRight className='h-4 w-4'/>
                  </a>

                  {item.secondaryLink && (
                    <a
                      href={item.secondaryLink.url}
                      target="_blank"
                      className={`${darkMode ? 'text-white/70' : 'text-black/70'} bg-dark-secondary/10 border border-dark-secondary/20 font-raleway font-semibold tracking-wide text-sm py-2 px-6 rounded-full flex items-center gap-2 hover:bg-[#2E64C0]/30 hover:shadow-[0_8px_15px_rgba(56,112,208,0.1)] hover:scale-105 transition-all duration-500`}
                    >
                      {item.secondaryLink.text}
                      {iconMap[item.secondaryLink.type]}
                    </a>
                  )}
                </div>
                
              </div>
            ))}
          </div>

      </div>
    </section>
  )
}

export default Projects