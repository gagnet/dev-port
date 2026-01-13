import { Button } from "../components/Button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
]
export const Navbar = ()=>{
    return <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-[#20b2a6]">
               TG<span className="text-[#20b2a6]">.</span> 
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
            <div>
                <Button size="sm">Contact Me</Button>
            </div>
        </nav>
    </header>
}