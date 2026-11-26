(() => {
  const d = window.portfolioData;
  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeHtml = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const logoMarks = {
    const logoMarks = {
  devrev: '<img src="devrev.png" alt="">',
  target: '<img src="target.jpg" alt="">',
  ibm: '<img src="ibm.png" alt="">',
  schneider: '<img src="schneider-electric.png" alt="">',
  hpe: '<img src="hpe.jpg" alt="">'
};
  };

  $("#about-copy").textContent = d.about;

  $("#experience-list").innerHTML = d.experience.map((job, i) => `
    <article class="experience-item">
      <div class="experience-date">${escapeHtml(job.dates)}</div>
      <div class="experience-role">
        <div class="experience-role-heading"><span class="company-logo logo-${escapeHtml(job.logo)}" role="img" aria-label="${escapeHtml(job.company)} logo">${logoMarks[job.logo] || escapeHtml(job.company.slice(0, 2))}</span><div><h3>${escapeHtml(job.title)}${job.current ? '<span class="current-tag">CURRENT</span>' : ""}</h3><span class="experience-company">${escapeHtml(job.company)}</span><span class="experience-place">· ${escapeHtml(job.place)}</span></div></div>
        <p class="experience-summary">${escapeHtml(job.summary)}</p>
      </div>
      <ul class="experience-highlights">${job.highlights.map(line => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      <div class="experience-tags">${job.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </article>`).join("");

  const projectGrid = $("#project-grid");
  const categories = ["All", ...new Set(d.projects.map(p => p.category))];
  $("#project-filters").innerHTML = categories.map((cat, i) => `<button class="filter-button${i === 0 ? " active" : ""}" type="button" data-category="${escapeHtml(cat)}" aria-pressed="${i === 0}">${escapeHtml(cat)}</button>`).join("");
  const renderProjects = (category = "All") => {
    const projects = d.projects.filter(p => category === "All" || p.category === category);
    $("#project-count").textContent = `${String(projects.length).padStart(2, "0")} PROJECT${projects.length === 1 ? "" : "S"}`;
    projectGrid.innerHTML = projects.map((p, i) => `
      <article class="project-card">
        <div class="project-topline"><span>${escapeHtml(p.category.toUpperCase())} · ${escapeHtml(p.year)}</span><span class="project-index">0${i + 1}</span></div>
        <h3>${escapeHtml(p.name)}</h3><p class="project-subtitle">${escapeHtml(p.label)}</p>
        <p class="project-description">${escapeHtml(p.description)}</p>
        <p class="project-outcome">${escapeHtml(p.outcome)}</p><div class="project-spacer"></div>
        <div class="project-tags">${p.stack.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
        <p class="project-note">${escapeHtml(p.note)}</p>
        ${p.url ? `<a class="project-link" href="${escapeHtml(p.url)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(p.name)}">↗</a>` : ""}
      </article>`).join("");
  };
  renderProjects();
  $("#project-filters").addEventListener("click", event => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    document.querySelectorAll(".filter-button").forEach(b => { b.classList.toggle("active", b === button); b.setAttribute("aria-pressed", b === button); });
    renderProjects(button.dataset.category);
  });

  $("#education-details").innerHTML = d.education.map(school => `
    <article class="education-card"><div><h3>${escapeHtml(school.school)}</h3><p>${escapeHtml(school.degree)}</p><span class="education-result">${escapeHtml(school.result)}</span></div><div class="education-dates">${escapeHtml(school.dates)}</div></article>`).join("");
  $("#skills-grid").innerHTML = d.skills.map(group => `
    <div class="skill-group"><h3>${escapeHtml(group.group.toUpperCase())}</h3><div>${group.items.map(item => `<span class="skill-chip">${escapeHtml(item)}</span>`).join("")}</div></div>`).join("");
  $("#achievement-grid").innerHTML = d.achievements.map(item => `
    <article class="achievement-card"><div class="achievement-number">${escapeHtml(item.number)}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p></article>`).join("");

  $("#year").textContent = new Date().getFullYear();
  const menu = $(".main-nav"), toggle = $(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menu.classList.toggle("open", open);
  });
  menu.addEventListener("click", event => {
    if (event.target.closest("a")) { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation"); }
  });
})();
