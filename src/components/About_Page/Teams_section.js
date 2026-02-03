import React, { useState, useEffect } from "react";
import { Tabs } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function TeamsSection({ data }) {
  const isBrowser = typeof window !== "undefined";

  function getGridColumns() {
    if (!isBrowser) return 3;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 1024) return 3;
    if (window.innerWidth < 1280) return 4;
    return 6;
  }

  const [activeTab, setActiveTab] = useState("View all");
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [columns, setColumns] = useState(getGridColumns());

  useEffect(() => {
    if (!isBrowser) return;
    const handleResize = () => setColumns(getGridColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isBrowser]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const MemberCard = ({ member }) => {
    const [hovered, setHovered] = useState(false);
    const frontImage = Array.isArray(member.img) ? member.img[0] : member.img;
    const backImage =
      member.img2 || (Array.isArray(member.img) && member.img[1]) || frontImage;

    return (
      <div
        style={{ width: "100%", maxWidth: "230px", textAlign: "left" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "100%",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <motion.img
            src={frontImage}
            alt={member.name}
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <motion.img
            src={backImage}
            alt={member.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "12px",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          {member.name}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginTop: "-18px",
          }}
        >
          {member.role}
        </p>
      </div>
    );
  };

  const pageVariants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 50 : -50 }),
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir > 0 ? -50 : 50,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "64px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "700" }}>{data.title}</h2>
      <p
        style={{
          color: "#4b5563",
          maxWidth: "700px",
          margin: "8px auto 0",
          lineHeight: "1.7",
        }}
      >
        {data.description}
      </p>

      {/* Tabs */}
      <Tabs value={activeTab} onTabChange={handleTabChange} variant="unstyled">
        <Tabs.List
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "24px",
          }}
        >
          {data.categories.map((cat) => (
            <Tabs.Tab
              key={cat}
              value={cat}
              style={{
                cursor: "pointer",
                fontWeight: 500,
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
          <div key={cat} style={{ position: "relative", marginTop: "32px" }}>
            {/* Left Arrow */}
            {currentPage > 0 && (
              <button
                onClick={() => {
                  setDirection(-1);
                  setCurrentPage((p) => p - 1);
                }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "100px",
                  backgroundColor: "#374151",
                  color: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  zIndex: 10,
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
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(calc(-50% - 43px))",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50px",
                  backgroundColor: "#374151",
                  color: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  zIndex: 10,
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
                style={{
                  display: "grid",
                  gap: "20px",
                  justifyItems: "center",
                  gridTemplateColumns: `repeat(${columns}, 1fr)`,
                }}
              >
                {currentItems.map((m) => (
                  <MemberCard key={m.id} member={m} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            {totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "24px",
                }}
              >
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentPage ? 1 : -1);
                      setCurrentPage(idx);
                    }}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50px",
                      border: "none",
                      backgroundColor:
                        idx === currentPage ? "#dc2626" : "#d1d5db",
                      cursor: "pointer",
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
