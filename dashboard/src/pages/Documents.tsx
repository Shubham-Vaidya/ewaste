import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Grid3X3, List, SlidersHorizontal, X, BookOpen } from 'lucide-react';
import { resources } from '../data/resources';
import { experiments } from '../data/experiments';
import type { ResourceType } from '../types';
import ResourceCard from '../components/ResourceCard';

const TYPE_LABELS: Record<string, string> = {
  all: 'All Types',
  pdf: 'PDF',
  xlsx: 'Excel',
  pptx: 'PPTX',
  docx: 'Word Doc',
  image: 'Image',
  video: 'Video',
  other: 'Other',
};

const FILE_TYPES = ['all', 'pdf', 'xlsx', 'pptx', 'docx', 'image', 'video'];

export default function Documents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialType = searchParams.get('type') ?? 'all';
  const initialQ = searchParams.get('q') ?? '';

  const [query, setQuery] = useState(initialQ);
  const [typeFilter, setTypeFilter] = useState<string>(initialType);
  const [expFilter, setExpFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'title' | 'size' | 'type'>('title');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  function applyTypeFilter(type: string) {
    setTypeFilter(type);
    const params: Record<string, string> = {};
    if (type !== 'all') params.type = type;
    if (query) params.q = query;
    setSearchParams(params);
  }

  const filtered = useMemo(() => {
    return resources
      .filter(r => {
        const matchQ = !query || [r.title, r.originalFilename, r.description ?? '', ...r.tags]
          .some(s => s.toLowerCase().includes(query.toLowerCase()));
        const matchType = typeFilter === 'all' || r.type === typeFilter;
        const matchExp = expFilter === 'all' || r.experimentId === expFilter;
        return matchQ && matchType && matchExp;
      })
      .sort((a, b) => {
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'type') return a.type.localeCompare(b.type);
        return 0;
      });
  }, [query, typeFilter, expFilter, sortBy]);

  function clearFilters() {
    setQuery('');
    setTypeFilter('all');
    setExpFilter('all');
    setSearchParams({});
  }

  const hasActiveFilters = query || typeFilter !== 'all' || expFilter !== 'all';

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7eb] px-6 py-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] rounded-lg flex items-center justify-center">
              <BookOpen size={16} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#111827]">Documents Library</h1>
          </div>
          <p className="text-sm text-[#6b7280] ml-11">
            {resources.length} resources from the <code className="text-xs bg-[#f3f4f6] px-1 rounded">documents/</code> folder - search, filter, view, and download
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-6 space-y-5">
        {/* Search + controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
            <input
              type="text"
              placeholder="Search by title, filename, description, or tag…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="search-input w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-[#e5e7eb] rounded-lg text-[#111827] placeholder:text-[#9ca3af]"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#374151]">
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-shrink-0">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as typeof sortBy)}
              className="text-sm border border-[#e5e7eb] rounded-lg px-3 py-2 bg-white text-[#374151] cursor-pointer"
            >
              <option value="title">Sort: Title</option>
              <option value="type">Sort: Type</option>
            </select>
            <div className="flex border border-[#e5e7eb] rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 transition-colors ${viewMode === 'list' ? 'bg-[#ecfdf5] text-[#065f46]' : 'bg-white text-[#6b7280] hover:bg-[#f9fafb]'}`}
                title="List view"
              >
                <List size={15} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 transition-colors ${viewMode === 'grid' ? 'bg-[#ecfdf5] text-[#065f46]' : 'bg-white text-[#6b7280] hover:bg-[#f9fafb]'}`}
                title="Grid view"
              >
                <Grid3X3 size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 items-center">
          <SlidersHorizontal size={14} className="text-[#9ca3af] flex-shrink-0" />
          {/* Type filters */}
          {FILE_TYPES.map(type => (
            <button
              key={type}
              onClick={() => applyTypeFilter(type)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                typeFilter === type
                  ? 'bg-[#065f46] text-white border-[#065f46]'
                  : 'bg-white text-[#374151] border-[#e5e7eb] hover:border-[#10b981] hover:text-[#065f46]'
              }`}
            >
              {TYPE_LABELS[type]}
            </button>
          ))}

          {/* Experiment filter */}
          <select
            value={expFilter}
            onChange={e => setExpFilter(e.target.value)}
            className="text-xs border border-[#e5e7eb] rounded-full px-3 py-1.5 bg-white text-[#374151] cursor-pointer"
          >
            <option value="all">All Experiments</option>
            {experiments.map(e => (
              <option key={e.id} value={e.id}>Exp {e.number}: {e.title.slice(0, 30)}…</option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-[#dc2626] hover:text-[#b91c1c] flex items-center gap-1 ml-auto"
            >
              <X size={12} /> Clear
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-xs text-[#6b7280]">
          Showing <span className="font-semibold text-[#111827]">{filtered.length}</span> of {resources.length} resources
        </p>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-[#e5e7eb] p-12 text-center">
            <p className="text-3xl mb-3">📭</p>
            <h3 className="text-sm font-bold text-[#111827] mb-1">No matching documents</h3>
            <p className="text-xs text-[#6b7280]">Try adjusting your search or filters</p>
            <button onClick={clearFilters} className="mt-3 text-xs text-[#065f46] hover:underline">Clear all filters</button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(r => (
              <ResourceCard key={r.id} resource={r} view="grid" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {filtered.map(r => (
              <ResourceCard key={r.id} resource={r} view="list" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
