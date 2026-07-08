<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Walmart FreshFlow AI | Internal Supply Chain Platform</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{
  --blue:#0071ce; --blue2:#004f9e; --spark:#ffc220; --bg:#f4f7fb; --card:#fff;
  --text:#152033; --muted:#667085; --line:#e4eaf2; --green:#16a34a; --red:#dc2626;
  --orange:#f97316; --purple:#7c3aed; --shadow:0 18px 45px rgba(16,24,40,.08);
  --radius:18px; --side:278px; --top:72px;
}
*{box-sizing:border-box;margin:0;padding:0} html{scroll-behavior:smooth} body{font-family:Inter,system-ui,sans-serif;background:var(--bg);color:var(--text)}
body.dark{--bg:#0b1220;--card:#111c2f;--text:#eef4ff;--muted:#a8b3c7;--line:#24314a;--shadow:0 18px 45px rgba(0,0,0,.25)}
button,input,select{font:inherit}.app{min-height:100vh}.sidebar{position:fixed;inset:0 auto 0 0;width:var(--side);background:linear-gradient(180deg,var(--blue2),#002b5c);color:white;padding:22px 18px;z-index:30;overflow:auto}.brand{display:flex;gap:12px;align-items:center;margin-bottom:24px}.spark{width:42px;height:42px;border-radius:13px;background:var(--spark);color:#064f9e;display:grid;place-items:center;font-weight:900}.brand h1{font-size:18px}.brand p{font-size:12px;opacity:.75}.nav{display:grid;gap:7px}.nav button{border:0;background:transparent;color:rgba(255,255,255,.76);padding:12px 13px;border-radius:13px;display:flex;gap:10px;align-items:center;text-align:left;cursor:pointer}.nav button:hover,.nav button.active{background:rgba(255,255,255,.14);color:white}.side-card{margin-top:22px;background:rgba(255,255,255,.11);border:1px solid rgba(255,255,255,.14);border-radius:16px;padding:15px}.side-card small{opacity:.7}.side-card strong{display:block;margin-top:6px;color:var(--spark)}
.topbar{position:fixed;left:var(--side);right:0;top:0;height:var(--top);background:rgba(255,255,255,.82);backdrop-filter:blur(14px);border-bottom:1px solid var(--line);z-index:20;display:flex;align-items:center;gap:14px;padding:0 24px}.dark .topbar{background:rgba(17,28,47,.82)}.menu{display:none;border:0;background:var(--blue);color:white;border-radius:12px;padding:10px}.search{flex:1;position:relative}.search input{width:100%;border:1px solid var(--line);background:var(--card);color:var(--text);border-radius:14px;padding:12px 14px 12px 40px}.search span{position:absolute;left:14px;top:11px}.pill{border:1px solid var(--line);background:var(--card);border-radius:999px;padding:10px 13px;color:var(--text);display:flex;gap:8px;align-items:center;white-space:nowrap}.toggle{cursor:pointer}.notif{position:relative}.dot{position:absolute;right:7px;top:7px;width:9px;height:9px;background:var(--red);border-radius:50%;border:2px solid var(--card)}
.main{margin-left:var(--side);padding:calc(var(--top) + 24px) 24px 40px}.hero{display:grid;grid-template-columns:1.3fr .7fr;gap:18px;margin-bottom:18px}.panel{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:22px}.hero-main{background:linear-gradient(135deg,var(--blue),var(--blue2));color:white;position:relative;overflow:hidden}.hero-main:after{content:"";position:absolute;right:-100px;top:-120px;width:310px;height:310px;border-radius:50%;background:radial-gradient(circle,rgba(255,194,32,.35),transparent 70%)}.eyebrow{color:var(--spark);font-size:12px;text-transform:uppercase;letter-spacing:.12em;font-weight:800}.hero h2{font-size:34px;line-height:1.05;margin:12px 0}.hero p{color:rgba(255,255,255,.82);max-width:760px}.actions{margin-top:18px;display:flex;gap:10px;flex-wrap:wrap}.btn{border:0;border-radius:13px;padding:11px 14px;font-weight:800;cursor:pointer}.btn.primary{background:var(--spark);color:#092c57}.btn.blue{background:var(--blue);color:white}.btn.light{background:#eef5ff;color:var(--blue2)}.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--text)}.status-row{display:grid;gap:13px}.status{display:flex;justify-content:space-between;align-items:center;padding:13px;border:1px solid var(--line);border-radius:14px}.badge{font-size:12px;font-weight:800;padding:5px 9px;border-radius:999px}.green{background:#dcfce7;color:#166534}.red{background:#fee2e2;color:#991b1b}.orange{background:#ffedd5;color:#9a3412}.blueb{background:#dbeafe;color:#1e40af}.purple{background:#ede9fe;color:#5b21b6}
.kpis{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;margin:18px 0}.kpi{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;box-shadow:var(--shadow)}.kpi small{color:var(--muted);font-weight:700}.kpi h3{font-size:24px;margin-top:8px}.trend{font-size:12px;color:var(--green);font-weight:800;margin-top:6px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.grid-3{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:18px}.section{display:none}.section.active{display:block}.section-title{display:flex;justify-content:space-between;align-items:center;margin:16px 0}.section-title h2{font-size:22px}.sub{color:var(--muted);font-size:14px;margin-top:4px}.tabs{display:flex;gap:8px;background:var(--card);border:1px solid var(--line);border-radius:15px;padding:5px}.tabs button{border:0;background:transparent;padding:10px 14px;border-radius:11px;cursor:pointer;font-weight:800;color:var(--muted)}.tabs button.active{background:var(--blue);color:white}
.chart{height:225px;display:flex;align-items:end;gap:10px;padding-top:18px}.bar{flex:1;background:linear-gradient(180deg,var(--blue),#8ec9ff);border-radius:10px 10px 4px 4px;min-height:34px;position:relative}.bar span{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);font-size:11px;font-weight:800;margin-bottom:5px}.heatmap{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.region{border-radius:15px;padding:16px;min-height:100px;border:1px solid var(--line);background:#eef6ff}.region b{display:block}.region .score{font-size:25px;margin-top:12px;font-weight:900}.risk-high{background:#fee2e2}.risk-mid{background:#ffedd5}.risk-low{background:#dcfce7}.table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:16px}table{width:100%;border-collapse:collapse;background:var(--card);min-width:780px}th,td{text-align:left;padding:14px;border-bottom:1px solid var(--line);font-size:13px}th{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.05em}tr:last-child td{border-bottom:0}.progress{height:9px;background:#e9eef6;border-radius:99px;overflow:hidden}.progress i{display:block;height:100%;background:var(--blue);border-radius:99px}.ai-card{border:1px solid var(--line);border-radius:16px;padding:16px;background:var(--card);margin-bottom:12px}.ai-card .top{display:flex;justify-content:space-between;gap:10px}.ai-card h3{font-size:16px}.meta{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.explain{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:12px}.why{background:var(--bg);border:1px solid var(--line);border-radius:13px;padding:10px;font-size:12px}.timeline{display:grid;gap:12px}.event{display:grid;grid-template-columns:65px 1fr;gap:12px;align-items:start}.event time{font-weight:900;color:var(--blue)}.event div{border-left:3px solid var(--blue);padding-left:12px}.dataflow{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;align-items:center}.node{border:1px solid var(--line);background:var(--card);border-radius:16px;padding:14px;text-align:center;font-weight:900}.arrow{text-align:center;color:var(--muted)}.assistant-box{display:grid;gap:12px}.chat{min-height:210px;background:var(--bg);border:1px solid var(--line);border-radius:16px;padding:14px;display:grid;gap:12px}.msg{max-width:85%;padding:12px 14px;border-radius:16px;font-size:14px}.user{justify-self:end;background:var(--blue);color:white}.bot{background:var(--card);border:1px solid var(--line)}.chat-input{display:flex;gap:10px}.chat-input input{flex:1;border:1px solid var(--line);border-radius:14px;padding:12px;background:var(--card);color:var(--text)}.sim-grid{display:grid;grid-template-columns:260px 1fr;gap:18px}.scenario-list{display:grid;gap:10px}.scenario{border:1px solid var(--line);background:var(--card);border-radius:14px;padding:13px;text-align:left;cursor:pointer}.scenario.active{border-color:var(--blue);box-shadow:0 0 0 3px rgba(0,113,206,.12)}.result-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.mini{background:var(--bg);border:1px solid var(--line);border-radius:14px;padding:14px}.mini b{font-size:22px}.twin{position:relative;min-height:320px;background:radial-gradient(circle at 20% 20%,rgba(0,113,206,.08),transparent 28%),radial-gradient(circle at 80% 70%,rgba(255,194,32,.16),transparent 28%),var(--card);border:1px solid var(--line);border-radius:20px;overflow:hidden}.twin-node{position:absolute;width:135px;border:1px solid var(--line);background:var(--card);border-radius:16px;padding:12px;text-align:center;box-shadow:var(--shadow);cursor:pointer}.twin-node small{color:var(--muted)}.n1{left:5%;top:38%}.n2{left:28%;top:15%}.n3{left:48%;top:47%}.n4{left:68%;top:18%}.n5{right:4%;top:55%}.route{position:absolute;height:3px;background:linear-gradient(90deg,var(--blue),var(--spark));transform-origin:left}.r1{left:18%;top:45%;width:180px;transform:rotate(-22deg)}.r2{left:38%;top:32%;width:170px;transform:rotate(32deg)}.r3{left:58%;top:53%;width:130px;transform:rotate(-32deg)}.r4{left:77%;top:38%;width:105px;transform:rotate(47deg)}.toast{position:fixed;right:22px;bottom:22px;background:#101828;color:white;border-radius:14px;padding:14px 16px;box-shadow:var(--shadow);z-index:60;transform:translateY(120px);opacity:0;transition:.25s}.toast.show{transform:translateY(0);opacity:1}.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:25}.overlay.show{display:block}
@media(max-width:1180px){.kpis{grid-template-columns:repeat(3,1fr)}.grid,.grid-3,.hero,.sim-grid{grid-template-columns:1fr}.dataflow{grid-template-columns:repeat(3,1fr)}.result-cards{grid-template-columns:1fr}.explain{grid-template-columns:repeat(2,1fr)}}
@media(max-width:760px){:root{--top:66px}.sidebar{transform:translateX(-105%);transition:.25s}.sidebar.open{transform:translateX(0)}.topbar{left:0;padding:0 12px}.menu{display:block}.topbar .pill.region,.topbar .pill.userpill{display:none}.main{margin-left:0;padding:calc(var(--top) + 14px) 12px 26px}.hero h2{font-size:25px}.panel{padding:16px;border-radius:16px}.kpis{grid-template-columns:1fr 1fr;gap:10px}.kpi h3{font-size:20px}.tabs{overflow:auto}.heatmap{grid-template-columns:1fr 1fr}.dataflow{grid-template-columns:1fr}.arrow{transform:rotate(90deg)}.chat-input{flex-direction:column}.explain{grid-template-columns:1fr}.twin{min-height:570px}.twin-node{position:relative;left:auto!important;right:auto!important;top:auto!important;margin:18px auto}.route{display:none}.search input{padding-left:35px}.btn{width:100%;}.actions .btn{width:auto}.section-title{align-items:flex-start;gap:12px;flex-direction:column}}
@media(max-width:420px){.kpis{grid-template-columns:1fr}.heatmap{grid-template-columns:1fr}.brand h1{font-size:16px}.topbar{gap:8px}.pill{padding:9px 10px}.notif span:not(.dot){display:none}}
</style>
</head>
<body>
<div class="app">
  <aside class="sidebar" id="sidebar">
    <div class="brand"><div class="spark">✦</div><div><h1>Walmart FreshFlow AI</h1><p>Grocery Supply Chain Intelligence</p></div></div>
    <div class="nav" id="nav">
      <button class="active" data-section="overview">🏠 Overview</button>
      <button data-section="executive">📊 Executive Intelligence</button>
      <button data-section="operations">⚡ Operations Center</button>
      <button data-section="ai">🧠 AI Command Center</button>
      <button data-section="loss">🥬 Grocery Loss Center</button>
      <button data-section="twin">🗺️ Digital Twin</button>
      <button data-section="suppliers">🤝 Suppliers</button>
      <button data-section="reports">📄 Reports</button>
    </div>
    <div class="side-card"><small>Platform status</small><strong>4,756 stores connected</strong><small>Last sync: 2 min ago</small></div>
  </aside>
  <div class="overlay" id="overlay"></div>
  <header class="topbar">
    <button class="menu" id="menuBtn">☰</button>
    <div class="search"><span>🔎</span><input id="searchInput" placeholder="Search store, SKU, supplier, truck or recommendation..." /></div>
    <button class="pill toggle" id="darkBtn">🌙</button>
    <div class="pill region">🇺🇸 US Grocery Network</div>
    <button class="pill notif" id="notifBtn">🔔 <span class="dot"></span></button>
    <div class="pill userpill">Juan · Strategy Team</div>
  </header>

  <main class="main">
    <section class="section active" id="overview">
      <div class="hero">
        <div class="panel hero-main">
          <span class="eyebrow">Internal AI platform</span>
          <h2>Reduce grocery waste, protect margins and improve freshness with AI-driven decisions.</h2>
          <p>FreshFlow AI connects store, supplier, inventory, logistics, weather and shelf-life data to predict losses before they happen and recommend actions managers can approve.</p>
          <div class="actions"><button class="btn primary" onclick="go('ai')">Open AI Engine</button><button class="btn light" onclick="go('operations')">View Daily Actions</button></div>
        </div>
        <div class="panel">
          <div class="section-title" style="margin-top:0"><div><h2>Network health</h2><p class="sub">Live simulated operational status</p></div></div>
          <div class="status-row">
            <div class="status"><span>Stores connected</span><b>4,756</b></div>
            <div class="status"><span>Critical alerts</span><span class="badge red">12 active</span></div>
            <div class="status"><span>AI model confidence</span><span class="badge green">96%</span></div>
            <div class="status"><span>Today savings approved</span><b id="todaySavings">$847K</b></div>
          </div>
        </div>
      </div>
      <div class="kpis">
        <div class="kpi"><small>Revenue Protected</small><h3 class="count" data-value="42.8">$0M</h3><p class="trend">↑ 12.5% MoM</p></div>
        <div class="kpi"><small>Grocery Waste Reduced</small><h3>-18.4%</h3><p class="trend">vs baseline</p></div>
        <div class="kpi"><small>Forecast Accuracy</small><h3>96.2%</h3><p class="trend">↑ 4.1 pts</p></div>
        <div class="kpi"><small>Inventory Accuracy</small><h3>94.8%</h3><p class="trend">↑ 2.7 pts</p></div>
        <div class="kpi"><small>AI Savings Generated</small><h3 id="savingsKpi">$12.4M</h3><p class="trend">quarter to date</p></div>
        <div class="kpi"><small>CO₂ Avoided</small><h3>18.2K t</h3><p class="trend">ESG impact</p></div>
      </div>
      <div class="grid">
        <div class="panel"><div class="section-title"><div><h2>AI Decision Engine</h2><p class="sub">Data → prediction → recommendation → approval → execution → learning</p></div></div><div class="dataflow"><div class="node">POS<br><small>Sales</small></div><div class="arrow">→</div><div class="node">IoT<br><small>Cold chain</small></div><div class="arrow">→</div><div class="node">AI<br><small>Prediction</small></div><div class="arrow">→</div><div class="node">Manager<br><small>Approval</small></div><div class="arrow">→</div><div class="node">Action<br><small>Executed</small></div><div class="arrow">→</div><div class="node">Learning<br><small>Model improves</small></div></div></div>
        <div class="panel"><div class="section-title"><div><h2>Regional risk heatmap</h2><p class="sub">Grocery loss risk by region</p></div></div><div class="heatmap"><div class="region risk-low"><b>West</b><div class="score">82</div><small>Low risk</small></div><div class="region risk-mid"><b>South</b><div class="score">71</div><small>Produce risk</small></div><div class="region risk-high"><b>Texas</b><div class="score">58</div><small>Heat wave</small></div><div class="region risk-low"><b>East</b><div class="score">88</div><small>Healthy</small></div></div></div>
      </div>
    </section>

    <section class="section" id="executive">
      <div class="section-title"><div><h2>Executive Intelligence</h2><p class="sub">C-level view: margin impact, strategic risk, ROI and ESG outcomes.</p></div><div class="tabs"><button class="active">Weekly</button><button>Monthly</button><button>Quarterly</button></div></div>
      <div class="grid-3">
        <div class="panel"><h2>Financial impact trend</h2><p class="sub">Simulated savings generated by approved AI recommendations</p><div class="chart" id="chart"><div class="bar" style="height:42%"><span>$1.1M</span></div><div class="bar" style="height:52%"><span>$1.4M</span></div><div class="bar" style="height:63%"><span>$1.8M</span></div><div class="bar" style="height:78%"><span>$2.2M</span></div><div class="bar" style="height:88%"><span>$2.7M</span></div><div class="bar" style="height:95%"><span>$3.1M</span></div></div></div>
        <div class="panel"><h2>AI ROI</h2><p class="sub">Projected annual return</p><div class="kpi" style="box-shadow:none;margin-top:12px"><small>Annual savings projection</small><h3>$48.6M</h3><p class="trend">Payback: 5.2 months</p></div><div class="progress"><i style="width:82%"></i></div><p class="sub" style="margin-top:8px">82% of target reached</p></div>
        <div class="panel"><h2>Strategic brief</h2><p class="sub">This week AI prevented an estimated <b>$2.8M</b> in grocery losses across <b>482 stores</b>, mainly from dynamic markdowns, product transfers and supplier risk alerts.</p><div class="actions"><button class="btn blue" onclick="toast('Executive report generated')">Generate report</button></div></div>
      </div>
      <div class="panel" style="margin-top:18px"><h2>Top executive recommendations</h2><div id="execRecs"></div></div>
    </section>

    <section class="section" id="operations">
      <div class="section-title"><div><h2>Operational Command Center</h2><p class="sub">Daily actions for store managers, logistics teams, DC managers and category leaders.</p></div><button class="btn blue" onclick="approveAll()">Approve all low-risk actions</button></div>
      <div class="grid">
        <div class="panel"><h2>Critical alerts</h2><div class="timeline"><div class="event"><time>08:12</time><div><b>Cold chain interruption</b><p class="sub">Truck #284 temperature reached 7°C. Max allowed: 4°C.</p></div></div><div class="event"><time>08:34</time><div><b>Produce waste risk</b><p class="sub">Store #1128 has strawberries expiring in 36 hours.</p></div></div><div class="event"><time>09:05</time><div><b>Supplier delay</b><p class="sub">Fresh Farms Co. late delivery detected at Atlanta DC.</p></div></div></div></div>
        <div class="panel"><h2>Cold chain monitor</h2><div class="table-wrap"><table><thead><tr><th>Truck</th><th>Temp</th><th>ETA</th><th>Risk</th><th>Action</th></tr></thead><tbody><tr><td>#284</td><td>7°C</td><td>42m</td><td><span class="badge red">Critical</span></td><td>Reroute</td></tr><tr><td>#109</td><td>3°C</td><td>1h 20m</td><td><span class="badge green">Normal</span></td><td>Monitor</td></tr><tr><td>#512</td><td>5°C</td><td>31m</td><td><span class="badge orange">Warning</span></td><td>Check sensor</td></tr></tbody></table></div></div>
      </div>
      <div class="panel" style="margin-top:18px"><h2>AI Action Center</h2><div id="actionList"></div></div>
    </section>

    <section class="section" id="ai">
      <div class="section-title"><div><h2>AI Command Center</h2><p class="sub">Ask questions, simulate disruptions and approve explainable recommendations.</p></div></div>
      <div class="grid">
        <div class="panel assistant-box"><h2>Ask Walmart AI</h2><div class="chat" id="chat"><div class="msg bot"><b>FreshFlow AI:</b> Ask me about waste, demand, inventory, suppliers or logistics risk.</div></div><div class="chat-input"><input id="aiInput" placeholder="Example: Why is produce waste increasing in Texas?"/><button class="btn blue" onclick="askAI()">Ask AI</button></div></div>
        <div class="panel"><h2>Scenario Simulator</h2><p class="sub">Select a disruption and see the predicted impact.</p><div class="sim-grid" style="margin-top:14px"><div class="scenario-list"><button class="scenario active" onclick="scenario('heat',this)">🌡️ Heat wave in Texas</button><button class="scenario" onclick="scenario('supplier',this)">🚚 Supplier delay</button><button class="scenario" onclick="scenario('holiday',this)">🛒 Holiday demand spike</button><button class="scenario" onclick="scenario('fuel',this)">⛽ Fuel price +12%</button></div><div><div class="result-cards" id="scenarioCards"></div><p class="sub" id="scenarioText" style="margin-top:14px"></p></div></div></div>
      </div>
    </section>

    <section class="section" id="loss">
      <div class="section-title"><div><h2>Grocery Loss Center</h2><p class="sub">The main problem area: fresh products with short shelf life, high volatility and margin impact.</p></div></div>
      <div class="panel"><div class="table-wrap"><table><thead><tr><th>SKU</th><th>Product</th><th>Category</th><th>Shelf life</th><th>Waste risk</th><th>Expected loss</th><th>AI recommendation</th><th>Status</th></tr></thead><tbody id="lossTable"></tbody></table></div></div>
    </section>

    <section class="section" id="twin">
      <div class="section-title"><div><h2>Digital Twin</h2><p class="sub">Simulated supply chain network: supplier → distribution center → truck → store → customer.</p></div></div>
      <div class="panel twin"><div class="route r1"></div><div class="route r2"></div><div class="route r3"></div><div class="route r4"></div><div class="twin-node n1" onclick="toast('Supplier: Fresh Farms | OTIF 91% | Risk medium')">🌱<b>Supplier</b><small>Fresh Farms</small></div><div class="twin-node n2" onclick="toast('DC Atlanta | Capacity 87% | 2 delayed docks')">🏭<b>DC Atlanta</b><small>87% capacity</small></div><div class="twin-node n3" onclick="toast('Truck #284 | Temperature alert | ETA 42m')">🚚<b>Truck #284</b><small>Temp alert</small></div><div class="twin-node n4" onclick="toast('Store #1128 | Produce risk high | 36h shelf life')">🏬<b>Store #1128</b><small>High risk</small></div><div class="twin-node n5" onclick="toast('Customer demand forecast: +18% beverages, -7% produce')">🛒<b>Demand</b><small>Forecast live</small></div></div>
    </section>

    <section class="section" id="suppliers">
      <div class="section-title"><div><h2>Supplier Intelligence</h2><p class="sub">Monitor supplier reliability, quality, delay risk and waste impact.</p></div></div>
      <div class="panel"><div class="table-wrap"><table><thead><tr><th>Supplier</th><th>OTIF</th><th>Quality</th><th>Lead time</th><th>Risk</th><th>Waste impact</th><th>AI action</th></tr></thead><tbody><tr><td>Fresh Farms Co.</td><td>91%</td><td>94%</td><td>2.8 days</td><td><span class="badge orange">Medium</span></td><td>$1.2M</td><td>Monitor delays</td></tr><tr><td>DairyBest</td><td>97%</td><td>96%</td><td>1.4 days</td><td><span class="badge green">Low</span></td><td>$420K</td><td>Keep allocation</td></tr><tr><td>Green Valley Produce</td><td>84%</td><td>88%</td><td>3.9 days</td><td><span class="badge red">High</span></td><td>$2.8M</td><td>Activate backup supplier</td></tr></tbody></table></div></div>
    </section>

    <section class="section" id="reports">
      <div class="section-title"><div><h2>Reports</h2><p class="sub">Executive and operational summaries generated from the AI decision engine.</p></div></div>
      <div class="grid-3"><div class="panel"><h2>Weekly Grocery Loss Report</h2><p class="sub">Waste trends, top SKUs, regions and approved actions.</p><button class="btn blue" onclick="toast('PDF report prepared')">Download PDF</button></div><div class="panel"><h2>AI Savings Report</h2><p class="sub">ROI, approved recommendations and savings attribution.</p><button class="btn blue" onclick="toast('Excel export prepared')">Export Excel</button></div><div class="panel"><h2>Sustainability Report</h2><p class="sub">Food rescued, CO₂ avoided and water saved.</p><button class="btn blue" onclick="toast('ESG report generated')">Generate ESG</button></div></div>
    </section>
  </main>
</div>
<div class="toast" id="toast"></div>
<script>
const actions=[
 {title:'Apply 15% markdown to strawberries', store:'Store #1128 · Florida', savings:4900, conf:96, risk:'High', why:['Shelf life 36h','Demand -12%','Excess inventory','Heat exposure']},
 {title:'Transfer 1,250 bananas to Orlando stores', store:'Miami → Orlando', savings:8300, conf:97, risk:'Medium', why:['Demand +24%','Shelf life 3d','Local event','Nearby route']},
 {title:'Reduce tomorrow dairy order by 7%', store:'Dallas region', savings:7200, conf:93, risk:'High', why:['Sales drop','Overstock','Supplier early','Lower traffic']},
 {title:'Activate backup supplier for Green Valley', store:'Atlanta DC', savings:28000, conf:91, risk:'Critical', why:['OTIF down','Delay 18h','Quality risk','DC shortage']}
];
const loss=[['1029','Strawberries','Produce','36h','92%','$4,900','Markdown 15%','Review'],['4102','Milk','Dairy','2 days','87%','$7,200','Transfer inventory','Review'],['8821','Bread','Bakery','18h','81%','$3,100','Reduce tomorrow order','Review'],['7330','Avocados','Produce','3 days','76%','$2,800','Bundle promotion','Monitor'],['5510','Fresh chicken','Meat','48h','84%','$6,600','Move to high-demand stores','Review']];
const scenarioData={heat:{cards:[['Waste risk','+22%','red'],['Beverage demand','+31%','green'],['Produce shelf life','-18%','orange']],text:'AI recommends increasing beverage replenishment, reducing sensitive produce orders and applying markdowns today in 184 Texas stores. Estimated savings: $2.8M.'},supplier:{cards:[['Delay risk','+34%','red'],['Stockout risk','+17%','orange'],['Backup cost','+$420K','orange']],text:'AI recommends activating backup supplier DairyBest and reallocating inventory from Dallas DC. Expected avoided loss: $1.9M.'},holiday:{cards:[['Demand spike','+28%','green'],['Stockout risk','+21%','orange'],['Projected sales','+$8.4M','green']],text:'AI recommends increasing replenishment for beverages, snacks and grill products while reducing bakery orders after the weekend.'},fuel:{cards:[['Logistics cost','+12%','red'],['Route efficiency','-7%','orange'],['Optimized savings','$740K','green']],text:'AI recommends route consolidation across Southeast DCs and night-shift dispatch to reduce fuel exposure.'}};
function go(id){document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.section===id));closeMenu();window.scrollTo(0,0)}
document.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>go(b.dataset.section));
function renderActions(){let html=''; actions.forEach((a,i)=>{html+=`<div class="ai-card"><div class="top"><div><h3>${a.title}</h3><p class="sub">${a.store}</p></div><span class="badge ${a.risk==='Critical'||a.risk==='High'?'red':a.risk==='Medium'?'orange':'green'}">${a.risk}</span></div><div class="meta"><span class="badge blueb">Savings $${a.savings.toLocaleString()}</span><span class="badge green">Confidence ${a.conf}%</span><span class="badge purple">Human-in-the-loop</span></div><div class="explain">${a.why.map(w=>`<div class="why">✓ ${w}</div>`).join('')}</div><div class="actions"><button class="btn blue" onclick="approve(${i},this)">Approve</button><button class="btn ghost" onclick="toast('Recommendation sent to review queue')">Review</button><button class="btn ghost" onclick="go('ai')">Simulate</button></div></div>`});document.getElementById('actionList').innerHTML=html;document.getElementById('execRecs').innerHTML=html.replaceAll('Approve','Approve strategy').replaceAll('Review','Details')}
function renderLoss(){document.getElementById('lossTable').innerHTML=loss.map((r,i)=>`<tr><td>${r[0]}</td><td><b>${r[1]}</b></td><td>${r[2]}</td><td>${r[3]}</td><td><span class="badge ${parseInt(r[4])>85?'red':parseInt(r[4])>78?'orange':'green'}">${r[4]}</span></td><td>${r[5]}</td><td>${r[6]}</td><td><button class="btn light" onclick="toast('Action approved for ${r[1]}')">Approve</button></td></tr>`).join('')}
let approved=0;function approve(i,btn){approved+=actions[i].savings;btn.textContent='Approved';btn.disabled=true;btn.className='btn ghost';document.getElementById('todaySavings').textContent='$'+Math.round((847000+approved)/1000)+'K';document.getElementById('savingsKpi').textContent='$'+(12.4+approved/1000000).toFixed(2)+'M';toast('Approved: '+actions[i].title+' · savings +$'+actions[i].savings.toLocaleString())}
function approveAll(){document.querySelectorAll('#actionList .btn.blue').forEach((b,i)=>{if(!b.disabled && actions[i].conf>=93) approve(i,b)})}
function askAI(){const input=document.getElementById('aiInput');const q=input.value.trim()||'Why is produce waste increasing in Texas?';const chat=document.getElementById('chat');chat.innerHTML+=`<div class="msg user">${q}</div>`;setTimeout(()=>{chat.innerHTML+=`<div class="msg bot"><b>FreshFlow AI analysis:</b><br>Produce waste is increasing due to excess deliveries, heat-wave pressure on shelf life and lower weekday demand in 18 stores.<br><br><b>Recommended action:</b> apply 12% markdown today and transfer 2,300 units to high-demand nearby stores.<br><br><b>Expected savings:</b> $18,400 · <b>Confidence:</b> 96%</div>`;chat.scrollTop=chat.scrollHeight},250);input.value=''}
function scenario(key,el){document.querySelectorAll('.scenario').forEach(s=>s.classList.remove('active'));el.classList.add('active');const d=scenarioData[key];document.getElementById('scenarioCards').innerHTML=d.cards.map(c=>`<div class="mini"><small>${c[0]}</small><br><b>${c[1]}</b><p class="trend" style="color:var(--${c[2]})">AI forecast</p></div>`).join('');document.getElementById('scenarioText').textContent=d.text}
function toast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2500)}
const sidebar=document.getElementById('sidebar'),overlay=document.getElementById('overlay');function openMenu(){sidebar.classList.add('open');overlay.classList.add('show');document.body.style.overflow='hidden'}function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show');document.body.style.overflow=''}document.getElementById('menuBtn').onclick=openMenu;overlay.onclick=closeMenu;document.getElementById('darkBtn').onclick=()=>{document.body.classList.toggle('dark');toast(document.body.classList.contains('dark')?'Dark mode on':'Light mode on')};document.getElementById('notifBtn').onclick=()=>toast('12 alerts: 3 critical, 5 warning, 4 informational');document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter') toast('Search simulated: '+e.target.value)});
function animateCounts(){document.querySelectorAll('.count').forEach(el=>{let target=parseFloat(el.dataset.value),n=0;let int=setInterval(()=>{n+=target/25;if(n>=target){n=target;clearInterval(int)}el.textContent='$'+n.toFixed(1)+'M'},35)})}
renderActions();renderLoss();scenario('heat',document.querySelector('.scenario.active'));animateCounts();
</script>
</body>
</html>
