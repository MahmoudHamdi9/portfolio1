/* ============================================================================
   MAIN.JS
   Reads everything from js/config.js and builds the page.
   You shouldn't need to edit this file — update js/config.js instead.
   ========================================================================= */

(function () {
  "use strict";

  const cfg = window.SITE_CONFIG || {};
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------------
     Small helpers
  ---------------------------------------------------------------- */
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function isRealUrl(url) {
    return typeof url === "string" && url.trim().length > 0;
  }

  function mailto(address) {
    return isRealUrl(address) ? `mailto:${address}` : "#";
  }

  /* ----------------------------------------------------------------
     1. IDENTITY + HERO
  ---------------------------------------------------------------- */
  function renderHero() {
    const identity = cfg.identity || {};
    document.title = `${identity.name || "Portfolio"} — ${identity.title || "Data Analyst"}`;

    // Hero Profile Image (NEW)
    const heroProfileImage = document.getElementById("heroProfileImage");
    if (heroProfileImage) heroProfileImage.src = identity.profileImage || "assets/images/profile-placeholder.svg";

    const heroName = document.getElementById("heroName");
    if (heroName) heroName.innerHTML = `${identity.name || "Your Name"}<br><span>${identity.title || "Data Analyst"}</span>`;

    const heroTagline = document.getElementById("heroTagline");
    if (heroTagline && identity.tagline) heroTagline.textContent = `"${identity.tagline}"`;

    const heroValue = document.getElementById("heroValue");
    if (heroValue) heroValue.textContent = identity.valueProposition || "";

    const heroLocation = document.getElementById("heroLocation");
    if (heroLocation) heroLocation.textContent = identity.location || "";

    const cvBtn = document.getElementById("downloadCvBtn");
    if (cvBtn) {
      if (isRealUrl(identity.cvUrl) && !identity.cvUrl.includes("PUT-YOUR-CV-HERE")) {
        cvBtn.href = identity.cvUrl;
      } else {
        cvBtn.href = "#";
        cvBtn.setAttribute("aria-disabled", "true");
        cvBtn.title = "Add your CV file path in js/config.js (identity.cvUrl)";
        cvBtn.addEventListener("click", (e) => e.preventDefault());
      }
    }

    // KPI strip
    const statsHost = document.getElementById("heroStats");
    if (statsHost) {
      const stats = Array.isArray(cfg.heroStats) ? cfg.heroStats : [];
      if (stats.length === 0) {
        statsHost.innerHTML = "";
        return;
      }
      statsHost.innerHTML = stats.map((s) => `
        <div>
          <span class="hero__stat-value" data-final="${s.value}">${prefersReducedMotion ? s.value : "0"}</span>
          <span class="hero__stat-label">${s.label}</span>
        </div>
      `).join("");
      if (!prefersReducedMotion) animateStats(statsHost);
    }
  }

  // Count-up animation for stat values that are plain numbers (with optional
  // prefix/suffix like "$" or "%" or "+"). Non-numeric values just fade in.
  function animateStats(host) {
    const nodes = host.querySelectorAll("[data-final]");
    nodes.forEach((node) => {
      const raw = node.getAttribute("data-final");
      const match = raw.match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
      if (!match) { node.textContent = raw; return; }
      const [, prefix, numStr, suffix] = match;
      const target = parseFloat(numStr.replace(/,/g, ""));
      if (isNaN(target)) { node.textContent = raw; return; }
      const duration = 1400;
      const start = performance.now();
      const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

      function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = (target * eased).toFixed(decimals);
        const formatted = decimals > 0
          ? current
          : Math.round(current).toLocaleString();
        node.textContent = `${prefix}${formatted}${suffix}`;
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }

  /* ----------------------------------------------------------------
     2. ABOUT
  ---------------------------------------------------------------- */
  function renderAbout() {
    const about = cfg.about || {};
    const identity = cfg.identity || {};

    const img = document.getElementById("aboutImage");
    if (img) img.src = identity.profileImage || "assets/images/profile-placeholder.svg";

    const textHost = document.getElementById("aboutText");
    if (textHost) {
      const paragraphs = Array.isArray(about.paragraphs) ? about.paragraphs : [];
      textHost.innerHTML = paragraphs.length
        ? paragraphs.map((p) => `<p>${p}</p>`).join("")
        : `<p class="empty-state">Add your introduction in js/config.js under about.paragraphs</p>`;
    }
  }

  /* ----------------------------------------------------------------
     3. SKILLS
  ---------------------------------------------------------------- */
  function renderSkills() {
    const host = document.getElementById("skillsGrid");
    if (!host) return;
    const groups = Array.isArray(cfg.skillGroups) ? cfg.skillGroups : [];
    if (groups.length === 0) {
      host.innerHTML = `<p class="empty-state">Add skill groups in js/config.js under skillGroups</p>`;
      return;
    }
    host.innerHTML = groups.map((group) => `
      <div class="skill-card">
        <h3>${group.category}</h3>
        <ul>${(group.skills || []).map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
    `).join("");
  }

  /* ----------------------------------------------------------------
     4. PROJECTS
  ---------------------------------------------------------------- */
  function renderProjects() {
    const host = document.getElementById("projectsList");
    if (!host) return;
    const projects = Array.isArray(cfg.projects) ? cfg.projects : [];
    if (projects.length === 0) {
      host.innerHTML = `<p class="empty-state">Add your first project in js/config.js under projects</p>`;
      return;
    }
    host.innerHTML = projects.map((p) => `
      <article class="project-card reveal">
        <div class="project-card__media">
          <img src="${p.image || "assets/images/project-mall.svg"}" alt="${p.title} preview" loading="lazy">
        </div>
        <div class="project-card__body">
          <p class="project-card__tools">${(p.tools || []).join(" · ")}</p>
          <h3>${p.title}</h3>
          <p class="project-card__problem">${p.problem || ""}</p>
          ${p.outcome ? `<p class="project-card__problem"><strong>Outcome:</strong> ${p.outcome}</p>` : ""}
          ${p.metric ? `<span class="project-card__metric">${p.metric}</span>` : ""}
          <div class="btn-row">
            ${isRealUrl(p.githubUrl) ? `<a class="btn btn--small btn--on-paper btn--ghost" href="${p.githubUrl}" target="_blank" rel="noopener">GitHub Repository</a>` : ""}
            ${isRealUrl(p.demoUrl) ? `<a class="btn btn--small btn--primary" href="${p.demoUrl}" target="_blank" rel="noopener">View Dashboard</a>` : ""}
          </div>
        </div>
      </article>
    `).join("");
  }

  /* ----------------------------------------------------------------
     5. CERTIFICATIONS
  ---------------------------------------------------------------- */
  function renderCertifications() {
    const host = document.getElementById("certTable");
    if (!host) return;
    const certs = Array.isArray(cfg.certifications) ? cfg.certifications : [];
    if (certs.length === 0) {
      host.innerHTML = `<p class="empty-state">Add certifications in js/config.js under certifications</p>`;
      return;
    }
    host.innerHTML = certs.map((c) => `
      <div class="cert-row">
        <span class="cert-row__name">${c.name}</span>
        <span class="cert-row__issuer">${c.issuer || ""}</span>
        <span class="cert-row__scope">${c.scope || ""}</span>
        ${isRealUrl(c.credentialUrl)
          ? `<a class="cert-row__link" href="${c.credentialUrl}" target="_blank" rel="noopener">View credential</a>`
          : `<span class="cert-row__link" style="opacity:.35">—</span>`}
      </div>
    `).join("");
  }

  /* ----------------------------------------------------------------
     6. CONTACT + FOOTER + NAV BRAND
  ---------------------------------------------------------------- */
  function renderContact() {
    const contact = cfg.contact || {};
    const identity = cfg.identity || {};

    const setHref = (id, href) => {
      const node = document.getElementById(id);
      if (node) node.href = href;
    };

    setHref("contactEmailBtn", mailto(contact.email));
    setHref("contactLinkedinBtn", isRealUrl(contact.linkedin) ? contact.linkedin : "#");
    setHref("contactGithubBtn", isRealUrl(contact.github) ? contact.github : "#");
    setHref("footerEmail", mailto(contact.email));
    setHref("footerLinkedin", isRealUrl(contact.linkedin) ? contact.linkedin : "#");
    setHref("footerGithub", isRealUrl(contact.github) ? contact.github : "#");

    const headline = document.getElementById("contactHeadline");
    if (headline && contact.ctaHeadline) headline.textContent = contact.ctaHeadline;
    const subtext = document.getElementById("contactSubtext");
    if (subtext && contact.ctaSubtext) subtext.textContent = contact.ctaSubtext;

    const footerName = document.getElementById("footerName");
    if (footerName) footerName.textContent = `© ${new Date().getFullYear()} ${identity.fullName || identity.name || ""}`;
  }

  /* ----------------------------------------------------------------
     7. NAVIGATION — mobile toggle + scrollspy
  ---------------------------------------------------------------- */
  function setupNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const isOpen = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
      links.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          links.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Scrollspy: highlight the nav link for the section currently in view
    const navAnchors = document.querySelectorAll("[data-nav]");
    const sections = Array.from(navAnchors)
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    if (sections.length && "IntersectionObserver" in window) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => a.classList.remove("active"));
            const match = document.querySelector(`[data-nav][href="#${entry.target.id}"]`);
            if (match) match.classList.add("active");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach((s) => spy.observe(s));
    }
  }

  /* ----------------------------------------------------------------
     8. SCROLL REVEAL
  ---------------------------------------------------------------- */
  function setupReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach((t) => io.observe(t));
  }

  // Project cards are injected after this script runs its render step, so
  // re-run the reveal observer setup once they exist in the DOM.
  function setupProjectReveal() {
    const cards = document.querySelectorAll(".project-card.reveal");
    if (!cards.length) return;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach((c) => io.observe(c));
  }

  /* ----------------------------------------------------------------
     INIT
  ---------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderCertifications();
    renderContact();
    setupNav();
    setupReveal();
    setupProjectReveal();
  });
})();
