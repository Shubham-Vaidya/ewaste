import { Link } from 'react-router-dom';
import { FlaskConical, ArrowRight, FileText, FileSpreadsheet, Presentation, ChevronRight } from 'lucide-react';
import { experiments } from '../data/experiments';
import { resources } from '../data/resources';
import FileTypeBadge from '../components/FileTypeBadge';

const TYPE_ICON: Record<string, React.ElementType> = {
  pdf: FileText,
  xlsx: FileSpreadsheet,
  pptx: Presentation,
  docx: FileText,
  image: FileText,
};

export default function Experiments() {
  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7eb] px-6 py-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] rounded-lg flex items-center justify-center">
              <FlaskConical size={16} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#111827]">Experiments & Practicals</h1>
          </div>
          <p className="text-sm text-[#6b7280] ml-11">
            {experiments.length} experiments derived from the actual documents in the collection
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-8 space-y-4">
        {experiments.map(exp => {
          const expResources = resources.filter(r => exp.resourceIds.includes(r.id));
          return (
            <Link
              key={exp.id}
              to={`/experiments/${exp.id}`}
              className="no-underline block"
            >
              <div className="hover-lift bg-white rounded-xl border border-[#e5e7eb] p-5 group">
                <div className="flex items-start gap-4">
                  {/* Number badge */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-white text-sm font-bold">{exp.number}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-sm font-bold text-[#111827] group-hover:text-[#065f46] transition-colors leading-snug">
                        Experiment {exp.number}: {exp.title}
                      </h2>
                      <ChevronRight size={16} className="text-[#9ca3af] group-hover:text-[#10b981] transition-colors flex-shrink-0 mt-0.5" />
                    </div>

                    <p className="text-xs text-[#6b7280] mt-1.5 line-clamp-2 leading-relaxed">
                      <span className="font-semibold text-[#374151]">Objective:</span> {exp.objective}
                    </p>

                    {/* Resource pills */}
                    {expResources.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {expResources.map(r => (
                          <span
                            key={r.id}
                            onClick={e => e.preventDefault()}
                            className="inline-flex items-center gap-1"
                          >
                            <FileTypeBadge type={r.type} />
                          </span>
                        ))}
                        <span className="text-[10px] text-[#9ca3af] self-center ml-1">
                          {expResources.length} file{expResources.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
