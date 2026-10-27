import { ExternalLink, Globe } from 'lucide-react';
import type { Project } from '../types';
import { resources } from '../data/resources';
import FileTypeBadge from './FileTypeBadge';

interface Props {
  project: Project;
}

const STATUS_CONFIG = {
  live: { label: 'Live', cls: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  unavailable: { label: 'Unavailable', cls: 'bg-red-50 text-red-600 border-red-200' },
  unverified: { label: 'Unverified', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
};

export default function ProjectCard({ project }: Props) {
  const relatedResources = resources.filter(r => project.resourceIds.includes(r.id));
  const status = STATUS_CONFIG[project.status];

  return (
    <div className="hover-lift bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-sm">
      {/* Header band */}
      <div className="h-2 bg-gradient-to-r from-[#14532d] via-[#10b981] to-[#34d399]" />

      <div className="p-5 flex flex-col gap-4">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${status.cls}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'live' ? 'badge-live' : 'bg-current'}`} />
                {status.label}
              </span>
              <span className="text-[10px] text-[#9ca3af] bg-[#f9fafb] border border-[#e5e7eb] rounded-full px-2 py-0.5">
                {project.category}
              </span>
            </div>
            <h3 className="text-base font-bold text-[#111827] leading-snug">{project.title}</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] border border-[#a7f3d0] flex items-center justify-center flex-shrink-0">
            <Globe size={18} className="text-[#065f46]" />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#4b5563] leading-relaxed line-clamp-3">{project.description}</p>

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map(tech => (
              <span key={tech} className="tag-pill">{tech}</span>
            ))}
          </div>
        )}

        {/* Related files */}
        {relatedResources.length > 0 && (
          <div className="border-t border-[#f3f4f6] pt-3">
            <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-2">Related Files</p>
            <div className="flex flex-wrap gap-2">
              {relatedResources.map(r => (
                <a
                  key={r.id}
                  href={r.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                  title={r.title}
                >
                  <FileTypeBadge type={r.type} />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#065f46] to-[#10b981] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm mt-auto"
        >
          <ExternalLink size={15} />
          View Live Project
        </a>
      </div>
    </div>
  );
}
