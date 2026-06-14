import { Download } from "lucide-react"

const HeroButton = ({ className = "", ...props }) => {

  return (
    <button
      className={`relative
        hover:border-light-secondary transition-all 
        duration-1000 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-light-secondary focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-8 py-4 font-semibold rounded-full overflow-visible 
        animated-border font-raleway
        ${className}`}
        {...props}
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-light-secondary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <a 
      href="src/assets/K D N Gimhani.pdf"
      target="_blank"
      className="relative z-10 flex items-center justify-center gap-2">
        Download CV
        <Download className="w-5 h-5"/>
      </a>
    </button>
  )
}

export default HeroButton