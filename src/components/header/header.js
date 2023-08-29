import React from 'react';
import IsMobile from '../../helpers/IsMobile';
import LogoSVG from '../../images/logo-pf-white.svg';
import LogoRedSVG from '../../images/logo-pf-red.svg';
import { Link } from 'gatsby';

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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconCurrencyRipple,
  IconBrain,
  IconCloudComputing,
  IconServerCog,
  IconChartBar,
  IconUsersGroup,
  IconFileDescription,
  IconNotebook
} from '@tabler/icons-react';

const isMobileDevice = IsMobile();


const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },
  lightLinks: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: '120px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    // padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    padding: 10,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const mockdata = [
  {
    icon: IconCurrencyRipple,
    title: 'Digital Mobility',
    description: 'Embrace Digital Mobility',
    pageRoute: '/digital-mobility',
    // sectionId: '#content-section-0-digital-mobility',
  },
  {
    icon: IconCloudComputing,
    title: 'Cloud Engineering',
    description: 'Empowering Innovation through Cloud Engineering',
    pageRoute: '/cloud-engineering',
    // sectionId: '#content-section-1-cloud-engineering',
  },
  {
    icon: IconBrain,
    title: 'Machine Learning',
    description: 'Unlocking the Power of Machine Learning',
    pageRoute: '/machine-learning',
    // sectionId: '#content-section-2-machine-learning',
  }
];

const landingdata = [
  {
    icon: IconServerCog,
    title: 'Platform Engineering',
    description: 'Embrace Digital Mobility',
    pageRoute: '/',
    sectionId: '#content-section-0',
  },
  {
    icon: IconChartBar,
    title: 'Digital Strategy',
    description: 'Empowering Innovation through Cloud Engineering',
    pageRoute: '/',
    sectionId: '#content-section-1',
  },
  {
    icon: IconBrain,
    title: 'Machine Learning',
    description: 'Unlocking the Power of Machine Learning',
    pageRoute: '/',
    sectionId: '#content-section-2',
  }
];

const companydata = [
  {
    icon: IconUsersGroup,
    title: 'About',
    description: 'Learn more about our mission, values and team',
    pageRoute: '/about-us',
    // sectionId: '#content-section-0',
  },
  {
    icon: IconFileDescription,
    title: 'Careers',
    description: "See what's its like to work with at Pentafox and explore open positions",
    pageRoute: '/careers',
    // sectionId: '#content-section-0',
  },
  {
    icon: IconNotebook,
    title: 'Internship',
    description: "Join our 4-Week Internship program and gain hands-on experience",
    pageRoute: '/internship',
    // sectionId: '#content-section-0',
  },
]

const HeaderBar = ({ showDarkLogo=true, headerColor = '#FFFFFF', lightLinks = false, showHome = true }) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleSolutions }] = useDisclosure(false);
  const [portfolioOpened, { toggle: togglePortfolio }] = useDisclosure(false);
  const [companyLinksOpened, { toggle: toggleCompany }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const NavigationLinks = ({ item }) => {
    // Construct the link dynamically based on whether pageRoute and sectionId are defined.
    const linkTo = item.pageRoute && item.sectionId ? `${item.pageRoute}${item.sectionId}` : item.pageRoute;
  
    return (
      <Link to={linkTo} onClick={closeDrawer}>
        <UnstyledButton className={classes.subLink} key={item.title}>
          <Group noWrap align="flex-start">
            <ThemeIcon size={34} variant="default" radius="md">
              <item.icon size={20} color='red' />
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
    <Box>
      <Header height={90} 
      style={{backgroundColor: headerColor}}
      withBorder={false}>
        <Container size={1200} style={{height: '100%'}}>
          <Group position="apart" sx={{ height: '100%' }}>
            <Link to="/">
              {
                showDarkLogo ?
                  <LogoRedSVG height={isMobileDevice ? '30' : '60'} width="200" />
                  : <LogoSVG height={isMobileDevice ? '30' : '60'} width="200" />
              }
            </Link>

            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
              {/* <Link to='/' className={lightLinks ? classes.lightLinks : classes.link}>
                <h5>
                  Products
                </h5>
              </Link> */}
              {
                showHome && (
                  <Link to='/' className={lightLinks ? classes.lightLinks : classes.link}>
                    <h5>
                      Home
                    </h5>
                  </Link>
                )
              }
              <HoverCard width={600} position="bottom-end" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={lightLinks ? classes.lightLinks : classes.link}>
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

                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                  <Group position="apart" px="md">
                    <Text fw={900}>Solutions</Text>
                    {/* <Anchor href="#" fz="xs">
                      View all
                    </Anchor> */}
                  </Group>

                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />

                  <SimpleGrid cols={2} spacing={10}>
                    {
                      landingdata?.map((item) => (
                        <NavigationLinks key={item.title} item={item} />
                      ))
                    }
                  </SimpleGrid>

                  {/* <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />
                  <Group position="apart" px="md">
                    <Text fw={900}>Portfolio</Text>
                    <Link to='/portfolio'>
                      <Anchor href="#" fz="xs">
                        View all
                      </Anchor>
                    </Link>
                  </Group>
                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  /> */}

                  {/* <SimpleGrid cols={2} spacing={10}>
                    {
                      mockdata?.map((item) => (
                        <NavigationLinks key={item.title} item={item} />
                      ))
                    }
                  </SimpleGrid> */}
                </HoverCard.Dropdown>
              </HoverCard>
              <Link to='/portfolio' className={lightLinks ? classes.lightLinks : classes.link}>
                <h5>
                  Portfolio
                </h5>
              </Link>
              {/* <a href="#" className={lightLinks ? classes.lightLinks : classes.link}>
                <h5>
                  Resources
                </h5>
              </a> */}
              {/* <a href="#" className={lightLinks ? classes.lightLinks : classes.link}>
                <h5>
                  Company
                </h5>
              </a> */}
              <HoverCard width={600} position="bottom-end" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={lightLinks ? classes.lightLinks : classes.link}>
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

                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                  <Group position="apart" px="md">
                    <Text fw={900}>Company</Text>
                  </Group>

                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />

                  <SimpleGrid cols={2} spacing={10}>
                    {
                      companydata?.map((item) => (
                        <NavigationLinks key={item.title} item={item} />
                      ))
                    }
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          </Group>
        </Container>
      </Header>

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
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

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
            {
              landingdata?.map((item) => (
                <NavigationLinks key={item.title} item={item} />
              ))
            }
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
            {
              mockdata?.map((item) => (
                <NavigationLinks key={item.title} item={item} />
              ))
            }
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
            {
              companydata?.map((item) => (
                <NavigationLinks key={item.title} item={item} />
              ))
            }
          </Collapse>

          {/* <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a> */}

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderBar;
