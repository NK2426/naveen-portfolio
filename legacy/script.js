/* =========================================================
   Naveen Kumar N — Portfolio interactions
   ========================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Loader ---------- */
  window.addEventListener("load", () => {
    const loader = $("#loader");
    setTimeout(() => loader && loader.classList.add("hidden"), 650);
  });
  // Fallback in case load already fired
  setTimeout(() => { const l = $("#loader"); if (l) l.classList.add("hidden"); }, 2600);

  /* ---------- Year ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Scroll progress + nav state + back-to-top ---------- */
  const progress = $("#scroll-progress");
  const nav = $("#nav");
  const toTop = $("#to-top");
  function onScroll() {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    if (nav) nav.classList.toggle("scrolled", scrolled > 40);
    if (toTop) toTop.classList.toggle("show", scrolled > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Mobile menu ---------- */
  const toggle = $("#nav-toggle");
  const navLinks = $("#nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
    $$(".nav-link", navLinks).forEach((l) =>
      l.addEventListener("click", () => {
        toggle.classList.remove("open");
        navLinks.classList.remove("open");
      })
    );
  }

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  $$(".reveal").forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
    revealObserver.observe(el);
  });

  /* ---------- Timeline node activation + fill ---------- */
  const tlItems = $$(".tl-item");
  const tlFill = $("#timeline-fill");
  const tlObserver = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
    { threshold: 0.4 }
  );
  tlItems.forEach((i) => tlObserver.observe(i));

  const timeline = $(".timeline");
  function updateTimelineFill() {
    if (!timeline || !tlFill) return;
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.5;
    const total = rect.height;
    const passed = Math.min(Math.max(start - rect.top, 0), total);
    tlFill.style.height = (total > 0 ? (passed / total) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", updateTimelineFill, { passive: true });
  updateTimelineFill();

  /* ---------- Active nav link via section observer ---------- */
  const sections = $$("section[id], header[id]");
  const linkMap = {};
  $$(".nav-link").forEach((l) => {
    const id = l.getAttribute("href").slice(1);
    linkMap[id] = l;
  });
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          $$(".nav-link").forEach((l) => l.classList.remove("active"));
          const link = linkMap[e.target.id];
          if (link) link.classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ---------- Count up stats ---------- */
  const counters = $$(".count");
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.target) || 0;
        const suffix = el.dataset.suffix || "";
        const dur = 1600;
        const t0 = performance.now();
        function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => countObserver.observe(c));

  /* ---------- Typing effect ---------- */
  const typed = $("#typed");
  if (typed && !prefersReduced) {
    const roles = [
      "Senior Full Stack Developer",
      "AI-Enabled Backend Engineer",
      "System Design & Microservices",
      "Next.js · NestJS · PostgreSQL",
      "Team Lead & Mentor",
    ];
    let ri = 0, ci = 0, deleting = false;
    function tick() {
      const word = roles[ri];
      if (!deleting) {
        ci++;
        typed.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; return setTimeout(tick, 1600); }
      } else {
        ci--;
        typed.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(tick, deleting ? 45 : 85);
    }
    setTimeout(tick, 900);
  } else if (typed) {
    typed.textContent = "Senior Full Stack Developer";
  }

  /* ---------- Cursor glow (desktop only) ---------- */
  const glow = $("#cursor-glow");
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (glow && fine && !prefersReduced) {
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2, cx = gx, cy = gy;
    window.addEventListener("mousemove", (e) => {
      gx = e.clientX; gy = e.clientY; glow.style.opacity = "1";
    });
    (function follow() {
      cx += (gx - cx) * 0.14; cy += (gy - cy) * 0.14;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(follow);
    })();
  }

  /* ---------- Magnetic buttons ---------- */
  if (fine && !prefersReduced) {
    $$(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- 3D tilt on cards ---------- */
  if (fine && !prefersReduced) {
    $$(".tilt").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${py * -6}deg) rotateY(${px * 8}deg) translateY(-4px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- Animated particle background (canvas) ---------- */
  const canvas = $("#bg-canvas");
  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext("2d");
    let w, h, dpr, particles, mouse = { x: -9999, y: -9999 };
    const COLORS = ["124,92,255", "34,211,238", "244,114,182", "52,211,153"];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * dpr,
        vy: (Math.random() - 0.5) * 0.35 * dpr,
        r: (Math.random() * 1.8 + 0.6) * dpr,
        c: COLORS[(Math.random() * COLORS.length) | 0],
      }));
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; });
    window.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

    const LINK = 130;
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // subtle mouse repel
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 * dpr && dist > 0) {
          const f = (120 * dpr - dist) / (120 * dpr);
          p.x += (dx / dist) * f * 1.4;
          p.y += (dy / dist) * f * 1.4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},0.7)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < LINK * dpr) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${p.c},${0.12 * (1 - d / (LINK * dpr))})`;
            ctx.lineWidth = dpr * 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }
    frame();
  }
})();
