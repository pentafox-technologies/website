import { Box } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Link } from "gatsby";
import React from "react";

const PageLinkButton = ({routeLink, title, subTitle, leftArrow}) => {
  return (
    <Link
      to={routeLink}
      style={{ textDecoration: "none", color: "rgba(0,0,0,0.6)" }}
    >
      <Box
        w={window.innerWidth / 4}
        sx={{
          border: "1px solid black",
          padding: 20,
          borderRadius: 10,
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(220, 41, 8, 0.05)",
          borderRadius: 12,
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 20 }}>
          {
            leftArrow && (
              <IconArrowLeft />
            )
          }
          <h3>{title}</h3>
          {
            !leftArrow && (
              <IconArrowRight />
            )
          }
        </Box>
        <p style={{ margin: 0 }}>
          {subTitle}
        </p>
      </Box>
    </Link>
  );
};

export default PageLinkButton;
