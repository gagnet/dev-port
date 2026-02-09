import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that is accessible for all",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and functionality for proper user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "A unique perk is I actually like people and bulding new relationships with those around me.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-[#20b2a6] text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[#20b2a6]">
              Not your average engineer
              <span className="font-serif italic font-normal text-white">
                {" "}
                Driven by curioisty and an appitie for learning
              </span>
            </h2>

            <div className="space-y-4 text-[#7a8491] animate-fade-in animation-delay-200">
              <p>
                I'm a former high end resturant director who transitioned into software engineering 
                when I wanted to find out how our UI could be imoproved. Smash cut to now, where I have
                over 3 years of experience building digital products.
              </p>
              <p>
                I specialize in React, React Native, Next.js, and TypeScript, building
                everything from sleek landing pages to complex phone
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me seeing comedy shows in LA,
                playing D&D, or re-watching Taskmaster.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-[#f0f2f5]">
                "My mission is to create accessable work that is not just
                functional, but user friendly — basically, products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#20b2a6]/10 flex items-center justify-center mb-4 hover:bg-[#20b2a6]/20">
                  <item.icon className="w-6 h-6 text-[#20b2a6]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#7a8491]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};