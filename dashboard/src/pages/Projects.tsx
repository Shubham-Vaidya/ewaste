import { FolderOpen, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7eb] px-6 py-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-[#14532d] to-[#10b981] rounded-lg flex items-center justify-center">
              <FolderOpen size={16} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#111827]">Projects</h1>
          </div>
          <p className="text-sm text-[#6b7280] ml-11">
            {projects.length} live academic projects from the E-Waste Management subject - all links verified from <code className="text-xs bg-[#f3f4f6] px-1 rounded">ewaste_project_links.txt</code>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-8">
        {/* Info banner */}
        <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-xl p-4 mb-6 flex items-start gap-3">
          <ExternalLink size={16} className="text-[#065f46] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-[#065f46]">All project links are sourced from your text file</p>
            <p className="text-xs text-[#047857] mt-0.5">
              URLs are used exactly as provided. Each link opens in a new tab. Status shown as "Live" reflects the URL being present in the source file - actual availability depends on the host.
            </p>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
