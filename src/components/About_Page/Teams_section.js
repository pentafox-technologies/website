import React, { useState, useEffect } from "react";
import { Tabs } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function TeamsSection({ data }) {
  const [activeTab, setActiveTab] = useState("View all");
  const [currentPage, setCurrentPage] = useState(0);
  const [columns, setColumns] = useState(getGridColumns());
  const [direction, setDirection] = useState(1);

  function getGridColumns() {
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 1024) return 3;
    if (window.innerWidth < 1280) return 4;
    return 6;
  }

  useEffect(() => {
    const handleResize = () => setColumns(getGridColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const MemberCard = ({ member }) => {
    const [hovered, setHovered] = React.useState(false);
    const frontImage = Array.isArray(member.img) ? member.img[0] : member.img;
    const backImage =
      member.img2 || (Array.isArray(member.img) && member.img[1]) || frontImage;

    return (
      <div
        className="w-full max-w-[230px] text-left"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative w-full pt-[100%] rounded-xl overflow-hidden">
          <motion.img
            src={frontImage}
            alt={member.name}
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <motion.img
            src={backImage}
            alt={member.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <p className="mt-3 text-[16px] font-bold">{member.name}</p>
        <p className="text-[14px] text-gray-500" style={{ marginTop: "-18px" }}>{member.role}</p>
      </div>
    );
  };

  const pageVariants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: (dir) => ({ opacity: 0, y: dir > 0 ? -50 : 50, transition: { duration: 0.5, ease: "easeInOut" } }),
  };

  return (
    <div className="bg-white py-16 px-5 text-center">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-gray-600 max-w-[700px] mx-auto mt-2 leading-relaxed">
        {data.description}
      </p>

      {/* Tabs (unchanged) */}
      <Tabs value={activeTab} onTabChange={handleTabChange} variant="unstyled">
        <Tabs.List
          style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}
        >
          {data.categories.map((cat) => (
            <Tabs.Tab
              key={cat}
              value={cat}
              style={{
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "15px",
                padding: "5px 15px",
                borderRadius: activeTab === cat ? "60px" : "0px",
                border: activeTab === cat ? "1px solid #F10404" : "none",
                color: activeTab === cat ? "#F10404" : "#333",
                transition: "all 0.3s ease",
              }}
            >
              {cat}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      {data.categories.map((cat) => {
        if (cat !== activeTab) return null;

        const filteredData =
          cat === "View all"
            ? data.members
            : data.members.filter((m) => m.category === cat);

        const itemsPerPage = 12;
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        const start = currentPage * itemsPerPage;
        const currentItems = filteredData.slice(start, start + itemsPerPage);

        return (
          <div key={cat} className="relative mt-8">
            {/* Left Arrow */}
            {currentPage > 0 && (
              <button
                onClick={() => {
                  setDirection(-1);
                  setCurrentPage((p) => p - 1);
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white  w-10 h-10 flex items-center justify-center shadow-lg z-10 hover:bg-red-700 transition"
                style={{
                  borderRadius: "100px"
                }}
              >
                <IconChevronLeft size={23} />
              </button>
            )}

            {/* Right Arrow */}
            {currentPage < totalPages - 1 && (
              <button
                onClick={() => {
                  setDirection(1);
                  setCurrentPage((p) => p + 1);
                }}
                className="absolute  right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white  w-10 h-10 flex items-center justify-center shadow-lg z-10 hover:bg-red-700 transition"
                style={{
                  borderRadius: "50px",
                  marginTop: "-43px"
                }}
              >
                <IconChevronRight size={23} />
              </button>
            )}

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid gap-5 justify-items-center"
                style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
              >
                {currentItems.map((m) => (
                  <MemberCard key={m.id} member={m} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentPage ? 1 : -1);
                      setCurrentPage(idx);
                    }}
                    className={`w-3 h-3 rounded-full ${idx === currentPage ? "bg-red-600" : "bg-gray-300"
                      }`}
                    style={{
                      borderRadius: "50px",
                      width: "10px",
                      height: "10px"
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TeamsSection;
