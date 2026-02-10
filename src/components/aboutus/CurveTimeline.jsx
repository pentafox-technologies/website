import React, { useEffect, useState, useRef } from "react";
import { IconHeart, IconRocket, IconBulb, IconUsers, IconTarget } from "@tabler/icons-react";
import "./curveTimeline.css";

const timelineData = [
  {
    year: "2017",
    title: "Founded",
    content: "Pentafox Infotech was established with a vision.",
    icon: <IconBulb size={32} stroke={2} />,
  },
  {
    year: "2019",
    title: "Innovation",
    content: "Driving digital ecosystems with automation.",
    icon: <IconHeart size={32} stroke={2} />,
  },
  {
    year: "2021",
    title: "Growth",
    content: "Expanded our infrastructure to 250+ engineers.",
    icon: <IconUsers size={32} stroke={2} />,
  },
  {
    year: "2023",
    title: "Scaling",
    content: "Moved to a world-class development center.",
    icon: <IconRocket size={32} stroke={2} />,
  },
  {
    year: "2025",
    title: "Future",
    content: "Innovating and scaling globally.",
    icon: <IconTarget size={32} stroke={2} />,
  },
];

const CurveTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const generatePath = () => {
    let path = "M0,100 ";
    timelineData.forEach((_, i) => {
      const x = (i + 1) * 220;
      const prevX = i * 220;
      const midX = prevX + 110;
      const y = i % 2 === 0 ? 160 : 40;
      path += `Q${midX},${y} ${x},100 `;
    });
    return path;
  };

  return (
    <div className="jt-wrapper">
      <h1 className="jt-heading">Journey of Pentafox</h1>

      <div className="jt-scroll-container">
        <div
          className="jt-container"
          style={{ width: `${timelineData.length * 220}px` }}
          ref={timelineRef}
        >
          {!isMobile && (
            <svg
              className="jt-wave-desktop"
              viewBox={`0 0 ${timelineData.length * 220} 200`}
              preserveAspectRatio="none"
            >
              <path
                d={generatePath()}
                className="jt-wave-path"
              />
            </svg>
          )}

          <div className="jt-track">
            {timelineData.map((item, index) => {
              const isTrough = index % 2 === 0;

              return (
                <div key={index} className="jt-card-wrapper">
                  {/* PEAKS - Content BELOW */}
                  {!isTrough && (
                    <div className="jt-text-block jt-text-bottom">
                      <h3 className="jt-year">{item.year}</h3>
                      <p className="jt-description">
                        <span className="jt-title-highlight">{item.title}:</span>{" "}
                        {item.content}
                      </p>
                    </div>
                  )}

                  <div className="jt-icon-wrapper">
                    <div
                      className={`jt-icon-circle ${isTrough ? "jt-move-down" : "jt-move-up"}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* TROUGHS - Content ABOVE */}
                  {isTrough && (
                    <div className="jt-text-block jt-text-top">
                      <h3 className="jt-year">{item.year}</h3>
                      <p className="jt-description">
                        <span className="jt-title-highlight">{item.title}:</span>{" "}
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurveTimeline;