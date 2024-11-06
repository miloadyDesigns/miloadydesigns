"use client";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import EnvoirnmentComp from "./_components/Envoirnment";
import { Stars } from "@react-three/drei";
import { Clouds } from "./_components/Clouds";
import { useGSAP } from "@gsap/react";
import Services from "./_components/services";
import Portfolio from "./portfolio";
import Points from "./_components/Points";
import { GrFormNextLink } from "react-icons/gr";
import HorizontalScrollSections from "./_components/HorizontalScrollSections";
import TestimonailSection from "./_components/Testimonials/TestimonailSection";
import SideButton from "./_components/SideButton.jsx";
import Footer from "./_components/Footer";
import { useHeaderVisibility } from "@/context/HeaderVisibilityProvider ";
import ContactForm from "./_components/ContactForm/ContactForm";
import ProcessSection from "./_components/Process";
import { Tabs } from "@chakra-ui/react"
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu"


gsap.registerPlugin(ScrollTrigger, useGSAP);
const websites = [
  {
    id: 1,
    title: "Airpro Systems",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start",
    image: "/portfolio/Airpro-Systems.png",
    link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
  },
  {
    id: 2,
    title: "Art e Gallery",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
    image: "/portfolio/Art-e-Gallery.png",
    link: "/portfolio/mobile-app-design"
  },
  {
    id: 3,
    title: "Catseyepest",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/Catseyepest.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 4,
    title: "Closet Candy",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/Closet-Candy.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 5,
    title: "New Songs Of Praise",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/nsop.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 6,
    title: "OraJuice Skin Care",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/Orajuice.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 7,
    title: "Shopdiva Dolls Boutique",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/shopdiva.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 8,
    title: "Usdenterprises",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/Usdenterprises.png",
    link: "/portfolio/ui-ux-design"
  }
];
const logos = [
  {
    id: 1,
    title: "Denterprises & Dugan's Adventure",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start",
    image: "/portfolio/1.png",
    link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
  },
  {
    id: 2,
    title: "EON",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
    image: "/portfolio/2.png",
    link: "/portfolio/mobile-app-design"
  },
  {
    id: 3,
    title: "Estero& Expert Valet",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/3.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 4,
    title: "Icon Sportz & Kodak",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/4.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 5,
    title: "KRW & Lotus Photography",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/5.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 6,
    title: "Mantastic & NSOP",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/6.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 7,
    title: "Bilal Mirajkar & Construction Palace",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/7.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 8,
    title: "Orajuice & Organic Life",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/8.png",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 9,
    title: "Barn & Prosperty Trading",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/portfolio/14.png",
    link: "/portfolio/ui-ux-design"
  }
];
const mobileApps = [
  {
    id: 1,
    title: "Website Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia porro alias autem nemo ipsam tenetur excepturi omnis, inventore, consequuntur!",
    image: "/imp/portfolio.png",
    link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
    image: "/imp/portfolio.png",
    link: "/portfolio/mobile-app-design"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    image: "/imp/portfolio.png",
    link: "/portfolio/ui-ux-design"
  }
];



export default function Home() {
  const { setIsVisible } = useHeaderVisibility();
  const textRef = useRef(null);
  const serviceSection = useRef()
  const serviceHeadSection = useRef()
  const scrollRef = useRef()
 


  useGSAP(() => {
    // GSAP animations
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      x: -600,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    tl.from(".para-2", {
      x: -400,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    tl.from(".head_btn", {
      x: -400,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    // ScrollTrigger for the upper section
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_two",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        scroller: ".wrapper",
        toggleActions: "restart pause resume pause",
      },
    });

    t1.from(".upperSection", {
      x: -600,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    })
      .from(".service-swiper", {
        y: -600,
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      }, "<");

    // Portfolio section animations
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_three",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        scroller: ".wrapper",
        toggleActions: "restart pause resume pause",
      },
    });

    t2.from(".portfolioSection", {
      x: -600,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }).from(".portfolio-swiper", {
      y: -600,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }, "<");
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_five",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        scroller: ".wrapper",
        toggleActions: "restart pause resume pause",
      },
    })
    gsap.set(".form-section", { opacity: 0.95 })
    t3.from(".contact-head", {
      x: -800,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }).from(".form-section", {
      x: 1800,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }, "<");
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_process",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        scroller: ".wrapper",
        toggleActions: "restart pause resume pause",
      },
    })
    gsap.set(".process_main", { opacity: 0.95 })
    t4.from(".process_head", {
      x: -800,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }).from(".process_main", {
      x: 1800,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    }, "<");
    ScrollTrigger.create({
      trigger: ".section_five",
      start: "top 20%",
      end: "bottom top",
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
      scroller: ".wrapper"
    });

  });


  return (
    <>
      <div className="wrapper" ref={scrollRef}>
        <div className="relative  overflow-x-hidden section_one bg-black section">
          <section className="absolute lg:w-[80%] top-0 flex flex-col h-full xs:w-[100%] lg:left-[8%] xs:left-0 z-10 justify-center">
            <h1 ref={textRef} className="text-white xs:text-[28px] md:text-[42px] xs:ml-2 font-extrabold uppercase lg:text-[102px] font-pp">
              Unleashing creativity
              <br /> <span className="font-pp">in every detail</span>
            </h1>
            <div className="xs:[300px] lg:w-[600px] text-white para-2 p-2 font-text xs:text-[14px]  lg:text-xl">
              <p>Bringing ideas to life with creativity and precision, crafting designs that inspire and connect. Every project is a blend of innovation and craftsmanship, where we focus on creating designs that not only look beautiful but also tell a story. </p>
            </div>
            <SideButton title={"G&nbsp;&nbsp;E&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;T&nbsp;&nbsp;O&nbsp;&nbsp;U&nbsp;&nbsp;C&nbsp;&nbsp;H"} margin={'ml-2'} />
          </section>
          {/* Overlay */}
          <div className="overlay" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            zIndex: 1,
          }}></div>
          {/* Canvas */}
          <Canvas gl={{ alpha: true }} style={{
            width: "100vw",
            height: "100vh",
            zIndex: 0,
          }}>

            <EnvoirnmentComp />
          </Canvas>
        </div>




        <div className="relative overflow-hidden section_two bg-black section ">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video/serviceSectionVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          <section className="absolute w-full xs:top-[8%] lg:top-[13%] left-0 flex flex-col lg:h-[85%] xs:h-[90%] z-10">
            <div ref={serviceHeadSection} className="upperSection text-white  ml-[8%]  lg:w-[30%] xs:w-[90%]">
              <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">Solutions Designed to Elevate Your Vision</p>
              <h1 className="text-while font-pp lg:text-[66px] xs:text-[38px] -mt-2">Our Services</h1>
              {/* <p className="text-white p-1 font-text xs:text-[14px] lg:text-lg">At MLD, our services go beyond the basics, delivering creative and tech-driven solutions tailored to your business goals. From eye-catching design to impactful marketing, we bring your ideas to life with precision and purpose..</p> */}
            </div>
            <div className="h-full service-swiper">
              <Services />
            </div>
          </section>
        </div>




        <div className="relative overflow-x-hidden section_three bg-black section">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video/processSection1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            zIndex: 1,
          }}></div>
          <section className="absolute w-full xs:top-[8%] lg:top-[13%] left-0 flex flex-col lg:h-[85%] xs:h-[90%] z-10">
            <div ref={serviceHeadSection} className="portfolioSection text-white  ml-[8%]  lg:w-[30%] xs:w-[90%]">
              <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">Empowering the world through our technlogies</p>
              <h1 className="text-while font-pp lg:text-[66px] xs:text-[38px] -mt-2">Our Portfolio</h1>
              {/* <p className="text-white p-1 font-text xs:text-[14px] lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sit facere necessitatibus ab neque consequuntur culpa repellendus.</p> */}
              {/* <SideButton title={"L&nbsp;&nbsp;E&nbsp;&nbsp;A&nbsp;&nbsp;R&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;O&nbsp;R&nbsp;&nbsp;E"} margin={'ml-2'} /> */}
            </div>
            <div className="h-full portfolio-swiper">
              <div className="mt-2">
                <Tabs.Root defaultValue="Websites" variant="plain" className="bg-transparent text-white relative">
                  <Tabs.List className="flex p-4  lg:ml-[7%] relative">

                    {/* Websites Tab */}
                    <Tabs.Trigger
                      value="Websites"
                      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300"
                    >
                      {/* <LuUser className="text-xl" /> */}
                      Websites
                    </Tabs.Trigger>

                    {/* Mobile Apps Tab */}
                    <Tabs.Trigger
                      value="Mobile Apps"
                      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300"
                    >
                      {/* <LuFolder className="text-xl" /> */}
                      Mobile Apps
                    </Tabs.Trigger>

                    {/* Logo Tab */}
                    <Tabs.Trigger
                      value="Logo"
                      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300"
                    >
                      {/* <LuCheckSquare className="text-xl" /> */}
                      Logo Designs
                    </Tabs.Trigger>

                    {/* {/* Tab Indicator (Positioned below the active tab) */}
                    <Tabs.Indicator className="bg-indigo-500 h-1 absolute bottom-0  transition-all ease-in-out duration-300" />

                  </Tabs.List>

                  {/* Tabs Content */}
                  <Tabs.Content value="Websites" className="p-0 m-0">
                    <Portfolio data={websites} />
                  </Tabs.Content>
                  <Tabs.Content value="Mobile Apps">
                    <Portfolio data={websites} />
                  </Tabs.Content>
                  <Tabs.Content value="Logo">
                    <Portfolio data={logos} />
                  </Tabs.Content>
                </Tabs.Root>

              </div>
              {/* <Portfolio /> */}
            </div>
          </section>
        </div>




        <div className="relative overflow-hidden section_process bg-black section">

          <Canvas gl={{ alpha: true }} style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}>

            <Points />
          </Canvas>
          <section className="absolute w-full lg:top-0 xs:top-[8%] flex flex-col left-0 h-full z-10">
            <div className="flex lg:flex-row xs:flex-col lg:justify-around h-full items-center">
              <div className="process_head lg:w-[30%] xs:w-[90%] text-white">
                <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg mt-2">Our Seamless Process</p>
                <h1 className="text-while font-pp lg:text-[66px] xs:text-[38px] leading-none">From Vision to Success</h1>
                <p className="text-white p-1 font-text xs:text-[14px] lg:text-lg">Transforming your ideas into reality with strategic planning, innovative solutions, and relentless execution. We take your concept and turn it into a tangible success, every step driven by creativity, precision, and a deep understanding of your goals.</p>
              </div>
              <div className="lg:w-[60%] xs:w-[100%] process_main">
                <ProcessSection />
              </div>
            </div>
          </section>
        </div>




        <div className="relative overflow-x-hidden section_four bg-black section">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video/check.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            zIndex: 1,
          }}></div>
          <div >
            <TestimonailSection />
          </div>
        </div>




        <div className="relative overflow-x-hidden section_five bg-black section">
          <Canvas gl={{ alpha: true }} style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}>

            <Points />
          </Canvas>
          <div className="flex flex-col w-full h-screen absolute left-0 z-10">
            <div className="contact-head h-[70%] w-full flex xs:flex-col lg:flex-row lg:items-center lg:space-x-12">
              <div className="testimonialHead text-white  xs:mt-[5%] lg:mt-0 xs:ml-[5%] lg:ml-[8%]  lg:w-[30%] xs:w-[90%]">
                <p className="text-[#999696] font-text pl-2 xs:text-[14px] lg:text-lg  mt-2">Empowering the world through our technlogies</p>
                <h1 className="text-while font-pp lg:text-[66px] xs:text-[38px] -mt-2">Contact Us</h1>
                {/* <p className="text-white p-1 font-text xs:text-[14px] lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sit facere necessitatibus ab neque consequuntur culpa repellendus, accusantium delectus minus quisquam, sed odit dicta cum numquam sunt illo ratione aliquam.</p> */}
                {/* <SideButton title={"L&nbsp;&nbsp;E&nbsp;&nbsp;A&nbsp;&nbsp;R&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;O&nbsp;R&nbsp;&nbsp;E"} margin={"ml-2"} /> */}
              </div>
              <div className="xs:w-[100%] lg:w-[60%] lg:my-4 form-section xs:mr-0 lg:mr-4">
                <ContactForm />
              </div>
            </div>
            <div className="h-[40%] xs:hidden lg:block">
              <Footer />
            </div>
          </div>
        </div>


      </div >
    </>

  );
}
