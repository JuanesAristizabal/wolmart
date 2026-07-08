<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Walmart Supply Chain Intelligence Hub</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    :root{
      --walmart-blue:#0071ce;
      --walmart-dark:#004c91;
      --spark:#ffc220;
      --navy:#061a2f;
      --bg:#f4f7fb;
      --card:#ffffff;
      --ink:#112033;
      --muted:#657386;
      --line:#dbe4ef;
      --green:#12a150;
      --red:#d93025;
      --orange:#f59e0b;
      --cyan:#16a3c7;
      --shadow:0 18px 45px rgba(6,26,47,.12);
      --radius:22px;
    }

    *{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;background:var(--bg);color:var(--ink);line-height:1.55}
    a{text-decoration:none;color:inherit}
    button,input,select{font-family:inherit}

    .app{display:grid;grid-template-columns:280px 1fr;min-height:100vh}

    aside{position:sticky;top:0;height:100vh;background:var(--navy);color:#fff;padding:24px 20px;overflow:auto}
    .brand{display:flex;align-items:center;gap:12px;margin-bottom:28px}
    .spark{width:38px;height:38px;background:var(--spark);border-radius:50%;display:grid;place-items:center;color:var(--navy);font-weight:900;font-size:22px;box-shadow:0 0 0 7px rgba(255,194,32,.12)}
    .brand h1{font-size:20px;line-height:1.05;font-weight:800;letter-spacing:-.03em}
    .brand span{display:block;font-size:11px;color:#b8c9dd;font-weight:600;margin-top:3px;letter-spacing:.08em;text-transform:uppercase}
    .nav-label{font-size:11px;color:#7f98b6;font-weight:800;text-transform:uppercase;letter-spacing:.12em;margin:24px 12px 10px}
    .side-link{display:flex;align-items:center;gap:12px;color:#d6e4f4;padding:12px 14px;border-radius:14px;margin:3px 0;font-size:14px;font-weight:650;transition:.2s}
    .side-link:hover,.side-link.active{background:rgba(0,113,206,.23);color:#fff}
    .side-link b{width:26px;height:26px;border-radius:9px;display:grid;place-items:center;background:rgba(255,255,255,.08);font-size:13px}
    .side-card{margin-top:24px;background:linear-gradient(145deg,rgba(0,113,206,.38),rgba(255,194,32,.18));border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:18px}
    .side-card p{font-size:13px;color:#d6e4f4;margin:8px 0 14px}
    .side-card .pill{display:inline-block;background:var(--spark);color:var(--navy);font-weight:800;border-radius:999px;padding:7px 10px;font-size:12px}

    main{min-width:0}
    header.topbar{position:sticky;top:0;z-index:10;background:rgba(244,247,251,.86);backdrop-filter:blur(16px);border-bottom:1px solid var(--line);padding:16px 28px;display:flex;align-items:center;gap:18px;justify-content:space-between}
    .mobile-btn{display:none;border:none;background:var(--navy);color:#fff;width:42px;height:42px;border-radius:12px;font-size:20px}
    .search{flex:1;max-width:560px;position:relative}
    .search input{width:100%;border:1px solid var(--line);border-radius:999px;padding:13px 18px 13px 44px;background:#fff;outline:none;font-size:14px}
    .search span{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:var(--muted)}
    .top-actions{display:flex;align-items:center;gap:12px}
    .badge{background:#fff;border:1px solid var(--line);border-radius:999px;padding:11px 14px;font-size:13px;font-weight:750;display:flex;align-items:center;gap:8px}
    .badge .dot{width:9px;height:9px;border-radius:50%;background:var(--green)}
    .avatar{width:42px;height:42px;border-radius:50%;background:var(--walmart-blue);color:#fff;display:grid;place-items:center;font-weight:800}

    .content{padding:28px;max-width:1500px;margin:auto}
    .hero{background:radial-gradient(circle at 75% 20%, rgba(255,194,32,.36), transparent 31%),linear-gradient(135deg,var(--walmart-blue),var(--walmart-dark) 62%,#052d58);color:#fff;border-radius:var(--radius);padding:34px;box-shadow:var(--shadow);display:grid;grid-template-columns:1.08fr .92fr;gap:26px;overflow:hidden;position:relative}
    .hero:after{content:"";position:absolute;width:280px;height:280px;border-radius:50%;right:-120px;bottom:-120px;background:rgba(255,255,255,.09)}
    .eyebrow{display:inline-flex;gap:8px;align-items:center;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.2);padding:8px 12px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .hero h2{font-size:clamp(32px,4.4vw,58px);line-height:.98;letter-spacing:-.05em;margin:18px 0 16px;max-width:780px}
    .hero p{font-size:17px;color:#dbeaff;max-width:720px}
    .hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}
    .btn{border:none;border-radius:14px;padding:13px 18px;font-weight:800;cursor:pointer;transition:.2s;display:inline-flex;align-items:center;gap:9px}
    .btn.primary{background:var(--spark);color:var(--navy)}
    .btn.secondary{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)}
    .btn:hover{transform:translateY(-2px)}
    .command-card{background:rgba(255,255,255,.11);border:1px solid rgba(255,255,255,.18);border-radius:22px;padding:20px;position:relative;z-index:1}
    .command-card h3{font-size:16px;margin-bottom:12px}
    .ask-box{background:#fff;color:var(--ink);border-radius:16px;padding:15px;display:flex;align-items:center;gap:10px;margin-bottom:14px}
    .ask-box input{border:none;outline:none;flex:1;color:var(--ink);font-weight:600;min-width:0}
    .ai-answer{background:rgba(6,26,47,.55);border-radius:16px;padding:15px;color:#e8f2ff;font-size:14px}
    .ai-answer strong{color:var(--spark)}

    .kpi-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:16px;margin:22px 0}
    .kpi{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:18px;box-shadow:0 10px 25px rgba(6,26,47,.06)}
    .kpi small{color:var(--muted);font-weight:750;font-size:12px;text-transform:uppercase;letter-spacing:.07em}
    .kpi h3{font-size:28px;letter-spacing:-.04em;margin:6px 0 2px}
    .trend{font-size:12px;font-weight:800}.up{color:var(--green)}.down{color:var(--red)}.warn{color:var(--orange)}

    .section{margin-top:26px}.section-title{display:flex;justify-content:space-between;align-items:end;gap:16px;margin-bottom:14px}.section-title h2{font-size:23px;letter-spacing:-.03em}.section-title p{color:var(--muted);font-size:14px;max-width:620px}
    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.grid-2{display:grid;grid-template-columns:1.18fr .82fr;gap:18px}.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:22px;box-shadow:0 10px 25px rgba(6,26,47,.05)}
    .module-icon{width:46px;height:46px;border-radius:16px;background:#eaf4ff;color:var(--walmart-blue);display:grid;place-items:center;font-size:21px;margin-bottom:14px;font-weight:900}
    .card h3{font-size:18px;margin-bottom:8px}.card p{color:var(--muted);font-size:14px}.confidence{margin-top:15px;background:#edf3fa;border-radius:999px;height:9px;overflow:hidden}.bar{height:100%;background:var(--walmart-blue);border-radius:inherit}

    .dashboard{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:stretch}.chart{height:220px;display:flex;align-items:end;gap:10px;padding-top:20px}.chart div{flex:1;background:linear-gradient(180deg,var(--walmart-blue),#7bb7ec);border-radius:12px 12px 4px 4px;min-height:40px;position:relative}.chart div:nth-child(2n){background:linear-gradient(180deg,var(--spark),#ffe69a)}
    .alert{display:flex;gap:12px;align-items:flex-start;padding:14px;border:1px solid var(--line);border-radius:16px;margin-top:10px;background:#fff}.alert .level{width:10px;height:10px;border-radius:50%;margin-top:7px;flex:0 0 auto}.critical{background:var(--red)}.medium{background:var(--orange)}.low{background:var(--green)}.alert b{display:block;font-size:14px}.alert span{font-size:13px;color:var(--muted)}

    .map{height:360px;background:linear-gradient(145deg,#eaf4ff,#fff);border-radius:22px;position:relative;overflow:hidden;border:1px solid var(--line)}
    .map:before{content:"";position:absolute;inset:20px;background:radial-gradient(circle at 20% 35%,rgba(0,113,206,.22),transparent 10%),radial-gradient(circle at 70% 28%,rgba(255,194,32,.5),transparent 8%),radial-gradient(circle at 52% 70%,rgba(18,161,80,.22),transparent 10%),radial-gradient(circle at 82% 70%,rgba(217,48,37,.2),transparent 8%);filter:blur(1px)}
    .node{position:absolute;width:18px;height:18px;border-radius:50%;background:var(--green);box-shadow:0 0 0 8px rgba(18,161,80,.12);z-index:2}.node.yellow{background:var(--spark);box-shadow:0 0 0 8px rgba(255,194,32,.18)}.node.red{background:var(--red);box-shadow:0 0 0 8px rgba(217,48,37,.15)}
    .line{position:absolute;height:2px;background:rgba(0,113,206,.25);transform-origin:left;z-index:1}.map-label{position:absolute;background:#fff;border:1px solid var(--line);border-radius:12px;padding:8px 10px;font-size:12px;font-weight:800;box-shadow:0 10px 20px rgba(6,26,47,.08);z-index:3}

    table{width:100%;border-collapse:collapse;overflow:hidden}th,td{text-align:left;padding:14px 12px;border-bottom:1px solid var(--line);font-size:14px}th{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.07em}.risk{font-weight:900;border-radius:999px;padding:6px 10px;font-size:12px;display:inline-block}.risk.high{background:#fde8e6;color:var(--red)}.risk.med{background:#fff3d6;color:#a76500}.risk.low{background:#e6f6ed;color:var(--green)}

    .simulator{display:grid;grid-template-columns:1fr 1fr;gap:16px}.scenario{background:#f7fafd;border:1px solid var(--line);border-radius:18px;padding:16px}.scenario select,.scenario input{width:100%;margin-top:8px;border:1px solid var(--line);border-radius:12px;padding:12px;background:#fff}.result{background:var(--navy);color:#fff;border-radius:18px;padding:18px}.result-row{display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.12);padding:10px 0;font-size:14px}.result-row:last-child{border-bottom:none}.result-row strong{color:var(--spark)}

    .timeline{position:relative;padding-left:26px}.timeline:before{content:"";position:absolute;left:8px;top:6px;bottom:6px;width:2px;background:var(--line)}.time-item{position:relative;margin:0 0 16px}.time-item:before{content:"";position:absolute;left:-23px;top:6px;width:12px;height:12px;border-radius:50%;background:var(--walmart-blue);box-shadow:0 0 0 5px #eaf4ff}.time-item b{font-size:14px}.time-item p{font-size:13px;color:var(--muted)}

    .footer-cta{background:var(--navy);color:#fff;border-radius:var(--radius);padding:28px;display:flex;justify-content:space-between;align-items:center;gap:18px;margin-top:26px}.footer-cta h2{letter-spacing:-.03em}.footer-cta p{color:#bed1e8;margin-top:5px}.email-row{display:flex;gap:10px}.email-row input{border:none;border-radius:14px;padding:14px;min-width:250px}.email-row button{border:none;border-radius:14px;padding:14px 18px;background:var(--spark);color:var(--navy);font-weight:900}

    @media(max-width:1180px){.app{grid-template-columns:1fr}aside{position:fixed;left:-310px;transition:.25s;z-index:30;width:280px}.app.menu-open aside{left:0}.mobile-btn{display:block}.hero,.grid-2,.dashboard{grid-template-columns:1fr}.kpi-grid{grid-template-columns:repeat(3,1fr)}.grid-4{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:760px){header.topbar{padding:12px;gap:10px}.search{display:none}.badge{display:none}.content{padding:14px}.hero{padding:24px}.hero h2{font-size:34px}.grid-3,.grid-4,.simulator{grid-template-columns:1fr}.kpi-grid{grid-template-columns:repeat(2,1fr);gap:12px}.kpi h3{font-size:23px}.section-title{align-items:flex-start;flex-direction:column}.card{padding:18px}.map{height:300px}table{display:block;overflow-x:auto;white-space:nowrap}.footer-cta{flex-direction:column;align-items:flex-start}.email-row{width:100%;flex-direction:column}.email-row input{min-width:0;width:100%}}
    @media(max-width:460px){.kpi-grid{grid-template-columns:1fr}.hero-actions .btn{width:100%;justify-content:center}.top-actions .avatar{display:none}.brand h1{font-size:18px}}
  </style>
</head>
<body>
  <div class="app" id="app">
    <aside>
      <div class="brand">
        <div class="spark">✱</div>
        <h1>Walmart<span>Supply Chain AI Hub</span></h1>
      </div>
      <div class="nav-label">Command Center</div>
      <a class="side-link active" href="#overview"><b>📊</b>Overview</a>
      <a class="side-link" href="#modules"><b>🤖</b>AI Modules</a>
      <a class="side-link" href="#operations"><b>🛰️</b>Operations Map</a>
      <a class="side-link" href="#alerts"><b>⚠️</b>Live Alerts</a>
      <a class="side-link" href="#simulator"><b>🔮</b>Scenario Simulator</a>
      <a class="side-link" href="#reports"><b>📄</b>Reports</a>
      <div class="nav-label">Internal Tools</div>
      <a class="side-link" href="#suppliers"><b>🚚</b>Supplier Scorecards</a>
      <a class="side-link" href="#sustainability"><b>🌱</b>Sustainability</a>
      <a class="side-link" href="#newsletter"><b>✉️</b>Weekly Updates</a>
      <div class="side-card">
        <span class="pill">Pilot Mode</span>
        <p>Prototype for Walmart internal teams: groceries, operations, logistics, stores and supply chain leadership.</p>
      </div>
    </aside>

    <main>
      <header class="topbar">
        <button class="mobile-btn" onclick="document.getElementById('app').classList.toggle('menu-open')">☰</button>
        <div class="search"><span>🔎</span><input placeholder="Search store, supplier, product, incident or route..." /></div>
        <div class="top-actions">
          <div class="badge"><span class="dot"></span>Systems Online</div>
          <div class="badge">🔔 8 Alerts</div>
          <div class="avatar">WM</div>
        </div>
      </header>

      <div class="content">
        <section class="hero" id="overview">
          <div>
            <span class="eyebrow">Walmart Internal AI Platform</span>
            <h2>Smarter supply chain decisions for fresher shelves and lower grocery losses.</h2>
            <p>AI-powered visibility across stores, suppliers, distribution centers and transportation — designed to prevent waste, improve availability and protect margins.</p>
            <div class="hero-actions">
              <a href="#operations" class="btn primary">View Live Operations →</a>
              <a href="#modules" class="btn secondary">Explore AI Modules</a>
            </div>
          </div>
          <div class="command-card">
            <h3>Ask Walmart AI</h3>
            <div class="ask-box">🤖 <input value="Why is produce waste increasing in Florida?" /></div>
            <div class="ai-answer"><strong>AI Insight:</strong> Demand dropped 14% after a local weather shift while two suppliers delivered 18 hours early. Recommended action: transfer 2,300 units to nearby high-demand stores and apply a 15% markdown today.</div>
          </div>
        </section>

        <div class="kpi-grid">
          <div class="kpi"><small>Food Waste</small><h3>-18.4%</h3><span class="trend up">▲ improved vs last month</span></div>
          <div class="kpi"><small>Inventory Accuracy</small><h3>96.2%</h3><span class="trend up">▲ +2.1 pts</span></div>
          <div class="kpi"><small>Forecast Confidence</small><h3>93%</h3><span class="trend up">▲ high confidence</span></div>
          <div class="kpi"><small>Supplier Risk</small><h3>7</h3><span class="trend warn">● active alerts</span></div>
          <div class="kpi"><small>Annualized Savings</small><h3>$12.4M</h3><span class="trend up">▲ projected</span></div>
          <div class="kpi"><small>CO₂ Avoided</small><h3>42t</h3><span class="trend up">▲ sustainability impact</span></div>
        </div>

        <section class="section" id="modules">
          <div class="section-title"><div><h2>AI Modules</h2><p>Each module supports a specific operational decision: forecasting, replenishment, supplier risk, routing and grocery loss prevention.</p></div></div>
          <div class="grid-3">
            <div class="card"><div class="module-icon">📈</div><h3>Demand Forecasting</h3><p>Predicts demand by store, SKU, season, weather, local events and price changes.</p><div class="confidence"><div class="bar" style="width:93%"></div></div></div>
            <div class="card"><div class="module-icon">🥬</div><h3>Freshness & Waste Control</h3><p>Detects products at risk of expiration and recommends markdowns, donations or transfers.</p><div class="confidence"><div class="bar" style="width:89%"></div></div></div>
            <div class="card"><div class="module-icon">🚚</div><h3>Supplier Risk Monitoring</h3><p>Tracks late deliveries, quality issues, shortage risk and supplier reliability.</p><div class="confidence"><div class="bar" style="width:86%"></div></div></div>
            <div class="card"><div class="module-icon">📦</div><h3>Smart Replenishment</h3><p>Recommends store-level reorder quantities based on live demand and shelf capacity.</p><div class="confidence"><div class="bar" style="width:91%"></div></div></div>
            <div class="card"><div class="module-icon">🛣️</div><h3>Route Optimization</h3><p>Improves truck routing, fuel usage, delivery timing and cold-chain reliability.</p><div class="confidence"><div class="bar" style="width:84%"></div></div></div>
            <div class="card"><div class="module-icon">🔔</div><h3>Store-Level Alerts</h3><p>Sends prioritized recommendations to store managers before losses happen.</p><div class="confidence"><div class="bar" style="width:95%"></div></div></div>
          </div>
        </section>

        <section class="section grid-2" id="operations">
          <div class="card">
            <div class="section-title"><div><h2>Interactive Supply Chain Map</h2><p>Simulated network view of suppliers, distribution centers, stores and transportation risk.</p></div></div>
            <div class="map">
              <div class="line" style="left:18%;top:38%;width:42%;transform:rotate(-8deg)"></div>
              <div class="line" style="left:41%;top:47%;width:31%;transform:rotate(20deg)"></div>
              <span class="node" style="left:17%;top:35%"></span><span class="map-label" style="left:12%;top:22%">Supplier: Produce</span>
              <span class="node yellow" style="left:53%;top:42%"></span><span class="map-label" style="left:47%;top:28%">DC: Atlanta</span>
              <span class="node red" style="left:76%;top:62%"></span><span class="map-label" style="left:63%;top:70%">Florida Stores: High Risk</span>
              <span class="node" style="left:38%;top:70%"></span><span class="map-label" style="left:30%;top:78%">Texas Region: Stable</span>
            </div>
          </div>
          <div class="card" id="alerts">
            <h2>Live Alerts</h2>
            <div class="alert"><span class="level critical"></span><div><b>Cold-chain interruption</b><span>Route 18B temperature above threshold for 22 minutes.</span></div></div>
            <div class="alert"><span class="level medium"></span><div><b>Produce overstock risk</b><span>Florida avocado inventory 21% above projected demand.</span></div></div>
            <div class="alert"><span class="level medium"></span><div><b>Supplier delay</b><span>Dairy supplier ETA delayed 4.5 hours in Midwest region.</span></div></div>
            <div class="alert"><span class="level low"></span><div><b>Markdown opportunity</b><span>Bakery items can recover margin with 10% evening discount.</span></div></div>
          </div>
        </section>

        <section class="section grid-2">
          <div class="card">
            <h2>Grocery Loss Predictor</h2>
            <table>
              <thead><tr><th>Store</th><th>Category</th><th>Risk</th><th>AI Recommendation</th></tr></thead>
              <tbody>
                <tr><td>Miami #124</td><td>Produce</td><td><span class="risk high">High</span></td><td>Transfer 2,300 units + 15% markdown</td></tr>
                <tr><td>Dallas #302</td><td>Dairy</td><td><span class="risk med">Medium</span></td><td>Reduce next order by 7%</td></tr>
                <tr><td>Phoenix #088</td><td>Bakery</td><td><span class="risk high">High</span></td><td>Evening discount + donation route</td></tr>
                <tr><td>Denver #451</td><td>Frozen</td><td><span class="risk low">Low</span></td><td>Maintain current replenishment</td></tr>
              </tbody>
            </table>
          </div>
          <div class="card">
            <h2>AI Timeline</h2>
            <div class="timeline">
              <div class="time-item"><b>08:30 — Demand spike detected</b><p>Breakfast items rising above forecast in Texas.</p></div>
              <div class="time-item"><b>09:00 — Supplier notified</b><p>System requests early confirmation from regional supplier.</p></div>
              <div class="time-item"><b>09:15 — Transfer suggested</b><p>Excess dairy moved from Dallas to Austin stores.</p></div>
              <div class="time-item"><b>09:40 — Truck rerouted</b><p>Route adjusted to prevent cold-chain failure.</p></div>
              <div class="time-item"><b>10:00 — Waste avoided</b><p>Projected $18,400 loss prevented.</p></div>
            </div>
          </div>
        </section>

        <section class="section dashboard" id="reports">
          <div class="card">
            <h2>Waste Forecast Trend</h2>
            <div class="chart"><div style="height:78%"></div><div style="height:64%"></div><div style="height:70%"></div><div style="height:53%"></div><div style="height:48%"></div><div style="height:39%"></div><div style="height:34%"></div></div>
          </div>
          <div class="card" id="simulator">
            <h2>Scenario Simulator</h2>
            <div class="simulator">
              <div class="scenario">
                <label><b>What happens if...</b></label>
                <select><option>Heat wave increases produce spoilage</option><option>Supplier closes for 48 hours</option><option>Fuel price increases 12%</option><option>Demand jumps 30%</option></select>
                <input type="range" min="0" max="100" value="64" />
              </div>
              <div class="result">
                <div class="result-row"><span>Waste Risk</span><strong>+11%</strong></div>
                <div class="result-row"><span>Recommended Action</span><strong>Reroute + markdown</strong></div>
                <div class="result-row"><span>Potential Savings</span><strong>$420K</strong></div>
                <div class="result-row"><span>AI Confidence</span><strong>91%</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section class="section grid-4" id="suppliers">
          <div class="card"><h3>Supplier A</h3><p>On-time: 97%<br>Quality: 94%<br>Risk: Low</p></div>
          <div class="card"><h3>Supplier B</h3><p>On-time: 83%<br>Quality: 88%<br>Risk: Medium</p></div>
          <div class="card"><h3>Supplier C</h3><p>On-time: 91%<br>Quality: 92%<br>Risk: Low</p></div>
          <div class="card"><h3>Supplier D</h3><p>On-time: 72%<br>Quality: 81%<br>Risk: High</p></div>
        </section>

        <section class="section grid-4" id="sustainability">
          <div class="kpi"><small>Food Rescued</small><h3>120t</h3><span class="trend up">▲ donated / redirected</span></div>
          <div class="kpi"><small>Water Saved</small><h3>2.4M L</h3><span class="trend up">▲ impact estimate</span></div>
          <div class="kpi"><small>Packaging Optimized</small><h3>18%</h3><span class="trend up">▲ less excess</span></div>
          <div class="kpi"><small>Fuel Efficiency</small><h3>+9%</h3><span class="trend up">▲ route optimization</span></div>
        </section>

        <section class="footer-cta" id="newsletter">
          <div><h2>Get Weekly Supply Chain Intelligence Updates</h2><p>Internal briefing for operations, grocery, logistics and sustainability teams.</p></div>
          <form class="email-row" onsubmit="return false;"><input type="email" placeholder="associate@walmart.com" /><button>Subscribe</button></form>
        </section>
      </div>
    </main>
  </div>

  <script>
    document.querySelectorAll('.side-link').forEach(link=>{
      link.addEventListener('click',()=>document.getElementById('app').classList.remove('menu-open'));
    });
  </script>
</body>
</html>
