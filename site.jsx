/* global React, ReactDOM */
const { useState, useEffect } = React;

const ACCENT = { ink: "oklch(0.42 0.10 250)", tint: "oklch(0.93 0.03 250)" };
const SCARLET = "oklch(0.58 0.15 28)";

/* ---------- Small primitives ---------- */

const SmallCap = ({ children, style }) => (
  <div style={{
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--ink-60)",
    ...style,
  }}>{children}</div>
);

const SectionLabel = ({ num, label }) => (
  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 28 }}>
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      color: "var(--accent-ink)",
      letterSpacing: "0.1em",
    }}>§ {num.toString().padStart(2, "0")}</span>
    <span style={{ flex: 1, height: 1, background: "var(--ink-20)" }} />
    <SmallCap>{label}</SmallCap>
  </div>
);

/* ---------- Hero ---------- */

const Hero = ({ signatures }) => (
  <section style={{ padding: "40px 64px 48px", maxWidth: 1240, margin: "0 auto" }}>
    <div style={{ marginBottom: 24 }}>
      <div style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: 18,
        fontStyle: "italic",
        color: "var(--ink-80)",
      }}>
        <span style={{ color: "var(--scarlet)", fontWeight: 600 }}>Ditch</span> <span style={{ fontStyle: "normal", fontWeight: 600 }}>DeWayne</span>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "center" }}>
      <div>
        <SmallCap style={{ marginBottom: 32 }}>An open letter from Blue Demon Nation</SmallCap>
        <h1 style={{
          fontFamily: "'EB Garamond', serif",
          fontWeight: 300,
          fontSize: "clamp(64px, 9vw, 132px)",
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          margin: 0,
          color: "var(--ink)",
        }}>
          It's time<br/>to part ways<br/>
          <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--accent-ink)" }}>
            with DeWayne.
          </span>
        </h1>
      </div>

      <div>
        <div style={{
          aspectRatio: "3/4",
          background: "var(--accent-tint)",
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
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
            left: 24,
            bottom: 24,
            right: 24,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-60)",
            display: "flex",
            justifyContent: "space-between",
            background: "rgba(244, 239, 227, 0.85)",
            padding: "8px 12px",
          }}>
            <span>Athletics Director</span>
            <span>2020 — 2031*</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 32, alignItems: "center", flexWrap: "wrap" }}>
          <a href="#petition" style={{
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "16px 28px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.16em",
            textDecoration: "none",
            textTransform: "uppercase",
            borderRadius: 2,
          }}>Sign the petition →</a>
          <a href="#case" style={{
            color: "var(--ink-80)",
            padding: "16px 4px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.16em",
            textDecoration: "underline",
            textUnderlineOffset: 6,
            textTransform: "uppercase",
          }}>See the case</a>
        </div>
      </div>
    </div>

    <p style={{
      fontFamily: "'EB Garamond', serif",
      fontSize: 22,
      lineHeight: 1.5,
      maxWidth: 820,
      marginTop: 64,
      color: "var(--ink-80)",
    }}>
      Six seasons. Zero NCAA Tournament appearances. One contract extension too many. We love this university — which is exactly why we're asking the Board of Trustees to reconsider.
    </p>

    <div style={{
      marginTop: 96,
      paddingTop: 32,
      borderTop: "1px solid var(--ink-20)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 32,
      flexWrap: "wrap",
    }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 32,
          fontVariantNumeric: "tabular-nums",
          color: "var(--ink)",
        }}>{signatures.toLocaleString()}</span>
        <SmallCap>Blue Demons have signed</SmallCap>
      </div>
      <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", color: "var(--ink-60)", fontSize: 16 }}>
        Updated continuously · Goal: 10,000
      </div>
    </div>
  </section>
);

/* ---------- Section 1 — Said vs. Seen ---------- */

const SaidVsSeen = () => {
  const rows = [
    { said: "\u201CThe NCAA Tournament should be the floor, not the ceiling.\u201D", seen: "Zero NCAA Tournament appearances in six seasons." },
    { said: "Build a championship culture.", seen: "First Big East team in history to finish 0–20 in conference (2023–24)." },
    { said: "Elevate the Blue Demons brand.", seen: "Worst men's basketball season since 1996–97: a 3–29 overall record." },
    { said: "Modernize the department.", seen: "Still ranked last in basketball funding in the Big East — by his own admission." },
    { said: "The \u201CDream Big\u201D Strategic Plan.", seen: "Empty seats, fired coaches, a 22-year tournament drought." },
  ];
  return (
    <section style={{ padding: "72px 64px", maxWidth: 1240, margin: "0 auto" }}>
      <SectionLabel num={1} label="Said vs. Seen" />
      <h2 style={{
        fontFamily: "'EB Garamond', serif",
        fontWeight: 300,
        fontSize: "clamp(40px, 5.5vw, 76px)",
        letterSpacing: "-0.02em",
        lineHeight: 1.08,
        margin: "0 0 56px",
        maxWidth: 900,
      }}>
        What was promised, <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>and what arrived.</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1fr", gap: 0 }}>
        <div style={{ padding: "16px 24px 16px 0" }}><SmallCap>Year</SmallCap></div>
        <div style={{ padding: "16px 24px" }}><SmallCap>The promise (2020)</SmallCap></div>
        <div style={{ padding: "16px 24px" }}><SmallCap>The reality (2020–26)</SmallCap></div>

        {rows.map((r, i) => (
          <React.Fragment key={i}>
            <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--ink-15)" }} />
            <div style={{ padding: "28px 24px 28px 0", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "var(--ink-60)", fontVariantNumeric: "tabular-nums" }}>
              0{i+1}
            </div>
            <div style={{ padding: "28px 24px", fontFamily: "'EB Garamond', serif", fontSize: 19, fontStyle: "italic", color: "var(--ink-80)", lineHeight: 1.45 }}>
              {r.said}
            </div>
            <div style={{ padding: "28px 24px", fontFamily: "'EB Garamond', serif", fontSize: 19, color: "var(--ink)", lineHeight: 1.45 }}>
              {r.seen}
            </div>
          </React.Fragment>
        ))}
        <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--ink-30)" }} />
      </div>
    </section>
  );
};

/* ---------- Section 2 — 22 Years ---------- */

const Drought = () => (
  <section id="case" style={{ padding: "72px 64px", maxWidth: 1240, margin: "0 auto" }}>
    <SectionLabel num={2} label="The drought" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
      <div>
        <div style={{
          fontFamily: "'EB Garamond', serif",
          fontWeight: 200,
          fontSize: "clamp(180px, 26vw, 380px)",
          lineHeight: 0.85,
          color: "var(--accent-ink)",
          letterSpacing: "-0.05em",
          marginTop: -20,
        }}>
          22
        </div>
        <SmallCap style={{ marginTop: 4 }}>Years since the last NCAA Tournament appearance</SmallCap>
      </div>

      <div style={{ paddingTop: 40 }}>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 24, lineHeight: 1.5, color: "var(--ink)", margin: 0 }}>
          That's the longest drought of any power-conference men's basketball program in the country.
        </p>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.65, color: "var(--ink-80)", marginTop: 28 }}>
          The last tournament win came in 2004. To put that in perspective: the iPhone didn't exist. Mark Aguirre and Rod Strickland had already retired from the NBA. Most of this year's roster were in diapers — or hadn't been born yet.
        </p>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.65, color: "var(--ink-80)", marginTop: 20 }}>
          Since joining the Big East in 2005–06, the Blue Demons have a conference record of roughly 22–265 — winning barely 20% of league games and finishing dead last eleven times. DeWayne Peevy was hired in August 2020 to fix it. Six seasons later, the drought is longer, not shorter.
        </p>

        <figure style={{
          margin: "48px 0 0",
          padding: "32px 36px",
          borderLeft: "2px solid var(--accent-ink)",
          background: "var(--accent-tint)",
        }}>
          <blockquote style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: 22,
            fontStyle: "italic",
            lineHeight: 1.45,
            margin: 0,
            color: "var(--ink)",
          }}>
            "If we don't hurry up and take advantage of the brand, there will be no generation who has seen that success."
          </blockquote>
          <figcaption style={{ marginTop: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-60)" }}>
            — DeWayne Peevy, August 2020
          </figcaption>
        </figure>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 17, fontStyle: "italic", lineHeight: 1.55, color: "var(--ink-60)", marginTop: 24 }}>
          He was right. He just didn't realize he'd be the one presiding over the drought he warned about.
        </p>
      </div>
    </div>

    <div style={{ marginTop: 96 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20, gap: 16, flexWrap: "wrap" }}>
        <SmallCap>NCAA Tournament appearances since 2004</SmallCap>
        <SmallCap style={{ color: "var(--scarlet)" }}>
          <span style={{ display: "inline-block", width: 10, height: 10, background: "var(--scarlet)", marginRight: 8, verticalAlign: "middle" }}/>
          Peevy era · 2020–present
        </SmallCap>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(22, 1fr)", gap: 4, alignItems: "end" }}>
        {Array.from({ length: 22 }, (_, i) => 2004 + i).map((y, i) => {
          const peevy = y >= 2020;
          return (
            <div key={y} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{
                height: 36,
                width: "100%",
                background: peevy ? "oklch(0.92 0.07 28)" : "var(--ink-10)",
                position: "relative",
                borderTop: peevy ? "2px solid var(--scarlet)" : "none",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: peevy ? "var(--scarlet)" : "var(--ink-40)",
                  fontWeight: peevy ? 700 : 400,
                }}>0</div>
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                color: peevy ? "var(--scarlet)" : "var(--ink-40)",
                fontVariantNumeric: "tabular-nums",
                fontWeight: peevy ? 600 : 400,
              }}>
                {peevy || i % 3 === 0 ? `'${(y % 100).toString().padStart(2, '0')}` : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- Section 3 — Headlines ---------- */

const Headlines = () => {
  const tiles = [
    { outlet: "CBS Sports", date: "Jan 2024", text: "DePaul on the verge of historic NCAA Tournament drought.", rotate: -2 },
    { outlet: "Yahoo Sports", date: "Dec 2023", text: "Move over, Jets — DePaul's drought is even longer.", rotate: 1.5 },
    { outlet: "The DePaulia", date: "Mar 2024", text: "DePaul makes unwanted history: first Big East team to lose 20 conference games.", rotate: -1 },
    { outlet: "Front Porch Sports", date: "Feb 2024", text: "Can DePaul basketball be saved?", rotate: 2.2 },
    { outlet: "Fourteen East", date: "Jun 2024", text: "Wintrust woes: DePaul bets on a new facility after historic losses and low attendance.", rotate: -2.5 },
    { outlet: "Pro Sports Fans", date: "Nov 2023", text: "What happened to DePaul men's basketball?", rotate: 1 },
    { outlet: "The DePaulia", date: "Nov 2023", text: "Cheers echo off empty seats at Wintrust Arena.", rotate: -1.5 },
    { outlet: "Anonymous Eagle", date: "Jul 2025", text: "Step #1 was 'don't be a national joke again.' They didn't quite get there.", rotate: 2 },
  ];
  return (
    <section style={{ padding: "72px 64px", background: "var(--paper-warm)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <SectionLabel num={3} label="In the press" />
        <h2 style={{
          fontFamily: "'EB Garamond', serif",
          fontWeight: 300,
          fontSize: "clamp(40px, 5.5vw, 76px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.08,
          margin: "0 0 32px",
          maxWidth: 900,
        }}>
          The national press <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>has noticed.</span>
        </h2>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, color: "var(--ink-80)", maxWidth: 640, margin: "0 0 64px", lineHeight: 1.5 }}>
          A small sampling of how the sports world has come to describe Blue Demons athletics over the last six seasons.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "start" }}>
          {tiles.map((t, i) => (
            <div key={i} style={{
              background: "var(--paper)",
              padding: "24px 26px 22px",
              boxShadow: "0 1px 0 var(--ink-15), 0 8px 24px -12px rgba(0,0,0,0.08)",
              transform: `rotate(${t.rotate}deg)`,
              borderTop: "3px solid var(--ink)",
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent-ink)",
                marginBottom: 14,
                display: "flex",
                justifyContent: "space-between",
              }}>
                <span>{t.outlet}</span>
                <span style={{ color: "var(--ink-40)" }}>{t.date}</span>
              </div>
              <div style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: 20,
                lineHeight: 1.3,
                color: "var(--ink)",
                fontWeight: 500,
              }}>
                "{t.text}"
              </div>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: "'EB Garamond', serif",
          fontStyle: "italic",
          fontSize: 22,
          lineHeight: 1.5,
          color: "var(--ink-80)",
          marginTop: 80,
          textAlign: "center",
          maxWidth: 720,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          The Blue Demons aren't just struggling. They've become the example everyone else points to. Six years. Same AD.
        </p>
      </div>
    </section>
  );
};

/* ---------- Section 4 — Empty Arena ---------- */

const EmptyArena = () => {
  const total = 240;
  const filled = Math.round(total * 0.39);
  return (
    <section style={{ padding: "72px 64px", maxWidth: 1240, margin: "0 auto" }}>
      <SectionLabel num={4} label="Attendance" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <h2 style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 68px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            margin: 0,
          }}>
            A $175 million arena. <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>And no one came.</span>
          </h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.65, color: "var(--ink-80)", marginTop: 32 }}>
            Wintrust Arena seats 10,387, built in part with taxpayer money to be a downtown showcase. Under Peevy, men's basketball has averaged roughly 4,045 fans per game — under 40% of capacity. Several games have drawn fewer than 1,000 turnstile entries.
          </p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.65, color: "var(--ink-80)", marginTop: 16 }}>
            In six seasons at Wintrust, exactly one men's game has sold out — and even that one only reached 75% capacity.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}>
            <Stat big="10,387" label="Seats at Wintrust" />
            <Stat big="≈4,045" label="Average turnout" accent />
          </div>
        </div>

        <div style={{ aspectRatio: "1.1/1", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <SmallCap style={{ marginBottom: 16 }}>One night at Wintrust, to scale</SmallCap>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(20, 1fr)",
            gap: 4,
            padding: 24,
            background: "var(--paper-warm)",
            borderRadius: 4,
          }}>
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} style={{
                aspectRatio: "1/1",
                borderRadius: "50%",
                background: i < filled ? "var(--accent-ink)" : "var(--ink-10)",
              }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-60)" }}>
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "var(--accent-ink)", marginRight: 8, verticalAlign: "middle" }}/>
              Filled · 39%
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-60)" }}>
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "var(--ink-10)", marginRight: 8, verticalAlign: "middle" }}/>
              Empty · 61%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ big, label, accent }) => (
  <div style={{ borderTop: "1px solid var(--ink-30)", paddingTop: 14 }}>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 32,
      fontVariantNumeric: "tabular-nums",
      color: accent ? "var(--accent-ink)" : "var(--ink)",
      letterSpacing: "-0.02em",
    }}>{big}</div>
    <SmallCap style={{ marginTop: 8 }}>{label}</SmallCap>
  </div>
);

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
    <section style={{ padding: "72px 64px", background: "var(--paper-warm)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <SectionLabel num={5} label="Year by year" />
        <h2 style={{
          fontFamily: "'EB Garamond', serif",
          fontWeight: 300,
          fontSize: "clamp(40px, 5vw, 68px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.08,
          margin: "0 0 40px",
          maxWidth: 900,
        }}>
          Six years in. <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>The curve hasn't moved.</span>
        </h2>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, color: "var(--ink-80)", maxWidth: 640, margin: "0 0 64px", lineHeight: 1.5 }}>
          Peevy's tenure, season by season. You decide whether this looks like progress.
        </p>

        <div style={{
          background: "var(--paper)",
          padding: "8px 32px 32px",
          borderTop: "2px solid var(--ink)",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1.4fr 1fr", padding: "20px 0", borderBottom: "1px solid var(--ink-20)" }}>
            {["Season", "Overall", "Big East", "Finish", "NCAA Tournament"].map((h, i) => (
              <SmallCap key={i} style={{ textAlign: i > 0 ? "right" : "left" }}>{h}</SmallCap>
            ))}
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr 1.4fr 1fr",
              padding: "22px 0",
              borderBottom: i < rows.length-1 ? "1px solid var(--ink-10)" : "none",
              alignItems: "center",
              background: r.flag ? "var(--accent-tint)" : "transparent",
              marginInline: r.flag ? -16 : 0,
              paddingInline: r.flag ? 16 : 0,
            }}>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, color: "var(--ink)", display: "flex", alignItems: "center", gap: 10 }}>
                {r.season}
                {r.flag && <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: "var(--accent-ink)", textTransform: "uppercase" }}>Record low</span>}
              </div>
              {[r.overall, r.be, r.finish, r.ncaa].map((v, j) => (
                <div key={j} style={{
                  textAlign: "right",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 16,
                  fontVariantNumeric: "tabular-nums",
                  color: j === 3 ? "var(--ink-40)" : "var(--ink)",
                  fontWeight: r.flag && j < 2 ? 600 : 400,
                }}>{v}</div>
              ))}
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.6, color: "var(--ink-80)", marginTop: 48, maxWidth: 820 }}>
          Six seasons. One winning record. Zero NCAA Tournament bids. One historically catastrophic 0–20 conference season that broke a 40-year league record for futility. <em>These are the seasons that came before the contract extension through 2031.</em>
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }}>
          <BeyondCard title="Women's basketball" sub="2024–25" body="13–19 overall, 8–10 in conference. Hall of Fame coach Doug Bruno stepped down after 39 seasons." />
          <BeyondCard title="Softball" sub="2024–25" body="14–28 overall, 1–17 in conference. Eliminated from postseason contention by mid-April." />
          <BeyondCard title="Department-wide" body="A program that once owned Chicago is fighting Loyola and Northwestern for relevance — and losing." />
        </div>
      </div>
    </section>
  );
};

const BeyondCard = ({ title, sub, body }) => (
  <div style={{ background: "var(--paper)", padding: "28px 28px 32px", borderTop: "1px solid var(--ink)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
      <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 22, fontWeight: 500 }}>{title}</div>
      {sub && <SmallCap>{sub}</SmallCap>}
    </div>
    <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, lineHeight: 1.55, color: "var(--ink-80)" }}>{body}</div>
  </div>
);

/* ---------- Section 6 — Rewarded ---------- */

const Rewarded = () => {
  const [salary, setSalary] = useState(800000);
  const beWins = 24;
  const total = salary * 6;
  const perWin = Math.round(total / beWins);
  return (
    <section style={{ padding: "72px 64px", maxWidth: 1240, margin: "0 auto" }}>
      <SectionLabel num={6} label="The extension" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div>
          <h2 style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 68px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            margin: 0,
          }}>
            And the reward <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>for all of this?</span>
          </h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.65, color: "var(--ink-80)", marginTop: 32 }}>
            On March 23, 2026 — weeks after another mediocre season ended without an NCAA bid — the Board of Trustees gave DeWayne Peevy a contract extension through <strong>2031</strong>. His second extension in three years. He was also promoted to <em>Senior Vice President</em>.
          </p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.65, color: "var(--ink-80)", marginTop: 16 }}>
            We can't think of another industry where a leader oversees record-breaking failure and is rewarded with longer contracts and bigger titles. We don't think the Board is hearing from the people who care most. This site is one way to fix that.
          </p>
        </div>

        <div style={{
          padding: "36px 36px 40px",
          background: "var(--accent-tint)",
          borderTop: "2px solid var(--accent-ink)",
        }}>
          <SmallCap style={{ marginBottom: 12, color: "var(--accent-ink)" }}>Press release · March 23, 2026</SmallCap>
          <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 24, lineHeight: 1.3, color: "var(--ink)", fontWeight: 500 }}>
            "DePaul University extends Athletics Director DeWayne Peevy through 2031, names him Senior Vice President."
          </div>
          <div style={{
            marginTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingTop: 24,
            borderTop: "1px solid var(--accent-ink)",
            opacity: 0.7,
          }}>
            <SmallCap>2nd extension in 3 years</SmallCap>
            <SmallCap>0 tournaments earned</SmallCap>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 96, padding: "48px 48px 56px", background: "var(--paper-warm)", borderTop: "1px solid var(--ink)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <SmallCap>Cost-per-win calculator</SmallCap>
          <SmallCap>Estimate · slide to adjust salary</SmallCap>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr", gap: 32, alignItems: "end" }}>
          <div>
            <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 20, fontStyle: "italic", color: "var(--ink-80)", marginBottom: 16 }}>
              Estimated annual salary
            </div>
            <input type="range" min="500000" max="1500000" step="25000" value={salary} onChange={e => setSalary(+e.target.value)}
              style={{ width: "100%", accentColor: "var(--accent-ink)" }}/>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: "var(--ink-60)", marginTop: 8 }}>
              ${salary.toLocaleString()}/year
            </div>
          </div>
          <Stat big={`$${(total/1e6).toFixed(1)}M`} label="Paid since 2020" />
          <Stat big={beWins.toString()} label="Big East wins, 6 yrs" />
          <Stat big={`$${perWin.toLocaleString()}`} label="Cost per conference win" accent />
        </div>
        <p style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontSize: 14, color: "var(--ink-60)", marginTop: 24 }}>
          Salary figure is an estimate; the university has not publicly disclosed compensation. Big East wins reflect 2020–26 men's basketball.
        </p>
      </div>
    </section>
  );
};

/* ---------- Section 7 — Precedent ---------- */

const Precedent = () => (
  <section style={{ padding: "72px 64px", maxWidth: 1240, margin: "0 auto" }}>
    <SectionLabel num={7} label="The precedent" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 64, alignItems: "center" }}>
      <div style={{
        background: "var(--paper-warm)",
        aspectRatio: "0.72/1",
        padding: 32,
        position: "relative",
        boxShadow: "0 24px 48px -24px rgba(0,0,0,0.18)",
      }}>
        <div style={{ position: "absolute", top: 24, left: 32, right: 32, display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontSize: 12 }}>Chicago Sun-Times</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--ink-60)" }}>March 2018 · Page 14</div>
        </div>
        <div style={{ position: "absolute", top: 64, left: 32, right: 32, bottom: 32, border: "1px solid var(--ink-30)", padding: 24, display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: 28, lineHeight: 1.05, marginBottom: 16 }}>
            An open letter to DePaul University.
          </div>
          <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 12, lineHeight: 1.5, color: "var(--ink-80)", flex: 1 }}>
            <p>We, concerned alumni and students, call for a change in the leadership of DePaul Athletics. The current Athletics Director has been the common thread in our continued struggles…</p>
            <p style={{ marginTop: 10 }}>The Blue Demons deserve more than excuses. We deserve a path back to relevance — and accountability when that path is not delivered.</p>
            <p style={{ marginTop: 10, fontStyle: "italic" }}>— Concerned Students &amp; Alumni of DePaul University</p>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{
          fontFamily: "'EB Garamond', serif",
          fontWeight: 300,
          fontSize: "clamp(40px, 5vw, 68px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.08,
          margin: 0,
        }}>
          This worked once before. <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>It can work again.</span>
        </h2>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.65, color: "var(--ink-80)", marginTop: 32 }}>
          In March 2018, a group of concerned students and alumni purchased a full-page ad in the <em>Chicago Sun-Times</em> calling for a change in athletic department leadership. They called the AD "the common thread."
        </p>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.65, color: "var(--ink-80)", marginTop: 16 }}>
          Two years later, there was a change.
        </p>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 22, fontStyle: "italic", color: "var(--ink)", marginTop: 32, lineHeight: 1.4 }}>
          Blue Demon Nation has done this before. We can do it again — politely, publicly, and on the record.
        </p>
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
    <section id="petition" style={{ padding: "72px 64px", background: "var(--paper-warm)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel num={8} label="The petition" />
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          <div style={{
            background: "var(--paper)",
            padding: "64px 72px 72px",
            borderTop: "3px solid var(--ink)",
            position: "relative",
            alignSelf: "center",
            width: "100%",
            maxWidth: 680,
            boxShadow: "0 24px 48px -28px rgba(0,0,0,0.18)",
          }}>
            <div style={{
              position: "absolute",
              right: 32,
              top: 32,
              width: 92,
              height: 92,
              borderRadius: "50%",
              border: "2px solid var(--accent-ink)",
              color: "var(--accent-ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              transform: "rotate(-8deg)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.3,
            }}>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, fontStyle: "italic", letterSpacing: 0, textTransform: "none", marginBottom: 2 }}>Enough</div>
              <div>Blue Demon<br/>Nation · 2026</div>
            </div>

            <SmallCap style={{ marginBottom: 24 }}>An open letter</SmallCap>
            <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: "var(--ink-60)", marginBottom: 20 }}>
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>To:</strong> President Robert L. Manuel<br/>
              and the DePaul University Board of Trustees
            </div>
            <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 17, lineHeight: 1.6, color: "var(--ink-80)" }}>
              <p style={{ margin: 0 }}>
                We — the undersigned alumni, students, donors, season-ticket holders, and fans — formally call for a change in leadership at DePaul Athletics, and ask that the university part ways with DeWayne Peevy as Senior Vice President and Director of Athletics.
              </p>
              <p style={{ marginTop: 16 }}>Under his leadership since 2020, DePaul has:</p>
              <ul style={{ margin: "12px 0 0 0", paddingLeft: 22 }}>
                <li>Failed to make a single NCAA Tournament appearance in any major sport.</li>
                <li>Set a Big East record for futility with an 0–20 conference season.</li>
                <li>Continued the longest tournament drought in power-conference men's basketball.</li>
                <li>Failed to address chronic attendance problems at Wintrust Arena.</li>
                <li>Finished consistently in the bottom third of the Big East across multiple sports.</li>
              </ul>
              <p style={{ marginTop: 16 }}>
                Our beloved university — once a national basketball powerhouse — has become a cautionary tale. The 2026 contract extension through 2031 was not earned. The DePaul family deserves better.
              </p>
              <p style={{ marginTop: 16, fontStyle: "italic", color: "var(--ink)" }}>
                We are asking, with respect, that you do the right thing.
              </p>
            </div>
          </div>

          {!signed ? (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <h2 style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(36px, 4vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                margin: "0 0 8px",
              }}>
                Add your name.
              </h2>
              <p style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", color: "var(--ink-60)", margin: "0 0 16px", fontSize: 17 }}>
                Signatures will be presented to the Office of the President, the Board of Trustees, and shared with Chicago media.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Field label="First name" v={form.first} onChange={v => update("first", v)} required />
                <Field label="Last name" v={form.last} onChange={v => update("last", v)} required />
              </div>
              <Field label="Email" v={form.email} onChange={v => update("email", v)} type="email" required />
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 12 }}>
                <Select label="Affiliation" v={form.aff} onChange={v => update("aff", v)}
                  options={["Alumnus", "Current student", "Donor", "Season-ticket holder", "Fan", "Faculty/Staff", "Other"]}/>
                <Field label="Class year" v={form.year} onChange={v => update("year", v)} placeholder="—" />
                <Field label="ZIP" v={form.zip} onChange={v => update("zip", v)} placeholder="—" />
              </div>
              <Field label="Why are you signing? (optional)" v={form.why} onChange={v => update("why", v)} textarea />
              <button type="submit" style={{
                background: "var(--ink)",
                color: "var(--paper)",
                padding: "18px 28px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: 2,
                cursor: "pointer",
                marginTop: 8,
              }}>
                Add my name →
              </button>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, fontStyle: "italic", color: "var(--ink-60)", margin: 0 }}>
                We'll never share your email. One signature per person.
              </p>
            </form>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <SmallCap style={{ color: "var(--accent-ink)", marginBottom: 16 }}>✓ Signature received</SmallCap>
              <h2 style={{ fontFamily: "'EB Garamond', serif", fontWeight: 300, fontSize: 56, lineHeight: 1, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
                Thank you, <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>{signedName}.</span>
              </h2>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, lineHeight: 1.55, color: "var(--ink-80)", margin: 0 }}>
                Your name has been added to the open letter. Help amplify it — share with one other Blue Demon who'd want to sign.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                {["Share to X", "Share to Facebook", "Copy link", "Email"].map(s => (
                  <button key={s} style={{
                    background: "transparent",
                    border: "1px solid var(--ink)",
                    color: "var(--ink)",
                    padding: "12px 18px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: 2,
                  }}>{s}</button>
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
  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <SmallCap>{label}{required && <span style={{ color: "var(--accent-ink)" }}> *</span>}</SmallCap>
    {textarea ? (
      <textarea value={v} onChange={e => onChange(e.target.value)} rows={3} style={inputStyle}/>
    ) : (
      <input type={type} required={required} placeholder={placeholder} value={v} onChange={e => onChange(e.target.value)} style={inputStyle}/>
    )}
  </label>
);

const Select = ({ label, v, onChange, options }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <SmallCap>{label}</SmallCap>
    <select value={v} onChange={e => onChange(e.target.value)} style={inputStyle}>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </label>
);

const inputStyle = {
  background: "var(--paper)",
  border: "1px solid var(--ink-20)",
  borderBottom: "1px solid var(--ink)",
  padding: "12px 14px",
  fontFamily: "'EB Garamond', serif",
  fontSize: 17,
  color: "var(--ink)",
  borderRadius: 2,
  outline: "none",
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
    <section style={{ padding: "72px 64px", maxWidth: 1240, margin: "0 auto" }}>
      <SectionLabel num={9} label="The wall" />
      <h2 style={{
        fontFamily: "'EB Garamond', serif",
        fontWeight: 300,
        fontSize: "clamp(40px, 5vw, 68px)",
        letterSpacing: "-0.02em",
        lineHeight: 1.08,
        margin: "0 0 16px",
        maxWidth: 900,
      }}>
        In their <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>own words.</span>
      </h2>
      <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, color: "var(--ink-80)", maxWidth: 640, margin: "0 0 48px", lineHeight: 1.5 }}>
        A few of the reasons people are signing. Updated as new signatures arrive.
      </p>

      <div style={{ columnCount: 3, columnGap: 24 }}>
        {all.map((q, i) => (
          <div key={i} style={{
            breakInside: "avoid",
            marginBottom: 24,
            padding: "24px 26px 24px",
            background: i % 2 === 1 ? "var(--accent-tint)" : "var(--paper-warm)",
            borderTop: "2px solid var(--scarlet)",
          }}>
            <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, lineHeight: 1.5, fontStyle: "italic", color: "var(--ink)" }}>
              "{q.text}"
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--scarlet)", marginTop: 16 }}>
              — {q.name}{q.year && `, ${q.year}`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------- Footer ---------- */

const Footer = ({ signatures }) => (
  <footer style={{ padding: "56px 64px 40px", background: "var(--ink)", color: "var(--paper)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, alignItems: "start" }}>
        <div>
          <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 32, fontStyle: "italic", lineHeight: 1.1 }}>
            Built by Blue Demons.<br/>For Blue Demons.
          </div>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 28, maxWidth: 460, lineHeight: 1.55 }}>
            DitchDeWayne.com is an independent grassroots effort by alumni, students, and fans of DePaul University Athletics. It is not affiliated with DePaul University, the Big East Conference, or any official organization. All cited statistics are publicly available.
          </p>
        </div>
        <div>
          <SmallCap style={{ color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Read</SmallCap>
          {["The case", "By the numbers", "The petition", "The wall"].map(s => (
            <div key={s} style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>{s}</div>
          ))}
        </div>
        <div>
          <SmallCap style={{ color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Share</SmallCap>
          {["X / Twitter", "Facebook", "Copy link", "Email"].map(s => (
            <div key={s} style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>{s}</div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
        <SmallCap style={{ color: "rgba(255,255,255,0.5)" }}>{signatures.toLocaleString()} signatures · April 2026</SmallCap>
        <SmallCap style={{ color: "rgba(255,255,255,0.5)" }}>An open letter, respectfully presented.</SmallCap>
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

  const cssVars = {
    "--paper": "oklch(0.987 0.005 80)",
    "--paper-warm": "oklch(0.96 0.012 75)",
    "--ink": "oklch(0.22 0.01 60)",
    "--ink-80": "oklch(0.34 0.01 60)",
    "--ink-60": "oklch(0.5 0.008 60)",
    "--ink-40": "oklch(0.65 0.006 60)",
    "--ink-30": "oklch(0.78 0.004 60)",
    "--ink-20": "oklch(0.86 0.004 60)",
    "--ink-15": "oklch(0.9 0.004 60)",
    "--ink-10": "oklch(0.93 0.004 60)",
    "--accent-ink": ACCENT.ink,
    "--accent-tint": ACCENT.tint,
    "--scarlet": SCARLET,
  };

  return (
    <div style={{
      ...cssVars,
      background: "var(--paper)",
      color: "var(--ink)",
      backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.5 0.01 60 / 0.04) 1px, transparent 0)",
      backgroundSize: "3px 3px",
      minHeight: "100vh",
    }}>
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
