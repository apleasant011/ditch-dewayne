/* global React, ReactDOM */
const { useState, useEffect } = React;

/* DePaul brand palette (royal + scarlet) — YMCA-style layout language */
const ROYAL = "#00417C";
const ROYAL_DARK = "#002A52";
const SCARLET = "#E81F2E";
const SCARLET_DARK = "#B81825";
const PAPER = "#FFFFFF";
const SAND = "#F4F6F9";
const SAND_DEEP = "#E9EDF2";
const TEXT = "#1F2937";
const MUTED = "#6B7280";
const BORDER = "#E2E6EC";

/* ---------- Primitives ---------- */

const Eyebrow = ({ children, color = SCARLET, style }) => (
  <div className="dn-eyebrow" style={{
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color,
    ...style,
  }}>{children}</div>
);

/* Wedge mark — DePaul D-block stand-in, scarlet on royal */
const Wedge = ({ size = 32 }) => (
  <div style={{
    width: size,
    height: size,
    background: ROYAL,
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 900,
    fontSize: size * 0.55,
    letterSpacing: "-0.04em",
    borderRadius: 4,
    position: "relative",
  }}>
    <span style={{ marginLeft: -1 }}>D</span>
    <span style={{
      position: "absolute",
      right: -3,
      bottom: -3,
      width: size * 0.42,
      height: size * 0.42,
      background: SCARLET,
      borderRadius: 3,
      zIndex: -1,
    }}/>
  </div>
);

const Headline = ({ children, size = "h2", color = ROYAL, style, className }) => {
  const sizes = {
    h1: "clamp(54px, 7.5vw, 104px)",
    h2: "clamp(38px, 5vw, 68px)",
    h3: "clamp(28px, 3vw, 40px)",
  };
  return (
    <div className={`dn-${size} ${className || ""}`} style={{
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 900,
      fontSize: sizes[size],
      lineHeight: size === "h1" ? 0.96 : 1.04,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color,
      margin: 0,
      ...style,
    }}>{children}</div>
  );
};

const Lead = ({ children, style }) => (
  <p style={{
    fontFamily: "'Inter', sans-serif",
    fontSize: 19,
    lineHeight: 1.6,
    color: TEXT,
    margin: 0,
    ...style,
  }}>{children}</p>
);

const Body = ({ children, style }) => (
  <p style={{
    fontFamily: "'Inter', sans-serif",
    fontSize: 16,
    lineHeight: 1.65,
    color: "#374151",
    margin: 0,
    ...style,
  }}>{children}</p>
);

const Button = ({ children, href, onClick, type, variant = "primary", style }) => {
  const variants = {
    primary: { background: SCARLET, color: "#fff", border: "none" },
    navy: { background: ROYAL, color: "#fff", border: "none" },
    outline: { background: "transparent", color: ROYAL, border: `2px solid ${ROYAL}` },
    ghost: { background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.6)" },
  };
  const Tag = href ? "a" : "button";
  const cls = `dn-btn-${variant === "primary" ? "primary" : variant === "navy" ? "navy" : "outline"}`;
  return (
    <Tag href={href} onClick={onClick} type={type} className={cls} style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 28px",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      textDecoration: "none",
      borderRadius: 4,
      cursor: "pointer",
      transition: "background .15s ease, color .15s ease",
      ...variants[variant],
      ...style,
    }}>
      <span>{children}</span>
      <span style={{ fontWeight: 400, fontSize: 16, lineHeight: 1 }}>→</span>
    </Tag>
  );
};

const SectionLabel = ({ num, label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
    <span style={{
      width: 36,
      height: 36,
      background: SCARLET,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 900,
      fontSize: 14,
      borderRadius: 4,
    }} className="dn-section-label-num">{num.toString().padStart(2, "0")}</span>
    <Eyebrow color={ROYAL}>{label}</Eyebrow>
  </div>
);

/* ---------- Top Nav (sticky) ---------- */

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    ["The Case", "#case"],
    ["Drought", "#drought"],
    ["By the Numbers", "#numbers"],
    ["Petition", "#petition"],
    ["The Wall", "#wall"],
  ];
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "#fff",
      borderBottom: `1px solid ${BORDER}`,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <Wedge size={36}/>
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: 18,
            letterSpacing: "0.02em",
            color: ROYAL,
            textTransform: "uppercase",
          }}>
            Ditch DeWayne
          </div>
        </a>
        <nav className="dn-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.slice(0, 4).map(([l, h]) => (
            <a key={l} href={h} style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: ROYAL,
              textDecoration: "none",
            }}>{l}</a>
          ))}
          <Button href="#petition" style={{ padding: "12px 22px", fontSize: 12 }}>Sign the Petition</Button>
        </nav>
        <button className="dn-burger" onClick={() => setOpen(!open)} aria-label="Menu" style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 8,
          color: ROYAL,
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}/>
          </svg>
        </button>
      </div>
      {open && (
        <div style={{ borderTop: `1px solid ${BORDER}`, padding: "8px 24px 20px", background: "#fff" }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} style={{
              display: "block",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: ROYAL,
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: `1px solid ${BORDER}`,
            }}>{l}</a>
          ))}
          <div style={{ paddingTop: 20 }}>
            <Button href="#petition" onClick={() => setOpen(false)} style={{ width: "100%", justifyContent: "center" }}>
              Sign the Petition
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

/* ---------- Hero (full-bleed, photo-driven) ---------- */

const Hero = ({ signatures }) => (
  <section id="top" className="dn-hero" style={{
    position: "relative",
    background: ROYAL,
    color: "#fff",
    overflow: "hidden",
  }}>
    {/* Diagonal scarlet wedge accent */}
    <div className="dn-hero-wedge" style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "42%",
      height: "100%",
      background: SCARLET,
      clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 0.95,
    }}/>
    <div className="dn-hero-pad dn-hero-grid" style={{
      position: "relative",
      maxWidth: 1280,
      margin: "0 auto",
      padding: "88px 64px 112px",
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: 64,
      alignItems: "center",
    }} >
      <div>
        <Eyebrow color="#fff" style={{ opacity: 0.85, marginBottom: 24 }}>An Open Letter from Blue Demon Nation</Eyebrow>
        <Headline size="h1" color="#fff" className="dn-h1">
          It's time to part ways with DeWayne.
        </Headline>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 20,
          lineHeight: 1.55,
          color: "rgba(255,255,255,0.9)",
          maxWidth: 620,
          marginTop: 32,
        }}>
          Six seasons. Zero NCAA Tournament appearances. One contract extension too many. We love this university — which is exactly why we're asking the Board of Trustees to reconsider.
        </p>
        <div className="dn-hero-buttons" style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
          <Button href="#petition">Sign the Petition</Button>
          <Button href="#case" variant="ghost">See the Case</Button>
        </div>

        {/* Hero stat strip */}
        <div className="dn-hero-stat" style={{
          marginTop: 56,
          padding: "22px 28px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 6,
          display: "flex",
          alignItems: "baseline",
          gap: 18,
          flexWrap: "wrap",
        }}>
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: 36,
            color: "#fff",
            fontVariantNumeric: "tabular-nums",
          }}>{signatures.toLocaleString()}</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <Eyebrow color="#fff" style={{ opacity: 0.9 }}>Blue Demons have signed</Eyebrow>
            <div style={{ fontFamily: "'Inter', sans-serif", fontStyle: "italic", color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 6 }}>
              Updated continuously · Goal: 10,000
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="dn-hero-img" style={{
          aspectRatio: "3/4",
          background: "rgba(0,0,0,0.2)",
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.45)",
        }}>
          <img
            src="dewayne.webp"
            alt="DeWayne Peevy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 25%",
              display: "block",
            }}
          />
          <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "20px 22px",
            background: "linear-gradient(to top, rgba(0,33,67,0.95), rgba(0,33,67,0))",
            color: "#fff",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "space-between",
          }}>
            <span>Athletics Director</span>
            <span>2020 — 2031*</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Section 1 — Said vs. Seen ---------- */

const SaidVsSeen = () => {
  const rows = [
    { said: "“The NCAA Tournament should be the floor, not the ceiling.”", seen: "Zero NCAA Tournament appearances in six seasons." },
    { said: "Build a championship culture.", seen: "First Big East team in history to finish 0–20 in conference (2023–24)." },
    { said: "Elevate the Blue Demons brand.", seen: "Worst men's basketball season since 1996–97: a 3–29 overall record." },
    { said: "Modernize the department.", seen: "Still ranked last in basketball funding in the Big East — by his own admission." },
    { said: "The “Dream Big” Strategic Plan.", seen: "Empty seats, fired coaches, a 22-year tournament drought." },
  ];
  return (
    <section className="dn-section" style={{ background: PAPER }}>
      <div className="dn-wrap">
        <SectionLabel num={1} label="Said vs. Seen" />
        <Headline color={ROYAL} style={{ maxWidth: 920, marginBottom: 24 }}>
          What was promised. <span style={{ color: SCARLET }}>What arrived.</span>
        </Headline>
        <Lead style={{ maxWidth: 720, marginBottom: 56, color: MUTED }}>
          The Strategic Plan, on paper, in the AD's own words — set against six seasons of receipts.
        </Lead>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: `1px solid ${BORDER}`, borderRadius: 6, overflow: "hidden" }}>
          <div className="dn-said-head" style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr 1fr",
            background: ROYAL,
            color: "#fff",
            padding: "18px 24px",
          }}>
            <Eyebrow color="#fff">#</Eyebrow>
            <Eyebrow color="#fff">The Promise (2020)</Eyebrow>
            <Eyebrow color="#fff">The Reality (2020–26)</Eyebrow>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="dn-said-row" style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr",
              padding: "28px 24px",
              gap: 0,
              alignItems: "start",
              background: i % 2 === 0 ? PAPER : SAND,
              borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
            }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: 22,
                color: SCARLET,
                fontVariantNumeric: "tabular-nums",
              }}>0{i + 1}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontStyle: "italic", color: MUTED, lineHeight: 1.5, paddingRight: 24 }}>
                {r.said}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 600, color: TEXT, lineHeight: 1.5 }}>
                {r.seen}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Section 2 — 22 Years drought ---------- */

const Drought = () => (
  <section id="case" className="dn-section" style={{ background: SAND }}>
    <div className="dn-wrap">
      <SectionLabel num={2} label="The Drought" />
      <div className="dn-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <div className="dn-22" style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(160px, 24vw, 340px)",
            lineHeight: 0.85,
            color: SCARLET,
            letterSpacing: "-0.06em",
            marginTop: -12,
          }}>22</div>
          <Eyebrow color={ROYAL} style={{ marginTop: 16 }}>Years since the last NCAA Tournament appearance</Eyebrow>
        </div>

        <div style={{ paddingTop: 24 }}>
          <Headline size="h3" color={ROYAL} style={{ marginBottom: 20 }}>
            The longest drought in power-conference men's basketball.
          </Headline>
          <Body style={{ marginBottom: 16 }}>
            The last tournament win came in 2004. To put that in perspective: the iPhone didn't exist. Mark Aguirre and Rod Strickland had already retired from the NBA. Most of this year's roster were in diapers — or hadn't been born yet.
          </Body>
          <Body>
            Since joining the Big East in 2005–06, the Blue Demons have a conference record of roughly 22–265 — winning barely 20% of league games and finishing dead last eleven times. DeWayne Peevy was hired in August 2020 to fix it. Six seasons later, the drought is longer, not shorter.
          </Body>

          <div style={{
            margin: "40px 0 0",
            padding: "28px 32px",
            borderLeft: `4px solid ${SCARLET}`,
            background: "#fff",
            borderRadius: "0 6px 6px 0",
            boxShadow: "0 8px 24px -16px rgba(0,0,0,0.12)",
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 20,
              fontStyle: "italic",
              lineHeight: 1.5,
              margin: 0,
              color: TEXT,
            }}>
              "If we don't hurry up and take advantage of the brand, there will be no generation who has seen that success."
            </p>
            <Eyebrow color={ROYAL} style={{ marginTop: 16 }}>— DeWayne Peevy, August 2020</Eyebrow>
          </div>
          <Body style={{ marginTop: 20, fontStyle: "italic", color: MUTED }}>
            He was right. He just didn't realize he'd be the one presiding over the drought he warned about.
          </Body>
        </div>
      </div>

      <div id="drought" style={{ marginTop: 96, background: "#fff", padding: 32, borderRadius: 8, boxShadow: "0 8px 32px -20px rgba(0,0,0,0.12)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24, gap: 16, flexWrap: "wrap" }}>
          <Eyebrow color={ROYAL}>NCAA Tournament appearances since 2004</Eyebrow>
          <Eyebrow color={SCARLET}>
            <span style={{ display: "inline-block", width: 10, height: 10, background: SCARLET, marginRight: 8, verticalAlign: "middle", borderRadius: 2 }}/>
            Peevy era · 2020–present
          </Eyebrow>
        </div>
        <div className="dn-bars" style={{ display: "grid", gridTemplateColumns: "repeat(22, 1fr)", gap: 4, alignItems: "end" }}>
          {Array.from({ length: 22 }, (_, i) => 2004 + i).map((y, i) => {
            const peevy = y >= 2020;
            return (
              <div key={y} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div className="dn-bar-cell" style={{
                  height: 44,
                  width: "100%",
                  background: peevy ? SCARLET : SAND_DEEP,
                  borderRadius: 3,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: 12,
                  color: peevy ? "#fff" : "#9CA3AF",
                }}>0</div>
                <div className="dn-bar-label" style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  fontWeight: 600,
                  color: peevy ? SCARLET : "#9CA3AF",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {peevy || i % 3 === 0 ? `'${(y % 100).toString().padStart(2, "0")}` : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Section 3 — Headlines ---------- */

const Headlines = () => {
  const tiles = [
    { outlet: "CBS Sports", date: "Jan 2024", text: "DePaul on the verge of historic NCAA Tournament drought." },
    { outlet: "Yahoo Sports", date: "Dec 2023", text: "Move over, Jets — DePaul's drought is even longer." },
    { outlet: "The DePaulia", date: "Mar 2024", text: "DePaul makes unwanted history: first Big East team to lose 20 conference games." },
    { outlet: "Front Porch Sports", date: "Feb 2024", text: "Can DePaul basketball be saved?" },
    { outlet: "Fourteen East", date: "Jun 2024", text: "Wintrust woes: DePaul bets on a new facility after historic losses and low attendance." },
    { outlet: "Pro Sports Fans", date: "Nov 2023", text: "What happened to DePaul men's basketball?" },
    { outlet: "The DePaulia", date: "Nov 2023", text: "Cheers echo off empty seats at Wintrust Arena." },
    { outlet: "Anonymous Eagle", date: "Jul 2025", text: "Step #1 was 'don't be a national joke again.' They didn't quite get there." },
  ];
  return (
    <section className="dn-section" style={{ background: PAPER }}>
      <div className="dn-wrap">
        <SectionLabel num={3} label="In the Press" />
        <Headline color={ROYAL} style={{ maxWidth: 920, marginBottom: 24 }}>
          The national press <span style={{ color: SCARLET }}>has noticed.</span>
        </Headline>
        <Lead style={{ maxWidth: 720, marginBottom: 56, color: MUTED }}>
          A small sampling of how the sports world has come to describe Blue Demons athletics over the last six seasons.
        </Lead>

        <div className="dn-grid-cards" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {tiles.map((t, i) => (
            <article key={i} className="dn-card dn-headline-card" style={{
              background: "#fff",
              padding: "26px 28px 28px",
              borderTop: `4px solid ${SCARLET}`,
              borderRadius: 6,
              boxShadow: "0 2px 12px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(226,230,236,0.6)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                <Eyebrow color={ROYAL} style={{ fontSize: 11 }}>{t.outlet}</Eyebrow>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: MUTED,
                  letterSpacing: "0.06em",
                }}>{t.date}</span>
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                lineHeight: 1.4,
                color: TEXT,
                fontWeight: 600,
                margin: 0,
              }}>
                "{t.text}"
              </p>
            </article>
          ))}
        </div>

        <div style={{
          marginTop: 64,
          padding: "32px 40px",
          background: SAND,
          borderRadius: 8,
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "italic",
            fontSize: 22,
            lineHeight: 1.5,
            color: ROYAL,
            margin: 0,
            maxWidth: 720,
            marginInline: "auto",
            fontWeight: 500,
          }}>
            The Blue Demons aren't just struggling. They've become the example everyone else points to. <strong style={{ color: SCARLET }}>Six years. Same AD.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- Section 4 — Empty Arena ---------- */

const Stat = ({ big, label, accent }) => (
  <div style={{
    background: accent ? SCARLET : "#fff",
    color: accent ? "#fff" : ROYAL,
    padding: "24px 24px 22px",
    borderRadius: 6,
    border: accent ? "none" : `1px solid ${BORDER}`,
  }}>
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 900,
      fontSize: 32,
      fontVariantNumeric: "tabular-nums",
      letterSpacing: "-0.02em",
    }}>{big}</div>
    <Eyebrow color={accent ? "rgba(255,255,255,0.9)" : MUTED} style={{ marginTop: 10 }}>{label}</Eyebrow>
  </div>
);

const EmptyArena = () => {
  const total = 240;
  const filled = Math.round(total * 0.39);
  return (
    <section className="dn-section" style={{ background: SAND }}>
      <div className="dn-wrap">
        <SectionLabel num={4} label="Attendance" />
        <div className="dn-grid-2 dn-arena-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <Headline color={ROYAL}>
              A $175M arena. <span style={{ color: SCARLET }}>And no one came.</span>
            </Headline>
            <Body style={{ marginTop: 28 }}>
              Wintrust Arena seats 10,387, built in part with taxpayer money to be a downtown showcase. Under Peevy, men's basketball has averaged roughly 4,045 fans per game — under 40% of capacity. Several games have drawn fewer than 1,000 turnstile entries.
            </Body>
            <Body style={{ marginTop: 14 }}>
              In six seasons at Wintrust, exactly one men's game has sold out — and even that one only reached 75% capacity.
            </Body>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 36 }}>
              <Stat big="10,387" label="Seats at Wintrust" />
              <Stat big="≈4,045" label="Average turnout" accent />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Eyebrow color={ROYAL} style={{ marginBottom: 16 }}>One night at Wintrust, to scale</Eyebrow>
            <div className="dn-dot-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(20, 1fr)",
              gap: 4,
              padding: 20,
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0 8px 32px -20px rgba(0,0,0,0.12)",
            }}>
              {Array.from({ length: total }).map((_, i) => (
                <div key={i} style={{
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  background: i < filled ? SCARLET : SAND_DEEP,
                }}/>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, gap: 16, flexWrap: "wrap" }}>
              <Eyebrow color={MUTED}>
                <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: SCARLET, marginRight: 8, verticalAlign: "middle" }}/>
                Filled · 39%
              </Eyebrow>
              <Eyebrow color={MUTED}>
                <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: SAND_DEEP, marginRight: 8, verticalAlign: "middle" }}/>
                Empty · 61%
              </Eyebrow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Section 5 — Trend table ---------- */

const TrendTable = () => {
  const rows = [
    { season: "2020–21", overall: "5–14", be: "3–13", finish: "T-9th", ncaa: "—" },
    { season: "2021–22", overall: "15–16", be: "6–14", finish: "9th", ncaa: "—" },
    { season: "2022–23", overall: "10–23", be: "3–17", finish: "10th", ncaa: "—" },
    { season: "2023–24", overall: "3–29", be: "0–20", finish: "11th (last)", ncaa: "—", flag: true },
    { season: "2024–25", overall: "14–20", be: "4–16", finish: "10th", ncaa: "—" },
    { season: "2025–26", overall: "16–16", be: "8–12", finish: "6th", ncaa: "—" },
  ];
  return (
    <section id="numbers" className="dn-section" style={{ background: PAPER }}>
      <div className="dn-wrap">
        <SectionLabel num={5} label="Year by Year" />
        <Headline color={ROYAL} style={{ maxWidth: 920, marginBottom: 24 }}>
          Six years in. <span style={{ color: SCARLET }}>The curve hasn't moved.</span>
        </Headline>
        <Lead style={{ maxWidth: 720, marginBottom: 48, color: MUTED }}>
          Peevy's tenure, season by season. You decide whether this looks like progress.
        </Lead>

        <div style={{
          background: "#fff",
          border: `1px solid ${BORDER}`,
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 8px 32px -20px rgba(0,0,0,0.08)",
        }}>
          <div className="dn-trend-head" style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1.4fr 1fr",
            padding: "18px 24px",
            background: ROYAL,
            color: "#fff",
          }}>
            {[["Season",""],["Overall","right"],["Big East","right"],["Finish","right dn-trend-finish-h"],["NCAA Tournament","right dn-trend-ncaa-h"]].map(([h, cls], i) => (
              <Eyebrow key={i} color="#fff" style={{ textAlign: i > 0 ? "right" : "left" }}>{h}</Eyebrow>
            ))}
          </div>
          {rows.map((r, i) => (
            <div key={i} className="dn-trend-row" style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr 1.4fr 1fr",
              padding: "22px 24px",
              borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
              alignItems: "center",
              background: r.flag ? "rgba(232, 31, 46, 0.06)" : (i % 2 === 1 ? SAND : "#fff"),
            }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 700, color: ROYAL, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                {r.season}
                {r.flag && <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "#fff",
                  background: SCARLET,
                  padding: "3px 8px",
                  borderRadius: 3,
                  textTransform: "uppercase",
                }}>Record Low</span>}
              </div>
              {[r.overall, r.be, r.finish, r.ncaa].map((v, j) => (
                <div key={j} className={j === 2 ? "dn-trend-finish" : j === 3 ? "dn-trend-ncaa" : ""} style={{
                  textAlign: "right",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 16,
                  fontWeight: r.flag && j < 2 ? 800 : 600,
                  fontVariantNumeric: "tabular-nums",
                  color: j === 3 ? MUTED : (r.flag && j < 2 ? SCARLET : TEXT),
                }}>{v}</div>
              ))}
            </div>
          ))}
        </div>

        <Body style={{ marginTop: 40, maxWidth: 820, fontSize: 18 }}>
          Six seasons. One winning record. Zero NCAA Tournament bids. One historically catastrophic 0–20 conference season that broke a 40-year league record for futility. <em>These are the seasons that came before the contract extension through 2031.</em>
        </Body>

        <div className="dn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }}>
          <BeyondCard title="Women's Basketball" sub="2024–25" body="13–19 overall, 8–10 in conference. Hall of Fame coach Doug Bruno stepped down after 39 seasons." />
          <BeyondCard title="Softball" sub="2024–25" body="14–28 overall, 1–17 in conference. Eliminated from postseason contention by mid-April." />
          <BeyondCard title="Department-wide" body="A program that once owned Chicago is fighting Loyola and Northwestern for relevance — and losing." />
        </div>
      </div>
    </section>
  );
};

const BeyondCard = ({ title, sub, body }) => (
  <div className="dn-card" style={{
    background: "#fff",
    padding: "28px 28px 32px",
    border: `1px solid ${BORDER}`,
    borderTop: `4px solid ${ROYAL}`,
    borderRadius: 6,
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14, gap: 12 }}>
      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, fontWeight: 800, color: ROYAL, textTransform: "uppercase", letterSpacing: "0.02em" }}>{title}</div>
      {sub && <Eyebrow color={SCARLET}>{sub}</Eyebrow>}
    </div>
    <Body>{body}</Body>
  </div>
);

/* ---------- Section 6 — The Reward ---------- */

const Rewarded = () => {
  const [salary, setSalary] = useState(800000);
  const beWins = 24;
  const total = salary * 6;
  const perWin = Math.round(total / beWins);
  return (
    <section className="dn-section" style={{ background: SAND }}>
      <div className="dn-wrap">
        <SectionLabel num={6} label="The Extension" />
        <div className="dn-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <Headline color={ROYAL}>
              And the reward <span style={{ color: SCARLET }}>for all of this?</span>
            </Headline>
            <Body style={{ marginTop: 28 }}>
              On March 23, 2026 — weeks after another mediocre season ended without an NCAA bid — the Board of Trustees gave DeWayne Peevy a contract extension through <strong style={{ color: ROYAL }}>2031</strong>. His second extension in three years. He was also promoted to <em>Senior Vice President</em>.
            </Body>
            <Body style={{ marginTop: 16 }}>
              We can't think of another industry where a leader oversees record-breaking failure and is rewarded with longer contracts and bigger titles. We don't think the Board is hearing from the people who care most. This site is one way to fix that.
            </Body>
          </div>

          <div className="dn-rewarded-card" style={{
            padding: "36px 36px 40px",
            background: ROYAL,
            color: "#fff",
            borderRadius: 8,
            boxShadow: "0 24px 48px -28px rgba(0,33,67,0.45)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: SCARLET, clipPath: "polygon(40% 0, 100% 0, 100% 60%)" }}/>
            <Eyebrow color="#fff" style={{ marginBottom: 14, opacity: 0.9 }}>Press release · March 23, 2026</Eyebrow>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, lineHeight: 1.35, color: "#fff", fontWeight: 600 }}>
              "DePaul University extends Athletics Director DeWayne Peevy through 2031, names him Senior Vice President."
            </div>
            <div style={{
              marginTop: 28,
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              paddingTop: 22,
              borderTop: "1px solid rgba(255,255,255,0.2)",
            }}>
              <Eyebrow color="rgba(255,255,255,0.85)">2nd extension in 3 years</Eyebrow>
              <Eyebrow color="rgba(255,255,255,0.85)">0 tournaments earned</Eyebrow>
            </div>
          </div>
        </div>

        <div className="dn-cost-wrap" style={{
          marginTop: 80,
          padding: "44px 48px 52px",
          background: "#fff",
          borderRadius: 8,
          border: `1px solid ${BORDER}`,
          boxShadow: "0 8px 32px -20px rgba(0,0,0,0.08)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <Eyebrow color={ROYAL}>Cost-per-Win Calculator</Eyebrow>
            <Eyebrow color={MUTED}>Estimate · slide to adjust salary</Eyebrow>
          </div>
          <div className="dn-cost-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr", gap: 28, alignItems: "end" }}>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: TEXT, marginBottom: 14, fontWeight: 600 }}>
                Estimated annual salary
              </div>
              <input type="range" min="500000" max="1500000" step="25000" value={salary} onChange={e => setSalary(+e.target.value)}
                style={{ width: "100%", accentColor: SCARLET }}/>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: ROYAL, marginTop: 8 }}>
                ${salary.toLocaleString()}/year
              </div>
            </div>
            <Stat big={`$${(total / 1e6).toFixed(1)}M`} label="Paid since 2020" />
            <Stat big={beWins.toString()} label="Big East wins, 6 yrs" />
            <Stat big={`$${perWin.toLocaleString()}`} label="Cost per conference win" accent />
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "italic",
            fontSize: 13,
            color: MUTED,
            marginTop: 24,
            margin: "24px 0 0",
          }}>
            Salary figure is an estimate; the university has not publicly disclosed compensation. Big East wins reflect 2020–26 men's basketball.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- Section 7 — Precedent ---------- */

const Precedent = () => (
  <section className="dn-section" style={{ background: PAPER }}>
    <div className="dn-wrap">
      <SectionLabel num={7} label="The Precedent" />
      <div className="dn-grid-asym" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56, alignItems: "center" }}>
        <div className="dn-precedent-card" style={{
          background: SAND,
          aspectRatio: "0.72/1",
          padding: 28,
          position: "relative",
          borderRadius: 6,
          boxShadow: "0 24px 48px -24px rgba(0,33,67,0.2)",
          border: `1px solid ${BORDER}`,
        }}>
          <div style={{ position: "absolute", top: 22, left: 28, right: 28, display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 12, color: ROYAL, letterSpacing: "0.04em", textTransform: "uppercase" }}>Chicago Sun-Times</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: MUTED, fontWeight: 600 }}>March 2018 · Page 14</div>
          </div>
          <div className="dn-precedent-inner" style={{ position: "absolute", top: 56, left: 28, right: 28, bottom: 28, border: `1px solid ${BORDER}`, padding: 22, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 4 }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 26, lineHeight: 1.05, marginBottom: 16, color: ROYAL, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              An open letter to DePaul University.
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: 1.55, color: TEXT, flex: 1 }}>
              <p style={{ margin: 0 }}>We, concerned alumni and students, call for a change in the leadership of DePaul Athletics. The current Athletics Director has been the common thread in our continued struggles…</p>
              <p style={{ marginTop: 10 }}>The Blue Demons deserve more than excuses. We deserve a path back to relevance — and accountability when that path is not delivered.</p>
              <p style={{ marginTop: 10, fontStyle: "italic" }}>— Concerned Students &amp; Alumni of DePaul University</p>
            </div>
          </div>
        </div>

        <div>
          <Headline color={ROYAL}>
            This worked once. <span style={{ color: SCARLET }}>It can work again.</span>
          </Headline>
          <Body style={{ marginTop: 28, fontSize: 18 }}>
            In March 2018, a group of concerned students and alumni purchased a full-page ad in the <em>Chicago Sun-Times</em> calling for a change in athletic department leadership. They called the AD "the common thread."
          </Body>
          <Body style={{ marginTop: 16, fontSize: 18 }}>
            Two years later, there was a change.
          </Body>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 22,
            fontStyle: "italic",
            fontWeight: 500,
            color: ROYAL,
            marginTop: 32,
            lineHeight: 1.4,
            margin: "32px 0 0",
          }}>
            Blue Demon Nation has done this before. We can do it again — politely, publicly, and on the record.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Section 8 — Petition ---------- */

const Petition = ({ onSign, signed, signedName }) => {
  const [form, setForm] = useState({ first: "", last: "", email: "", aff: "Alumnus", year: "", zip: "", why: "" });
  const update = (k, v) => setForm(s => ({ ...s, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    if (!form.first || !form.last || !form.email) return;
    onSign(form);
  };

  return (
    <section id="petition" className="dn-section" style={{ background: SAND }}>
      <div className="dn-wrap" style={{ maxWidth: 1100 }}>
        <SectionLabel num={8} label="The Petition" />
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <div className="dn-petition-card" style={{
            background: "#fff",
            padding: "56px 64px 64px",
            borderTop: `6px solid ${SCARLET}`,
            borderRadius: 8,
            position: "relative",
            alignSelf: "center",
            width: "100%",
            maxWidth: 760,
            boxShadow: "0 24px 64px -32px rgba(0,33,67,0.25)",
            border: `1px solid ${BORDER}`,
          }}>
            <div className="dn-petition-seal" style={{
              position: "absolute",
              right: 24,
              top: 24,
              width: 84,
              height: 84,
              borderRadius: "50%",
              background: SCARLET,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              transform: "rotate(-8deg)",
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: "0 8px 24px -8px rgba(232,31,46,0.45)",
              textAlign: "center",
              lineHeight: 1.15,
            }}>
              <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: 0 }}>Enough</div>
              <div style={{ fontWeight: 700, fontSize: 7, letterSpacing: "0.14em", marginTop: 3, textTransform: "uppercase" }}>Blue Demons<br/>2026</div>
            </div>

            <Eyebrow color={ROYAL} style={{ marginBottom: 22 }}>An Open Letter</Eyebrow>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: MUTED, marginBottom: 22 }}>
              <strong style={{ color: ROYAL, fontWeight: 700 }}>To:</strong> President Robert L. Manuel<br/>
              and the DePaul University Board of Trustees
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.65, color: TEXT }}>
              <p style={{ margin: 0 }}>
                We — the undersigned alumni, students, donors, season-ticket holders, and fans — formally call for a change in leadership at DePaul Athletics, and ask that the university part ways with DeWayne Peevy as Senior Vice President and Director of Athletics.
              </p>
              <p style={{ marginTop: 14 }}>Under his leadership since 2020, DePaul has:</p>
              <ul style={{ margin: "10px 0 0 0", paddingLeft: 22 }}>
                <li>Failed to make a single NCAA Tournament appearance in any major sport.</li>
                <li>Set a Big East record for futility with an 0–20 conference season.</li>
                <li>Continued the longest tournament drought in power-conference men's basketball.</li>
                <li>Failed to address chronic attendance problems at Wintrust Arena.</li>
                <li>Finished consistently in the bottom third of the Big East across multiple sports.</li>
              </ul>
              <p style={{ marginTop: 14 }}>
                Our beloved university — once a national basketball powerhouse — has become a cautionary tale. The 2026 contract extension through 2031 was not earned. The DePaul family deserves better.
              </p>
              <p style={{ marginTop: 14, fontStyle: "italic", color: ROYAL, fontWeight: 500 }}>
                We are asking, with respect, that you do the right thing.
              </p>
            </div>
          </div>

          {!signed ? (
            <form onSubmit={submit} className="dn-form" style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              background: "#fff",
              padding: "40px 44px 44px",
              borderRadius: 8,
              border: `1px solid ${BORDER}`,
              boxShadow: "0 8px 32px -20px rgba(0,33,67,0.12)",
            }}>
              <Headline size="h3" color={ROYAL} style={{ marginBottom: 4 }}>Add your name.</Headline>
              <p style={{ fontFamily: "'Inter', sans-serif", color: MUTED, margin: "0 0 12px", fontSize: 16 }}>
                Signatures will be presented to the Office of the President, the Board of Trustees, and shared with Chicago media.
              </p>
              <div className="dn-form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="First name" v={form.first} onChange={v => update("first", v)} required />
                <Field label="Last name" v={form.last} onChange={v => update("last", v)} required />
              </div>
              <Field label="Email" v={form.email} onChange={v => update("email", v)} type="email" required />
              <div className="dn-form-row-3" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 14 }}>
                <Select label="Affiliation" v={form.aff} onChange={v => update("aff", v)}
                  options={["Alumnus", "Current student", "Donor", "Season-ticket holder", "Fan", "Faculty/Staff", "Other"]}/>
                <Field label="Class year" v={form.year} onChange={v => update("year", v)} placeholder="—" />
                <Field label="ZIP" v={form.zip} onChange={v => update("zip", v)} placeholder="—" />
              </div>
              <Field label="Why are you signing? (optional)" v={form.why} onChange={v => update("why", v)} textarea />
              <div style={{ marginTop: 8 }}>
                <Button type="submit">Add My Name</Button>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: MUTED, margin: 0 }}>
                We'll never share your email. One signature per person.
              </p>
            </form>
          ) : (
            <div style={{
              background: "#fff",
              padding: "40px 44px 44px",
              borderRadius: 8,
              border: `1px solid ${BORDER}`,
              borderTop: `6px solid ${SCARLET}`,
            }}>
              <Eyebrow color={SCARLET} style={{ marginBottom: 16 }}>✓ Signature received</Eyebrow>
              <Headline size="h3" color={ROYAL}>
                Thank you, <span style={{ color: SCARLET }}>{signedName}.</span>
              </Headline>
              <Body style={{ marginTop: 20, fontSize: 18 }}>
                Your name has been added to the open letter. Help amplify it — share with one other Blue Demon who'd want to sign.
              </Body>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                {["Share to X", "Share to Facebook", "Copy link", "Email"].map(s => (
                  <Button key={s} variant="outline" style={{ padding: "12px 18px", fontSize: 11 }}>{s}</Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, v, onChange, type = "text", textarea, required, placeholder }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <Eyebrow color={ROYAL} style={{ fontSize: 11 }}>{label}{required && <span style={{ color: SCARLET }}> *</span>}</Eyebrow>
    {textarea ? (
      <textarea value={v} onChange={e => onChange(e.target.value)} rows={3} style={inputStyle}/>
    ) : (
      <input type={type} required={required} placeholder={placeholder} value={v} onChange={e => onChange(e.target.value)} style={inputStyle}/>
    )}
  </label>
);

const Select = ({ label, v, onChange, options }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <Eyebrow color={ROYAL} style={{ fontSize: 11 }}>{label}</Eyebrow>
    <select value={v} onChange={e => onChange(e.target.value)} style={inputStyle}>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </label>
);

const inputStyle = {
  background: "#fff",
  border: `1.5px solid ${BORDER}`,
  padding: "14px 16px",
  fontFamily: "'Inter', sans-serif",
  fontSize: 16,
  color: TEXT,
  borderRadius: 4,
  outline: "none",
  transition: "border-color .15s ease",
};

/* ---------- Section 9 — Wall ---------- */

const Wall = ({ extras }) => {
  const seed = [
    { name: "Mike T.", year: "'08", text: "My dad bleeds Blue. He shouldn't have to wait another decade to see one more tournament game." },
    { name: "Sara P.", year: "'27", text: "I'm a current student. I've never been to a sold-out home game. Not one." },
    { name: "Dr. James R.", year: "'94", text: "Twenty-two years is enough. Five more under the same leadership is unforgivable." },
    { name: "Anita V.", year: "'12", text: "I want to bring my kids to Wintrust someday and feel proud of what's on the floor." },
    { name: "Carl B.", year: "'81", text: "I remember the Aguirre years. We owned this town. We can again — but only with a real plan." },
    { name: "Ramona K.", year: "'05", text: "Donor for fifteen years. I'm pausing my giving until the trustees listen." },
    { name: "Tomás G.", year: "'19", text: "Six seasons is a tenure. This one didn't earn another five." },
    { name: "Lila O.", year: "'29", text: "The student section is dead. We deserve atmosphere again." },
  ];
  const all = [...extras, ...seed];
  return (
    <section id="wall" className="dn-section" style={{ background: PAPER }}>
      <div className="dn-wrap">
        <SectionLabel num={9} label="The Wall" />
        <Headline color={ROYAL} style={{ maxWidth: 920, marginBottom: 24 }}>
          In their <span style={{ color: SCARLET }}>own words.</span>
        </Headline>
        <Lead style={{ maxWidth: 720, marginBottom: 48, color: MUTED }}>
          A few of the reasons people are signing. Updated as new signatures arrive.
        </Lead>

        <div className="dn-wall" style={{ columnCount: 3, columnGap: 24 }}>
          {all.map((q, i) => (
            <div key={i} className="dn-card" style={{
              breakInside: "avoid",
              marginBottom: 24,
              padding: "22px 24px 22px",
              background: i % 2 === 1 ? SAND : "#fff",
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${SCARLET}`,
              borderRadius: 6,
            }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                lineHeight: 1.55,
                fontStyle: "italic",
                color: TEXT,
                margin: 0,
              }}>
                "{q.text}"
              </p>
              <Eyebrow color={ROYAL} style={{ marginTop: 14, fontSize: 11 }}>
                — {q.name}{q.year && `, ${q.year}`}
              </Eyebrow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Footer ---------- */

const Footer = ({ signatures }) => (
  <footer className="dn-footer" style={{ padding: "72px 64px 40px", background: ROYAL_DARK, color: "#fff" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <div className="dn-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48, alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <Wedge size={36}/>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 18,
              letterSpacing: "0.02em",
              color: "#fff",
              textTransform: "uppercase",
            }}>Ditch DeWayne</div>
          </div>
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            lineHeight: 1.2,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
          }}>
            Built by Blue Demons.<br/>
            <span style={{ color: SCARLET }}>For Blue Demons.</span>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 24, maxWidth: 460, lineHeight: 1.6 }}>
            DitchDeWayne.com is an independent grassroots effort by alumni, students, and fans of DePaul University Athletics. It is not affiliated with DePaul University, the Big East Conference, or any official organization. All cited statistics are publicly available.
          </p>
        </div>
        <div>
          <Eyebrow color="rgba(255,255,255,0.6)" style={{ marginBottom: 16 }}>Read</Eyebrow>
          {[["The Case", "#case"], ["Drought", "#drought"], ["By the Numbers", "#numbers"], ["The Wall", "#wall"]].map(([s, h]) => (
            <a key={s} href={h} style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 10,
              textDecoration: "none",
            }}>{s}</a>
          ))}
        </div>
        <div>
          <Eyebrow color="rgba(255,255,255,0.6)" style={{ marginBottom: 16 }}>Act</Eyebrow>
          {[["Sign the Petition", "#petition"], ["Share This Page", "#"], ["Email the Board", "#"]].map(([s, h]) => (
            <a key={s} href={h} style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 10,
              textDecoration: "none",
            }}>{s}</a>
          ))}
        </div>
        <div>
          <Eyebrow color="rgba(255,255,255,0.6)" style={{ marginBottom: 16 }}>Share</Eyebrow>
          {["X / Twitter", "Facebook", "Copy link", "Email"].map(s => (
            <div key={s} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 10,
            }}>{s}</div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 64, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
        <Eyebrow color="rgba(255,255,255,0.5)" style={{ fontSize: 11 }}>{signatures.toLocaleString()} signatures · April 2026</Eyebrow>
        <Eyebrow color="rgba(255,255,255,0.5)" style={{ fontSize: 11 }}>An open letter, respectfully presented.</Eyebrow>
      </div>
    </div>
  </footer>
);

/* ---------- App ---------- */

function App() {
  const [signatures, setSignatures] = useState(3247);
  const [signed, setSigned] = useState(false);
  const [signedName, setSignedName] = useState("");
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    const id = setInterval(() => setSignatures(s => s + Math.floor(Math.random() * 2)), 3500);
    return () => clearInterval(id);
  }, []);

  const onSign = (form) => {
    setSignatures(s => s + 1);
    setSigned(true);
    setSignedName(form.first);
    if (form.why && form.why.trim()) {
      setExtras(e => [{
        name: `${form.first} ${form.last.charAt(0)}.`,
        year: form.year ? `'${form.year.slice(-2)}` : "",
        text: form.why.trim(),
      }, ...e]);
    }
    try {
      const stored = JSON.parse(localStorage.getItem("ditchdewayne:signatures") || "[]");
      stored.push({ ...form, signedAt: new Date().toISOString() });
      localStorage.setItem("ditchdewayne:signatures", JSON.stringify(stored));
    } catch (_) {}
    setTimeout(() => {
      window.scrollTo({ top: window.scrollY + 200, behavior: "smooth" });
    }, 100);
  };

  return (
    <div style={{ background: "#fff", color: TEXT, minHeight: "100vh" }}>
      <TopNav />
      <Hero signatures={signatures} />
      <SaidVsSeen />
      <Drought />
      <Headlines />
      <EmptyArena />
      <TrendTable />
      <Rewarded />
      <Precedent />
      <Petition onSign={onSign} signed={signed} signedName={signedName} />
      <Wall extras={extras} />
      <Footer signatures={signatures} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
