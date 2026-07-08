<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Walmart FreshFlow AI | Grocery Supply Chain Intelligence</title>
<style>
:root{
  --w-blue:#0071ce;
  --w-blue-dark:#004f9e;
  --w-navy:#052b63;
  --w-navy-2:#031f49;
  --spark:#ffc220;
  --bg:#f4f7fb;
  --surface:#ffffff;
  --surface-2:#eef4fb;
  --ink:#0f172a;
  --muted:#64748b;
  --line:#dbe6f2;
  --green:#16a34a;
  --red:#dc2626;
  --orange:#f97316;
  --purple:#7c3aed;
  --shadow:0 18px 45px rgba(15,23,42,.08);
  --radius:20px;
  --side:292px;
  --top:74px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--bg);color:var(--ink);line-height:1.45;overflow-x:hidden}
body.dark{--bg:#0b1220;--surface:#111b2d;--surface-2:#17243a;--ink:#f8fafc;--muted:#94a3b8;--line:#25344d;--shadow:0 18px 45px rgba(0,0,0,.25)}
button,input,select{font:inherit}
button{cursor:pointer}
a{color:inherit;text-decoration:none}
.app{min-height:100vh;display:flex;width:100%}
.sidebar{width:var(--side);background:linear-gradient(180deg,var(--w-blue-dark),var(--w-navy-2));color:#fff;position:fixed;inset:0 auto 0 0;z-index:50;display:flex;flex-direction:column;padding:28px 18px;transition:.28s ease;overflow-y:auto}
.brand{display:flex;gap:14px;align-items:center;margin-bottom:28px;padding:4px 0 18px;border-bottom:1px solid rgba(255,255,255,.45)}
.logo-mark{width:48px;height:48px;border-radius:16px;background:var(--spark);display:grid;place-items:center;color:var(--w-blue-dark);font-size:22px;font-weight:900;flex:0 0 auto}
.brand h1{font-size:18px;line-height:1.05;margin:0;font-weight:900;letter-spacing:-.02em}
.brand small{display:block;margin-top:8px;color:#cfe6ff;font-size:12px}
.nav{display:grid;gap:8px}
.nav button{border:0;background:transparent;color:#e8f5ff;border-radius:14px;padding:14px 14px;text-align:left;font-weight:850;display:flex;align-items:center;gap:10px;transition:.18s ease}
.nav button:hover,.nav button.active{background:rgba(255,255,255,.16);transform:translateX(2px)}
.adoption-card{margin-top:auto;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);border-radius:18px;padding:18px 16px;color:#e8f5ff}
.adoption-card strong{display:block;color:var(--spark);font-size:25px;margin:8px 0;font-weight:950}
.progress{height:8px;background:rgba(255,255,255,.2);border-radius:999px;overflow:hidden}.progress span{display:block;height:100%;width:78%;background:var(--spark);border-radius:999px}
.adoption-card p{margin:8px 0 0;font-size:12px;color:#dbeafe}.main{margin-left:var(--side);width:calc(100% - var(--side));min-width:0;min-height:100vh}.topbar{height:var(--top);position:sticky;top:0;z-index:40;background:rgba(255,255,255,.9);backdrop-filter:blur(16px);border-bottom:1px solid var(--line);display:flex;align-items:center;gap:14px;padding:12px 28px}.dark .topbar{background:rgba(17,27,45,.9)}
.mobile-menu{display:none;border:0;background:var(--w-blue);color:#fff;border-radius:12px;width:44px;height:44px;font-size:21px;font-weight:900;flex:0 0 auto}.mobile-title{display:none;font-weight:950;color:var(--w-blue-dark)}
.search{flex:1;min-width:160px;display:flex;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:0 14px;height:48px}.search input{border:0;outline:0;background:transparent;color:var(--ink);width:100%}.pill{border:1px solid var(--line);background:var(--surface);border-radius:999px;height:46px;padding:0 16px;display:inline-flex;align-items:center;gap:8px;font-weight:900;white-space:nowrap}.icon-btn{width:46px;height:46px;border-radius:50%;border:1px solid var(--line);background:var(--surface);display:grid;place-items:center;position:relative}.dot{position:absolute;right:11px;top:9px;width:7px;height:7px;border-radius:50%;background:var(--red)}
.content{padding:28px;max-width:1480px;margin:0 auto;width:100%;min-width:0}.section{display:none;animation:fade .18s ease}.section.active{display:block}@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:22px}.section-head h2{font-size:31px;letter-spacing:-.04em;margin:0 0 8px}.section-head p{color:var(--muted);margin:0;max-width:700px}.eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--spark);font-weight:950}.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:22px;min-width:0}.card h3{margin:0 0 12px;font-size:21px;letter-spacing:-.03em}.card p{color:var(--muted);margin:0 0 12px}.grid{display:grid;gap:18px;min-width:0}.grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-auto{grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}.split{grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr)}.wide-split{grid-template-columns:minmax(0,1.35fr) minmax(340px,.65fr)}
.hero{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(320px,.65fr);gap:18px;align-items:stretch}.hero-main{background:linear-gradient(135deg,var(--w-blue),var(--w-blue-dark) 62%,#3a8a9a);color:#fff;border:0;padding:36px}.hero-main h2{font-size:clamp(32px,4vw,56px);line-height:.96;letter-spacing:-.06em;margin:10px 0 18px;max-width:850px}.hero-main p{color:#eaf6ff;max-width:740px;font-size:16px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}.status-list{display:grid;gap:12px}.status-item{border:1px solid var(--line);background:var(--surface);border-radius:16px;padding:16px;display:flex;align-items:center;justify-content:space-between;gap:12px}.status-item strong{font-size:19px}.status-item .badge{margin-left:auto}.kpi{min-height:130px;display:flex;flex-direction:column;justify-content:space-between}.kpi .label{font-size:13px;color:var(--muted);font-weight:900}.kpi .value{font-size:30px;font-weight:950;letter-spacing:-.04em}.trend{font-size:12px;font-weight:950}.up{color:var(--green)}.down{color:var(--red)}.warn{color:var(--orange)}
.btn{border:0;border-radius:13px;padding:13px 16px;font-weight:950;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:.16s ease;white-space:nowrap}.btn:hover{transform:translateY(-1px)}.btn-primary{background:var(--w-blue);color:#fff}.btn-spark{background:var(--spark);color:#062b5f}.btn-ghost{background:transparent;color:inherit;border:1px solid var(--line)}.btn-soft{background:var(--surface-2);color:var(--ink);border:1px solid var(--line)}.btn-sm{padding:9px 12px;border-radius:11px;font-size:12px}.badge{border-radius:999px;padding:6px 10px;font-size:12px;font-weight:950;background:var(--surface-2);display:inline-flex;align-items:center;gap:5px}.badge.green{background:rgba(22,163,74,.13);color:var(--green)}.badge.red{background:rgba(220,38,38,.12);color:var(--red)}.badge.orange{background:rgba(249,115,22,.12);color:var(--orange)}.badge.blue{background:rgba(0,113,206,.12);color:var(--w-blue)}
.chart{height:235px;border-radius:18px;background:linear-gradient(180deg,var(--surface-2),transparent);border:1px solid var(--line);padding:18px;display:flex;align-items:end;gap:12px}.bar{flex:1;background:linear-gradient(180deg,var(--w-blue),var(--w-blue-dark));border-radius:10px 10px 4px 4px;min-width:18px;position:relative}.bar.spark{background:linear-gradient(180deg,var(--spark),#f59e0b)}.bar.green{background:linear-gradient(180deg,#22c55e,#15803d)}.bar:after{content:attr(data-label);position:absolute;bottom:-24px;left:50%;transform:translateX(-50%);font-size:11px;color:var(--muted);font-weight:800}.heatmap{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.region{border-radius:18px;padding:18px;border:1px solid var(--line);background:var(--surface-2);min-height:120px}.region strong{font-size:22px;display:block;margin:6px 0}.risk-low{border-left:6px solid var(--green)}.risk-med{border-left:6px solid var(--orange)}.risk-high{border-left:6px solid var(--red)}
.table-wrap{width:100%;overflow-x:auto;border:1px solid var(--line);border-radius:18px;background:var(--surface)}table{width:100%;border-collapse:collapse;min-width:760px}th,td{text-align:left;padding:14px 16px;border-bottom:1px solid var(--line);vertical-align:middle}th{font-size:12px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);background:var(--surface-2)}tr:last-child td{border-bottom:0}.actions-row{display:flex;gap:10px;flex-wrap:wrap}.alert{display:flex;gap:14px;align-items:flex-start;border:1px solid var(--line);background:var(--surface);border-radius:18px;padding:16px}.alert-icon{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;flex:0 0 auto}.alert.critical .alert-icon{background:rgba(220,38,38,.12);color:var(--red)}.alert.warning .alert-icon{background:rgba(249,115,22,.13);color:var(--orange)}.alert.good .alert-icon{background:rgba(22,163,74,.13);color:var(--green)}
.module-tabs{display:flex;gap:10px;flex-wrap:wrap}.module-tabs button{border:1px solid var(--line);background:var(--surface);padding:12px 16px;border-radius:14px;font-weight:950}.module-tabs button.active{background:var(--w-blue);color:#fff;border-color:var(--w-blue)}
.chatbox{min-height:260px;background:var(--surface-2);border:1px solid var(--line);border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:12px;overflow:auto}.bubble{max-width:90%;padding:14px 16px;border-radius:18px;background:var(--surface);border:1px solid var(--line)}.bubble.user{align-self:flex-end;background:var(--w-blue);color:#fff;border-color:var(--w-blue)}.chat-input{display:flex;gap:10px;margin-top:12px}.chat-input input{flex:1;min-width:0;border:1px solid var(--line);background:var(--surface);border-radius:14px;padding:13px 14px;color:var(--ink)}.scenario-layout{display:grid;grid-template-columns:minmax(240px,330px) minmax(0,1fr);gap:18px;align-items:start}.scenario-list{display:grid;gap:10px}.scenario-btn{border:1px solid var(--line);background:var(--surface);border-radius:16px;padding:16px;text-align:left;font-weight:950}.scenario-btn.active{border-color:var(--w-blue);box-shadow:0 0 0 3px rgba(0,113,206,.12)}.scenario-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.metric-tile{background:var(--surface-2);border:1px solid var(--line);border-radius:16px;padding:16px;min-width:0}.metric-tile strong{display:block;font-size:25px;letter-spacing:-.04em}.timeline{display:grid;grid-template-columns:repeat(6,minmax(110px,1fr));gap:10px;margin-top:16px}.step{background:var(--surface-2);border:1px solid var(--line);border-radius:14px;padding:12px;text-align:center;font-weight:950;font-size:12px}.step.done{background:rgba(0,113,206,.1);border-color:rgba(0,113,206,.35);color:var(--w-blue)}
.twin{position:relative;min-height:330px;background:radial-gradient(circle at top right,rgba(0,113,206,.18),transparent 35%),var(--surface-2);border:1px solid var(--line);border-radius:22px;padding:24px;overflow:hidden}.chain{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px;align-items:center;position:relative;z-index:1}.node{background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow);border-radius:18px;padding:18px;text-align:center;min-height:155px;display:flex;flex-direction:column;justify-content:center;transition:.16s}.node:hover{transform:translateY(-3px)}.node .emoji{font-size:28px}.node strong{display:block;margin:8px 0}.node small{color:var(--muted)}.connector{height:3px;background:linear-gradient(90deg,var(--w-blue),var(--spark));border-radius:99px;margin-top:22px}.data-flow{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}.flow-card{border:1px solid var(--line);background:var(--surface);border-radius:18px;padding:18px;text-align:center}.flow-arrow{font-size:24px;color:var(--w-blue);font-weight:900}.report-card{display:flex;justify-content:space-between;gap:14px;align-items:center;border:1px solid var(--line);background:var(--surface);border-radius:18px;padding:18px}.toast{position:fixed;right:22px;bottom:22px;z-index:100;background:#071f38;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:14px 16px;box-shadow:var(--shadow);display:none;max-width:360px}.toast.show{display:block;animation:toast .25s ease}@keyframes toast{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.overlay{position:fixed;inset:0;background:rgba(2,8,23,.45);z-index:45;display:none}.overlay.show{display:block}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
@media (max-width:1250px){:root{--side:260px}.content{padding:24px}.hero,.wide-split,.split{grid-template-columns:1fr}.grid-4{grid-template-columns:repeat(2,minmax(0,1fr))}.scenario-layout{grid-template-columns:1fr}.scenario-list{grid-template-columns:repeat(2,minmax(0,1fr))}.chain,.data-flow{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:980px){.sidebar{transform:translateX(-105%);box-shadow:20px 0 50px rgba(0,0,0,.22)}.sidebar.open{transform:translateX(0)}.main{margin-left:0;width:100%}.mobile-menu{display:grid;place-items:center}.mobile-title{display:block}.topbar{padding:10px 14px}.search{order:3;flex-basis:100%;height:44px}.topbar{height:auto;flex-wrap:wrap}.content{padding:18px}.hero{grid-template-columns:1fr}.hero-main{padding:26px}.grid-3{grid-template-columns:repeat(2,minmax(0,1fr))}.section-head{align-items:flex-start;flex-direction:column}.timeline{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:700px){.content{padding:14px}.topbar .pill{display:none}.hero-main h2{font-size:31px}.hero-main{border-radius:18px;padding:22px}.card{padding:18px;border-radius:18px}.grid-2,.grid-3,.grid-4,.grid-auto{grid-template-columns:1fr}.scenario-list,.scenario-metrics,.heatmap{grid-template-columns:1fr}.chain,.data-flow{grid-template-columns:1fr}.node{min-height:120px}.timeline{grid-template-columns:repeat(2,minmax(0,1fr))}.hero-actions,.actions-row,.chat-input{flex-direction:column}.btn,.chat-input input{width:100%}.status-item{align-items:flex-start;flex-direction:column}.section-head h2{font-size:26px}.chart{height:200px}.toast{left:14px;right:14px;bottom:14px;max-width:none}}
@media (max-width:460px){.mobile-title{font-size:13px}.icon-btn{width:42px;height:42px}.search{display:none}.content{padding:12px}.hero-main h2{font-size:28px}.kpi .value{font-size:27px}.timeline{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="overlay" id="overlay"></div>
<div class="app">
  <aside class="sidebar" id="sidebar" aria-label="Primary navigation">
    <div class="brand">
      <div class="logo-mark">✦</div>
      <div><h1>Walmart<br>FreshFlow AI</h1><small>Internal supply chain platform</small></div>
    </div>
    <nav class="nav" id="nav">
      <button data-section="overview" class="active">🏠 Overview</button>
      <button data-section="executive">📊 Executive Intelligence</button>
      <button data-section="operations">⚡ Operations Center</button>
      <button data-section="ai">🧠 AI Command Center</button>
      <button data-section="loss">🥬 Grocery Loss Center</button>
      <button data-section="twin">🛰️ Digital Twin</button>
      <button data-section="suppliers">🤝 Suppliers</button>
      <button data-section="reports">📄 Reports</button>
    </nav>
    <div class="adoption-card">
      <span>AI adoption score</span>
      <strong id="adoptionScore">78%</strong>
      <div class="progress"><span id="adoptionProgress"></span></div>
      <p>Recommendations accepted across high-risk grocery categories.</p>
    </div>
  </aside>

  <main class="main">
    <header class="topbar">
      <button class="mobile-menu" id="mobileMenu" aria-label="Open menu">☰</button>
      <div class="mobile-title">FreshFlow AI</div>
      <div class="search"><span>🔎</span><input id="globalSearch" placeholder="Search store, SKU, supplier, truck, report..." /></div>
      <button class="pill" id="roleBtn">👤 Role: Operations</button>
      <button class="icon-btn" id="themeBtn" aria-label="Toggle dark mode">🌙</button>
      <button class="icon-btn" id="notifBtn" aria-label="Notifications">🔔<span class="dot"></span></button>
    </header>

    <div class="content">
      <section id="overview" class="section active">
        <div class="hero">
          <div class="hero-main card">
            <div class="eyebrow">Walmart Global Tech · Grocery Supply Chain</div>
            <h2>AI-powered visibility for fresher shelves, lower grocery losses and higher margins.</h2>
            <p>FreshFlow AI connects store inventory, POS data, supplier performance, truck temperature, weather and local demand signals to recommend actions before groceries become losses.</p>
            <div class="hero-actions">
              <button class="btn btn-spark" data-section-link="operations">View operational actions</button>
              <button class="btn btn-ghost" data-section-link="ai">Ask FreshFlow AI</button>
            </div>
          </div>
          <div class="card">
            <h3>Live network status</h3>
            <div class="status-list">
              <div class="status-item"><span>Connected stores</span><strong>4,756</strong></div>
              <div class="status-item"><span>Trucks monitored</span><strong>8,921</strong></div>
              <div class="status-item"><span>Suppliers online</span><strong>312</strong></div>
              <div class="status-item"><span>Critical alerts</span><span class="badge red" id="criticalCount">3 active</span></div>
            </div>
          </div>
        </div>
        <div class="grid grid-4" style="margin-top:18px">
          <div class="card kpi"><span class="label">Revenue Protected</span><span class="value" id="revenueKpi">$42.8M</span><span class="trend up">+8.4% vs last month</span></div>
          <div class="card kpi"><span class="label">Grocery Waste Reduced</span><span class="value" id="wasteKpi">18.4%</span><span class="trend up">AI markdowns + transfers</span></div>
          <div class="card kpi"><span class="label">Forecast Accuracy</span><span class="value">96.2%</span><span class="trend up">SKU/store level</span></div>
          <div class="card kpi"><span class="label">AI Savings Generated</span><span class="value" id="savingsKpi">$12.4M</span><span class="trend up">Human-approved actions</span></div>
        </div>
        <div class="grid split" style="margin-top:18px">
          <div class="card"><h3>AI Decision Engine</h3><div class="data-flow"><div class="flow-card">POS<br><span class="flow-arrow">↓</span></div><div class="flow-card">Inventory<br><span class="flow-arrow">↓</span></div><div class="flow-card">IoT + GPS<br><span class="flow-arrow">↓</span></div><div class="flow-card">External Data<br><span class="flow-arrow">↓</span></div><div class="flow-card"><strong>AI Actions</strong><br><span class="flow-arrow">✓</span></div></div></div>
          <div class="card"><h3>Human-in-the-loop workflow</h3><div class="timeline"><div class="step done">1. Detect</div><div class="step done">2. Predict</div><div class="step done">3. Simulate</div><div class="step">4. Recommend</div><div class="step">5. Approve</div><div class="step">6. Learn</div></div></div>
        </div>
      </section>

      <section id="executive" class="section">
        <div class="section-head"><div><h2>Executive Intelligence</h2><p>Strategic C-level view: financial impact, ROI, regional risk and sustainability metrics.</p></div><div class="module-tabs"><button class="active">Week</button><button>Month</button><button>Quarter</button></div></div>
        <div class="grid grid-4"><div class="card kpi"><span class="label">Margin Impact</span><span class="value">$18.7M</span><span class="trend up">Protected this quarter</span></div><div class="card kpi"><span class="label">AI ROI</span><span class="value">4.8x</span><span class="trend up">Projected annualized</span></div><div class="card kpi"><span class="label">Accepted Recommendations</span><span class="value" id="acceptedKpi">324</span><span class="trend up">Human-approved</span></div><div class="card kpi"><span class="label">Supplier Risk Index</span><span class="value">Low</span><span class="trend up">7 alerts monitored</span></div></div>
        <div class="grid split" style="margin-top:18px"><div class="card"><h3>Financial Impact Trend</h3><div class="chart"><div class="bar" style="height:42%" data-label="Jan"></div><div class="bar" style="height:54%" data-label="Feb"></div><div class="bar spark" style="height:63%" data-label="Mar"></div><div class="bar" style="height:72%" data-label="Apr"></div><div class="bar green" style="height:86%" data-label="May"></div><div class="bar green" style="height:96%" data-label="Jun"></div></div></div><div class="card"><h3>Regional Risk Heatmap</h3><div class="heatmap"><div class="region risk-high"><span>South</span><strong>High</strong><small>Heat wave + produce risk</small></div><div class="region risk-med"><span>Midwest</span><strong>Medium</strong><small>Supplier variance</small></div><div class="region risk-low"><span>West</span><strong>Low</strong><small>Stable inventory</small></div></div></div></div>
        <div class="grid grid-3" style="margin-top:18px"><div class="card"><h3>AI ROI</h3><p>Payback period: 5.2 months.</p><div class="progress"><span style="width:82%;background:var(--w-blue)"></span></div><strong style="display:block;margin-top:12px">82% toward annual savings target</strong></div><div class="card"><h3>Executive summary</h3><p>FreshFlow AI prevented an estimated <strong>$2.8M</strong> in grocery losses this week across 482 stores, mainly through markdowns and transfer recommendations.</p></div><div class="card"><h3>Sustainability impact</h3><p><strong>18.2K tons</strong> CO₂ avoided and <strong>120 tons</strong> of food rescued through earlier action on perishable inventory.</p></div></div>
      </section>

      <section id="operations" class="section">
        <div class="section-head"><div><h2>Operations Command Center</h2><p>Daily operating view for store, logistics, DC and category teams.</p></div><button class="btn btn-primary" data-section-link="loss">Open Grocery Loss Center</button></div>
        <div class="grid grid-3"><div class="alert critical"><div class="alert-icon">🌡️</div><div><strong>Cold chain interruption</strong><p>Truck #284 temperature exceeded threshold for 19 minutes.</p><span class="badge red">Critical</span></div></div><div class="alert warning"><div class="alert-icon">🥬</div><div><strong>Produce waste risk</strong><p>Store #1128 has strawberries expiring in 36 hours.</p><span class="badge orange">Action needed</span></div></div><div class="alert good"><div class="alert-icon">✅</div><div><strong>Transfer completed</strong><p>Milk inventory moved from Store #118 to Store #210.</p><span class="badge green">Completed</span></div></div></div>
        <div class="grid split" style="margin-top:18px"><div class="card"><h3>AI Action Center</h3><div class="table-wrap"><table><thead><tr><th>Action</th><th>Risk</th><th>Savings</th><th>Confidence</th><th>Status</th></tr></thead><tbody id="actionTable"><tr><td>Markdown strawberries 15%</td><td><span class="badge red">High</span></td><td>$4,900</td><td>96%</td><td><button class="btn btn-sm btn-primary approve" data-save="4900">Approve</button></td></tr><tr><td>Transfer milk to Store #210</td><td><span class="badge orange">Medium</span></td><td>$7,200</td><td>93%</td><td><button class="btn btn-sm btn-primary approve" data-save="7200">Approve</button></td></tr><tr><td>Reduce bakery order tomorrow</td><td><span class="badge orange">Medium</span></td><td>$2,800</td><td>89%</td><td><button class="btn btn-sm btn-primary approve" data-save="2800">Approve</button></td></tr></tbody></table></div></div><div class="card"><h3>Cold Chain Monitor</h3><div class="status-list"><div class="status-item"><span>Truck #284</span><span><strong class="down">7.8°C</strong> <small>Max 4°C</small></span></div><div class="status-item"><span>Truck #612</span><span><strong class="up">3.1°C</strong> <small>Stable</small></span></div><div class="status-item"><span>DC Atlanta</span><span><strong class="up">2.9°C</strong> <small>Stable</small></span></div></div></div></div>
      </section>

      <section id="ai" class="section">
        <div class="section-head"><div><h2>AI Command Center</h2><p>Ask questions, simulate disruptions and approve explainable recommendations.</p></div></div>
        <div class="grid wide-split">
          <div class="card"><h3>Ask Walmart AI</h3><div class="actions-row" style="margin-bottom:12px"><button class="btn btn-sm btn-soft quick" data-q="Why is produce waste increasing in Texas?">Produce waste in Texas</button><button class="btn btn-sm btn-soft quick" data-q="Which suppliers are creating the most risk?">Supplier risk</button><button class="btn btn-sm btn-soft quick" data-q="What should we do with strawberries expiring soon?">Strawberry action</button></div><div class="chatbox" id="chatbox"><div class="bubble"><strong>FreshFlow AI:</strong> Ask me about waste, demand, inventory, suppliers or logistics risk.</div></div><div class="chat-input"><input id="aiInput" placeholder="Example: Why is produce waste rising in Texas?" /><button class="btn btn-primary" id="askBtn">Ask AI</button></div></div>
          <div class="card"><h3>Scenario Simulator</h3><p>Select a disruption and see the predicted impact.</p><div class="scenario-layout"><div class="scenario-list"><button class="scenario-btn active" data-scenario="heat">🌡️ Heat wave in Texas</button><button class="scenario-btn" data-scenario="supplier">🚚 Supplier delay</button><button class="scenario-btn" data-scenario="holiday">🛒 Holiday demand spike</button><button class="scenario-btn" data-scenario="fuel">⛽ Fuel price +12%</button></div><div><div class="scenario-metrics"><div class="metric-tile"><span>Waste risk</span><strong id="simWaste">+22%</strong><small class="down">AI forecast</small></div><div class="metric-tile"><span>Beverage demand</span><strong id="simDemand">+31%</strong><small class="up">AI forecast</small></div><div class="metric-tile"><span>Produce shelf life</span><strong id="simShelf">-18%</strong><small class="warn">AI forecast</small></div></div><p id="scenarioText" style="margin-top:16px">AI recommends increasing beverage replenishment, reducing sensitive produce orders and applying markdowns today in 184 Texas stores. Estimated savings: $2.8M.</p><div class="timeline"><div class="step done">1. Detect</div><div class="step done">2. Predict</div><div class="step done">3. Simulate</div><div class="step done">4. Recommend</div><div class="step">5. Approve</div><div class="step">6. Learn</div></div><div class="actions-row" style="margin-top:16px"><button class="btn btn-primary" id="applyScenario">Apply AI mitigation plan</button><button class="btn btn-ghost">Export scenario</button></div></div></div></div>
        </div>
      </section>

      <section id="loss" class="section">
        <div class="section-head"><div><h2>Grocery Loss Center</h2><p>SKU-level risk prediction for perishable grocery categories.</p></div><div class="actions-row"><button class="btn btn-soft filter" data-filter="all">All</button><button class="btn btn-soft filter" data-filter="High">High risk</button><button class="btn btn-soft filter" data-filter="Produce">Produce</button></div></div>
        <div class="card"><div class="table-wrap"><table><thead><tr><th>SKU</th><th>Product</th><th>Category</th><th>Shelf life</th><th>Waste risk</th><th>AI recommendation</th><th>Action</th></tr></thead><tbody id="lossTable"><tr data-risk="High" data-category="Produce"><td>1029</td><td>Strawberries</td><td>Produce</td><td>36h</td><td><span class="badge red">92%</span></td><td>Markdown 15% today</td><td><button class="btn btn-sm btn-primary approve" data-save="4900">Approve</button></td></tr><tr data-risk="High" data-category="Dairy"><td>4102</td><td>Milk</td><td>Dairy</td><td>2 days</td><td><span class="badge red">87%</span></td><td>Transfer to high-demand store</td><td><button class="btn btn-sm btn-primary approve" data-save="7200">Approve</button></td></tr><tr data-risk="Medium" data-category="Bakery"><td>8821</td><td>Bread</td><td>Bakery</td><td>18h</td><td><span class="badge orange">81%</span></td><td>Reduce tomorrow order</td><td><button class="btn btn-sm btn-primary approve" data-save="2800">Approve</button></td></tr><tr data-risk="Medium" data-category="Produce"><td>7330</td><td>Avocados</td><td>Produce</td><td>3 days</td><td><span class="badge orange">76%</span></td><td>Bundle promotion</td><td><button class="btn btn-sm btn-primary approve" data-save="3500">Approve</button></td></tr></tbody></table></div></div>
      </section>

      <section id="twin" class="section">
        <div class="section-head"><div><h2>Digital Twin</h2><p>Live simulation of Walmart's grocery supply chain from supplier to shelf.</p></div></div>
        <div class="card twin"><div class="chain"><button class="node twin-node" data-info="Supplier Fresh Farms: OTIF 91%, quality 94%, delay risk medium."><span class="emoji">🌾</span><strong>Supplier</strong><small>Fresh Farms Co.</small></button><button class="node twin-node" data-info="DC Atlanta: capacity 82%, temperature stable, 14 outbound routes."><span class="emoji">🏭</span><strong>Distribution Center</strong><small>Atlanta DC</small></button><button class="node twin-node" data-info="Truck #284: temperature alert, ETA 42 minutes, route needs review."><span class="emoji">🚚</span><strong>Truck</strong><small>#284</small></button><button class="node twin-node" data-info="Store #1128: strawberries high risk, dairy stable, traffic forecast +12%."><span class="emoji">🏬</span><strong>Store</strong><small>#1128</small></button><button class="node twin-node" data-info="Customer demand: beverages +31%, produce demand -8%, local event detected."><span class="emoji">🛒</span><strong>Demand</strong><small>Local signals</small></button></div><div class="connector"></div></div>
        <div class="card" style="margin-top:18px"><h3>Selected node insight</h3><p id="twinInfo">Click a node to inspect its operational status and AI recommendation.</p></div>
      </section>

      <section id="suppliers" class="section">
        <div class="section-head"><div><h2>Supplier Intelligence</h2><p>Performance, quality, risk and waste impact by supplier.</p></div></div>
        <div class="card"><div class="table-wrap"><table><thead><tr><th>Supplier</th><th>OTIF</th><th>Quality</th><th>Delay risk</th><th>Waste impact</th><th>AI action</th></tr></thead><tbody><tr><td>Fresh Farms</td><td>91%</td><td>94%</td><td><span class="badge orange">Medium</span></td><td>$1.2M</td><td>Monitor</td></tr><tr><td>DairyBest</td><td>97%</td><td>96%</td><td><span class="badge green">Low</span></td><td>$420K</td><td>Keep</td></tr><tr><td>Green Valley</td><td>84%</td><td>88%</td><td><span class="badge red">High</span></td><td>$2.8M</td><td>Activate backup supplier</td></tr></tbody></table></div></div>
      </section>

      <section id="reports" class="section">
        <div class="section-head"><div><h2>Reports</h2><p>Executive and operational reports generated from approved AI actions.</p></div></div>
        <div class="grid grid-2"><div class="report-card"><div><strong>Weekly Grocery Loss Report</strong><p>Category risk, savings and action summary.</p></div><button class="btn btn-primary reportBtn">Generate</button></div><div class="report-card"><div><strong>AI Savings Report</strong><p>ROI, margin protection and accepted recommendations.</p></div><button class="btn btn-primary reportBtn">Generate</button></div><div class="report-card"><div><strong>Supplier Risk Report</strong><p>OTIF, delay patterns and alternative supplier options.</p></div><button class="btn btn-primary reportBtn">Generate</button></div><div class="report-card"><div><strong>Sustainability Report</strong><p>Food rescued, CO₂ avoided and water saved.</p></div><button class="btn btn-primary reportBtn">Generate</button></div></div>
      </section>
    </div>
  </main>
</div>
<div class="toast" id="toast"></div>
<script>
(function(){
  const $=(s,root=document)=>root.querySelector(s); const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
  const state={section:'overview',role:'Operations',savings:12.4,accepted:324,scenarioApplied:false};
  function cleanDoctypeText(){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode()){if(walker.currentNode.nodeValue.includes('<!DOCTYPE'))nodes.push(walker.currentNode)}nodes.forEach(n=>n.nodeValue=n.nodeValue.replace(/<!DOCTYPE html>/gi,''));}
  cleanDoctypeText();
  function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),2900)}
  function showSection(id){if(!$('#'+id))id='overview';state.section=id;$$('.section').forEach(s=>s.classList.toggle('active',s.id===id));$$('[data-section]').forEach(b=>b.classList.toggle('active',b.dataset.section===id));location.hash=id;closeMenu();window.scrollTo({top:0,behavior:'smooth'});}
  function closeMenu(){$('#sidebar').classList.remove('open');$('#overlay').classList.remove('show');document.body.style.overflow=''}
  $$('#nav button,[data-section-link]').forEach(b=>b.addEventListener('click',()=>showSection(b.dataset.section||b.dataset.sectionLink)));
  $('#mobileMenu').addEventListener('click',()=>{$('#sidebar').classList.add('open');$('#overlay').classList.add('show');document.body.style.overflow='hidden'});
  $('#overlay').addEventListener('click',closeMenu);
  $('#themeBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');$('#themeBtn').textContent=document.body.classList.contains('dark')?'☀️':'🌙'});
  $('#roleBtn').addEventListener('click',()=>{state.role=state.role==='Operations'?'Executive':'Operations';$('#roleBtn').textContent='👤 Role: '+state.role;toast('Role changed to '+state.role);showSection(state.role==='Executive'?'executive':'operations')});
  function updateKpis(addSavings=0){state.savings+=addSavings/1000000;state.accepted+=addSavings?1:0;$('#savingsKpi').textContent='$'+state.savings.toFixed(1)+'M';$('#acceptedKpi').textContent=state.accepted;const adop=Math.min(96,78+(state.accepted-324));$('#adoptionScore').textContent=adop+'%';$('#adoptionProgress').style.width=adop+'%';}
  function approve(btn){if(btn.disabled)return;btn.disabled=true;const original=btn.textContent;btn.textContent='Executing...';btn.classList.remove('btn-primary');btn.classList.add('btn-soft');setTimeout(()=>{btn.textContent='Completed';btn.classList.remove('btn-soft');btn.classList.add('btn-ghost');const save=Number(btn.dataset.save||0);updateKpis(save);toast('AI action completed. Estimated savings added: $'+save.toLocaleString());},650)}
  document.addEventListener('click',e=>{const a=e.target.closest('.approve');if(a)approve(a)});
  const answers={
    'produce':'Produce waste in Texas is up because heat is reducing shelf life by 18%, while inbound produce volume is 11% above forecast. Recommendation: markdown sensitive produce today and transfer excess to 28 high-demand stores. Expected savings: $18,400. Confidence: 96%.',
    'supplier':'Green Valley is the highest-risk supplier: OTIF 84%, delay risk high and estimated waste impact of $2.8M. Recommendation: activate backup supplier for perishables this week. Confidence: 91%.',
    'strawberry':'Strawberries in Store #1128 expire in 36 hours with 92% waste risk. Recommendation: apply 15% markdown today and shift 300 units to nearby stores. Estimated savings: $4,900. Confidence: 96%.'
  };
  function askAI(q){const chat=$('#chatbox');const user=document.createElement('div');user.className='bubble user';user.textContent=q;chat.appendChild(user);let key=q.toLowerCase().includes('supplier')?'supplier':q.toLowerCase().includes('straw')?'strawberry':'produce';const bot=document.createElement('div');bot.className='bubble';bot.innerHTML='<strong>FreshFlow AI:</strong> '+answers[key];setTimeout(()=>{chat.appendChild(bot);chat.scrollTop=chat.scrollHeight},250)}
  $('#askBtn').addEventListener('click',()=>{const input=$('#aiInput');const q=input.value.trim()||'Why is produce waste increasing in Texas?';askAI(q);input.value=''});
  $('#aiInput').addEventListener('keydown',e=>{if(e.key==='Enter')$('#askBtn').click()});$$('.quick').forEach(b=>b.addEventListener('click',()=>askAI(b.dataset.q)));
  const scenarioData={heat:['+22%','+31%','-18%','AI recommends increasing beverage replenishment, reducing sensitive produce orders and applying markdowns today in 184 Texas stores. Estimated savings: $2.8M.'],supplier:['+12%','-4%','-6%','AI recommends activating backup suppliers for produce and rerouting inventory from the nearest DC. Estimated savings: $1.4M.'],holiday:['+8%','+24%','-3%','AI recommends increasing bakery, dairy and beverage replenishment while extending fresh produce labor coverage. Estimated savings: $1.1M.'],fuel:['+3%','0%','0%','AI recommends consolidating low-volume routes and optimizing delivery windows. Estimated savings: $900K.']};
  $$('.scenario-btn').forEach(b=>b.addEventListener('click',()=>{ $$('.scenario-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); const d=scenarioData[b.dataset.scenario]; $('#simWaste').textContent=d[0]; $('#simDemand').textContent=d[1]; $('#simShelf').textContent=d[2]; $('#scenarioText').textContent=d[3]; state.scenarioApplied=false; $('#applyScenario').disabled=false; $('#applyScenario').textContent='Apply AI mitigation plan';}));
  $('#applyScenario').addEventListener('click',()=>{if(state.scenarioApplied)return;state.scenarioApplied=true;$('#applyScenario').disabled=true;$('#applyScenario').textContent='Plan applied';updateKpis(2800000);toast('Scenario mitigation approved. Projected savings added: $2.8M')});
  $$('.filter').forEach(b=>b.addEventListener('click',()=>{const f=b.dataset.filter;$$('#lossTable tr').forEach(r=>{r.style.display=(f==='all'||r.dataset.risk===f||r.dataset.category===f)?'':'none'});toast('Filter applied: '+f)}));
  $$('.twin-node').forEach(n=>n.addEventListener('click',()=>{$('#twinInfo').textContent=n.dataset.info;toast('Digital twin node selected')}));
  $$('.reportBtn').forEach(b=>b.addEventListener('click',()=>{b.textContent='Generating...';setTimeout(()=>{b.textContent='Ready';toast('Report generated for preview/export')},600)}));
  $('#globalSearch').addEventListener('input',e=>{const v=e.target.value.trim().toLowerCase(); if(v.length>2){toast('Searching connected data for: '+v)}});
  const initial=(location.hash||'#overview').replace('#',''); showSection(initial);
  window.addEventListener('hashchange',()=>showSection((location.hash||'#overview').replace('#','')));
})();
</script>
</body>
</html>
