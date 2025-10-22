import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Code, Palette, Smartphone, Search, TrendingUp, Users } from 'lucide-react';

function Navigation() {
  return (
    <nav className="relative z-10">
      <div className="max-w-[1920px] mx-auto px-[74px] py-[52px] flex items-center justify-between">
        <p className="font-['Nimbus_Roman_No9_L:Regular',_sans-serif] not-italic text-[74px] text-nowrap text-white tracking-[-2.96px]">
          thecreativedoc
        </p>
        <div className="flex gap-[119px] items-center font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-white">
          <a href="#home" className="text-[40px] tracking-[-1.6px] hover:opacity-70 transition-opacity">Home</a>
          <a href="#services" className="text-[40px] tracking-[-1.6px] hover:opacity-70 transition-opacity">Services</a>
          <a href="#blog" className="text-[40px] tracking-[-1.6px] hover:opacity-70 transition-opacity">Blog</a>
          <a href="#contact" className="text-[40px] tracking-[-1.6px] hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </div>
      <div className="w-full h-[2px] bg-white" />
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-[#5d503d] relative overflow-hidden">
      <Navigation />
      <div className="max-w-[1920px] mx-auto px-[74px] py-[122px] grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
        <div className="flex flex-col gap-[52px]">
          <h1 className="font-['Bebas_Neue:Regular',_sans-serif] not-italic text-[160px] leading-[124px] text-white uppercase">
            Website design & development
          </h1>
          <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[40px] tracking-[-1.6px] text-white max-w-[804px]">
            We Design, Create Stunning & High-Performing Websites Tailored to Your Business
          </p>
          <button className="bg-[#f8f8f8] rounded-[69px] px-[69px] py-[30px] w-fit hover:bg-white transition-colors">
            <span className="font-['Nimbus_Sans_L:Bold',_sans-serif] not-italic text-[40px] text-center text-nowrap tracking-[-1.6px] text-[#5d503d]">
              Get In Touch
            </span>
          </button>
        </div>
        <div className="bg-white rounded-[43px] h-[544px] w-full flex items-center justify-center overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MDk4NDk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern website design"
            className="w-full h-full object-cover rounded-[43px]"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Beautiful, user-friendly designs that capture your brand essence and engage your audience from the first click."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom-coded websites built with the latest technologies for optimal performance and scalability."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Seamless experiences across all devices, ensuring your website looks perfect on desktop, tablet, and mobile."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Strategic optimization to improve your search rankings and drive organic traffic to your website."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Lightning-fast load times and smooth interactions that keep visitors engaged and boost conversions."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Comprehensive maintenance and support to keep your website secure, updated, and running smoothly."
    }
  ];

  return (
    <section id="services" className="bg-white py-[120px]">
      <div className="max-w-[1920px] mx-auto px-[74px]">
        <h2 className="font-['Bebas_Neue:Regular',_sans-serif] not-italic text-[160px] leading-[124px] text-[#5d503d] uppercase text-center mb-[100px]">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px]">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-[24px] p-[40px] bg-[#f8f8f8] rounded-[24px] hover:bg-[#5d503d] hover:text-white transition-all duration-300 group">
              <service.icon className="w-[64px] h-[64px] text-[#5d503d] group-hover:text-white transition-colors" />
              <h3 className="font-['Nimbus_Sans_L:Bold',_sans-serif] not-italic text-[48px] tracking-[-1.6px]">
                {service.title}
              </h3>
              <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[28px] tracking-[-0.8px] opacity-80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1741466071751-c62474d2d3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NjEwMTM1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYwOTcwODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Portfolio Showcase",
      category: "Custom Development",
      image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MDk4NDk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="bg-[#5d503d] py-[120px]">
      <div className="max-w-[1920px] mx-auto px-[74px]">
        <h2 className="font-['Bebas_Neue:Regular',_sans-serif] not-italic text-[160px] leading-[124px] text-white uppercase text-center mb-[100px]">
          Our Work
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-[24px] overflow-hidden mb-[24px] h-[400px]">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-['Nimbus_Sans_L:Bold',_sans-serif] not-italic text-[40px] tracking-[-1.6px] text-white mb-[8px]">
                {project.title}
              </h3>
              <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[28px] tracking-[-0.8px] text-white opacity-70">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1920px] mx-auto px-[74px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
          <div>
            <h2 className="font-['Bebas_Neue:Regular',_sans-serif] not-italic text-[160px] leading-[124px] text-[#5d503d] uppercase mb-[52px]">
              About Us
            </h2>
            <div className="flex flex-col gap-[32px]">
              <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[32px] tracking-[-0.8px] text-[#5d503d]">
                We are a team of passionate designers and developers dedicated to crafting exceptional digital experiences.
              </p>
              <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[32px] tracking-[-0.8px] text-[#5d503d]">
                With years of experience in web design and development, we transform ideas into stunning, high-performing websites that drive results for businesses of all sizes.
              </p>
              <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[32px] tracking-[-0.8px] text-[#5d503d]">
                Our approach combines creative design with technical excellence, ensuring every project not only looks amazing but performs flawlessly.
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] rounded-[43px] h-[600px] flex items-center justify-center overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTAxOTYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team"
              className="w-full h-full object-cover rounded-[43px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      text: "Working with thecreativedoc was an absolute pleasure. They transformed our vision into a stunning website that exceeded all expectations."
    },
    {
      name: "Michael Chen",
      role: "Founder, DesignCo",
      text: "The team's attention to detail and technical expertise is unmatched. Our new website has significantly improved our online presence."
    },
    {
      name: "Emma Williams",
      role: "Marketing Director, GrowthHub",
      text: "Professional, creative, and responsive. They delivered a high-performing website that perfectly represents our brand."
    }
  ];

  return (
    <section className="bg-[#f8f8f8] py-[120px]">
      <div className="max-w-[1920px] mx-auto px-[74px]">
        <h2 className="font-['Bebas_Neue:Regular',_sans-serif] not-italic text-[160px] leading-[124px] text-[#5d503d] uppercase text-center mb-[100px]">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-[48px] rounded-[24px]">
              <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[28px] tracking-[-0.8px] text-[#5d503d] mb-[32px]">
                "{testimonial.text}"
              </p>
              <div className="border-t-2 border-[#5d503d] pt-[24px]">
                <p className="font-['Nimbus_Sans_L:Bold',_sans-serif] not-italic text-[32px] tracking-[-1.2px] text-[#5d503d]">
                  {testimonial.name}
                </p>
                <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#5d503d] py-[120px]">
      <div className="max-w-[1920px] mx-auto px-[74px]">
        <div className="text-center">
          <h2 className="font-['Bebas_Neue:Regular',_sans-serif] not-italic text-[160px] leading-[124px] text-white uppercase mb-[52px]">
            Let's Create Together
          </h2>
          <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[40px] tracking-[-1.6px] text-white mb-[60px] max-w-[900px] mx-auto">
            Ready to elevate your online presence? Get in touch and let's build something amazing.
          </p>
          <button className="bg-[#f8f8f8] rounded-[69px] px-[69px] py-[30px] hover:bg-white transition-colors">
            <span className="font-['Nimbus_Sans_L:Bold',_sans-serif] not-italic text-[40px] text-center text-nowrap tracking-[-1.6px] text-[#5d503d]">
              Start Your Project
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-[80px] border-t-2 border-[#5d503d]">
      <div className="max-w-[1920px] mx-auto px-[74px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[60px] mb-[60px]">
          <div>
            <p className="font-['Nimbus_Roman_No9_L:Regular',_sans-serif] not-italic text-[48px] text-nowrap text-[#5d503d] tracking-[-1.92px] mb-[24px]">
              thecreativedoc
            </p>
            <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
              Creating stunning digital experiences
            </p>
          </div>
          <div>
            <h4 className="font-['Nimbus_Sans_L:Bold',_sans-serif] not-italic text-[32px] tracking-[-1.2px] text-[#5d503d] mb-[24px]">
              Services
            </h4>
            <ul className="flex flex-col gap-[12px]">
              <li className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                Web Design
              </li>
              <li className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                Web Development
              </li>
              <li className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                SEO Optimization
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Nimbus_Sans_L:Bold',_sans-serif] not-italic text-[32px] tracking-[-1.2px] text-[#5d503d] mb-[24px]">
              Company
            </h4>
            <ul className="flex flex-col gap-[12px]">
              <li className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                About Us
              </li>
              <li className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                Portfolio
              </li>
              <li className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                Blog
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Nimbus_Sans_L:Bold',_sans-serif] not-italic text-[32px] tracking-[-1.2px] text-[#5d503d] mb-[24px]">
              Contact
            </h4>
            <ul className="flex flex-col gap-[12px]">
              <li className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                hello@thecreativedoc.com
              </li>
              <li className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[24px] tracking-[-0.6px] text-[#5d503d] opacity-70">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-[#5d503d] pt-[40px]">
          <p className="font-['Nimbus_Sans_L:Regular',_sans-serif] not-italic text-[20px] tracking-[-0.5px] text-[#5d503d] opacity-70 text-center">
            © 2025 thecreativedoc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
