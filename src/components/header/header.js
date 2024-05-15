import React from "react";
import IsMobile from "../../helpers/IsMobile";
import LogoSVG from "../../images/logo-pf-white.svg";
import LogoRedSVG from "../../images/logo-pf-red.svg";
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
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Container,
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
    aitems: center;
    justify-content: flex-end;
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

const HeaderBar = ({
  showDarkLogo = true,
  headerColor = "#FFFFFF",
  lightLinks = false,
  showHome = true,
  showBanner = true,
}) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleSolutions }] = useDisclosure(false);
  const [portfolioOpened, { toggle: togglePortfolio }] = useDisclosure(false);
  const [companyLinksOpened, { toggle: toggleCompany }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const NavigationLinks = ({ item }) => {
    // Construct the link dynamically based on whether pageRoute and sectionId are defined.
    const linkTo =
      item.pageRoute && item.sectionId
        ? `${item.pageRoute}${item.sectionId}`
        : item.pageRoute;

    return (
      <Link to={linkTo} onClick={closeDrawer}>
        <UnstyledButton className={classes.subLink} key={item.title}>
          <Group noWrap align="flex-start">
            <ThemeIcon size={34} variant="default" radius="md">
              <item.icon size={20} style={{ color: "#CD0E11" }} />
            </ThemeIcon>
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
      </Link>
    );
  };

  return (
    <HeaderWrapper>
      <Box style={{ backgroundColor: headerColor }} withBorder={false}>
        {showBanner && (
          <div className="banner" onClick={() => navigate("/funded")}>
            <div className="bannerContent">
              <div className="bannerText">
                <div>
                  <IconSparkles />
                </div>
                <Text pl={10}>
                  Pentafox Technologies Secures Seed Investment from Pentagon
                  Group, Mumbai. 🎉
                </Text>
              </div>
              <div
                className="bannerBtn"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text>READ MORE</Text>
                <IconArrowRight size={16} />
              </div>
            </div>
          </div>
        )}
        <Box className="header">
          {/* <Container size={1200} style={{height: '100%'}}> */}
          <div className="header-content">
            {/* <Group position="apart" sx={{ height: '100%' }}> */}
            <Link to="/">
              {showDarkLogo ? (
                <LogoRedSVG height={isMobileDevice ? "30" : "60"} width="200" />
              ) : (
                <LogoSVG height={isMobileDevice ? "30" : "60"} width="200" />
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
                to="/portfolio"
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
            </div>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className="hidden-burger"
            />
          </div>
        </Box>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={<LogoRedSVG width="120" />}
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - 90px)`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link>
            <a href="/" className={classes.link}>
              Home
            </a>
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleSolutions}>
            <Center inline>
              <Box component="span" mr={5}>
                Solutions
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            {landingdata?.map((item) => (
              <NavigationLinks key={item.title} item={item} />
            ))}
          </Collapse>

          <UnstyledButton className={classes.link} onClick={togglePortfolio}>
            <Center inline>
              <Box component="span" mr={5}>
                Portfolio
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={portfolioOpened}>
            {mockdata?.map((item) => (
              <NavigationLinks key={item.title} item={item} />
            ))}
          </Collapse>

          <UnstyledButton className={classes.link} onClick={toggleCompany}>
            <Center inline>
              <Box component="span" mr={5}>
                Company
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={companyLinksOpened}>
            {companydata?.map((item) => (
              <NavigationLinks key={item.title} item={item} />
            ))}
          </Collapse>
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
        </ScrollArea>
      </Drawer>
    </HeaderWrapper>
  );
};

export default HeaderBar;
