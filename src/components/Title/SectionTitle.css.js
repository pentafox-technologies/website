import { createStyles } from "@mantine/core";

export const sectionTitleStyles = createStyles((theme) => ({
  subText: {
    color: "rgba(220, 41, 8, 0.1)",
    fontSize: "4rem",
    fontWeight: 900,
    [`@media (max-width: 768px)`]: {
      fontSize: "3rem",
    },
    [`@media (max-width: 550px)`]: {
      fontSize: "2rem",
    },
  },
  titleText: {
    fontWeight: 400,
    fontSize: "3rem",
    [`@media (max-width: 768px)`]: {
      fontSize: "2.5rem",
    },
    [`@media (max-width: 550px)`]: {
      fontSize: "1.8rem",
    },
  },
  indexText: {
    color: "rgba(220, 41, 8, 0.1)",
    fontSize: "6rem",
    fontWeight: 900,
    [`@media (max-width: 768px)`]: {
      fontSize: "5rem",
    },
    [`@media (max-width: 550px)`]: {
      fontSize: "4rem",
    },
    [`@media (max-width: 390px)`]: {
      fontSize: "3rem",
    },
  },
}));
