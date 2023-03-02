import React from 'react';
import { Box, Center, createStyles, Image } from '@mantine/core';
import { ContentSectionWrapper } from './contentSection.css';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  leftImg: {
    width: 210,
    position: 'absolute', zIndex: 999, top: 130, left: 20,
    [theme.fn.smallerThan('md')]: {
      top: 30,
      width: 90,
    }
  },
  rightImg: {
    width: 220,
    position: 'absolute', right: 20, bottom: 30, zIndex: 99,
    [theme.fn.smallerThan('md')]: {
      bottom: 35,
      width: 200,
    }
  }

}))

const ContentSection = ({
  id,
  heading,
  description,
  rightSide,
  listWithIcons,
  serviceStock,
  image1,
  image2,
  category
}) => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 990px)')
  return (
    <Center>
      <ContentSectionWrapper id={`content-section-${id}`} rightSideStyle={rightSide}>
        <div className="container lg-container">
          <div className="middle-content">
            <div className="left-col">
              <h3>{heading}</h3>
              <p>{description}</p>

              {listWithIcons ?
                <ul className="clearfix list-unstyled list-card">
                  {category.map((item, i) => {
                      return (
                        <li key={i}>
                          <img src={item.icon} width={40} style={{position: 'absolute', top: 0, left: 0}} />
                          <span>{item.title}</span>
                          {item.description}
                        </li>
                      );
                    })}
                </ul>
              : null}
            </div>

            <div className="right-col">
              <div className="image-card">
                <Box className={classes.leftImg}>
                  <Image
                    src={image1}
                    height={matches ? 120 : 220}
                    radius='sm'
                  />
                </Box>
                <Box className={classes.rightImg}>
                  <Image
                    src={image2}
                    // width={220}
                    height={matches ? 140 : 300}
                    radius='sm'
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </ContentSectionWrapper>
    </Center>
  );
};

export default ContentSection;
