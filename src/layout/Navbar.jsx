import { Menu, X } from "lucide-react"
import { Button } from "../components/Button"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]
export const Navbar = ()=>{
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

   const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setIsMobileOpen(false); 
  }

    useEffect(()=>{
      const handleScroll = () =>{
        if (window.scrollY > 50){
          setIsScrolled(true)
        }
        else setIsScrolled(false)
      }
      window.addEventListener("scroll", handleScroll)


      return () => window.removeEventListener("scroll", handleScroll)
    },[])
    return <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-[#578ef4ff]">
               TG<span className="text-[#2e6de1ff]">.</span> 
            </a>
            {/*Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                   {navLinks.map((link, index) => 
                   <a
                    href={link.href}
                    key={index}
                    className="px-4 py-2 text-sm text-[#7a8491] hover:text-[#f0f2f5] rounded-full hover:bg-[#222d35ff]"
                    >
                    {link.label}</a>)}
                </div>
            </div>
                {/* CTA Button */}
            <div className="hidden md:block">
                <Button size="sm" onClick={scrollToContact}>Contact Me</Button>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-[#f0f2f5] cursor-pointer" onClick={()=> setIsMobileOpen(!isMobileOpen)}>
                {isMobileOpen ? <Menu className="bg-[#578ef4ff] p-1" size={24} /> : <Menu size={24  }/>}
            </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={()=>{setIsMobileOpen(false)}}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button className="inline-flex items-center justify-center" onClick={scrollToContact}>
              Contact Me
            </Button>
          </div>
        </div>)}
    </header>
}