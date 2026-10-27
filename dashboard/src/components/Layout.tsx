import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderOpen,
  FlaskConical,
  FileText,
  Presentation,
  User,
  Menu,
  X,
  Search,
  Leaf,
  ChevronRight,
} from 'lucide-react';
import { student } from '../data/student';

const NAV_ITEMS = [
  { to: '/', label: 'Overview', icon: LayoutDashboard, exact: true },
  { to: '/projects', label: 'Projects', icon: FolderOpen },
  { to: '/experiments', label: 'Experiments', icon: FlaskConical },
  { to: '/documents', label: 'Documents', icon: FileText },
  { to: '/presentations', label: 'Presentations', icon: Presentation },
  { to: '/about', label: 'About', icon: User },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/documents?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSidebarOpen(false);
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f9fafb]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="mobile-overlay lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 flex flex-col
          bg-white border-r border-[#e5e7eb] shadow-sm
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:flex
        `}
      >
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-[#e5e7eb]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#14532d] to-[#10b981] flex items-center justify-center shadow-sm flex-shrink-0">
            <Leaf size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-700 text-[#111827] leading-tight truncate font-semibold">E-Waste Portal</p>
            <p className="text-[11px] text-[#6b7280] truncate">Academic Dashboard</p>
          </div>
          <button
            className="ml-auto lg:hidden text-[#6b7280] hover:text-[#111827]"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-[#e5e7eb]">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
              <input
                type="text"
                placeholder="Search documents…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input w-full pl-8 pr-3 py-2 text-sm bg-[#f9fafb] border border-[#e5e7eb] rounded-lg text-[#111827] placeholder:text-[#9ca3af]"
              />
            </div>
          </form>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          <p className="px-3 mb-1 text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider">Navigation</p>
          {NAV_ITEMS.map(({ to, label, icon: Icon, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `sidebar-nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-sm border-l-2 cursor-pointer no-underline
                 ${isActive
                   ? 'active bg-[#ecfdf5] text-[#065f46] border-[#10b981]'
                   : 'text-[#374151] border-transparent hover:bg-[#f9fafb]'
                 }`
              }
            >
              <Icon size={16} className="flex-shrink-0" />
              <span>{label}</span>
              <ChevronRight size={13} className="ml-auto opacity-30" />
            </NavLink>
          ))}
        </nav>

        {/* Student card */}
        <div className="p-4 border-t border-[#e5e7eb]">
          <div className="bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] rounded-xl p-3 border border-[#a7f3d0]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#14532d] to-[#10b981] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">SV</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#065f46] truncate">{student.name}</p>
                <p className="text-[10px] text-[#6b7280] truncate">{student.rollNumber} · {student.division}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar (mobile) */}
        <header className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-[#e5e7eb] sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-[#6b7280] hover:text-[#111827] transition-colors"
          >
            <Menu size={22} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#14532d] to-[#10b981] flex items-center justify-center">
              <Leaf size={13} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-[#111827]">E-Waste Portal</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
