import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-01',
    title: 'Assam E-Waste Watch',
    description:
      'A state-level e-waste intelligence dashboard for Assam that monitors generation, collection, recycling infrastructure, EPR compliance, informal-sector hotspots, and environmental health across all 35 districts. Built as a data-driven web application backed by a comprehensive Excel tracker workbook.',
    liveUrl:
      'https://preview--assam-ewaste-watch.lovable.app/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=b6472909-a7e3-4012-b9e6-13e01162f1a8&submissionId=bbca19a8-ebdb-6db8-ab90-9cfa2a5a6da8',
    technologies: ['React', 'Data Visualisation', 'E-Waste Tracking', 'Lovable'],
    category: 'Web Dashboard',
    thumbnail: '/resources/images/plasma_arc_metal_recovery.png',
    relatedExperimentIds: ['exp-02'],
    resourceIds: ['xlsx-01', 'pptx-01', 'docx-01'],
    status: 'live',
  },
  {
    id: 'proj-02',
    title: 'E-Waste Dashboard (Project 2)',
    description:
      'An interactive e-waste management dashboard deployed on Netlify. Provides visual insights into e-waste data, compliance tracking, and sustainability metrics. Part of the academic project series for the E-Waste Management subject.',
    liveUrl:
      'https://gilded-starlight-0c4fec.netlify.app/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=b50c1ce2-6167-487e-9f08-51a50e9fbaf0&submissionId=7106571f-526b-ea2a-d806-2791649fa5fe',
    technologies: ['React', 'Netlify', 'Data Visualisation'],
    category: 'Web Dashboard',
    relatedExperimentIds: ['exp-03'],
    resourceIds: ['xlsx-02'],
    status: 'live',
  },
  {
    id: 'proj-03',
    title: 'E-Waste Analytics Platform',
    description:
      'A comprehensive e-waste analytics platform providing in-depth environmental data, compliance reports, and resource recovery metrics. Features interactive charts and reporting tools for academic and professional use.',
    liveUrl:
      'https://edashb.netlify.app/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=b15bbdc9-86e6-5c3f-f56d-a5a579f69fed',
    technologies: ['React', 'Analytics', 'Netlify'],
    category: 'Analytics Platform',
    relatedExperimentIds: ['exp-03'],
    resourceIds: ['pptx-02'],
    status: 'live',
  },
  {
    id: 'proj-04',
    title: 'E-Waste Resource Portal (Project 4)',
    description:
      'An e-waste resource and awareness portal exploring sustainable electronics disposal, regulatory compliance, and circular economy principles. The fourth project in the E-Waste Management academic series.',
    liveUrl:
      'https://zippy-llama-956de9.netlify.app/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=f7c58a0a-f019-4032-9fc8-d08626ab7c25&submissionId=ae149f17-19fa-9af0-73ea-945590f3721f',
    technologies: ['React', 'Netlify', 'E-Waste Awareness'],
    category: 'Resource Portal',
    relatedExperimentIds: ['exp-05'],
    resourceIds: ['docx-03', 'docx-04', 'pptx-03'],
    status: 'live',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
