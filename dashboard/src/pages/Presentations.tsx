import { Presentation, Download, ExternalLink } from 'lucide-react';
import { resources } from '../data/resources';
import { experiments } from '../data/experiments';
import { projects } from '../data/projects';

const presentations = resources.filter(r => r.type === 'pptx');

function getContext(r: typeof presentations[number]) {
  const exp = experiments.find(e => e.resourceIds.includes(r.id));
  const proj = projects.find(p => p.resourceIds.includes(r.id));
  return { exp, proj };
}

export default function Presentations() {
  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7eb] px-6 py-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-[#ea580c] to-[#fb923c] rounded-lg flex items-center justify-center">
              <Presentation size={16} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#111827]">Presentations</h1>
          </div>
          <p className="text-sm text-[#6b7280] ml-11">
            {presentations.length} PowerPoint presentations - download or open to view slides
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-8">
        {/* Browser support notice */}
        <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-4 mb-6 flex items-start gap-3">
          <Presentation size={15} className="text-[#ea580c] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[#9a3412]">
            <span className="font-semibold">Viewing tip:</span> PPTX files cannot be rendered in-browser natively. Use "Open" to view in Microsoft PowerPoint or Google Slides, or "Download" to save the original file.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {presentations.map(pres => {
            const { exp, proj } = getContext(pres);
            return (
              <div key={pres.id} className="hover-lift bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-sm">
                {/* Color band */}
                <div className="h-2 bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fb923c]" />

                {/* Icon area */}
                <div className="bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] flex items-center justify-center py-8">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-[#fed7aa]">
                    <Presentation size={28} className="text-[#ea580c]" />
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-[#111827] leading-snug">{pres.title}</h3>
                    <p className="text-[11px] text-[#9ca3af] font-mono mt-0.5 truncate">{pres.originalFilename}</p>
                  </div>

                  {pres.description && (
                    <p className="text-xs text-[#6b7280] leading-relaxed line-clamp-3">{pres.description}</p>
                  )}

                  {/* Context chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp && (
                      <span className="text-[10px] bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] rounded-full px-2 py-0.5 font-medium">
                        Exp {exp.number}
                      </span>
                    )}
                    {proj && (
                      <span className="text-[10px] bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0] rounded-full px-2 py-0.5 font-medium">
                        {proj.title.slice(0, 20)}…
                      </span>
                    )}
                    {pres.fileSize && (
                      <span className="text-[10px] text-[#9ca3af] font-mono ml-auto">{pres.fileSize}</span>
                    )}
                  </div>

                  {/* Tags */}
                  {pres.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {pres.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 pt-2 border-t border-[#f3f4f6]">
                    <a
                      href={pres.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 flex-1 justify-center py-2 rounded-lg bg-[#fff7ed] text-[#ea580c] text-xs font-semibold border border-[#fed7aa] hover:bg-[#ffedd5] transition-colors"
                    >
                      <ExternalLink size={13} /> Open
                    </a>
                    <a
                      href={pres.downloadUrl}
                      download={pres.originalFilename}
                      className="flex items-center gap-1.5 flex-1 justify-center py-2 rounded-lg bg-[#111827] text-white text-xs font-semibold hover:bg-[#1f2937] transition-colors"
                    >
                      <Download size={13} /> Download
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
