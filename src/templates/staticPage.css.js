import styled from "styled-components";

// Restores list markers + table styling that global resets
// (Tailwind v4 preflight, Bootstrap) strip off Contentful rich text.
export const RichTextWrapper = styled.div`
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.8);

  p {
    margin: 0 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2rem 0 1rem;
    font-weight: 600;
  }

  a {
    color: #cd0e11;
    text-decoration: underline;
  }

  ul,
  ol {
    margin: 0 0 1rem;
    padding-left: 1.5rem;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    margin: 0.25rem 0;
  }

  li > p {
    margin: 0;
  }

  blockquote {
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 3px solid #cd0e11;
    color: rgba(0, 0, 0, 0.6);
  }

  /* horizontal scroll for wide tables on small screens */
  .rich-text-table-scroll {
    width: 100%;
    overflow-x: auto;
    margin: 0 0 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.6rem 0.8rem;
    text-align: left;
    vertical-align: top;
  }

  th {
    background: #f5f5f5;
    font-weight: 600;
  }
`;
