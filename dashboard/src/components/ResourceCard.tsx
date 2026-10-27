import type { Resource } from '../types';
import { Download, Eye } from 'lucide-react';
import FileTypeBadge from './FileTypeBadge';

interface Props {
  resource: Resource;
  view?: 'grid' | 'list';
}

export default function ResourceCard({ resource, view = 'list' }: Props) {
  const canPreview = resource.type === 'pdf' || resource.type === 'image';

  if (view === 'grid') {
    return (
      <div className="hover-lift bg-white rounded-xl border border-[#e5e7eb] p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <FileTypeBadge type={resource.type} size="md" />
          {resource.fileSize && (
            <span className="text-[10px] text-[#9ca3af] font-mono flex-shrink-0">{resource.fileSize}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-[#111827] leading-snug line-clamp-2">{resource.title}</h3>
          {resource.description && (
            <p className="mt-1 text-xs text-[#6b7280] line-clamp-3">{resource.description}</p>
          )}
        </div>
        {resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {resource.tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        )}
        <div className="flex gap-2 mt-auto pt-1 border-t border-[#f3f4f6]">
          {canPreview && (
            <a
              href={resource.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#065f46] hover:text-[#10b981] transition-colors"
            >
              <Eye size={13} /> View
            </a>
          )}
          <a
            href={resource.downloadUrl}
            download={resource.originalFilename}
            className="flex items-center gap-1.5 text-xs font-medium text-[#374151] hover:text-[#065f46] transition-colors ml-auto"
          >
            <Download size={13} /> Download
          </a>
        </div>
      </div>
    );
  }

  // List view
  return (
    <div className="hover-lift bg-white rounded-lg border border-[#e5e7eb] px-4 py-3 flex items-center gap-3">
      <FileTypeBadge type={resource.type} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#111827] truncate">{resource.title}</p>
        <p className="text-xs text-[#9ca3af] font-mono truncate">{resource.originalFilename}</p>
      </div>
      {resource.fileSize && (
        <span className="hidden sm:block text-[11px] text-[#9ca3af] font-mono flex-shrink-0">{resource.fileSize}</span>
      )}
      <div className="flex items-center gap-2 flex-shrink-0">
        {canPreview && (
          <a
            href={resource.filePath}
            target="_blank"
            rel="noopener noreferrer"
            title="View"
            className="p-1.5 rounded-md text-[#6b7280] hover:text-[#065f46] hover:bg-[#ecfdf5] transition-colors"
          >
            <Eye size={15} />
          </a>
        )}
        <a
          href={resource.downloadUrl}
          download={resource.originalFilename}
          title="Download"
          className="p-1.5 rounded-md text-[#6b7280] hover:text-[#065f46] hover:bg-[#ecfdf5] transition-colors"
        >
          <Download size={15} />
        </a>
      </div>
    </div>
  );
}
