import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "VanLivin",
        description: "A Shopping site to rent vans for a roadtrip or, if you really like the van, a new life",
        tags: ["React", "TypeScript"],
        image: "/beach-bum.png",
        link: "https://vanlivin.netlify.app/",
        github: "#"
    },
       {
        title: "Tenzies",
        description: "A dice game you can challenge your friends, family, and complete strangers to",
        tags: ["React"],
        image: "/comp-selfie.jpg",
        link: "https://tim-tenzies.netlify.app/",
        github: "https://github.com/gagnet/tenzies"
    },

]



export const Projects  = ()=>{
    return <section id="projects" className="py-32 relative overflow-hidden">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-[#20b2a6] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-white">
            I spent fifteen minutes trying to import the images properly because I accidently used the wrong tag
            <span className="font-serif italic font-normal text-white">
              {" "}
              could AI do that?
            </span>
          </h2>
          <p className="text-[#20b2a6] animate-fade-in animation-delay-200">
            Looky what I made:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx)=>(
<div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
    <div className="relative overflow-hidden aspect-video">
    <img src={project.image} alt={project.title}  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
     <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
 {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-[#20b2a6] hover:text-[#ffffff] transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-[#20b2a6] hover:text-[#ffffff] transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold group-hover:text-[#20b2a6] transition-colors">{project.title}</h3>
          </div>
          <p className="text-[#7a8491] text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tadIdx)=>(
              <span key={tadIdx}
              className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-[#242b32]/50 text-[#7a8491]
              hover:border-[#20b2a6']/50 hover:text-[#20b2a6'] transition-all duration-300"
              >{tag}</span>
            ))}
          </div>
        </div>
</div>
        ))}
        </div>
    </section>
}