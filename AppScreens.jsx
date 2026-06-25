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
  const { Button } = DS;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden',
      background: 'radial-gradient(130% 90% at 82% 112%, rgba(168,227,225,0.55) 0%, rgba(168,227,225,0) 52%), linear-gradient(160deg, #A8E3E1 0%, #5AC7C4 42%, #2D8E8C 100%)',
      color: '#fff', padding: '0 26px' }}>
      {/* soft decorative orbs */}
      <div style={{ position: 'absolute', top: -80, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: 90, left: -80, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.14), transparent 70%)' }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, zIndex: 1 }}>
        <img src="yuon-symbol-white.png" alt="여운" style={{ width: 92, height: 92, objectFit: 'contain' }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: '0 0 10px', fontSize: 27, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.32 }}>진짜 사람과,<br />이유 있는 만남을</p>
          <p style={{ margin: 0, fontSize: 15, opacity: 0.92, lineHeight: 1.5 }}>사주로 시작하는 신뢰 기반 데이팅</p>
        </div>
      </div>
      <div style={{ paddingBottom: 80, display: 'flex', flexDirection: 'column', gap: 8, zIndex: 1 }}>
        <Button variant="accent" size="lg" fullWidth onClick={onSignup}>휴대폰 번호로 시작하기</Button>
        <button onClick={onLogin} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.92)', fontFamily: 'var(--font-family-base)', fontSize: 14, fontWeight: 500, padding: 12, cursor: 'pointer' }}>이미 계정이 있어요</button>
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 8px 8px 18px', flexShrink: 0, background: 'var(--color-surface-page)' }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-text-tertiary)' }}>{today}</div>
          {locOn ? (
            <button onClick={() => setLocOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              <Icon name="mapPin" size={16} color="var(--color-primary-600)" />
              <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>{curRange.region}</span>
              <Icon name="chevronDown" size={16} color="var(--color-natural-400)" />
            </button>
          ) : null}
        </div>
        <div style={{ position: 'relative' }}>
          <IconButton icon={<Icon name="mapPin" size={22} color={locOn ? '#fff' : undefined} />} variant={locOn ? 'primary' : 'plain'} onClick={() => setLocOpen(true)} ariaLabel="위치" />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0 24px' }}>
        <div style={{ padding: '0 16px' }}>
          <FortuneBanner fortune={<>설레는 만남이<br />가까이 있어요</>} mascot="../../assets/mascot/yeowoong.png" onMore={() => {}} />
        </div>

        {/* feed */}
        <div style={{ padding: '0 16px', marginTop: 32 }}>
          <SectionHeader title={locOn ? '' : '오늘의 '} accent={locOn ? `${curRange.region}의 인연` : '추천 인연'} sub={locOn ? '가까운 거리순으로 보여드려요' : '사주 궁합이 높은 순으로 보여드려요'} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {data.profiles.map((p) => (
              <ProfileFeedCard key={p.id} photo={p.photo} name={p.name} age={p.age}
                score={p.score} activity={p.activity} sajuTag={p.sajuTag}
                elementIcon={data.elementIcons[p.el]}
                intro={p.intro} verified={p.verified}
                onClick={() => onOpenProfile(p.id)} />
            ))}
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
  const me = window.YuonData.me;
  const traits = window.YuonData.traits;
  if (!p) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 102 }}>
        {/* photo header */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 5', background: 'var(--color-natural-200)' }}>
          <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,28,24,0.66), transparent 40%), linear-gradient(to bottom, rgba(30,28,24,0.28), transparent 16%)' }} />
          <div style={{ position: 'absolute', top: 52, left: 8, right: 8, display: 'flex', justifyContent: 'space-between' }}>
            <IconButton icon={<Icon name="chevronLeft" color="#fff" />} onClick={onBack} ariaLabel="뒤로" />
            <IconButton icon={<Icon name="moreHorizontal" color="#fff" />} ariaLabel="더보기" />
          </div>
          <div style={{ position: 'absolute', left: 20, right: 20, bottom: 22 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
              <OverlayTag iconSrc={window.YuonData.elementIcons[p.el]}>{p.ilju}</OverlayTag>
              <OverlayTag icon="✨" tone="gold">황금 인연</OverlayTag>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>{p.name}, {p.age}</div>
            <p style={{ margin: '4px 0 0', color: 'rgba(255,255,255,0.92)', fontSize: 15 }}>{p.district}</p>
          </div>
        </div>

        <div style={{ padding: '22px 20px 0' }}>
          {/* {name}님의 프로필 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-primary-600)' }}>{p.name}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>님의 프로필</span>
            <Icon name="badgeCheck" size={20} />
          </div>
          <div style={{ marginTop: 8 }}>
            <InfoRow label="직업" value={p.job} />
            <InfoRow label="거주지" value={p.district} />
            <InfoRow label="키" value={`${p.height}cm`} />
            <InfoRow label="음주" value={p.drink === '안 함' ? '안 마셔요' : p.drink === '즐김' ? '자주 마셔요' : '가끔 마셔요'} />
            <InfoRow label="흡연" value={p.smoke === '비흡연' ? '비흡연자예요' : '흡연자예요'} />
            <InfoRow label="종교" value={p.religion} />
          </div>

          {/* 자기소개 */}
          <SectionTitle>자기소개</SectionTitle>
          <div style={{ padding: '16px 18px', borderRadius: 'var(--radius-lg)', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)' }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--color-text-body)' }}>{p.bio}</p>
          </div>

          {/* 첫인상 체크 */}
          <SectionTitle sub="상대가 직접 설정한 키워드예요.">첫인상 체크</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {p.impressions.map((k) => <Tag key={k} tone="accent">{k}</Tag>)}
          </div>

          {/* 당신과 {name}님은 — 사주 조화 */}
          <div style={{ margin: '30px 0 12px' }}>
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>당신과 </span>
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-accent-500)' }}>{p.name}</span>
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>님은</span>
          </div>
          <div style={{ borderRadius: 'var(--radius-xl)', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', overflow: 'hidden' }}>
            <div style={{ padding: 18, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 18, right: 18, display: 'flex' }}>
                <img src={me.photo} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-surface-card)' }} />
                <img src={p.photo} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-surface-card)', marginLeft: -14 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}>{p.score}</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-meta)' }}>%</span>
              </div>
              <div style={{ marginTop: 2, fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)' }}>우리 둘의 사주 조화</div>
              {/* heart slider */}
              <div style={{ position: 'relative', height: 12, marginTop: 16, borderRadius: 'var(--radius-pill)', background: 'var(--color-natural-100)' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${p.score}%`, borderRadius: 'var(--radius-pill)', background: 'linear-gradient(90deg, var(--color-accent-300), var(--color-accent-500))' }} />
                <div style={{ position: 'absolute', top: '50%', left: `${p.score}%`, transform: 'translate(-50%, -50%)', width: 30, height: 30, borderRadius: '50%', background: 'var(--color-surface-card)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="heart" size={16} filled color="var(--color-accent-500)" />
                </div>
              </div>
            </div>
            <div style={{ height: 1, background: 'var(--color-divider)' }} />
            <div style={{ padding: 18 }}>
              <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>{p.synergy}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {p.sajuKeywords.map((k) => <Tag key={k} tone="primary">{k}</Tag>)}
              </div>
            </div>
          </div>

          {/* 성향과 재능 */}
          <SectionTitle sub="소개 받은 분의 타고난 성향을 알려줄게요.">{p.name}님의 성향과 재능</SectionTitle>
          <div style={{ padding: '20px 18px', borderRadius: 'var(--radius-xl)', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)' }}>
            {traits.map((t, i) => (
              <div key={i} style={{ marginBottom: i < traits.length - 1 ? 22 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  {String(t.icon).includes('/')
                    ? <img src={t.icon} alt="" style={{ width: 26, height: 26, borderRadius: 8, objectFit: 'cover' }} />
                    : <span style={{ fontSize: 20 }} aria-hidden="true">{t.icon}</span>}
                  <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.title}</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{t.desc}</p>
              </div>
            ))}
            <button style={{ marginTop: 20, width: '100%', height: 48, border: 'none', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-sunken)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-family-base)', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>더 알아보기</button>
          </div>

          {/* 취미 피드 */}
          <SectionTitle>취미 피드</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, paddingBottom: 8 }}>
            {(p.hobbies || []).map((h, i) => (
              <div key={i} style={{ aspectRatio: '1 / 1', borderRadius: 14, overflow: 'hidden', background: 'var(--color-natural-200)' }}>
                <img src={h} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sticky action bar */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px 30px', background: 'var(--color-surface-card)', borderTop: '1px solid var(--color-border-default)' }}>
        <button onClick={onQuiet} style={{ flex: 1, height: 56, border: `2px solid ${savedQuiet ? 'var(--color-accent-400)' : 'var(--color-border-strong)'}`, borderRadius: 'var(--radius-pill)', background: savedQuiet ? 'var(--color-accent-50)' : 'var(--color-surface-card)', color: savedQuiet ? 'var(--color-accent-600)' : 'var(--color-text-secondary)', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Icon name="heart" size={20} filled={savedQuiet} color={savedQuiet ? 'var(--color-accent-500)' : 'var(--color-natural-400)'} />마음에 담기
        </button>
        <button onClick={onInterest} style={{ flex: 1, height: 56, border: 'none', borderRadius: 'var(--radius-pill)', background: 'var(--color-accent-500)', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Icon name="heart" size={20} filled color="#fff" />관심 표현
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen, HomeScreen, ProfileDetailScreen, SectionHeader });
