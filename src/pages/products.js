import React from "react";
import { Button } from "react-bootstrap";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import PageWrapper, {
  ProductsWrapper,
  TopSectionWrapper,
} from "../components/pageWrapper/PageWrapper";
import ProductContent from "../components/productSection/productSection";

const products = () => {
  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={false}
      headProps={{ pageTitle: "Products" }}
    >
      <HomeWrapper>
        <PageWrapper>
          <ProductsWrapper>
            <div className="container lg-container">
              <h1>
                Loan
                <br />
                Management
                <br />
                System.
                <br />
                Streamlined.
              </h1>
              <p>
                Meet the lending challenges of today and tomorrow
                <br />
                with custom designed solutions, trusted by industry experts.
              </p>
            </div>
            {/* <div className="container sm-container">
                <img
                    width="100%"
                    style={{objectFit: 'contain'}}
                    src='https://i.imgur.com/ClKMFO9.jpg'
                />
            </div> */}
          </ProductsWrapper>
          <div style={{ paddingTop: 70, width: "80%", margin: "auto" }}>
            <h1 style={{ textAlign: "center" }}>
              Loan Management System Which Answers These Challenges
            </h1>

            <ProductContent contentRight={false} />
            <ProductContent contentRight={true} />
            <ProductContent contentRight={false} />
            <ProductContent contentRight={true} />
          </div>
          <div
            style={{ backgroundColor: "#F4F4F4", textAlign: "center", padding: 50 }}
            // className="container lg-container"
          >
            <h2>Pentafox Lending Cloud</h2>
            <p>
              Did you know that Pentafox offers a free proof of concept (POC)?
              Contact us to get started.
            </p>
            <Button>Schedule a Demo</Button>
          </div>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default products;
