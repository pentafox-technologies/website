import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { projects } from "../data/projects";
import "./portfolio.css";

const filters = ["All", "Government", "Fintech"];

export const projects = [
  {
    id: "ncrp",
    title: "NCRP Digital Web Application",
    category: "Government",
    tag: "Cybercrime • Automation",
    metrics: ["12,524+ Incidents", "90% Automation", "85% Manual Reduction"],
    overview:
      "A secure, API-driven platform transforming national cybercrime response.",
    challenge:
      "Manual cybercrime complaint handling was slow, fragmented, and lacked visibility.",
    solution:
      "An integrated web platform connected to I4C and CBS enabling automated complaint orchestration.",
    impact: [
      "11,276+ cases processed end-to-end",
      "Real-time audit trails",
      "Regulatory compliance achieved",
    ],
    image: "https://assets.codepen.io/210284/flower-9.jpg",
  },
  {
    id: "fintech",
    title: "Real-Time Banking Automation",
    category: "Fintech",
    tag: "CBS • APIs",
    metrics: ["Instant Verification", "Zero Manual Ops"],
    overview: "High-volume banking automation system.",
    challenge: "Delayed fund verification.",
    solution: "Real-time CBS integrations.",
    impact: ["Faster decisions", "Lower risk"],
    image: "https://assets.codepen.io/210284/flower-8.jpg",
  },
];

export default function EnterprisePortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="portfolio">
      <header>
        <h1>Our Work</h1>
        <p>Large-scale platforms built for impact, security, and scale.</p>

        <div className="filters">
          {filters.map((f) => (
            <button
              key={f}
              className={activeFilter === f ? "active" : ""}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <motion.div layout className="grid">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.id}
              className="card"
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <h3>{project.title}</h3>
                <span>{project.tag}</span>
                <div className="metrics">
                  {project.metrics.map((m) => (
                    <strong key={m}>{m}</strong>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="case-study"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close" onClick={() => setActiveProject(null)}>
              ✕
            </button>

            <div className="case-inner">
              <h2>{activeProject.title}</h2>
              <p className="overview">{activeProject.overview}</p>

              <section>
                <h4>The Challenge</h4>
                <p>{activeProject.challenge}</p>
              </section>

              <section>
                <h4>Our Solution</h4>
                <p>{activeProject.solution}</p>
              </section>

              <section>
                <h4>Business Impact</h4>
                <ul>
                  {activeProject.impact.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import CountUp from "react-countup";
// import { CheckIcon } from "@mantine/core";
// import { Link } from "react-router-dom";
// import DynamicIcon from "../../ui/DynamicIcon";
// import IsMobile from "../../helpers/IsMobile";

// function Products({ sections = [], whyChoose = {}, features = [] }) {
//   const [activeSection, setActiveSection] = useState(null);
//   const [counterInView, setCounterInView] = useState(false);
//   const sectionRefs = useRef([]);
//   const counterRef = useRef(null);

//   //Track active section on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = sectionRefs.current.findIndex(
//               (ref) => ref === entry.target
//             );
//             if (index !== -1) setActiveSection(index);
//           }
//         });
//       },
//       { root: null, threshold: 0.5 }
//     );

//     sectionRefs.current.forEach(
//       (section) => section && observer.observe(section)
//     );
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const detectInitialSection = () => {
//       let visibleIndex = null;
//       let hasVisible = false;

//       sectionRefs.current.forEach((el, index) => {
//         if (!el) return;
//         const rect = el.getBoundingClientRect();

//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           visibleIndex = index;
//           hasVisible = true;
//         }
//       });

//       if (hasVisible) {
//         setActiveSection(visibleIndex);
//       }
//     };

//     detectInitialSection();
//     window.addEventListener("load", detectInitialSection);
//     return () => window.removeEventListener("load", detectInitialSection);
//   }, []);

//   // Counter animation
//   useEffect(() => {
//     const counterObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setCounterInView(true);
//         });
//       },
//       { root: null, threshold: 0.3 }
//     );

//     if (counterRef.current) counterObserver.observe(counterRef.current);
//     return () => counterObserver.disconnect();
//   }, []);

//   // Animations
//   const containerTopToBottom = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.1 },
//     },
//   };
//   const containerBottomToTop = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.25, delayChildren: 0.2 },
//     },
//   };
//   const topToBottom = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };
//   const bottomToTop = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };
//   const listContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <>
//       {/* PRODUCTS SECTION */}
//       <section className="py-12 mb-18">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ">
//           <div className="mb-8">
//             <h2 className="w-full max-w-2xl text-[32px]  md:text-[43px] font-bold text-[#212121]">
//               APIs for fast, secure and reliable customer onboarding
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-x-12">
//             {/* Left Side */}
//             <div className="flex flex-col space-y-24">
//               {sections.map((section, index) => (
//                 <SectionBlock
//                   key={section.id}
//                   section={section}
//                   ref={(el) => (sectionRefs.current[index] = el)}
//                   isActive={activeSection === index}
//                   isMobile={IsMobile}
//                 />
//               ))}
//             </div>

//             {/* Right Side Image */}
//             {!IsMobile && activeSection !== null && (
//               <div className="relative">
//                 <div className="sticky top-24">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeSection}
//                       initial={{ opacity: 0, scale: 0.97, y: 15 }}
//                       animate={{ opacity: 1, scale: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.97, y: 15 }}
//                       transition={{ duration: 0.55, ease: "easeOut" }}
//                       className="w-full h-[70vh] flex items-center justify-center"
//                     >
//                       <img
//                         src={sections[activeSection].image}
//                         alt={sections[activeSection].title}
//                         className="w-full h-full object-contain rounded-lg"
//                       />
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE SECTION */}
//       <section className="mb-24">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//           <motion.div
//             className="grid lg:grid-cols-2 gap-12 items-center"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             {/* Left: Heading + Counters */}
//             <motion.div className="space-y-6" variants={containerTopToBottom}>
//               <motion.p
//                 variants={topToBottom}
//                 className="text-[#E20303] font-medium text-[24px]"
//               >
//                 {whyChoose.heading}
//               </motion.p>
//               <motion.h2
//                 variants={topToBottom}
//                 className="text-3xl md:text-[32px] font-medium leading-snug text-[#212121]"
//               >
//                 {whyChoose.subheading}
//               </motion.h2>
//               <motion.p
//                 variants={topToBottom}
//                 className="text-[#424242] text-[20px] font-medium"
//               >
//                 {whyChoose.description}
//               </motion.p>
//               {/* <motion.div
//                 className="flex flex-wrap justify-between mt-6 gap-6"
//                 ref={counterRef}
//                 variants={topToBottom}
//               >
//                 {whyChoose.counters.map((counter, index) => (
//                   <motion.div key={index} className="text-center min-w-[120px]" variants={topToBottom}>
//                     <h3 className="text-[42px] font-bold text-[#333333]">
//                       {counterInView ? (
//                         <CountUp end={counter.end} duration={2} suffix={counter.suffix || ""} />
//                       ) : (
//                         0
//                       )}
//                     </h3>
//                     <p className="text-[#424242] text-[16px] font-medium">{counter.label}</p>
//                   </motion.div>
//                 ))}
//               </motion.div> */}
//             </motion.div>

//             {/* Right: Feature Cards */}
//             <motion.div
//               className="space-y-6 mt-6 lg:mt-0"
//               variants={containerBottomToTop}
//             >
//               {whyChoose.featureCards.map((card, index) => (
//                 <FeatureCard
//                   key={index}
//                   icon={card.icon}
//                   title={card.title}
//                   description={card.description}
//                   variants={bottomToTop}
//                 />
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

// // SECTION BLOCK
// const SectionBlock = React.forwardRef(
//   ({ section, isActive, IsMobile }, ref) => {
//     return (
//       <motion.div
//         ref={ref}
//         className="flex flex-col justify-center py-10 min-h-[70vh]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isActive ? 1 : 0.6 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex items-center gap-4 mb-3">
//           <div className="min-w-[54px] min-h-[50px] flex items-center justify-center rounded-xl bg-[#F44336]/10 text-[#F44336]">
//             <DynamicIcon
//               name={section.icon}
//               size={32}
//               strokeWidth={1.5}
//               alt={section.title}
//             />
//           </div>

//           <h2 className="text-3xl md:text-[40px] font-bold text-[#161C2D]">
//             {section.title}
//           </h2>
//         </div>

//         <p className="text-[#424242] text-[20px] font-medium mb-6">
//           {section.description}
//         </p>

//         <ul className="list-none space-y-2">
//           {section.list.map((item, i) => (
//             <li
//               key={i}
//               className="flex items-center text-[#424242] text-[20px] font-medium"
//             >
//               <span className="flex items-center justify-center w-3 h-3 mr-4 rounded-full">
//                 <CheckIcon className="w-4 h-4 text-red-600" />
//               </span>
//               {item}
//             </li>
//           ))}
//         </ul>

//         <div className="py-6">
//           {section.external || section.link.startsWith("http") ? (
//             <a
//               href={section.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-[170px] h-9 cursor-pointer text-[16px] flex items-center justify-center font-medium text-sm text-[#F44336] border border-[#F44336] rounded-lg hover:bg-red-50 transition"
//             >
//               Know more
//               <span className="ml-2 text-lg md:text-xl font-bold leading-none">
//                 →
//               </span>
//             </a>
//           ) : (
//             <Link
//               to={section.link}
//               className="w-[170px] h-9 cursor-pointer text-[16px] flex items-center justify-center font-medium text-sm text-[#F44336] border border-[#F44336] rounded-lg hover:bg-red-50 transition"
//             >
//               Know more
//               <span className="ml-2 text-lg md:text-xl font-bold leading-none">
//                 →
//               </span>
//             </Link>
//           )}
//         </div>

//         {IsMobile && (
//           <div className="flex justify-center items-center mt-6">
//             <motion.img
//               key={section.id}
//               src={section.image}
//               alt={section.title}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="w-full max-w-sm object-contain rounded-lg"
//             />
//           </div>
//         )}
//       </motion.div>
//     );
//   }
// );
// SectionBlock.displayName = "SectionBlock";

// // FEATURE CARD
// const FeatureCard = ({ icon, title, description, variants }) => (
//   <motion.div
//     className="flex items-start bg-red-50 p-6 rounded-lg shadow-sm will-change-transform"
//     variants={variants}
//     whileHover={{
//       scale: 1.03,
//       transition: { duration: 0.25, ease: "easeOut" },
//     }}
//     whileTap={{ scale: 0.98 }}
//   >
//     <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-[#F44336] flex items-center justify-center rounded-md">
//       <DynamicIcon name={icon} size={24} strokeWidth={1.5} />
//     </div>
//     <div className="ml-4">
//       <p className="text-black-900 font-medium text-[16px] leading-snug">
//         {title}
//       </p>
//       <p className="text-[#48474F] font-medium text-[16px] leading-relaxed">
//         {description}
//       </p>
//     </div>
//   </motion.div>
// );

// export default Products;

// import React, { useState } from "react";
// import { Container, Box } from "@mantine/core";
// import { enterpriseProjects } from "../../data/enterpriseProjects";
// import ProjectCard from "./ProjectCard";
// import { EnterpriseStyles } from "./enterprise.styles";

// const filters = [
//   { label: "All Projects", value: "all" },
//   { label: "Banking & Fintech", value: "banking" },
//   { label: "AI & Analytics", value: "ai" },
//   { label: "Aviation", value: "aviation" },
//   { label: "Own Products", value: "product" },
// ];

// const EnterprisePortfolio = () => {
//   const [active, setActive] = useState("all");

//   const data =
//     active === "all"
//       ? enterpriseProjects
//       : enterpriseProjects.filter((p) => p.category === active);

//   return (
//     <EnterpriseStyles>
//       {/* Filters */}
//       <Box className="filters">
//         {filters.map((f) => (
//           <button
//             key={f.value}
//             className={`filter ${active === f.value ? "active" : ""}`}
//             onClick={() => setActive(f.value)}
//           >
//             {f.label}
//           </button>
//         ))}
//       </Box>

//       {/* Cards */}
//       <Container size={1300}>
//         <Box className="grid">
//           {data.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </Box>
//       </Container>
//     </EnterpriseStyles>
//   );
// };

// export default EnterprisePortfolio;
