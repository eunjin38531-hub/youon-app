/* 여운 app — Heart, Chat list, Chat room, My page. Exposed on window. */
const DS2 = window.YuonDesignSystem_8624c6;

// ── Heart ───────────────────────────────────────────────────────
function ScoreBadge({ score }) {
  return (
    <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '7px 10px 6px', borderRadius: 12, background: 'rgba(255,255,255,0.97)', boxShadow: '0 2px 10px rgba(0,0,0,0.14)', pointerEvents: 'none' }}>
      <span style={{ fontSize: 18, lineHeight: 1 }}>❤️</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: '#1E1C18', lineHeight: 1 }}>{score}점</span>
    </div>
  );
}

function ActivityPills({ at, sajuTag, elIcon }) {
  return (
    <div style={{ position: 'absolute', left: 10, bottom: 10, right: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {at && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, height: 28, padding: '0 10px', borderRadius: 999, background: 'rgba(28,26,24,0.55)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 500 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5AC7C4', flexShrink: 0 }} />{at}
        </span>
      )}
      {sajuTag && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 28, padding: '0 10px', borderRadius: 999, background: 'rgba(255,120,60,0.88)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 600 }}>
          {elIcon && <span style={{ fontSize: 13 }}>{elIcon}</span>}{sajuTag}
        </span>
      )}
    </div>
  );
}

function LikeCard({ p, onClick, locked }) {
  const elIcon = window.YuonData.elementIcons[p.el];
  return (
    <div onClick={onClick} style={{ borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(30,28,24,0.10)', cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}>
      <div style={{ position: 'relative', aspectRatio: '4 / 5', background: '#E9E6E1' }}>
        <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: locked ? 'blur(14px)' : 'none' }} />
        <ScoreBadge score={p.score} />
        {!locked && <ActivityPills at={p.at} sajuTag={p.sajuTag} elIcon={elIcon} />}
        {locked && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>❤️</span>
          </div>
        )}
      </div>
      {!locked && (
        <div style={{ padding: '12px 14px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <img src="icons/인증.svg" alt="" width="20" height="20" />
            <span style={{ fontSize: 15, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.02em' }}>{p.name}, {p.age}</span>
          </div>
          {p.intro && <p style={{ margin: 0, fontSize: 13, color: '#7A7770', lineHeight: 1.45, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.intro}</p>}
        </div>
      )}
    </div>
  );
}

function SavedCarousel({ list, onOpenProfile, charTop, charBottom, emptyMsg }) {
  const [cur, setCur] = React.useState(0);
  const startX = React.useRef(null);
  const dragging = React.useRef(false);
  const next = () => setCur((i) => Math.min(list.length - 1, i + 1));
  const prev = () => setCur((i) => Math.max(0, i - 1));
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; dragging.current = false; };
  const onTouchMove = (e) => { if (startX.current === null) return; if (Math.abs(e.touches[0].clientX - startX.current) > 8) { dragging.current = true; e.preventDefault(); } };
  const onTouchEnd = (e) => { if (!startX.current) return; const dx = e.changedTouches[0].clientX - startX.current; if (dragging.current) { if (dx < -40) next(); else if (dx > 40) prev(); } startX.current = null; dragging.current = false; };

  if (!list.length) return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: 14 }}>
      {emptyMsg || '아직 없어요'}
    </div>
  );

  const CARD_W = 200;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, overflow: 'hidden', padding: '16px 0 12px' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        {/* 위쪽 캐릭터 (마음에 담은 — 오렌지 뒤통수) */}
        {charTop && (
          <div style={{ position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)', zIndex: 20, pointerEvents: 'none' }}>
            <img src={charTop} alt="" style={{ width: 100, height: 100, objectFit: 'contain' }} />
          </div>
        )}
        <div style={{ position: 'relative', width: '100%', height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          {list.map((p, i) => {
            const offset = i - cur;
            if (Math.abs(offset) > 1) return null;
            const isCenter = offset === 0;
            const elIcon = window.YuonData.elementIcons[p.el];
            return (
              <div key={p.id} onClick={() => isCenter ? onOpenProfile(p.id) : setCur(i)}
                style={{ position: 'absolute', width: CARD_W, borderRadius: 20, overflow: 'hidden', background: '#fff',
                  boxShadow: isCenter ? '0 16px 48px rgba(30,28,24,0.20)' : '0 4px 16px rgba(30,28,24,0.10)',
                  transform: `translateX(${offset * (CARD_W * 0.76)}px) scale(${isCenter ? 1 : 0.88}) rotate(${offset * -6}deg)`,
                  transition: 'transform 0.35s cubic-bezier(0.34,1.1,0.64,1), opacity 0.25s ease',
                  zIndex: isCenter ? 10 : 5, opacity: isCenter ? 1 : 0.75, cursor: 'pointer' }}>
                <div style={{ position: 'relative', aspectRatio: '4 / 5' }}>
                  <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <ScoreBadge score={p.score} />
                  <ActivityPills at={p.at} sajuTag={p.sajuComment || p.sajuTag} elIcon={elIcon} />
                </div>
                <div style={{ padding: '12px 14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <img src="icons/인증.svg" alt="" width="18" height="18" />
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.02em' }}>{p.name}, {p.age}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: '#7A7770', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.intro}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* 아래쪽 캐릭터 (나를 괜찮게 본 — 보라 뒤통수) */}
        {charBottom && (
          <div style={{ position: 'absolute', bottom: -54, left: '50%', transform: 'translateX(-50%)', zIndex: 20, pointerEvents: 'none' }}>
            <img src={charBottom} alt="" style={{ width: 100, height: 100, objectFit: 'contain' }} />
          </div>
        )}
      </div>
      {/* dots */}
      <div style={{ display: 'flex', gap: 6, marginTop: charBottom ? 54 : 0 }}>
        {list.map((_, i) => <div key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 20 : 6, height: 6, borderRadius: 3, background: i === cur ? '#FF8C7D' : '#DAD7D1', transition: 'all 0.25s ease', cursor: 'pointer' }} />)}
      </div>
      <div style={{ fontSize: 12, color: '#888' }}>
        ← 좌우로 넘겨 <span style={{ color: '#5AC7C4', fontWeight: 600 }}>더 많은 프로필</span>을 확인해보세요 →
      </div>
    </div>
  );
}

function HeartScreen({ onOpenProfile }) {
  const { TopAppBar, SegmentedTabs } = DS2;
  const data = window.YuonData;
  const [tab, setTab] = React.useState('saved');
  const isSaved = tab === 'saved';
  const list = isSaved ? data.iLiked : data.likedMe;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <TopAppBar title="하트" />
      <SegmentedTabs tabs={[{ key: 'saved', label: '마음에 담은' }, { key: 'likedMe', label: '나를 괜찮게 본' }]} active={tab} onChange={setTab} />
      <div style={{ padding: '14px 18px 2px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#1E1C18' }}>{isSaved ? '마음에 담은 사람' : '나를 괜찮게 본 사람'}</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#FF8C7D' }}>{list.length}</span>
      </div>
      <p style={{ fontSize: 13, color: '#888', margin: '0 18px 6px', lineHeight: 1.5 }}>
        {isSaved
          ? '내가 하트를 누른 목록이에요. 상대에게 알림은 가지 않아요.'
          : '나에게 관심을 표현한 사람들이에요.\n관심을 표현하면 바로 대화를 시작할 수 있어요.'}
      </p>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* 배경: 마음에 담은 = teal 그라디언트, 나를 괜찮게 본 = 만다라 텍스처 */}
        {isSaved
          ? <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #D6F2F1 0%, #fff 55%)', zIndex: 0 }} />
          : <img src="characters/여운 누끼 보라 카페트 1.png" alt="" style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', width: '110%', opacity: 0.25, pointerEvents: 'none', zIndex: 0 }} />
        }
        <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
          {isSaved
            ? <SavedCarousel list={list} onOpenProfile={onOpenProfile}
                charTop="characters/여운 뒤통수 12 누끼 3.png"
                emptyMsg="아직 마음에 담은 사람이 없어요" />
            : <SavedCarousel list={list} onOpenProfile={onOpenProfile}
                charBottom="characters/여운 뒤통수 12 누끼 2.png"
                emptyMsg="아직 나를 괜찮게 본 사람이 없어요" />
          }
        </div>
      </div>
    </div>
  );
}

// ── Chat list ───────────────────────────────────────────────────
function ChatListScreen({ onOpenChat, onOpenProfile }) {
  const { TopAppBar, Avatar } = DS2;
  const data = window.YuonData;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <TopAppBar title="대화" />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* 새로운 매칭 */}
        <div style={{ padding: '16px 0 12px' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1E1C18', padding: '0 18px 12px' }}>새로운 매칭</div>
          <div style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: '0 18px 4px', scrollbarWidth: 'none' }}>
            {data.newMatches.map((u) => (
              <button key={u.id} onClick={() => onOpenProfile(u.id)} style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                <span style={{ position: 'relative' }}>
                  <img src={u.photo} alt={u.name} style={{ width: 62, height: 62, borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
                  <span style={{ position: 'absolute', top: -2, right: -2, width: 20, height: 20, borderRadius: '50%', background: '#FF8C7D', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>❤</span>
                </span>
                <span style={{ fontSize: 12, color: '#5A564E', fontWeight: 500 }}>{u.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div style={{ height: 1, background: '#F0EDEA', margin: '0 18px' }} />
        {/* 채팅 목록 */}
        <div style={{ padding: '4px 18px 24px' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1E1C18', padding: '12px 0 8px' }}>채팅</div>
          {data.chats.map((c) => {
            const p = data.byId(c.profileId);
            return (
              <div key={c.id} onClick={() => onOpenChat(c.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid #F7F5F2', cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}>
                <img src={p.photo} alt={p.name} style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#1E1C18' }}>{p.name}, {p.age}</span>
                    <span style={{ fontSize: 12, color: '#888', flexShrink: 0, marginLeft: 8 }}>{c.time}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <p style={{ margin: 0, fontSize: 13, color: c.unread > 0 ? '#5A564E' : '#888', fontWeight: c.unread > 0 ? 500 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.last}</p>
                    {c.unread > 0 && <span style={{ flexShrink: 0, minWidth: 20, height: 20, padding: '0 6px', borderRadius: 999, background: '#FF8C7D', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.unread}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Chat room ───────────────────────────────────────────────────
function HealthShareModal({ partnerName, onClose }) {
  const features = [
    { icon: 'icons/document.svg', title: '검증된 기관 결과만 인정', desc: '병원·보건소 발급 결과지를 업로드하면 자동 검증돼요.' },
    { icon: 'icons/eye.svg', title: '항목명은 공개, 세부 수치는 비공개', desc: '"이상 없음 / 확인 필요"로만 표시돼요.' },
    { icon: 'icons/refresh.svg', title: '언제든 동의 철회 가능', desc: '철회 시 공유된 정보는 즉시 삭제돼요.' },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 100, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 4px 12px 4px', borderBottom: '1px solid #F0EDEA' }}>
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px' }}>
          <img src="icons/chevron-left.svg" width="20" height="20" />
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: '#1E1C18' }}>건강 정보 공유</span>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '32px 24px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#EDF9F8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <img src="icons/shield-check.svg" alt="" width="36" height="36" style={{ filter: 'invert(55%) sepia(60%) saturate(400%) hue-rotate(140deg)' }} />
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#1E1C18', textAlign: 'center', marginBottom: 8 }}>서로 동의하면 검사결과를 확인할 수 있어요</div>
        <p style={{ margin: '0 0 28px', fontSize: 13, color: '#888', textAlign: 'center', lineHeight: 1.55 }}>한쪽만 동의한 경우 상대에게 동의 여부는 전달되지 않아요.</p>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', borderRadius: 14, background: '#fff', border: '1px solid #E9E6E1' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F7F5F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src={f.icon} alt="" width="20" height="20" style={{ filter: 'invert(40%) sepia(10%) saturate(400%) hue-rotate(10deg)' }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#1E1C18', marginBottom: 3 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: 12, background: '#F7F5F2', marginBottom: 20 }}>
          <span style={{ fontSize: 14, color: '#5A564E', fontWeight: 500 }}>{partnerName}님 동의 상태</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#888', padding: '4px 10px', borderRadius: 999, background: '#E9E6E1' }}>대기 중</span>
        </div>
        <button style={{ width: '100%', height: 52, borderRadius: 16, background: '#5AC7C4', color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
          결과지 업로드하고 동의하기
        </button>
      </div>
    </div>
  );
}

function ChatRoomScreen({ chatId, onBack }) {
  const { TopAppBar, IconButton, Icon, Avatar, MatchScore, ChatBubble, TopicChip, Tag } = DS2;
  const data = window.YuonData;
  const chat = data.chats.find((c) => c.id === chatId);
  const p = data.byId(chat.profileId);
  const [messages, setMessages] = React.useState(chat.messages);
  const [draft, setDraft] = React.useState('');
  const [panel, setPanel] = React.useState(false);
  const [showHealth, setShowHealth] = React.useState(false);
  const [showTopics, setShowTopics] = React.useState(!!chat.isNew || chat.messages.length === 0);
  const scrollRef = React.useRef(null);

  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, showTopics]);

  const send = (text) => { if (!text.trim()) return; setMessages((m) => [...m, { from: 'me', text, time: '지금' }]); setDraft(''); };

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <TopAppBar
        title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Avatar src={p.photo} name={p.name} size={30} /><span style={{ fontSize: 16, fontWeight: 600 }}>{p.name}</span></span>}
        left={<IconButton icon={<Icon name="chevronLeft" />} onClick={onBack} ariaLabel="뒤로" />}
        right={<IconButton icon={<Icon name="sparkles" filled={panel} color={panel ? '#5AC7C4' : '#1E1C18'} />} onClick={() => setPanel((v) => !v)} ariaLabel="궁합 패널" />}
      />
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ alignSelf: 'center', display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: '#EDF9F8', borderRadius: 999, marginBottom: 4 }}>
          <span style={{ fontSize: 12, color: '#2D8E8C', fontWeight: 600 }}>궁합 {p.score}점 · 사주가 잘 맞는 인연이에요</span>
        </div>
        {messages.map((m, i) => <ChatBubble key={i} from={m.from} time={m.time}>{m.text}</ChatBubble>)}
        {messages.length === 0 && (
          <div style={{ alignSelf: 'center', textAlign: 'center', margin: '10px 0 2px', maxWidth: 260 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1E1C18' }}>{p.name}님과 매칭됐어요</div>
            <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.55, color: '#888' }}>두 분의 사주를 분석해 자연스러운 대화 주제를 골라봤어요.</p>
          </div>
        )}
        {showTopics && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
            <span style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>사주 기반 대화 주제 추천</span>
            {data.topics.map((t, i) => <TopicChip key={i} onClick={() => { send(t); setShowTopics(false); }}>{t}</TopicChip>)}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px 26px', background: '#fff', borderTop: '1px solid #F0EDEA' }}>
        <IconButton variant="soft" icon={<span style={{ fontSize: 20 }}>🐾</span>} ariaLabel="이모티콘" />
        <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send(draft)}
          placeholder="메시지를 입력하세요" style={{ flex: 1, height: 44, border: '1.5px solid #E0DDD8', borderRadius: 999, padding: '0 16px', fontFamily: 'var(--font-family-base)', fontSize: 15, outline: 'none', background: '#fff', color: '#1E1C18' }} />
        <IconButton variant="primary" icon={<Icon name="send" size={20} color="#fff" />} onClick={() => send(draft)} ariaLabel="전송" />
      </div>
      {panel && (
        <>
          <div onClick={() => setPanel(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(30,28,24,0.35)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '82%', background: '#fff', boxShadow: '-8px 0 30px rgba(0,0,0,0.12)', padding: '52px 20px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <Avatar src={p.photo} name={p.name} size={52} />
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, color: '#1E1C18' }}>{p.name}, {p.age}</div>
                <div style={{ fontSize: 13, color: '#888' }}>{p.district} · {p.job}</div>
              </div>
            </div>
            <MatchScore score={p.score} variant="bar" />
            <p style={{ margin: '12px 0 4px', fontSize: 14, lineHeight: 1.55, color: '#5A564E' }}>{p.synergy}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
              {p.sajuKeywords.map((k) => <Tag key={k} tone="primary">{k}</Tag>)}
            </div>
            <div style={{ height: 1, background: '#F0EDEA', margin: '4px 0 12px' }} />
            <span style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>대화 주제 추천</span>
            {data.topics.map((t, i) => <TopicChip key={i} onClick={() => { setMessages((m) => [...m, { from: 'me', text: t, time: '지금' }]); setPanel(false); }}>{t}</TopicChip>)}
            <div style={{ height: 1, background: '#F0EDEA', margin: '8px 0' }} />
            <button onClick={() => { setPanel(false); setShowHealth(true); }} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '13px 14px', borderRadius: 14, background: '#F7F5F2', border: '1px solid #E9E6E1', cursor: 'pointer', textAlign: 'left' }}>
              <span style={{ width: 38, height: 38, borderRadius: 10, background: '#EDF9F8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 20 }}>🛡️</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#1E1C18' }}>건강 정보 공유</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>상호 동의 시에만 열람</div>
              </div>
              <img src="icons/chevron-left.svg" width="16" height="16" style={{ transform: 'rotate(180deg)', opacity: 0.4 }} />
            </button>
          </div>
        </>
      )}
      {showHealth && <HealthShareModal partnerName={p.name} onClose={() => setShowHealth(false)} />}
    </div>
  );
}

// ── My page ─────────────────────────────────────────────────────
function MyPageScreen() {
  const { TopAppBar, Avatar, Badge, ListRow, Switch, Icon, IconButton } = DS2;
  const me = window.YuonData.me;
  const [notif, setNotif] = React.useState(true);
  const [block, setBlock] = React.useState(true);
  const r = 26, circ = 2 * Math.PI * r;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#F7F5F2' }}>
      <TopAppBar title="마이" right={<IconButton icon={<Icon name="settings" size={22} />} ariaLabel="설정" />} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 24 }}>
        <div style={{ margin: '16px 16px 0', padding: 18, borderRadius: 20, background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Avatar src={me.photo} name="나" size={62} verified />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1E1C18' }}>{me.name}, {me.age}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 7 }}>
                <Badge tone="trust" size="sm">본인인증</Badge>
                <Badge tone="primary" size="sm">셀피 인증</Badge>
              </div>
            </div>
            <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
              <svg width="64" height="64" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="32" cy="32" r={r} fill="none" stroke="#CCEEED" strokeWidth="6" />
                <circle cx="32" cy="32" r={r} fill="none" stroke="#5AC7C4" strokeWidth="6" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - me.completeness / 100)} />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#2D8E8C' }}>{me.completeness}%</span>
              </div>
            </div>
          </div>
          <button style={{ marginTop: 16, width: '100%', height: 44, border: 'none', borderRadius: 12, background: '#EDF9F8', color: '#1C6A68', fontFamily: 'var(--font-family-base)', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            프로필 완성하고 더 많은 추천 받기 <Icon name="chevronRight" size={16} color="#2D8E8C" />
          </button>
        </div>
        <div style={{ margin: '12px 16px 0', padding: 16, borderRadius: 20, background: 'linear-gradient(120deg, #41AFAC, #6CCECB)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>✨</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.03em' }}>내 사주</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginTop: 1 }}>{me.element}</div>
          </div>
          <Icon name="chevronRight" size={20} color="rgba(255,255,255,0.9)" />
        </div>
        <div style={{ marginTop: 20, background: '#fff', borderTop: '1px solid #F0EDEA', borderBottom: '1px solid #F0EDEA', padding: '4px 20px' }}>
          <ListRow icon="user" label="내 프로필" value="편집" />
          <ListRow icon="sparkles" label="내 사주 다시 보기" />
          <ListRow icon="sliders" label="이상형 설정" />
          <ListRow icon="badgeCheck" label="선택 인증 뱃지" value="2개 완료" />
        </div>
        <div style={{ marginTop: 12, background: '#fff', borderTop: '1px solid #F0EDEA', borderBottom: '1px solid #F0EDEA', padding: '4px 20px' }}>
          <ListRow icon="user" label="아는 사람 차단" right={<Switch checked={block} onChange={setBlock} />} chevron={false} />
          <ListRow icon="bell" label="알림 설정" right={<Switch checked={notif} onChange={setNotif} />} chevron={false} />
          <ListRow icon="settings" label="계정 설정" />
        </div>
        <div style={{ marginTop: 12, background: '#fff', borderTop: '1px solid #F0EDEA', borderBottom: '1px solid #F0EDEA', padding: '4px 20px' }}>
          <ListRow label="공지사항" icon="bell" />
          <ListRow label="고객센터" icon="chat" />
          <ListRow label="쿠폰 / 이용권" icon="sparkles" />
          <ListRow label="버전 정보" icon="settings" value="v1.0.0" chevron={false} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HeartScreen, ChatListScreen, ChatRoomScreen, MyPageScreen });
