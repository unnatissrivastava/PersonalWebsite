import { useEffect, useRef, useState } from "react";
 
type Track = {
  title: string;
  file: string;
  note: string;
  treatment: string;
};
 
const tracks: Track[] = [
  {
    title: "KALANK TITLE TRACK",
    file: "kalank-title-track.mp3",
    note: "as i've alwayssss saidddd\n\n‘tu jugnuuuu chamaktaaaa, maiiii jungleeee ghaneraaaaaaa, maiiii teraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa’ <333",
    treatment: "lyric",
  },
  {
    title: "SOCH NA SAKE",
    file: "soch-na-sake.mp3",
    note: "kuchhh bhi nahiii haiii ye jahaaaannnnn, tuuuuu, haiii tohhhh haiiii ismeeee zindaggiiiiiiiiiiii\n\nabb mujhkooo jaana haiiii kahaaann, ke, tu hiiii safarrr haiiii aakhriiiii\n\nki tere bina jeeena mumkin nahi, na dena kabhi mujhko tu faasle, mai tujhko kitna chahti hoooon, ye tu kabhi soch naa sakeee",
    treatment: "flowing",
  },
  {
    title: "NAZM NAZM",
    file: "nazm-nazm.mp3",
    note: "mere dil ke lifafeee maiii, teraaa khattt hai janiyaaaaaaa <3333",
    treatment: "tiny-note",
  },
  {
    title: "RAABTA TITLE TRACK",
    file: "raabta-title-track.mp3",
    note: "kuchhhh tohhh haiii tujhseee raaabtaaaa, kuchh toh haiii tujhseee raabta, kyu hai ye kaisee hai yeee tuuuu bataaaaaa\n\ntu humsafar haiiiii, firrr kyaa fikarrr haiii, jeene ki wajah yahi hai marna isi ke liyeeeeee",
    treatment: "diary",
  },
  {
    title: "MERE SOHNEYA",
    file: "mere-sohneya.mp3",
    note: "mereee sohneyaaaa, sohneyaaaaa veeeee, veee mahiii meraa kitheee naiyoo dill lagnaaaaaa",
    treatment: "last-note",
  },
];
 
const chapterNames = [
  "Private Delivery",
  "The Archive",
  "The Music Room",
  "Who You Are To Me",
  "Things I Love",
  "The Little Things",
  "Keepsakes",
  "Our Story",
  "The Sahil Dictionary",
  "Choose Us",
  "The Box of Promises",
  "The Final Letter",
];
 
const promises = [
  {
    title: "FOR THE HARD DAYS",
    text: "I promise to try to understand you, even when we don't see things the same way. I don't want us to forget that we're on the same side.",
  },
  {
    title: "FOR THE ORDINARY DAYS",
    text: "I promise to keep sharing my random thoughts, little updates, and absolutely unnecessary stories with you. Even the ones that have no point whatsoever. 😭",
  },
  {
    title: "FOR THE DISTANCE",
    text: "I promise to keep making you feel included in my life, even when we can't physically be together. I want you to know about the little things, not just the big ones.",
  },
  {
    title: "FOR THE DIFFICULT CONVERSATIONS",
    text: "I promise to communicate, to listen, and to remember that it's us trying to solve a problem—not us against each other.",
  },
  {
    title: "FOR US",
    text: "I promise not to take the little things for granted. The comfort, the laughter, the familiarity, and the effort. I want us to keep choosing those things.",
  },
];
 
function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
 
function Flourish({ children = "A private collection" }: { children?: string }) {
  return (
    <div className="flourish" aria-hidden="true">
      <span />
      {children}
      <span />
    </div>
  );
}
 
function ChapterHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="chapter-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {intro && <p className="chapter-intro">{intro}</p>}
    </header>
  );
}
 
function Opening({
  opened,
  onOpen,
  onEnter,
}: {
  opened: boolean;
  onOpen: () => void;
  onEnter: () => void;
}) {
  return (
    <section className={`chapter opening ${opened ? "is-open" : ""}`}>
      <div className="opening-copy">
        <p className="eyebrow">HAPPY BOYFRIEND’S DAY</p>
        <p>Delivered exclusively to Sahil.</p>
        <p className="hand-note">Ek chhoti si cheez hai tumhare liye cutie😭</p>
      </div>
      <div className="mail-stage">
        <div className="postage" aria-hidden="true">
          <span>LOVE POST</span>
          <b>14</b>
          <small>PRIVATE</small>
        </div>
        <div className="postmark" aria-hidden="true">
          <span>SAHIL ARCHIVE</span>
          <i />
          <small>SPECIAL DELIVERY</small>
        </div>
        <div className="envelope">
          <div className="envelope-back" />
          <div className="letter-preview">
            <p>Hi baby. ❤️</p>
            <p>Agar kuchu puchu tum yaha tk aagye ho, then i loveee youuuuu 😭</p>
            <p>Ab andar aao. Tumhare liye kaafi kuch rakha hai.</p>
            <button className="ink-button" onClick={onEnter}>
              clickkkkkkkkkkkk <span>→</span>
            </button>
          </div>
          <div className="envelope-front" />
          <div className="envelope-flap" />
          <button
            className="wax-seal"
            onClick={onOpen}
            aria-label={opened ? "Envelope opened" : "Break the wax seal"}
          >
            S
          </button>
        </div>
        {!opened && <p className="seal-hint">tap the seal to open</p>}
      </div>
      <p className="edition-mark">Happy Boyfriend’s Day · Made only for you</p>
    </section>
  );
}
 
function ArchiveWelcome({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="chapter archive-welcome">
      <div className="archive-masthead">
        <p className="issue">PRIVATE COLLECTION · VOL. 01</p>
        <h1>THE SAHIL<br />ARCHIVE</h1>
        <p className="archive-subtitle">Basically, a whole website dedicated to you. Yes, you. 🙄❤️</p>
      </div>
      <div className="welcome-layout">
        <aside className="archive-label">
          <span>CATALOGUED FOR</span>
          <strong>SAHIL</strong>
          <i>with embarrassing amounts of love</i>
        </aside>
        <div className="welcome-copy">
          <span className="dropcap">O</span>
          <p>kay so, mujhe honestly nahi pata tha ki tumhare liye kya banau. Ek normal sa message likh deti toh woh bhi cute hota, but phir mujhe laga ki why not make something jisme tumhare liye meri saari random feelings, songs, pictures, letters aur thoughts ek jagah ho?</p>
          <p>Toh welcome to your very own archive, Mr. Sahil. Ismein kuch emotional cheezein hongi, kuch embarrassing cheezein hongi, kuch aisi baatein hongi jo tum already jaante ho, aur kuch aisi jo shayad main normally bol nahi paati.</p>
          <p>Please poora dekhna. Beech mein bhaagna mat. Itna sab banaya hai maine. 😭</p>
          <button className="primary-button" onClick={onExplore}>start exploring <span>→</span></button>
        </div>
        <div className="opened-stamp">COLLECTION<br /><b>OPENED</b></div>
      </div>
      <Flourish>letters · songs · us</Flourish>
    </section>
  );
}
 
function MusicRoom() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
 
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("ended", onEnded);
    };
  }, [active]);
 
  const toggleTrack = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (index !== active) {
      audio.pause();
      setActive(index);
      setCurrentTime(0);
      setDuration(0);
      setPlaying(true);
      requestAnimationFrame(() => {
        audioRef.current?.play().catch(() => setPlaying(false));
      });
    } else if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      audio.play().catch(() => setPlaying(false));
    }
  };
 
  const seek = (value: number) => {
    if (audioRef.current) audioRef.current.currentTime = value;
    setCurrentTime(value);
  };
 
  return (
    <section className="chapter music-room">
      <ChapterHeading
        eyebrow="CHAPTER 02 · THE MUSIC ROOM"
        title="Five Songs, One You."
        intro={"Okay, this section is IMPORTANT. Because apparently I cannot just tell you that I love you normally, mujhe gaane ke lyrics bhi tumhe dedicate karne hain. 😭\n\nSo here's our little mixtape. Five songs, five very important reasons why you're going to have to tolerate me singing these at you forever. Har song pe tap karna, and please read my notes properly. I have put my entire heart and a questionable number of extra letters into them. <333"}
      />
      <div className="mixtape-shell">
        <div className="player-top">
          <div>
            <p>NOW PLAYING</p>
            <h2>{tracks[active].title}</h2>
          </div>
          <div className={`spinning-record ${playing ? "playing" : ""}`}><span /></div>
        </div>
        <div className="tape-window">
          <span className="reel" />
          <div className="tape-label">FOR SAHIL<br /><small>side a · play loudly</small></div>
          <span className="reel" />
        </div>
        <div className="transport">
          <button onClick={() => toggleTrack(active)} aria-label={playing ? "Pause" : "Play"} className="play-main">
            {playing ? "Ⅱ" : "▶"}
          </button>
          <div className="progress-wrap">
            <input
              aria-label="Song progress"
              type="range"
              min="0"
              max={duration || 0}
              value={Math.min(currentTime, duration || 0)}
              onChange={(event) => seek(Number(event.target.value))}
            />
            <div className="time-row"><span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span></div>
          </div>
        </div>
        <audio ref={audioRef} src={`/${tracks[active].file}`} preload="metadata" />
      </div>
      <div className="track-list">
        {tracks.map((track, index) => (
          <article
            className={`track ${active === index ? "active" : ""} ${track.treatment}`}
            key={track.title}
          >
            <button className="track-select" onClick={() => toggleTrack(index)} aria-label={`${playing && active === index ? "Pause" : "Play"} ${track.title}`}>
              <span className="track-number">0{index + 1}</span>
              <span className="track-title">{track.title}</span>
              <span className="track-play">{active === index && playing ? "Ⅱ" : "▶"}</span>
            </button>
            <div className="dedication">
              <span>my note to you</span>
              <p>{track.note}</p>
              <small>{track.file}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
 
function WhoYouAre() {
  return (
    <section className="chapter journal-chapter">
      <ChapterHeading eyebrow="CHAPTER 03 · A JOURNAL ENTRY" title="Okay, but who are you to me?" />
      <div className="journal-page">
        <p>Tumhe pata hai, kabhi kabhi main sochti hoon ki tum meri life mein kitne naturally important ban gaye. Like, ab koi bhi random cheez hoti hai toh automatically mann karta hai tumhe bataun. Koi funny baat, koi stupid thought, koi chhoti si problem, kuch bhi.</p>
        <p>Aur sabse achhi baat ye hai ki tumhare saamne mujhe har waqt sorted, mature, ya perfect banne ki zarurat nahi lagti. Main literally bhukkad banke kha sakti hoon, absolute nonsense bol sakti hoon, clingy ho sakti hoon, annoying ho sakti hoon, emotional ho sakti hoon—and I don't have to filter myself every second. 😭</p>
        <p>I think that's one of my favourite things about us. Tumhare saath comfortable feel karna. Not having to think ki main kaise sound kar rahi hoon, kya bol rahi hoon, ya main zyada ho rahi hoon.</p>
        <p className="journal-emphasis">You're not just someone I love. You're someone I can be embarrassingly, unapologetically myself with. And that means a lot more to me than I can properly explain.</p>
        <aside className="margin-note">basically: you feel like<br /><b>home, but annoying.</b> ♡</aside>
      </div>
    </section>
  );
}
 
const loveReasons = [
  ["01", "The comfort you give me", "Tumhare saath mujhe woh version banne ki zarurat nahi padti jo sabko pasand aaye. I can just exist. Kabhi stupid, kabhi dramatic, kabhi extra clingy and you get to see all of it."],
  ["02", "The random conversations", "Hum kitni bhi random baat kar sakte hain and somehow mujhe woh conversations bhi yaad reh jaati hain. Kabhi topic hota hai, kabhi nahi hota, but I still want to keep talking to you."],
  ["03", "The fact that we keep trying", "Humne sab kuch hamesha perfectly handle nahi kiya. Fights hui hain, misunderstandings hui hain, kabhi dono ko samajh nahi aaya ki kya karein. But I genuinely value that we talked, tried, and didn't just give up on each other."],
  ["04", "Your place in my everyday life", "Tum meri everyday life ka part ban gaye ho. Kuch bhi hota hai toh tumhe batane ka mann karta hai. Aur jab koi cheez tumhe batati hoon, toh woh moment somehow aur real lagta hai."],
  ["05", "You, being you", "Honestly, mujhe tumhari har ek cheez ko words mein explain karna nahi aata. Kabhi bas tum hote ho, and that's enough to make me smile at my phone like an idiot. 😭"],
];
 
function ThingsILove() {
  return (
    <section className="chapter reasons-chapter">
      <ChapterHeading
        eyebrow="CHAPTER 04 · AN INCOMPLETE LIST"
        title="Reasons why you're my favourite human (unfortunately, you have many)."
        intro="Ab tumhare baare mein achhi baatein likhni hain, toh please zyada attitude mat dikhana. Haan, you deserve appreciation, but itna bhi mat udd jaana. 🙄"
      />
      <div className="reasons-list">
        {loveReasons.map(([number, title, text], index) => (
          <article className={`reason reason-${index + 1}`} key={number}>
            <span>{number}</span>
            <div><h2>{title}</h2><p>{text}</p></div>
          </article>
        ))}
      </div>
      <p className="scribble">please don't let this inflate your ego too much →</p>
    </section>
  );
}
 
function LittleThings() {
  return (
    <section className="chapter little-things">
      <ChapterHeading eyebrow="CHAPTER 05 · MARGIN NOTES" title="Things you do without even realising." />
      <div className="scattered-notes">
        <article className="note note-main">
          <p>Tumhe shayad realise bhi nahi hota ki tumhari kuch chhoti chhoti cheezein mere liye kitni matter karti hain.</p>
          <p>Jaise main koi random si baat bataun aur mujhe bas tumhara reaction chahiye hota hai. Ya main kuch stupid bolun aur phir khud hi uspe hass rahi hoon. Ya kabhi mood off ho aur tumse baat karne ka mann kare, even if I don't know exactly kya bolna hai.</p>
        </article>
        <article className="note note-torn">
          <p>I love that I can come to you without having a whole explanation ready. Har baar mujhe apni feelings ko perfectly words mein convert karna nahi aata, but I still want you to know what's going on in my head.</p>
        </article>
        <article className="note note-pink">
          <p>Aur haan, you're very very cute but irritating because why do you always find ways to rage beat me huh❤️</p>
        </article>
        <span className="annotation a-one">important!!</span>
        <span className="annotation a-two">yes, this is about you</span>
        <span className="paperclip" aria-hidden="true">⌇</span>
      </div>
    </section>
  );
}
 
const keepsakes = [
  "This one makes me smile every time.",
  "A little piece of us.",
  "I wish I could keep this moment a little longer.",
  "Just us. That's enough.",
  "One of my favourite memories.",
  "Proof that ordinary moments can mean everything.",
];
 
function Keepsakes() {
  return (
    <section className="chapter keepsakes">
      <ChapterHeading
        eyebrow="CHAPTER 06 · SAVED FOR LATER"
        title="The little things I want to keep."
        intro="Not every memory needs a picture, right? Kuch cheezein bas yaad reh jaati hain. Aise hi random moments, conversations, feelings, aur woh chhoti chhoti baatein jo shayad kisi aur ke liye normal hongi, but mere liye special hain."
      />
      <div className="keepsake-board">
        {keepsakes.map((text, index) => (
          <article className={`keepsake keepsake-${index + 1}`} key={text}>
            <span>No. 0{index + 1}</span>
            <p>{text}</p>
            <small>ARCHIVED / US</small>
          </article>
        ))}
        <div className="board-note">
          <span className="board-note-short">nothing dramatic.<br />just ours. ♡</span>
          <div className="board-story">
            <p>Maybe our story isn't made of grand gestures or perfect moments. Maybe it's made of all the little things — the random conversations, the silly laughs, the comfort of being ourselves, and choosing each other even on difficult days.</p>
            <p>I hope we never stop finding our way back to these little moments. Because somehow, they became my favourite part of us. ♡</p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
const timeline = [
  ["THE BEGINNING", "Somewhere along the way, you became someone I wanted to talk to, share things with, and make space for in my life."],
  ["GETTING CLOSER", "Conversations, little details, and slowly becoming a part of each other's everyday lives."],
  ["THE NOT-SO-EASY PART", "Fights, misunderstandings, distance, and moments when things weren't as easy as we wanted them to be."],
  ["CHOOSING TO TRY", "I'm so glad we didn't give up on us just because things weren't always easy. I'm glad we gave each other time, kept trying, and found our way back to each other."],
  ["RIGHT NOW", "Still learning each other. Still growing. Still figuring things out. And I'm happy that I get to do that with you."],
];
 
function OurStory() {
  return (
    <section className="chapter story">
      <ChapterHeading
        eyebrow="CHAPTER 07 · OUR STORY, SO FAR"
        title="Look at us. Still here. ❤️"
        intro="Humari story koi perfectly written movie nahi hai. And honestly, I don't want it to be. Humne achhe moments bhi dekhe hain, difficult phases bhi, aur beech mein kaafi kuch figure out kiya hai."
      />
      <div className="timeline">
        {timeline.map(([title, text], index) => (
          <article key={title}>
            <span className="timeline-dot">{index + 1}</span>
            <div><h2>{title}</h2><p>{text}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
 
const definitions = [
  ["BHUKKAD", "noun", "The version of me that appears when I'm comfortable enough around you to eat without pretending to be graceful."],
  ["ABSOLUTE NONSENSE", "noun", "Our conversations, probably. No context required. Somehow still important."],
  ["US", "noun", "Two people figuring things out, sometimes getting it wrong, talking it through, and choosing to keep trying."],
  ["LONG DISTANCE", "noun", "A reminder that being far away doesn't mean someone has to feel far from your life."],
];
 
const insideJokes = [
  ["THE COMFORT OF YOU", "You make even the most ordinary days feel a little softer. I love that I can be completely myself around you — no pretending, no overthinking, just me."],
  ["MY FAVOURITE KIND OF CHAOS", "From our random talks to our silly arguments, there's so much of us that probably wouldn't make sense to anyone else. And honestly, I wouldn't trade it."],
  ["STILL CHOOSING US", "We haven't always had it easy, but I'm grateful we kept trying. I hope we keep growing, learning, laughing, and choosing each other — one day at a time. ♡"],
];
 
function Dictionary() {
  return (
    <section className="chapter dictionary">
      <ChapterHeading eyebrow="CHAPTER 08 · SPECIAL EDITION" title="A very serious dictionary of a very unserious relationship." />
      <div className="dictionary-page">
        <div className="dictionary-header"><span>SAHILISH — ENGLISH</span><span>PAGE 01</span></div>
        {definitions.map(([word, type, definition]) => (
          <article key={word}>
            <h2>{word}</h2><i>{type}</i><p>{definition}</p>
          </article>
        ))}
        {insideJokes.map(([word, definition]) => (
          <article key={word}>
            <h2>{word}</h2><p>{definition}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
 
function ChooseAgain() {
  return (
    <section className="chapter choose-again">
      <div className="full-letter">
        <p className="eyebrow">CHAPTER 09 · READ THIS PROPERLY</p>
        <h1>If I had to choose again…</h1>
        <div className="letter-columns">
          <p>I'm SO glad we didn't give up on us just because things weren't always easy.</p>
          <p>I'm glad we gave each other time, I'm glad we kept trying, and I'm glad that even after all the fights, misunderstandings and distance, we still found our way back to each other.</p>
          <p>I genuinely cannot imagine being this comfortable with anyone else. Like, the way I can eat like a literal bhukkad in front of you, talk absolute nonsense, be clingy, be annoying, be emotional, be stupid and not feel like I have to hide any of it. 😭</p>
          <p>I know we're not perfect. Kabhi main galat hoti hoon, kabhi tum, kabhi dono ek hi baat ko alag tareeke se samajh rahe hote hain. But I don't want us to become two people who stop trying just because things get difficult.</p>
          <p>I want us to keep talking, keep understanding each other, and keep making space for each other. I want the silly conversations and the serious ones. The random updates and the long calls. The easy days and the days where we have to put in a little more effort.</p>
          <p>I don't need a perfect relationship, Sahil. I just want something real with you. Something where we both feel heard, loved, and safe enough to be ourselves.</p>
          <p className="letter-closing">And if I had to choose again, knowing that it won't always be easy, I'd still want the chance to choose us. ❤️</p>
        </div>
        <div className="letter-monogram">S</div>
      </div>
    </section>
  );
}
 
function PromiseBox() {
  const [openPromises, setOpenPromises] = useState<number[]>([]);
  const toggle = (index: number) => {
    setOpenPromises((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };
  return (
    <section className="chapter promises">
      <ChapterHeading eyebrow="CHAPTER 10 · KEEP THESE SAFE" title="Okay, some promises. Don't make me repeat these." />
      <div className="promise-box">
        <div className="box-label">FOR SAHIL<br /><small>five things i mean</small></div>
        <div className="promise-grid">
          {promises.map((promise, index) => {
            const open = openPromises.includes(index);
            return (
              <article className={`mini-envelope ${open ? "open" : ""}`} key={promise.title}>
                <button onClick={() => toggle(index)} aria-expanded={open}>
                  <div className="mini-letter">
                    <span>PROMISE 0{index + 1}</span>
                    <h2>{promise.title}</h2>
                    <p>{promise.text}</p>
                  </div>
                  <div className="mini-front"><span>{open ? "tap to close" : promise.title}</span></div>
                  <div className="mini-flap" />
                  <i>S</i>
                </button>
              </article>
            );
          })}
        </div>
      </div>
      <p className="promise-instruction">tap each little seal to open</p>
    </section>
  );
}
 
function FinalLetter() {
  return (
    <section className="chapter final-letter">
      <div className="final-paper">
        <p className="eyebrow">CHAPTER 11 · THE FINAL LETTER</p>
        <h1>One last letter. <i>(For now.)</i></h1>
        <div className="final-body">
          <p>Happy Boyfriend's Day, my love. ❤️</p>
          <p>I hope you know how much you mean to me—not just on days like this, but in all the ordinary moments in between.</p>
          <p>I'm so glad it's you I get to share my nonsense with. You're the person I can be completely comfortable around, the person I want to tell everything to, and the person I'm grateful we didn't give up on.</p>
          <p>I know we have things to learn and things to work on. I know distance can be difficult, and sometimes even the smallest misunderstandings can turn into bigger things. But I'm proud of us for trying. I'm proud that we gave each other time, talked things through, and kept choosing to find our way back.</p>
          <p>And I hope you never feel like you have to be someone else around me. I want the real you. The happy you, the tired you, the annoying you, the quiet you, the version of you that doesn't have everything figured out. I want to know you in all those little ways.</p>
          <p>I don't need us to have a perfect story. I just want a real one—with laughter, stupid conversations, little traditions, honest conversations, and a whole lot of love.</p>
          <p>Thank you for being my Sahil. Thank you for letting me be completely me. Thank you for being a part of my life in ways that are sometimes difficult to explain.</p>
          <p>I love you, bhukkad-proof and all. 😭❤️</p>
          <p className="signoff">With all my love,<br /><strong>Unnati 🎀</strong></p>
        </div>
        <div className="final-seal">S</div>
        <p className="end-mark">END OF VOLUME ONE · TO BE CONTINUED</p>
      </div>
    </section>
  );
}
 
function App() {
  const [chapter, setChapter] = useState(0);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
 
  const goTo = (next: number) => {
    if (next < 0 || next > 11 || next === chapter) return;
    setTransitioning(true);
    setIndexOpen(false);
    window.setTimeout(() => {
      setChapter(next);
      window.scrollTo({ top: 0, behavior: "instant" });
      setTransitioning(false);
    }, 220);
  };
 
  const chapters = [
    <Opening key="opening" opened={envelopeOpen} onOpen={() => setEnvelopeOpen(true)} onEnter={() => goTo(1)} />,
    <ArchiveWelcome key="welcome" onExplore={() => goTo(2)} />,
    <MusicRoom key="music" />,
    <WhoYouAre key="who" />,
    <ThingsILove key="love" />,
    <LittleThings key="little" />,
    <Keepsakes key="keepsakes" />,
    <OurStory key="story" />,
    <Dictionary key="dictionary" />,
    <ChooseAgain key="choose" />,
    <PromiseBox key="promises" />,
    <FinalLetter key="final" />,
  ];
 
  return (
    <main className={`app-shell ${transitioning ? "transitioning" : ""}`}>
      <div className="grain" aria-hidden="true" />
      {chapter > 0 && (
        <header className="archive-nav">
          <button className="home-mark" onClick={() => goTo(0)} aria-label="Return to opening envelope">
            <span>S</span><small>THE ARCHIVE</small>
          </button>
          <button className="index-trigger" onClick={() => setIndexOpen(true)}>
            <span>ARCHIVE INDEX</span><i>☰</i>
          </button>
        </header>
      )}
      <div className="chapter-stage" key={chapter}>{chapters[chapter]}</div>
      {chapter > 0 && (
        <nav className="chapter-controls" aria-label="Chapter navigation">
          <button onClick={() => goTo(chapter - 1)} disabled={chapter === 0} aria-label="Previous chapter">← <span>PREV</span></button>
          <div><b>{String(chapter + 1).padStart(2, "0")}</b><i>/</i><span>12</span></div>
          <button onClick={() => goTo(chapter + 1)} disabled={chapter === 11} aria-label="Next chapter"><span>NEXT</span> →</button>
        </nav>
      )}
      <aside className={`archive-index ${indexOpen ? "open" : ""}`} aria-hidden={!indexOpen}>
        <div className="index-top">
          <div><span>PRIVATE COLLECTION</span><h2>Archive Index</h2></div>
          <button onClick={() => setIndexOpen(false)} aria-label="Close archive index">×</button>
        </div>
        <ol>
          {chapterNames.map((name, index) => (
            <li key={name} className={chapter === index ? "active" : ""}>
              <button onClick={() => goTo(index)}><span>{String(index + 1).padStart(2, "0")}</span>{name}<i>→</i></button>
            </li>
          ))}
        </ol>
        <p>Made with a lot of feelings<br />and zero chill.</p>
      </aside>
      {indexOpen && <button className="index-backdrop" onClick={() => setIndexOpen(false)} aria-label="Close menu" />}
    </main>
  );
}
 
export default App;
