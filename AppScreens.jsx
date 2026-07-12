/* 여운 app — primary screens (Login, Home, Profile detail). Exposed on window. */
const DS = window.YuonDesignSystem_8624c6;

// ── shared screen helpers ───────────────────────────────────────
function SectionHeader({ title, accent, sub, action, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', margin: '0 2px 14px' }}>
      <div>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
          {title}{accent ? <span style={{ color: 'var(--color-accent-500)' }}>{accent}</span> : null}
        </div>
        {sub ? <div style={{ marginTop: 3, fontSize: 13, color: 'var(--color-text-meta)' }}>{sub}</div> : null}
      </div>
      {action ? (
        <button onClick={onAction} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--font-family-base)', fontSize: 13, fontWeight: 500, color: 'var(--color-text-tertiary)' }}>{action}</button>
      ) : null}
    </div>
  );
}

// ── Splash / Login ──────────────────────────────────────────────
function LoginScreen({ onSignup, onLogin }) {
  const socialBtns = [
    { bg: '#FEE500', content: <svg width="22" height="20" viewBox="0 0 22 20" fill="none"><path d="M11 0C4.926 0 0 3.806 0 8.5c0 3.028 2.009 5.68 5.03 7.187L3.86 19.65a.4.4 0 0 0 .585.434L9.4 16.89c.524.07 1.059.11 1.6.11 6.074 0 11-3.806 11-8.5S17.074 0 11 0Z" fill="#3C1E1E"/></svg> },
    { bg: '#fff', border: '#E0E0E0', content: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M21.6 11.25c0-.75-.07-1.47-.19-2.17H11v4.1h5.96a5.1 5.1 0 0 1-2.21 3.34v2.77h3.57c2.09-1.92 3.28-4.75 3.28-8.04Z" fill="#4285F4"/><path d="M11 22c2.99 0 5.49-1 7.32-2.71l-3.57-2.77C13.65 17.47 12.42 18 11 18c-2.88 0-5.32-1.94-6.19-4.55H1.13v2.86A11 11 0 0 0 11 22Z" fill="#34A853"/><path d="M4.81 13.45A6.6 6.6 0 0 1 4.47 11c0-.85.15-1.67.34-2.45V5.69H1.13A11 11 0 0 0 0 11c0 1.77.43 3.45 1.13 4.95l3.68-2.5Z" fill="#FBBC05"/><path d="M11 4.45c1.62 0 3.07.56 4.22 1.66l3.17-3.17C16.48 1.1 13.97 0 11 0A11 11 0 0 0 1.13 5.69l3.68 2.86C5.68 6.39 8.12 4.45 11 4.45Z" fill="#EA4335"/></svg> },
    { bg: '#03C75A', content: <span style={{ fontSize: 15, fontWeight: 800, color: '#fff', fontFamily: 'sans-serif' }}>N</span> },
    { bg: '#fff', border: '#E0E0E0', content: <img src="send.svg" alt="email" width="20" height="20" style={{ filter: 'invert(0.4)' }} /> },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden',
      background: '#5AC7C4', color: '#fff' }}>
      {/* subtle radial glow top */}
      <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)', pointerEvents: 'none' }} />
      {/* top: logo + title */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 80, zIndex: 1 }}>
        {/* App icon */}
        <div style={{ width: 80, height: 80, borderRadius: 22, background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
          <svg width="48" height="44" viewBox="0 0 48 44" fill="none">
            <path d="M24 6C15.5 6 8 12.5 8 21c0 5.5 3.5 10.3 8.5 13L14 39l7-3.5c1 .2 2 .3 3 .3 8.5 0 16-5.8 16-14S32.5 6 24 6Z" fill="none"/>
            <path d="M36 8a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" fill="none"/>
            <path d="M24 3C13.5 3 5 10.2 5 19c0 6.2 3.8 11.7 9.5 14.8L12 41l9-4.5c1 .2 2 .3 3 .3 10.5 0 19-7.2 19-16S34.5 3 24 3Z" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
            {/* moon */}
            <path d="M28 10a8 8 0 0 1-8 8 8 8 0 0 0 8 8 8 8 0 0 0 0-16Z" fill="white"/>
            {/* star */}
            <circle cx="34" cy="10" r="2" fill="white"/>
          </svg>
        </div>
        {/* YUON wordmark */}
        <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: '0.12em', color: '#fff', marginBottom: 10, fontFamily: 'var(--font-family-base)' }}>YUON</div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.01em', marginBottom: 40 }}>안녕하세요, 유은에 오신 걸 환영해요</div>
        {/* Character mascot */}
        <div style={{ position: 'relative', width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* glow behind */}
          <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)' }} />
          {/* sparkles */}
          <div style={{ position: 'absolute', top: 10, left: 20, fontSize: 14, opacity: 0.8 }}>✦</div>
          <div style={{ position: 'absolute', top: 30, right: 15, fontSize: 10, opacity: 0.6 }}>✦</div>
          <div style={{ position: 'absolute', bottom: 20, left: 10, fontSize: 10, opacity: 0.6 }}>✦</div>
          <img src="여운 누끼 보라 카페트 1.png" alt="유은 캐릭터" style={{ width: 180, height: 180, objectFit: 'contain', position: 'relative', zIndex: 1 }} />
        </div>
      </div>
      {/* bottom CTA */}
      <div style={{ padding: '0 24px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, zIndex: 1 }}>
        <button onClick={onSignup} style={{ width: '100%', height: 54, borderRadius: 30, background: '#FF8C7D', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer', letterSpacing: '-0.01em', marginBottom: 14, boxShadow: '0 6px 20px rgba(255,140,125,0.45)' }}>
          회원가입 후 시작하기
        </button>
        <button onClick={onLogin} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-family-base)', fontSize: 14, fontWeight: 500, padding: '8px 0 18px', cursor: 'pointer' }}>
          이미 계정이 있어요
        </button>
        {/* social login row */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {socialBtns.map((s, i) => (
            <button key={i} onClick={onLogin} style={{ width: 48, height: 48, borderRadius: '50%', background: s.bg, border: s.border ? `1px solid ${s.border}` : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
              {s.content}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 위치 기반 모드 시트 (flowchart §3) ───────────────────────────
const LOC_RANGES = [
  { key: 'gu', title: '같은 구', region: '마포구', desc: '같은 구 안에서 가까운 인연을 만나요', rings: 1 },
  { key: 'near', title: '인근 지역', region: '서울 서북권', desc: '구를 넘어 인근 권역까지 넓혀요', rings: 2 },
  { key: 'city', title: '서울 전체', region: '서울 전역', desc: '서울 어디서나 좋은 인연을 찾아요', rings: 3 },
];

function LocationSheet({ open, onClose, range, onApply }) {
  const { IconButton, Icon, Button } = DS;
  const [sel, setSel] = React.useState(range);
  React.useEffect(() => { if (open) setSel(range); }, [open]);
  if (!open) return null;
  const cur = LOC_RANGES.find((r) => r.key === sel) || LOC_RANGES[0];
  return (
    <>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(30,28,24,0.4)', zIndex: 60, animation: 'locfade var(--duration-base) var(--ease-standard)' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 61, background: 'var(--color-surface-card)', borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0', padding: '12px 24px 30px', boxShadow: '0 -8px 30px rgba(30,28,24,0.16)' }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--color-natural-200)', margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>위치 기반으로 만나기</h2>
          <IconButton icon={<Icon name="x" size={20} />} onClick={onClose} ariaLabel="닫기" />
        </div>
        {/* privacy note */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--color-primary-50)', marginBottom: 22 }}>
          <Icon name="lock" size={14} color="var(--color-primary-600)" />
          <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-primary-700)' }}>상세 주소(동·번지)는 공개되지 않아요</span>
        </div>
        {/* radius visual */}
        <div style={{ position: 'relative', height: 168, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
          {[160, 110, 60].map((d, i) => {
            const lvl = 3 - i; // outer=3 ... inner=1
            const on = cur.rings >= lvl;
            return <div key={d} style={{ position: 'absolute', width: d, height: d, borderRadius: '50%', border: `1.5px solid ${on ? 'var(--color-primary-400)' : 'var(--color-natural-200)'}`, background: on ? `rgba(90,199,196,${0.05 + (3 - lvl) * 0.04})` : 'transparent', transition: 'all var(--duration-base) var(--ease-standard)' }} />;
          })}
          <div style={{ position: 'relative', width: 44, height: 44, borderRadius: '50%', background: 'var(--color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px rgba(45,142,140,0.4)' }}>
            <Icon name="mapPin" size={22} color="#fff" />
          </div>
          <span style={{ position: 'absolute', bottom: 6, fontSize: 13, fontWeight: 700, color: 'var(--color-primary-700)', background: 'var(--color-surface-card)', padding: '2px 10px', borderRadius: 'var(--radius-pill)' }}>{cur.region}</span>
        </div>
        {/* range options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '14px 0 22px' }}>
          {LOC_RANGES.map((r) => {
            const on = r.key === sel;
            return (
              <button key={r.key} onClick={() => setSel(r.key)} style={{ display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: `1.5px solid ${on ? 'var(--color-primary-500)' : 'var(--color-border-default)'}`, background: on ? 'var(--color-primary-50)' : 'var(--color-surface-card)', cursor: 'pointer' }}>
                <span style={{ width: 22, height: 22, flexShrink: 0, borderRadius: '50%', border: `1.5px solid ${on ? 'var(--color-primary-500)' : 'var(--color-border-strong)'}`, background: on ? 'var(--color-primary-500)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {on && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />}
                </span>
                <span style={{ flex: 1 }}>
                  <span style={{ display: 'block', fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>{r.title} <span style={{ fontWeight: 500, color: 'var(--color-text-tertiary)' }}>· {r.region}</span></span>
                  <span style={{ display: 'block', marginTop: 2, fontSize: 13, color: 'var(--color-text-meta)' }}>{r.desc}</span>
                </span>
              </button>
            );
          })}
        </div>
        <Button variant="primary" size="lg" fullWidth onClick={() => onApply(sel)}>이 범위로 인연 보기</Button>
        <style>{`@keyframes locfade{from{opacity:0}to{opacity:1}}`}</style>
      </div>
    </>
  );
}

// ── Home (오늘의 매칭) ─────────────────────────────────────────────
function HomeScreen({ onOpenProfile }) {
  const { IconButton, Icon, FortuneBanner, ProfileFeedCard } = DS;
  const data = window.YuonData;
  const [locOpen, setLocOpen] = React.useState(false);
  const [locOn, setLocOn] = React.useState(false);
  const [range, setRange] = React.useState('gu');
  const curRange = LOC_RANGES.find((r) => r.key === range) || LOC_RANGES[0];
  const wd = ['일', '월', '화', '수', '목', '금', '토'];
  const d = new Date();
  const today = `${d.getMonth() + 1}월 ${d.getDate()}일 ${wd[d.getDay()]}요일`;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px 8px 18px', flexShrink: 0, background: 'var(--color-surface-page)' }}>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>{today}</div>
        <button onClick={() => setLocOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, padding: 4 }}>
          <img src="location.svg" alt="위치" width="22" height="22" style={{ opacity: locOn ? 1 : 0.55 }} />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0 24px' }}>
        {/* 오늘의 연애운 banner */}
        <div style={{ margin: '4px 16px 0', borderRadius: 18, background: 'var(--color-primary-500)', padding: '18px 16px 16px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', overflow: 'hidden', position: 'relative', minHeight: 120 }}>
          <div style={{ flex: 1, zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 6, letterSpacing: '0.04em' }}>오늘의 연애운</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: 14 }}>오늘은 새로운 사람에게<br />마음이 열리는 날이에요</div>
            <button onClick={() => {}} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.22)', border: 'none', borderRadius: 99, padding: '6px 14px', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              내 사주 연애운 보기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          {/* mascot illustration */}
          <div style={{ position: 'relative', width: 100, height: 100, flexShrink: 0, marginTop: -4 }}>
            <img src="여운 누끼 1 수정 화면 하트 3.png" alt="" style={{ position: 'absolute', right: -4, bottom: -8, width: 80, height: 80, objectFit: 'contain' }} />
            <img src="여운 뒤통수 12 누끼 2.png" alt="" style={{ position: 'absolute', left: -4, bottom: -8, width: 72, height: 72, objectFit: 'contain' }} />
          </div>
          {/* soft radial glow */}
          <div style={{ position: 'absolute', top: -20, right: -20, width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)', pointerEvents: 'none' }} />
        </div>

        {/* feed */}
        <div style={{ padding: '0 16px', marginTop: 28 }}>
          <SectionHeader title={locOn ? '' : '오늘의 '} accent={locOn ? `${curRange.region}의 인연` : '추천 인연'} sub={locOn ? '가까운 거리순으로 보여드려요' : '사주 궁합이 높은 순으로 보여드려요'} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {data.profiles.map((p) => {
              const elIcon = data.elementIcons[p.el];
              return (
                <div key={p.id} onClick={() => onOpenProfile(p.id)} style={{ borderRadius: 16, overflow: 'hidden', background: 'var(--color-surface-card)', boxShadow: '0 2px 12px rgba(30,28,24,0.09)', cursor: 'pointer', WebkitTapHighlightColor: 'transparent', border: '1px solid var(--color-border-default)' }}>
                  {/* photo */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', background: 'var(--color-natural-200)' }}>
                    <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    {/* score badge top-left */}
                    <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, padding: '6px 9px 5px', borderRadius: 12, background: 'rgba(255,255,255,0.97)', boxShadow: '0 2px 8px rgba(0,0,0,0.14)' }}>
                      <img src="_heart.svg" alt="" width="16" height="14" />
                      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1 }}>{p.score}점</span>
                    </div>
                    {/* activity pills bottom */}
                    <div style={{ position: 'absolute', left: 10, bottom: 10, display: 'flex', gap: 6 }}>
                      {p.activity && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, height: 26, padding: '0 10px', borderRadius: 999, background: 'rgba(28,26,24,0.52)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 500 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7ECECA' }} />{p.activity}</span>}
                      {p.sajuTag && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 26, padding: elIcon ? '0 10px 0 4px' : '0 10px', borderRadius: 999, background: 'rgba(255,100,60,0.82)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 600 }}>
                        {elIcon ? <img src={elIcon} alt="" style={{ width: 18, height: 18, borderRadius: 5, objectFit: 'cover' }} /> : null}{p.sajuTag}
                      </span>}
                    </div>
                  </div>
                  {/* info below */}
                  <div style={{ padding: '12px 14px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                      <img src="인증.svg" alt="인증" width="20" height="20" />
                      <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>{p.name}, {p.age}</span>
                    </div>
                    {p.intro && <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.45, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.intro}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <LocationSheet open={locOpen} range={range} onClose={() => setLocOpen(false)}
        onApply={(r) => { setRange(r); setLocOn(true); setLocOpen(false); }} />
    </div>
  );
}

// ── Profile detail ──────────────────────────────────────────────
function InfoRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--color-divider)' }}>
      <span style={{ fontSize: 14, color: 'var(--color-text-meta)' }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)' }}>{value}</span>
    </div>
  );
}

function SectionTitle({ children, sub }) {
  return (
    <div style={{ margin: '26px 0 12px' }}>
      <div className="t-title">{children}</div>
      {sub ? <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--color-text-meta)' }}>{sub}</p> : null}
    </div>
  );
}

function OverlayTag({ icon, iconSrc, children, tone }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, height: 30, padding: iconSrc ? '0 12px 0 5px' : '0 12px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.92)', color: tone === 'gold' ? 'var(--color-primary-800)' : 'var(--color-natural-800)', fontSize: 13, fontWeight: 600, boxShadow: 'var(--shadow-sm)' }}>
      {iconSrc ? <img src={iconSrc} alt="" style={{ width: 22, height: 22, borderRadius: 7, objectFit: 'cover' }} /> : <span aria-hidden="true">{icon}</span>}{children}
    </span>
  );
}

function ProfileDetailScreen({ profileId, onBack, onQuiet, onInterest, savedQuiet }) {
  const { IconButton, Icon, Tag } = DS;
  const p = window.YuonData.byId(profileId);
  const traits = window.YuonData.traits;
  const elIcons = window.YuonData.elementIcons;
  const meEl = 'fire';
  if (!p) return null;

  const drinkLabel = p.drink === '안 함' ? '안 마셔요' : p.drink === '즐김' ? '자주 마셔요' : '가끔 마셔요';
  const smokeLabel = p.smoke === '비흡연' ? '비흡연자예요' : '흡연자예요';

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 102 }}>

        {/* ── 사진 헤더 ── */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 2.6', background: 'var(--color-natural-200)' }}>
          <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          {/* 상단 버튼 */}
          <div style={{ position: 'absolute', top: 52, left: 8, right: 8, display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.32)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="chevron-left.svg" alt="뒤로" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
            </button>
            <button style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.32)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="menu-dots.svg" alt="더보기" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
            </button>
          </div>
          {/* 페이지 인디케이터 */}
          <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 5 }}>
            <span style={{ width: 20, height: 5, borderRadius: 3, background: '#fff' }} />
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.55)' }} />
          </div>
        </div>

        {/* ── 이름 + 활동정보 ── */}
        <div style={{ padding: '18px 20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* 인증 뱃지 */}
              <img src="인증.svg" alt="인증" width="24" height="24" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>{p.name}, {p.age}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--color-text-meta)', fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4CAF50', flexShrink: 0 }} />{p.activity}
              </span>
              <span style={{ fontSize: 13, color: 'var(--color-text-meta)', fontWeight: 500 }}>19km</span>
            </div>
          </div>

          {/* ── 기본 정보 테이블 ── */}
          <div style={{ marginTop: 16, borderRadius: 14, border: '1px solid var(--color-border-default)', overflow: 'hidden', background: 'var(--color-surface-card)' }}>
            {[
              { label: '직업', value: p.job },
              { label: '거주지', value: p.district },
              { label: '키', value: `${p.height}cm` },
              { label: '음주', value: drinkLabel },
              { label: '흡연', value: smokeLabel },
              { label: '종교', value: p.religion },
            ].map((row, i, arr) => (
              <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 16px', borderBottom: i < arr.length - 1 ? '1px solid var(--color-divider)' : 'none' }}>
                <span style={{ fontSize: 14, color: 'var(--color-text-meta)' }}>{row.label}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)' }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* ── 자기소개 ── */}
          <SectionTitle>자기소개</SectionTitle>
          <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-body)' }}>{p.bio}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {p.impressions.map((k) => (
              <span key={k} style={{ display: 'inline-flex', alignItems: 'center', height: 32, padding: '0 14px', borderRadius: 999, border: '1px solid var(--color-border-strong)', fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)', background: 'var(--color-surface-card)' }}>{k}</span>
            ))}
          </div>

          {/* ── 당신과 {name}님은 ── */}
          <div style={{ margin: '30px 0 14px' }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-text-primary)' }}>당신과 </span>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-accent-500)' }}>{p.name}</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-text-primary)' }}>님은</span>
          </div>
          <div style={{ borderRadius: 20, background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', padding: '22px 20px 20px' }}>
            {/* 원소 아이콘 + 캐릭터 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <img src={elIcons[meEl]} alt="" style={{ width: 40, height: 40, borderRadius: 12, objectFit: 'cover' }} />
              {/* 커플 캐릭터 */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 2 }}>
                <img src="여운 누끼 1 화면 하트 수정22 3.png" alt="나" style={{ width: 76, height: 76, objectFit: 'contain' }} />
                <img src="_heart.svg" alt="heart" width="20" height="20" style={{ marginBottom: 12, flexShrink: 0 }} />
                <img src="여운 누끼 보라 카페트 1.png" alt="상대방" style={{ width: 76, height: 76, objectFit: 'contain' }} />
              </div>
              <img src={elIcons[p.el]} alt="" style={{ width: 40, height: 40, borderRadius: 12, objectFit: 'cover' }} />
            </div>
            {/* 점수 */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 10 }}>
              <span style={{ fontSize: 40, fontWeight: 800, color: 'var(--color-accent-500)', letterSpacing: '-0.03em' }}>{p.score}점</span>
            </div>
            {/* 점수 바 */}
            <div style={{ position: 'relative', height: 8, borderRadius: 999, background: 'var(--color-natural-100)', marginBottom: 16 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${p.score}%`, borderRadius: 999, background: 'linear-gradient(90deg, var(--color-accent-300), var(--color-accent-500))' }} />
            </div>
            {/* 설명 */}
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>{p.synergy}</p>
          </div>

          {/* ── 성향과 재능 ── */}
          <div style={{ margin: '30px 0 14px' }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-accent-500)' }}>{p.name}</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-text-primary)' }}>님의 성향과 재능</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {traits.map((t, i) => (
              <div key={i} style={{ paddingBottom: i < traits.length - 1 ? 22 : 0, marginBottom: i < traits.length - 1 ? 22 : 0, borderBottom: i < traits.length - 1 ? '1px solid var(--color-divider)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--color-natural-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>
                    {String(t.icon).includes('/') ? <img src={t.icon} alt="" style={{ width: 22, height: 22, borderRadius: 6, objectFit: 'cover' }} /> : t.icon}
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.title}</span>
                </div>
                <p style={{ margin: '0 0 0 44px', fontSize: 13, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{t.desc}</p>
              </div>
            ))}
          </div>

          {/* ── 취미 피드 ── */}
          <SectionTitle>취미 피드</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, paddingBottom: 8 }}>
            {(p.hobbies || []).map((h, i) => (
              <div key={i} style={{ aspectRatio: '1 / 1', borderRadius: 10, overflow: 'hidden', background: 'var(--color-natural-200)' }}>
                <img src={h} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 하단 액션 바 ── */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px 30px', background: 'var(--color-surface-card)', borderTop: '1px solid var(--color-border-default)' }}>
        <button onClick={onQuiet} style={{ flex: 1, height: 54, border: `1.5px solid ${savedQuiet ? 'var(--color-accent-400)' : 'var(--color-border-strong)'}`, borderRadius: 'var(--radius-pill)', background: savedQuiet ? 'var(--color-accent-50)' : 'var(--color-surface-card)', color: savedQuiet ? 'var(--color-accent-600)' : 'var(--color-text-secondary)', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <img src="heart.svg" alt="" width="18" height="18" style={{ filter: savedQuiet ? 'none' : 'grayscale(1) opacity(0.4)' }} />
          마음에 담기
        </button>
        <button onClick={onInterest} style={{ flex: 1, height: 54, border: 'none', borderRadius: 'var(--radius-pill)', background: 'var(--color-accent-400)', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <img src="_heart.svg" alt="" width="18" height="18" style={{ filter: 'brightness(0) invert(1)' }} />
          관심 표현
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen, HomeScreen, ProfileDetailScreen, SectionHeader });
