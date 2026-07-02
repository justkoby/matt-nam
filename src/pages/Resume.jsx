import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Resume — Matthew Nam | Digital Health & AdTech Commercial Leader</title>
        <meta name="description" content="View the professional resume of Matthew Nam — Senior Director at Omnichannel Strategy, VP at Publisher Health, Forbes Next 1000 Honoree. Experience in digital health, programmatic advertising, and ad operations." />
        <link rel="canonical" href="https://matt-nam.vercel.app/resume" />
      </Helmet>
      {/* Action Bar */}
      <motion.div
        className="resume-actions"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="resume-back-link">
          ← Back to Home
        </Link>
        <a href="/resume.pdf" download className="resume-download-btn">
          ⬇ Download PDF
        </a>
      </motion.div>

      <motion.div
        className="resume-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* ── Header ── */}
        <header className="resume-header">
          <div className="resume-initials">MN</div>
          <h1 className="resume-name">Matthew Nam</h1>
          <div className="resume-contact">
            <span>mnam8906@gmail.com</span>
            <span className="resume-contact-sep">|</span>
            <span>(347) 346-0400</span>
            <span className="resume-contact-sep">|</span>
            <span>Philadelphia, USA</span>
          </div>
        </header>

        {/* ── Professional Summary ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Professional Summary</h2>
          <p className="resume-summary-text">
            Versatile commercial leader with deep expertise at the intersection of digital health, programmatic media, and ad operations. Proven track record scaling platforms like Doceree from zero to $50M+ ARR, and leading commercial strategy at Publisher Health, where I 10x'd revenue to $23M (net new) in 2024. Adept at managing high-performing ad ops teams and overseeing complex adtech integrations, including header bidding (client/server), waterfall yield models, and OpenRTB setups. Recognized for bridging product, strategy, and operations to deliver scalable monetization across EHR, POC, DSP, and SSP ecosystems.
          </p>
        </section>

        {/* ── Professional Skills ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Professional Skills</h2>
          <div className="resume-skills-grid">
            <div className="resume-skill-item">
              <span className="resume-skill-bullet">●</span>
              Programmatic Advertising (DSPs, SSPs, Header Bidding, OpenRTB)
            </div>
            <div className="resume-skill-item">
              <span className="resume-skill-bullet">●</span>
              AI-Driven Engagement Strategy &amp; Media Innovation
            </div>
            <div className="resume-skill-item">
              <span className="resume-skill-bullet">●</span>
              Ad Operations Management &amp; Yield Optimization
            </div>
            <div className="resume-skill-item">
              <span className="resume-skill-bullet">●</span>
              Sales Leadership &amp; Team Development
            </div>
          </div>
        </section>

        {/* ── Career Benchmark ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Career Benchmark</h2>
          <ul className="resume-benchmark-list">
            <li>EHR &amp; Point-of-Care (POC) Advertising Integration</li>
            <li>Strategic Partnerships &amp; Publisher Acquisition</li>
            <li>Revenue Operations &amp; P&amp;L Ownership</li>
            <li>Product Commercialization &amp; Cross-Functional Leadership</li>
            <li>GTM Strategy &amp; Enterprise Sales (Health, Pharma, AdTech)</li>
            <li>CRM &amp; Sales Enablement Tools (Salesforce, Hubspot, Outreach)</li>
            <li>Market Expansion (US, APAC, EMEA, LATAM)</li>
            <li>Thought Leadership &amp; Case Study Development</li>
            <li><strong>2024:</strong> Routed $23 million of media in POC media</li>
            <li><strong>2023:</strong> Closed $3.06MM</li>
            <li><strong>2022:</strong> Closed $3.7 MM and built pipeline of $15.6MM for 2023, doubled 2021 sales to ~$137MM</li>
            <li><strong>2021:</strong> Closed net-new media 15 MM USD</li>
            <li><strong>2020:</strong> Closed $2.1MM USD</li>
            <li><strong>2019:</strong> Closed $1.6MM USD</li>
          </ul>
          <p className="resume-summary-text" style={{ marginTop: '12px' }}>
            Built and led high-performance sales teams, securing multimillion-dollar contracts with life sciences and healthcare organizations.
          </p>
        </section>

        {/* ── Work Experience ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Work Experience</h2>

          {/* Omnichannel Strategy */}
          <div className="resume-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Omnichannel Strategy | USA</span>
              <span className="resume-role">HLD – Senior Director</span>
              <span className="resume-date">11/2025 – Current</span>
            </div>
            <div className="resume-entry-right">
              <ul>
                <li>Added $10M in net new revenue in 2026</li>
                <li>Own the commercial operating cadence across sales, marketing, and product, including a biweekly Commercial Operating Review with agency sellers.</li>
                <li>Lead commercial prioritization and operating decisions to focus teams on highest-impact opportunities and execution risks.</li>
                <li>Serve as the connective layer between commercial teams and product, translating market signals, agency feedback, and pipeline dynamics into actionable roadmap inputs.</li>
                <li>Partner with marketing to design and operationalize demand signals, panels, and thought-leadership initiatives that inform commercial strategy.</li>
                <li>Advise executive leadership on commercial tradeoffs, sequencing, and risk based on real-time pipeline and execution signals.</li>
                <li>Established repeatable commercial operating frameworks that improved forecast visibility, execution discipline, and cross-functional alignment.</li>
              </ul>
            </div>
          </div>

          {/* Publisher Health */}
          <div className="resume-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Publisher Health</span>
              <span className="resume-role">VP | Commercial and Platform Strategy</span>
              <span className="resume-date">03/2024 – Current</span>
            </div>
            <div className="resume-entry-right">
              <ul>
                <li>Developed and implemented an EHR header bidding solution, increasing platform adoption by 30% and unlocking a 250% revenue surge.</li>
                <li>Led initiative to digitize Point of Care (PoC) platforms with innovative wrapper technology for header bidding, enabling seamless integration of multiple demand streams and boosting programmatic revenue generation.</li>
                <li>Spearheaded sales strategies that enhanced multi-channel, video, and mobile app publisher acquisitions, contributing to a 250% revenue growth ($23 million).</li>
                <li>Aggregated and onboarded PoC platforms and DSPs to support growth initiatives, enhancing operational capabilities.</li>
                <li>Drove $23M in 2024 sales by implementing EHR header bidding technology and onboarding Point of Care platforms. Delivered 250% revenue growth through AI-enabled media solutions targeting health providers and pharma brands.</li>
              </ul>
            </div>
          </div>

          {/* Veradigm */}
          <div className="resume-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Veradigm | New York, NY</span>
              <span className="resume-role">VP | Strategic Sales Solutions</span>
              <span className="resume-date">03/2023 – Current</span>
            </div>
            <div className="resume-entry-right">
              <ul>
                <li>Executed on the strategy and shipped the build that generated a $2MM revenue increase in two months (and $1.5MM/month, every month after) by expanding Veradigm's traditional advertising model into a programmatic, omnichannel model; it led to them having more opportunities and refining their inventory management practices.</li>
                <li>While working with Veradigm, I identified a significant opportunity to leverage Header Bidding wrapper technology to radically boost revenues. Developed and implemented a system that integrates multiple demand streams, enabling the publisher to scale their revenues programmatically by 10x through optimized demand.</li>
                <li>Led the creation of an adtech header bidder, facilitating DSP bids on Veradigm's EHR inventory, which increased remnant inventory sales by 50%.</li>
                <li>Orchestrated cross-departmental collaboration, enhancing platform compatibility and improving operational efficiency across the organization, and was able to lead to an increase in sales due to advertising efficiency.</li>
              </ul>
            </div>
          </div>

          {/* Deepintent */}
          <div className="resume-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Deepintent | New York, NY</span>
              <span className="resume-role">VP | Strategic Sales Solutions</span>
              <span className="resume-date">03/2022 – 03/2023</span>
            </div>
            <div className="resume-entry-right">
              <ul>
                <li>Orchestrated sales account acquisition and negotiations with Pharma manufacturers and agencies, driving revenue to $137MM and achieving 20% market share growth in CTV.</li>
                <li>Directed the strategic development of Supply-Side Platform initiatives for Point of Care, with focus on CTV and enhancing targeted advertising capabilities, resulting in a 45% increase in market penetration and a $5M revenue gain.</li>
                <li>Analyzed sales performance, adapting strategies to surpass revenue targets by 20%, leading to an additional $3.5M in annual revenue.</li>
                <li>Led cross-functional team of 8, fostering innovation and excellence, achieving 30% productivity improvement and 15% increase in client satisfaction.</li>
              </ul>
            </div>
          </div>

          {/* Doceree – Head of Healthcare */}
          <div className="resume-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Doceree | Parsippany, NJ</span>
              <span className="resume-role">Head of Healthcare Platform Sales (Global)</span>
              <span className="resume-date">02/2021 – 12/2021</span>
            </div>
            <div className="resume-entry-right">
              <ul>
                <li>Pioneered the development of the Doceree Advertising Platform, a comprehensive healthcare media ecosystem, leading to a 1500% increase in revenue and a 75% rise in EBITDA within two years, contributing to a $10M revenue increase.</li>
                <li>Scaled global sales from $0 to $50M ARR, spearheading adoption of AI-powered healthcare media ecosystem to boost provider/patient engagement and campaign ROI.</li>
                <li>Drove global expansion, increasing market share by 35% through innovative strategies and new market penetration.</li>
                <li>Led SSP integrations, enhancing revenue and campaign delivery for top 5 pharma brands.</li>
              </ul>
            </div>
          </div>

          {/* Doceree – AVP */}
          <div className="resume-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Doceree | Parsippany, NJ</span>
              <span className="resume-role">AVP, Strategic Sales Partnerships (Publisher &amp; Point of Care), US</span>
              <span className="resume-date">09/2020 – 02/2021</span>
            </div>
            <div className="resume-entry-right">
              <ul>
                <li>Developed and managed global publisher network (Display and Point of Care), expanding network by 40% and contributing to $5M increase in ARR.</li>
                <li>Formulated strategies for global sales team: US, India, and EU, leading to $2.3MM in ARR closure in US; mentored team to achieve top performance, closing over $16MM in ARR US+Global and driving 30% increase in global sales.</li>
              </ul>
            </div>
          </div>

          {/* Doceree – Director */}
          <div className="resume-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Doceree | Parsippany, NJ</span>
              <span className="resume-role">Director, US Sales and Partnerships (Demand and Supply)</span>
              <span className="resume-date">12/2019 – 09/2020</span>
            </div>
            <div className="resume-entry-right">
              <ul>
                <li>Brokered large advertiser partnerships in Pharma, secured $2M in new contracts, and developed extensive endemic publisher and Point of Care networks.</li>
                <li>Managed sales team of 5, ensured client/partner satisfaction and retention, achieving 95% client retention rate and driving 100% increase in annual revenue.</li>
                <li>Built sales teams in US and India, led sales process across US, India, and UK launch, achieving 25% market share increase and $3.5M revenue gain.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Additional Professional Experience ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Additional Professional Experience</h2>

          <div className="resume-compact-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Innoplexus</span>
              <span className="resume-role">Senior Director, AI Solutions</span>
              <span className="resume-date">01/2018 – 01/2019</span>
            </div>
            <div className="resume-entry-right" />
          </div>

          <div className="resume-compact-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Avanir Pharmaceuticals</span>
              <span className="resume-role">Neuroscience Area Manager</span>
              <span className="resume-date">01/2014 – 01/2018</span>
            </div>
            <div className="resume-entry-right" />
          </div>

          <div className="resume-compact-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Mt. Sinai Hospital</span>
              <span className="resume-role">Alzheimer's Patient Aide</span>
              <span className="resume-date">01/2013 – 01/2014</span>
            </div>
            <div className="resume-entry-right" />
          </div>

          <div className="resume-compact-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Washington Avenue School</span>
              <span className="resume-role">Autism Paraprofessional</span>
              <span className="resume-date">01/2011 – 01/2013</span>
            </div>
            <div className="resume-entry-right" />
          </div>

          <div className="resume-compact-entry">
            <div className="resume-entry-left">
              <span className="resume-company">Essex County College</span>
              <span className="resume-role">Physics Instructor</span>
              <span className="resume-date">01/2008 – 01/2011</span>
            </div>
            <div className="resume-entry-right" />
          </div>
        </section>

        {/* ── Education ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>

          <div className="resume-edu-entry">
            <span className="resume-edu-school">CUNY School of Public Health | New York, NY</span>
            <span className="resume-edu-degree">Master of Public Health <span style={{ fontWeight: 400 }}>in Health Policy and Management</span></span>
          </div>

          <div className="resume-edu-entry">
            <span className="resume-edu-school">Western New England University | Springfield, MA</span>
            <span className="resume-edu-degree">Bachelor of Science <span style={{ fontWeight: 400 }}>in Biology</span></span>
          </div>
        </section>

        {/* ── Websites, Portfolios, Profiles ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Websites, Portfolios, Profiles</h2>
          <a href="https://www.linkedin.com/in/mattnam/" target="_blank" rel="noopener noreferrer" className="resume-link">
            https://www.linkedin.com/in/mattnam/
          </a>
        </section>

        {/* ── Awards ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Awards</h2>
          <ul className="resume-awards-list">
            <li><strong>2025</strong> — Top 10 to watch in 2025, Philadelphia Business Journal</li>
            <li><strong>2024</strong> — Product of the Year, Technical.ly 2024</li>
            <li><strong>2023</strong> — Forbes Next 1000 Honoree</li>
            <li><strong>2018</strong> — Trailblazer award for building a new sales system</li>
            <li><strong>2017</strong> — National Powerplayer Award</li>
            <li><strong>2016</strong> — Top 5 Launch Award</li>
            <li><strong>2015</strong> — Regional trainer of the year</li>
          </ul>
        </section>
      </motion.div>
    </>
  );
};

export default Resume;
