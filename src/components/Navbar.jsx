import { motion } from "framer-motion";
import { Menu, MoonStar, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({darkMode, toggleDarkMode}) => {

  const[isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // adjust for when it triggers
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'SKILLS', link: '#skills' },
    { name: 'EXPERIENCE', link: '#experience' },
    { name: 'PROJECTS', link: '#projects' },
];

const lightColors = {
  navBg: 'bg-[#3870D0]/10',
  textPrimary: 'text-light-text-primary',
  textSecondary: 'text-light-text-primary',
  textHover: 'hover:text-light-secondary',
  textActive: 'text-light-secondary',
  indicator: 'bg-light-secondary',
  button: 'bg-light-secondary',
};

const darkColors = {
  navBg: 'bg-[#131A21]/80',
  textPrimary: 'text-white',
  textSecondary: 'text-gray-300',
  textHover: 'hover:text-light-secondary',
  textActive: 'text-light-secondary',
  indicator: 'bg-light-secondary',
  button: 'bg-light-secondary',
};

const colors = darkMode ? darkColors : lightColors;

    const handleNavSection = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };
    

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4 px-5">
        
        <motion.nav
        initial= {{ y: -100 }}
        animate= {{ y: 0 }}
        transition= {{ duration: 0.5 }}
        className= {`container mx-auto justify-between flex items-center ${colors.navBg}
        backdrop-blur-sm rounded-2xl px-4 lg:px-8 py-4`}>

            <div className="flex items-center justify-between w-full space-x-8 lg:space-x-10">
                {/* LOGO */}

                <motion.a
                href='/'
                whileHover='flex item-center space-x-2'>

                    <span
                    className={`text-2xl font-poppins font-semibold ${colors.textPrimary}`}>
                        NG<span className="text-light-secondary">.</span>
                    </span>
                    
                </motion.a>

                {/* NAVIGATION ITEMS */}
                
                <div className="hidden lg:flex items-center space-x-9">

                    {navItems.map((item) => (
                        <a key={item.name}
                        href={item.link}
                        onClick={() => handleNavSection(item.name)}
                        className="relative"
                        >
                            <motion.span
                            className={`font-medium text-[14px] font-poppins tracking-wide transition-colors duration-300
                                ${activeSection === item.name.toLowerCase() ? colors.textActive : `${colors.textSecondary} ${colors.textHover}`}`
                            }
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>

                                {item.name}

                            </motion.span>

                            {activeSection === item.name.toLowerCase() && (

                                <motion.div
                                layoutId='navbar-indicator'
                                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full
                                ${colors.indicator} `}>
                                </motion.div>

                            )}
                        </a>
                        ))}

                </div>

                <div className="flex items-center space-x-5">
                    {/* DARK MODE TOGGLE */}

                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleDarkMode}
                    className={`p-3 rounded-full ${darkMode ? `bg-[#25313E]` : `bg-[#C4D8FA]`} transition-colors`}
                    aria-label={darkMode ? 'Swith to Light Mode' : 'Switch to Dark Mode' }>

                        {darkMode ? (
                            <Sun className="w-5 h-5 text-white" />
                        ) : (
                            <MoonStar className="w-5 h-5 text-dark-primary" />
                        )}

                    </motion.button>

                    {/* BUTTON */}

                    <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`hidden lg:block px-8 py-3 -mr-8 lg:mr-2 font-medium text-[14px] font-poppins tracking-wide rounded-full bg-linear-to-r ${colors.button}
                    text-white shadow-md hover:shadow-lg transition-shadow`}>
                        Let's talk

                    </motion.a>

                    {/* MOBILE MENU BUTTON */}

                <div className="flex lg:hidden items-center space-x-4 px-2">

                  <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-3 rounded-lg ${darkMode ? `bg-gray-700` : `bg-[#C4D8FA]`}`}>

                      {isMenuOpen ? (
                          <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'

                          }`}/>
                      ) : (
                          <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`}/>
                      )}

                  </motion.button>

                  </div>

                </div>

                

            </div>

            {isMenuOpen && (
                <motion.div
                initial={{ opacity:0, height: 0 }}
                animate={{ opacity:1, height: 'auto' }}
                exit={{ opacity:0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-full left-0 right-0 mt-2 lg:hidden
                ${darkMode
                    ? 'bg-[#131A21]'
                    : 'bg-[#EAF2FF]'
                }  rounded-xl shadow-lg border ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                    <div className="px-4 py-3 space-y-2">

                        {navItems.map((item) => (
                            <a
                            key={item.name}
                            href={item.link}
                            onClick={() => handleNavSection(item.name)}
                            className="block">
                                <motion.div
                                whileHover={{ x: 5 }}
                                className={`py-3 px-4 rounded-lg text-center
                                ${activeSection === item.name.toLowerCase()
                                    ? darkMode ? 'bg-gray-800' : 'bg-[#C4D8FA]'
                                    : ''
                                }`}>

                                    <span
                                    className={`font-medium ${
                                        activeSection === item.name.toLowerCase()
                                        ? colors.textActive
                                        : colors.textSecondary
                                    }`}>

                                        {item.name}

                                    </span>

                                </motion.div>
                            </a>
                        ))}

                        <motion.a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        whileTap={{ scale: 0.95 }}
                        className={`block py-3 px-4 text-center font-semibold mt-10
                        rounded-lg bg-linear-to-r ${colors.button}
                        text-white shadow-md`}>
                            Let's Talk
                        </motion.a>

                    </div>
                    
                </motion.div>
            )}

        </motion.nav>

    </div>
  )
}

export default Navbar