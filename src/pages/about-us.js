import { Box, Center, Container, Grid, Image } from "@mantine/core";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import OutfitWrapper from "../components/FontWrapperComp/OutfitWrapper";
import VarelaWrapper from "../components/FontWrapperComp/VarelaWrapper";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import PageWrapper from "../components/pageWrapper/PageWrapper";

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

  useEffect(() => {
    const container = containerRef.current;
    let scrollPosition = 0;

    const interval = setInterval(() => {
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;

      if (scrollPosition >= scrollWidth - containerWidth) {
        scrollPosition = 0;
      } else {
        scrollPosition += 1;
      }

      container.scrollLeft = scrollPosition;
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const queryData = useStaticQuery(graphql`
    query MyQuery {
      allContentfulTeam(sort: { fields: createdAt }) {
        nodes {
          fullName
          designation
          profileImage {
            # id
            url
          }
        }
      }
      allContentfulOurValues(sort: { fields: createdAt }) {
        nodes {
          title
          iconImage
          description {
            description
          }
        }
      }
    }
  `);

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={false}
      headProps={{ pageTitle: "About Us" }}
    >
      <HomeWrapper>
        <PageWrapper>
          <Box
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
          </Box>
          <Container sx={{ height: "100vh" }} size={1300} py={60}>
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
          </Container>
          <Box sx={{ backgroundColor: "#F4F4F4" }} py={90}>
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
          </Box>
          <Box>
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
              {/* </div> */}
            </Container>
          </Box>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default AboutUs;
