/* 여운 app — primary screens (Login, Home, Profile detail). Exposed on window. */
const DS = window.YuonDesignSystem_8624c6;

// ── Splash / Login ──────────────────────────────────────────────
function LoginScreen({ onSignup, onLogin }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#5AC7C4' }}>
      {/* 배경 글로우 */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* 아이콘 + 워드마크 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 80, zIndex: 1 }}>
        <img src="yuon-app-icon.png" alt="유온" style={{ width: 80, height: 80, borderRadius: 20, marginBottom: 16 }} />
        <img src="yuon-wordmark.png" alt="YUON" style={{ height: 36, objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: 12 }} />
        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>안녕하세요, 유온에 오신 걸 환영해요</span>
      </div>

      {/* 캐릭터 */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <svg style={{ position: 'absolute', top: '12%', left: '20%' }} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 0l1.3 5.7L14 7l-5.7 1.3L7 14 5.7 8.3 0 7l5.7-1.3Z" fill="white" opacity="0.7" />
        </svg>
        <svg style={{ position: 'absolute', top: '18%', right: '18%' }} width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path d="M4.5 0l.9 3.6L9 4.5l-3.6.9L4.5 9 3.6 5.4 0 4.5l3.6-.9Z" fill="white" opacity="0.5" />
        </svg>
        <img src="dufkdddl 1.png" alt="유온 캐릭터" style={{ width: 230, height: 260, objectFit: 'contain' }} />
      </div>

      {/* 하단 버튼 */}
      <div style={{ padding: '0 24px 48px', zIndex: 1 }}>
        <button onClick={onSignup} style={{ width: '100%', height: 56, borderRadius: 28, background: '#FF8C7D', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 17, fontWeight: 700, border: 'none', cursor: 'pointer', marginBottom: 2, boxShadow: '0 8px 24px rgba(255,100,80,0.35)' }}>
          회원가입 후 시작하기
        </button>
        <button onClick={onLogin} style={{ display: 'block', width: '100%', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-family-base)', fontSize: 14, fontWeight: 500, padding: '14px 0 18px', cursor: 'pointer', textAlign: 'center' }}>
          이미 계정이 있어요
        </button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
          <button onClick={onLogin} style={{ width: 52, height: 52, borderRadius: '50%', background: '#FEE500', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.13)' }}>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M12 0C5.373 0 0 4.149 0 9.268c0 3.295 2.188 6.185 5.478 7.827L4.2 21.47a.436.436 0 0 0 .637.473L10.22 18.4c.585.077 1.182.115 1.78.115C18.627 18.515 24 14.367 24 9.268 24 4.149 18.627 0 12 0Z" fill="#3C1E1E"/></svg>
          </button>
          <button onClick={onLogin} style={{ width: 52, height: 52, borderRadius: '50%', background: '#fff', border: '1px solid #E8E8E8', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.10)' }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M21.6 11.25c0-.75-.07-1.47-.19-2.17H11v4.1h5.96a5.1 5.1 0 0 1-2.21 3.34v2.77h3.57c2.09-1.92 3.28-4.75 3.28-8.04Z" fill="#4285F4"/><path d="M11 22c2.99 0 5.49-1 7.32-2.71l-3.57-2.77C13.65 17.47 12.42 18 11 18c-2.88 0-5.32-1.94-6.19-4.55H1.13v2.86A11 11 0 0 0 11 22Z" fill="#34A853"/><path d="M4.81 13.45A6.6 6.6 0 0 1 4.47 11c0-.85.15-1.67.34-2.45V5.69H1.13A11 11 0 0 0 0 11c0 1.77.43 3.45 1.13 4.95l3.68-2.5Z" fill="#FBBC05"/><path d="M11 4.45c1.62 0 3.07.56 4.22 1.66l3.17-3.17C16.48 1.1 13.97 0 11 0A11 11 0 0 0 1.13 5.69l3.68 2.86C5.68 6.39 8.12 4.45 11 4.45Z" fill="#EA4335"/></svg>
          </button>
          <button onClick={onLogin} style={{ width: 52, height: 52, borderRadius: '50%', background: '#03C75A', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.13)' }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: '#fff', fontFamily: 'Arial,sans-serif', lineHeight: 1 }}>N</span>
          </button>
          <button onClick={onLogin} style={{ width: 52, height: 52, borderRadius: '50%', background: '#fff', border: '1px solid #E8E8E8', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.10)' }}>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none"><rect x="1" y="1" width="20" height="16" rx="3" stroke="#888" strokeWidth="1.5"/><path d="M1 4l10 7 10-7" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
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
            <img src="location.svg" alt="" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
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
          <img src="location.svg" alt="위치" width="24" height="24" style={{ opacity: locOn ? 1 : 0.6 }} />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0 24px' }}>
        {/* 오늘의 연애운 배너 */}
        <div style={{ margin: '0 16px', position: 'relative' }}>
          <div style={{ borderRadius: 20, background: '#5AC7C4', padding: '20px 20px 20px 20px', overflow: 'hidden', minHeight: 130 }}>
            <div style={{ maxWidth: '60%' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.82)', marginBottom: 8, letterSpacing: '0.03em' }}>오늘의 연애운</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.35, letterSpacing: '-0.02em', marginBottom: 16 }}>오늘은 새로운 사람에게<br />마음이 열리는 날이에요</div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.22)', border: 'none', borderRadius: 99, padding: '7px 14px', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                내 사주 연애운 보기
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
          {/* 캐릭터 카드 밖으로 넘침 */}
          <img src="image 95.png" alt="" style={{ position: 'absolute', right: -4, bottom: -16, width: 148, height: 148, objectFit: 'contain', pointerEvents: 'none' }} />
        </div>

        {/* 추천 인연 섹션 헤더 */}
        <div style={{ padding: '28px 18px 4px' }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.02em', marginBottom: 4 }}>
            {locOn ? '' : '오늘의 '}
            <span style={{ color: '#FF8C7D' }}>{locOn ? `${curRange.region}의 인연` : '추천 인연'}</span>
          </div>
          <div style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>
            {locOn ? '가까운 거리순으로 보여드려요' : '사주 궁합이 높은 순으로 보여드려요'}
          </div>
        </div>

        {/* 프로필 카드 목록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '0 16px' }}>
          {data.profiles.map((p) => {
            const elIcon = data.elementIcons[p.el];
            return (
              <div key={p.id} onClick={() => onOpenProfile(p.id)} style={{ borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 16px rgba(30,28,24,0.10)', cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}>
                {/* 사진 */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', background: '#E9E6E1' }}>
                  <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  {/* 스코어 뱃지 */}
                  <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '7px 10px 6px', borderRadius: 12, background: 'rgba(255,255,255,0.97)', boxShadow: '0 2px 8px rgba(0,0,0,0.14)' }}>
                    <span style={{ fontSize: 18, lineHeight: 1 }}>❤️</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#1E1C18', lineHeight: 1 }}>{p.score}점</span>
                  </div>
                  {/* 활동 필 */}
                  <div style={{ position: 'absolute', left: 10, bottom: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.activity && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, height: 28, padding: '0 10px', borderRadius: 999, background: 'rgba(28,26,24,0.55)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 500 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5AC7C4', flexShrink: 0 }} />{p.activity}
                      </span>
                    )}
                    {p.sajuTag && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 28, padding: '0 10px', borderRadius: 999, background: 'rgba(255,120,60,0.88)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 600 }}>
                        {elIcon && <span style={{ fontSize: 13 }}>{elIcon}</span>}{p.sajuTag}
                      </span>
                    )}
                  </div>
                </div>
                {/* 이름 + 소개 */}
                <div style={{ padding: '12px 14px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                    <img src="인증.svg" alt="" width="20" height="20" />
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
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 2.8', background: '#E9E6E1' }}>
          <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          {/* 상단 버튼 */}
          <div style={{ position: 'absolute', top: 54, left: 12, right: 12, display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.35)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="chevron-left.svg" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
            </button>
            <button style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.35)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="menu-dots.svg" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
            </button>
          </div>
          {/* 1/2 인디케이터 */}
          <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
            <span style={{ padding: '3px 12px', borderRadius: 99, background: 'rgba(0,0,0,0.38)', color: '#fff', fontSize: 12, fontWeight: 600 }}>1/2</span>
          </div>
        </div>

        <div style={{ padding: '18px 20px 0' }}>
          {/* 이름 + 활동 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src="인증.svg" width="24" height="24" />
              <span style={{ fontSize: 22, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.02em' }}>{p.name}, {p.age}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#888' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4CAF50' }} />{p.activity}
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
          <div style={{ margin: '24px 0 10px', fontSize: 18, fontWeight: 700, color: '#1E1C18' }}>자기소개</div>
          <p style={{ margin: '0 0 14px', fontSize: 14, lineHeight: 1.7, color: '#5A564E' }}>{p.bio}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
            {p.impressions.map((k) => (
              <span key={k} style={{ display: 'inline-flex', alignItems: 'center', height: 34, padding: '0 14px', borderRadius: 999, border: '1px solid #E0DDD8', fontSize: 13, fontWeight: 500, color: '#5A564E', background: '#fff' }}>{k}</span>
            ))}
          </div>

          {/* 당신과 name님은 */}
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#1E1C18' }}>당신과 </span>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#FF8C7D' }}>{p.name}</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#1E1C18' }}>님은</span>
          </div>
          <div style={{ borderRadius: 20, background: '#fff', border: '1px solid #E9E6E1', padding: '22px 20px 20px', marginBottom: 30 }}>
            {/* 원소 + 커플 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ width: 42, height: 42, borderRadius: 12, background: '#FFF1EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{elIcons[meEl]}</span>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <img src="Frame 427319215.png" alt="커플" style={{ width: 130, height: 110, objectFit: 'contain' }} />
              </div>
              <span style={{ width: 42, height: 42, borderRadius: 12, background: '#EDF9F8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{elIcons[p.el]}</span>
            </div>
            {/* 점수 */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 10 }}>
              <span style={{ fontSize: 42, fontWeight: 800, color: '#FF8C7D', letterSpacing: '-0.03em' }}>{p.score}점</span>
            </div>
            {/* 점수 바 */}
            <div style={{ position: 'relative', height: 8, borderRadius: 999, background: '#F0EDEA', marginBottom: 14 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${p.score}%`, borderRadius: 999, background: 'linear-gradient(90deg, #FFA397, #FF8C7D)' }} />
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#5A564E' }}>{p.synergy}</p>
          </div>

          {/* 성향과 재능 */}
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#FF8C7D' }}>{p.name}</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#1E1C18' }}>님의 성향과 재능</span>
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
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', gap: 10, padding: '12px 16px 28px', background: '#fff', borderTop: '1px solid #F0EDEA' }}>
        <button onClick={onQuiet} style={{ flex: 1, height: 54, borderRadius: 999, background: '#fff', border: `1.5px solid ${savedQuiet ? '#FF8C7D' : '#E0DDD8'}`, color: savedQuiet ? '#FF8C7D' : '#5A564E', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <img src="heart.svg" alt="" width="18" height="18" style={{ filter: savedQuiet ? 'invert(60%) sepia(80%) saturate(400%) hue-rotate(320deg)' : 'opacity(0.4)' }} />
          마음에 담기
        </button>
        <button onClick={onInterest} style={{ flex: 1, height: 54, borderRadius: 999, background: '#FF8C7D', border: 'none', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <span style={{ fontSize: 16 }}>❤️</span>
          관심 표현
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen, HomeScreen, ProfileDetailScreen });
