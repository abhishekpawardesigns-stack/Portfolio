/* ==========================================================================
   CASE STUDY DRAWER RENDERER — VISUAL IDENTITY STUDIO
   ========================================================================== */

const caseStudiesData = {
  'aether-os': {
    title: 'Aether OS — Spatial AI Canvas',
    category: 'Spatial UI & AI Workflows',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    overview: 'Aether OS is a spatial 3D node canvas designed for high-density generative AI workflows. Replaced multi-monitor desktop window clutter with context-aware floating glass panels.',
    metrics: [
      { label: 'Task Efficiency Lift', value: '+42%' },
      { label: 'Context Switching Reduction', value: '-65%' },
      { label: 'SUS Accessibility Score', value: '94/100' }
    ],
    deliverables: [
      'Spatial 3D Node Architecture',
      'Context-Aware Glassmorphism HUD',
      'W3C Token System for VisionOS & WebGL'
    ]
  },
  'pulse-health': {
    title: 'Pulse Health — ICU Patient Monitoring',
    category: 'MedTech ICU Telemetry',
    heroImg: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    overview: 'Synthesized 14 simultaneous real-time clinical vital feeds into an intelligent alert prioritization dashboard for ICU critical care nurses and physicians.',
    metrics: [
      { label: 'Alarm Fatigue Reduction', value: '-35%' },
      { label: 'Critical Response Time', value: '1.4s' },
      { label: 'WCAG Accessibility', value: 'AAA' }
    ],
    deliverables: [
      'High-Stakes Telemetry Design System',
      'Color-Coded Alert Hierarchy Engine',
      'Multi-Touch Tablet Interface'
    ]
  },
  'nexus-commerce': {
    title: 'Nexus Commerce — 1-Tap Biometric',
    category: 'FinTech Biometrics',
    heroImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
    overview: 'Re-engineered multi-step checkout friction into a 1-tap biometric gesture flow, reducing checkout duration from 45.2s down to 3.8s.',
    metrics: [
      { label: 'Mobile Conversion Lift', value: '+28%' },
      { label: 'Checkout Time Duration', value: '3.8s' },
      { label: 'Cart Abandonment Drop', value: '-22%' }
    ],
    deliverables: [
      'Biometric Haptic Feedback Flow',
      'Zero-Friction Micro-Interactions',
      'Global SDK Integration Guidelines'
    ]
  },
  'hyno': {
    title: 'HYNO — SaaS Analytics & Hiring Dashboard',
    category: 'UX/UI Design',
    heroImg: 'images/All Screens/Hero Image 1.png',
    overview: 'Designed an intuitive SaaS recruitment and analytics dashboard for HYNO, featuring active candidate tracking, total spending insights, and real-time candidate onboarding metrics.',
    metrics: [
      { label: 'Hiring Cost Optimization', value: '-10.1%' },
      { label: 'Candidate Onboarding Speed', value: '+41%' },
      { label: 'Usability Score', value: '96/100' }
    ],
    deliverables: ['Dashboard UI/UX Design', 'Information Architecture', 'Design System & Micro-interactions']
  },
  'atlanta': {
    title: 'ATLANTA — E-Commerce Architecture',
    category: 'E-Commerce Architecture',
    heroImg: 'https://i0.wp.com/visualidentity.studio/wp-content/uploads/2026/04/ATLANTA-web.png?fit=800%2C800&ssl=1',
    overview: 'Architected a modular luxury e-commerce experience with sub-second page loads, custom 3D product previews, and frictionless checkout.',
    metrics: [
      { label: 'Average Order Value (AOV)', value: '+45%' },
      { label: 'Page Load Speed Improvement', value: '0.6s' }
    ],
    deliverables: ['Headless E-Commerce System', '3D Product Viewer', 'Checkout Optimization']
  },
  'elle-baltic': {
    title: 'ELLE BALTIC — Editorial Identity',
    category: 'Editorial Identity',
    heroImg: 'https://i0.wp.com/visualidentity.studio/wp-content/uploads/2026/04/ELLE-baltic-web.png?fit=800%2C800&ssl=1',
    overview: 'Crafted a digital editorial publication framework for ELLE Baltic, blending classic high-fashion typography with fluid web layouts.',
    metrics: [
      { label: 'Monthly Readers', value: '1.2M+' },
      { label: 'Time Spent On Page', value: '4m 12s' }
    ],
    deliverables: ['Digital Publishing System', 'Custom Serif Typography System', 'Ad-Free Reading Experience']
  },
  'exp-tech-mahindra': {
    title: 'Tech Mahindra (Microsoft) — Senior UX Designer',
    category: 'Full Time • Jan 2026 – Present',
    overview: 'Introduced an AI-first approach to enterprise design workflows, eliminating fragmented design processes and enabling deep-dive usability audits. Transformed complex enterprise interfaces into a scalable, high-performance design system.',
    projects: [
      {
        title: 'AI-First Design Workflow Pipeline',
        description: 'Integrated AI tools into daily design cycles to automate initial asset generation, allowing focused effort on deep-dive usability audits and systemic UI refinement.'
      },
      {
        title: 'Enterprise Interface Standardization',
        description: 'Audited disjointed legacy web tools across departments, establishing a unified design system that boosted engineering handoff and iteration speed by 25–40%.'
      }
    ],
    metrics: [
      { label: 'Design & Handoff Speed Boost', value: '25–40%' },
      { label: 'Usability Audit Coverage', value: '100%' },
      { label: 'Workflow Efficiency Lift', value: '+35%' }
    ],
    deliverables: [
      'AI-First UX Handoff Pipeline',
      'Enterprise Usability Audit Framework',
      'Scalable Design System Component Suite'
    ]
  },
  'exp-trackmind': {
    title: 'Trackmind — Product Designer',
    category: 'Full Time • Feb 2025 – Jan 2026',
    overview: 'Streamlined client intake & onboarding architecture, cutting intake duration by 25%. Leveraged quantitative analytics and data-driven insights to launch three major enterprise initiatives ahead of scheduled deadlines.',
    projects: [
      {
        title: 'Client Intake Optimization',
        description: 'Re-architected onboarding funnels, reducing client intake friction and onboarding duration by 25%.'
      },
      {
        title: 'Data-Driven Enterprise Initiatives',
        description: 'Utilized telemetry and user analytics to deliver three high-impact client projects ahead of scheduled release dates.'
      }
    ],
    metrics: [
      { label: 'Client Intake Time Reduction', value: '-25%' },
      { label: 'Major Projects Delivered Ahead', value: '3/3' },
      { label: 'Operational Efficiency', value: '+30%' }
    ],
    deliverables: [
      'Data-Driven Client Onboarding Flow',
      'Operational Workflow Optimization',
      'Enterprise Deliverables Design System'
    ]
  },
  'exp-hownow': {
    title: 'Hownow — Product UX Specialist',
    category: 'Contract • Aug 2024 – Feb 2025',
    overview: 'Partnered with cross-functional engineering and product leads to launch major core features. Enforced strict design system standards, reducing design-to-engineering handoff latency by 20% and driving a 15% increase in user engagement.',
    projects: [
      {
        title: 'Core Platform Feature Launch',
        description: 'Teamed up with cross-functional partners to architect and ship key platform features centered around direct user needs.'
      },
      {
        title: 'Handoff & Token Standardization',
        description: 'Maintained strict design system consistency, cutting handoff latency by 20% and boosting user engagement by 15%.'
      }
    ],
    metrics: [
      { label: 'Design-to-Dev Handoff Cut', value: '-20%' },
      { label: 'User Engagement Lift', value: '+15%' },
      { label: 'Design System Alignment', value: '100%' }
    ],
    deliverables: [
      'Feature Launch User Flow Architecture',
      'Cross-Functional Design System Guidelines',
      'Interactive Prototyping & Handoff Spec'
    ]
  },
  'exp-hyno': {
    title: 'Hyno Technologies — Design Lead',
    category: 'Full Time • Nov 2022 – Aug 2024',
    overview: "In my role, I played a pivotal part in enhancing team productivity and elevating our company's branding to attract more clients. By developing efficient resources and incorporating user feedback into our design processes, I ensured that our projects met high standards and exceeded client expectations.",
    projects: [
      {
        title: 'Enhanced Team Productivity',
        description: 'Created resources and streamlined workflows that significantly improved team productivity.'
      },
      {
        title: 'Boosted Client Engagement',
        description: 'Improved branding to target clients hiring remote developers, resulting in a 60% increase in engagement and a 45% rise in lead generation.'
      },
      {
        title: 'Developed Design System and MVP Prototypes',
        description: 'Created a comprehensive design system and prototypes for an MVP, meticulously incorporating user feedback to ensure the end product met user needs and expectations.'
      }
    ],
    metrics: [
      { label: 'User Engagement Increase', value: '+60%' },
      { label: 'Inbound Lead Generation Lift', value: '+45%' },
      { label: 'Productivity Library Boost', value: '+50%' }
    ],
    deliverables: [
      'B2B Hiring Platform Design System',
      'Digital Rebranding & Lead Gen Funnels',
      'Centralized UX Resource Library'
    ]
  },
  'exp-eabyas': {
    title: 'eAbyas Info Solutions — UX/UI Designer',
    category: 'Full Time • Jun 2020 – Oct 2022',
    overview: "During my tenure, I collaborated closely with the product manager to craft effective wireframes and task flows for an educational website's landing page. My work translated visions into actionable designs, significantly improving project efficiency and user satisfaction.",
    projects: [
      {
        title: 'Wireframes and Task Flows',
        description: "Worked closely with the product manager to create wireframes and task flows for an educational website’s landing page."
      },
      {
        title: 'Boosted Design Approval',
        description: 'Translated vision into wireframes and prototypes, boosting design approval rates by 40% and reducing project revisions by 15%.'
      },
      {
        title: 'Enhanced Visual Design',
        description: 'Enhanced visual design with a focus on user experience, raising user satisfaction scores by 20%.'
      }
    ],
    metrics: [
      { label: 'Design Approval Rate Boost', value: '+40%' },
      { label: 'Project Revisions Reduced', value: '-15%' },
      { label: 'User Satisfaction CSAT Score', value: '+20%' }
    ],
    deliverables: [
      'Educational Landing Page Wireframes & Flows',
      'High-Fidelity Interactive Prototypes',
      'User-Centered Visual Design System'
    ]
  },
  'exp-bilwamindia': {
    title: 'BilwamIndia Technologies — UX/UI Designer',
    category: 'Full Time • Jun 2018 – Jun 2020',
    overview: 'My efforts led to significant improvements in user engagement and website performance.',
    projects: [
      {
        title: 'Rebranded Travel and Tour Website',
        description: 'Collaborated with developers to rebrand a travel and tour website, implementing a consistent design system to enhance user experience.'
      },
      {
        title: 'Landing Page Development',
        description: 'Designed and developed a landing page to promote company services, resulting in a 50% increase in website traffic.'
      },
      {
        title: 'Cab Service App Revamp',
        description: "Revamped the company's cab service app with a modern design, boosting user engagement by 30%."
      }
    ],
    metrics: [
      { label: 'Website Traffic Growth', value: '+50%' },
      { label: 'Cab App Engagement Boost', value: '+30%' },
      { label: 'Design System Implementation', value: '100%' }
    ],
    deliverables: [
      'Travel & Tour Website Rebranding',
      'High-Converting Company Landing Page',
      'Cab Service Mobile App UI/UX Redesign'
    ]
  },
  'experience-1': {
    title: 'Lead Product Designer & Systems Architect',
    category: 'Full-time • 2024 — Present | Global Enterprise Tech',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    overview: 'Spearheaded global product design initiatives across enterprise platforms. Architected spatial UI frameworks, cross-platform design token systems, and AI-assisted workflow engines that reduced design-to-engineering handoff latency by 35%.',
    metrics: [
      { label: 'Design System Adoption', value: '100%' },
      { label: 'Turnaround Latency Reduction', value: '35%' },
      { label: 'Enterprise Users Reached', value: '2.5M+' }
    ],
    deliverables: [
      'Multi-Platform Design Token Pipeline',
      'Spatial UI System Architecture',
      'AI Workflow Integration & Handoff Automation'
    ]
  },
  'experience-2': {
    title: 'Senior UX/UI Designer',
    category: 'Full-time • 2022 — 2024 | Search Experience Labs',
    heroImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
    overview: 'Led end-to-end UX/UI redesign for complex search and recommendation flows. Engineered zero-friction filter states, heuristic evaluation frameworks, and accessible component suites that boosted user retention by 25%.',
    metrics: [
      { label: 'Search Turnaround Time', value: '-25%' },
      { label: 'User Retention Lift', value: '+25%' },
      { label: 'Accessibility Score', value: 'AAA' }
    ],
    deliverables: [
      'Complex Search Experience Architecture',
      'Heuristic Evaluation Framework',
      'High-Conversion Mobile Filter Systems'
    ]
  },
  'experience-3': {
    title: 'Visual Identity & Interaction Designer',
    category: 'Contract • 2020 — 2022 | Creative Studio Networks',
    heroImg: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    overview: 'Crafted bespoke digital brand identity systems, interactive WebGL components, and responsive design guidelines for high-growth startups and luxury editorial brands.',
    metrics: [
      { label: 'Client Brand Recognition', value: '+80%' },
      { label: 'Bespoke Projects Launched', value: '18+' }
    ],
    deliverables: [
      'Digital Brand Architecture & Token Kits',
      'Interactive WebGL & Shader Experiences',
      'Responsive Component Libraries'
    ]
  },
  'experience-4': {
    title: 'Product Designer & Systems Lead',
    category: 'Full-time • 2018 — 2020 | SaaS Product Scale',
    heroImg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85',
    overview: 'Engineered foundational SaaS UI component suites, user journey mapping methodologies, and accessibility-compliant design patterns for enterprise B2B applications.',
    metrics: [
      { label: 'Annual SaaS Revenue Lift', value: '+23%' },
      { label: 'Design Handoff Efficiency', value: '+40%' }
    ],
    deliverables: [
      'B2B SaaS Component Library',
      'End-to-End User Journey Mapping',
      'WCAG 2.1 Compliance Rigor'
    ]
  }
};

function openCaseStudy(id) {
  const data = caseStudiesData[id];
  if (!data) return;

  const modalBody = document.getElementById('modal-body');

  const heroImgHtml = data.heroImg ? `
    <div style="width: 100%; height: 360px; border-radius: 20px; overflow: hidden; margin-bottom: 2rem; border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);">
      <img src="${data.heroImg}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>
  ` : '';

  const overviewHtml = data.overview ? `
    <div style="margin-bottom: 2.25rem;">
      <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.8; margin: 0;">${data.overview}</p>
    </div>
  ` : '';

  const projectsHtml = data.projects && data.projects.length ? `
    <div style="margin-bottom: 2.25rem;">
      <h3 style="font-family: 'Inter Tight', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: #ffffff; letter-spacing: -0.02em;">Key Projects &amp; Core Highlights</h3>
      <div style="border: 1px solid transparent; background-image: linear-gradient(#0c0d0f, #0c0d0f), linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 40%, rgba(255, 255, 255, 0) 100%); background-origin: border-box; background-clip: padding-box, border-box; border-radius: 24px; padding: 28px 30px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);">
        ${data.projects.map((p, idx) => `
          <div style="${idx < data.projects.length - 1 ? 'border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 22px; margin-bottom: 22px;' : ''}">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #d5f74c; display: inline-block; flex-shrink: 0;"></span>
              <h4 style="font-family: 'Inter Tight', sans-serif; font-size: 1.12rem; font-weight: 700; color: #ffffff; margin: 0;">${p.title}</h4>
            </div>
            <p style="color: #9ca3af; font-size: 0.96rem; line-height: 1.7; margin: 0; padding-left: 18px;">${p.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const metricsHtml = data.metrics && data.metrics.length ? `
    <div style="margin-bottom: 2.25rem;">
      <h3 style="font-family: 'Inter Tight', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: #ffffff; letter-spacing: -0.02em;">Key Metrics &amp; Impact</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
        ${data.metrics.map(m => `
          <div style="border: 1px solid transparent; background-image: linear-gradient(#0c0d0f, #0c0d0f), linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 40%, rgba(255, 255, 255, 0) 100%); background-origin: border-box; background-clip: padding-box, border-box; border-radius: 24px; padding: 24px 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
            <div style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255, 255, 255, 0.5); margin-bottom: 10px;">${m.label}</div>
            <div style="font-family: 'Inter Tight', sans-serif; font-size: clamp(2rem, 3vw, 2.6rem); font-weight: 800; color: #ffffff; line-height: 1; letter-spacing: -0.03em;">
              ${m.value.replace(/([%+—–-])/g, '<span style="color: #d5f74c;">$1</span>')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const deliverablesHtml = data.deliverables && data.deliverables.length ? `
    <div style="margin-bottom: 1rem;">
      <h3 style="font-family: 'Inter Tight', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: #ffffff; letter-spacing: -0.02em;">Key Deliverables &amp; Artifacts</h3>
      <div style="display: flex; flex-direction: column; gap: 0.85rem;">
        ${data.deliverables.map(d => `
          <div style="display: flex; align-items: baseline; gap: 12px; color: #e5e7eb; font-size: 0.98rem; line-height: 1.6;">
            <span style="color: #d5f74c; font-weight: 800; font-size: 1.1rem; line-height: 1;">✓</span>
            <span>${d}</span>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  modalBody.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); padding: 6px 16px; border-radius: 999px; margin-bottom: 16px;">
        <svg class="star-icon" viewBox="0 0 480 512" style="width: 12px; height: 12px; fill: #d5f74c;"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg>
        <span style="font-family: 'Inter Tight', sans-serif; font-size: 0.78rem; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.08em;">${data.category}</span>
      </div>
      <h2 style="font-family: 'Inter Tight', sans-serif; font-size: clamp(2rem, 3.5vw, 2.6rem); font-weight: 800; color: #ffffff; letter-spacing: -0.025em; line-height: 1.15; margin: 0 0 16px 0;">${data.title}</h2>
    </div>

    ${heroImgHtml}
    ${overviewHtml}
    ${projectsHtml}
    ${metricsHtml}
    ${deliverablesHtml}
  `;

  document.getElementById('case-study-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
  document.getElementById('case-study-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.getElementById('case-study-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'case-study-modal') {
    closeCaseStudyModal();
  }
});
