/* 여운 app — 회원가입 · 온보딩 플로우 (flowchart §2). Exposed on window. */
const ObDS = window.YuonDesignSystem_8624c6;

// ── shared shell ────────────────────────────────────────────────
function ObShell({ step, total, title, sub, onBack, footer, children, scroll = true }) {
  const { IconButton, Icon } = ObDS;
  return (
    <div style={{ position: 'absolute', top: 47, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>
      {/* header */}
      <div style={{ flexShrink: 0, padding: '6px 8px 0' }}>
        <div style={{ height: 48, display: 'flex', alignItems: 'center' }}>
          <IconButton icon={<Icon name="chevronLeft" />} onClick={onBack} ariaLabel="뒤로" />
        </div>
        {/* progress */}
        <div style={{ display: 'flex', gap: 4, padding: '0 12px 4px' }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? 'var(--color-primary-500)' : 'var(--color-natural-200)', transition: 'background var(--duration-base) var(--ease-standard)' }} />
          ))}
        </div>
      </div>
      {/* title + body */}
      <div style={{ flex: 1, overflowY: scroll ? 'auto' : 'hidden', padding: '20px 24px 24px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary-600)', marginBottom: 8 }}>STEP {step + 1} / {total}</div>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.35, color: 'var(--color-text-primary)' }}>{title}</h1>
        {sub && <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-meta)' }}>{sub}</p>}
        <div style={{ marginTop: 26 }}>{children}</div>
      </div>
      {/* footer */}
      {footer && <div style={{ flexShrink: 0, padding: '12px 24px 30px', background: 'var(--color-surface-page)' }}>{footer}</div>}
    </div>
  );
}

function FieldLabel({ children }) {
  return <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 8 }}>{children}</div>;
}

// ── step 0: 약관 동의 ────────────────────────────────────────────
function StepTerms({ onNext, onBack, step, total }) {
  const { Button, Checkbox, Icon } = ObDS;
  const items = [
    { key: 'age', label: '만 19세 이상입니다', req: true },
    { key: 'tos', label: '서비스 이용약관 동의', req: true },
    { key: 'privacy', label: '개인정보 처리방침 동의', req: true },
    { key: 'location', label: '위치기반 서비스 이용약관 동의', req: true },
    { key: 'marketing', label: '마케팅 정보 수신 동의 (선택)', req: false },
  ];
  const [checks, setChecks] = React.useState({});
  const allReq = items.filter((i) => i.req).every((i) => checks[i.key]);
  const allOn = items.every((i) => checks[i.key]);
  const toggleAll = () => { const v = !allOn; const next = {}; items.forEach((i) => (next[i.key] = v)); setChecks(next); };
  return (
    <ObShell step={step} total={total} onBack={onBack} title={<span>여운 이용을 위해<br />약관에 동의해주세요</span>}
      footer={<Button variant="primary" size="lg" fullWidth disabled={!allReq} onClick={onNext}>동의하고 계속하기</Button>}>
      <button onClick={toggleAll} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '16px 16px', borderRadius: 'var(--radius-lg)', border: 'none', background: allOn ? 'var(--color-primary-50)' : 'var(--color-surface-sunken)', cursor: 'pointer', marginBottom: 8 }}>
        <span style={{ width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: allOn ? 'var(--color-primary-500)' : 'var(--color-natural-300)' }}>
          <Icon name="check" size={15} color="#fff" />
        </span>
        <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>전체 동의</span>
      </button>
      <div style={{ height: 1, background: 'var(--color-divider)', margin: '4px 0 8px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((it) => (
          <div key={it.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px' }}>
            <Checkbox checked={!!checks[it.key]} onChange={(v) => setChecks((c) => ({ ...c, [it.key]: v }))}
              label={<span style={{ fontSize: 15, color: 'var(--color-text-body)' }}>{it.req && <span style={{ color: 'var(--color-primary-600)', fontWeight: 600 }}>[필수] </span>}{it.label}</span>} />
            <Icon name="chevronRight" size={16} color="var(--color-natural-300)" />
          </div>
        ))}
      </div>
    </ObShell>
  );
}

// ── step 1: 본인인증 (휴대폰) ─────────────────────────────────────
function StepPhone({ onNext, onBack, step, total }) {
  const { Button, Input } = ObDS;
  const [phone, setPhone] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [code, setCode] = React.useState('');
  const [sec, setSec] = React.useState(0);
  React.useEffect(() => { if (!sent) return; setSec(180); const t = setInterval(() => setSec((s) => (s > 0 ? s - 1 : 0)), 1000); return () => clearInterval(t); }, [sent]);
  const mm = String(Math.floor(sec / 60)).padStart(1, '0'), ss = String(sec % 60).padStart(2, '0');
  const phoneOk = phone.replace(/\D/g, '').length >= 10;
  const codeOk = code.replace(/\D/g, '').length === 6;
  return (
    <ObShell step={step} total={total} onBack={onBack} title={<span>휴대폰 번호로<br />본인인증을 해주세요</span>}
      sub="1인 1계정 원칙을 위해 본인인증이 필요해요. 번호는 매칭 상대에게 공개되지 않아요."
      footer={<Button variant="primary" size="lg" fullWidth disabled={!sent || !codeOk} onClick={onNext}>인증 완료</Button>}>
      <FieldLabel>휴대폰 번호</FieldLabel>
      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="010-0000-0000" inputMode="numeric"
        suffix={<Button variant={phoneOk ? 'secondary' : 'ghost'} size="sm" disabled={!phoneOk} onClick={() => setSent(true)}>{sent ? '재전송' : '인증번호 받기'}</Button>} />
      {sent && (
        <div style={{ marginTop: 18 }}>
          <FieldLabel>인증번호</FieldLabel>
          <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="6자리 입력" inputMode="numeric"
            help="문자로 받은 인증번호를 입력해주세요"
            suffix={<span style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-accent-500)', fontVariantNumeric: 'tabular-nums' }}>{mm}:{ss}</span>} />
        </div>
      )}
    </ObShell>
  );
}

// ── step 2: 사주 입력 ────────────────────────────────────────────
function StepSaju({ onNext, onBack, step, total }) {
  const { Button, Input, Icon } = ObDS;
  const [cal, setCal] = React.useState('양력');
  const [unknown, setUnknown] = React.useState(false);
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const ok = date.replace(/\D/g, '').length >= 8;
  return (
    <ObShell step={step} total={total} onBack={onBack} title={<span>사주 정보를<br />입력해주세요</span>}
      sub="생년월일과 태어난 시간으로 사주 궁합을 계산해요. 시간을 모르면 건너뛸 수 있어요."
      footer={<Button variant="primary" size="lg" fullWidth disabled={!ok} onClick={onNext}>다음</Button>}>
      <FieldLabel>양력 / 음력</FieldLabel>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['양력', '음력'].map((c) => (
          <button key={c} onClick={() => setCal(c)} style={{ flex: 1, height: 46, borderRadius: 'var(--radius-md)', border: `1.5px solid ${cal === c ? 'var(--color-primary-500)' : 'var(--color-border-strong)'}`, background: cal === c ? 'var(--color-primary-50)' : 'var(--color-surface-card)', color: cal === c ? 'var(--color-primary-700)' : 'var(--color-text-secondary)', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>{c}</button>
        ))}
      </div>
      <FieldLabel>생년월일</FieldLabel>
      <Input value={date} onChange={(e) => setDate(e.target.value)} placeholder="YYYY.MM.DD" inputMode="numeric" style={{ marginBottom: 20 }} />
      <FieldLabel>태어난 시간</FieldLabel>
      <Input value={time} onChange={(e) => setTime(e.target.value)} placeholder="예: 오후 3시 30분" disabled={unknown} />
      <button onClick={() => setUnknown((u) => !u)} style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', padding: 4, cursor: 'pointer' }}>
        <span style={{ width: 20, height: 20, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1.5px solid ${unknown ? 'var(--color-primary-500)' : 'var(--color-border-strong)'}`, background: unknown ? 'var(--color-primary-500)' : 'transparent' }}>
          {unknown && <Icon name="check" size={13} color="#fff" />}
        </span>
        <span style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>태어난 시간을 몰라요</span>
      </button>
    </ObShell>
  );
}

// ── step 3: 프로필 작성 ──────────────────────────────────────────
function StepProfile({ onNext, onBack, step, total }) {
  const { Button, Input } = ObDS;
  const [nick, setNick] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [job, setJob] = React.useState('');
  const [area, setArea] = React.useState('');
  const [bio, setBio] = React.useState('');
  const hobbyOpts = ['카페', '여행', '운동', '영화', '음악', '독서', '요리', '전시', '등산', '반려동물', '게임', '와인'];
  const [hobbies, setHobbies] = React.useState([]);
  const toggleHobby = (h) => setHobbies((s) => s.includes(h) ? s.filter((x) => x !== h) : (s.length < 5 ? [...s, h] : s));
  const ok = nick.trim() && area.trim() && hobbies.length > 0;
  return (
    <ObShell step={step} total={total} onBack={onBack} title="프로필을 작성해주세요"
      sub="매칭 상대에게 보여질 정보예요. 솔직하게 적을수록 좋은 인연을 만날 확률이 높아져요."
      footer={<Button variant="primary" size="lg" fullWidth disabled={!ok} onClick={onNext}>다음</Button>}>
      <FieldLabel>닉네임</FieldLabel>
      <Input value={nick} onChange={(e) => setNick(e.target.value)} placeholder="2~10자" style={{ marginBottom: 18 }} />
      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        <div style={{ flex: 1 }}>
          <FieldLabel>키</FieldLabel>
          <Input value={height} onChange={(e) => setHeight(e.target.value)} placeholder="cm" inputMode="numeric" />
        </div>
        <div style={{ flex: 1.4 }}>
          <FieldLabel>직업</FieldLabel>
          <Input value={job} onChange={(e) => setJob(e.target.value)} placeholder="예: 디자이너" />
        </div>
      </div>
      <FieldLabel>거주지</FieldLabel>
      <Input value={area} onChange={(e) => setArea(e.target.value)} placeholder="예: 서울 마포구" style={{ marginBottom: 18 }} />
      <FieldLabel>자기소개</FieldLabel>
      <Input value={bio} onChange={(e) => setBio(e.target.value)} placeholder="나를 한두 문장으로 소개해주세요" style={{ marginBottom: 18 }} />
      <FieldLabel>취미 · 관심사 <span style={{ color: 'var(--color-text-tertiary)', fontWeight: 500 }}>({hobbies.length}/5)</span></FieldLabel>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {hobbyOpts.map((h) => {
          const on = hobbies.includes(h);
          return (
            <button key={h} onClick={() => toggleHobby(h)} style={{ height: 38, padding: '0 16px', borderRadius: 'var(--radius-pill)', border: `1.5px solid ${on ? 'var(--color-accent-400)' : 'var(--color-border-strong)'}`, background: on ? 'var(--color-accent-50)' : 'var(--color-surface-card)', color: on ? 'var(--color-accent-600)' : 'var(--color-text-secondary)', fontFamily: 'var(--font-family-base)', fontSize: 14, fontWeight: on ? 600 : 500, cursor: 'pointer' }}>{h}</button>
          );
        })}
      </div>
    </ObShell>
  );
}

// ── step 4: 프로필 사진 등록 ─────────────────────────────────────
function StepPhoto({ onNext, onBack, step, total, photos, setPhotos }) {
  const { Button, Icon } = ObDS;
  const pool = window.YuonData.profiles.map((p) => p.photo);
  const add = (i) => setPhotos((s) => { if (s[i]) { const n = [...s]; n[i] = null; return n; } const used = s.filter(Boolean); const next = pool.find((u) => !used.includes(u)) || pool[0]; const n = [...s]; n[i] = next; return n; });
  const count = photos.filter(Boolean).length;
  return (
    <ObShell step={step} total={total} onBack={onBack} title="프로필 사진을 등록해주세요"
      sub="얼굴이 잘 보이는 사진일수록 매칭률이 높아요. 1장 이상 등록하면 AI가 자동으로 심사해요."
      footer={<Button variant="primary" size="lg" fullWidth disabled={count < 1} onClick={onNext}>{count}장 등록 · AI 심사 시작</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <button key={i} onClick={() => add(i)} style={{ position: 'relative', aspectRatio: '3 / 4', borderRadius: 'var(--radius-lg)', border: photos[i] ? 'none' : '1.5px dashed var(--color-border-strong)', background: photos[i] ? 'var(--color-natural-200)' : 'var(--color-surface-sunken)', overflow: 'hidden', cursor: 'pointer', padding: 0 }}>
            {photos[i] ? (
              <>
                <img src={photos[i]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: '50%', background: 'rgba(34,32,28,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="x" size={13} color="#fff" />
                </span>
                {i === 0 && <span style={{ position: 'absolute', bottom: 6, left: 6, padding: '2px 8px', borderRadius: 'var(--radius-pill)', background: 'var(--color-primary-500)', color: '#fff', fontSize: 11, fontWeight: 600 }}>대표</span>}
              </>
            ) : (
              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 6, color: 'var(--color-natural-400)' }}>
                <Icon name="plus" size={22} color="var(--color-natural-400)" />
                <span style={{ fontSize: 12 }}>{i === 0 ? '대표 사진' : '추가'}</span>
              </span>
            )}
          </button>
        ))}
      </div>
    </ObShell>
  );
}

// ── step 5: AI 사진 심사 ─────────────────────────────────────────
function StepReview({ onNext, onBack, step, total }) {
  const { Button, Icon } = ObDS;
  const [phase, setPhase] = React.useState('checking'); // checking | pass
  const checks = ['AI 생성 이미지 검사', '동물 · 사물 사진 검사', '부적절 콘텐츠 검사', '얼굴 인식 확인'];
  const [done, setDone] = React.useState(0);
  React.useEffect(() => {
    if (done < checks.length) { const t = setTimeout(() => setDone((d) => d + 1), 650); return () => clearTimeout(t); }
    const t = setTimeout(() => setPhase('pass'), 500); return () => clearTimeout(t);
  }, [done]);
  return (
    <ObShell step={step} total={total} onBack={onBack} title={phase === 'pass' ? '심사를 통과했어요!' : 'AI가 사진을 심사하고 있어요'}
      sub={phase === 'pass' ? '안심하고 진짜 사람을 만날 수 있도록, 모든 사진은 AI 심사를 거쳐요.' : '진짜 사람만 만날 수 있도록 등록된 사진을 확인하고 있어요. 잠시만 기다려주세요.'}
      footer={phase === 'pass' ? <Button variant="primary" size="lg" fullWidth onClick={onNext}>다음</Button> : null}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0 8px' }}>
        <div style={{ width: 96, height: 96, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: phase === 'pass' ? 'var(--color-primary-50)' : 'var(--color-surface-sunken)', marginBottom: 28 }}>
          {phase === 'pass'
            ? <Icon name="badgeCheck" size={52} />
            : <div style={{ width: 44, height: 44, borderRadius: '50%', border: '4px solid var(--color-natural-200)', borderTopColor: 'var(--color-primary-500)', animation: 'obspin 0.8s linear infinite' }} />}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {checks.map((c, i) => {
          const ok = i < done || phase === 'pass';
          return (
            <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)' }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: ok ? 'var(--color-primary-500)' : 'var(--color-natural-200)' }}>
                {ok ? <Icon name="check" size={13} color="#fff" /> : <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-natural-400)' }} />}
              </span>
              <span style={{ fontSize: 14, color: ok ? 'var(--color-text-body)' : 'var(--color-text-tertiary)', fontWeight: ok ? 600 : 500 }}>{c}</span>
            </div>
          );
        })}
      </div>
      <style>{`@keyframes obspin { to { transform: rotate(360deg); } }`}</style>
    </ObShell>
  );
}

// ── step 6: 선택 인증 뱃지 ───────────────────────────────────────
function StepVerify({ onNext, onBack, step, total }) {
  const { Button, Icon } = ObDS;
  const [got, setGot] = React.useState({});
  const badges = [
    { key: 'selfie', icon: 'camera', title: '셀피 인증', desc: '실시간 셀피로 본인 사진임을 인증해요', tone: 'primary' },
    { key: 'work', icon: 'badgeCheck', title: '직장 · 학교 인증', desc: '이메일 또는 재직증명서로 인증해요', tone: 'accent' },
  ];
  return (
    <ObShell step={step} total={total} onBack={onBack} title={<span>인증 뱃지로<br />신뢰를 더해보세요</span>}
      sub="선택 사항이에요. 인증 뱃지가 있으면 매칭 상대에게 더 높은 신뢰를 줄 수 있어요."
      footer={<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button variant="primary" size="lg" fullWidth onClick={onNext}>다음</Button>
        <Button variant="ghost" size="md" fullWidth onClick={onNext}>나중에 할게요</Button>
      </div>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {badges.map((b) => {
          const on = got[b.key];
          return (
            <div key={b.key} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 'var(--radius-lg)', background: 'var(--color-surface-card)', border: `1px solid ${on ? 'var(--color-primary-300)' : 'var(--color-border-default)'}` }}>
              <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: b.tone === 'accent' ? 'var(--color-accent-50)' : 'var(--color-primary-50)' }}>
                <Icon name={b.icon} size={24} color={b.tone === 'accent' ? 'var(--color-accent-500)' : 'var(--color-primary-600)'} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>{b.title}</div>
                <div style={{ fontSize: 13, color: 'var(--color-text-meta)', marginTop: 2 }}>{b.desc}</div>
              </div>
              <Button variant={on ? 'secondary' : 'primary'} size="sm" disabled={on} onClick={() => setGot((g) => ({ ...g, [b.key]: true }))}>{on ? '완료' : '인증'}</Button>
            </div>
          );
        })}
      </div>
    </ObShell>
  );
}

// ── step 7: 프로필 미리보기 ──────────────────────────────────────
function StepPreview({ onNext, onBack, step, total, photos }) {
  const { Button, Icon } = ObDS;
  const me = window.YuonData.me;
  const hero = photos.find(Boolean) || me.photo;
  return (
    <ObShell step={step} total={total} onBack={onBack} title="이렇게 보여질 거예요" scroll
      sub="매칭 상대에게 보여지는 내 프로필 미리보기예요. 언제든 마이페이지에서 수정할 수 있어요."
      footer={<Button variant="accent" size="lg" fullWidth onClick={onNext} leadingIcon={<Icon name="heart" size={19} filled color="#fff" />}>여운 시작하기</Button>}>
      <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--color-surface-card)', boxShadow: 'var(--shadow-card)', border: '1px solid var(--color-border-default)' }}>
        <div style={{ position: 'relative', aspectRatio: '4 / 5', background: 'var(--color-natural-200)' }}>
          <img src={hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(34,32,28,0.6), transparent 42%)' }} />
          <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.92)', fontSize: 12, fontWeight: 700, color: 'var(--color-primary-700)', marginBottom: 10 }}>🔥 을목 일주</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <Icon name="badgeCheck" size={20} />
              <span style={{ color: '#fff', fontSize: 22, fontWeight: 700 }}>나의 닉네임, 29</span>
            </div>
          </div>
        </div>
        <div style={{ padding: 18 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {['카페', '여행', '전시'].map((t) => (
              <span key={t} style={{ height: 30, display: 'inline-flex', alignItems: 'center', padding: '0 12px', borderRadius: 'var(--radius-pill)', background: 'var(--color-accent-50)', color: 'var(--color-accent-600)', fontSize: 13, fontWeight: 600 }}>{t}</span>
            ))}
          </div>
          <p style={{ margin: '14px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-body)' }}>조용한 카페와 한강 산책을 좋아해요. 비슷한 결의 사람과 천천히 알아가고 싶어요.</p>
        </div>
      </div>
    </ObShell>
  );
}

// ── flow controller ──────────────────────────────────────────────
function OnboardingFlow({ onComplete, onExit }) {
  const TOTAL = 8;
  const [step, setStep] = React.useState(0);
  const [photos, setPhotos] = React.useState([null, null, null, null, null, null]);
  const next = () => setStep((s) => (s < TOTAL - 1 ? s + 1 : s));
  const back = () => (step === 0 ? onExit() : setStep((s) => s - 1));
  const common = { step, total: TOTAL, onBack: back, onNext: next };
  switch (step) {
    case 0: return <StepTerms {...common} />;
    case 1: return <StepPhone {...common} />;
    case 2: return <StepSaju {...common} />;
    case 3: return <StepProfile {...common} />;
    case 4: return <StepPhoto {...common} photos={photos} setPhotos={setPhotos} />;
    case 5: return <StepReview {...common} />;
    case 6: return <StepVerify {...common} />;
    case 7: return <StepPreview {...common} photos={photos} onNext={onComplete} />;
    default: return null;
  }
}

Object.assign(window, { OnboardingFlow });
