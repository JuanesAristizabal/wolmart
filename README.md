<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Walmart FreshFlow AI v4 | Grocery Supply Chain Intelligence</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
:root{
  --walmart-blue:#0071ce; --walmart-dark:#004f9e; --spark:#ffc220; --ink:#111827;
  --muted:#64748b; --bg:#f3f6fb; --card:#ffffff; --line:#e2e8f0;
  --green:#16a34a; --red:#dc2626; --orange:#f97316; --purple:#7c3aed;
  --shadow:0 18px 45px rgba(15,23,42,.08); --radius:18px; --side:286px; --top:74px;
}
body.dark{
  --bg:#0b1220; --card:#111c2f; --ink:#eef4ff; --muted:#a8b3c7; --line:#24314a;
  --shadow:0 22px 50px rgba(0,0,0,.28);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;background:var(--bg);color:var(--ink);overflow-x:hidden;min-width:0}
img,svg,canvas{max-width:100%}
button,input,select{font:inherit} button{cursor:pointer} b,strong{font-weight:800}.app{min-height:100vh}
.sidebar{position:fixed;left:0;top:0;bottom:0;width:var(--side);background:linear-gradient(180deg,var(--walmart-dark),#012f64 60%,#00214b);color:#fff;padding:22px 18px;z-index:40;overflow:auto;transition:.25s ease}
.brand{display:flex;align-items:center;gap:12px;margin-bottom:22px}.spark{width:44px;height:44px;border-radius:14px;background:var(--spark);color:#064f9e;display:grid;place-items:center;font-weight:900;font-size:24px}.brand h1{font-size:18px;line-height:1.05}.brand p{font-size:12px;color:rgba(255,255,255,.72);margin-top:3px}.nav{display:grid;gap:7px}.nav button{border:0;background:transparent;color:rgba(255,255,255,.74);padding:12px 13px;border-radius:13px;text-align:left;display:flex;gap:10px;align-items:center;font-weight:750}.nav button:hover,.nav button.active{background:rgba(255,255,255,.15);color:#fff}.side-card{margin-top:22px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:15px}.side-card small{opacity:.72}.side-card strong{display:block;margin-top:6px;color:var(--spark);font-size:19px}.side-card .mini-line{height:6px;border-radius:999px;background:rgba(255,255,255,.18);margin-top:12px;overflow:hidden}.side-card .mini-line i{display:block;width:78%;height:100%;background:var(--spark);border-radius:inherit}
.topbar{position:fixed;left:var(--side);right:0;top:0;height:var(--top);background:rgba(255,255,255,.86);backdrop-filter:blur(14px);border-bottom:1px solid var(--line);z-index:30;display:flex;gap:12px;align-items:center;padding:0 clamp(14px,2vw,24px);min-width:0}.dark .topbar{background:rgba(17,28,47,.84)}.menu{display:none;border:0;background:var(--walmart-blue);color:white;border-radius:12px;padding:10px 12px;font-weight:900}.search{flex:1;position:relative;min-width:160px}.search input{width:100%;border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:14px;padding:12px 14px 12px 42px;outline:0}.search input:focus{box-shadow:0 0 0 4px rgba(0,113,206,.12);border-color:var(--walmart-blue)}.search span{position:absolute;left:14px;top:10px}.pill{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:10px 13px;display:flex;gap:8px;align-items:center;white-space:nowrap;font-weight:750}.notif{position:relative}.dot{position:absolute;right:8px;top:8px;width:9px;height:9px;border-radius:50%;background:var(--red);border:2px solid var(--card)}
.main{margin-left:var(--side);padding:calc(var(--top) + 18px) clamp(16px,2vw,32px) 44px;min-width:0}.section{display:none;width:100%;max-width:1500px;margin:0 auto}.section.active{display:block;animation:fade .22s ease}@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.panel{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:22px}.section-title{display:flex;align-items:center;justify-content:space-between;gap:16px;margin:18px 0}.section-title h2{font-size:22px}.sub{color:var(--muted);font-size:14px;line-height:1.55;margin-top:5px}.eyebrow{color:var(--spark);font-size:12px;text-transform:uppercase;letter-spacing:.12em;font-weight:900}.btn{border:0;border-radius:13px;padding:11px 14px;font-weight:850;transition:.18s ease}.btn:hover{transform:translateY(-1px)}.btn.blue{background:var(--walmart-blue);color:white}.btn.primary{background:var(--spark);color:#092c57}.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--ink)}.btn.light{background:#eef5ff;color:var(--walmart-dark)}.dark .btn.light{background:#183154;color:#c7dcff}.btn:disabled{opacity:.55;cursor:not-allowed;transform:none}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}.hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,360px);gap:18px;margin-bottom:18px;align-items:stretch;width:100%}.hero-main{background:linear-gradient(135deg,var(--walmart-blue),var(--walmart-dark));color:#fff;position:relative;overflow:hidden}.hero-main:after{content:"";position:absolute;right:-100px;top:-140px;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(255,194,32,.4),transparent 70%)}.hero-main>*{position:relative}.hero h2{font-size:clamp(28px,4vw,44px);line-height:1.03;margin:12px 0}.hero p{color:rgba(255,255,255,.84);max-width:780px}.status-row{display:grid;gap:12px}.status{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:13px;border:1px solid var(--line);border-radius:15px}.badge{font-size:12px;font-weight:850;padding:5px 9px;border-radius:999px;display:inline-flex;align-items:center;gap:5px;white-space:nowrap}.green{background:#dcfce7;color:#166534}.red{background:#fee2e2;color:#991b1b}.orange{background:#ffedd5;color:#9a3412}.blueb{background:#dbeafe;color:#1e40af}.purple{background:#ede9fe;color:#5b21b6}.dark .green{background:rgba(22,163,74,.18);color:#86efac}.dark .red{background:rgba(220,38,38,.18);color:#fca5a5}.dark .orange{background:rgba(249,115,22,.18);color:#fdba74}.dark .blueb{background:rgba(0,113,206,.22);color:#bfdbfe}.dark .purple{background:rgba(124,58,237,.2);color:#ddd6fe}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;margin:18px 0}.kpi{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;box-shadow:var(--shadow);min-width:0}.kpi small{color:var(--muted);font-weight:750;display:block;line-height:1.25;word-break:normal}.kpi h3{font-size:clamp(20px,2vw,26px);margin-top:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.trend{font-size:12px;color:var(--green);font-weight:850;margin-top:6px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.grid-3{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:18px}.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.tabs{display:flex;gap:8px;background:var(--card);border:1px solid var(--line);border-radius:15px;padding:5px}.tabs button{border:0;background:transparent;color:var(--muted);border-radius:11px;padding:10px 14px;font-weight:850}.tabs button.active{background:var(--walmart-blue);color:#fff}
.chart{height:225px;display:flex;align-items:end;gap:10px;padding-top:20px}.bar{flex:1;background:linear-gradient(180deg,var(--walmart-blue),#8ec9ff);border-radius:10px 10px 4px 4px;min-height:34px;position:relative;transition:.25s}.bar span{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);font-size:11px;font-weight:850;margin-bottom:6px;white-space:nowrap}.progress{height:10px;background:#e9eef6;border-radius:99px;overflow:hidden}.progress i{display:block;height:100%;width:0;background:var(--walmart-blue);border-radius:99px;transition:.5s}.heatmap{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.region{border:1px solid var(--line);border-radius:15px;padding:16px;min-height:105px}.region b{display:block}.region .score{font-size:26px;font-weight:900;margin-top:12px}.risk-high{background:#fee2e2}.risk-mid{background:#ffedd5}.risk-low{background:#dcfce7}.dark .risk-high{background:rgba(220,38,38,.18)}.dark .risk-mid{background:rgba(249,115,22,.18)}.dark .risk-low{background:rgba(22,163,74,.18)}
.table-tools{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px}.table-tools input,.table-tools select{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:12px;padding:10px 12px}.table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:16px}table{width:100%;border-collapse:collapse;min-width:840px;background:var(--card)}th,td{text-align:left;padding:14px;border-bottom:1px solid var(--line);font-size:13px;vertical-align:middle}th{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.05em}tr:last-child td{border-bottom:0}.ai-card{border:1px solid var(--line);border-radius:16px;padding:16px;background:var(--card);margin-bottom:12px}.ai-card.done{opacity:.72;background:linear-gradient(0deg,rgba(22,163,74,.06),rgba(22,163,74,.06)),var(--card)}.ai-card .top{display:flex;justify-content:space-between;gap:10px}.ai-card h3{font-size:16px}.meta{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.explain{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:12px}.why{background:var(--bg);border:1px solid var(--line);border-radius:13px;padding:10px;font-size:12px}.timeline{display:grid;gap:12px;max-height:330px;overflow:auto;padding-right:4px}.event{display:grid;grid-template-columns:65px 1fr;gap:12px}.event time{font-weight:900;color:var(--walmart-blue)}.event div{border-left:3px solid var(--walmart-blue);padding-left:12px}.dataflow{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;align-items:stretch}.node{border:1px solid var(--line);background:var(--card);border-radius:16px;padding:14px;text-align:center;font-weight:900;display:grid;place-content:center}.node small{color:var(--muted);font-weight:700}.assistant-box{display:grid;gap:12px}.chat{height:260px;overflow:auto;background:var(--bg);border:1px solid var(--line);border-radius:16px;padding:14px;display:flex;flex-direction:column;gap:12px}.msg{max-width:88%;padding:12px 14px;border-radius:16px;font-size:14px;line-height:1.5}.user{align-self:flex-end;background:var(--walmart-blue);color:white}.bot{align-self:flex-start;background:var(--card);border:1px solid var(--line)}.chat-input{display:flex;gap:10px}.chat-input input{flex:1;border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:14px;padding:12px}.quick-prompts{display:flex;gap:8px;flex-wrap:wrap}.quick-prompts button{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:8px 10px;font-size:12px;font-weight:800}.sim-grid{display:grid;grid-template-columns:250px 1fr;gap:18px}.scenario-list{display:grid;gap:10px}.scenario{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:14px;padding:13px;text-align:left;font-weight:800}.scenario.active{border-color:var(--walmart-blue);box-shadow:0 0 0 3px rgba(0,113,206,.12)}.result-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.mini{background:var(--bg);border:1px solid var(--line);border-radius:14px;padding:14px}.mini b{font-size:22px}.decision-stepper{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:14px}.step{border:1px solid var(--line);border-radius:14px;padding:12px;text-align:center;background:var(--bg);font-weight:850;font-size:12px}.step.active{background:rgba(0,113,206,.12);border-color:var(--walmart-blue);color:var(--walmart-dark)}.dark .step.active{color:#bfdbfe}
.twin{position:relative;min-height:360px;background:radial-gradient(circle at 20% 20%,rgba(0,113,206,.08),transparent 28%),radial-gradient(circle at 80% 70%,rgba(255,194,32,.16),transparent 28%),var(--card);overflow:hidden}.twin-node{position:absolute;width:145px;border:1px solid var(--line);background:var(--card);border-radius:16px;padding:12px;text-align:center;box-shadow:var(--shadow);cursor:pointer;z-index:2;transition:.18s}.twin-node:hover,.twin-node.active{transform:translateY(-3px);box-shadow:0 20px 45px rgba(0,113,206,.18);border-color:var(--walmart-blue)}.twin-node b{display:block}.twin-node small{color:var(--muted)}.n1{left:4%;top:40%}.n2{left:27%;top:16%}.n3{left:48%;top:50%}.n4{left:68%;top:18%}.n5{right:4%;top:57%}.route{position:absolute;height:3px;background:linear-gradient(90deg,var(--walmart-blue),var(--spark));transform-origin:left;z-index:1}.r1{left:17%;top:47%;width:180px;transform:rotate(-24deg)}.r2{left:38%;top:33%;width:175px;transform:rotate(34deg)}.r3{left:58%;top:55%;width:132px;transform:rotate(-34deg)}.r4{left:77%;top:40%;width:106px;transform:rotate(46deg)}.detail-box{margin-top:18px;background:var(--bg);border:1px solid var(--line);border-radius:16px;padding:16px}.report-card{min-height:180px;display:flex;flex-direction:column;justify-content:space-between}.toast{position:fixed;right:22px;bottom:22px;background:#101828;color:#fff;border-radius:14px;padding:14px 16px;box-shadow:var(--shadow);z-index:80;transform:translateY(120px);opacity:0;transition:.24s;max-width:360px}.toast.show{transform:translateY(0);opacity:1}.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:35}.overlay.show{display:block}.modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:90;padding:20px}.modal.show{display:flex}.modal-card{max-width:520px;width:100%;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:20px;box-shadow:var(--shadow);padding:24px}.modal-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.48);z-index:-1}
@media(max-width:1180px){.grid,.grid-3{grid-template-columns:1fr}.hero{grid-template-columns:1fr}.dataflow,.decision-stepper{grid-template-columns:repeat(3,1fr)}.explain{grid-template-columns:repeat(2,1fr)}}
@media(max-width:860px){:root{--top:66px;--side:270px}.sidebar{transform:translateX(-104%);box-shadow:24px 0 60px rgba(0,0,0,.24)}.sidebar.open{transform:translateX(0)}.topbar{left:0;padding:0 12px}.menu{display:block}.main{margin-left:0;padding:calc(var(--top) + 14px) 12px 30px}.pill.hide-mobile{display:none}.heatmap,.grid-4,.result-cards{grid-template-columns:repeat(2,1fr)}.sim-grid{grid-template-columns:1fr}.chat-input{flex-direction:column}.section-title{align-items:flex-start;flex-direction:column}.tabs{width:100%;overflow:auto}.tabs button{flex:1;min-width:max-content}.twin{min-height:auto;display:grid;gap:12px}.twin-node{position:static;width:100%}.route{display:none}.toast{left:14px;right:14px;bottom:14px;max-width:none}}
@media(max-width:560px){.search{display:none}.kpis,.heatmap,.grid-4,.result-cards,.dataflow,.decision-stepper,.explain{grid-template-columns:1fr}.hero{gap:12px}.hero h2{font-size:28px}.panel{padding:16px;border-radius:16px}.status{align-items:flex-start;flex-direction:column}.ai-card .top{flex-direction:column}.btn{width:100%;justify-content:center}.actions{width:100%}.nav button{padding:13px}.event{grid-template-columns:50px 1fr}.topbar{gap:8px}.pill{padding:9px 10px;font-size:13px}.brand h1{font-size:17px}table{min-width:760px}.hero-main:after{width:220px;height:220px;right:-90px;top:-100px}}


/* ===== V5 MOBILE POLISH ===== */
@media(max-width:720px){
  :root{--top:68px;}
  body{background:#f4f7fb;}
  .topbar{height:68px;justify-content:flex-start;border-bottom:1px solid #dfe7f2;}
  .menu{width:42px;height:42px;padding:0;display:grid;place-items:center;font-size:20px;box-shadow:0 6px 18px rgba(0,113,206,.22)}
  .pill{width:42px;height:42px;padding:0;display:grid;place-items:center;border-radius:999px;font-size:15px;}
  .pill#roleBtn{display:none;}
  .main{padding:calc(var(--top) + 14px) 14px 34px;}
  .section{max-width:none;margin:0;width:100%;}
  .hero{display:block;margin:0 0 14px;width:100%;}
  .hero .panel{box-shadow:0 14px 38px rgba(15,23,42,.08);}
  .hero-main{padding:20px 16px 16px;border-radius:22px;width:100%;}
  .hero-main:after{width:170px;height:170px;right:-65px;top:-70px;opacity:.9;}
  .hero .eyebrow{display:inline-flex;max-width:100%;line-height:1.45;font-size:10.5px;letter-spacing:.08em;color:#ffd45c;}
  .hero h2{font-size:25px;line-height:1.08;letter-spacing:-.045em;margin:12px 0 10px;max-width:330px;}
  .hero p{font-size:13.8px;line-height:1.55;color:rgba(255,255,255,.88);}
  .hero .actions{gap:10px;margin-top:16px;}
  .hero .btn{min-height:46px;border-radius:14px;font-size:14px;padding:12px 14px;}
  .hero .btn.ghost{background:rgba(255,255,255,.08)!important;}
  .hero > .panel:not(.hero-main){margin-top:12px;padding:16px;border-radius:20px;}
  .hero > .panel:not(.hero-main) h3{font-size:17px;}
  .hero > .panel:not(.hero-main) .sub{font-size:12px;}
  .status-row{grid-template-columns:1fr 1fr;gap:10px!important;}
  .status{padding:11px;border-radius:14px;gap:6px;min-height:70px;}
  .status span:first-child{font-size:12px;color:var(--muted);line-height:1.2;}
  .status b{font-size:15px;}
  .badge{font-size:10.5px;padding:4px 7px;}
  .kpis{grid-template-columns:1fr 1fr;gap:10px;margin:14px 0;}
  .kpi{padding:13px;border-radius:15px;}
  .kpi small{font-size:11px;line-height:1.25;}
  .kpi h3{font-size:18px;margin-top:7px;}
  .trend{font-size:10.5px;}
  .section-title{margin:14px 0 10px;}
  .section-title h2{font-size:18px;}
  .sub{font-size:12.5px;}
}
@media(max-width:390px){
  .main{padding-left:10px;padding-right:10px;}
  .hero h2{font-size:23px;}
  .hero-main{padding:18px 14px 14px;}
  .status-row{grid-template-columns:1fr;}
  .kpis{grid-template-columns:1fr;}
}

</style>
</head>
<body>
<div class="app">
  <aside class="sidebar" id="sidebar">
    <div class="brand"><div class="spark">✦</div><div><h1>Walmart<br>FreshFlow AI</h1><p>Internal supply chain platform</p></div></div>
    <nav class="nav" id="nav">
      <button class="active" data-section="overview">🏠 Overview</button>
      <button data-section="executive">📊 Executive Intelligence</button>
      <button data-section="operations">⚡ Operations Center</button>
      <button data-section="ai">🧠 AI Command Center</button>
      <button data-section="loss">🥬 Grocery Loss Center</button>
      <button data-section="twin">🛰️ Digital Twin</button>
      <button data-section="suppliers">🤝 Suppliers</button>
      <button data-section="reports">📄 Reports</button>
    </nav>
    <div class="side-card">
      <small>AI adoption score</small><strong id="sideScore">78%</strong><div class="mini-line"><i id="sideProgress"></i></div>
      <p class="sub" style="color:rgba(255,255,255,.72);font-size:12px">Recommendations accepted across high-risk grocery categories.</p>
    </div>
  </aside>
  <div class="overlay" id="overlay"></div>
  <header class="topbar">
    <button class="menu" id="menuBtn" aria-label="Open menu">☰</button>
    <div class="search"><span>🔎</span><input id="searchInput" placeholder="Search store, SKU, supplier, truck, report..." /></div>
    <button class="pill hide-mobile" id="roleBtn">👤 Role: Executive</button>
    <button class="pill" id="darkBtn">🌙</button>
    <button class="pill notif" id="notifBtn">🔔<span class="dot" id="notifDot"></span></button>
  </header>
  <main class="main">
    <section class="section active" id="overview">
      <div class="hero">
        <div class="panel hero-main">
          <span class="eyebrow">Walmart Global Tech · Grocery Supply Chain</span>
          <h2>AI-powered visibility for fresher shelves, lower grocery losses and higher margins.</h2>
          <p>FreshFlow AI connects store inventory, POS data, supplier performance, truck temperature, weather and local demand signals to recommend actions before groceries become losses.</p>
          <div class="actions"><button class="btn primary" onclick="go('operations')">View operational actions</button><button class="btn ghost" style="color:white;border-color:rgba(255,255,255,.35)" onclick="go('ai')">Ask FreshFlow AI</button></div>
        </div>
        <div class="panel">
          <h3>Live network status</h3><p class="sub">Updated <span id="lastUpdate">2 min ago</span></p>
          <div class="status-row" style="margin-top:14px">
            <div class="status"><span>Connected stores</span><b>4,756</b></div>
            <div class="status"><span>Trucks monitored</span><b>8,921</b></div>
            <div class="status"><span>Suppliers online</span><b>312</b></div>
            <div class="status"><span>Critical alerts</span><span class="badge red" id="alertCount">3 active</span></div>
          </div>
        </div>
      </div>
      <div class="kpis">
        <div class="kpi"><small>Revenue Protected</small><h3 class="num" data-prefix="$" data-value="42.8" data-suffix="M">$0M</h3><p class="trend">+12.3% vs last month</p></div>
        <div class="kpi"><small>Grocery Waste Reduced</small><h3 class="num" data-prefix="" data-value="18.4" data-suffix="%">0%</h3><p class="trend">AI prevention</p></div>
        <div class="kpi"><small>Forecast Accuracy</small><h3 class="num" data-prefix="" data-value="96.2" data-suffix="%">0%</h3><p class="trend">SKU-store level</p></div>
        <div class="kpi"><small>Inventory Accuracy</small><h3 class="num" data-prefix="" data-value="94.8" data-suffix="%">0%</h3><p class="trend">Real-time sync</p></div>
        <div class="kpi"><small>AI Savings</small><h3 id="savingsKpi">$12.40M</h3><p class="trend">Approved actions</p></div>
        <div class="kpi"><small>CO₂ Avoided</small><h3 class="num" data-prefix="" data-value="18.2" data-suffix="K t">0K t</h3><p class="trend">ESG impact</p></div>
      </div>
      <div class="grid">
        <div class="panel"><div class="section-title"><div><h2>AI Decision Engine</h2><p class="sub">Data → prediction → recommendation → approval → execution → learning.</p></div></div><div class="dataflow"><div class="node">POS<br><small>Sales</small></div><div class="node">IoT<br><small>Temperature</small></div><div class="node">AI<br><small>Prediction</small></div><div class="node">Human<br><small>Approval</small></div><div class="node">Action<br><small>Executed</small></div><div class="node">Learning<br><small>Model improves</small></div></div></div>
        <div class="panel"><div class="section-title"><div><h2>Regional risk heatmap</h2><p class="sub">Grocery loss risk by region.</p></div></div><div class="heatmap"><div class="region risk-low"><b>West</b><div class="score">82</div><small>Low risk</small></div><div class="region risk-mid"><b>South</b><div class="score">71</div><small>Produce risk</small></div><div class="region risk-high"><b>Texas</b><div class="score">58</div><small>Heat wave</small></div><div class="region risk-low"><b>East</b><div class="score">88</div><small>Healthy</small></div></div></div>
      </div>
    </section>

    <section class="section" id="executive">
      <div class="section-title"><div><h2>Executive Intelligence</h2><p class="sub">C-level view: financial impact, strategic risk, ROI and ESG outcomes.</p></div><div class="tabs" id="periodTabs"><button class="active" data-period="weekly">Weekly</button><button data-period="monthly">Monthly</button><button data-period="quarterly">Quarterly</button></div></div>
      <div class="grid-3">
        <div class="panel"><h2>Financial impact trend</h2><p class="sub" id="chartLabel">Weekly savings generated by approved AI recommendations.</p><div class="chart" id="chart"></div></div>
        <div class="panel"><h2>AI ROI</h2><p class="sub">Projected return from grocery loss prevention.</p><div class="kpi" style="box-shadow:none;margin-top:12px"><small>Annual savings projection</small><h3 id="annualProjection">$48.6M</h3><p class="trend" id="payback">Payback: 5.2 months</p></div><div class="progress"><i id="roiBar"></i></div><p class="sub" id="roiText" style="margin-top:8px">82% of target reached</p></div>
        <div class="panel"><h2>Strategic brief</h2><p class="sub" id="strategicBrief">This week AI prevented an estimated <b>$2.8M</b> in grocery losses across <b>482 stores</b>, mainly from dynamic markdowns, product transfers and supplier risk alerts.</p><div class="actions"><button class="btn blue" onclick="makeReport('Executive ROI Summary')">Generate report</button></div></div>
      </div>
      <div class="panel" style="margin-top:18px"><h2>Top executive recommendations</h2><div id="execRecs"></div></div>
    </section>

    <section class="section" id="operations">
      <div class="section-title"><div><h2>Operational Command Center</h2><p class="sub">Daily actions for store managers, logistics teams, DC managers and category leaders.</p></div><button class="btn blue" onclick="approveAll()">Approve all high-confidence actions</button></div>
      <div class="grid">
        <div class="panel"><h2>Critical alerts</h2><div class="timeline" id="activityLog"></div></div>
        <div class="panel"><h2>Cold chain monitor</h2><div class="table-wrap"><table><thead><tr><th>Truck</th><th>Temp</th><th>ETA</th><th>Risk</th><th>Action</th></tr></thead><tbody id="coldTable"></tbody></table></div></div>
      </div>
      <div class="panel" style="margin-top:18px"><h2>AI Action Center</h2><p class="sub">Explainable, human-in-the-loop recommendations. Approvals update savings and activity logs.</p><div id="actionList" style="margin-top:14px"></div></div>
    </section>

    <section class="section" id="ai">
      <div class="section-title"><div><h2>AI Command Center</h2><p class="sub">Ask questions, simulate disruptions and approve explainable recommendations.</p></div></div>
      <div class="grid">
        <div class="panel assistant-box"><h2>Ask Walmart AI</h2><div class="quick-prompts"><button onclick="usePrompt('Why is produce waste increasing in Texas?')">Produce waste in Texas</button><button onclick="usePrompt('Which supplier is creating the highest waste impact?')">Supplier risk</button><button onclick="usePrompt('What should we do with strawberries in Florida?')">Strawberry action</button></div><div class="chat" id="chat"><div class="msg bot"><b>FreshFlow AI:</b> Ask me about waste, demand, inventory, suppliers or logistics risk.</div></div><div class="chat-input"><input id="aiInput" placeholder="Example: Why is produce waste increasing in Texas?"/><button class="btn blue" onclick="askAI()">Ask AI</button></div></div>
        <div class="panel"><h2>Scenario Simulator</h2><p class="sub">Select a disruption and see the predicted impact.</p><div class="sim-grid" style="margin-top:14px"><div class="scenario-list"><button class="scenario active" data-scenario="heat">🌡️ Heat wave in Texas</button><button class="scenario" data-scenario="supplier">🚚 Supplier delay</button><button class="scenario" data-scenario="holiday">🛒 Holiday demand spike</button><button class="scenario" data-scenario="fuel">⛽ Fuel price +12%</button></div><div><div class="result-cards" id="scenarioCards"></div><p class="sub" id="scenarioText" style="margin-top:14px"></p><div class="decision-stepper" id="decisionStepper"></div><div class="actions"><button class="btn blue" onclick="applyScenario()">Apply AI mitigation plan</button><button class="btn ghost" onclick="makeReport('Scenario Simulation')">Export scenario</button></div></div></div></div>
      </div>
    </section>

    <section class="section" id="loss">
      <div class="section-title"><div><h2>Grocery Loss Center</h2><p class="sub">Fresh categories have short shelf life, high volatility and direct margin impact.</p></div></div>
      <div class="panel"><div class="table-tools"><input id="lossSearch" placeholder="Filter by product, SKU or category..."/><select id="riskFilter"><option value="all">All risks</option><option value="High">High only</option><option value="Medium">Medium only</option><option value="Low">Low only</option></select></div><div class="table-wrap"><table><thead><tr><th>SKU</th><th>Product</th><th>Category</th><th>Shelf life</th><th>Waste risk</th><th>Expected loss</th><th>AI recommendation</th><th>Status</th></tr></thead><tbody id="lossTable"></tbody></table></div></div>
    </section>

    <section class="section" id="twin">
      <div class="section-title"><div><h2>Digital Twin</h2><p class="sub">Simulated network: supplier → distribution center → truck → store → customer.</p></div></div>
      <div class="panel twin" id="twinPanel"><div class="route r1"></div><div class="route r2"></div><div class="route r3"></div><div class="route r4"></div><button class="twin-node n1" data-node="supplier">🌱<b>Supplier</b><small>Fresh Farms</small></button><button class="twin-node n2" data-node="dc">🏭<b>DC Atlanta</b><small>87% capacity</small></button><button class="twin-node n3" data-node="truck">🚚<b>Truck #284</b><small>Temp alert</small></button><button class="twin-node n4" data-node="store">🏬<b>Store #1128</b><small>High risk</small></button><button class="twin-node n5" data-node="demand">🛒<b>Demand</b><small>Forecast live</small></button></div><div class="detail-box" id="twinDetail"></div>
    </section>

    <section class="section" id="suppliers">
      <div class="section-title"><div><h2>Supplier Intelligence</h2><p class="sub">Monitor reliability, quality, delay risk and waste impact.</p></div></div>
      <div class="panel"><div class="table-wrap"><table><thead><tr><th>Supplier</th><th>OTIF</th><th>Quality</th><th>Lead time</th><th>Risk</th><th>Waste impact</th><th>AI action</th></tr></thead><tbody id="supplierTable"></tbody></table></div></div>
    </section>

    <section class="section" id="reports">
      <div class="section-title"><div><h2>Reports</h2><p class="sub">Executive and operational summaries generated from the AI decision engine.</p></div></div>
      <div class="grid-3"><div class="panel report-card"><div><h2>Weekly Grocery Loss Report</h2><p class="sub">Waste trends, top SKUs, regions and approved actions.</p></div><button class="btn blue" onclick="makeReport('Weekly Grocery Loss Report')">Download PDF</button></div><div class="panel report-card"><div><h2>AI Savings Report</h2><p class="sub">ROI, approved recommendations and savings attribution.</p></div><button class="btn blue" onclick="makeReport('AI Savings Report')">Export Excel</button></div><div class="panel report-card"><div><h2>Sustainability Report</h2><p class="sub">Food rescued, CO₂ avoided and water saved.</p></div><button class="btn blue" onclick="makeReport('Sustainability Report')">Generate ESG</button></div></div>
      <div class="panel" style="margin-top:18px"><h2>Generated report queue</h2><div id="reportQueue" class="timeline" style="margin-top:12px"></div></div>
    </section>
  </main>
</div>
<div class="toast" id="toast"></div>
<div class="modal" id="modal"><div class="modal-backdrop" onclick="closeModal()"></div><div class="modal-card"><h2 id="modalTitle">Report generated</h2><p class="sub" id="modalText"></p><div class="actions"><button class="btn blue" onclick="closeModal()">Done</button></div></div></div>
<script>
const $=(s,ctx=document)=>ctx.querySelector(s);const $$=(s,ctx=document)=>[...ctx.querySelectorAll(s)];
const state={approvedSavings:0,role:'Executive',activeScenario:'heat',reports:[],activities:[
  {time:'08:12',title:'Cold chain interruption',text:'Truck #284 temperature reached 7°C. Max allowed: 4°C.'},
  {time:'08:34',title:'Produce waste risk',text:'Store #1128 has strawberries expiring in 36 hours.'},
  {time:'09:05',title:'Supplier delay',text:'Fresh Farms Co. late delivery detected at Atlanta DC.'}
]};
const actions=[
 {id:1,title:'Apply 15% markdown to strawberries',store:'Store #1128 · Florida',savings:4900,conf:96,risk:'High',why:['Shelf life 36h','Demand -12%','Excess inventory','Heat exposure'],status:'Pending'},
 {id:2,title:'Transfer 1,250 bananas to Orlando stores',store:'Miami → Orlando',savings:8300,conf:97,risk:'Medium',why:['Demand +24%','Shelf life 3d','Local event','Nearby route'],status:'Pending'},
 {id:3,title:'Reduce tomorrow dairy order by 7%',store:'Dallas region',savings:7200,conf:93,risk:'High',why:['Sales drop','Overstock','Supplier early','Lower traffic'],status:'Pending'},
 {id:4,title:'Activate backup supplier for Green Valley',store:'Atlanta DC',savings:28000,conf:91,risk:'Critical',why:['OTIF down','Delay 18h','Quality risk','DC shortage'],status:'Pending'}
];
const loss=[
 {sku:'1029',product:'Strawberries',category:'Produce',life:'36h',risk:92,loss:4900,rec:'Markdown 15%',level:'High',status:'Review'},
 {sku:'4102',product:'Milk',category:'Dairy',life:'2 days',risk:87,loss:7200,rec:'Transfer inventory',level:'High',status:'Review'},
 {sku:'8821',product:'Bread',category:'Bakery',life:'18h',risk:81,loss:3100,rec:'Reduce tomorrow order',level:'Medium',status:'Review'},
 {sku:'7330',product:'Avocados',category:'Produce',life:'3 days',risk:76,loss:2800,rec:'Bundle promotion',level:'Medium',status:'Monitor'},
 {sku:'5510',product:'Fresh chicken',category:'Meat',life:'48h',risk:84,loss:6600,rec:'Move to high-demand stores',level:'High',status:'Review'},
 {sku:'6301',product:'Yogurt multipack',category:'Dairy',life:'5 days',risk:58,loss:1900,rec:'Hold current price',level:'Low',status:'Monitor'}
];
const suppliers=[
 ['Fresh Farms Co.','91%','94%','2.8 days','Medium','$1.2M','Monitor delays'],['DairyBest','97%','96%','1.4 days','Low','$420K','Keep allocation'],['Green Valley Produce','84%','88%','3.9 days','High','$2.8M','Activate backup supplier'],['Bakery Source Inc.','89%','91%','2.1 days','Medium','$740K','Renegotiate schedule']
];
const cold=[['#284','7°C','42m','Critical','Reroute'],['#109','3°C','1h 20m','Normal','Monitor'],['#512','5°C','31m','Warning','Check sensor'],['#618','4°C','2h 05m','Normal','Monitor']];
const periodData={weekly:{label:'Weekly savings generated by approved AI recommendations.',bars:[1.1,1.4,1.8,2.2,2.7,3.1],annual:'$48.6M',payback:'Payback: 5.2 months',roi:82,brief:'This week AI prevented an estimated <b>$2.8M</b> in grocery losses across <b>482 stores</b>, mainly from dynamic markdowns, product transfers and supplier risk alerts.'},monthly:{label:'Monthly trend by completed AI interventions.',bars:[7.8,8.4,9.9,10.6,12.1,14.3],annual:'$56.8M',payback:'Payback: 4.6 months',roi:88,brief:'This month FreshFlow AI reduced grocery waste across <b>1,940 stores</b>, with produce and dairy generating the strongest margin recovery.'},quarterly:{label:'Quarterly executive impact projection.',bars:[22,27,31,36,42,48.6],annual:'$64.2M',payback:'Payback: 4.1 months',roi:93,brief:'Quarterly projections show the strongest opportunity in dynamic markdown expansion, supplier risk mitigation and AI-powered inventory transfers.'}};
const scenarioData={heat:{cards:[['Waste risk','+22%','red'],['Beverage demand','+31%','green'],['Produce shelf life','-18%','orange']],text:'AI recommends increasing beverage replenishment, reducing sensitive produce orders and applying markdowns today in 184 Texas stores. Estimated savings: $2.8M.'},supplier:{cards:[['Delay risk','+34%','red'],['Stockout risk','+17%','orange'],['Backup cost','+$420K','orange']],text:'AI recommends activating backup supplier DairyBest and reallocating inventory from Dallas DC. Expected avoided loss: $1.9M.'},holiday:{cards:[['Demand spike','+28%','green'],['Stockout risk','+21%','orange'],['Projected sales','+$8.4M','green']],text:'AI recommends increasing replenishment for beverages, snacks and grill products while reducing bakery orders after the weekend.'},fuel:{cards:[['Logistics cost','+12%','red'],['Route efficiency','-7%','orange'],['Optimized savings','$740K','green']],text:'AI recommends route consolidation across Southeast DCs and night-shift dispatch to reduce fuel exposure.'}};
const twinData={supplier:'<b>Supplier: Fresh Farms Co.</b><p class="sub">OTIF 91% · Quality 94% · Delay risk medium. AI suggests monitoring dock arrivals and preparing backup allocation if delay exceeds 3 hours.</p>',dc:'<b>Distribution Center: Atlanta DC</b><p class="sub">Capacity 87% · 2 delayed docks · Produce throughput under pressure. AI recommends prioritizing short shelf-life SKUs.</p>',truck:'<b>Truck #284</b><p class="sub">Temperature alert: 7°C vs max 4°C · ETA 42m. AI recommends rerouting to nearest cold-chain inspection point.</p>',store:'<b>Store #1128</b><p class="sub">High produce risk · strawberries expire in 36h · expected loss $4,900. Recommended action: markdown today.</p>',demand:'<b>Demand Forecast</b><p class="sub">Beverages +18%, produce -7%, bakery -5%. Driven by local weather and weekday traffic patterns.</p>'};
function go(id){$$('.section').forEach(s=>s.classList.remove('active'));const target=$('#'+id);if(target)target.classList.add('active');$$('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.section===id));closeMenu();window.scrollTo({top:0,behavior:'smooth'});} 
function money(n){return '$'+n.toLocaleString();}
function riskClass(level){return level==='Critical'||level==='High'?'red':level==='Medium'||level==='Warning'?'orange':'green';}
function renderActions(){const card=a=>`<div class="ai-card ${a.status==='Approved'?'done':''}" data-id="${a.id}"><div class="top"><div><h3>${a.title}</h3><p class="sub">${a.store}</p></div><span class="badge ${riskClass(a.risk)}">${a.risk}</span></div><div class="meta"><span class="badge blueb">Savings ${money(a.savings)}</span><span class="badge green">Confidence ${a.conf}%</span><span class="badge purple">Human-in-the-loop</span><span class="badge ${a.status==='Approved'?'green':'orange'}">${a.status}</span></div><div class="explain">${a.why.map(w=>`<div class="why">✓ ${w}</div>`).join('')}</div><div class="actions"><button class="btn blue" ${a.status==='Approved'?'disabled':''} onclick="approve(${a.id})">${a.status==='Approved'?'Approved':'Approve'}</button><button class="btn ghost" onclick="reviewAction(${a.id})">Details</button><button class="btn ghost" onclick="go('ai')">Simulate</button></div></div>`;
  $('#actionList').innerHTML=actions.map(card).join('');
  $('#execRecs').innerHTML=actions.slice(0,3).map(a=>`<div class="ai-card ${a.status==='Approved'?'done':''}"><div class="top"><div><h3>${a.title}</h3><p class="sub">Strategic impact: ${a.store}</p></div><span class="badge ${riskClass(a.risk)}">${a.risk}</span></div><div class="meta"><span class="badge blueb">Projected savings ${money(a.savings)}</span><span class="badge green">Confidence ${a.conf}%</span></div><div class="actions"><button class="btn blue" ${a.status==='Approved'?'disabled':''} onclick="approve(${a.id})">${a.status==='Approved'?'Approved':'Approve strategy'}</button><button class="btn ghost" onclick="reviewAction(${a.id})">Details</button></div></div>`).join('');
}
function renderLoss(){const q=($('#lossSearch')?.value||'').toLowerCase();const f=$('#riskFilter')?.value||'all';const rows=loss.filter(r=>(f==='all'||r.level===f)&&[r.sku,r.product,r.category].join(' ').toLowerCase().includes(q));$('#lossTable').innerHTML=rows.map(r=>`<tr><td>${r.sku}</td><td><b>${r.product}</b></td><td>${r.category}</td><td>${r.life}</td><td><span class="badge ${riskClass(r.level)}">${r.risk}%</span></td><td>${money(r.loss)}</td><td>${r.rec}</td><td><button class="btn light" onclick="approveLoss('${r.product}',${r.loss})">Approve</button></td></tr>`).join('')||`<tr><td colspan="8">No products match this filter.</td></tr>`;}
function renderTables(){ $('#coldTable').innerHTML=cold.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><span class="badge ${riskClass(r[3])}">${r[3]}</span></td><td>${r[4]}</td></tr>`).join(''); $('#supplierTable').innerHTML=suppliers.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="badge ${riskClass(r[4])}">${r[4]}</span></td><td>${r[5]}</td><td>${r[6]}</td></tr>`).join('');}
function renderActivity(){ $('#activityLog').innerHTML=state.activities.map(a=>`<div class="event"><time>${a.time}</time><div><b>${a.title}</b><p class="sub">${a.text}</p></div></div>`).join('');}
function addActivity(title,text){const now=new Date();const time=now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});state.activities.unshift({time,title,text});renderActivity();}
function approve(id){const a=actions.find(x=>x.id===id);if(!a||a.status==='Approved')return;a.status='Approved';state.approvedSavings+=a.savings;updateKpis();addActivity('AI action approved',`${a.title}. Expected savings: ${money(a.savings)}.`);renderActions();toast(`Approved: ${a.title} · +${money(a.savings)}`);}
function approveAll(){actions.filter(a=>a.conf>=93&&a.status!=='Approved').forEach(a=>approve(a.id));}
function approveLoss(product,savings){state.approvedSavings+=savings;updateKpis();addActivity('Grocery loss action approved',`${product} recommendation approved. Expected savings: ${money(savings)}.`);toast(`Approved ${product} action · +${money(savings)}`);}
function reviewAction(id){const a=actions.find(x=>x.id===id);openModal(a.title,`Why the AI recommended it: ${a.why.join(', ')}. Expected savings: ${money(a.savings)}. Confidence: ${a.conf}%.`);}
function updateKpis(){const total=12.4+state.approvedSavings/1000000;$('#savingsKpi').textContent='$'+total.toFixed(2)+'M';$('#sideScore').textContent=Math.min(99,78+Math.floor(state.approvedSavings/10000))+'%';$('#sideProgress').style.width=Math.min(99,78+Math.floor(state.approvedSavings/10000))+'%';}
function renderChart(period='weekly'){const d=periodData[period];$('#chartLabel').textContent=d.label;const max=Math.max(...d.bars);$('#chart').innerHTML=d.bars.map(v=>`<div class="bar" style="height:${Math.max(18,(v/max)*95)}%"><span>$${v}M</span></div>`).join('');$('#annualProjection').textContent=d.annual;$('#payback').textContent=d.payback;$('#roiBar').style.width=d.roi+'%';$('#roiText').textContent=d.roi+'% of target reached';$('#strategicBrief').innerHTML=d.brief;}
function usePrompt(text){$('#aiInput').value=text;askAI();}
function askAI(){const input=$('#aiInput');const q=(input.value||'Why is produce waste increasing in Texas?').trim();const chat=$('#chat');chat.insertAdjacentHTML('beforeend',`<div class="msg user">${q}</div>`);let answer='FreshFlow detected risk patterns across demand, inventory, shelf life and supplier signals.';const lower=q.toLowerCase();if(lower.includes('texas')||lower.includes('produce'))answer='Produce waste in Texas is increasing due to heat-wave pressure, excess deliveries and lower weekday traffic in 18 stores. Recommended action: apply 12% markdown today and transfer 2,300 units to high-demand stores. Expected savings: $18,400 · Confidence: 96%.';else if(lower.includes('supplier'))answer='Green Valley Produce has the highest waste impact: $2.8M projected exposure, OTIF 84%, quality score 88% and lead time 3.9 days. Recommended action: activate backup supplier for priority SKUs.';else if(lower.includes('strawber'))answer='Strawberries in Florida show 92% waste risk with 36h shelf life remaining. Best action is a 15% markdown today, paired with end-cap placement. Expected savings: $4,900 · Confidence: 96%.';else if(lower.includes('truck')||lower.includes('cold'))answer='Truck #284 has a cold-chain exception: 7°C vs allowed 4°C. AI recommends rerouting to nearest inspection point and prioritizing high-risk dairy and meat SKUs on arrival.';
setTimeout(()=>{chat.insertAdjacentHTML('beforeend',`<div class="msg bot"><b>FreshFlow AI:</b> ${answer}<br><br><b>Decision flow:</b> Detect → Predict → Recommend → Human approval → Execution → Learning.</div>`);chat.scrollTop=chat.scrollHeight;},220);input.value='';}
function scenario(key){state.activeScenario=key;$$('.scenario').forEach(s=>s.classList.toggle('active',s.dataset.scenario===key));const d=scenarioData[key];$('#scenarioCards').innerHTML=d.cards.map(c=>`<div class="mini"><small>${c[0]}</small><br><b>${c[1]}</b><p class="trend" style="color:var(--${c[2]})">AI forecast</p></div>`).join('');$('#scenarioText').textContent=d.text;const steps=['Detect','Predict','Simulate','Recommend','Approve','Learn'];$('#decisionStepper').innerHTML=steps.map((s,i)=>`<div class="step ${i<4?'active':''}">${i+1}. ${s}</div>`).join('');}
function applyScenario(){const savings={heat:2800000,supplier:1900000,holiday:840000,fuel:740000}[state.activeScenario]||0;state.approvedSavings+=savings;updateKpis();addActivity('Scenario mitigation applied',`${state.activeScenario} plan approved. Projected avoided loss: ${money(savings)}.`);toast(`Mitigation applied · projected avoided loss ${money(savings)}`);}
function renderTwin(node='supplier'){ $$('.twin-node').forEach(n=>n.classList.toggle('active',n.dataset.node===node)); $('#twinDetail').innerHTML=twinData[node];}
function makeReport(name){state.reports.unshift({name,time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})});renderReports();openModal(name,'Generated successfully. This prototype simulates the export flow for PDF, Excel or ESG reporting.');}
function renderReports(){const q=$('#reportQueue');q.innerHTML=state.reports.length?state.reports.map(r=>`<div class="event"><time>${r.time}</time><div><b>${r.name}</b><p class="sub">Ready for executive review.</p></div></div>`).join(''):'<p class="sub">No reports generated yet.</p>';}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2600);}
function openModal(title,text){$('#modalTitle').textContent=title;$('#modalText').textContent=text;$('#modal').classList.add('show');}
function closeModal(){$('#modal').classList.remove('show');}
const sidebar=$('#sidebar'),overlay=$('#overlay');function openMenu(){sidebar.classList.add('open');overlay.classList.add('show');document.body.style.overflow='hidden'}function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show');document.body.style.overflow=''}
function animateNums(){ $$('.num').forEach(el=>{const target=parseFloat(el.dataset.value),prefix=el.dataset.prefix||'',suffix=el.dataset.suffix||'';let n=0;const steps=28;const timer=setInterval(()=>{n+=target/steps;if(n>=target){n=target;clearInterval(timer)}el.textContent=prefix+n.toFixed(target>=20?1:1)+suffix;},30);});}
function globalSearch(q){q=q.toLowerCase();if(!q)return;const map={supplier:'suppliers',suppliers:'suppliers',truck:'operations',cold:'operations',sku:'loss',straw:'loss',milk:'loss',report:'reports',scenario:'ai',ai:'ai',executive:'executive',store:'operations',digital:'twin'};const found=Object.keys(map).find(k=>q.includes(k));if(found){go(map[found]);toast('Navigated to '+map[found]);}else toast('Search simulated. Try: supplier, truck, SKU, report, scenario.');}
function init(){ $$('.nav button').forEach(b=>b.addEventListener('click',()=>go(b.dataset.section))); $('#menuBtn').addEventListener('click',openMenu); overlay.addEventListener('click',closeMenu); $('#darkBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');toast(document.body.classList.contains('dark')?'Dark mode on':'Light mode on')}); $('#notifBtn').addEventListener('click',()=>{go('operations');toast('12 alerts: 3 critical, 5 warning, 4 informational')}); $('#roleBtn').addEventListener('click',()=>{state.role=state.role==='Executive'?'Operations':'Executive';$('#roleBtn').textContent='👤 Role: '+state.role;go(state.role==='Executive'?'executive':'operations')}); $('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')globalSearch(e.target.value)}); $('#lossSearch').addEventListener('input',renderLoss); $('#riskFilter').addEventListener('change',renderLoss); $$('#periodTabs button').forEach(b=>b.addEventListener('click',()=>{$$('#periodTabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderChart(b.dataset.period)})); $$('.scenario').forEach(b=>b.addEventListener('click',()=>scenario(b.dataset.scenario))); $$('.twin-node').forEach(n=>n.addEventListener('click',()=>renderTwin(n.dataset.node))); $('#aiInput').addEventListener('keydown',e=>{if(e.key==='Enter')askAI()}); renderTables();renderActivity();renderActions();renderLoss();renderChart();scenario('heat');renderTwin('supplier');renderReports();animateNums();setTimeout(()=>$('#roiBar').style.width='82%',250);}
document.addEventListener('DOMContentLoaded',init);
</script>
</body>
</html>
