//head_section
import teamImage from "../about_assets/team_members.png";
import star1 from "../about_assets/Star1.png";
import star2 from "../about_assets/Star2.png";
import star3 from "../about_assets/Star3.png";
import star4 from "../about_assets/Star4.png";

//Journey_section
import First from "../about_assets/Third.png";
import Second from "../about_assets/Second.png";
import Third from "../about_assets/First.png";
import above from "../about_assets/above.png";
import parent from "../about_assets/parent.png";
import child from "../about_assets/child.png";

//leadership_section
import leadershipImage from "../about_assets/Founders.png";
import Founder_name1 from "../about_assets/Founder_name1.png";
import Founder_name2 from "../about_assets/Founder_name2.png";
import Founder_name3 from "../about_assets/Founder_name3.png";

//teams_section
import Employee1 from "../about_assets/Employee_asset1.png";
import Employee2 from "../about_assets/Employee_asset2.png";
import Employee3 from "../about_assets/Employee_asset3.png";
import Employee4 from "../about_assets/Employee_asset4.png";
import Employee5 from "../about_assets/Employee_asset5.png";
import Employee6 from "../about_assets/Employee_asset6.png";
import Employee7 from "../about_assets/Employee_asset7.png";
import Employee8 from "../about_assets/Employee_asset8.png";

//pentafox_section
import Events1 from "../about_assets/Event_Frame1.png";
import Events2 from "../about_assets/Event_Frame2.png";
import Events3 from "../about_assets/Event_Frame3.png";
import Events4 from "../about_assets/Event_Frame4.png";
import Events5 from "../about_assets/Event_Frame5.png";

export const aboutPageData = {
  headSectionData: {
    heading: "Driven by Innovation, Powered by People",
    description:
      "Your trusted digital transformation partner — modernizing businesses with cloud, AI, and human-centered innovation.",
    ctaText: "Let’s transform together",
    ctaLink: "/careers",
    images: {
      team: teamImage,
      star1: star1,
      star2: star2,
      star3: star3,
      star4: star4,
    },
  },
  journeyData: {
    heading: "Our Journey",
    subheading: "Shaping Tomorrow, Step by Step",
    letters: "Pentafox",
    images: {
      first: First,
      second: Second,
      third: Third,
      above: above,
      parent: parent,
      child: child,
    },
    steps: [
      {
        year: 2016,
        icon: "IconHeart",
        title: "Innovation",
        subtitle: "Driving digital ecosystems.",
        points: ["Tech + People", "Creative Flow", "Impact Delivery"],
      },
      {
        year: 2017,
        icon: "IconTrophy",
        title: "Our Mission",
        subtitle: "Delivering value at scale.",
        points: ["Excellence", "Client Focus", "Scalable Tech"],
      },
      {
        year: 2018,
        icon: "IconThumbUp",
        title: "Trust First",
        subtitle: "People-first always.",
        points: ["Integrity", "Well-being", "Empathy"],
      },
      {
        year: 2019,
        icon: "IconStar",
        title: "Quality",
        subtitle: "Exceptional delivery.",
        points: ["QA Processes", "Design Systems", "Testing Culture"],
      },
      {
        year: 2020,
        icon: "IconRocket",
        title: "Speed",
        subtitle: "Go-to-market fast.",
        points: ["Agile Teams", "Rapid Prototyping", "Automation"],
      },
      {
        year: 2021,
        icon: "IconTarget",
        title: "Focus",
        subtitle: "Sharp strategic goals.",
        points: ["OKRs", "KPIs", "Clarity in Vision"],
      },
      {
        year: 2022,
        icon: "IconBulb",
        title: "Ideas",
        subtitle: "Innovation at the core.",
        points: ["Hackathons", "Feedback Loops", "Product Labs"],
      },
      {
        year: 2023,
        icon: "IconBolt",
        title: "Power",
        subtitle: "Boosting capabilities.",
        points: ["Infrastructure", "Cloud Ops", "Performance"],
      },
      {
        year: 2024,
        icon: "IconAward",
        title: "Recognition",
        subtitle: "We value achievement.",
        points: ["Internal Awards", "External Certifications", "Peer Reviews"],
      },
      {
        year: 2025,
        icon: "IconChartLine",
        title: "Growth",
        subtitle: "Scale without compromise.",
        points: ["Hiring Smart", "Retention", "Expansion"],
      },
    ],
  },
  coreValuesData: {
    title: "Our Core Values",
    subtitle:
      "Shaping Tomorrow At Pentafox, our values guide every decision, partnership, and solution we deliver. Step by Step",
    values: [
      {
        icon: "IconBulb",
        title: "Innovation First",
        text: "Driving progress through new technologies.",
      },
      {
        icon: "IconUsers",
        title: "People-Centered",
        text: "Putting clients and users at the heart of every solution.",
      },
      {
        icon: "IconShieldLock",
        title: "Integrity & Trust",
        text: "Building transparency and accountability in all we do.",
      },
      {
        icon: "IconHeartHandshake",
        title: "Collaboration",
        text: "Achieving more together through teamwork and partnerships.",
      },
      {
        icon: "IconStar",
        title: "Excellence in Execution",
        text: "Delivering measurable results with quality.",
      },
      {
        icon: "IconLeaf",
        title: "Sustainability & Responsibility",
        text: "Creating solutions with long-term positive impact.",
      },
    ],
  },
  leadershipData: {
    title: "Our Leadership",
    description:
      "Behind every transformation we deliver is a team of visionary leaders driving innovation and excellence.",
    mainImage: leadershipImage,
    founders: [
      { img: Founder_name1, alt: "Founder 1" },
      { img: Founder_name2, alt: "Founder 2" },
      { img: Founder_name3, alt: "Founder 3" },
    ],
    rightSection: {
      title: "Leading with Vision",
      text: `At Pentafox, our leaders bring together technology expertise and strategic foresight
    to guide organizations through their digital transformation journey. With a focus on innovation,
    collaboration, and excellence, they inspire our teams to deliver meaningful impact for every client we serve.`,
    },
  },
  teamData: {
    title: "Meet our team",
    description:
      "Meet our diverse team of world-class creators, designers and problem solvers",
    categories: [
      "View all",
      "Management",
      "Development",
      "Design",
      "Sales",
      "Operations",
    ],
    members: [
      {
        id: 1,
        name: "Employee name",
        role: "Role",
        category: "Management",
        img: [Employee1, Employee8],
      },
      {
        id: 2,
        name: "Employee name",
        role: "Role",
        category: "Development",
        img: [Employee2, Employee5],
      },
      {
        id: 3,
        name: "Employee name",
        role: "Role",
        category: "Design",
        img: [Employee3, Employee7],
      },
      {
        id: 4,
        name: "Employee name",
        role: "Role",
        category: "Sales",
        img: [Employee4, Employee2],
      },
      {
        id: 5,
        name: "Employee name",
        role: "Role",
        category: "Operations",
        img: [Employee5, Employee4],
      },
      {
        id: 6,
        name: "Employee name",
        role: "Role",
        category: "Development",
        img: [Employee6, Employee2],
      },
      {
        id: 7,
        name: "Employee name",
        role: "Role",
        category: "Design",
        img: [Employee7, Employee3],
      },
      {
        id: 8,
        name: "Employee name",
        role: "Role",
        category: "Sales",
        img: [Employee8, Employee1],
      },
      {
        id: 9,
        name: "Employee name",
        role: "Role",
        category: "Management",
        img: [Employee4, Employee2],
      },
      {
        id: 10,
        name: "Employee name",
        role: "Role",
        category: "Development",
        img: [Employee7, Employee3],
      },
      {
        id: 11,
        name: "Employee name",
        role: "Role",
        category: "Operations",
        img: [Employee3, Employee7],
      },
      {
        id: 12,
        name: "Employee name",
        role: "Role",
        category: "Sales",
        img: [Employee6, Employee2],
      },
      {
        id: 13,
        name: "Employee name",
        role: "Role",
        category: "Operations",
        img: [Employee2, Employee5],
      },
      {
        id: 14,
        name: "Employee name",
        role: "Role",
        category: "Development",
        img: [Employee5, Employee4],
      },
      {
        id: 15,
        name: "Employee name",
        role: "Role",
        category: "Development",
        img: [Employee1, Employee8],
      },
    ],
  },
  pentafoxData: {
    title: "Life at Pentafox",
    subtitle: "Shaping Tomorrow, Step by Step",
    topImages: [
      { src: Events1, alt: "Event 1" },
      { src: Events2, alt: "Event 2" },
    ],
    bottomImages: [
      { src: Events3, alt: "Event 3" },
      { src: Events4, alt: "Event 4" },
      { src: Events5, alt: "Event 5" },
    ],
  },
};
