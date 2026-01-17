import { ArrowBigRight, ArrowRight, Download, Github, Linkedin } from "lucide-react"
import { Button } from "../components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

export const Hero  = ()=>{
    return (
  <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="/back-img.png"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#20b2a6]">
                <span className="w-2 h-2 bg-[#20b2a6] rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>
            {/* main text */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Clever Girl. 
                <br></br> <span className="text-[#20b2a6] glow-text">Crafted </span>
                work. Made with 
                <span className="font-serif italic font-normal text-white"> -precision
                </span>
                <br />
                and
                <br />
                <span className="font-serif italic font-normal text-white">
                  creativity. 
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Tim Gagne — a software engineer specializing in
                React, React Native, Next.js, and TypeScript. I build web
                applications that make me happy. Take a look!
              </p>
            </div>
            {/* interaction */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">Contact Me <ArrowRight className="w-6 h-6" /></Button>
            <AnimatedBorderButton>
              <Download className="w-6 h-6" />
              Download Resume
            </AnimatedBorderButton>
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
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right column - pic */}
          <div>
            {/* profile pic */}
            <div>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/raptor.png" alt="Tim Gagne"  className="w-full aspect-[4/5] object-cover rounded-2xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}