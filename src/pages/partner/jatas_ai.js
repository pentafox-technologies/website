import React, { useState } from "react";
import { Link } from "gatsby";
import {
  IconCircleArrowRightFilled,
  IconSchool,
  IconPlane,
  IconHeartbeat,
  IconBuildingBank,
  IconShoppingBag,
  IconBuildingSkyscraper,
  IconBriefcase,
} from "@tabler/icons-react";
import LayoutCommon from "../../components/layout/layoutCommon";
import { HomeWrapper } from "../../components/home/home.css";
import PageWrapper, {
  TopSectionWrapper,
} from "../../components/pageWrapper/PageWrapper";
import { HeaderData } from "../../components/head/Head";
import { PartnerProductsWrapper } from "./partnerProducts.css";
import JatasLogo from "../../about_assets/jatas-ai.png";

export const Head = () => <HeaderData pageTitle="Partner Products — JATAS AI" />;


const greetings = [
  { text: "नमस्ते", lang: "hi" },
  { text: "નમસ્તે", lang: "gu" },
  { text: "வணக்கம்", lang: "ta" },
  { text: "నమస్కారం", lang: "te" },
  { text: "ನಮಸ್ಕಾರ", lang: "kn" },
  { text: "নমস্কার", lang: "bn" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", lang: "pa" },
];

const capabilities = [
  {
    title: "Human-like conversation",
    body: "Natural, contextual dialogue that reads intent and tone — not a rigid IVR menu tree. The agent adapts in real time, handling interruptions, follow-ups, and context switches the way a trained human would.",
  },
  {
    title: "22+ Indian languages",
    body: "Fluent engagement across Hindi and regional languages, powered by Bhashini. Callers speak in their mother tongue and the AI responds naturally — no language selection menus, no awkward translations.",
  },
  {
    title: "Custom SLM workflows",
    body: "Small language models tuned to each business's domain, terms and processes. Unlike generic LLMs, these models are purpose-built for your vocabulary, compliance rules, and escalation paths.",
  },
  {
    title: "Live analytics",
    body: "Real-time dashboards for every interaction, so teams act on what callers actually need. Track resolution rates, sentiment trends, and peak-hour patterns — all updating as calls happen.",
  },
];

const howItWorks = ["Understand", "Think", "Respond", "Learn", "Improve"];

const verticals = [
  { icon: IconSchool, name: "Education", body: "Admissions, student support, campus services." },
  { icon: IconPlane, name: "Aviation", body: "Passenger assistance, bookings, travel support." },
  { icon: IconHeartbeat, name: "Healthcare", body: "Appointments, triage, patient engagement." },
  { icon: IconBuildingBank, name: "BFSI", body: "Banking, financial services and insurance." },
  { icon: IconShoppingBag, name: "Retail", body: "Orders, reservations, customer care." },
  { icon: IconBuildingSkyscraper, name: "Real Estate", body: "Lead qualification, scheduling." },
  { icon: IconBriefcase, name: "B2B", body: "Sales enablement, support and ops." },
];

// Cyclical "how it works" loop diagram (inline SVG, brand-colored, scalable)
const FlowDiagram = ({ steps }) => {
  const W = 900;
  const H = 250;
  const pad = 78;
  const cy = 82;
  const r = 30;
  const n = steps.length;
  const gap = (W - pad * 2) / (n - 1);
  const nodes = steps.map((s, i) => ({ x: pad + gap * i, label: s, num: i + 1 }));
  const first = nodes[0];
  const last = nodes[n - 1];

  return (
    <svg
      className="flow-svg"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Process loop: ${steps.join(" then ")}, repeating on every call`}
    >
      <defs>
        <marker
          id="fd-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path className="fd-arrow-head" d="M0,0 L10,5 L0,10 z" />
        </marker>
      </defs>

      {/* connectors */}
      {nodes.slice(0, -1).map((nd, i) => (
        <line
          key={`c-${i}`}
          className="fd-line"
          x1={nd.x + r}
          y1={cy}
          x2={nodes[i + 1].x - r}
          y2={cy}
          markerEnd="url(#fd-arrow)"
        />
      ))}

      {/* return loop */}
      <path
        className="fd-loop"
        fill="none"
        d={`M ${last.x} ${cy + r} C ${last.x} ${H - 30}, ${first.x} ${H - 30}, ${first.x} ${cy + r}`}
        markerEnd="url(#fd-arrow)"
      />

      {/* nodes */}
      {nodes.map((nd) => (
        <g key={nd.num}>
          <circle className="fd-node" cx={nd.x} cy={cy} r={r} />
          <text
            className="fd-num"
            x={nd.x}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {nd.num}
          </text>
          <text className="fd-label" x={nd.x} y={cy + r + 24} textAnchor="middle">
            {nd.label}
          </text>
        </g>
      ))}

      <text className="fd-loop-label" x={W / 2} y={H - 6} textAnchor="middle">
        Continuous loop · sharper on every call
      </text>
    </svg>
  );
};

const JatasAiPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      headProps={{ pageTitle: "Partner Products — JATAS AI" }}
    >
      <HomeWrapper>
        <PageWrapper>
          <PartnerProductsWrapper>
            {/* ===== SECTION 1 — Page banner + Product Hero ===== */}
            <TopSectionWrapper style={{ textAlign: "center" }}>
              <div className="container">
                <h1>Partner Products</h1>
                <p>
                  We partner with excellence — collaborating with best-in-class
                  companies to co-create enterprise-grade, intelligent solutions,
                  delivered and fully supported by Pentafox.
                </p>
              </div>
            </TopSectionWrapper>

            {/* ===== OFFICIAL CHANNEL PARTNER — Tomatovation ===== */}
            <section className="pp-section partner-section">
              <div className="container">
                <p className="pp-label">Official Implementation Partner</p>
                <h2>Tomatovation</h2>
                <p className="partner-lede">
                  Tomatovation is an AI-first IT consulting firm and our official
                  implementation partner, building indigenous AI products engineered for
                  Indian enterprises. Through this partnership we bring their
                  production-ready platforms to our customers — implemented,
                  integrated and supported end to end by Pentafox.
                </p>
              </div>
            </section>

            {/* ===== JATAS AI — product intro ===== */}
            <section className="hero-product">
              <div className="container">
                <div>
                  <img className="logo" src={JatasLogo} alt="JATAS AI" />
                </div>
                <h1>
                  Voice support that speaks <em>India's languages</em>.
                </h1>
                <p className="lede">
                  JATAS AI is an indigenous voice AI platform built for Indian
                  enterprises — real-time, context-aware conversation across Hindi and
                  22+ regional languages, without the hallucinations and lag of
                  English-first tools retrofitted for India.
                </p>

                <div className="lang-strip" aria-label="Greetings across Indian languages">
                  {greetings.map((g) => (
                    <span key={g.lang} className="greet" lang={g.lang}>
                      {g.text}
                    </span>
                  ))}
                  <span className="plus">+15 more</span>
                </div>
              </div>
            </section>

            {/* ===== SECTION 2 — Tabbed Capabilities + How it Works ===== */}
            <section className="pp-section capabilities-section">
              <div className="container">
                <div className="capabilities-header">
                  <p className="pp-label">What it does</p>
                  <h2>One platform, four things done well.</h2>
                </div>

                <div className="tab-layout">
                  <div className="tab-nav" role="tablist">
                    {capabilities.map((c, i) => (
                      <button
                        key={c.title}
                        role="tab"
                        aria-selected={activeTab === i}
                        className={`tab-btn${activeTab === i ? " active" : ""}`}
                        onClick={() => setActiveTab(i)}
                      >
                        {c.title}
                      </button>
                    ))}
                  </div>

                  <div
                    className="tab-content"
                    role="tabpanel"
                    key={activeTab}
                  >
                    <h4>{capabilities[activeTab].title}</h4>
                    <p>{capabilities[activeTab].body}</p>
                  </div>
                </div>

                {/* How it works — flow loop diagram */}
                <div className="stepper-inline">
                  <p className="pp-label">How it works</p>
                  <div className="flow-diagram">
                    <FlowDiagram steps={howItWorks} />
                  </div>

                  {/* Deploys across 7 verticals */}
                  <div className="verticals-strip">
                   Serving Diverse Industry Sectors
                    <div className="verticals-grid">
                      {verticals.map((v) => {
                        const Icon = v.icon;
                        return (
                          <span key={v.name} className="vertical-pill">
                            <span className="pill-icon">
                              <Icon size={18} />
                            </span>
                            {v.name}
                            <span className="tooltip">{v.body}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== SECTION 4 — CTA ===== */}
            <section className="pp-section">
              <div className="container">
                <div className="cta-band">
                  <h2>See JATAS AI on your own use case.</h2>
                  <p>
                    Bring us a workflow in any of 22+ languages, and we'll show
                    you what a dependable voice agent sounds like.
                  </p>
                  <Link className="btn" to="/contact-us">
                    Book a Demo
                    <IconCircleArrowRightFilled size={22} />
                  </Link>
                  {/* <div className="credit">
                    Indigenous stack · Powered by Bhashini (MeitY)
                  </div> */}
                </div>
              </div>
            </section>
          </PartnerProductsWrapper>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default JatasAiPage;
