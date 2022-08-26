import React from "react";

const ProductContent = ({contentRight}) => {
    console.log(contentRight);
  return (
    <div
      style={{
        // textAlign: "center",
        padding: '20px 70px',
      }}
    >
      {/* <h2>Loan Management System Which Answers These Challenges</h2> */}
      <div style={{ display: "flex", paddingTop: 50, textAlign: "left", flexDirection: contentRight ? 'row-reverse' : 'row' }}>
        <div className="container"></div>
        <div className="container" style={{ padding: "0px 30px" }}>
          <h3 style={{fontSize: '1.6rem'}}>Design customized lending products your customers will love.</h3>
          <p style={{ paddingTop: 12, fontSize: "1.1rem" }}>
            Craft customized lending products for every customer, by leveraging
            our BYOS architecture and stand apart from your competitors by
            seamlessly integrating dynamic pricing and flexible repayment
            options in every loan product.
          </p>
          <ul
            className="list-unstyled"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <li style={{ minWidth: "50%", paddingTop: 12 }}>
              Buy Now Pay later | Line of Credit
            </li>
            <li style={{ minWidth: "50%", paddingTop: 12 }}>Co-Lending</li>
            <li style={{ minWidth: "50%", paddingTop: 12 }}>
              Reporting Dashboard
            </li>
            <li style={{ minWidth: "50%", paddingTop: 12 }}>
              Flexible Loan Product Constructs
            </li>
            <li style={{ minWidth: "50%", paddingTop: 12 }}>Co-Lending</li>
            <li style={{ minWidth: "50%", paddingTop: 12 }}>
              Reporting Dashboard
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
