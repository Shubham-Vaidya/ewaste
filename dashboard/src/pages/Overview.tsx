import { Link } from 'react-router-dom';
import {
  FolderOpen, FlaskConical, FileText, Presentation,
  ExternalLink, ArrowRight, BookOpen, FileSpreadsheet,
  Leaf, BarChart3, Globe
} from 'lucide-react';
import { projects } from '../data/projects';
import { experiments } from '../data/experiments';
import { resources } from '../data/resources';
import { student } from '../data/student';
import ProjectCard from '../components/ProjectCard';

const pdfCount = resources.filter(r => r.type === 'pdf').length;
const xlsxCount = resources.filter(r => r.type === 'xlsx').length;
const pptxCount = resources.filter(r => r.type === 'pptx').length;
const docxCount = resources.filter(r => r.type === 'docx').length;
const imageCount = resources.filter(r => r.type === 'image').length;

const STATS = [
  { label: 'Projects', value: projects.length, icon: FolderOpen, color: 'text-[#065f46]', bg: 'bg-[#ecfdf5]' },
  { label: 'Experiments', value: experiments.length, icon: FlaskConical, color: 'text-[#1d4ed8]', bg: 'bg-[#eff6ff]' },
  { label: 'Documents', value: resources.length, icon: FileText, color: 'text-[#7c3aed]', bg: 'bg-[#f5f3ff]' },
  { label: 'Presentations', value: pptxCount, icon: Presentation, color: 'text-[#ea580c]', bg: 'bg-[#fff7ed]' },
  { label: 'Live Links', value: projects.filter(p => p.status === 'live').length, icon: Globe, color: 'text-[#0284c7]', bg: 'bg-[#f0f9ff]' },
];

const QUICK_ACCESS = [
  { to: '/projects', label: 'All Projects', icon: FolderOpen, count: projects.length, color: 'from-[#14532d] to-[#10b981]' },
  { to: '/experiments', label: 'Experiments', icon: FlaskConical, count: experiments.length, color: 'from-[#1e40af] to-[#3b82f6]' },
  { to: '/documents?type=pdf', label: 'PDF Reports', icon: FileText, count: pdfCount, color: 'from-[#dc2626] to-[#f87171]' },
  { to: '/documents?type=xlsx', label: 'Excel Files', icon: FileSpreadsheet, count: xlsxCount, color: 'from-[#16a34a] to-[#4ade80]' },
  { to: '/presentations', label: 'Presentations', icon: Presentation, count: pptxCount, color: 'from-[#ea580c] to-[#fb923c]' },
  { to: '/documents', label: 'All Documents', icon: BookOpen, count: resources.length, color: 'from-[#7c3aed] to-[#a78bfa]' },
];

export default function Overview() {
  return (
    <div className="min-h-full circuit-bg">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#111827] via-[#14532d] to-[#065f46] px-6 py-10 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4">
                <Leaf size={12} className="text-[#34d399]" />
                <span className="text-[11px] font-semibold text-[#a7f3d0] uppercase tracking-wider">E-Waste Management</span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
                Electronic Waste Management<br />
                <span className="text-[#34d399]">Project Portfolio</span>
              </h1>
              <p className="text-sm text-[#9ca3af] max-w-xl leading-relaxed">
                A centralized collection of projects, experiments, research documents, spreadsheets, and presentations exploring electronic waste management and sustainability.
              </p>
            </div>

            {/* Student card */}
            <div className="glass-card rounded-2xl p-5 min-w-[220px] bg-white/5 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#10b981] to-[#065f46] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">SV</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{student.name}</p>
                  <p className="text-[11px] text-[#9ca3af]">{student.rollNumber}</p>
                </div>
              </div>
              <div className="space-y-1.5">
                {[
                  ['Division', student.division],
                  ['Dept', student.department],
                  ['Subject', student.subject],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2">
                    <span className="text-[10px] text-[#6b7280] uppercase tracking-wide w-12 flex-shrink-0">{k}</span>
                    <span className="text-[11px] text-[#d1d5db] font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-8 space-y-10">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {STATS.map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="hover-lift bg-white rounded-xl border border-[#e5e7eb] p-4 text-center">
              <div className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                <Icon size={18} className={color} />
              </div>
              <p className={`text-2xl font-bold ${color}`}>{value}</p>
              <p className="text-xs text-[#6b7280] mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Quick access */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#111827]">Quick Access</h2>
            <BarChart3 size={16} className="text-[#9ca3af]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {QUICK_ACCESS.map(({ to, label, icon: Icon, count, color }) => (
              <Link
                key={to}
                to={to}
                className="hover-lift bg-white rounded-xl border border-[#e5e7eb] p-4 flex flex-col items-center gap-2 no-underline text-center group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm`}>
                  <Icon size={18} className="text-white" />
                </div>
                <p className="text-xs font-semibold text-[#111827] group-hover:text-[#065f46] transition-colors">{label}</p>
                <span className="text-[10px] text-[#9ca3af]">{count} item{count !== 1 ? 's' : ''}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured projects */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-[#111827]">Featured Projects</h2>
              <p className="text-xs text-[#6b7280] mt-0.5">All 4 live academic projects</p>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-1 text-xs font-semibold text-[#065f46] hover:text-[#10b981] transition-colors no-underline"
            >
              View all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Explore resources */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#111827]">Explore Resources</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link to="/documents?type=pdf" className="no-underline hover-lift bg-white rounded-xl border border-[#e5e7eb] p-4 flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#fef2f2] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={16} className="text-[#dc2626]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] group-hover:text-[#065f46] transition-colors">{pdfCount} PDF Reports</p>
                <p className="text-xs text-[#9ca3af]">Academic submissions & case studies</p>
              </div>
              <ArrowRight size={14} className="ml-auto text-[#9ca3af] group-hover:text-[#065f46] transition-colors" />
            </Link>
            <Link to="/documents?type=xlsx" className="no-underline hover-lift bg-white rounded-xl border border-[#e5e7eb] p-4 flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#f0fdf4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileSpreadsheet size={16} className="text-[#16a34a]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] group-hover:text-[#065f46] transition-colors">{xlsxCount} Excel Workbooks</p>
                <p className="text-xs text-[#9ca3af]">Trackers, data & analysis</p>
              </div>
              <ArrowRight size={14} className="ml-auto text-[#9ca3af] group-hover:text-[#065f46] transition-colors" />
            </Link>
            <Link to="/documents?type=docx" className="no-underline hover-lift bg-white rounded-xl border border-[#e5e7eb] p-4 flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={16} className="text-[#2563eb]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] group-hover:text-[#065f46] transition-colors">{docxCount} Word Reports</p>
                <p className="text-xs text-[#9ca3af]">Compliance & research docs</p>
              </div>
              <ArrowRight size={14} className="ml-auto text-[#9ca3af] group-hover:text-[#065f46] transition-colors" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <Link to="/presentations" className="no-underline hover-lift bg-white rounded-xl border border-[#e5e7eb] p-4 flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#fff7ed] rounded-lg flex items-center justify-center flex-shrink-0">
                <Presentation size={16} className="text-[#ea580c]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] group-hover:text-[#065f46] transition-colors">{pptxCount} Presentations</p>
                <p className="text-xs text-[#9ca3af]">PPTX slide decks</p>
              </div>
              <ArrowRight size={14} className="ml-auto text-[#9ca3af] group-hover:text-[#065f46] transition-colors" />
            </Link>
            <Link to="/documents?type=image" className="no-underline hover-lift bg-white rounded-xl border border-[#e5e7eb] p-4 flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#fdf4ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <ExternalLink size={16} className="text-[#9333ea]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] group-hover:text-[#065f46] transition-colors">{imageCount} Visual Assets</p>
                <p className="text-xs text-[#9ca3af]">Infographics & posters</p>
              </div>
              <ArrowRight size={14} className="ml-auto text-[#9ca3af] group-hover:text-[#065f46] transition-colors" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
