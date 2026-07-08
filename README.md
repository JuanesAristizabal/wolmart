<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Walmart FreshFlow AI | Grocery Supply Chain Intelligence</title>
<style>
:root{
  --walmart-blue:#0071ce;
  --walmart-dark:#004f9e;
  --spark:#ffc220;
  --navy:#062b5f;
  --bg:#f3f6fb;
  --card:#ffffff;
  --ink:#0f172a;
  --muted:#64748b;
  --line:#dbe4ef;
  --green:#16a34a;
  --red:#dc2626;
  --orange:#f97316;
  --purple:#7c3aed;
  --shadow:0 18px 40px rgba(15,23,42,.08);
  --side:280px;
  --top:76px;
  --radius:20px;
}
body.dark{
  --bg:#0b1220;
  --card:#111c2f;
  --ink:#eff6ff;
  --muted:#a7b3c8;
  --line:#24314a;
  --shadow:0 22px 50px rgba(0,0,0,.28);
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;max-width:100%;overflow-x:hidden;scroll-behavior:smooth}
body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--bg);color:var(--ink);line-height:1.45}
button,input,select{font:inherit}button{cursor:pointer}a{color:inherit}b,strong{font-weight:850}small{line-height:1.25}.app{min-height:100vh;width:100%;max-width:100vw;overflow-x:hidden}
.sidebar{position:fixed;inset:0 auto 0 0;width:var(--side);background:linear-gradient(180deg,#064f9e 0%,#033f7c 52%,#022a5a 100%);color:white;padding:22px 18px;z-index:50;overflow:auto;transition:transform .24s ease,box-shadow .24s ease}
.brand{display:flex;align-items:center;gap:12px;margin-bottom:24px}.spark{width:46px;height:46px;border-radius:15px;background:var(--spark);display:grid;place-items:center;color:#064f9e;font-size:25px;font-weight:950;flex:0 0 auto}.brand h1{font-size:18px;line-height:1.05;letter-spacing:-.02em}.brand p{font-size:12px;color:rgba(255,255,255,.74);margin-top:4px}.brand-line{height:1px;background:rgba(255,255,255,.55);margin-top:8px;width:100%}
.nav{display:grid;gap:8px}.nav button{display:flex;align-items:center;gap:10px;width:100%;border:0;background:transparent;color:rgba(255,255,255,.76);padding:12px 13px;border-radius:14px;text-align:left;font-weight:800}.nav button:hover,.nav button.active{background:rgba(255,255,255,.16);color:white}.side-card{margin-top:24px;padding:16px;border-radius:18px;background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.18)}.side-card small{color:rgba(255,255,255,.72)}.side-card strong{display:block;margin-top:6px;font-size:22px;color:var(--spark)}.mini-line{height:7px;border-radius:999px;background:rgba(255,255,255,.20);overflow:hidden;margin:12px 0 8px}.mini-line i{display:block;height:100%;width:78%;border-radius:inherit;background:var(--spark)}.side-card p{font-size:12px;color:rgba(255,255,255,.74)}
.overlay{display:none;position:fixed;inset:0;background:rgba(2,6,23,.48);z-index:45}.overlay.show{display:block}.topbar{position:fixed;left:var(--side);right:0;top:0;height:var(--top);z-index:40;background:rgba(255,255,255,.9);backdrop-filter:blur(16px);border-bottom:1px solid var(--line);display:flex;align-items:center;gap:12px;padding:0 clamp(14px,2vw,26px);min-width:0}.dark .topbar{background:rgba(17,28,47,.86)}.menu{display:none;border:0;background:var(--walmart-blue);color:white;border-radius:14px;width:44px;height:44px;font-weight:950;font-size:20px;place-items:center;flex:0 0 auto}.mobile-brand{display:none;align-items:center;gap:9px;min-width:0;font-weight:900}.mini-spark{width:32px;height:32px;border-radius:11px;background:var(--spark);color:#064f9e;display:grid;place-items:center;flex:0 0 auto}.mobile-brand span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search{position:relative;flex:1;min-width:180px}.search input{width:100%;border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:16px;padding:13px 14px 13px 42px;outline:0}.search input:focus{border-color:var(--walmart-blue);box-shadow:0 0 0 4px rgba(0,113,206,.12)}.search span{position:absolute;left:14px;top:50%;transform:translateY(-50%)}.pill{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:11px 14px;display:flex;align-items:center;gap:8px;white-space:nowrap;font-weight:850;flex:0 0 auto}.notif{position:relative}.dot{position:absolute;right:7px;top:7px;width:10px;height:10px;border-radius:99px;background:var(--red);border:2px solid var(--card)}
.main{margin-left:var(--side);padding:calc(var(--top) + 22px) clamp(18px,2vw,32px) 46px;min-width:0;width:calc(100% - var(--side));max-width:calc(100vw - var(--side));overflow-x:hidden}.section{display:none;width:100%;max-width:1500px;margin:0 auto;min-width:0}.section.active{display:block;animation:fade .22s ease}@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}.mobile-section-label{display:none;color:var(--muted);font-size:12px;font-weight:850;margin-bottom:10px}.section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:6px 0 18px}.section-head h2{font-size:clamp(22px,2.2vw,32px);letter-spacing:-.03em}.section-head p,.sub{color:var(--muted);font-size:14px;margin-top:5px;line-height:1.55}.eyebrow{color:var(--spark);font-size:12px;font-weight:950;letter-spacing:.12em;text-transform:uppercase}.panel{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:22px;min-width:0;overflow:hidden}.panel h2{font-size:clamp(21px,1.6vw,25px);line-height:1.1;letter-spacing:-.025em}.panel h3{font-size:18px;line-height:1.15}.btn{border:0;border-radius:14px;padding:11px 15px;font-weight:900;transition:.18s ease;text-align:center;line-height:1.15}.btn:hover{transform:translateY(-1px)}.btn:disabled{opacity:.56;cursor:not-allowed;transform:none}.btn.blue{background:var(--walmart-blue);color:white}.btn.primary{background:var(--spark);color:#092c57}.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--ink)}.btn.light{background:#edf6ff;color:var(--walmart-dark)}.dark .btn.light{background:#183154;color:#c7dcff}.actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;min-width:0}
.hero{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(300px,.55fr);gap:18px;margin-bottom:18px;align-items:stretch;min-width:0}.hero-main{background:linear-gradient(135deg,var(--walmart-blue),var(--walmart-dark));color:white;position:relative}.hero-main:after{content:"";position:absolute;right:-120px;top:-150px;width:390px;height:390px;border-radius:50%;background:radial-gradient(circle,rgba(255,194,32,.38),transparent 70%)}.hero-main>*{position:relative;z-index:1}.hero h2{font-size:clamp(32px,4.2vw,56px);letter-spacing:-.045em;line-height:1.02;margin:14px 0}.hero p{max-width:820px;color:rgba(255,255,255,.84);font-size:15px}.hero-kicker{display:flex;gap:8px;flex-wrap:wrap;margin-top:15px}.hero-chip{font-size:12px;font-weight:900;color:white;border:1px solid rgba(255,255,255,.24);background:rgba(255,255,255,.10);padding:7px 10px;border-radius:999px}.status-row{display:grid;gap:12px;margin-top:14px}.status{display:flex;align-items:center;justify-content:space-between;gap:10px;border:1px solid var(--line);border-radius:16px;padding:13px;min-width:0}.status span:first-child{color:var(--muted);font-size:13px}.badge{font-size:12px;font-weight:900;padding:5px 9px;border-radius:999px;display:inline-flex;gap:5px;align-items:center;white-space:nowrap}.green{background:#dcfce7;color:#166534}.red{background:#fee2e2;color:#991b1b}.orange{background:#ffedd5;color:#9a3412}.blueb{background:#dbeafe;color:#1e40af}.purple{background:#ede9fe;color:#5b21b6}.dark .green{background:rgba(22,163,74,.18);color:#86efac}.dark .red{background:rgba(220,38,38,.18);color:#fca5a5}.dark .orange{background:rgba(249,115,22,.18);color:#fdba74}.dark .blueb{background:rgba(0,113,206,.22);color:#bfdbfe}.dark .purple{background:rgba(124,58,237,.20);color:#ddd6fe}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(165px,1fr));gap:14px;margin:18px 0;min-width:0}.kpi{background:var(--card);border:1px solid var(--line);border-radius:17px;padding:16px;box-shadow:var(--shadow);min-width:0}.kpi small{color:var(--muted);font-weight:800;display:block}.kpi h3{font-size:clamp(22px,2.1vw,30px);margin-top:8px;letter-spacing:-.035em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.trend{font-size:12px;color:var(--green);font-weight:900;margin-top:6px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;min-width:0}.grid-3{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(270px,.8fr) minmax(270px,.8fr);gap:18px;min-width:0}.grid-4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;min-width:0}.dataflow{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;margin-top:12px}.node{background:var(--bg);border:1px solid var(--line);border-radius:16px;padding:14px;text-align:center;font-weight:950;min-height:86px;display:grid;place-content:center}.node small{color:var(--muted);font-weight:800}.heatmap{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.region{border:1px solid var(--line);border-radius:16px;padding:15px;min-height:108px}.region .score{font-size:28px;font-weight:950;margin:10px 0 2px}.risk-high{background:#fee2e2}.risk-mid{background:#ffedd5}.risk-low{background:#dcfce7}.dark .risk-high{background:rgba(220,38,38,.18)}.dark .risk-mid{background:rgba(249,115,22,.18)}.dark .risk-low{background:rgba(22,163,74,.18)}
.tabs{display:flex;gap:8px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:5px;flex-wrap:wrap}.tabs button{border:0;background:transparent;color:var(--muted);border-radius:12px;padding:10px 14px;font-weight:900}.tabs button.active{background:var(--walmart-blue);color:white}.chart{height:235px;display:flex;align-items:end;gap:10px;padding-top:28px;min-width:0}.bar{flex:1;background:linear-gradient(180deg,var(--walmart-blue),#8ec9ff);border-radius:11px 11px 4px 4px;min-height:34px;position:relative;transition:.25s}.bar span{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);font-size:11px;font-weight:900;margin-bottom:6px;white-space:nowrap}.progress{height:10px;background:#e9eef6;border-radius:99px;overflow:hidden}.progress i{display:block;height:100%;width:0;background:var(--walmart-blue);border-radius:inherit;transition:.5s}
.table-tools{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px}.table-tools input,.table-tools select{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:13px;padding:10px 12px;min-width:180px}.table-wrap{max-width:100%;overflow-x:auto;border:1px solid var(--line);border-radius:16px;-webkit-overflow-scrolling:touch;background:var(--card)}table{width:100%;border-collapse:collapse;min-width:820px;background:var(--card)}th,td{text-align:left;padding:14px;border-bottom:1px solid var(--line);font-size:13px;vertical-align:middle;white-space:normal}th{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.05em}tr:last-child td{border-bottom:0}
.ai-card{border:1px solid var(--line);border-radius:17px;padding:16px;background:var(--card);margin-bottom:12px;min-width:0}.ai-card.done,.ai-card.completed{background:linear-gradient(0deg,rgba(22,163,74,.07),rgba(22,163,74,.07)),var(--card);opacity:.76}.ai-card.executing{background:linear-gradient(0deg,rgba(0,113,206,.08),rgba(0,113,206,.08)),var(--card)}.ai-card .top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;min-width:0}.ai-card .top>div{min-width:0}.ai-card h3{font-size:16px;overflow-wrap:anywhere}.meta{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.explain{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:12px}.why{background:var(--bg);border:1px solid var(--line);border-radius:13px;padding:10px;font-size:12px}.timeline{display:grid;gap:12px;max-height:345px;overflow:auto;padding-right:4px}.event{display:grid;grid-template-columns:65px minmax(0,1fr);gap:12px}.event time{font-weight:950;color:var(--walmart-blue)}.event div{border-left:3px solid var(--walmart-blue);padding-left:12px;min-width:0}.approval-state{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:5px 9px;font-size:12px;font-weight:950;background:#edf6ff;color:var(--walmart-dark)}.dark .approval-state{background:#183154;color:#c7dcff}
/* AI Command Center: explicitly robust layout */
.ai-command-grid{display:grid;grid-template-columns:minmax(320px,390px) minmax(0,1fr);gap:18px;align-items:start;width:100%;min-width:0}.assistant-box{display:grid;gap:12px;min-width:0}.quick-prompts{display:flex;gap:8px;flex-wrap:wrap}.quick-prompts button{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:8px 10px;font-size:12px;font-weight:900}.chat{height:280px;overflow:auto;background:var(--bg);border:1px solid var(--line);border-radius:17px;padding:14px;display:flex;flex-direction:column;gap:12px}.msg{max-width:92%;padding:12px 14px;border-radius:16px;font-size:14px;line-height:1.5;overflow-wrap:anywhere}.user{align-self:flex-end;background:var(--walmart-blue);color:white}.bot{align-self:flex-start;background:var(--card);border:1px solid var(--line)}.chat-input{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px}.chat-input input{width:100%;min-width:0;border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:14px;padding:12px;outline:0}.scenario-layout{display:grid;grid-template-columns:minmax(190px,255px) minmax(0,1fr);gap:16px;align-items:start;min-width:0}.scenario-list{display:grid;grid-template-columns:1fr;gap:10px;min-width:0}.scenario{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:15px;padding:14px;text-align:left;font-weight:900;min-height:58px;display:flex;align-items:center;line-height:1.25;white-space:normal;min-width:0}.scenario.active{border-color:var(--walmart-blue);box-shadow:0 0 0 3px rgba(0,113,206,.12)}.scenario-results{min-width:0;width:100%;overflow:hidden}.result-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;min-width:0}.mini{background:var(--bg);border:1px solid var(--line);border-radius:15px;padding:14px;min-width:0;overflow:hidden}.mini small{display:block;color:var(--muted);line-height:1.25}.mini b{display:block;font-size:clamp(20px,1.8vw,26px);line-height:1.1;letter-spacing:-.03em;margin-top:7px;overflow-wrap:anywhere}.decision-stepper{display:grid;grid-template-columns:repeat(6,minmax(70px,1fr));gap:9px;margin-top:14px;min-width:0}.step{border:1px solid var(--line);background:var(--bg);border-radius:14px;padding:10px;text-align:center;font-size:12px;font-weight:950;line-height:1.2;min-width:0}.step.active{border-color:var(--walmart-blue);background:rgba(0,113,206,.12);color:var(--walmart-dark)}.dark .step.active{color:#bfdbfe}
.twin{display:grid;grid-template-columns:1.3fr .7fr;gap:18px;align-items:stretch}.chain{background:linear-gradient(180deg,rgba(0,113,206,.08),rgba(255,194,32,.08));border:1px solid var(--line);border-radius:20px;min-height:360px;padding:20px;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;align-items:center}.twin-node{border:1px solid var(--line);background:var(--card);border-radius:18px;padding:18px;text-align:center;font-weight:950;min-height:108px;display:grid;place-content:center;position:relative}.twin-node:after{content:"→";position:absolute;right:-16px;top:50%;transform:translateY(-50%);color:var(--walmart-blue);font-size:22px}.twin-node:last-child:after{display:none}.twin-node.active{outline:3px solid rgba(0,113,206,.22);border-color:var(--walmart-blue)}.twin-node span{display:block;font-size:26px}.list{display:grid;gap:10px}.list-item{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px;border:1px solid var(--line);border-radius:15px;background:var(--card);min-width:0}.list-item div{min-width:0}.list-item b{display:block;overflow-wrap:anywhere}.report-card{display:grid;gap:10px}.toast{position:fixed;right:18px;bottom:18px;z-index:100;background:#061f44;color:white;border-radius:15px;padding:13px 15px;box-shadow:0 18px 45px rgba(0,0,0,.20);display:none;max-width:min(420px,calc(100vw - 32px));font-weight:800}.toast.show{display:block;animation:toast .22s ease}@keyframes toast{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}.modal{position:fixed;inset:0;background:rgba(2,6,23,.55);z-index:90;display:none;align-items:center;justify-content:center;padding:20px}.modal.show{display:flex}.modal-card{width:min(620px,100%);background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:22px;padding:24px;box-shadow:var(--shadow)}
@media(max-width:1500px){.ai-command-grid{grid-template-columns:1fr}.scenario-layout{grid-template-columns:minmax(180px,270px) minmax(0,1fr)}.section{max-width:1250px}.grid-3{grid-template-columns:minmax(0,1fr) minmax(270px,.75fr)}.grid-3>.panel:last-child{grid-column:1/-1}.twin{grid-template-columns:1fr}.chain{min-height:300px}}
@media(max-width:1180px){:root{--top:68px}.sidebar{transform:translateX(-105%);box-shadow:28px 0 70px rgba(0,0,0,.30)}.sidebar.open{transform:translateX(0)}.topbar{left:0}.menu{display:grid}.mobile-brand{display:flex}.main{margin-left:0;width:100%;max-width:100vw;padding:calc(var(--top) + 16px) 14px 38px}.section{max-width:100%;margin:0}.grid,.grid-3,.hero,.twin{grid-template-columns:1fr}.grid-4,.heatmap{grid-template-columns:repeat(2,minmax(0,1fr))}.kpis{grid-template-columns:repeat(3,minmax(0,1fr))}.dataflow{grid-template-columns:repeat(3,minmax(0,1fr))}.chain{grid-template-columns:repeat(3,minmax(0,1fr))}.twin-node:after{display:none}.scenario-layout{grid-template-columns:1fr}.scenario-list{grid-template-columns:repeat(2,minmax(0,1fr))}.result-cards{grid-template-columns:repeat(3,minmax(0,1fr))}.decision-stepper{grid-template-columns:repeat(3,minmax(0,1fr))}.overlay.show{display:block}.hide-tablet{display:none!important}.section-head{margin-top:4px}}
@media(max-width:760px){:root{--top:70px}.topbar{padding:0 10px;gap:8px}.search{display:none}.mobile-brand{flex:1}.mobile-brand span{max-width:170px}.pill{width:42px;height:42px;border-radius:14px;padding:0;justify-content:center;font-size:0}.pill#darkBtn:before{content:"🌙";font-size:16px}.pill#notifBtn:before{content:"🔔";font-size:16px}.main{padding-left:12px;padding-right:12px}.mobile-section-label{display:block}.section-head{flex-direction:column;align-items:flex-start;gap:10px;margin:8px 0 12px}.section-head .btn,.section-head .tabs{width:100%}.tabs{display:grid;grid-template-columns:1fr 1fr}.panel{padding:16px;border-radius:18px}.hero-main{padding:18px 14px 16px}.hero h2{font-size:clamp(25px,8vw,32px);line-height:1.04}.hero p{font-size:13.5px}.hero-kicker{display:grid;grid-template-columns:1fr}.hero-chip{text-align:center}.hero .actions .btn,.actions .btn{width:100%}.status-row,.kpis,.heatmap,.grid-4{grid-template-columns:repeat(2,minmax(0,1fr))}.status{flex-direction:column;align-items:flex-start;min-height:74px}.kpi{padding:13px}.kpi h3{font-size:21px;white-space:normal}.dataflow,.explain{grid-template-columns:1fr}.chart{height:180px}.table-tools{display:grid;grid-template-columns:1fr}.table-tools input,.table-tools select{width:100%;min-width:0}table{min-width:760px}.ai-card .top{display:grid;grid-template-columns:1fr}.quick-prompts{display:grid;grid-template-columns:1fr}.quick-prompts button{width:100%}.chat{height:300px}.chat-input{grid-template-columns:1fr}.chat-input .btn{width:100%}.scenario-list,.result-cards,.decision-stepper{grid-template-columns:1fr}.chain{grid-template-columns:1fr;min-height:0}.node{min-height:72px}.toast{left:12px;right:12px;bottom:12px;max-width:none;font-size:13px}.modal-card{padding:18px;border-radius:18px}}
@media(max-width:430px){.menu,.pill{width:40px;height:40px}.mobile-brand span{max-width:138px}.status-row,.kpis,.heatmap,.grid-4{grid-template-columns:1fr}.event{grid-template-columns:48px 1fr}.section-head h2{font-size:23px}.panel h2{font-size:21px}.chat{height:260px}.table-wrap{border-radius:13px}.hero h2{font-size:25px}.tabs{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="app">
  <aside class="sidebar" id="sidebar">
    <div class="brand"><div class="spark">✦</div><div><h1>Walmart<br>FreshFlow AI</h1><div class="brand-line"></div><p>Internal supply chain platform</p></div></div>
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
      <p>Recommendations accepted across high-risk grocery categories.</p>
    </div>
  </aside>
  <div class="overlay" id="overlay"></div>
  <header class="topbar">
    <button class="menu" id="menuBtn" aria-label="Open menu">☰</button>
    <div class="mobile-brand"><div class="mini-spark">✦</div><span>FreshFlow AI</span></div>
    <div class="search"><span>🔎</span><input id="searchInput" placeholder="Search store, SKU, supplier, truck, report..." /></div>
    <button class="pill hide-mobile" id="roleBtn">👤 Role: Executive</button>
    <button class="pill" id="darkBtn">🌙</button>
    <button class="pill notif" id="notifBtn">🔔<span class="dot" id="notifDot"></span></button>
  </header>
  <main class="main">
    <section class="section active" id="overview">
      <div class="mobile-section-label">Overview · AI supply chain platform</div>
      <div class="hero">
        <div class="panel hero-main">
          <span class="eyebrow">Walmart Global Tech · Grocery Supply Chain</span>
          <h2>AI-powered visibility for fresher shelves, lower grocery losses and higher margins.</h2>
          <p>FreshFlow AI connects store inventory, POS data, supplier performance, truck temperature, weather and local demand signals to recommend actions before groceries become losses.</p>
          <div class="hero-kicker"><span class="hero-chip">✓ Human-in-the-loop AI</span><span class="hero-chip">⚡ Live risk signals</span><span class="hero-chip">📈 Margin recovery</span></div>
          <div class="actions"><button class="btn primary" onclick="go('operations')">View operational actions</button><button class="btn ghost" style="color:white;border-color:rgba(255,255,255,.35)" onclick="go('ai')">Ask FreshFlow AI</button></div>
        </div>
        <div class="panel">
          <h3>Live network status</h3><p class="sub">Updated <span id="lastUpdate">2 min ago</span></p>
          <div class="status-row">
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
        <div class="panel"><h2>AI Decision Engine</h2><p class="sub">Data → prediction → recommendation → approval → execution → learning.</p><div class="dataflow"><div class="node">POS<br><small>Sales</small></div><div class="node">IoT<br><small>Temperature</small></div><div class="node">AI<br><small>Prediction</small></div><div class="node">Human<br><small>Approval</small></div><div class="node">Action<br><small>Executed</small></div><div class="node">Learning<br><small>Model improves</small></div></div></div>
        <div class="panel"><h2>Regional risk heatmap</h2><p class="sub">Grocery loss risk by region.</p><div class="heatmap" style="margin-top:12px"><div class="region risk-low"><b>West</b><div class="score">82</div><small>Low risk</small></div><div class="region risk-mid"><b>South</b><div class="score">71</div><small>Produce risk</small></div><div class="region risk-high"><b>Texas</b><div class="score">58</div><small>Heat wave</small></div><div class="region risk-low"><b>East</b><div class="score">88</div><small>Healthy</small></div></div></div>
      </div>
    </section>

    <section class="section" id="executive">
      <div class="mobile-section-label">Executive Intelligence</div>
      <div class="section-head"><div><h2>Executive Intelligence</h2><p>Strategic C-level view: margins, ROI, risk and sustainability.</p></div><div class="tabs" id="periodTabs"><button class="active" data-period="week">Week</button><button data-period="month">Month</button><button data-period="quarter">Quarter</button></div></div>
      <div class="kpis">
        <div class="kpi"><small>Margin Impact</small><h3>$18.7M</h3><p class="trend">Protected this quarter</p></div><div class="kpi"><small>AI ROI</small><h3>4.8x</h3><p class="trend">Projected annualized</p></div><div class="kpi"><small>Accepted Recommendations</small><h3 id="acceptedKpi">324</h3><p class="trend">Human-approved</p></div><div class="kpi"><small>Supplier Risk Index</small><h3>Low</h3><p class="trend">7 alerts monitored</p></div>
      </div>
      <div class="grid-3">
        <div class="panel"><h2>Financial impact trend</h2><p class="sub">Savings generated from markdowns, transfers and replenishment optimization.</p><div class="chart" id="chart"></div></div>
        <div class="panel"><h2>AI ROI</h2><p class="sub">Payback period: 5.2 months.</p><div class="progress" style="margin-top:24px"><i id="roiBar"></i></div><h3 style="margin-top:16px">82% toward annual target</h3><p class="sub">Expected annual savings: $61.3M.</p></div>
        <div class="panel"><h2>Executive summary</h2><p class="sub">FreshFlow AI prevented an estimated <b>$2.8M</b> in grocery losses this week across 482 stores, mainly through produce markdowns, dairy transfers and route re-optimization.</p><div class="actions"><button class="btn blue" onclick="makeReport('Executive ROI Summary')">Generate board report</button></div></div>
      </div>
    </section>

    <section class="section" id="operations">
      <div class="mobile-section-label">Operations Command Center</div>
      <div class="section-head"><div><h2>Operations Command Center</h2><p>Daily actions for store managers, logistics teams and distribution centers.</p></div><button class="btn blue" onclick="approveAllVisible()">Approve visible actions</button></div>
      <div class="grid">
        <div class="panel"><h2>Critical alerts</h2><p class="sub">Live issues requiring attention.</p><div class="list" id="alertsList" style="margin-top:14px"></div></div>
        <div class="panel"><h2>AI Action Center</h2><p class="sub">Human-in-the-loop recommendations with savings, confidence and explanation.</p><div id="actionCards" style="margin-top:14px"></div></div>
      </div>
      <div class="panel" style="margin-top:18px"><h2>Inventory and cold chain risk</h2><p class="sub">Store, product and logistics signals combined into one risk score.</p><div class="table-wrap" style="margin-top:14px"><table><thead><tr><th>Store / Asset</th><th>Category</th><th>Risk</th><th>Signal</th><th>AI action</th><th>Status</th></tr></thead><tbody id="opsTable"></tbody></table></div></div>
    </section>

    <section class="section" id="ai">
      <div class="mobile-section-label">AI Command Center</div>
      <div class="section-head"><div><h2>AI Command Center</h2><p>Ask questions, simulate disruptions and approve explainable recommendations.</p></div></div>
      <div class="ai-command-grid">
        <div class="panel assistant-box"><h2>Ask Walmart AI</h2><p class="sub">Get an explainable answer connected to operational actions.</p><div class="quick-prompts"><button onclick="fillAI('Why is produce waste increasing in Texas?')">Produce waste in Texas</button><button onclick="fillAI('Which supplier is creating the highest risk?')">Supplier risk</button><button onclick="fillAI('What should we do with strawberries today?')">Strawberry action</button></div><div class="chat" id="chat"><div class="msg bot"><b>FreshFlow AI:</b> Ask me about waste, demand, inventory, suppliers or logistics risk.</div></div><div class="chat-input"><input id="aiInput" placeholder="Example: Why is produce waste high in Texas?" /><button class="btn blue" onclick="askAI()">Ask AI</button></div></div>
        <div class="panel"><h2>Scenario Simulator</h2><p class="sub">Select a disruption and see the predicted impact, mitigation plan and approval workflow.</p><div class="scenario-layout" style="margin-top:16px"><div class="scenario-list"><button class="scenario active" data-scenario="heat">🌡️ Heat wave in Texas</button><button class="scenario" data-scenario="supplier">🚚 Supplier delay</button><button class="scenario" data-scenario="holiday">🛒 Holiday demand spike</button><button class="scenario" data-scenario="fuel">⛽ Fuel price +12%</button></div><div class="scenario-results"><div class="result-cards" id="scenarioCards"></div><p class="sub" id="scenarioText" style="margin-top:14px"></p><div class="decision-stepper" id="decisionStepper"></div><div class="actions"><button class="btn blue" onclick="applyScenario()">Apply AI mitigation plan</button><button class="btn ghost" onclick="makeReport('Scenario Simulation')">Export scenario</button></div></div></div></div>
      </div>
    </section>

    <section class="section" id="loss">
      <div class="mobile-section-label">Grocery Loss Center</div>
      <div class="section-head"><div><h2>Grocery Loss Center</h2><p>SKU-level waste prediction using shelf life, demand, markdown history and local signals.</p></div></div>
      <div class="panel"><div class="table-tools"><input id="lossSearch" placeholder="Search product or SKU" /><select id="riskFilter"><option value="all">All risk levels</option><option value="High">High risk</option><option value="Medium">Medium risk</option><option value="Low">Low risk</option></select></div><div class="table-wrap"><table><thead><tr><th>SKU</th><th>Product</th><th>Category</th><th>Shelf life</th><th>Waste risk</th><th>AI recommendation</th><th>Savings</th><th>Action</th></tr></thead><tbody id="lossTable"></tbody></table></div></div>
    </section>

    <section class="section" id="twin">
      <div class="mobile-section-label">Digital Twin</div>
      <div class="section-head"><div><h2>Digital Twin</h2><p>Visual simulation of Walmart's grocery supply chain: suppliers, DCs, trucks, stores and customers.</p></div></div>
      <div class="twin">
        <div class="chain"><button class="twin-node active" data-node="supplier"><span>🌾</span>Supplier</button><button class="twin-node" data-node="dc"><span>🏭</span>Distribution Center</button><button class="twin-node" data-node="truck"><span>🚚</span>Truck</button><button class="twin-node" data-node="store"><span>🏪</span>Store</button><button class="twin-node" data-node="customer"><span>🛒</span>Customer</button></div>
        <div class="panel"><h2 id="twinTitle">Supplier node</h2><p class="sub" id="twinDesc">Live supplier risk and quality signals.</p><div class="list" id="twinMetrics" style="margin-top:14px"></div><div class="actions"><button class="btn blue" onclick="makeReport('Digital Twin Snapshot')">Export snapshot</button></div></div>
      </div>
    </section>

    <section class="section" id="suppliers">
      <div class="mobile-section-label">Supplier Intelligence</div>
      <div class="section-head"><div><h2>Supplier Intelligence</h2><p>OTIF, quality, delay risk and waste impact by supplier.</p></div></div>
      <div class="grid">
        <div class="panel"><h2>Supplier scorecards</h2><div class="table-wrap" style="margin-top:14px"><table><thead><tr><th>Supplier</th><th>OTIF</th><th>Quality</th><th>Delay risk</th><th>Waste impact</th><th>AI action</th></tr></thead><tbody id="supplierTable"></tbody></table></div></div>
        <div class="panel"><h2>Supplier risk insight</h2><p class="sub">Green Valley is the largest current contributor to potential grocery waste due to 3 late produce shipments and a 12% quality variance.</p><div class="actions"><button class="btn blue" onclick="toast('Backup supplier activated for Green Valley produce orders.')">Activate backup supplier</button><button class="btn ghost" onclick="makeReport('Supplier Risk Report')">Export risk report</button></div></div>
      </div>
    </section>

    <section class="section" id="reports">
      <div class="mobile-section-label">Reports</div>
      <div class="section-head"><div><h2>Reports</h2><p>Executive and operational reporting for weekly review, ROI tracking and ESG impact.</p></div></div>
      <div class="grid-4" id="reportsGrid"></div>
      <div class="panel" style="margin-top:18px"><h2>Reporting workflow</h2><p class="sub">Every approved recommendation updates operational logs, financial savings and executive dashboards. The model then learns from the outcome.</p><div class="dataflow"><div class="node">Approve</div><div class="node">Execute</div><div class="node">Measure</div><div class="node">Report</div><div class="node">Learn</div><div class="node">Improve</div></div></div>
    </section>
  </main>
</div>
<div class="toast" id="toast"></div>
<div class="modal" id="modal"><div class="modal-card"><h2 id="modalTitle">Report generated</h2><p class="sub" id="modalText"></p><div class="actions"><button class="btn blue" onclick="closeModal()">Done</button><button class="btn ghost" onclick="closeModal()">Close</button></div></div></div>
<script>
const $=s=>document.querySelector(s);const $$=s=>Array.from(document.querySelectorAll(s));
const state={section:'overview',role:'Executive',savings:12.40,accepted:324,applied:{},activeScenario:'heat'};
const actions=[
 {id:'strawberry',title:'Apply dynamic markdown to strawberries',where:'Florida stores #241, #388, #410',risk:'High',save:4.9,confidence:96,why:['Shelf life < 36h','Demand -14%','Weather humidity risk','Markdown history positive'],status:'Pending'},
 {id:'milk',title:'Transfer excess milk inventory',where:'Dallas Store #118 → Store #210',risk:'High',save:7.2,confidence:93,why:['Overstock +18%','Nearby demand +22%','Cold chain stable','2 days shelf life'],status:'Pending'},
 {id:'supplier',title:'Activate backup supplier for produce',where:'Texas region',risk:'Medium',save:2.8,confidence:89,why:['Supplier delay 18h','Heat wave forecast','DC capacity 72%','Stockout risk rising'],status:'Pending'}
];
const alerts=[['Cold chain interruption','Truck #284 temperature reached 7°C','red'],['Produce waste risk','Store #1128 strawberries expire in 36h','orange'],['Supplier delay','Fresh Farms Co. delayed by 18h','orange'],['Overstock detected','Dairy, Texas Region','blueb']];
const opsRows=[['Truck #284','Cold Chain','High','7°C detected','Reroute to nearest DC','Critical'],['Store #1128','Produce','High','Strawberries 36h shelf life','Apply 15% markdown','Pending'],['DC Dallas','Dairy','Medium','Milk overstock +18%','Transfer to Store #210','Pending'],['Green Valley','Supplier','High','18h delivery delay','Activate backup supplier','Review']];
const lossItems=[
 {sku:'1029',product:'Strawberries',category:'Produce',life:'36h',risk:'High',rec:'Markdown 15% today',save:'$4,900'},
 {sku:'4102',product:'Milk',category:'Dairy',life:'2 days',risk:'High',rec:'Transfer to Store #210',save:'$7,200'},
 {sku:'8821',product:'Bread',category:'Bakery',life:'18h',risk:'High',rec:'Reduce tomorrow order',save:'$3,100'},
 {sku:'7330',product:'Avocados',category:'Produce',life:'3 days',risk:'Medium',rec:'Bundle promotion',save:'$2,800'},
 {sku:'5508',product:'Greek Yogurt',category:'Dairy',life:'5 days',risk:'Low',rec:'Maintain replenishment',save:'$700'}
];
const suppliers=[['Fresh Farms','91%','94%','Medium','$1.2M','Monitor closely'],['DairyBest','97%','96%','Low','$420K','Keep allocation'],['Green Valley','84%','88%','High','$2.8M','Activate backup'],['BakeryPro','93%','91%','Medium','$810K','Reduce lead time']];
const scenarioData={
 heat:{cards:[['Waste risk','+22%','red'],['Beverage demand','+31%','green'],['Produce shelf life','-18%','orange']],text:'AI recommends increasing beverage replenishment, reducing sensitive produce orders and applying markdowns today in 184 Texas stores. Estimated savings: $2.8M.'},
 supplier:{cards:[['Delay risk','+34%','red'],['Stockout risk','+17%','orange'],['Backup cost','+$420K','orange']],text:'AI recommends activating backup supplier DairyBest and reallocating inventory from Dallas DC. Expected avoided loss: $1.9M.'},
 holiday:{cards:[['Demand spike','+28%','green'],['Stockout risk','+21%','orange'],['Projected sales','+$8.4M','green']],text:'AI recommends increasing replenishment for beverages, snacks and grill products while reducing bakery orders after the weekend.'},
 fuel:{cards:[['Logistics cost','+12%','red'],['Route efficiency','-7%','orange'],['Optimized savings','$740K','green']],text:'AI recommends route consolidation across Southeast DCs and night-shift dispatch to reduce fuel exposure.'}
};
const twin={
 supplier:{title:'Supplier node',desc:'Live supplier risk and quality signals.',metrics:[['OTIF','91%'],['Quality score','94%'],['Delay risk','Medium'],['Waste impact','$1.2M']]},
 dc:{title:'Distribution Center node',desc:'Inventory capacity, inbound flow and cross-dock utilization.',metrics:[['Capacity','82%'],['Inbound trucks','148'],['Forecast accuracy','96%'],['Risk','Low']]},
 truck:{title:'Truck node',desc:'GPS, ETA and cold chain sensors.',metrics:[['Monitored trucks','8,921'],['Avg temperature','3.4°C'],['Late risk','7%'],['Fuel efficiency','+11%']]},
 store:{title:'Store node',desc:'Shelf life, inventory accuracy and local demand.',metrics:[['Connected stores','4,756'],['Inventory accuracy','94.8%'],['High risk SKUs','184'],['Actions pending','12']]},
 customer:{title:'Customer demand node',desc:'POS signals, local events, weather and demand changes.',metrics:[['Demand confidence','96%'],['Weather effect','High'],['Local events','32'],['Sales lift','+8.2%']]}
};
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t.timer);t.timer=setTimeout(()=>t.classList.remove('show'),2800)}
function closeMenu(){ $('#sidebar').classList.remove('open'); $('#overlay').classList.remove('show'); document.body.style.overflow=''; }
function openMenu(){ $('#sidebar').classList.add('open'); $('#overlay').classList.add('show'); document.body.style.overflow='hidden'; }
function go(id){ if(!$('#'+id)) id='overview'; state.section=id; $$('.section').forEach(s=>s.classList.toggle('active',s.id===id)); $$('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.section===id)); closeMenu(); if(location.hash!=='#'+id) history.replaceState(null,'','#'+id); window.scrollTo({top:0,behavior:'smooth'}); }
function updateSavings(add=0){state.savings=+(state.savings+add).toFixed(2);$('#savingsKpi').textContent='$'+state.savings.toFixed(2)+'M';$('#acceptedKpi').textContent=state.accepted;}
function renderAlerts(){ $('#alertsList').innerHTML=alerts.map(a=>`<div class="list-item"><div><b>${a[0]}</b><small class="sub">${a[1]}</small></div><span class="badge ${a[2]}">Live</span></div>`).join(''); }
function renderOps(){ $('#opsTable').innerHTML=opsRows.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td><span class="badge ${r[2]==='High'?'red':'orange'}">${r[2]}</span></td><td>${r[3]}</td><td>${r[4]}</td><td><span class="approval-state">${r[5]}</span></td></tr>`).join(''); }
function renderActions(){ $('#actionCards').innerHTML=actions.map(a=>`<div class="ai-card ${a.status==='Completed'?'completed':a.status==='Executing'?'executing':''}"><div class="top"><div><h3>${a.title}</h3><p class="sub">${a.where}</p></div><span class="badge ${a.risk==='High'?'red':'orange'}">${a.risk}</span></div><div class="meta"><span class="badge green">Savings $${a.save}M</span><span class="badge blueb">${a.confidence}% confidence</span><span class="approval-state">${a.status}</span></div><div class="explain">${a.why.map(w=>`<div class="why">${w}</div>`).join('')}</div><div class="actions"><button class="btn blue" ${a.status!=='Pending'?'disabled':''} onclick="approveAction('${a.id}')">${a.status==='Pending'?'Approve action':a.status}</button><button class="btn ghost" onclick="toast('FreshFlow AI explains this recommendation using shelf life, demand, weather and inventory variance.')">Why?</button></div></div>`).join('');}
function approveAction(id){const a=actions.find(x=>x.id===id);if(!a||a.status!=='Pending')return;a.status='Executing';renderActions();toast('Action approved. Execution started.');setTimeout(()=>{a.status='Completed';state.accepted++;updateSavings(a.save);renderActions();toast('Action completed. Savings updated and model learning loop recorded.');},900)}
function approveAllVisible(){actions.filter(a=>a.status==='Pending').forEach((a,i)=>setTimeout(()=>approveAction(a.id),i*300));}
function renderLoss(){const q=($('#lossSearch')?.value||'').toLowerCase();const risk=$('#riskFilter')?.value||'all';const rows=lossItems.filter(x=>(risk==='all'||x.risk===risk)&&(x.product.toLowerCase().includes(q)||x.sku.includes(q)||x.category.toLowerCase().includes(q)));$('#lossTable').innerHTML=rows.map(x=>`<tr><td>${x.sku}</td><td><b>${x.product}</b></td><td>${x.category}</td><td>${x.life}</td><td><span class="badge ${x.risk==='High'?'red':x.risk==='Medium'?'orange':'green'}">${x.risk}</span></td><td>${x.rec}</td><td>${x.save}</td><td><button class="btn light" onclick="toast('${x.product} recommendation approved for pilot execution.')">Approve</button></td></tr>`).join('')||'<tr><td colspan="8">No matching products.</td></tr>';}
function renderSuppliers(){ $('#supplierTable').innerHTML=suppliers.map(s=>`<tr><td><b>${s[0]}</b></td><td>${s[1]}</td><td>${s[2]}</td><td><span class="badge ${s[3]==='High'?'red':s[3]==='Medium'?'orange':'green'}">${s[3]}</span></td><td>${s[4]}</td><td>${s[5]}</td></tr>`).join(''); }
function renderChart(period='week'){const data={week:[24,38,44,52,66,58,78],month:[30,42,55,49,68,81,92],quarter:[45,51,63,72,84,90,96]}[period];$('#chart').innerHTML=data.map(v=>`<div class="bar" style="height:${v}%"><span>$${(v/10).toFixed(1)}M</span></div>`).join('');}
function scenario(key){state.activeScenario=key;$$('.scenario').forEach(s=>s.classList.toggle('active',s.dataset.scenario===key));const d=scenarioData[key];$('#scenarioCards').innerHTML=d.cards.map(c=>`<div class="mini"><small>${c[0]}</small><b>${c[1]}</b><p class="trend" style="color:var(--${c[2]})">AI forecast</p></div>`).join('');$('#scenarioText').textContent=d.text;$('#decisionStepper').innerHTML=['Detect','Predict','Simulate','Recommend','Approve','Learn'].map((s,i)=>`<div class="step ${i<4?'active':''}">${i+1}. ${s}</div>`).join('');}
function applyScenario(){const key=state.activeScenario;if(state.applied[key]){toast('This scenario mitigation plan was already applied.');return;}state.applied[key]=true;state.accepted++;updateSavings(key==='heat'?2.8:key==='supplier'?1.9:key==='holiday'?3.4:.74);$('#decisionStepper').innerHTML=['Detect','Predict','Simulate','Recommend','Approved','Learning'].map((s,i)=>`<div class="step active">${i+1}. ${s}</div>`).join('');toast('Scenario mitigation approved. Executive KPIs updated.');}
function fillAI(text){$('#aiInput').value=text;askAI();}
function askAI(){const input=$('#aiInput');const q=input.value.trim();if(!q)return;const chat=$('#chat');chat.insertAdjacentHTML('beforeend',`<div class="msg user">${q}</div>`);input.value='';let ans='I found three relevant signals: inventory variance, demand forecast and supplier timing. Recommended next step: review AI Action Center and approve the highest-confidence recommendation.';if(q.toLowerCase().includes('texas')||q.toLowerCase().includes('produce')) ans='Produce waste in Texas is increasing because a heat wave is reducing shelf life by 18%, weekday demand is 14% below forecast and 184 stores have excess sensitive produce. Recommended action: apply targeted markdowns today and reduce tomorrow orders. Expected savings: $2.8M. Confidence: 96%.';if(q.toLowerCase().includes('supplier')) ans='Green Valley is creating the highest supplier risk. OTIF dropped to 84%, quality variance is 12% above normal and delayed produce shipments could create $2.8M in waste impact. Recommendation: activate backup supplier for high-risk SKUs.';if(q.toLowerCase().includes('straw')) ans='Strawberries are high risk: 36 hours shelf life remaining, demand -14%, humidity risk high. Recommendation: apply 15% markdown in Florida stores and transfer excess cases to nearby high-demand stores.';setTimeout(()=>{chat.insertAdjacentHTML('beforeend',`<div class="msg bot"><b>FreshFlow AI:</b> ${ans}<div class="actions"><button class="btn light" onclick="go('operations')">Open related actions</button><button class="btn ghost" onclick="scenario('heat');go('ai')">Simulate scenario</button></div></div>`);chat.scrollTop=chat.scrollHeight;},300);chat.scrollTop=chat.scrollHeight;}
function renderTwin(key){$$('.twin-node').forEach(n=>n.classList.toggle('active',n.dataset.node===key));const d=twin[key];$('#twinTitle').textContent=d.title;$('#twinDesc').textContent=d.desc;$('#twinMetrics').innerHTML=d.metrics.map(m=>`<div class="list-item"><span>${m[0]}</span><b>${m[1]}</b></div>`).join('');}
function renderReports(){const reports=['Weekly Grocery Loss Report','AI Savings Report','Supplier Risk Report','Sustainability Report'];$('#reportsGrid').innerHTML=reports.map(r=>`<div class="panel report-card"><h3>${r}</h3><p class="sub">Prepared for ${r.includes('Weekly')?'Operations':r.includes('Savings')?'C-Level':r.includes('Supplier')?'Procurement':'ESG'} review.</p><button class="btn blue" onclick="makeReport('${r}')">Generate</button></div>`).join('');}
function makeReport(name){$('#modalTitle').textContent=name;$('#modalText').textContent='Simulated report generated with current KPIs, approved actions, savings impact and explainable AI notes. In a real Walmart environment this would export to PDF, Excel or Power BI.';$('#modal').classList.add('show');}
function closeModal(){ $('#modal').classList.remove('show'); }
function globalSearch(q){q=q.toLowerCase();if(!q)return;const map={supplier:'suppliers',truck:'operations',cold:'operations',sku:'loss',straw:'loss',milk:'loss',report:'reports',scenario:'ai',ai:'ai',executive:'executive',store:'operations',digital:'twin'};const found=Object.keys(map).find(k=>q.includes(k));if(found){go(map[found]);toast('Navigated to '+map[found]);}else toast('Search simulated. Try: supplier, truck, SKU, report, scenario.');}
function init(){
  $$('.nav button').forEach(b=>b.addEventListener('click',()=>go(b.dataset.section)));
  $('#menuBtn').addEventListener('click',openMenu);$('#overlay').addEventListener('click',closeMenu);
  $('#darkBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');toast(document.body.classList.contains('dark')?'Dark mode on':'Light mode on')});
  $('#notifBtn').addEventListener('click',()=>{go('operations');toast('12 alerts: 3 critical, 5 warning, 4 informational')});
  $('#roleBtn').addEventListener('click',()=>{state.role=state.role==='Executive'?'Operations':'Executive';$('#roleBtn').textContent='👤 Role: '+state.role;go(state.role==='Executive'?'executive':'operations')});
  $('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')globalSearch(e.target.value)});
  $('#lossSearch').addEventListener('input',renderLoss);$('#riskFilter').addEventListener('change',renderLoss);
  $$('#periodTabs button').forEach(b=>b.addEventListener('click',()=>{$$('#periodTabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderChart(b.dataset.period)}));
  $$('.scenario').forEach(b=>b.addEventListener('click',()=>scenario(b.dataset.scenario)));
  $$('.twin-node').forEach(n=>n.addEventListener('click',()=>renderTwin(n.dataset.node)));
  $('#aiInput').addEventListener('keydown',e=>{if(e.key==='Enter')askAI()});
  renderAlerts();renderOps();renderActions();renderLoss();renderSuppliers();renderChart();scenario('heat');renderTwin('supplier');renderReports();
  setTimeout(()=>{$('#roiBar').style.width='82%'},250); updateSavings(0);
  const hash=(location.hash||'#overview').replace('#',''); go(hash);
}
window.addEventListener('resize',()=>{document.body.style.overflowX='hidden'});
document.addEventListener('DOMContentLoaded',init);
</script>
</body>
</html>
