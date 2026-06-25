/* 여운 app — Heart, Chat list, Chat room, My page. Exposed on window. */
const DS2 = window.YuonDesignSystem_8624c6;

// ── Heart ───────────────────────────────────────────────────────
function LikeCard({ p, onClick, locked }) {
  const { Icon } = DS2;
  const elIcon = window.YuonData.elementIcons[p.el];
  return (
    <button onClick={onClick} style={{ position: 'relative', display: 'block', padding: 0, border: 'none', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--color-natural-200)', aspectRatio: '3 / 4', cursor: 'pointer', boxShadow: 'var(--shadow-sm)', WebkitTapHighlightColor: 'transparent' }}>
      <img src={p.photo} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: locked ? 'blur(14px)' : 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(34,32,28,0.6), transparent 46%)' }} />
      {/* score badge */}
      <div style={{ position: 'absolute', top: 10, left: 10, display: 'inline-flex', alignItems: 'center', gap: 4, height: 26, padding: '0 9px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.92)' }}>
        <Icon name="heart" size={13} filled color="var(--color-accent-500)" />
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>{p.score}</span>
      </div>
      {locked ? (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="heart" size={20} filled color="var(--color-accent-500)" />
          </span>
        </div>
      ) : (
        <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#fff', fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>{p.name}, {p.age}</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 5, padding: elIcon ? '3px 8px 3px 3px' : '3px 8px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', fontSize: 11, fontWeight: 600, color: '#fff' }}>
            {elIcon ? <img src={elIcon} alt="" style={{ width: 18, height: 18, borderRadius: 6, objectFit: 'cover' }} /> : <span aria-hidden="true">🔥</span>}{p.sajuTag}
          </div>
        </div>
      )}
    </button>
  );
}

function HeartScreen({ onOpenProfile }) {
  const { TopAppBar, SegmentedTabs } = DS2;
  const data = window.YuonData;
  const [tab, setTab] = React.useState('saved');
  const list = tab === 'saved' ? data.iLiked : data.likedMe;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>
      <TopAppBar title="하트" />
      <SegmentedTabs tabs={[{ key: 'saved', label: '마음에 담은' }, { key: 'likedMe', label: '나를 괜찮게 본' }]} active={tab} onChange={setTab} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '0 2px 14px' }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {tab === 'saved' ? '마음에 담은 사람' : '나를 괜찮게 본 사람'}
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-accent-500)' }}>{list.length}</span>
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--color-text-meta)', margin: '0 2px 16px' }}>
          {tab === 'saved' ? '내가 하트를 누른 목록이에요. 상대에게 알림은 가지 않아요.' : '나에게 관심을 표현한 사람들이에요. 관심을 표현하면 바로 대화를 시작할 수 있어요.'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {list.map((p) => (
            <LikeCard key={p.id} p={p} onClick={() => onOpenProfile(p.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Chat list ───────────────────────────────────────────────────
function ChatListScreen({ onOpenChat, onOpenProfile }) {
  const { TopAppBar, Avatar, Icon } = DS2;
  const data = window.YuonData;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-card)' }}>
      <TopAppBar title="대화" />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* new matches rail */}
        <div style={{ padding: '16px 0 8px' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', padding: '0 18px 12px' }}>새로운 매칭</div>
          <div style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: '0 18px 4px', scrollbarWidth: 'none' }}>
            {data.newMatches.map((u) => (
              <button key={u.id} onClick={() => onOpenProfile(u.id)} style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                <span style={{ position: 'relative' }}>
                  <img src={u.photo} alt={u.name} style={{ width: 62, height: 62, borderRadius: '50%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: -2, right: -2, width: 18, height: 18, borderRadius: '50%', background: 'var(--color-accent-500)', border: '2px solid var(--color-surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="heart" size={9} filled color="#fff" />
                  </span>
                </span>
                <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500 }}>{u.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div style={{ height: 1, background: 'var(--color-divider)', margin: '8px 18px 0' }} />
        {/* conversation list */}
        <div style={{ padding: '4px 16px 24px' }}>
          {data.chats.map((c) => {
            const p = data.byId(c.profileId);
            return (
              <div key={c.id} onClick={() => onOpenChat(c.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderBottom: '1px solid var(--color-divider)', cursor: 'pointer' }}>
                <Avatar src={p.photo} name={p.name} size={56} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)' }}>{p.name}, {p.age}</span>
                    <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{c.time}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginTop: 3 }}>
                    <p style={{ margin: 0, fontSize: 14, color: c.unread > 0 ? 'var(--color-text-secondary)' : 'var(--color-text-meta)', fontWeight: c.unread > 0 ? 500 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.last}</p>
                    {c.unread > 0 && <span style={{ flexShrink: 0, minWidth: 20, height: 20, padding: '0 6px', borderRadius: 'var(--radius-pill)', background: 'var(--color-accent-500)', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.unread}</span>}
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

// ── Sticker picker ──────────────────────────────────────────────
const STICKER_LIST = [
  '안녕','윙크','설레','헉','아쉬워','ㅋㅋㅋ',
  '좋아해','쪽!','부끄러워','최고야!','화이팅!','고마워',
  '빼꼼','지켜보고있다','보고싶어','안아줘','기대돼','메시지왔어',
  '잘자','좋은아침','데이트하자','영화볼까?','우리 만나자','심쿵',
  '와우','화났어!','궁금해','멋져','우리 잘맞아','영원히',
];
const SPRITE = '../../assets/emoticons/yuon-stickers.png';
const COLS = 6, ROWS = 5;

function StickerSprite({ name, size = 72 }) {
  const idx = STICKER_LIST.indexOf(name);
  if (idx === -1) return null;
  const col = idx % COLS, row = Math.floor(idx / COLS);
  const px = `${col * (100 / (COLS - 1))}%`;
  const py = `${row * (100 / (ROWS - 1))}%`;
  return (
    <div style={{ width: size, height: size, backgroundImage: `url(${SPRITE})`, backgroundSize: `${COLS * 100}% ${ROWS * 100}%`, backgroundPosition: `${px} ${py}`, backgroundRepeat: 'no-repeat', flexShrink: 0 }} />
  );
}

function StickerPicker({ onSend }) {
  return (
    <div style={{ background: 'var(--color-surface-card)', borderTop: '1px solid var(--color-border-default)', padding: '12px 8px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 4 }}>
        {STICKER_LIST.map((name) => (
          <button key={name} onClick={() => onSend(name)}
            style={{ background: 'none', border: 'none', padding: '6px 2px', cursor: 'pointer', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              WebkitTapHighlightColor: 'transparent' }}>
            <StickerSprite name={name} size={48} />
            <span style={{ fontSize: 9.5, color: 'var(--color-text-meta)', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 52, textOverflow: 'ellipsis' }}>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Chat room ───────────────────────────────────────────────────
function ChatRoomScreen({ chatId, onBack }) {
  const { TopAppBar, IconButton, Icon, Avatar, MatchScore, ChatBubble, TopicChip, Tag } = DS2;
  const data = window.YuonData;
  const chat = data.chats.find((c) => c.id === chatId);
  const p = data.byId(chat.profileId);
  const [messages, setMessages] = React.useState(chat.messages);
  const [draft, setDraft] = React.useState('');
  const [panel, setPanel] = React.useState(false);
  // 첫 대화 진입 시 사주 기반 대화 주제 말풍선 자동 표시 (flowchart §7)
  const [showTopics, setShowTopics] = React.useState(!!chat.isNew || chat.messages.length === 0);
  const [showStickers, setShowStickers] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, showTopics, showStickers]);

  const send = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: 'me', text, time: '지금' }]);
    setDraft('');
  };
  const sendSticker = (name) => {
    setMessages((m) => [...m, { from: 'me', sticker: name, time: '지금' }]);
    setShowStickers(false);
  };

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>
      <TopAppBar
        title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Avatar src={p.photo} name={p.name} size={30} /><span style={{ fontSize: 16, fontWeight: 600 }}>{p.name}</span></span>}
        left={<IconButton icon={<Icon name="chevronLeft" />} onClick={onBack} ariaLabel="뒤로" />}
        right={<IconButton icon={<Icon name="sparkles" filled={panel} color={panel ? 'var(--color-primary-600)' : 'var(--color-text-primary)'} />} onClick={() => setPanel((v) => !v)} ariaLabel="궁합 패널" />}
      />
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ alignSelf: 'center', display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: 'var(--color-primary-50)', borderRadius: 'var(--radius-pill)', marginBottom: 4 }}>
          <Icon name="badgeCheck" size={15} />
          <span style={{ fontSize: 12, color: 'var(--color-primary-800)', fontWeight: 600 }}>궁합 {p.score}점 · 사주가 잘 맞는 인연이에요</span>
        </div>
        {messages.map((m, i) => (
          m.sticker
            ? <div key={i} style={{ alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start', display: 'flex', flexDirection: 'column', alignItems: m.from === 'me' ? 'flex-end' : 'flex-start', gap: 3 }}>
                <StickerSprite name={m.sticker} size={100} />
                <span style={{ fontSize: 11, color: 'var(--color-text-meta)' }}>{m.time}</span>
              </div>
            : <ChatBubble key={i} from={m.from} time={m.time}>{m.text}</ChatBubble>
        ))}
        {messages.length === 0 && (
          <div style={{ alignSelf: 'center', textAlign: 'center', margin: '10px 0 2px', maxWidth: 260 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>{p.name}님과 매칭됐어요</div>
            <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.55, color: 'var(--color-text-meta)' }}>두 분의 사주를 분석해 자연스러운 대화 주제를 골라봤어요. 가볍게 시작해보세요.</p>
          </div>
        )}
        {showTopics && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
            <span style={{ fontSize: 12, color: 'var(--color-text-meta)', fontWeight: 500 }}>사주 기반 대화 주제 추천</span>
            {data.topics.map((t, i) => <TopicChip key={i} onClick={() => { send(t); setShowTopics(false); }}>{t}</TopicChip>)}
          </div>
        )}
      </div>

      {/* composer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px 26px', background: 'var(--color-surface-card)', borderTop: '1px solid var(--color-border-default)' }}>
        <IconButton variant="soft" icon={<span style={{ fontSize: 20, lineHeight: 1 }}>🐾</span>} onClick={() => { setShowStickers((v) => !v); setShowTopics(false); }} ariaLabel="이모티콘" />
        <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send(draft)}
          placeholder="메시지를 입력하세요" style={{ flex: 1, height: 44, border: '1.5px solid var(--color-border-strong)', borderRadius: 'var(--radius-pill)', padding: '0 16px', fontFamily: 'var(--font-family-base)', fontSize: 15, outline: 'none', background: 'var(--color-surface-page)', color: 'var(--color-text-primary)' }} />
        <IconButton variant="primary" icon={<Icon name="send" size={20} color="#fff" />} onClick={() => send(draft)} ariaLabel="전송" />
      </div>

      {/* sticker picker */}
      {showStickers && <StickerPicker onSend={sendSticker} />}

      {/* side panel */}
      {panel && (
        <>
          <div onClick={() => setPanel(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(34,32,28,0.35)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '82%', background: 'var(--color-surface-card)', boxShadow: 'var(--shadow-pop)', padding: '52px 20px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <Avatar src={p.photo} name={p.name} size={52} />
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{p.name}, {p.age}</div>
                <div style={{ fontSize: 13, color: 'var(--color-text-meta)' }}>{p.district} · {p.job}</div>
              </div>
            </div>
            <MatchScore score={p.score} variant="bar" />
            <p style={{ margin: '12px 0 4px', fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>{p.synergy}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
              {p.sajuKeywords.map((k) => <Tag key={k} tone="primary">{k}</Tag>)}
            </div>
            <div style={{ height: 1, background: 'var(--color-divider)', margin: '4px 0 12px' }} />
            <span style={{ fontSize: 12, color: 'var(--color-text-meta)', fontWeight: 500 }}>대화 주제 추천</span>
            {data.topics.map((t, i) => <TopicChip key={i} onClick={() => { setMessages((m) => [...m, { from: 'me', text: t, time: '지금' }]); setPanel(false); }}>{t}</TopicChip>)}
          </div>
        </>
      )}
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
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>
      <TopAppBar title="마이" right={<IconButton icon={<Icon name="settings" size={22} />} ariaLabel="설정" />} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 24 }}>
        {/* profile hero */}
        <div style={{ margin: '16px 16px 0', padding: 18, borderRadius: 'var(--radius-xl)', background: 'var(--color-surface-card)', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Avatar src={me.photo} name="나" size={62} verified />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.01em' }}>{me.name}, {me.age}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 7 }}>
                <Badge tone="trust" size="sm">본인인증</Badge>
                <Badge tone="primary" size="sm" icon={null}>셀피 인증</Badge>
              </div>
            </div>
            {/* completeness ring */}
            <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
              <svg width="64" height="64" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="32" cy="32" r={r} fill="none" stroke="var(--color-primary-100)" strokeWidth="6" />
                <circle cx="32" cy="32" r={r} fill="none" stroke="var(--color-primary-500)" strokeWidth="6" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - me.completeness / 100)} />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-primary-700)', lineHeight: 1 }}>{me.completeness}%</span>
              </div>
            </div>
          </div>
          <button style={{ marginTop: 16, width: '100%', height: 44, border: 'none', borderRadius: 'var(--radius-md)', background: 'var(--color-primary-50)', color: 'var(--color-primary-800)', fontFamily: 'var(--font-family-base)', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            프로필 완성하고 더 많은 추천 받기 <Icon name="chevronRight" size={16} color="var(--color-primary-700)" />
          </button>
        </div>

        {/* 사주 highlight */}
        <div style={{ margin: '12px 16px 0', padding: 16, borderRadius: 'var(--radius-xl)', background: 'linear-gradient(120deg, var(--color-primary-600), var(--color-primary-400))', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="sparkles" size={22} filled color="var(--color-primary-500)" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.03em', color: 'rgba(255,255,255,0.85)' }}>내 사주</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginTop: 1 }}>{me.element}</div>
          </div>
          <Icon name="chevronRight" size={20} color="rgba(255,255,255,0.9)" />
        </div>

        <div style={{ marginTop: 20, background: 'var(--color-surface-card)', borderTop: '1px solid var(--color-border-default)', borderBottom: '1px solid var(--color-border-default)', padding: '4px 20px' }}>
          <ListRow icon="user" label="내 프로필" value="편집" />
          <ListRow icon="sparkles" label="내 사주 다시 보기" />
          <ListRow icon="sliders" label="이상형 설정" />
          <ListRow icon="badgeCheck" label="선택 인증 뱃지" value="2개 완료" />
        </div>

        <div style={{ marginTop: 12, background: 'var(--color-surface-card)', borderTop: '1px solid var(--color-border-default)', borderBottom: '1px solid var(--color-border-default)', padding: '4px 20px' }}>
          <ListRow icon="user" label="아는 사람 차단" right={<Switch checked={block} onChange={setBlock} />} chevron={false} />
          <ListRow icon="bell" label="알림 설정" right={<Switch checked={notif} onChange={setNotif} />} chevron={false} />
          <ListRow icon="settings" label="계정 설정" />
        </div>

        <div style={{ marginTop: 12, background: 'var(--color-surface-card)', borderTop: '1px solid var(--color-border-default)', borderBottom: '1px solid var(--color-border-default)', padding: '4px 20px' }}>
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
