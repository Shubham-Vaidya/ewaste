import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Target, BookOpen, Microscope, BarChart2, CheckCircle, FolderOpen } from 'lucide-react';
import { experiments } from '../data/experiments';
import { resources } from '../data/resources';
import { projects } from '../data/projects';
import ResourceCard from '../components/ResourceCard';

export default function ExperimentDetail() {
  const { id } = useParams<{ id: string }>();
  const exp = experiments.find(e => e.id === id);

  if (!exp) {
    return (
      <div className="min-h-full flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-4xl mb-3">🔬</p>
          <h2 className="text-lg font-bold text-[#111827] mb-2">Experiment Not Found</h2>
          <Link to="/experiments" className="text-sm text-[#065f46] hover:underline">← Back to experiments</Link>
        </div>
      </div>
    );
  }

  const expResources = resources.filter(r => exp.resourceIds.includes(r.id));
  const relatedProjects = projects.filter(p => exp.relatedProjectIds.includes(p.id));

  const SECTIONS = [
    { key: 'objective', label: 'Objective', icon: Target, value: exp.objective },
    { key: 'description', label: 'Description', icon: BookOpen, value: exp.description },
    { key: 'methodology', label: 'Methodology', icon: Microscope, value: exp.methodology },
    { key: 'results', label: 'Results / Observations', icon: BarChart2, value: exp.results },
    { key: 'conclusion', label: 'Conclusion', icon: CheckCircle, value: exp.conclusion },
  ].filter(s => s.value);

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7eb] px-6 py-5 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/experiments"
            className="inline-flex items-center gap-1.5 text-xs text-[#6b7280] hover:text-[#065f46] transition-colors mb-3 no-underline"
          >
            <ArrowLeft size={13} /> Back to Experiments
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-white text-sm font-bold">{exp.number}</span>
            </div>
            <div>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-wide">Experiment {exp.number}</p>
              <h1 className="text-lg font-bold text-[#111827] leading-snug">{exp.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8 space-y-6">
        {/* Content sections */}
        {SECTIONS.map(({ key, label, icon: Icon, value }) => (
          <div key={key} className="bg-white rounded-xl border border-[#e5e7eb] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[#ecfdf5] rounded-md flex items-center justify-center">
                <Icon size={13} className="text-[#065f46]" />
              </div>
              <h2 className="text-sm font-bold text-[#111827]">{label}</h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">{value}</p>
          </div>
        ))}

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <div className="bg-white rounded-xl border border-[#e5e7eb] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[#ecfdf5] rounded-md flex items-center justify-center">
                <FolderOpen size={13} className="text-[#065f46]" />
              </div>
              <h2 className="text-sm font-bold text-[#111827]">Related Projects</h2>
            </div>
            <div className="flex flex-col gap-2">
              {relatedProjects.map(p => (
                <a
                  key={p.id}
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#f9fafb] border border-[#e5e7eb] hover:border-[#a7f3d0] hover:bg-[#ecfdf5] transition-colors no-underline"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-[#14532d] to-[#10b981] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FolderOpen size={13} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111827] truncate">{p.title}</p>
                    <p className="text-[11px] text-[#9ca3af] truncate">{p.liveUrl}</p>
                  </div>
                  <span className="text-xs bg-[#d1fae5] text-[#065f46] border border-[#a7f3d0] px-2 py-0.5 rounded-full font-medium flex-shrink-0">Live</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Supporting files */}
        {expResources.length > 0 && (
          <div className="bg-white rounded-xl border border-[#e5e7eb] p-5">
            <h2 className="text-sm font-bold text-[#111827] mb-3">Supporting Files ({expResources.length})</h2>
            <div className="flex flex-col gap-2">
              {expResources.map(r => (
                <ResourceCard key={r.id} resource={r} view="list" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
