/* Base */
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: #0f172a;
  min-height: 100vh;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

:root {
  --bg: #ffffff;
  --fg: #0f172a;
  --muted: #475569; /* slate-600 */
  --border: #e2e8f0; /* slate-200 */
  --accent: #6366f1; /* indigo-500 */
  --chip-bg: #eef2ff; /* indigo-50 */
}

body.dark {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #7209b7 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  --bg: #0b1020;
  --fg: #e5e7eb;
  --muted: #9aa5b1;
  --border: #1e293b;
  --accent: #8b5cf6;
  --chip-bg: #1f2353;
}

/* Layout */
.resume {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
  background: var(--bg);
  min-height: 100vh;
}

/* Header */
.resume-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 16px;
}

.name {
  font-size: 28px;
  line-height: 1.2;
  margin: 0 0 4px 0;
  color: var(--fg);
}

.role {
  color: var(--muted);
  margin: 0;
}

.actions { display: flex; gap: 10px; }

.btn {
  border: 0;
  background: var(--accent);
  color: #fff;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

.btn-secondary { background: #0ea5e9; }
.btn-ghost { background: transparent; color: var(--fg); border: 1px solid var(--border); }
.btn i { margin-right: 8px; }

/* Meta */
.resume-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 8px 16px;
  padding: 16px 0;
  color: var(--muted);
}

.resume-meta a { color: inherit; text-decoration: none; }
.resume-meta .meta-item { display: flex; align-items: center; gap: 8px; }

/* Body */
.resume-body { display: grid; gap: 24px; }
.resume-body section h2 {
  font-size: 18px;
  margin: 0 0 12px 0;
  color: var(--fg);
}

.summary p { color: var(--muted); margin: 0; }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.skill-group { border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px; }
.skill-group h3 { margin: 0 0 8px; font-size: 16px; color: var(--fg); }
.skill-group ul { margin: 0; padding-left: 18px; color: var(--muted); }

.projects .project { border: 1px solid var(--border); border-radius: 12px; padding: 14px; }
.project + .project { margin-top: 12px; }
.project-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.project-head h3 { margin: 0; }
.project-links { display: flex; gap: 10px; }
.project-link { color: var(--accent); text-decoration: none; font-weight: 600; }
.bullets { margin: 8px 0 0 0; padding-left: 18px; color: var(--muted); }
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.tags span { background: var(--chip-bg); color: var(--accent); padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 600; }

.education .edu-item, .experience .exp-item { border: 1px solid var(--border); border-radius: 12px; padding: 14px; }
.edu-item, .exp-item { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.edu-meta, .exp-meta { color: var(--muted); white-space: nowrap; }

.resume-footer { text-align: center; color: var(--muted); padding-top: 8px; border-top: 1px solid var(--border); }

/* Print */
@media print {
  body { 
    background: #fff !important; 
    animation: none !important;
  }
  .resume { box-shadow: none; padding: 0; }
  .actions, #themeBtn { display: none !important; }
  a { color: inherit; text-decoration: none; }
}

/* Responsive */
@media (max-width: 640px) {
  .resume-header { flex-direction: column; align-items: flex-start; }
  .edu-item, .exp-item { flex-direction: column; }
}

/* Accents and spacing refinements */
.resume { backdrop-filter: blur(6px); }
.resume-header { background: rgba(255,255,255,0.6); border: 1px solid var(--border); border-radius: 16px; padding: 16px; margin-bottom: 16px; }
body.dark .resume-header { background: rgba(17,24,39,0.5); }

.resume-meta { background: rgba(255,255,255,0.6); border: 1px solid var(--border); border-radius: 16px; padding: 12px 14px; margin-bottom: 16px; }
body.dark .resume-meta { background: rgba(17,24,39,0.5); }

.resume-body section { background: rgba(255,255,255,0.6); border: 1px solid var(--border); border-radius: 16px; padding: 14px; }
.resume-body section + section { margin-top: 16px; }
body.dark .resume-body section { background: rgba(17,24,39,0.5); }

.resume-body section h2 { position: relative; padding-left: 10px; }
.resume-body section h2::before { content: ''; position: absolute; left: 0; top: 4px; bottom: 4px; width: 3px; border-radius: 3px; background: linear-gradient(180deg, var(--accent), #22d3ee); }

/* Buttons */
.btn { box-shadow: 0 8px 24px rgba(99,102,241,0.25); transition: transform .15s ease, box-shadow .15s ease; }
.btn:hover { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(99,102,241,0.35); }
.btn-secondary { box-shadow: 0 8px 24px rgba(14,165,233,0.25); }
.btn-ghost:hover { background: rgba(99,102,241,0.08); }

/* Cards */
.skill-group, .project, .edu-item, .exp-item { background: rgba(255,255,255,0.55); backdrop-filter: blur(6px); border: 1px solid var(--border); border-radius: 12px; }
body.dark .skill-group, body.dark .project, body.dark .edu-item, body.dark .exp-item { background: rgba(17,24,39,0.45); }

/* Project head spacing */
.project-head h3 { font-size: 16px; }
.project p { color: var(--muted); }

/* List bullets spacing */
.bullets li { margin: 6px 0; }
