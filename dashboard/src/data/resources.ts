import type { Resource } from '../types';

export const resources: Resource[] = [
  // PDFs
  {
    id: 'pdf-01',
    title: 'E-Waste Assignment 0 - Submission',
    originalFilename: '24102A0059_E-Waste_Ass-0.pdf',
    type: 'pdf',
    description: 'Initial assignment submission for the E-Waste Management subject by Shubham Vaidya (Roll No. 24102A0059).',
    filePath: '/resources/pdfs/24102A0059_E-Waste_Ass-0.pdf',
    downloadUrl: '/resources/pdfs/24102A0059_E-Waste_Ass-0.pdf',
    experimentId: 'exp-01',
    tags: ['assignment', 'submission', 'e-waste'],
    fileSize: '82 KB',
  },
  {
    id: 'pdf-02',
    title: 'Adaptive Closed-Loop Hydrogen Recycling - Patent Idea',
    originalFilename: 'Adaptive_Closed_Loop_Hydrogen_Recycling_Patent_Idea_Updated.pdf',
    type: 'pdf',
    description: 'A detailed patent concept document on adaptive closed-loop hydrogen recycling technology for sustainable electronics manufacturing.',
    filePath: '/resources/pdfs/Adaptive_Closed_Loop_Hydrogen_Recycling_Patent_Idea_Updated.pdf',
    downloadUrl: '/resources/pdfs/Adaptive_Closed_Loop_Hydrogen_Recycling_Patent_Idea_Updated.pdf',
    experimentId: 'exp-04',
    tags: ['patent', 'hydrogen', 'recycling', 'innovation'],
    fileSize: '402 KB',
  },
  {
    id: 'pdf-03',
    title: 'E-Waste Case Study',
    originalFilename: 'ewaste_case_study.pdf',
    type: 'pdf',
    description: 'An in-depth case study examining real-world e-waste management practices, disposal challenges, and regulatory compliance.',
    filePath: '/resources/pdfs/ewaste_case_study.pdf',
    downloadUrl: '/resources/pdfs/ewaste_case_study.pdf',
    experimentId: 'exp-05',
    tags: ['case-study', 'e-waste', 'disposal', 'regulations'],
    fileSize: '50 KB',
  },

  // Spreadsheets
  {
    id: 'xlsx-01',
    title: 'Assam E-Waste Tracker',
    originalFilename: 'Assam_EWaste_Tracker.xlsx',
    type: 'xlsx',
    description: 'A comprehensive Excel workbook with 8 sheets tracking district-wise e-waste generation, collection logs, recycling infrastructure, EPR compliance, informal-sector hotspots, environmental health monitoring, and awareness programs across Assam. Includes automatic scorecard calculation.',
    filePath: '/resources/spreadsheets/Assam_EWaste_Tracker.xlsx',
    downloadUrl: '/resources/spreadsheets/Assam_EWaste_Tracker.xlsx',
    projectId: 'proj-01',
    experimentId: 'exp-02',
    tags: ['assam', 'tracker', 'excel', 'dashboard', 'compliance', 'epr'],
    fileSize: '45 KB',
  },
  {
    id: 'xlsx-02',
    title: 'E-Waste Data Workbook',
    originalFilename: 'DOC-20260922-WA0002.xlsx',
    type: 'xlsx',
    description: 'An Excel workbook containing e-waste data compiled on 22 September 2026 for analysis and reporting purposes.',
    filePath: '/resources/spreadsheets/DOC-20260922-WA0002.xlsx',
    downloadUrl: '/resources/spreadsheets/DOC-20260922-WA0002.xlsx',
    tags: ['data', 'excel', 'analysis'],
    fileSize: '18 KB',
  },

  // Presentations
  {
    id: 'pptx-01',
    title: 'Assam E-Waste Management Intelligence Dashboard - Presentation',
    originalFilename: 'Assam_EWaste_ppt_CMPN_A.pptx',
    type: 'pptx',
    description: 'Group presentation (CMPN A, Roll Nos. 18, 22, 59, 63) covering the Assam state-level e-waste intelligence dashboard: 30,865 tonnes/year estimated generation, 35 districts covered, 56.1/100 state scorecard, collection logs, recycling infrastructure, and recommendations.',
    filePath: '/resources/presentations/Assam_EWaste_ppt_CMPN_A.pptx',
    downloadUrl: '/resources/presentations/Assam_EWaste_ppt_CMPN_A.pptx',
    projectId: 'proj-01',
    experimentId: 'exp-02',
    tags: ['presentation', 'assam', 'dashboard', 'group', 'intelligence'],
    fileSize: '189 KB',
  },
  {
    id: 'pptx-02',
    title: 'ReLoop - The Second Life of Electronics',
    originalFilename: 'ReLoop_Presentation.pptx',
    type: 'pptx',
    description: 'Pitch deck for ReLoop, an AI-powered platform that gives every discarded phone, laptop, or gadget a digital identity and a real, recoverable value through scan -> identify -> value -> pickup -> second-life workflows.',
    filePath: '/resources/presentations/ReLoop_Presentation.pptx',
    downloadUrl: '/resources/presentations/ReLoop_Presentation.pptx',
    projectId: 'proj-03',
    experimentId: 'exp-03',
    tags: ['reloop', 'ai', 'platform', 'second-life', 'pitch-deck'],
    fileSize: '99 KB',
  },
  {
    id: 'pptx-03',
    title: 'Global E-Waste Case Studies 1-5',
    originalFilename: 'ewaste_case_studies_1-5.pptx',
    type: 'pptx',
    description: "Five international case studies: (1) Japan's Home Appliance Recycling Law, (2) Switzerland's EPR pioneer model, (3-5) Additional global best-practice examples for e-waste policy and urban mining.",
    filePath: '/resources/presentations/ewaste_case_studies_1-5.pptx',
    downloadUrl: '/resources/presentations/ewaste_case_studies_1-5.pptx',
    experimentId: 'exp-05',
    tags: ['case-studies', 'global', 'japan', 'switzerland', 'epr', 'policy'],
    fileSize: '39 KB',
  },

  // Word Documents
  {
    id: 'docx-01',
    title: 'Assam E-Waste Tracker - Project Report',
    originalFilename: 'Assam_EWaste_Tracker_Report.docx',
    type: 'docx',
    description: 'Full written report for the Assam E-Waste Tracker Excel project. Covers introduction, objectives, workbook overview (8 sheets), key features, results, and conclusions. Submitted by Shubham Vaidya and Mufeed Rajapkar.',
    filePath: '/resources/docs/Assam_EWaste_Tracker_Report.docx',
    downloadUrl: '/resources/docs/Assam_EWaste_Tracker_Report.docx',
    projectId: 'proj-01',
    experimentId: 'exp-02',
    tags: ['report', 'assam', 'tracker', 'word'],
    fileSize: '37 KB',
  },
  {
    id: 'docx-02',
    title: 'Noise-Aware Grover Key Search - Research Paper',
    originalFilename: 'CYCRAI2027_Track2_Noise_Aware_Grover_Paper.docx',
    type: 'docx',
    description: "Academic research paper submitted to CYCRAI 2027 (Track 2). Analyses how per-iteration logical errors limit the quantum speed-up of Grover's key-search algorithm against symmetric ciphers. Authors: Rahul Bansode, Rishabh Hatlunkar, Shubham Vaidya, Dhiraj Pawar.",
    filePath: '/resources/docs/CYCRAI2027_Track2_Noise_Aware_Grover_Paper.docx',
    downloadUrl: '/resources/docs/CYCRAI2027_Track2_Noise_Aware_Grover_Paper.docx',
    tags: ['research', 'quantum', 'grover', 'paper', 'conference'],
    fileSize: '205 KB',
  },
  {
    id: 'docx-03',
    title: 'Regulatory Compliance of Five Electronics Manufacturers in India',
    originalFilename: 'E_Waste_Compliance_Report_5_Companies.docx',
    type: 'docx',
    description: 'Comparative compliance report analysing Foxconn India, Dixon Technologies, Kaynes Technology, Tata Electronics, and Syrma SGS Technology against E-Waste (Management) Rules 2022 and CPCB requirements. Covers EPR registration, recycling obligations, and identified compliance gaps.',
    filePath: '/resources/docs/E_Waste_Compliance_Report_5_Companies.docx',
    downloadUrl: '/resources/docs/E_Waste_Compliance_Report_5_Companies.docx',
    experimentId: 'exp-05',
    tags: ['compliance', 'india', 'manufacturers', 'epr', 'regulations', 'cpcb'],
    fileSize: '55 KB',
  },
  {
    id: 'docx-04',
    title: 'Comparison of Environmental Regulations - 5 Countries',
    originalFilename: 'Environmental_Regulations_Comparison.docx',
    type: 'docx',
    description: 'Side-by-side regulatory comparison across India, Russia, Japan, United States, and Australia covering environmental permits, air pollution, water, waste management, and enforcement. Based on official sources checked August 2026.',
    filePath: '/resources/docs/Environmental_Regulations_Comparison.docx',
    downloadUrl: '/resources/docs/Environmental_Regulations_Comparison.docx',
    experimentId: 'exp-05',
    tags: ['regulations', 'global', 'comparison', 'india', 'japan', 'usa'],
    fileSize: '52 KB',
  },

  // Images
  {
    id: 'img-01',
    title: 'Plasma Arc Metal Recovery - Infographic',
    originalFilename: 'plasma_arc_metal_recovery.png',
    type: 'image',
    description: 'Visual infographic by Shubham Vaidya (24102A0059) explaining the five-step Plasma Arc Metal Recovery process for PCB e-waste: input, arc generation, melting and vaporisation, separation and collection, high-purity alloys. Recovers Au, Ag, Cu, Pd, Pt.',
    filePath: '/resources/images/plasma_arc_metal_recovery.png',
    downloadUrl: '/resources/images/plasma_arc_metal_recovery.png',
    experimentId: 'exp-04',
    tags: ['infographic', 'plasma-arc', 'metal-recovery', 'pcb', 'gold', 'silver'],
    fileSize: '2.1 MB',
  },
  {
    id: 'img-02',
    title: 'E-Waste Week College Campaign - Poster',
    originalFilename: 'ewaste_week_poster.jpg',
    type: 'image',
    description: 'College campaign poster for E-Waste Week by the Sustainability Cell. Promotes drop-off points, a goodies quiz, reels and posts, and a skit + film night to raise campus awareness about responsible e-waste disposal.',
    filePath: '/resources/images/ewaste_week_poster.jpg',
    downloadUrl: '/resources/images/ewaste_week_poster.jpg',
    tags: ['poster', 'campaign', 'awareness', 'college', 'sustainability'],
    fileSize: '151 KB',
  },
];

export function getResourceById(id: string): Resource | undefined {
  return resources.find((r) => r.id === id);
}

export function getResourcesByProject(projectId: string): Resource[] {
  return resources.filter((r) => r.projectId === projectId);
}

export function getResourcesByExperiment(experimentId: string): Resource[] {
  return resources.filter((r) => r.experimentId === experimentId);
}

export function getResourcesByType(type: string): Resource[] {
  return resources.filter((r) => r.type === type);
}
