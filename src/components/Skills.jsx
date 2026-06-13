import HtmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import javascriptLogo from '../assets/js.svg';
import reactLogo from '../assets/react.svg';
import tailwindLogo from '../assets/tailwind.svg';
import figmaLogo from '../assets/figma.svg';
import wordpressLogo from '../assets/wordpress.svg';
import ACFLogo from '../assets/ACF.png';
import elementorLogo from '../assets/elementor.svg';
import diviLogo from '../assets/divi.png';
import nodejsLogo from '../assets/node.svg';
import expressLogo from '../assets/express.png';
import mongodbLogo from '../assets/mongodb.png';
import gitLogo from '../assets/github.svg';


const Skills = ({ darkMode }) => {

  const techSkills = [
    {
      name: 'HTML & CSS',
      description: 'Building clean, structured, and responsive layouts.',
      tag: 'Frontend Development',
      image: [HtmlLogo,cssLogo]
    },
    {
      name: 'JavaScript (ES6+)',
      description: 'Solid understanding of core programming logics.',
      tag: 'Frontend Development',
      image: [javascriptLogo]
    },
    {
      name: 'React.js',
      description: 'Building functional components and managing state in web apps.',
      tag: 'Frontend Development',
      image: [reactLogo]
    },
    {
      name: 'Tailwind CSS',
      description: 'My favorite tool for styling fast, pixel-perfect designs.',
      tag: 'Frontend Development',
      image: [tailwindLogo]
    },
    {
      name: 'Figma-to-WordPress',
      description: 'Confident in turning any design file into a real website.',
      tag: 'WordPress',
      image: [figmaLogo, wordpressLogo]
    },
    {
      name: 'ACF & CPT',
      description: 'Setting up dynamic content so clients can easily manage data.',
      tag: 'WordPress',
      image: [ACFLogo]
    },
    {
      name: 'Elementor & Divi',
      description: 'Deeply experienced with standard visual builders.',
      tag: 'WordPress',
      image: [elementorLogo, diviLogo]
    },
    {
      name: 'Node.js & Express',
      description: 'Foundational knowledge of backend basics and simple APIs.',
      tag: 'Backend & Design Tools',
      image: [nodejsLogo,expressLogo]
    },
    {
      name: 'MongoDB',
      description: 'Basic understanding of NoSQL database structures.',
      tag: 'Backend & Design Tools',
      image: [mongodbLogo]
    },
    {
      name: 'Figma',
      description: 'Comfortable with UI design, wireframing, and prototyping.',
      tag: 'Backend & Design Tools',
      image: [figmaLogo]
    },
    {
      name: 'Git & GitHub',
      description: 'Used daily for version control and tracking my code.',
      tag: 'Backend & Design Tools',
      image: [gitLogo]
    },
]

  const darkTheme = {
    textPrimary: 'text-dark-text-secondary',
    textSecondary: 'text-dark-secondary',
    bodyText: 'text-dark-text-primary',

    borderCard: 'border border-dark-border text-dark-text-primary hover:bg-dark-card hover:-translate-y-2 cursor-pointer transition-all duration-400',

    yellowTag: 'bg-dark-card text-dark-highlight-yellow border border-dark-border',
    greenTag: 'bg-dark-card text-dark-highlight-green border border-dark-border',
    pinkTag: 'bg-dark-card text-dark-highlight-pink border border-dark-border',
    logo: 'bg-dark-secondary/10 border border-dark-secondary/20'
  };

  const lightTheme = {
    textPrimary: 'text-light-text-primary',
    textSecondary: 'text-light-secondary',
    bodyText: 'text-light-text-primary',

    borderCard: 'border border-light-card-border text-light-text-primary hover:bg-light-card/50 hover:-translate-y-2 cursor-pointer transition-all duration-400',

    yellowTag: 'bg-light-highlight-yellow/10 text-light-highlight-yellow border border-light-highlight-yellow/20',
    greenTag: 'bg-light-highlight-green/10 text-light-highlight-green border border-light-highlight-green/20',
    pinkTag: 'bg-light-highlight-pink/10 text-light-highlight-pink border border-light-highlight-pink/20',
    logo: 'bg-white/50 border border-dark-secondary/20'
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section
    id="skills"
    style={{
      backgroundColor: darkMode ? '#0F161C' : '#F7F9FD'
    }}>
      <div className="container mx-auto px-6 p-20 relative z-10">

        {/* Heading and subheadline */}
        <div className="flex flex-col items-center mx-auto">
            <h1 className={`${theme.textPrimary} text-4xl md:text-5xl font-raleway font-bold leading-12 lg:leading-16 m-4 reveal-up`}>My <span className={`${theme.textSecondary}`}>Skills</span></h1>

            <p className={`${theme.bodyText} text-[15px] lg:text-[16px] font-poppins font-base leading-7 lg:leading-8 text-center w-full lg:w-1/2 reveal-up`}>
            I have a strong foundation and real-world experience building functional, responsive web projects. Here is what I am comfortable working with:
            </p>

          </div>

          {/* my skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 reveal-up">
            {techSkills.map((skill, index) => {

              const tagColorMap = {
                "Frontend Development": "yellowTag",
                "WordPress": "greenTag",
                "Backend & Design Tools": "pinkTag",
              };

              const tagKey = tagColorMap[skill.tag];
              const tagClass = theme[tagKey];

              return (
                <div
                  key={index}
                  className={`${theme.borderCard} px-6 py-8 rounded-xl`}
                >

                  <div className="flex gap-3">
                    {skill.image.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt=""
                        className={`${theme.logo} w-15 h-15 p-2 object-contain rounded-lg`}
                      />
                    ))}
                  </div>

                  <div>
                    <h3 className={`font-raleway font-semibold my-4 text-[18px] ${theme.textPrimary}`}>
                      {skill.name}
                    </h3>

                    <p className="font-poppins text-[14px] leading-6">
                      {skill.description}
                    </p>

                    {/* ✅ HERE IS YOUR TAG FIX */}
                    <span className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium ${tagClass}`}>
                      {skill.tag}
                    </span>

                  </div>

                </div>
              );
            })}
           </div>
      </div>
      
    </section>
  )
}

export default Skills