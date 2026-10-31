import { Bookmark, Calendar, Compass, Sparkles, User } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="sticky top-0 z-4 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EBE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-[#E65100] to-[#FF8A65] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-[#111] leading-tight">
              EventSphere
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-500">
              Curated Conclaves
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link to="/explore" className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/3">
            <Compass className="w-4 h-4" />
            <span>Explore</span>
          </Link>

          <Link to="/schedule" className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/3">
            <Calendar className="w-4 h-4" />
            <span>Schedule</span>
          </Link>

          <Link to="/favorites" className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/3">
            <Bookmark className="w-4 h-4" />
            <span>Saved</span>
          </Link>

          <Link to="/profile" className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/3">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
