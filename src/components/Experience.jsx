
const Experience = ({ darkMode }) => {

  const experiences = [
    {
      date: "Jan 2022 – Present",
      jobTitle: "Founder & Freelance Web Developer",
      company: "Zeebrart",
      description: "I founded Zeebrart to deliver end-to-end web solutions for global clients, successfully shipping over 20 responsive websites. My work focuses on translating Figma prototypes into custom WordPress architectures using Tailwind, Divi, and dynamic content tools like ACF and Custom Post Types.",
      tags: ["Web Development","UI/UX Design", "CMS Architecture", "Freelance" ]
    },

    {
      date: "Nov 2019 – Aug 2021",
      jobTitle: "Web Designer & Digital Marketing Assistant",
      company: "Solution Master (Pvt) Ltd.",
      description: "Managed and maintained the corporate website to enhance online brand presence and optimize user navigation. I also created promotional graphics using Adobe Creative Suite and executed targeted digital marketing campaigns to drive customer engagement.",
      tags: ["Graphic Design","Digital Marketing", "Web Maintenance", "Social Media Ads" ]
    },

  ]

  const darkTheme = {
    textPrimary: 'text-dark-text-secondary',
    textSecondary: 'text-dark-secondary',
    bodyText: 'text-dark-text-primary',

    borderCard: 'border border-dark-border text-dark-text-primary hover:bg-dark-card/50 hover:-translate-y-2 cursor-pointer transition-all duration-400',
    borderActiveCard: 'border border-dark-secondary/30 text-dark-text-primary hover:bg-dark-card/50 hover:-translate-y-2 cursor-pointer transition-all duration-400',

    coloredTag: 'border border-dark-border bg-dark-card text-dark-text-primary'
  };

  const lightTheme = {
    textPrimary: 'text-light-text-primary',
    textSecondary: 'text-light-secondary',
    bodyText: 'text-light-text-primary',

    borderCard: 'border border-light-card-border text-light-text-primary hover:bg-light-card/50 hover:-translate-y-2 cursor-pointer transition-all duration-400',
    borderActiveCard: 'border border-light-secondary/50 text-dark-text-primary hover:bg-light-card/50 hover:-translate-y-2 cursor-pointer transition-all duration-400',

    coloredTag: 'border border-light-card-border bg-light-card text-light-text-primary'
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section id="experience">
      <div className="container mx-auto px-6 p-20 relative z-10">

        {/* Heading and subheadline */}
        <div className="flex flex-col items-center mx-auto">
            <h1 className={`${theme.textPrimary} text-4xl md:text-5xl font-raleway font-bold leading-12 lg:leading-16 m-4 reveal-up`}>Career <span className={`${theme.textSecondary}`}>Journey</span></h1>

            <p className={`${theme.bodyText} text-[15px] lg:text-[16px] font-poppins font-base leading-7 lg:leading-8 text-center w-full lg:w-1/2 reveal-up`}>
            I have a strong foundation and real-world experience building functional, responsive web projects. Here is what I am comfortable working with:
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-15 reveal-up">

            {experiences.map((item, index) => (
              <div
              key={index}
              className={`px-6 py-8 rounded-xl flex flex-col
                ${
                  index === 0
                    ? theme.borderActiveCard
                    : theme.borderCard
                }
              `}>
                <span className="text-dark-highlight-yellow text-[13px] font-poppins font-light">
                  {item.date}
                </span>

                <h3 className={`${theme.textPrimary} font-raleway font-semibold my-1 text-[18px]`}>
                  {item.jobTitle}
                </h3>

                <span className={`${theme.textPrimary} font-raleway font-light my-2 text-[14px]`}>
                  {item.company}
                </span>

                <p className="font-poppins text-[15px] my-5 leading-7 lg:leading-8">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {item.tags.map((tag, index) => (
                    <span
                     className={`${theme.coloredTag} px-3 py-1 rounded-full text-xs font-poppins`}
                     key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
          </div>

      </div>
    </section>
  )
}

export default Experience