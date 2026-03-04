import { ArrowBigRight, ArrowRight, Download, Github, Linkedin, ChevronDown } from "lucide-react"
import { Button } from "../components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const skillz = [
   "React",
   "React Native",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
]


export const Hero  = ()=>{
    return (
  <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="/background-blue.jpeg"
          alt="Hero image" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* them green dots */}
      <div>
      {[...Array(30)].map((_, i)=>
      <div  className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#92dcd6ff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}/>
      )} 
      </div>
      {/* Main content */}
       <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#5981caff]">
                <span className="w-2 h-2 bg-[#578ef4ff] rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>
            {/* main text */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Hello, there...
                <br></br> <span className="text-[#447eeaff] glow-text">Crafted </span>
                work. Made with -
                <span className="font-serif italic font-normal text-white"> good vibes
                </span>
                <br />
                but not
                <br />
                <span className="font-serif italic font-normal text-white">
                  vibe coded. 
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Tim Gagne — a software engineer specializing in
                React, React Native, Next.js, and TypeScript. I build things that make me happy. Take a look!
              </p>
            </div>
            {/* interaction */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">Contact Me <ArrowRight className="w-6 h-6" /></Button>
           <a href="/Mobile-Resume.pdf" download>
              <AnimatedBorderButton>
              <Download className="w-6 h-6" />
              Download Resume
              </AnimatedBorderButton>
          </a>
            </div>
            {/* socials */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Them Socials: </span>
              {[
                { icon: Github, href: "https://github.com/gagnet" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/tim-gagne-7b44435b/" }
                
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-[#578ef4ff]/10 hover:text-[#578ef4ff] transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div> 
          {/* right column - pic */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile pic */}
            <div className="relative max-w-md mx-auto ">
             <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-color-#578ef4ff/30 via-transparent 
              to-color-#578ef4ff/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/NY-TG-2.jpg" alt="Tim Gagne"  className="w-full aspect-[4/5] object-cover rounded-2xl"/>
                {/* Floating guy */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
                </div>
                {/* stats baby */}
                  <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-[#578ef4ff]">3+</div>
                  <div className="text-xs text-[#7a8491]">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skillz */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-[#7a8491] mb-6 text-center">Technologies I work with:</p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
          {[...skillz, ...skillz].map((skill, idx)=>(
            <div key={idx} className="flex-shrink-0 px-8 py-16">
            <span className="text-xl font-semibold text-[#7a8491]/50 hover:text-[#7a8491] transition-colors">{skill}</span>
            </div>
          ))}</div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>)
}