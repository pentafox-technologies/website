import styled from "styled-components";
export const Wrapper = styled.div`
  background: white;
  padding: 0px 0;
  font-family: "Varela Round", sans-serif;

  /* ------ color variables -------- */
  --primary-red: #dc2b2b;
  --dark-red: #b91c1c;
  --light-red: #ffe9e9;
  --soft-light-red: #fffafa;
  --bg-soft-red: rgb(255, 245, 245);
  --white: #ffffff;
  --accent-green: #10b981;
  --green-light: #e5f7f1ff;
  --gray-light: #f1f4f99f;
  --gray-medium: #6b7280;
  --gray-dark: #374151;
  --challenge-indication-color: #ef4444ba;
  --solution-indication-color: #10b981ba;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --radius: 8px;

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
    // background: red;
  }

  /* HERO */
  .hero {
    padding: 40px 20px;
    text-align: center;
    margin-bottom: 60px;
    background: var(--bg-soft-red);
  }

  .hero h1 {
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-weight: 800;
    color: var(--primary-red);
  }

  .subtitle {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 20px auto 0;
    color: var(--gray-medium);
  }

  /* SECTIONS */
  .section {
    margin-bottom: 10px;
  }

  .project-section-title {
    display: block;
    text-align: start;
    padding-bottom: 5px;
  }

  /* GRID */
  .challenge-solution-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 10px;
  }

  .content {
    color: var(--gray-medium);
     font-size: 15px;
  }

  .challenge-box,
  .solution-box {
    background: var(--gray-light);
    padding: 20px;
    border-radius: var(--radius);
    border-top: 5px solid;

    // background: var(--bg-soft-red);
    // box-shadow: 3px 3px 7px #d1cdcd83;
    // border-radius: var(--radius);
    // box-shadow: var(--shadow);
  }

  .challenge-box {
    border-color: var(--challenge-indication-color);
    // background: var(--bg-soft-red);
  }

  .solution-box {
    border-color: var(--solution-indication-color);
    // background: var(--green-light);
  }

  .challenge-list,
  .solution-list {
    list-style: none; /* remove bullets */
    padding: 0; /* remove default ul padding */
    margin: 16px 0 0 0;
  }

  .challenge-list li,
  .solution-list li {
    padding: 0; /* no left padding */
    margin: 0 0 14px 0;
  }

  .meta-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .list-icon {
    flex-shrink: 0; /* prevent icon collapse */
    margin-top: 4px;
  }

  .challenge-list-icon-color {
    color: var(--challenge-indication-color);
  }
  .solution-list-icon-color {
    color: var(--solution-indication-color);
  }

  .capabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 567px));
    // grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 25px;
  }

  .capability-card {
    display: flex;
    align-items: center;
    background: var(--gray-light);
    padding: 15px;
    font-weight: 600;
    border-radius: var(--radius);

    // box-shadow: var(--shadow);
  }

  .capability-card.with-icon {
    justify-content: center;
    gap: 20px;
  }

  .capability-card.with-left-border {
    border-left: 4px solid var(--accent-green);
  }

  .card-icon {
    background: white;
    border-radius: 7px;
    padding: 1px;
  }

  .card-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    color: var(--gray-medium);
    font-weight: 500;
  }
  .card-container-heading {
    font-weight: 700;
    color: black;
  }

  /* METRICS */
  .impact-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 567px));
    // grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
  }

  .metric-card {
    background: var(--gray-light);
    padding: 15px;
    text-align: center;
    border-radius: var(--radius);
    // border-top: 5px solid var(--accent-green);
  }

  .metric-value {
    font-size: 2.2rem;
    font-weight: 800;
  }

  /* OUTCOMES */
  .outcomes-list {
    list-style: none;
    padding: 0;
  }

  .outcomes-list li {
    display: flex;
    padding: 15px;
    font-weight: 600;
    border-radius: var(--radius);
    background: var(--gray-light);
    margin-bottom: 15px;
    border-left: 4px solid var(--accent-green);
  }

  .outcome-card-icon {
    width: 5%;
  }

  /* FOOTER */
  .footer {
    background: var(--dark-red);
    color: white;
    text-align: center;
    padding: 40px 20px;
    border-radius: 20px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    padding: 30px 0;

    .hero {
      padding: 60px 15px;
    }

    .metric-value {
      font-size: 1.8rem;
    }
  }
`;

