// Ditch DeWayne — light interactivity

// === Wintrust Arena bowl visualization (~39% filled) ===
(function buildBowl() {
  const bowl = document.getElementById('bowlSeats');
  if (!bowl) return;
  const cols = 20, rows = 20;
  const cx = (cols - 1) / 2, cy = (rows - 1) / 2;
  const seats = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dx = c - cx, dy = r - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Only render seats inside the ring (court is the inner hole)
      if (dist > 3.2 && dist < 9.6) seats.push({ r, c, dist });
    }
  }
  // Fill ~39% — and weight the empties toward the upper deck (outer rings)
  // so the visual reads as "students/upper bowl empty"
  const total = seats.length;
  const targetFilled = Math.floor(total * 0.39);
  // Sort by distance (closer seats fill first)
  seats.sort((a, b) => a.dist - b.dist);
  // But scatter randomly within the inner half so it doesn't look like a perfect ring
  const inner = seats.slice(0, Math.floor(total * 0.55));
  for (let i = inner.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inner[i], inner[j]] = [inner[j], inner[i]];
  }

  const filled = new Set(inner.slice(0, targetFilled).map(s => `${s.r}-${s.c}`));

  // Build the grid
  const frag = document.createDocumentFragment();
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dx = c - cx, dy = r - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const seat = document.createElement('div');
      seat.className = 'bowl__seat';
      if (dist > 3.2 && dist < 9.6 && filled.has(`${r}-${c}`)) {
        seat.classList.add('bowl__seat--filled');
      }
      if (dist <= 3.2 || dist >= 9.6) seat.style.background = 'transparent';
      frag.appendChild(seat);
    }
  }
  bowl.appendChild(frag);
})();

// === 22-year drought timeline (2004 → 2026) ===
(function buildTimeline() {
  const container = document.querySelector('.timeline__years');
  if (!container) return;
  const start = 2004, end = 2026;
  for (let y = start; y <= end; y++) {
    const cell = document.createElement('div');
    cell.className = 'timeline__year';
    if (y === 2004) cell.classList.add('timeline__year--last');
    cell.dataset.year = String(y).slice(-2);
    cell.title = y === 2004 ? `${y} — Last NCAA Tournament appearance` : `${y} — No NCAA Tournament`;
    container.appendChild(cell);
  }
})();

// === Petition form (client-side stub) ===
(function petition() {
  const form = document.getElementById('petitionForm');
  const success = document.getElementById('petitionSuccess');
  const counter = document.getElementById('signCount');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    // No backend yet — store locally and bump the counter so the action feels real.
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      data.signedAt = new Date().toISOString();
      const existing = JSON.parse(localStorage.getItem('ditchdewayne:signatures') || '[]');
      existing.push(data);
      localStorage.setItem('ditchdewayne:signatures', JSON.stringify(existing));
    } catch (err) { /* no-op */ }
    if (counter) {
      const current = parseInt(counter.textContent.replace(/,/g, ''), 10) || 0;
      counter.textContent = (current + 1).toLocaleString();
    }
    form.reset();
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
})();

// === Copy link ===
(function copyLink() {
  const link = document.getElementById('copyLink');
  if (!link) return;
  link.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(window.location.href);
      const original = link.textContent;
      link.textContent = 'Copied!';
      setTimeout(() => { link.textContent = original; }, 1500);
    } catch (_) { /* no-op */ }
  });
})();
