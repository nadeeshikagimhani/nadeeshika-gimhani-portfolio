import { ExternalLink } from 'lucide-react';
import darkBgImage from '../assets/dark-theme-bg-hero.jpg';
import lightBgImage from '../assets/light-theme-bg-hero.png';
import HeroButton from './HeroButton';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = ({ darkMode }) => {

  const skills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "WordPress",
    "ACT & CPT",
    "Elementor & Divi",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Vercel",
    "Tailwind CSS",
    "Figma",
    "Git & GitHub",
  ];

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];

  const darkTheme = {
    textPrimary: 'text-dark-text-secondary',
    textSecondary: 'text-dark-secondary',
    button: 'text-white bg-dark-secondary hover:bg-[#2E64C0] hover:shadow-[0_8px_25px_rgba(56,112,208,0.3)]',
    bodyText: 'text-dark-text-primary',
    coloredIcon: 'border border-dark-border bg-dark-card text-dark-secondary hover:bg-dark-secondary hover:text-white transition-all duration-500',
    tag: 'bg-dark-card text-dark-secondary border border-dark-border',
  };

  const lightTheme = {
    textPrimary: 'text-light-text-primary',
    textSecondary: 'text-light-secondary',
    bodyText: 'text-light-text-primary',
    button: 'text-white bg-dark-secondary hover:bg-[#2E64C0] hover:shadow-[0_8px_25px_rgba(56,112,208,0.3)]',
    coloredIcon: 'border border-light-card-border bg-light-card/60 text-light-secondary hover:bg-dark-secondary hover:text-white transition-all duration-500',
    tag: 'bg-light-card text-light-secondary border border-light-card-border',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section className="relative items-center overflow-hidden" id='home'>
      <div className="absolute inset-0">
        <img
        src={
          darkMode ? darkBgImage : lightBgImage
        }
         alt="hero" className="w-full h-full object-cover opacity-10"/>
        <div className="absolute inset-0 bg-linear-to-b via-background/80 from-background/20 to-background"/>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-52 pb-20 relative z-10">

       <div className="grid lg:grid-cols-2 gap-30 lg:gap-25 items-center">
        <div className="space-y-8">

          {/* hero tag */}
          <div className='animate-fade-in'>
            <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${theme.tag}`}>
              <span className="w-2 h-2 bg-light-secondary rounded-full animate-pulse"/>
              FRONTEND & WORDPRESS DEVELOPER
            </span>
          </div>

          <div>
            <h1 className={`${theme.textPrimary} text-4xl md:text-5xl lg:text-6xl font-raleway font-bold leading-12 lg:leading-16 animate-fade-in animation-delay-100`}>I turn Figma designs into high-performance <span className={`${theme.textSecondary}`}>web experiences.</span></h1>

            <p className={`${theme.bodyText} text-[14px] lg:text-[16px] font-poppins font-base leading-7 lg:leading-8 mt-4 animate-fade-in animation-delay-200`}>Hi there, I’m Nadeeshika, 4+ years of independent development experience delivering 20+ successful client projects from concept to deployment. Currently diving deep into the MERN stack.</p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-5 animate-fade-in animation-delay-300">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 rounded-full ${theme.coloredIcon} transition-all`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
          </div>

          <div className='flex gap-6 pt-8 animate-fade-in animation-delay-400'>

            <button className={`${theme.button} font-raleway py-4 px-8 rounded-full cursor-pointer flex justify-center items-center hover:scale-105 transition-all duration-500`}>View My Work <ExternalLink className='ml-4 h-5 w-5'/></button>

            <HeroButton
            className={`${darkMode
              ? 'text-[#727c8a] border border-[#242B32] hover:text-white'
              : 'border border-[#3870D0]/40 text-light-text-primary/80 hover:text-light-text-primary'}`}> 
            </HeroButton>

          </div>
        </div>
        
        <div className='relative'>
            {/* profile */}
            <div className='relative max-w-xl mx-auto' >
              <div className='relative rounded-3xl p-2'>
                <img src='public/Nadeeshika.png' alt='Nadeeshika Gimhani' className='w-full max-w-150 ml-auto bg-linear-to-t from-[#3870D0] via-30% via-blue-400/35 to-80% rounded-[60px] animate-fade-in animation-delay-300'/>

                {/* Floating badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float animate-fade-in animation-delay-500'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                    <span className={`text-sm font-poppins ${darkMode ? 'text-white/50' : 'text-black'}`}>Available for Work</span>
                  </div>
                </div>
                {/* Stats badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 font-poppins animate-fade-in animation-delay-700'>
                  <div className='text-2xl font-bold text-light-secondary'>5+</div>
                  <div className={`text-xs ${darkMode ? 'text-white/50' : 'text-black'}`}>Year Experience</div>
                </div>
              </div>
            </div>
          </div>
       </div>
      </div>

      {/* Skills carosel */}
      <div>

          <div className='relative overflow-hidden pb-15'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, index)=>(
                <div key={index} className='shrink-0 px-8 py-4'>
                  <span className={`text-lg font-semibold text-gray-400/20 cursor-pointer transition-colors ${theme.skillsTag}`}>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

     

    </section>
    
  )
}

export default Hero