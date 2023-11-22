import { Box, Container, Grid, Image } from "@mantine/core";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import OutfitWrapper from "../components/FontWrapperComp/OutfitWrapper";
import VarelaWrapper from "../components/FontWrapperComp/VarelaWrapper";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import SectionTitle from "../components/Title/SectionTitle";
import { window } from "browser-monads";

const Values = ({ title, value, image }) => {
  return (
    <Grid.Col
      md={3.5}
      sx={{
        border: "1.5px solid rgba(0,0,0,0.1)",
        borderRadius: 12,
        ":hover": {
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          transition: "all 0.3s ease-in-out",
        },
      }}
      my={15}
    >
      <Box p="md">
        <Box>
          <Image
            src={image}
            placeholder="tracedSVG"
            width={100}
            height={100}
            layout="constrained"
            objectFit="cover"
          />
        </Box>
        <Box>
          <OutfitWrapper style={{ fontWeight: 600, fontSize: "1.4rem" }}>
            {title}
          </OutfitWrapper>
          <VarelaWrapper style={{ fontSize: "1.1rem", marginTop: 8 }}>
            {value}
          </VarelaWrapper>
        </Box>
      </Box>
    </Grid.Col>
  );
};

const ImageWrapper = ({ image, name, designation }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: window.screen.width / 4,
        marginTop: 18,
      }}
      px={30}
    >
      <Box
        sx={{
          borderRadius: 130,
          padding: 8,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          overflow: "hidden",
        }}
      >
        <Image src={image} width={220} height={220} radius={110} />
      </Box>
      <OutfitWrapper
        style={{
          marginTop: 12,
          fontSize: 18,
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {name}
      </OutfitWrapper>
      <VarelaWrapper style={{ textAlign: "center" }}>
        {designation}
      </VarelaWrapper>
    </Box>
  );
};

const AboutUs = () => {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   let scrollPosition = 0;

  //   const interval = setInterval(() => {
  //     const scrollWidth = container.scrollWidth;
  //     const containerWidth = container.clientWidth;

  //     if (scrollPosition >= scrollWidth - containerWidth) {
  //       scrollPosition = 0;
  //     } else {
  //       scrollPosition += 1;
  //     }

  //     container.scrollLeft = scrollPosition;
  //   }, 25);

  //   return () => clearInterval(interval);
  // }, []);

  // const queryData = useStaticQuery(graphql`
  //   query MyQuery {
  //     allContentfulTeam(sort: { fields: createdAt }) {
  //       nodes {
  //         fullName
  //         designation
  //         profileImage {
  //           url
  //         }
  //       }
  //     }
  //     allContentfulOurValues(sort: { fields: createdAt }) {
  //       nodes {
  //         title
  //         iconImage
  //         description {
  //           description
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={true}
      headProps={{ pageTitle: "About Us" }}
    >
      <HomeWrapper>
        <PageWrapper>
          {/* <Box
            sx={{
              background:
                "linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%)",
            }}
          >
            <Container
              sx={{ height: "80vh", display: "flex", alignItems: "center" }}
              p={0}
              size={1300}
            >
              <Grid>
                <Grid.Col
                  span={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box>
                    <OutfitWrapper
                      style={{
                        fontSize: 70,
                        fontWeight: 800,
                        color: "whitesmoke",
                      }}
                    >
                      About us
                    </OutfitWrapper>
                    <VarelaWrapper
                      style={{ fontSize: 20, color: "whitesmoke" }}
                    >
                      Pentafox, a leading technology solutions provider that has
                      been serving clients globally since 2020. We are a team of
                      19 passionate individuals who are dedicated to delivering
                      innovative and reliable solutions to our clients.
                    </VarelaWrapper>
                  </Box>
                </Grid.Col>
                <Grid.Col span={6}>
                  <StaticImage
                    quality={100}
                    src={
                      "../images/Illustrations/DrawKit Vector Illustration Team Work (6).svg"
                    }
                    placeholder="tracedSVG"
                    backgroundColor="transparent"
                    objectFit="cover"
                  />
                </Grid.Col>
              </Grid>
            </Container>
          </Box> */}
          <Container
            size={1200}
            py={40}
            px={0}
            style={{height: '100vh', display: 'flex', alignItems: 'center'}}
          >
            <div>
              <SectionTitle title={"About Us"} />
              <div style={{height: '100%', display: 'flex', padding: 15, flexWrap: 'wrap', gap: 60}}>
                <div style={{position: 'relative'}}>
                  <h1 style={{fontSize: '3rem', color: 'rgba(0,0,0,0.3)', fontWeight: 700}}>Why us?</h1>
                  <svg viewBox="0 0 162 119" fill="none" xmlns="http://www.w3.org/2000/svg" width={70} style={{position: 'absolute', right: '40%', top: '6%'}}>
                    <path d="M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </div>
                <div style={{flex: 1, fontSize: "1.2rem", color: "rgba(0,0,0,0.6)", minWidth: 250}}>
                  <p>Welcome to Pentafox Technologies, the world's favorite digital transformation partner. We're a team of seasoned experts with a passion for modernizing businesses of all kinds. Our mission is to leverage the power of the cloud and incorporate embedded intelligence from a diverse set of AI/ML capabilities to deliver effective product solutions that meet our clients' unique needs.</p>
                  <p>At Pentafox, we believe that digital transformation is more than just a buzzword - it's a strategic imperative. Our team has years of experience helping companies across a wide range of industries navigate the complex process of digital transformation. We work closely with our clients to understand their unique challenges and develop tailored solutions that drive measurable results.</p>
                  <p>Our approach to digital transformation is rooted in a deep understanding of the latest technologies and industry trends. We combine cutting-edge tools and techniques with a focus on user experience to deliver solutions that are both innovative and practical.</p>
                  <p>But our success is not just about technology - it's about people. We're a team of passionate professionals who are dedicated to delivering exceptional service and building long-term relationships with our clients. We're proud to have a diverse team of experts from a range of backgrounds and experiences, united by a shared commitment to excellence.</p>
                  <p>Whether you're looking to streamline your operations, modernize your customer experience, or launch a new product, we're here to help. Contact us today to learn more about how we can help your business thrive in the digital age.</p>
                </div>
              </div>
            </div>
          </Container>
          {/* <Container sx={{ height: "100vh" }} size={1300} py={60}>
            <Center sx={{ flexDirection: "column" }}>
              <OutfitWrapper style={{ fontSize: 35, fontWeight: 600 }}>
                How it all started
              </OutfitWrapper>
              <VarelaWrapper style={{ fontSize: 20 }}>
                "Build a better mousetrap and the world will beat a path to your
                door."
              </VarelaWrapper>
            </Center>
            <Grid
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <Grid.Col span={6}>
                <StaticImage
                  src={"../images/Illustrations/illustration1.png"}
                  placeholder="tracedSVG"
                  width={500}
                  objectFit="cover"
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <VarelaWrapper style={{ fontSize: "1.2rem" }}>
                  We started our journey as a small team of three members, and
                  over the years, we have grown significantly to become a
                  renowned technology partner for businesses of all sizes. Our
                  growth has been a result of our unwavering commitment to
                  providing top-notch services and building long-lasting
                  relationships with our clients.
                </VarelaWrapper>
                <VarelaWrapper style={{ marginTop: 12, fontSize: "1.2rem" }}>
                  At Pentafox, we believe in delivering solutions that are not
                  only technologically advanced but also cost-effective and
                  scalable. We have helped numerous clients transform their
                  businesses by leveraging the latest technologies and trends.
                  Our services include software development, web development,
                  mobile application development, cloud solutions, and digital
                  marketing.
                </VarelaWrapper>
                <VarelaWrapper style={{ marginTop: 12, fontSize: "1.2rem" }}>
                  Our team comprises highly skilled and experienced
                  professionals who are committed to delivering quality work. We
                  work closely with our clients to understand their requirements
                  and provide tailored solutions that meet their specific needs.
                  Our expertise in cutting-edge technologies, coupled with our
                  industry experience, makes us a trusted partner for businesses
                  looking to leverage technology to stay ahead of the
                  competition.
                </VarelaWrapper>
                <VarelaWrapper style={{ marginTop: 12, fontSize: "1.2rem" }}>
                  Since our inception, we have grown four times in revenue,
                  which is a testament to our commitment to excellence and our
                  ability to deliver results. We are proud of our achievements,
                  and we remain committed to providing innovative solutions that
                  drive growth and success for our clients.
                </VarelaWrapper>
                <VarelaWrapper style={{ marginTop: 12, fontSize: "1.2rem" }}>
                  Thank you for considering Pentafox as your technology partner.
                  We look forward to working with you and helping you achieve
                  your business goals.
                </VarelaWrapper>
              </Grid.Col>
            </Grid>
          </Container> */}
          {/* <Box 
          // sx={{ backgroundColor: "#F4F4F4" }} 
          py={90}>
            <Container size={1300}>
              <Grid justify="space-evenly" align="space-evenly">
                <Grid.Col md={3.5} my={15}>
                  <Box>
                    <OutfitWrapper
                      style={{
                        fontSize: 40,
                        fontWeight: 800,
                      }}
                    >
                      Our Values
                    </OutfitWrapper>
                    <VarelaWrapper style={{ fontSize: "1.3rem" }}>
                      Our core guiding principles drive our daily decisions.
                    </VarelaWrapper>
                  </Box>
                </Grid.Col>
                {queryData?.allContentfulOurValues?.nodes?.map(
                  (item, index) => (
                    <Values
                      title={item?.title}
                      value={item?.description.description}
                      image={item?.iconImage}
                    />
                  )
                )}
              </Grid>
            </Container>
          </Box> */}

          {/* <Box>
            <Container size={1300} py={60} style={{position: 'relative'}}>
              <Center sx={{ flexDirection: "column" }}>
                <OutfitWrapper style={{ fontSize: 35, fontWeight: 600 }}>
                  Our Team
                </OutfitWrapper>
                <VarelaWrapper style={{ fontSize: 20, textAlign: "center" }}>
                  "Alone we can do so little, but together we can achieve
                  greatness." - Helen Keller
                </VarelaWrapper>
              </Center>
              <div style={{ position: 'absolute', width: '20%', left: 0, top: 0, height: '100%', zIndex: 99, background: 'linear-gradient(90deg, rgba(255,255,255,0.986453956582633) 19%, rgba(255,255,255,0.4486388305322129) 58%, rgba(255,255,255,0) 100%)'}} />
                <Box
                  ref={containerRef}
                  mt={60}
                  sx={{
                    display: "flex",
                    overflowX: "hidden",
                    overscrollBehavior: "contain",
                  }}
                >
                  {queryData?.allContentfulTeam?.nodes?.map((item, index) => {
                    return (
                      <ImageWrapper
                        image={item?.profileImage.url}
                        name={item?.fullName}
                        designation={item?.designation}
                      />
                    );
                  })}
                </Box>
              <div style={{ position: 'absolute', width: '10%', right: 0, top: 0, height: '100%', zIndex: 99, background: 'linear-gradient(-90deg, rgba(255,255,255,0.986453956582633) 19%, rgba(255,255,255,0.4486388305322129) 58%, rgba(255,255,255,0) 100%)'}} />
            </Container>
          </Box> */}
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default AboutUs;
