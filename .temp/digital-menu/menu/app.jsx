/* Root app for Digital Menu */
const { useState, useEffect } = React;

function MenuApp() {
  const [activeDish, setActiveDish] = useState(null);
  const [filter, setFilter] = useState('all');

  const open = (item, category) => setActiveDish({ ...item, category });
  const close = () => setActiveDish(null);

  const cats = filter === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === filter);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-quartz">
      {/* Ambient gear ornaments */}
      <svg viewBox="0 0 100 100" className="absolute -top-32 -left-32 w-[480px] h-[480px] text-brass/[.04] gear-slow pointer-events-none" aria-hidden="true">
        <use href="#g-gear"/>
      </svg>
      <svg viewBox="0 0 100 100" className="absolute top-[60%] -right-32 w-[420px] h-[420px] text-brass/[.04] gear-rev pointer-events-none" aria-hidden="true">
        <use href="#g-gear"/>
      </svg>

      {/* SVG defs */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <symbol id="g-gear" viewBox="0 0 100 100">
            <g fill="currentColor">
              <path d="M50 8l4 8 9-2 2 9 8 4-3 9 7 6-6 7 3 9-8 4-2 9-9-2-4 8-4-8-9 2-2-9-8-4 3-9-7-6 6-7-3-9 8-4 2-9 9 2z"/>
              <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="6"/>
            </g>
          </symbol>
        </defs>
      </svg>

      <MenuHeader
        branches={BRANCHES}
        hotline="1900 6403"
        hours="11:00 — 22:00"
      />

      {/* Sticky filter rail */}
      <div className="sticky top-0 z-30 mx-5 md:mx-12 paper-dark border-y border-brass/20 backdrop-blur-md/0">
        <div className="flex gap-1 overflow-x-auto no-scrollbar py-2 px-1">
          <FilterPill active={filter==='all'} onClick={()=>setFilter('all')}>ALL</FilterPill>
          {CATEGORIES.map(c => (
            <FilterPill key={c.id} active={filter===c.id} onClick={()=>setFilter(c.id)}>
              {c.label.toUpperCase()}
            </FilterPill>
          ))}
          <div className="ml-auto pr-3 py-1.5 font-mono text-[10px] tracking-[.3em] text-cream/40 self-center hidden md:block">
            TAP A DISH TO READ MORE
          </div>
        </div>
      </div>

      {/* Categories */}
      <main className="pb-24 md:pb-32">
        {cats.map(c => (
          <MenuCategory
            key={c.id}
            id={c.id}
            label={c.label}
            icon={c.icon}
            items={c.items}
            onOpen={(item)=> open(item, c.label)}
          />
        ))}

        {/* Footer plate */}
        <footer className="mt-20 mx-5 md:mx-12 pt-10 border-t border-brass/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-cream/55 font-mono text-[11px] tracking-[.2em]">
          <div>© 2024 THE TERMINAL · ALL JOURNEYS RESERVED.</div>
          <div className="text-brass">PRICES IN ’000 VND · SERVICE & VAT EXCLUSIVE</div>
        </footer>
      </main>

      <DishDetailModal item={activeDish} onClose={close} />
    </div>
  );
}

function FilterPill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        'shrink-0 min-h-[44px] px-4 md:px-5 font-display tracking-[.22em] text-[11px] transition-colors ' +
        (active
          ? 'text-iron2 bg-gradient-to-b from-[#E7C463] to-[#8a6a1c] shadow-[inset_0_1px_0_rgba(255,255,255,.4),inset_0_-2px_0_rgba(0,0,0,.35)]'
          : 'text-cream/65 hover:text-brass')
      }
    >
      {children}
    </button>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MenuApp />);
