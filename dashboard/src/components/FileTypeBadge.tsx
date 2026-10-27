import type { ResourceType } from '../types';
import { FileText, FileSpreadsheet, Presentation, Image, Video, File } from 'lucide-react';

interface Props {
  type: ResourceType;
  size?: 'sm' | 'md';
}

const CONFIG: Record<ResourceType, { label: string; cls: string; Icon: React.ElementType }> = {
  pdf:   { label: 'PDF',   cls: 'badge-pdf',   Icon: FileText },
  xlsx:  { label: 'XLSX',  cls: 'badge-xlsx',  Icon: FileSpreadsheet },
  pptx:  { label: 'PPTX', cls: 'badge-pptx',  Icon: Presentation },
  docx:  { label: 'DOCX', cls: 'badge-docx',  Icon: FileText },
  csv:   { label: 'CSV',  cls: 'badge-xlsx',  Icon: FileSpreadsheet },
  image: { label: 'Image',cls: 'badge-image', Icon: Image },
  video: { label: 'Video',cls: 'badge-video', Icon: Video },
  txt:   { label: 'TXT',  cls: 'badge-other', Icon: FileText },
  other: { label: 'File', cls: 'badge-other', Icon: File },
};

export default function FileTypeBadge({ type, size = 'sm' }: Props) {
  const { label, cls, Icon } = CONFIG[type] ?? CONFIG.other;
  return (
    <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 font-mono font-semibold ${size === 'sm' ? 'text-[10px]' : 'text-xs'} ${cls}`}>
      <Icon size={size === 'sm' ? 10 : 12} />
      {label}
    </span>
  );
}
