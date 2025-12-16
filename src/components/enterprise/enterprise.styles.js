import styled from "styled-components";

export const EnterpriseStyles = styled.div`
  padding: 60px 0;
  font-family: Varela Round, sans-serif !important;

  /* ================= FILTER TABS ================= */
  .filters {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 60px;
    flex-wrap: wrap;
  }

  .filter {
    padding: 14px 32px;
    border-radius: 999px;
    background: white;
    border: 1px solid rgba(220, 43, 43, 0.15);
    font-weight: 600;
    font-size: 15px;
    color: #475569;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .filter:hover {
    transform: translateY(-2px);
  }

  .filter.active {
    background: #dc2b2b;
    color: white;
    border-color: #dc2b2b;
    box-shadow: 0 14px 34px rgba(220, 43, 43, 0.35);
  }

  /* ================= GRID ================= */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 32px;
  }

  /* ================= CARD ================= */
  .card {
    background: rgb(255, 245, 245);
    font-family: Varela Round, sans-serif !important;
    border-radius: 16px;
    border: 1px solid rgba(220, 43, 43, 0.12);
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 26px 60px rgba(0, 0, 0, 0.12);
  }

  /* ================= HEADER ================= */
  .cardHeader {
    padding: 28px;
    border-bottom: 1px solid rgba(220, 43, 43, 0.08);
  }

  .titleRow {
    display: flex;
    justify-content: space-between;
    gap: 14px;
  }

  .titleRow h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2b2b2b;
    line-height: 1.3;
  }

  .client {
    background: rgb(255, 245, 245);
    color: #dc2b2b;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 999px;
    font-size: 0.85rem;
    height: fit-content;
  }

  .description {
    margin-top: 14px;
    color: #5f5f5f;
    font-size: 1rem;
    line-height: 1.65;
  }

  /* ================= BODY ================= */
  .cardBody {
    padding: 28px;
  }

  .sectionTitle {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #dc2b2b;
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 20px;
  }

  .icon {
    font-size: 18px;
    color: #dc2b2b;
  }

  /* ================= LIST ================= */
  .capabilities {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .capabilities li {
    padding-left: 22px;
    position: relative;
    margin-bottom: 14px;
    color: #333333;
    line-height: 1.65;
    font-size: 0.95rem;
  }

  .capabilities li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #dc2b2b;
    font-size: 22px;
    line-height: 1;
  }

  /* ================= RESPONSIVE ================= */
  @media (max-width: 768px) {
    padding: 40px 0;

    .grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .titleRow h3 {
      font-size: 1.3rem;
    }
  }
`;

// import styled from "styled-components";

// export const EnterpriseStyles = styled.div`
//   padding: 60px 0;

//   /* FILTERS */
//   .filters {
//     display: flex;
//     justify-content: center;
//     gap: 16px;
//     margin-bottom: 60px;
//     flex-wrap: wrap;
//   }

//   .filter {
//     padding: 14px 30px;
//     border-radius: 999px;
//     background: #ffffff;
//     border: none;
//     font-weight: 600;
//     font-size: 15px;
//     color: #475569;
//     box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
//     cursor: pointer;
//     transition: 0.25s;
//   }

//   .filter.active {
//     background: #2563eb;
//     color: white;
//     box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
//   }

//   /* GRID */
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
//     gap: 32px;
//   }

//   /* CARD */
//   .card {
//     background: white;
//     border-radius: 14px;
//     border: 1px solid #e5e7eb;
//     overflow: hidden;
//     transition: 0.3s;
//   }

//   .card:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 24px 50px rgba(0, 0, 0, 0.1);
//   }

//   .cardHeader {
//     padding: 28px;
//     border-bottom: 1px solid #eef2f7;
//   }

//   .titleRow {
//     display: flex;
//     justify-content: space-between;
//     gap: 14px;
//   }

//   .titleRow h3 {
//     font-size: 1.5rem;
//     font-weight: 700;
//     color: #0f172a;
//   }

//   .client {
//     background: #e0f2fe;
//     color: #2563eb;
//     font-weight: 600;
//     padding: 6px 16px;
//     border-radius: 999px;
//     font-size: 0.85rem;
//     height: fit-content;
//   }

//   .description {
//     margin-top: 12px;
//     color: #64748b;
//     font-size: 1rem;
//     line-height: 1.6;
//   }

//   .cardBody {
//     padding: 28px;
//   }

//   .sectionTitle {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     color: #2563eb;
//     font-weight: 700;
//     margin-bottom: 20px;
//   }

//   .icon {
//     font-size: 18px;
//   }

//   .capabilities {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   .capabilities li {
//     padding-left: 22px;
//     position: relative;
//     margin-bottom: 14px;
//     color: #334155;
//     line-height: 1.6;
//   }

//   .capabilities li::before {
//     content: "•";
//     position: absolute;
//     left: 0;
//     color: #22c55e;
//     font-size: 22px;
//     line-height: 1;
//   }
// `;
