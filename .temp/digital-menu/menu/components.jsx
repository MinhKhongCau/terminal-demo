/* The Terminal — Digital Menu components
   ─────────────────────────────────────────
   Brand palette
     Dark Iron      #3A3A3A   primary background
     Iron Deep      #2B2B2B   nested surface
     Brass / Bronze #CFA93F   headings, prices
     Brass Hot      #E7C463   hover highlight
     Quartz White   #F5F5F5   item titles
     Copper Muted   #B8967A   description text
     Patina         #6D827D   meta
*/

/* Framer Motion UMD attaches to window.Motion */
const FM = window.Motion || window.framerMotion || {};
const motion = FM.motion;
const AnimatePresence = FM.AnimatePresence;
const { useState, useEffect, useRef, useCallback } = React;

/* ─────────────────────────────────────────
   Header
───────────────────────────────────────── */
function MenuHeader({ branches, hotline, hours }) {
  return (
    <header className="relative grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 px-5 md:px-12 pt-10 md:pt-16 pb-12 md:pb-14">
      {/* Left — wordmark */}
      <div className="relative">
        <div className="flex items-center gap-4 mb-5">
          {/* Logo medallion */}
          <span className="relative w-12 h-12 grid place-items-center rounded-full shrink-0"
                style={{ background: 'radial-gradient(circle at 30% 30%, #E7C463, #8a6a1c 70%, #2a1d05)', boxShadow: '0 0 0 1px #1d1407, 0 4px 12px rgba(0,0,0,.5)' }}>
            <svg viewBox="0 0 64 64" width="22" height="22" fill="none" stroke="#1f1308" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 46h48"/>
              <path d="M14 42V26h16v16M30 42V18h20l6 8v16"/>
              <circle cx="20" cy="50" r="4"/><circle cx="40" cy="50" r="4"/><circle cx="52" cy="50" r="4"/>
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-[.32em] text-brass text-[12px]">THE TERMINAL</div>
            <div className="font-mono text-[10px] tracking-[.32em] text-cream/55">CAFE · EUROPEAN KITCHEN</div>
          </div>
        </div>

        <h1 className="font-display font-black text-transparent bg-clip-text leading-[.85] tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(5.5rem, 17vw, 12rem)',
              backgroundImage: 'linear-gradient(180deg, #F5E6BB 0%, #E7C463 25%, #CFA93F 55%, #8a6a1c 90%)',
              filter: 'drop-shadow(0 4px 0 rgba(0,0,0,.45)) drop-shadow(0 0 32px rgba(207,169,63,.18))'
            }}>
          Menu
        </h1>

        {/* Brass underline */}
        <div className="mt-5 md:mt-7 flex items-center gap-4">
          <span className="h-px flex-1 max-w-[200px]" style={{ background: 'linear-gradient(90deg, transparent, #CFA93F, transparent)' }}></span>
          <span className="font-mono text-[10px] tracking-[.4em] text-brass">— EST · 2024 —</span>
          <span className="h-px flex-1 max-w-[200px]" style={{ background: 'linear-gradient(90deg, transparent, #CFA93F, transparent)' }}></span>
        </div>
      </div>

      {/* Right — info card */}
      <div className="relative">
        <div className="relative paper-dark border border-brass/25 p-6 md:p-7 shadow-iron">
          <Rivet pos="tl" /><Rivet pos="tr" /><Rivet pos="bl" /><Rivet pos="br" />

          <div className="font-mono text-[10px] tracking-[.32em] text-brass mb-4">STATION HOUSE</div>

          <ul className="space-y-4">
            {branches.map((b, i) => (
              <li key={i} className="flex gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" className="mt-1 shrink-0 text-brass" fill="currentColor" aria-hidden="true">
                  <path d="M12 22s-7-7.58-7-13a7 7 0 0114 0c0 5.42-7 13-7 13z"/>
                  <circle cx="12" cy="9" r="2.5" fill="#2B2B2B"/>
                </svg>
                <div className="flex-1 min-w-0">
                  <div className="font-display tracking-[.18em] text-brass text-[12px]">{b.name}</div>
                  <div className="text-cream/85 text-[13px] leading-snug mt-0.5">{b.address}</div>
                  <div className="font-mono text-cream/60 text-[12px] mt-1 tabular-nums">{b.phone}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="track-divider my-5"></div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px]">
            <div className="font-mono tracking-[.18em] text-cream/55">HOURS</div>
            <div className="font-mono text-cream tabular-nums">{hours}</div>
            <div className="font-mono tracking-[.18em] text-cream/55">HOTLINE</div>
            <div className="font-mono text-brass tabular-nums">{hotline}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Rivet({ pos }) {
  const map = { tl: 'top-2 left-2', tr: 'top-2 right-2', bl: 'bottom-2 left-2', br: 'bottom-2 right-2' };
  return (
    <span className={`absolute ${map[pos]} w-2 h-2 rounded-full`}
          style={{ background: 'radial-gradient(circle at 30% 30%, #CFA93F, #6b4d12 70%, #2a1d05)', boxShadow: '0 1px 1px rgba(255,255,255,.2), 0 2px 3px rgba(0,0,0,.6)' }} />
  );
}

/* ─────────────────────────────────────────
   Category title
───────────────────────────────────────── */
function CategoryTitle({ label, icon }) {
  return (
    <div className="relative flex items-center gap-5 my-12 md:my-16 px-5 md:px-12">
      <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(207,169,63,.35) 30%, rgba(207,169,63,.55))' }}></span>
      <div className="flex items-center gap-3 px-4 md:px-6 py-2">
        {icon}
        <span className="font-script text-brass leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', textShadow: '0 2px 0 rgba(0,0,0,.4), 0 0 24px rgba(207,169,63,.18)' }}>
          {label}
        </span>
      </div>
      <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(207,169,63,.55), rgba(207,169,63,.35) 70%, transparent)' }}></span>
    </div>
  );
}

/* ─────────────────────────────────────────
   Single menu item (clickable)
───────────────────────────────────────── */
function MenuItem({ item, onOpen, idx }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { rootMargin: '-40px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(item)}
      style={{
        transitionDelay: `${(idx % 6) * 40}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(18px)',
      }}
      className="group relative w-full text-left flex items-start justify-between gap-5
                 px-4 md:px-5 py-4 md:py-5 min-h-[64px] rounded-sm
                 border-b border-brass/10
                 hover:bg-brass/[.05] active:scale-[.985]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/60
                 [transition:opacity_.6s_cubic-bezier(.22,1,.36,1),transform_.6s_cubic-bezier(.22,1,.36,1),background-color_.3s_ease,scale_.15s]"
    >
      {/* Left edge brass tick on hover */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[2px] bg-brass transition-[height] duration-300 group-hover:h-2/3 group-focus-visible:h-2/3" aria-hidden="true"></span>

      {/* LEFT — name & desc */}
      <div className="min-w-0 flex-1">
        <h3 className="font-display font-bold tracking-[.08em] uppercase text-quartz
                       text-[15px] md:text-[16px] leading-snug
                       group-hover:text-brass-hot transition-colors">
          {item.name}
        </h3>
        <p className="mt-1.5 text-copper text-[13px] md:text-[14px] leading-snug max-w-[44ch] italic">
          {item.desc}
        </p>
      </div>

      {/* RIGHT — price + arrow */}
      <div className="flex items-center gap-3 shrink-0 pt-0.5">
        <span className="font-display font-bold text-brass tabular-nums text-[18px] md:text-[20px] tracking-wider"
              style={{ textShadow: '0 1px 0 rgba(0,0,0,.4)' }}>
          {item.price}
        </span>
        <span className="font-mono text-brass/60 text-[11px] tracking-[.2em] hidden sm:inline">VND</span>
        <span className="text-brass opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">→</span>
      </div>

      {/* Animated underline accent */}
      <span className="absolute left-4 right-4 md:left-5 md:right-5 bottom-0 h-px origin-left scale-x-0
                       group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-500"
            style={{ background: 'linear-gradient(90deg, #CFA93F, transparent)' }} aria-hidden="true"></span>
    </button>
  );
}

/* ─────────────────────────────────────────
   Category section — two-column grid
───────────────────────────────────────── */
function MenuCategory({ id, label, script, icon, items, onOpen }) {
  return (
    <section id={id} className="px-5 md:px-12">
      <CategoryTitle label={script || label} icon={icon} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 -mt-4">
        {items.map((it, i) => (
          <MenuItem key={it.name} item={it} idx={i} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Detail modal (Framer Motion)
───────────────────────────────────────── */
function DishDetailModal({ item, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!item) return;
    const prev = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      prev?.focus?.();
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="dish-modal"
          className="fixed inset-0 z-[80] grid place-items-center p-4 md:p-8"
          role="dialog" aria-modal="true" aria-labelledby="dish-title"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
                       paper-dark border border-brass/40
                       shadow-[0_30px_80px_rgba(0,0,0,.7)] grid md:grid-cols-[1.05fr_1fr]"
            initial={{ opacity: 0, y: 40, scale: .96 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: .97 }}
            transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
          >
            <Rivet pos="tl" /><Rivet pos="tr" /><Rivet pos="bl" /><Rivet pos="br" />

            {/* Image */}
            <div className="relative overflow-hidden min-h-[240px] md:min-h-[420px]"
                 style={{
                   background: `linear-gradient(135deg, rgba(0,0,0,.2), rgba(0,0,0,.55)), url('${item.img || PLACEHOLDER_IMG}') center/cover no-repeat`,
                   filter: 'sepia(.3) saturate(.95) contrast(1.05)'
                 }}>
              <div className="absolute inset-0 ring-1 ring-inset ring-brass/30 pointer-events-none"></div>
              {/* Stamp */}
              <div className="absolute top-4 left-4 rounded-full border-2 border-dashed border-brass/70 grid place-items-center w-16 h-16 -rotate-6"
                   style={{ background: 'rgba(0,0,0,.45)', backdropFilter: 'blur(2px)' }}>
                <div className="text-center">
                  <div className="font-mono text-brass text-[8px] tracking-[.2em] leading-tight">CHEF'S</div>
                  <div className="font-mono text-brass text-[8px] tracking-[.2em] leading-tight">PICK</div>
                </div>
              </div>
              {/* Caption ribbon */}
              <div className="absolute bottom-0 inset-x-0 px-5 py-2 font-mono text-[10px] tracking-[.3em]"
                   style={{ background: 'linear-gradient(180deg, #CFA93F, #8a6a1c)', color: '#1f1308' }}>
                {item.category?.toUpperCase()} · {item.name.toUpperCase()}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 relative">
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-10 h-10 grid place-items-center
                           text-brass hover:bg-brass/15 rounded-full transition-colors
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/60"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>

              <div className="font-mono text-[10px] tracking-[.32em] text-brass">{item.category}</div>

              <h2 id="dish-title"
                  className="font-display font-bold uppercase text-quartz tracking-[.06em] mt-2 leading-tight"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)' }}>
                {item.name}
              </h2>

              <p className="mt-2 text-copper italic text-[15px] leading-relaxed">{item.desc}</p>

              <div className="track-divider my-5"></div>

              <div className="flex items-baseline justify-between mb-5">
                <div>
                  <div className="font-mono text-[10px] tracking-[.3em] text-cream/50">FARE</div>
                  <div className="font-display font-black text-brass leading-none mt-1"
                       style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', textShadow: '0 2px 0 rgba(0,0,0,.45)' }}>
                    {item.price}<span className="font-mono text-brass/60 text-base tracking-[.2em] ml-2">VND</span>
                  </div>
                </div>
                <div className="text-right text-[11px] text-cream/55 font-mono tracking-[.18em]">
                  SERVES&nbsp;<span className="text-quartz">{item.serves || 1}</span>
                </div>
              </div>

              {/* Allergens */}
              <div className="mb-4">
                <div className="font-mono text-[10px] tracking-[.3em] text-cream/50 mb-2">CONTAINS</div>
                <div className="flex flex-wrap gap-2">
                  {(item.allergens || ['Gluten', 'Dairy']).map((a, i) => (
                    <span key={`${a}-${i}`} className="text-[11px] font-mono tracking-[.16em] text-brass border border-brass/40 px-2.5 py-1 rounded-sm">
                      {a.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pairing */}
              <div className="mb-5">
                <div className="font-mono text-[10px] tracking-[.3em] text-cream/50 mb-2">CHEF'S PAIRING</div>
                <div className="flex items-start gap-3 p-3 bg-brass/[.06] border-l-2 border-brass/60">
                  <span className="text-brass mt-0.5">❦</span>
                  <p className="text-cream/85 text-[13.5px] italic leading-snug">{item.pairing || 'A glass of dry Riesling — pour it cool, sip it slow.'}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full btn-brass py-3 px-5 text-[12px]"
              >
                CLOSE TICKET
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const PLACEHOLDER_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0' stop-color='#3a2410'/><stop offset='1' stop-color='#1a0e07'/>
      </linearGradient>
    </defs>
    <rect width='800' height='600' fill='url(#g)'/>
    <g fill='none' stroke='#CFA93F' stroke-width='2' opacity='.35'>
      <circle cx='400' cy='300' r='90'/><circle cx='400' cy='300' r='120'/>
    </g>
    <text x='400' y='455' text-anchor='middle' fill='#CFA93F' font-family='monospace' font-size='14' letter-spacing='6'>DISH IMAGE</text>
  </svg>`
);

Object.assign(window, { MenuHeader, MenuCategory, MenuItem, DishDetailModal, CategoryTitle, PLACEHOLDER_IMG });
