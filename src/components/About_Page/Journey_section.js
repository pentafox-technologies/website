import React, { useState, useEffect, useRef } from "react";
import {
  IconHeart,
  IconTrophy,
  IconThumbUp,
  IconStar,
  IconRocket,
  IconTarget,
  IconBulb,
  IconBolt,
  IconAward,
  IconChartLine,
  IconTrendingUp,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import "./about.css";

const iconMap = {
  IconHeart,
  IconTrophy,
  IconThumbUp,
  IconStar,
  IconRocket,
  IconTarget,
  IconBulb,
  IconBolt,
  IconAward,
  IconChartLine,
};

function JourneySection({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(window.innerWidth < 768 ? 0 : 90);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [showLetters, setShowLetters] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const lastScrollTime = useRef(0);
  const scrollCooldown = 600;
  const circleRef = useRef(null);

  const isMobile = windowWidth < 768;
  const isRotating = useRef(false);
  const isSectionInView = useRef(false);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setRotationAngle(window.innerWidth < 768 ? 0 : 90);
      setActiveIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = windowWidth < 428 ? 0.8 : windowWidth < 768 ? 0.9 : 1;
  const logoScale = windowWidth < 428 ? 0.95 : windowWidth < 768 ? 0.98 : 1;
  const circleRadius = 285 * scale;
  const anglePerStep = 360 / data.steps.length;

  // Section intersection observer
  useEffect(() => {
    const section = circleRef.current?.parentElement;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isSectionInView.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          const initialIndex = data.steps.findIndex((step) => step.year === 2016);
          if (initialIndex === -1) return;
          smoothRotateToIndex(initialIndex);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [data.steps, anglePerStep]);

  const smoothRotateToIndex = (nextIndex) => {
    if (isRotating.current) return;
    isRotating.current = true;

    const clampedIndex = Math.max(0, Math.min(nextIndex, data.steps.length - 1));
    const newRotation = (window.innerWidth < 768 ? 0 : 90) - clampedIndex * anglePerStep;

    setRotationAngle(newRotation);
    setActiveIndex(clampedIndex);

    setTimeout(() => {
      isRotating.current = false;
    }, 600);
  };

  // Scroll control
  const handleWheel = (e) => {
    if (!isSectionInView.current) return;
    if (isRotating.current) {
      e.preventDefault();
      return;
    }

    const rect = circleRef.current?.getBoundingClientRect();
    if (!rect) return;
    const circleCenterY = rect.top + rect.height / 2;
    const viewportCenterY = window.innerHeight / 2;
    const centerDiff = Math.abs(circleCenterY - viewportCenterY);
    if (centerDiff > 150) return;

    if ((activeIndex === 0 && e.deltaY < 0) || (activeIndex === data.steps.length - 1 && e.deltaY > 0)) {
      return;
    }

    e.preventDefault();

    if (e.deltaY > 0) {
      setScrollDirection("down");
      smoothRotateToIndex(activeIndex + 1);
    } else if (e.deltaY < 0) {
      setScrollDirection("up");
      smoothRotateToIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, rotationAngle]);

  const handleIconClick = (index) => {
    setScrollDirection(index > activeIndex ? "down" : "up");
    smoothRotateToIndex(index);
  };

  useEffect(() => {
    const lettersTimer = setTimeout(
      () => setShowLetters(true),
      data.letters.length * 230
    );
    const yearTimer = setTimeout(
      () => setShowYear(true),
      300 + data.letters.length * 300
    );
    return () => {
      clearTimeout(lettersTimer);
      clearTimeout(yearTimer);
    };
  }, []);

  const letterMotionVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    jump: { y: [0, -20, 0] },
  };

  const getYearDigits = (year) => year.toString().split("");

  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(to right, #fff 50%, #FFF5F5 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 0",
      }}
    >
      {/* Top Heading Section */}
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ fontSize: "34px", fontWeight: 600, color: "#000", marginBottom: "10px" }}
        >
          {data.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontSize: "18px", color: "#656565" }}
        >
          {data.subheading}
        </motion.p>
      </div>

      {/* Core Section - Straight alignment */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: "60px",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        {/* Left: Circle */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            transform: `scale(${scale})`,
            transformOrigin: "center",
            order: isMobile ? 2 : 1,
          }}
        >
          <div
            style={{
              width: `${450 * logoScale}px`,
              height: `${450 * logoScale}px`,
              position: "relative",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <img
              src={data.images.first}
              alt="first"
              className="rotate1"
              style={{
                position: "absolute",
                width: `${430 * logoScale}px`,
                height: `${400 * logoScale}px`,
                objectFit: "contain",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <img
              src={data.images.second}
              alt="second"
              className="rotate2"
              style={{
                position: "absolute",
                width: `${352 * logoScale}px`,
                height: `${360 * logoScale}px`,
                objectFit: "contain",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <img
              src={data.images.third}
              alt="third"
              className="rotate3"
              style={{
                position: "absolute",
                width: `${430 * logoScale}px`,
                height: `${430 * logoScale}px`,
                objectFit: "contain",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <img
              src={data.images.above}
              alt="Above"
              className="rotate2"
              style={{
                position: "absolute",
                width: `${260 * logoScale}px`,
                height: `${260 * logoScale}px`,
                objectFit: "contain",
                borderRadius: "50%",
                zIndex: 1,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            {/* Parent & Child */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: `${225 * logoScale}px`,
                height: `${225 * logoScale}px`,
                zIndex: 2,
              }}
            >
              <img
                src={data.images.parent}
                alt="Parent"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: `${145 * logoScale}px`,
                  height: `${145 * logoScale}px`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={data.images.child}
                  alt="Child"
                  style={{
                    width: "150%",
                    height: "150%",
                    objectFit: "contain",
                  }}
                />
                <AnimatePresence>
                  {showYear && (
                    <motion.div
                      key={activeIndex}
                      style={{
                        position: "absolute",
                        display: "flex",
                        top: "56%",
                        left: "49%",
                        transform: "translate(-50%, -50%)",
                        fontWeight: "bold",
                        fontSize: "25px",
                        color: "#ffffff",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {getYearDigits(data.steps[activeIndex].year).map(
                        (digit, idx) => (
                          <motion.span key={idx}>{digit}</motion.span>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Centered Letters */}
            <div style={lettersBox}>
              {data.letters.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterMotionVariants}
                  initial="hidden"
                  animate={showLetters ? "jump" : "visible"}
                  transition={{ delay: index * 0.15, duration: 0.3 }}
                  style={{ color: "#fff", fontWeight: "bold", fontSize: "19px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Outer Circle with Icons */}
          <div ref={circleRef} style={outerCircleBox(circleRadius, isMobile)}>
            <motion.svg
              width={circleRadius * 2 + 80}
              height={circleRadius * 2 + 80}
              style={{ overflow: "visible", position: "absolute", top: 0, left: 0 }}
            >
              <circle
                cx={circleRadius + 40}
                cy={circleRadius + 40}
                r={circleRadius}
                fill="transparent"
                stroke="#ef4444"
                strokeWidth="3"
              />
              <motion.g
                style={{ transformOrigin: `${circleRadius + 40}px ${circleRadius + 40}px` }}
                animate={{ rotate: rotationAngle }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              >
                {data.steps.map((step, index) => {
                  const angle = (index / data.steps.length) * 2 * Math.PI - Math.PI / 2;
                  const x = circleRadius + 40 + circleRadius * Math.cos(angle);
                  const y = circleRadius + 40 + circleRadius * Math.sin(angle);
                  const Icon = iconMap[step.icon];
                  const isActive = index === activeIndex;
                  return (
                    <g key={index} onClick={() => handleIconClick(index)} style={{ cursor: "pointer" }}>
                      <circle cx={x} cy={y} r={32} fill={isActive ? "#FF5F5F4D" : "transparent"} />
                      <circle cx={x} cy={y} r={22} fill={isActive ? "#ef4444" : "#fff"} stroke="#ef4444" strokeWidth="2" />
                      <g transform={`translate(${x - 12}, ${y - 12})`}>
                        <Icon size={24} color={isActive ? "#fff" : "#ef4444"} />
                      </g>
                    </g>
                  );
                })}
              </motion.g>
            </motion.svg>

            {/* Fade effects */}
            {!isMobile && (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: 63,
                    left: 0,
                    width: "100%",
                    height: "30px",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 63,
                    left: 0,
                    width: "100%",
                    height: "30px",
                    background: "linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0))",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
              </>
            )}

            {isMobile && (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: 50,
                    left: 20,
                    width: "80px",
                    height: "40%",
                    background: "linear-gradient(to right, rgba(255,245,245,0.9), rgba(255,255,255,0.6))",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 60,
                    right: 20,
                    width: "80px",
                    height: "40%",
                    background: "linear-gradient(to left, rgba(255,245,245,0.9), rgba(255,245,245,0.6))",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
              </>
            )}
          </div>
        </div>

        {/* Right: Text */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
            maxWidth: "600px",
            textAlign: isMobile ? "center" : "left",
            order: isMobile ? 1 : 2,
            padding: isMobile ? "0" : "40px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-${scrollDirection}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2, staggerDirection: scrollDirection === "down" ? 1 : -1 },
                },
                exit: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.h3
                style={{ fontSize: "30px", fontWeight: 700, color: "#000", marginBottom: "10px" }}
                variants={{
                  hidden: { opacity: 0, y: scrollDirection === "down" ? 20 : -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {data.steps[activeIndex].title}
              </motion.h3>

              <motion.h4
                style={{ fontSize: "20px", fontWeight: 500, color: "#444", marginBottom: "10px" }}
                variants={{
                  hidden: { opacity: 0, y: scrollDirection === "down" ? 20 : -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {data.steps[activeIndex].subtitle}
              </motion.h4>

              <motion.ul
                style={{
                  fontSize: "15px",
                  color: "#656565",
                  lineHeight: 1.8,
                  paddingLeft: isMobile ? "0" : "0",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {data.steps[activeIndex].points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: scrollDirection === "down" ? 20 : -20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: isMobile ? "center" : "flex-start" }}
                  >
                    {point} <IconTrendingUp size={14} color="#EA0707" />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// --- Helper styles ---
const imgStyle = (w, h, s) => ({
  position: "absolute",
  width: `${w * s}px`,
  height: `${h * s}px`,
  objectFit: "contain",
  borderRadius: "50%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const centerBox = (size) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: `${size}px`,
  height: `${size}px`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const lettersBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  gap: "2px",
  zIndex: 3,
};

const outerCircleBox = (r, isMobile) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: `${r * 2 + 80}px`,
  height: `${r * 2 + 80}px`,
  overflow: "hidden",
  clipPath: isMobile ? "inset(0 0 70% 0)" : "inset(0 0 0 70%)",
});

export default JourneySection;