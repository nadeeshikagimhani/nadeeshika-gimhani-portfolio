import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ darkMode }) => {

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];
  
  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#project", label: "Contact" },
  ];

  const darkTheme = {
    textPrimary: 'text-dark-text-secondary',
    textSecondary: 'text-dark-secondary',
    bodyText: 'text-dark-text-primary',
    coloredIcon: 'border border-dark-border bg-dark-card text-dark-secondary hover:bg-dark-secondary hover:text-white transition-all duration-500'
  };

  const lightTheme = {
    textPrimary: 'text-light-text-primary',
    textSecondary: 'text-light-secondary',
    bodyText: 'text-light-text-primary',
    coloredIcon: 'border border-light-card-border bg-light-card text-light-secondary hover:bg-dark-secondary hover:text-white transition-all duration-500'
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-1">
      <div className="container mx-auto px-6 border-t border-dark-text-primary/20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-16">
          {/* Logo & Copyright */}
          <div className="text-center lg:text-left">
            <a href="#" className={`text-2xl font-poppins font-semibold ${theme.textPrimary}`}>
              NG<span className="text-light-secondary">.</span>
            </a>
            <p className={`${theme.bodyText} font-poppins text-sm mt-3 font-semibold`}>
              © {currentYear} Nadeeshika Gimhani. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${theme.bodyText} font-poppins text-sm font-medium hover:text-dark-secondary transition-all duration-500`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`p-3 rounded-full ${theme.coloredIcon} transition-all`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer