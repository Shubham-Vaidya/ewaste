import { User, GraduationCap, BookOpen, Leaf, Recycle, Cpu, ArrowUpRight } from 'lucide-react';
import { student } from '../data/student';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#111827] to-[#14532d] px-6 py-10 lg:px-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#065f46] flex items-center justify-center flex-shrink-0 shadow-lg">
            <span className="text-white text-2xl font-bold">SV</span>
          </div>
          <div>
            <p className="text-[#a7f3d0] text-xs font-semibold uppercase tracking-wider mb-1">Student Portfolio</p>
            <h1 className="text-2xl font-bold text-white mb-2">{student.name}</h1>
            <div className="flex flex-wrap gap-2">
              {[
                [student.rollNumber, '🎓'],
                [student.division, '🏫'],
                [student.department, '💻'],
                [student.subject, '♻️'],
              ].map(([label, emoji]) => (
                <span key={label} className="inline-flex items-center gap-1 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/90">
                  {emoji} {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-8 space-y-6">

        {/* Academic Information */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={18} className="text-[#065f46]" />
            <h2 className="text-base font-bold text-[#111827]">Academic Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Student Name', student.name],
              ['Roll Number', student.rollNumber],
              ['Division', student.division],
              ['Department', student.department],
              ['Institute', student.institute],
              ['Subject', student.subject],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#f9fafb] rounded-lg p-3 border border-[#f3f4f6]">
                <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-[#111827]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About the dashboard */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-[#065f46]" />
            <h2 className="text-base font-bold text-[#111827]">About This Dashboard</h2>
          </div>
          <div className="prose prose-sm max-w-none text-[#4b5563] space-y-3 text-sm leading-relaxed">
            <p>
              This portal is the centralized academic portfolio for the <strong>E-Waste Management</strong> subject. It brings together all projects, experiments, research documents, spreadsheets, presentations, and visual resources created during the course into a single, navigable website.
            </p>
            <p>
              The dashboard is intended to make it easy for professors, reviewers, or classmates to explore the full scope of the academic work - from live deployed web applications to raw Excel workbooks, Word reports, and presentation slide decks - without needing to search through scattered files.
            </p>
            <p>
              All content shown in this portal is sourced from the actual <code>documents/</code> folder. No data, statistics, experimental results, or project links have been invented.
            </p>
          </div>
        </div>

        {/* Background: E-Waste */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6">
          <div className="flex items-center gap-2 mb-4">
            <Recycle size={18} className="text-[#065f46]" />
            <h2 className="text-base font-bold text-[#111827]">About E-Waste Management</h2>
            <span className="ml-auto text-[10px] bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0] rounded-full px-2 py-0.5 font-semibold">General Background</span>
          </div>
          <div className="text-sm text-[#4b5563] leading-relaxed space-y-3">
            <p>
              Electronic waste (e-waste) refers to discarded electrical and electronic equipment (EEE) - computers, mobile phones, televisions, household appliances, and their components. It is one of the fastest-growing waste streams globally.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
              {[
                { icon: Cpu, title: 'Resource Recovery', desc: 'Precious metals like gold, silver, copper, palladium, and platinum can be extracted from PCBs through hydrometallurgical or pyrometallurgical processes.' },
                { icon: Leaf, title: 'Environmental Impact', desc: 'Improper disposal releases hazardous substances including lead, mercury, cadmium, and brominated flame retardants into soil and water.' },
                { icon: Recycle, title: 'Circular Economy', desc: 'Extended Producer Responsibility (EPR) frameworks - like India\'s E-Waste Rules 2022 - place recycling obligations on manufacturers and producers.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-[#f9fafb] rounded-xl p-4 border border-[#f3f4f6]">
                  <div className="w-8 h-8 bg-[#ecfdf5] rounded-lg flex items-center justify-center mb-2">
                    <Icon size={15} className="text-[#065f46]" />
                  </div>
                  <h4 className="text-xs font-bold text-[#111827] mb-1">{title}</h4>
                  <p className="text-[11px] text-[#6b7280] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9ca3af] italic">
              The above is general background information on the topic. For specific findings from this student's experiments, see the Experiments section.
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div className="bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] rounded-2xl border border-[#a7f3d0] p-5">
          <h2 className="text-sm font-bold text-[#065f46] mb-3">Explore the Portfolio</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { to: '/projects', label: 'Projects' },
              { to: '/experiments', label: 'Experiments' },
              { to: '/documents', label: 'Documents' },
              { to: '/presentations', label: 'Presentations' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center justify-between gap-1 bg-white rounded-lg px-3 py-2.5 text-xs font-semibold text-[#065f46] border border-[#a7f3d0] hover:bg-[#ecfdf5] transition-colors no-underline shadow-sm"
              >
                {label}
                <ArrowUpRight size={12} />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
