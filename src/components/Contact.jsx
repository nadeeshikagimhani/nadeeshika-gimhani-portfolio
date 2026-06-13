import { AlertCircle, CheckCircle, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { useState } from "react";

const Contact = ({ darkMode }) => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nadeeshikagimhani4@gmail.com",
      href: "mailto:nadeeshikagimhani4@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+356) 7977 7587",
      href: "tel:+35679777587",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Fgura, Malta",
    },
  ];


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const darkTheme = {
    textPrimary: 'text-dark-text-secondary',
    textSecondary: 'text-dark-secondary',
    bodyText: 'text-dark-text-primary',

    borderCard: 'border border-dark-border text-dark-text-primary',
    coloredCard: 'border border-dark-border bg-dark-card/50 text-dark-text-primary'
  };

  const lightTheme = {
    textPrimary: 'text-light-text-primary',
    textSecondary: 'text-light-secondary',
    bodyText: 'text-light-text-primary',

    borderCard: 'border border-light-card-border text-light-text-primary',
    coloredCard: 'border border-light-card-border bg-light-card/50 text-light-text-primary'
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section id="contact">

      <div className="container mx-auto px-6 p-20 relative z-10">

      {/* Heading and subheadline */}
      <div className="flex flex-col items-center mx-auto">
            <h1 className={`${theme.textPrimary} text-4xl md:text-5xl font-raleway font-bold leading-12 lg:leading-16 m-4 text-center reveal-up`}>Let's Build <span className={`${theme.textSecondary}`}>Something Together</span></h1>

            <p className={`${theme.bodyText} text-[15px] lg:text-[16px] font-poppins font-base leading-7 lg:leading-8 text-center w-full lg:w-1/2 reveal-up`}>
            Whether you have an open position on your engineering team, a freelance project in mind, or just want to talk shop—my inbox is always open.
            </p>

          </div>

          {/* contact form */} 
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-15">
          <div className={`p-8 rounded-3xl ${theme.borderCard} reveal-up`}>
            <form className="space-y-8 mt-2">

              <div>

                <label htmlFor="name" className={`block text-sm font-medium mb-2 font-poppins ${theme.textPrimary}`}>Your Name *</label>

                <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => 
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-4 py-3 bg-transparent rounded-xl border font-poppins text-sm
                  ${darkMode 
                    ? 'border-dark-border focus:dark-secondary focus:ring-1 focus:ring-dark-secondary'
                    : 'border-light-secondary/20 focus:dark-secondary focus:ring-1 focus:ring-dark-secondary'} outline-none transition-all`}
                required
                placeholder="Enter Your Name"/>

              </div>

              <div>

                <label htmlFor="email" className={`block text-sm font-medium mb-2 font-poppins ${theme.textPrimary}`}>Your Email *</label>

                <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => 
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-4 py-3 bg-transparent rounded-xl border font-poppins text-sm
                  ${darkMode 
                    ? 'border-dark-border focus:dark-secondary focus:ring-1 focus:ring-dark-secondary'
                    : 'border-light-secondary/20 focus:dark-secondary focus:ring-1 focus:ring-dark-secondary'} outline-none transition-all`}
                required
                placeholder="youremail@gmai.com"/>

              </div>

              <div>

                <label htmlFor="message" className={`block text-sm font-medium mb-2 font-poppins ${theme.textPrimary}`}>Your Message *</label>

                <textarea
                rows={5}
                id="name"
                value={formData.message}
                onChange={(e) => 
                  setFormData({ ...formData, message: e.target.value })
                }
                type="text"
                className={`w-full px-4 py-3 bg-transparent rounded-xl border font-poppins text-sm
                  ${darkMode 
                    ? 'border-dark-border focus:dark-secondary focus:ring-1 focus:ring-dark-secondary'
                    : 'border-light-secondary/20 focus:dark-secondary focus:ring-1 focus:ring-dark-secondary'} outline-none transition-all resize-none`}
                required
                placeholder="Enter Your Message"></textarea>

              </div>

              <button
              className='w-full flex items-center justify-center gap-3 py-4 px-5 bg-light-secondary text-white/90 font-raleway rounded-full font-semibold hover:bg-[#2E64C0] cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-[0_8px_25px_rgba(56,112,208,0.3)]'
              type='submit'
              size='lg'
              disable={isLoading}>

                { isLoading ? (

                  <>
                    Sending...
                    </>

                ) : (
                    <>
                    Send Message
                    <MessageCircleMore className="w-5.5 h-5.5"/>
                    </>)
                }
                
              </button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6`}>
            <div className={`${theme.coloredCard} rounded-3xl py-8 px-6 reveal-up`}>
              <h3 className={`${theme.textPrimary} text-xl font-semibold mb-6 font-raleway`}>
                Contact Information
              </h3>
              <div className="space-y-4 font-poppins">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-dark-secondary/10 transition-colors group"
                  >
                    <div className={`${
                      darkMode
                      ? 'bg-dark-secondary/10 group-hover:bg-dark-secondary/20'
                      : 'bg-dark-secondary/15'
                    }
                    w-12 h-12 rounded-xl flex items-center justify-center  transition-colors`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          

          {/* Availability Card */}
          <div className={`${theme.coloredCard} rounded-3xl py-8 px-6`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className={`${theme.textPrimary} text-xl font-semibold font-raleway`}>Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm font-poppins leading-6">
              I am actively seeking Junior Developer, Frontend, or WordPress Internship opportunities in Malta and remote. I'm ready to jump into a team environment and start contributing clean code from day one. Let's connect!
              </p>
            </div>
        </div>

        </div>
        </div>

    </section>
  )
}

export default Contact