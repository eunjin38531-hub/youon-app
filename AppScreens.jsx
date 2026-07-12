/* 여운 app — primary screens (Login, Home, Profile detail). Exposed on window. */
const DS = window.YuonDesignSystem_8624c6;

// ── 4-pointed sparkle ──────────────────────────────────────────
function Sparkle({ size, opacity = 0.75, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={{ position: 'absolute', pointerEvents: 'none', ...style }}>
      <path d="M10 0 L11.2 8.8 L20 10 L11.2 11.2 L10 20 L8.8 11.2 L0 10 L8.8 8.8 Z" fill={`rgba(255,255,255,${opacity})`} />
    </svg>
  );
}

// ── Splash / Login ──────────────────────────────────────────────
function LoginScreen({ onSignup, onLogin }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#4DC5C2' }}>

      {/* 상단: 아이콘 + 워드마크 + 서브타이틀 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 60, zIndex: 1, position: 'relative', flexShrink: 0 }}>
        {/* 아이콘 뒤 큰 흰 글로우 */}
        <div style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.28) 0%, transparent 60%)', pointerEvents: 'none' }} />
        {/* 아이콘 박스 — 흰 배경 위에 teal 색상 PNG */}
        <div style={{ position: 'relative', width: 120, height: 120, borderRadius: 30, background: 'rgba(255,255,255,0.92)', boxShadow: '0 6px 24px rgba(0,0,0,0.14)', marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <img src="images/yuon-app-icon.png" alt="유온" style={{ width: 96, height: 96, objectFit: 'contain' }} />
        </div>
        <img src="images/yuon-wordmark.png" alt="YUON" style={{ height: 40, objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: 10, position: 'relative' }} />
        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.01em', position: 'relative' }}>안녕하세요, 유온에 오신 걸 환영해요</span>
      </div>

      {/* 캐릭터 영역 */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <Sparkle size={10} opacity={0.60} style={{ top: '12%', left: '8%' }} />
        <Sparkle size={6}  opacity={0.40} style={{ top: '5%',  left: '30%' }} />
        <Sparkle size={8}  opacity={0.50} style={{ top: '8%',  right: '12%' }} />
        <Sparkle size={6}  opacity={0.40} style={{ top: '40%', right: '6%' }} />
        <Sparkle size={7}  opacity={0.45} style={{ bottom: '20%', left: '7%' }} />
        <Sparkle size={6}  opacity={0.40} style={{ bottom: '30%', right: '11%' }} />
        <img src="images/dufkdddl 1.png" alt="유온 캐릭터" style={{ width: 340, height: 380, objectFit: 'contain', position: 'relative', marginBottom: -10 }} />
      </div>

      {/* 하단 CTA */}
      <div style={{ padding: '0 24px 44px', zIndex: 1, flexShrink: 0 }}>
        <button
          onClick={onSignup}
          style={{ width: '100%', height: 56, borderRadius: 999, background: '#FF8471', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 17, fontWeight: 700, border: 'none', cursor: 'pointer', letterSpacing: '-0.02em' }}
        >
          회원가입 후 시작하기
        </button>

        <div style={{ textAlign: 'center', padding: '14px 0 16px' }}>
          <button
            onClick={onLogin}
            style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-family-base)', fontSize: 14, fontWeight: 400, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3, letterSpacing: '-0.01em' }}
          >
            이미 계정이 있어요
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
          <button onClick={onLogin} style={{ width: 56, height: 56, borderRadius: '50%', padding: 0, border: 'none', cursor: 'pointer', background: 'none' }}>
            <img src="images/image 109.png" alt="카카오" style={{ width: 56, height: 56, borderRadius: '50%', display: 'block' }} />
          </button>
          <button onClick={onLogin} style={{ width: 56, height: 56, borderRadius: '50%', padding: 0, border: 'none', cursor: 'pointer', background: 'none' }}>
            <img src="images/image 110.png" alt="구글" style={{ width: 56, height: 56, borderRadius: '50%', display: 'block' }} />
          </button>
          <button onClick={onLogin} style={{ width: 56, height: 56, borderRadius: '50%', padding: 0, border: 'none', cursor: 'pointer', background: 'none' }}>
            <img src="images/image 111.png" alt="네이버" style={{ width: 56, height: 56, borderRadius: '50%', display: 'block' }} />
          </button>
          <button onClick={onLogin} style={{ width: 56, height: 56, borderRadius: '50%', background: '#fff', border: '1.5px solid #FFBCB3', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
              <rect x="1" y="1" width="24" height="18" rx="4" stroke="#FF8471" strokeWidth="1.8"/>
              <path d="M1 5L13 12.5L25 5" stroke="#FF8471" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── 위치 범위 시트 ──────────────────────────────────────────────
const LOC_RANGES = [
  { key: 'gu', title: '같은 구', region: '마포구', desc: '같은 구 안에서 가까운 인연을 만나요', rings: 1 },
  { key: 'near', title: '인근 지역', region: '서울 서북권', desc: '구를 넘어 인근 권역까지 넓혀요', rings: 2 },
  { key: 'city', title: '서울 전체', region: '서울 전역', desc: '서울 어디서나 좋은 인연을 찾아요', rings: 3 },
];

function LocationSheet({ open, onClose, range, onApply }) {
  const { Button } = DS;
  const [sel, setSel] = React.useState(range);
  React.useEffect(() => { if (open) setSel(range); }, [open]);
  if (!open) return null;
  const cur = LOC_RANGES.find((r) => r.key === sel) || LOC_RANGES[0];
  return (
    <>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(30,28,24,0.4)', zIndex: 60 }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 61, background: '#fff', borderRadius: '24px 24px 0 0', padding: '12px 24px 34px', boxShadow: '0 -8px 30px rgba(0,0,0,0.12)' }}>
        {/* 드래그 핸들 */}
        <div style={{ width: 36, height: 4, borderRadius: 2, background: '#E0DDD8', margin: '0 auto 20px' }} />
        <div style={{ fontSize: 20, fontWeight: 700, color: '#1E1C18', marginBottom: 6 }}>위치 기반으로 만나기</div>
        <div style={{ fontSize: 13, color: '#5AC7C4', fontWeight: 500, marginBottom: 28 }}>상세 주소(동·번지)는 공개되지 않아요</div>

        {/* 동심원 시각화 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 170, marginBottom: 24, position: 'relative' }}>
          {[160, 112, 64].map((d, i) => {
            const lvl = 3 - i;
            const on = cur.rings >= lvl;
            return <div key={d} style={{ position: 'absolute', width: d, height: d, borderRadius: '50%', border: `1.5px solid ${on ? '#5AC7C4' : '#E0DDD8'}`, background: on ? `rgba(90,199,196,${0.04 + (3 - lvl) * 0.04})` : 'transparent' }} />;
          })}
          <div style={{ position: 'relative', width: 42, height: 42, borderRadius: '50%', background: '#5AC7C4', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(90,199,196,0.45)' }}>
            <img src="icons/location.svg" alt="" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <span style={{ position: 'absolute', bottom: 4, fontSize: 12, fontWeight: 600, color: '#5AC7C4' }}>{cur.region}</span>
        </div>

        {/* 범위 선택 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {LOC_RANGES.map((r) => {
            const on = r.key === sel;
            return (
              <button key={r.key} onClick={() => setSel(r.key)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 14, border: `1.5px solid ${on ? '#5AC7C4' : '#E0DDD8'}`, background: on ? '#EDF9F8' : '#fff', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ width: 20, height: 20, flexShrink: 0, borderRadius: '50%', border: `2px solid ${on ? '#5AC7C4' : '#C0BDB7'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {on && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#5AC7C4' }} />}
                </span>
                <span style={{ flex: 1 }}>
                  <span style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#1E1C18' }}>{r.title} <span style={{ fontWeight: 400, color: '#999' }}>· {r.region}</span></span>
                  <span style={{ display: 'block', marginTop: 2, fontSize: 13, color: '#888' }}>{r.desc}</span>
                </span>
              </button>
            );
          })}
        </div>
        <button onClick={() => onApply(sel)} style={{ width: '100%', height: 54, borderRadius: 16, background: '#5AC7C4', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
          이 범위로 인연 보기
        </button>
      </div>
    </>
  );
}

// ── Home ────────────────────────────────────────────────────────
function HomeScreen({ onOpenProfile }) {
  const data = window.YuonData;
  const [locOpen, setLocOpen] = React.useState(false);
  const [locOn, setLocOn] = React.useState(false);
  const [range, setRange] = React.useState('gu');
  const curRange = LOC_RANGES.find((r) => r.key === range) || LOC_RANGES[0];
  const wd = ['일', '월', '화', '수', '목', '금', '토'];
  const d = new Date();
  const today = `${d.getMonth() + 1}월 ${d.getDate()}일 ${wd[d.getDay()]}요일`;

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      {/* 헤더 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px 8px', flexShrink: 0 }}>
        <span style={{ fontSize: 17, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.02em' }}>{today}</span>
        <button onClick={() => setLocOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
          <img src="icons/location.svg" alt="위치" width="24" height="24" style={{ opacity: locOn ? 1 : 0.6 }} />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0 24px' }}>
        {/* 오늘의 연애운 배너 */}
        <div style={{ margin: '0 16px 0', position: 'relative', overflow: 'visible' }}>
          <div style={{ borderRadius: 20, background: '#5AC7C4', padding: '22px 0 22px 22px', minHeight: 140, position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '56%' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.82)', marginBottom: 8, letterSpacing: '0.03em' }}>오늘의 연애운</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.35, letterSpacing: '-0.02em', marginBottom: 18 }}>오늘은 새로운 사람에게<br />마음이 열리는 날이에요</div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.22)', border: 'none', borderRadius: 99, padding: '8px 14px', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                내 사주 연애운 보기
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
            {/* 캐릭터 — 카드 오른쪽에 맞닿게 */}
            <img src="images/image 95.png" alt="" style={{ position: 'absolute', right: -6, bottom: -10, width: 160, height: 160, objectFit: 'contain', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* 추천 인연 섹션 헤더 */}
        <div style={{ padding: '24px 18px 2px' }}>
          <div style={{ fontSize: 17, letterSpacing: '-0.02em', marginBottom: 4 }}>
            <span style={{ fontWeight: 400, color: '#1E1C18' }}>{locOn ? '' : '오늘의 '}</span>
            <span style={{ fontWeight: 700, color: locOn ? '#1E1C18' : '#FF8C7D' }}>{locOn ? `${curRange.region}의 인연` : '추천 인연'}</span>
          </div>
          <div style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>
            {locOn ? '가까운 거리순으로 보여드려요' : '사주 궁합이 높은 순으로 보여드려요'}
          </div>
        </div>

        {/* 프로필 카드 목록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '0 16px' }}>
          {data.profiles.map((p) => {
            const elIcon = data.elementIcons[p.el];
            const elBg = { fire: 'rgba(255,100,50,0.88)', water: 'rgba(60,170,200,0.88)', earth: 'rgba(80,190,160,0.88)', wood: 'rgba(90,180,80,0.88)', metal: 'rgba(140,100,200,0.88)' }[p.el] || 'rgba(255,100,50,0.88)';
            return (
              <div key={p.id} onClick={() => onOpenProfile(p.id)} style={{ borderRadius: 20, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 20px rgba(30,28,24,0.10)', cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}>
                {/* 사진 */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1.05', background: '#E9E6E1' }}>
                  <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                  {/* 스코어 뱃지 */}
                  <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, padding: '8px 11px 7px', borderRadius: 14, background: 'rgba(255,255,255,0.97)', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF4D6A"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#1E1C18', lineHeight: 1 }}>{p.score}점</span>
                  </div>
                  {/* 활동 필 */}
                  <div style={{ position: 'absolute', left: 12, bottom: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.activity && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, height: 28, padding: '0 10px', borderRadius: 999, background: 'rgba(20,20,20,0.52)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 500 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CD964', flexShrink: 0 }} />{p.activity}
                      </span>
                    )}
                    {p.sajuTag && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 28, padding: '0 10px', borderRadius: 999, background: elBg, backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 600 }}>
                        {elIcon && <span style={{ fontSize: 12 }}>{elIcon}</span>}{p.sajuTag}
                      </span>
                    )}
                  </div>
                </div>
                {/* 이름 + 소개 */}
                <div style={{ padding: '12px 14px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <img src="icons/인증.svg" alt="" width="20" height="20" />
                    <span style={{ fontSize: 16, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.02em' }}>{p.name}, {p.age}</span>
                  </div>
                  {p.intro && <p style={{ margin: 0, fontSize: 13, color: '#7A7770', lineHeight: 1.45, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.intro}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <LocationSheet open={locOpen} range={range} onClose={() => setLocOpen(false)} onApply={(r) => { setRange(r); setLocOn(true); setLocOpen(false); }} />
    </div>
  );
}

// ── Profile Detail ──────────────────────────────────────────────
function ProfileDetailScreen({ profileId, onBack, onQuiet, onInterest, savedQuiet }) {
  const p = window.YuonData.byId(profileId);
  const traits = window.YuonData.traits;
  const elIcons = window.YuonData.elementIcons;
  const meEl = 'fire';
  if (!p) return null;

  const drinkLabel = p.drink === '안 함' ? '안 마셔요' : p.drink === '즐김' ? '자주 마셔요' : '가끔 마셔요';
  const smokeLabel = p.smoke === '비흡연' ? '비흡연자예요' : '흡연자예요';

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 90 }}>

        {/* 사진 */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1.18', background: '#E9E6E1' }}>
          <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          {/* 상단 버튼 */}
          <div style={{ position: 'absolute', top: 54, left: 12, right: 12, display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.35)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="icons/chevron-left.svg" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
            </button>
            <button style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.35)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="icons/menu-dots.svg" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
            </button>
          </div>
          {/* 1/2 인디케이터 */}
          <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
            <span style={{ padding: '3px 12px', borderRadius: 99, background: 'rgba(0,0,0,0.38)', color: '#fff', fontSize: 12, fontWeight: 600 }}>1/2</span>
          </div>
        </div>

        <div style={{ padding: '18px 20px 0' }}>
          {/* 이름 + 활동 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src="icons/인증.svg" width="22" height="22" />
              <span style={{ fontSize: 20, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.02em' }}>{p.name}, {p.age}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#888', padding: '3px 10px', borderRadius: 99, background: '#F3F1EE' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5AC7C4', flexShrink: 0 }} />{p.activity}
              </span>
              <span style={{ fontSize: 13, color: '#888' }}>19km</span>
            </div>
          </div>

          {/* 기본 정보 */}
          <div style={{ borderRadius: 14, border: '1px solid #E9E6E1', overflow: 'hidden', background: '#fff' }}>
            {[
              { label: '직업', value: p.job },
              { label: '거주지', value: p.district },
              { label: '키', value: `${p.height}cm` },
              { label: '음주', value: drinkLabel },
              { label: '흡연', value: smokeLabel },
              { label: '종교', value: p.religion || '종교가 없어요' },
            ].map((row, i, arr) => (
              <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 16px', borderBottom: i < arr.length - 1 ? '1px solid #F0EDEA' : 'none' }}>
                <span style={{ fontSize: 14, color: '#888' }}>{row.label}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#1E1C18' }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* 자기소개 */}
          <div style={{ margin: '20px 0 10px', fontSize: 17, fontWeight: 700, color: '#1E1C18' }}>자기소개</div>
          <div style={{ borderRadius: 14, background: '#F7F5F2', padding: '14px 16px', marginBottom: 12 }}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: '#5A564E' }}>{p.bio}</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {p.impressions.map((k) => (
              <span key={k} style={{ display: 'inline-flex', alignItems: 'center', height: 34, padding: '0 14px', borderRadius: 999, border: '1px solid #E0DDD8', fontSize: 13, fontWeight: 500, color: '#5A564E', background: '#fff' }}>{k}</span>
            ))}
          </div>

          {/* 당신과 name님은 */}
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 18, fontWeight: 400, color: '#1E1C18' }}>당신과 </span>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#FF8C7D' }}>{p.name}</span>
            <span style={{ fontSize: 18, fontWeight: 400, color: '#1E1C18' }}>님은</span>
          </div>
          <div style={{ borderRadius: 20, background: '#fff', border: '1px solid #E9E6E1', padding: '20px 20px 20px', marginBottom: 28 }}>
            {/* 원소 + 커플 */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF1EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{elIcons[meEl]}</span>
              </div>
              <img src="images/Frame 427319215.png" alt="커플" style={{ width: 160, height: 130, objectFit: 'contain', flex: 1 }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 44, height: 44, borderRadius: 12, background: '#EDF9F8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{elIcons[p.el]}</span>
              </div>
            </div>
            {/* 점수 */}
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 40, fontWeight: 800, color: '#FF8C7D', letterSpacing: '-0.03em' }}>{p.compatScore || p.score}점</span>
            </div>
            {/* 점수 바 */}
            <div style={{ position: 'relative', height: 8, borderRadius: 999, background: '#F0EDEA', marginBottom: 14 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${p.score}%`, borderRadius: 999, background: 'linear-gradient(90deg, #FFA397, #FF8C7D)' }} />
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: '#5A564E' }}>{p.synergy}</p>
          </div>

          {/* 성향과 재능 */}
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#FF8C7D' }}>{p.name}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#1E1C18' }}>님의 성향과 재능</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 30 }}>
            {traits.map((t, i) => (
              <div key={i} style={{ paddingBottom: i < traits.length - 1 ? 20 : 0, marginBottom: i < traits.length - 1 ? 20 : 0, borderBottom: i < traits.length - 1 ? '1px solid #F0EDEA' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: '#F7F5F2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{t.icon}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#1E1C18' }}>{t.title}</span>
                </div>
                <p style={{ margin: '0 0 0 44px', fontSize: 13, lineHeight: 1.6, color: '#7A7770' }}>{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 취미 피드 */}
          <div style={{ fontSize: 18, fontWeight: 700, color: '#1E1C18', marginBottom: 12 }}>취미 피드</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
            {(p.hobbies || []).map((h, i) => (
              <div key={i} style={{ aspectRatio: '1', borderRadius: 10, overflow: 'hidden', background: '#E9E6E1' }}>
                <img src={h} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 액션 바 */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', gap: 10, padding: '12px 16px 30px', background: '#fff', borderTop: '1px solid #F0EDEA' }}>
        <button onClick={onQuiet} style={{ flex: 1, height: 54, borderRadius: 999, background: '#FFF1EF', border: `1.5px solid ${savedQuiet ? '#FF8C7D' : '#FFCDC8'}`, color: '#FF8C7D', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF8C7D" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          마음에 담기
        </button>
        <button onClick={onInterest} style={{ flex: 1, height: 54, borderRadius: 999, background: '#FF8C7D', border: 'none', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          관심 표현
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen, HomeScreen, ProfileDetailScreen });
