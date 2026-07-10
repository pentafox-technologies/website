import styled from "styled-components";
import { sm, md, xs } from "../../helpers/device";

export const PartnerProductsWrapper = styled.div`
  --accent: #cd0e11;
  --accent-deep: #a22121;
  --ink: #292733;
  --muted: #6b7280;
  --line: #e9e6e1;
  --panel: #292733;

  font-family: 'Varela Round', sans-serif;
  color: var(--ink);

  .pp-section {
    padding: 48px 0;
    ${sm} {
      padding: 72px 0;
    }
  }

  /* ============================================
     SECTION 1 — Combined Hero
     ============================================ */

  .hero-product {
    background: #ffffff;
    text-align: center;
    padding: 40px 0 48px;
    ${sm} {
      padding: 56px 0 72px;
    }
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(205, 14, 17, 0.08);
    color: var(--accent);
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
  .hero-eyebrow::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
  }

  .hero-product .logo {
    height: 56px;
    width: auto;
    object-fit: contain;
    margin: 24px 0 20px;
    ${sm} {
      height: 68px;
    }
  }

  .hero-product h1 {
    font-family: 'Outfit', sans-serif;
    font-size: 30px;
    line-height: 1.12;
    font-weight: 700;
    color: var(--ink);
    margin: 0 auto;
    max-width: 18ch;
    ${sm} {
      font-size: 48px;
    }
  }
  .hero-product h1 em {
    font-style: normal;
    color: var(--accent);
  }

  .hero-product .lede {
    font-family: 'Varela Round', sans-serif;
    max-width: 56ch;
    margin: 18px auto 0;
    font-size: 16px;
    line-height: 1.7;
    color: var(--muted);
  }

  /* language strip */
  .lang-strip {
    margin: 28px auto 0;
    padding: 16px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    align-items: baseline;
    justify-content: center;
    max-width: 600px;
  }
  .lang-strip .greet {
    font-size: 18px;
    color: var(--ink);
    opacity: 0.82;
  }
  .lang-strip .plus {
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: var(--muted);
    align-self: center;
  }

  /* partner credit line */
  .partner-credit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
    font-family: 'Varela Round', sans-serif;
    font-size: 14px;
    color: var(--muted);
  }
  .partner-credit a {
    color: var(--accent);
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: gap 0.2s ease;
  }
  .partner-credit a:hover {
    gap: 10px;
  }

  /* ============================================
     SECTION 2 — Tabbed Capabilities + How it Works
     ============================================ */

  .capabilities-section {
    background: #F4F4F4;
  }

  .capabilities-header {
    margin-bottom: 32px;
  }
  .capabilities-header .pp-label {
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }
  .capabilities-header h2 {
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.15;
    color: var(--ink);
    margin: 0;
    ${sm} {
      font-size: 30px;
    }
  }

  /* Tab layout */
  .tab-layout {
    display: flex;
    flex-direction: column;
    gap: 0;
    ${sm} {
      flex-direction: row;
      gap: 40px;
      align-items: stretch;
    }
  }

  .tab-nav {
    display: flex;
    flex-direction: row;
    gap: 0;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    ${sm} {
      flex-direction: column;
      gap: 0;
      flex: 0 0 260px;
      overflow-x: visible;
    }
  }

  .tab-btn {
    font-family: 'Outfit', sans-serif;
    background: none;
    border: none;
    padding: 14px 20px;
    font-size: 15px;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    text-align: left;
    white-space: nowrap;
    border-bottom: 3px solid transparent;
    transition: all 0.2s ease;
    ${sm} {
      white-space: normal;
      border-bottom: none;
      border-left: 3px solid transparent;
      padding: 16px 20px;
    }
  }
  .tab-btn:hover {
    color: var(--ink);
  }
  .tab-btn.active {
    color: var(--ink);
    border-bottom-color: var(--accent);
    background: rgba(255, 255, 255, 0.6);
    ${sm} {
      border-bottom-color: transparent;
      border-left-color: var(--accent);
    }
  }

  .tab-content {
    flex: 1;
    background: #fff;
    border-radius: 14px;
    padding: 28px 24px;
    margin-top: 16px;
    border: 1px solid var(--line);
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${sm} {
      margin-top: 0;
      padding: 32px 36px;
    }
  }
  .tab-content h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--ink);
    margin: 0 0 10px;
  }
  .tab-content p {
    font-family: 'Varela Round', sans-serif;
    margin: 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.7;
  }

  /* How it works — inline stepper */
  .stepper-inline {
    margin-top: 36px;
    padding-top: 28px;
    border-top: 1px solid var(--line);
  }
  .stepper-inline .pp-label {
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
  }
  .stepper-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }
  .stepper-row .step {
    font-family: 'Outfit', sans-serif;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 10px 18px;
    font-weight: 700;
    font-size: 14px;
    color: var(--ink);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  }
  .stepper-row .arrow {
    color: var(--accent);
    font-weight: 700;
    font-size: 18px;
  }

  /* ============================================
     SECTION 3 — Dark Panel (Stats + Verticals)
     ============================================ */

  .dark-panel {
    background: var(--panel);
    color: #fff;
    border-radius: 22px;
    padding: 36px 24px;
    ${sm} {
      padding: 52px 48px;
    }
  }

  .dark-panel .panel-header {
    text-align: center;
    margin-bottom: 36px;
  }
  .dark-panel .panel-header .tag {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #fff;
    opacity: 0.85;
    margin-bottom: 12px;
  }
  .dark-panel .panel-header .tag .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--accent);
  }
  .dark-panel .panel-header h2 {
    font-family: 'Outfit', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    margin: 0;
    ${sm} {
      font-size: 30px;
    }
  }

  /* Stats row */
  .stats-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    overflow: hidden;
    ${sm} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .stats-row .stat {
    background: var(--panel);
    padding: 28px 24px;
    text-align: center;
  }
  .stats-row .num {
    font-family: 'Outfit', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.5px;
  }
  .stats-row .num em {
    font-style: normal;
    color: var(--accent);
  }
  .stats-row .cap {
    font-family: 'Varela Round', sans-serif;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    margin-top: 6px;
  }

  /* Verticals — compact pills */
  .verticals-strip {
    margin-top: 36px;
    text-align: center;
  }
  .verticals-strip .strip-label {
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 18px;
  }
  .verticals-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  .vertical-pill {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    color: #fff;
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: default;
    transition: all 0.2s ease;
  }
  .vertical-pill:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
  .vertical-pill .pill-icon {
    display: flex;
    align-items: center;
    color: var(--accent);
  }

  /* Tooltip */
  .vertical-pill .tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) scale(0.95);
    background: #fff;
    color: var(--ink);
    font-family: 'Varela Round', sans-serif;
    font-size: 13px;
    font-weight: 400;
    padding: 8px 14px;
    border-radius: 8px;
    white-space: nowrap;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
  }
  .vertical-pill .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #fff;
  }
  .vertical-pill:hover .tooltip {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }

  /* ============================================
     SECTION 4 — CTA Band
     ============================================ */

  .cta-band {
    background: var(--panel);
    color: #fff;
    border-radius: 22px;
    padding: 36px;
    text-align: center;
    ${sm} {
      padding: 56px;
    }
  }
  .cta-band h2 {
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    color: #fff;
    margin: 0 auto;
    max-width: 22ch;
    font-size: 24px;
    ${sm} {
      font-size: 30px;
    }
  }
  .cta-band p {
    font-family: 'Varela Round', sans-serif;
    color: rgba(255, 255, 255, 0.62);
    max-width: 48ch;
    margin: 16px auto 26px;
    font-size: 15px;
    line-height: 1.7;
  }
  .cta-band .btn {
    font-family: 'Outfit', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--accent);
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    padding: 15px 28px;
    border-radius: 10px;
    font-size: 16px;
    transition: background 0.15s ease, gap 0.2s ease;
  }
  .cta-band .btn:hover {
    background: var(--accent-deep);
    gap: 14px;
  }
  .cta-band .credit {
    margin-top: 18px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
  }

  /* ============================================
     Official Channel Partner section
     ============================================ */

  .partner-section {
    background: #ffffff;
    text-align: center;
    border-bottom: 1px solid var(--line);
  }
  .partner-section .pp-label {
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--muted);
    margin: 0 0 10px;
  }
  .partner-section h2 {
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: var(--ink);
    margin: 0;
    ${sm} {
      font-size: 30px;
    }
  }
  .partner-section .partner-lede {
    font-family: 'Varela Round', sans-serif;
    max-width: 66ch;
    margin: 16px auto 0;
    font-size: 16px;
    line-height: 1.7;
    color: var(--muted);
  }
  .partner-section .partner-link {
    font-family: 'Outfit', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 22px;
    color: var(--accent);
    font-weight: 600;
    text-decoration: none;
    transition: gap 0.2s ease;
  }
  .partner-section .partner-link:hover {
    gap: 12px;
  }

  /* ============================================
     Tab panel transition
     ============================================ */

  .tab-content {
    animation: pp-tab-in 0.32s ease both;
  }
  @keyframes pp-tab-in {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ============================================
     How it works — flow loop diagram
     ============================================ */

  .flow-diagram {
    margin: 8px auto 0;
    max-width: 820px;
    overflow-x: auto;
  }
  .flow-svg {
    width: 100%;
    height: auto;
    min-width: 560px;
    display: block;
  }
  .fd-node {
    fill: #fff;
    stroke: var(--accent);
    stroke-width: 2;
  }
  .fd-num {
    font-family: 'Outfit', sans-serif;
    font-size: 24px;
    font-weight: 800;
    fill: var(--accent);
  }
  .fd-label {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 600;
    fill: var(--ink);
  }
  .fd-line {
    stroke: var(--accent);
    stroke-width: 2;
    opacity: 0.5;
  }
  .fd-loop {
    stroke: var(--accent);
    stroke-width: 2;
    stroke-dasharray: 5 5;
    opacity: 0.7;
  }
  .fd-arrow-head {
    fill: var(--accent);
  }
  .fd-loop-label {
    font-family: 'Varela Round', sans-serif;
    font-size: 13px;
    fill: var(--muted);
  }

  /* ============================================
     Shared / Utilities
     ============================================ */

  @media (prefers-reduced-motion: reduce) {
    .vertical-pill,
    .tab-btn,
    .cta-band .btn,
    .partner-section .partner-link {
      transition: none;
    }
    .vertical-pill:hover .tooltip {
      transition: none;
    }
    .tab-content {
      animation: none;
    }
  }
`;
