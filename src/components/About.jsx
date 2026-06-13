import { GraduationCap } from "lucide-react";

const About = ({ darkMode}) => {

  const darkTheme = {
    textPrimary: 'text-dark-text-secondary',
    textSecondary: 'text-dark-secondary',
    bodyText: 'text-dark-text-primary',

    tags: 'bg-dark-card text-dark-secondary border border-dark-border',
    borderCard: 'border border-dark-border text-dark-text-primary',
    coloredCard: 'border border-dark-border bg-dark-card text-dark-text-primary'
  };

  const lightTheme = {
    textPrimary: 'text-light-text-primary',
    textSecondary: 'text-light-secondary',
    bodyText: 'text-light-text-primary',

    tags: 'bg-light-card text-light-secondary border border-light-card-border',
    borderCard: 'border border-light-card-border text-light-text-primary',
    coloredCard: 'border border-light-card-border bg-light-card text-light-text-primary'
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section id="about">
      <div className="container mx-auto px-6 p-20 relative z-10">

        {/* Introduction */}
        <div className="flex flex-col items-center mx-auto">
          <h1 className={`${theme.textPrimary} text-4xl md:text-5xl font-raleway font-bold leading-12 lg:leading-16 m-4 reveal-up`}>About <span className={`${theme.textSecondary}`}>Me</span></h1>

          <p className={`${theme.bodyText} text-[15px] lg:text-[16px] font-poppins font-base leading-7 lg:leading-8 mt-4 text-center w-full lg:w-3/4 reveal-up`}>
          I am a detail-oriented Web Developer and Software Engineering graduate with a passion for building clean, user-focused digital products. My journey started at the intersection of design and development, which led me to launch Zeebrart—a freelance venture where I collaborate directly with clients to design, build, and deploy custom web solutions.

            <br/><br/>

            I focus on clear, functional execution by specializing in custom WordPress development, where I build fully responsive layouts and engineer flexible content structures using Advanced Custom Fields (ACF) and Custom Post Types. To bring Figma designs to life, I write clean, pixel-perfect frontend code using HTML, CSS, and Tailwind CSS, while continuously advancing my interactive web application capabilities with JavaScript, React, and the MERN stack. Based in Malta, I am currently looking for a Junior Developer or Frontend Internship role where I can bring my autonomous problem-solving skills to a collaborative engineering team.
          </p>

        </div>

        {/* second part */}
        <div className="flex flex-col md:flex-row gap-6 my-15 w-full mx-auto">

          {/* education */}
          <div className={`p-8 rounded-2xl ${theme.borderCard} w-full md:w-1/2 reveal-up`}>
            
            <div className={`flex gap-3 items-center mb-5 font-raleway font-semibold ${darkMode ? 'text-dark-text-secondary' : 'text-light-text-primary'}`}>
              <GraduationCap className="text-light-highlight-yellow w-8 h-8"/>
              <h3 className="text-[18px]">Education</h3>
            </div>

            <div>
             <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-[15px]">
               <p className="font-semibold font-poppins">BSc (Hons) Software Engineering</p>
               <p className="font-poppins">Cardiff Metropolitan University</p>
              </div>

              <div className="mt-4 lg:mt-0">
               <span className={`${theme.coloredCard} px-4 py-2 rounded-full text-xs font-poppins `}>Nov 2020 – Oct 2021</span>
              </div>
              
             </div>
            </div>

            <div>
             <div className="flex flex-col lg:flex-row justify-between mt-8 lg:mt-4">
              <div className="text-[15px]">
               <p className="font-semibold font-poppins">BSc (Hons) Software Engineering</p>
               <p className="font-poppins">Cardiff Metropolitan University</p>
              </div>

              <div className="mt-4 lg:mt-0">
               <span className={`${theme.coloredCard} px-4 py-2 rounded-full text-xs font-poppins`}>Nov 2020 – Oct 2021</span>
              </div>
              
             </div>
            </div>
              
          </div>

          <div className={`p-8 rounded-2xl ${theme.coloredCard} w-full md:w-1/2 reveal-up`}>
           <div className="flex h-full items-center justify-center text-center font-poppins text-[15px] leading-7 lg:leading-8">
            <p>"My mission is to build responsive, sustainable web experiences where clean design meets robust execution — creating products that users find intuitive and fellow developers find effortless to maintain."</p>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About