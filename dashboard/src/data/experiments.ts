import type { Experiment } from '../types';

export const experiments: Experiment[] = [
  {
    id: 'exp-01',
    number: 1,
    title: 'Introduction to E-Waste Management',
    objective:
      'Understand the scope, categories, and regulatory framework of electronic waste management in India.',
    description:
      'This foundational assignment (Assignment 0) introduces the fundamentals of e-waste - its definition, categories under the E-Waste (Management) Rules 2022, health and environmental impacts, and the responsibilities of producers, consumers, and recyclers.',
    methodology:
      'Review of the E-Waste (Management) Rules 2022, CPCB guidelines, and relevant academic literature. Summary of key regulatory obligations and stakeholder roles.',
    results:
      'Comprehensive understanding of the Indian e-waste regulatory framework, including EPR obligations, authorized recycling channels, and disposal guidelines.',
    conclusion:
      'India\'s e-waste management framework under the 2022 Rules places significant responsibility on producers through Extended Producer Responsibility (EPR), requiring registration, phase-wise recycling targets, and use of authorized dismantlers and recyclers.',
    relatedProjectIds: [],
    resourceIds: ['pdf-01'],
  },
  {
    id: 'exp-02',
    number: 2,
    title: 'Assam State-Level E-Waste Intelligence Dashboard',
    objective:
      'Design and build a comprehensive Excel-based tracker to monitor e-waste generation, collection, recycling, and compliance across all 35 districts of Assam.',
    description:
      'This experiment involved developing an 8-sheet Excel workbook - the Assam E-Waste Tracker - to centralize district-level e-waste data. The tracker covers generation inventory, collection logs, recycling infrastructure, EPR compliance, informal-sector hotspot mapping, environmental and health monitoring, and awareness programs, culminating in an automatic scorecard.',
    methodology:
      'Data gathered from publicly available state and district-level environmental reports. Each district was assigned a row in the generation inventory. Collection and recycling data were entered against EPR targets. Scorecard weights were assigned across 8 categories for a 100-point composite score.',
    results:
      'Assam estimated generation: 30,865.98 tonnes/year across 35 districts. Estimated collection: 21,825.33 tonnes. Recycling capacity: 120 tonnes. State scorecard: 56.1/100 (Needs Improvement). Dashboard surface deployed as the Assam E-Waste Watch web application.',
    conclusion:
      'A centralized tracker reveals critical gaps in Assam\'s e-waste infrastructure - particularly in formal recycling capacity and informal-sector formalization - enabling data-driven prioritization of interventions.',
    relatedProjectIds: ['proj-01'],
    resourceIds: ['xlsx-01', 'pptx-01', 'docx-01'],
  },
  {
    id: 'exp-03',
    number: 3,
    title: 'ReLoop - AI-Powered E-Waste Valuation Platform',
    objective:
      'Conceptualize and prototype an AI-powered platform that gives every discarded electronic device a recoverable value, connecting owners with verified recyclers and refurbishers.',
    description:
      'ReLoop is a platform concept developed to address the hidden value problem in e-waste: millions of phones, laptops, and appliances are discarded despite containing reusable parts and valuable metals. The platform uses AI to scan a device, estimate its Second-Life Score, recommend the optimal path (resell, refurbish, dismantle for parts, or recycle), and arrange verified pickup.',
    methodology:
      'User journey mapping from device scan to second-life outcome. AI model scope defined for device identification and valuation. Revenue model analysis covering resale margins, refurbishment fees, and material recovery revenue. Competitive landscape review.',
    results:
      'Pitch deck completed. Platform architecture defined covering scan → identify → value → pickup → second life workflow. Estimated device value recovery model demonstrated with representative examples (e.g. laptop: ₹4,500 reuse value + ₹800 recyclable material).',
    conclusion:
      'AI-powered device valuation and verified pickup logistics can significantly increase formal recycling rates by giving consumers a financial incentive for responsible disposal, reducing informal sector processing.',
    relatedProjectIds: ['proj-02', 'proj-03'],
    resourceIds: ['pptx-02'],
  },
  {
    id: 'exp-04',
    number: 4,
    title: 'Plasma Arc Metal Recovery - Patent Concept',
    objective:
      'Develop a patent-level concept for an ultra-high-temperature plasma arc process to recover precious metals (Au, Ag, Cu, Pd, Pt) from PCB e-waste.',
    description:
      'This experiment explores Plasma Arc Smelting as a high-efficiency method for recovering metals from Printed Circuit Board (PCB) e-waste. Ionized plasma at 5,000-15,000°C instantly melts PCB material, vaporizing impurities (plastics, resins, brominated flame retardants) into an off-gas filtration system while concentrating valuable metals into high-purity molten alloys.',
    methodology:
      'Literature review of pyrometallurgical and hydrometallurgical e-waste processing. Process flowchart developed: input → plasma arc generation → melting & vaporization → separation & collection → high-purity alloys. Off-gas treatment design via scrubbers, bags, and HEPA filtration. Environmental impact analysis versus conventional methods.',
    results:
      'Patent concept document prepared. Recovery efficiency modelled at >95%. Recoverable metals: Gold, Silver, Copper, Palladium, Platinum. Additional recoverable metals include Ni, Sn, Co, In, Bi, and REEs. Temperature range: 5,000-15,000°C. Chemical use: minimal. Emissions: controlled.',
    conclusion:
      'Plasma Arc Metal Recovery offers a viable, scalable, low-chemical alternative to acid leaching for PCB e-waste treatment, with high recovery efficiency and lower environmental impact when coupled with proper off-gas management.',
    relatedProjectIds: [],
    resourceIds: ['pdf-02', 'img-01'],
  },
  {
    id: 'exp-05',
    number: 5,
    title: 'Global E-Waste Regulations & Corporate Compliance Study',
    objective:
      'Compare international e-waste regulations across five countries and evaluate compliance levels of five Indian electronics manufacturers.',
    description:
      'A two-part study: (1) Cross-country regulatory comparison spanning India, Russia, Japan, USA, and Australia covering environmental permits, air pollution control, waste management rules, and enforcement mechanisms. (2) Compliance analysis of Foxconn India, Dixon Technologies, Kaynes Technology, Tata Electronics, and Syrma SGS Technology against India\'s E-Waste (Management) Rules 2022 and CPCB requirements.',
    methodology:
      'Official regulatory sources reviewed for each country (August 2026). Company EPR portal registrations, annual reports, and CPCB disclosures examined. Compliance gaps identified using the framework of Dr. Anuradha Chadha\'s "Law Relating to E-Waste, its Impacts and Disposal Management" (Neuro Quantology, 2022). Five international case studies (Japan, Switzerland, and three others) analysed.',
    results:
      'Regulatory comparison table completed across 5 jurisdictions × 5 compliance domains. Company-level compliance assessment documented: EPR registration status, recycling obligation fulfillment, and identified gaps for each of the five manufacturers. A confirmed legal violation was distinguished from regulatory concerns and non-disclosed information.',
    conclusion:
      'India\'s 2022 E-Waste Rules create clear EPR obligations, but public disclosure and verifiable compliance data remain limited. Japan and Switzerland offer stronger models through mandatory source-level sorting, retail take-back, and industry-led EPR systems with built-in financing.',
    relatedProjectIds: ['proj-04'],
    resourceIds: ['pdf-03', 'pptx-03', 'docx-03', 'docx-04', 'img-02'],
  },
];

export function getExperimentById(id: string): Experiment | undefined {
  return experiments.find((e) => e.id === id);
}
