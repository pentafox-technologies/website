import React from "react";
import IsMobile from "../../helpers/IsMobile";
import LogoSVG from "../../images/logo-pf-white-1.svg";
import LogoRedSVG from "../../images/logo-pf-red-1.svg";
import FastkycLogo from "../../about_assets/Logo.png";
import WalaneLogo from "../../about_assets/Walane.png";
import aviLogo from "../../about_assets/avi_favicon.png";
import digiopsLogo from "../../about_assets/digi-ops.png";

import { Link, navigate } from "gatsby";
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Container,
  Badge,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconCurrencyRipple,
  IconBrain,
  IconCloudComputing,
  IconServerCog,
  IconChartBar,
  IconUsersGroup,
  IconFileDescription,
  IconNotebook,
  IconSparkles,
  IconArrowRight,
  IconUserCircle,
  IconHelp,
  IconSettings,
  IconLogout,
  IconX,
} from "@tabler/icons-react";
import styled from "styled-components";

const isMobileDevice = IsMobile();

const HeaderWrapper = styled.div`
  .header {
    max-width: 1200px;
    height: 100px;
    margin: 0 auto;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .header-links {
    display: flex;
    height: 100%;
    align-items: center;
    // justify-content: flex-end;
    justify-content: space-between;
    @media (max-width: 770px) {
      display: none;
    }
  }
  .link {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 16px; /* Adjust the padding as needed */
    padding-right: 16px; /* Adjust the padding as needed */
    text-decoration: none;
    color: #000; /* Replace with your desired color */
    font-weight: 500;
    font-size: 14px; /* Adjust the font size as needed */

    @media (max-width: 770px) {
      height: 60px; /* Adjust the height as needed */
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
  .lightLinks {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 16px; /* Adjust the padding as needed */
    padding-right: 16px; /* Adjust the padding as needed */
    text-decoration: none;
    color: #fff; /* Replace with your desired color */
    font-weight: 500;
    font-size: 14px; /* Adjust the font size as needed */

    @media (max-width: 770px) {
      height: 120px; /* Adjust the height as needed */
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
  .hidden-burger {
    @media (min-width: 770px) {
      display: none;
    }
  }

  .banner {
    width: 100%; /* Set a default width */
    margin: auto; /* This centers the container horizontally */
    padding: 10px;
    background-color: rgba(220, 41, 8, 0.8);
    z-index: 999;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (max-width: 600px) {
      font-size: 12px; /* Adjust font size for smaller screens */
      padding: 8px; /* Adjust padding for smaller screens */
    }
  }

  .bannerContent {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .bannerText {
    display: flex;
    aligntems: center;
  }

  .bannerBtn {
    // background-color: rgba(255, 255, 255, 0.9);
    // color: #cd0e11;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12;
    margin-top: 10;
    padding: 0;
    font-family: "Varela Round";
    border-radius: 3px;
    padding: 0px 5px;
  }

  .contactUs {
  background: #cd0e11;
  color: white;
  padding: 8px 20px;
                    margin-top: 10px;
                    border-radius: 35px;
                    font-size: 14px;
                    font-weight: 600;
                    transition: all 0.2s ease-in;
                    &:hover {
                      background: #b60d0f;
                    },
  }

    .drawer-sub-link {
    display: block;
    padding: 12px 20px 12px 36px;
    color: #212121;
    text-decoration: none;
    font-size: 15px;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background-color: #f5f5f5;
    }

      .contactUs {
    background: #cd0e11;
    color: white;
    padding: 8px 20px;
    margin-top: 10px;
    border-radius: 35px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s ease-in;
    &:hover {
      background: #b60d0f;
    }
  }

  .drawer-link {
    display: block;
    width: 100%;
    padding: 16px 20px;
    color: #212121;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background-color: #fafafa;
    }
  }
`;

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: "60px",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },
  lightLinks: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: "120px",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  },

  subLink: {
    width: "100%",
    // padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    padding: 10,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  // New drawer styles
  drawerHeader: {
    backgroundColor: "rgb(255, 245, 245)",
    padding: "10px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  },

  drawerTitle: {
    color: "white",
    fontSize: "18px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  drawerCloseButton: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
    fontSize: "25px",
    border: "none",
    cursor: "pointer",
  },

  drawerMenuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "16px 20px",
    fontSize: "16px",
    fontWeight: 500,
    color: "#212121",
    borderBottom: "1px solid #f0f0f0",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#fafafa",
    },
  },

  drawerCollapseContent: {
    backgroundColor: "#fafafa",
  },

  drawerFooter: {
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderTop: "1px solid #f0f0f0",
  },

  mobileNavHeading: {
    fontFamily: "Varela Round",
    fontWeight: "bold",
  },

  mobileContactUsBtn: {
    display: "block",
    backgroundColor: "#cd0e11",
    color: "white",
    textAlign: "center",
    padding: "12px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "16px",
  },
}));

const mockdata = [
  {
    icon: IconCurrencyRipple,
    title: "Digital Mobility",
    description: "Maximise digital footprint",
    pageRoute: "/digital-mobility",
    // sectionId: '#content-section-0-digital-mobility',
  },
  {
    icon: IconCloudComputing,
    title: "Cloud Engineering",
    description: "Empowering Innovation through Cloud Engineering",
    pageRoute: "/cloud-engineering",
    // sectionId: '#content-section-1-cloud-engineering',
  },
  {
    icon: IconBrain,
    title: "Applied AI",
    description: "Realise growth with Intelligence",
    pageRoute: "/machine-learning",
    // sectionId: '#content-section-2-machine-learning',
  },
];

const landingdata = [
  {
    icon: IconServerCog,
    title: "Platform Engineering",
    description: "Scale with the power of cloud",
    pageRoute: "/",
    sectionId: "#content-section-0",
  },
  {
    icon: IconChartBar,
    title: "Digital Strategy",
    description: "Maximise digital footprint",
    pageRoute: "/",
    sectionId: "#content-section-1",
  },
  {
    icon: IconBrain,
    title: "Applied AI",
    description: "Realise growth with Intelligence",
    pageRoute: "/",
    sectionId: "#content-section-2",
  },
];

const companydata = [
  {
    icon: IconUsersGroup,
    title: "About",
    description: "Our Vision, Values and Team",
    pageRoute: "/about-us",
    // sectionId: '#content-section-0',
  },
  {
    icon: IconFileDescription,
    title: "Careers",
    description: "Grow with us",
    pageRoute: "/careers",
    // sectionId: '#content-section-0',
  },
  // {
  //   icon: IconNotebook,
  //   title: 'Internship',
  //   description: "Experience Technology",
  //   pageRoute: '/internship',
  //   // sectionId: '#content-section-0',
  // },
];

const ourProductsdata = [
  {
    title: "Aervia-Aviation Digital Platforms",
    description:
      "Smart manpower planning and rostering platform that converts headcount into structured shifts and task assignments based on flight schedules, operational rules, and real-time demand.",
    pageRoute: "/pentafox-portfolio",
    state: { filter: "aviation" },
    image: aviLogo,
  },
  {
    title: "Walane",
    description:
      "Engage customers instantly, automate responses, and drive conversions",
    pageRoute: "https://www.walane.ai/",
    external: true,
    image: WalaneLogo,
  },
  {
    title: "FastKYC",
    description: "AI-driven platform that streamlines the entire KYC process",
    pageRoute: "https://www.fastkyc.com/",
    external: true,
    image: FastkycLogo,
  },
  {
    title: "Digital Lending Platform",
    description:
      "Intelligent lending solution that automates LOS, LMS, and DDMS to accelerate loan processing and improve operational efficiency.",
    pageRoute: "https://digiops.in/",
    external: true,
    image: digiopsLogo,
  },
];

const HeaderBar = ({
  showDarkLogo = true,
  headerColor = "#FFFFFF",
  lightLinks = false,
  showHome = true,
  showBanner = true,
}) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  // const [linksOpened, { toggle: toggleSolutions }] = useDisclosure(false);
  const [portfolioOpened, { toggle: togglePortfolio, close: closePortfolio }] =
    useDisclosure(false);
  // const [companyLinksOpened, { toggle: toggleCompany }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  // new
  const [solutionsOpened, { toggle: toggleSolutions, close: closeSolutions }] =
    useDisclosure(false);
  const [companyOpened, { toggle: toggleCompany, close: closeCompany }] =
    useDisclosure(false);
  const [productsOpened, { toggle: toggleProducts, close: closeProducts }] =
    useDisclosure(false);

  const handleHomePage = (e) => {
    e.preventDefault();
    navigate("/");
    closeDrawer();
  };

  const NavigationLinks = ({ item }) => {
    const linkTo =
      item.pageRoute && item.sectionId
        ? `${item.pageRoute}${item.sectionId}`
        : item.pageRoute;

    const content = (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group
          noWrap
          spacing={12}
          style={{
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          {item.image ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: 42,
                  height: 42,
                  border: "1px solid #e5e5e5",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: 22,
                    height: 22,
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ) : (
            <ThemeIcon size={34} variant="default" radius="md">
              <item.icon size={20} style={{ color: "#CD0E11" }} />
            </ThemeIcon>
          )}
          <div>
            <Text size="sm" fw={600}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    );

    //external link
    if (item.external) {
      return (
        <a href={linkTo} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    // internal link
    return (
      <Link to={linkTo} state={item.state} onClick={closeDrawer}>
        {content}
      </Link>
    );
  };

  const handleToggleSubNav = (type) => {
    switch (type) {
      case "solution":
        toggleSolutions();
        closeCompany();
        closePortfolio();
        break;
      case "company":
        toggleCompany();
        closeSolutions();
        closePortfolio();
        break;
      case "portfolio":
        togglePortfolio();
        closeSolutions();
        closeCompany();
        break;
      case "products":
        toggleProducts();
        closeSolutions();
        closeCompany();
        closePortfolio();
        break;
      default:
        break;
    }
  };

  return (
    <HeaderWrapper>
      <Box style={{ backgroundColor: headerColor }} withBorder={false}>
        <Box className="header">
          {/* <Container size={1200} style={{height: '100%'}}> */}
          <div className="header-content">
            {/* <Group position="apart" sx={{ height: '100%' }}> */}
            <Link to="/">
              {showDarkLogo ? (
                <LogoRedSVG
                  height={isMobileDevice ? "60" : "90"}
                  width="auto"
                />
              ) : (
                <LogoSVG height={isMobileDevice ? "60" : "90"} width="auto" />
              )}
            </Link>

            <div className="header-links">
              {showHome && (
                <Link to="/" className={lightLinks ? "lightLinks" : "link"}>
                  <h5>Home</h5>
                </Link>
              )}
              <HoverCard
                width={600}
                position="bottom-end"
                radius="md"
                shadow="md"
                withinPortal
                offset={-20}
                zIndex={999}
              >
                <HoverCard.Target>
                  <a href="#" className={lightLinks ? "lightLinks" : "link"}>
                    <h5>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Solutions
                        </Box>
                        <IconChevronDown size={16} />
                      </Center>
                    </h5>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                  <SimpleGrid cols={2} spacing={10}>
                    {landingdata?.map((item) => (
                      <NavigationLinks key={item.title} item={item} />
                    ))}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <Link
                to="/pentafox-portfolio"
                // to="/portfolio"
                className={lightLinks ? "lightLinks" : "link"}
              >
                <h5>Portfolio</h5>
              </Link>
              <HoverCard
                width={600}
                position="bottom-end"
                radius="md"
                shadow="md"
                withinPortal
                offset={-20}
                zIndex={999}
              >
                <HoverCard.Target>
                  <a href="#" className={lightLinks ? "lightLinks" : "link"}>
                    <h5>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Company
                        </Box>
                        <IconChevronDown size={16} />
                      </Center>
                    </h5>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                  <SimpleGrid cols={2} spacing={10}>
                    {companydata?.map((item) => (
                      <NavigationLinks key={item.title} item={item} />
                    ))}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              {/* Our Products */}
              <HoverCard
                width={600}
                position="bottom-end"
                radius="md"
                shadow="md"
                withinPortal
                offset={-20}
                zIndex={999}
              >
                <HoverCard.Target>
                  <a href="#" className={lightLinks ? "lightLinks" : "link"}>
                    <h5>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Our Products
                        </Box>
                        <IconChevronDown size={16} />
                      </Center>
                    </h5>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                  <SimpleGrid cols={2} spacing={12}>
                    {ourProductsdata?.map((item) => (
                      <NavigationLinks key={item.title} item={item} />
                    ))}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>

              <Link
                to="/contact-us"
                className={lightLinks ? "lightLinks" : "link"}
              >
                <p className="contactUs">Book a Demo</p>
              </Link>
            </div>

            <Burger
              // opened={drawerOpened}
              onClick={toggleDrawer}
              className="hidden-burger"
            />
          </div>
        </Box>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="left"
        size="300px"
        padding={0}
        withCloseButton={false}
        styles={{
          content: {
            borderRadius: 0,
          },
          body: {
            padding: 0,
          },
        }}
      >
        {/* Header */}
        <div className={classes.drawerHeader}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to="/">
              <LogoRedSVG height={isMobileDevice ? "60" : "90"} width="auto" />
            </Link>
            <div onClick={closeDrawer} className={classes.drawerCloseButton}>
              <IconX size={22} />
            </div>
          </div>
        </div>

        <ScrollArea h="calc(100vh - 90px)">
          <div style={{ padding: "8px 0" }}>
            <div>
              <UnstyledButton
                onClick={handleHomePage}
                className={classes.drawerMenuItem}
              >
                <span className={classes.mobileNavHeading}>Home</span>
              </UnstyledButton>
            </div>

            {/* Solutions Section */}
            <div>
              <UnstyledButton
                onClick={() => handleToggleSubNav("solution")}
                className={classes.drawerMenuItem}
              >
                <span className={classes.mobileNavHeading}>Solutions</span>
                <IconChevronDown
                  size={18}
                  style={{
                    transition: "transform 200ms",
                    transform: solutionsOpened
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    color: "#878787",
                  }}
                />
              </UnstyledButton>

              <Collapse in={solutionsOpened}>
                <div className={classes.drawerCollapseContent}>
                  {landingdata.map((item) => (
                    <NavigationLinks key={item.title} item={item} />
                  ))}
                </div>
              </Collapse>
            </div>

            {/* Portfolio Section */}
            <div>
              <UnstyledButton
                onClick={() => navigate("/pentafox-portfolio")}
                className={classes.drawerMenuItem}
              >
                <span className={classes.mobileNavHeading}>Portfolio</span>
              </UnstyledButton>
            </div>

            {/* Company Section */}
            <div>
              <UnstyledButton
                onClick={() => handleToggleSubNav("company")}
                className={classes.drawerMenuItem}
              >
                <span className={classes.mobileNavHeading}>Company</span>
                <IconChevronDown
                  size={18}
                  style={{
                    transition: "transform 200ms",
                    transform: companyOpened
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    color: "#878787",
                  }}
                />
              </UnstyledButton>
              {/* Our Products Section */}
              <div>
                <UnstyledButton
                  onClick={() => handleToggleSubNav("products")}
                  className={classes.drawerMenuItem}
                  style={{ width: "auto" }}
                >
                  <span className={classes.mobileNavHeading}>Our Products</span>
                  <IconChevronDown
                    size={18}
                    style={{
                      transition: "transform 200ms",
                      transform: productsOpened
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      color: "#878787",
                    }}
                  />
                </UnstyledButton>

                <Collapse in={productsOpened}>
                  <div className={classes.drawerCollapseContent}>
                    {ourProductsdata.map((item) => (
                      <NavigationLinks key={item.title} item={item} />
                    ))}
                  </div>
                </Collapse>
              </div>

              <Collapse in={companyOpened}>
                <div className={classes.drawerCollapseContent}>
                  {companydata.map((item) => (
                    <NavigationLinks key={item.title} item={item} />
                  ))}
                </div>
              </Collapse>
            </div>

            {/* Contact Us Button */}
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <Link
                to="/contact-us"
                onClick={closeDrawer}
                className={classes.mobileContactUsBtn}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Footer */}
          {/* <div className={classes.drawerFooter}>
            <div
              style={{
                fontSize: "14px",
                color: "#878787",
                marginBottom: "8px",
              }}
            >
              © {new Date().getFullYear()} Your Company
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <Link
                to="/privacy"
                onClick={closeDrawer}
                style={{
                  fontSize: "14px",
                  color: "#2874F0",
                  textDecoration: "none",
                }}
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                onClick={closeDrawer}
                style={{
                  fontSize: "14px",
                  color: "#2874F0",
                  textDecoration: "none",
                }}
              >
                Terms
              </Link>
            </div>
          </div> */}
        </ScrollArea>
      </Drawer>
    </HeaderWrapper>
  );
};

export default HeaderBar;
