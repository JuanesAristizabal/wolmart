const state = {
  role: "Executive",
  savings: 12.4,
  accepted: 324,
  adoption: 78,
  currentFilter: "all",
  appliedScenario: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const pages = $$(".page");
const navButtons = $$(".nav-btn");
const sidebar = $("#sidebar");
const backdrop = $("#backdrop");
const toast = $("#toast");

const overviewKpis = [
  ["Revenue Protected", "$42.8M", "+14% vs last month"],
  ["Grocery Waste Reduced", "-18.4%", "AI-driven prevention"],
  ["Forecast Accuracy", "96.2%", "+7.1 points"],
  ["Inventory Accuracy", "94.8%", "store-level visibility"],
  ["CO₂ Avoided", "18.2K tons", "sustainability impact"]
];

const opsKpis = [
  ["Open AI Actions", "12", "Requires manager approval"],
  ["High-Risk SKUs", "43", "Across fresh categories"],
  ["Cold Chain Alerts", "3", "Temperature issues"],
  ["Stores Needing Action", "184", "Today"]
];

const actions = [
  {
    title: "Apply 15% markdown",
    area: "Strawberries · Texas",
    priority: "High Priority",
    savings: 4.9,
    confidence: "96%",
    status: "Pending",
    why: [["Shelf life", 92], ["Demand gap", 76], ["Weather", 88], ["Inventory excess", 71]]
  },
  {
    title: "Transfer dairy inventory",
    area: "Store #118 → #210",
    priority: "High Priority",
    savings: 7.2,
    confidence: "93%",
    status: "Pending",
    why: [["Shelf life", 83], ["Nearby demand", 81], ["Route availability", 72], ["Inventory excess", 90]]
  },
  {
    title: "Activate backup supplier",
    area: "Green Valley Produce",
    priority: "Medium Priority",
    savings: 12.7,
    confidence: "91%",
    status: "Pending",
    why: [["Delay risk", 88], ["OTIF drop", 74], ["Waste impact", 86], ["DC capacity", 62]]
  },
  {
    title: "Reduce bakery order",
    area: "Phoenix region",
    priority: "Medium Priority",
    savings: 2.1,
    confidence: "88%",
    status: "Pending",
    why: [["Demand forecast", 69], ["Shelf life", 78], ["Sales velocity", 64], ["Local traffic", 52]]
  }
];

const lossItems = [
  ["1029", "Strawberries", "Produce", "36h", "92%", "Apply 15% markdown", "$4,900"],
  ["4102", "Milk", "Dairy", "2 days", "87%", "Transfer inventory", "$7,200"],
  ["8821", "Bread", "Bakery", "18h", "81%", "Reduce tomorrow order", "$2,100"],
  ["7330", "Avocados", "Produce", "3 days", "76%", "Bundle promotion", "$3,600"],
  ["1190", "Yogurt", "Dairy", "4 days", "69%", "Shift to high-demand stores", "$2,900"],
  ["5521", "Bananas", "Produce", "2 days", "73%", "Create local promotion", "$3,100"]
];

const suppliers = [
  ["Fresh Farms Co.", "Produce", "91%", "94%", "Medium", "$1.2M", "Monitor closely"],
  ["DairyBest", "Dairy", "97%", "96%", "Low", "$420K", "Keep primary"],
  ["Green Valley", "Produce", "84%", "88%", "High", "$2.8M", "Activate backup supplier"],
  ["Golden Wheat", "Bakery", "89%", "91%", "Medium", "$760K", "Renegotiate lead time"],
  ["FrozenLine", "Frozen", "98%", "97%", "Low", "$210K", "Maintain"]
];

const reports = [
  ["Weekly Grocery Loss Report", "Generated for COO and regional operators. Includes loss trend, AI actions, savings and risk regions.", "Preview report"],
  ["AI Savings Report", "Tracks accepted recommendations, realized savings and ROI contribution.", "Export CSV"],
  ["Supplier Risk Report", "Ranks suppliers by OTIF, delay risk, quality and margin impact.", "Open dashboard"],
  ["Sustainability Report", "Food rescued, CO₂ avoided, water saved and ESG contribution.", "Generate report"],
  ["Executive ROI Summary", "C-level summary of investment payback and margin protection.", "Share deck"],
  ["Operations Action Log", "Operational actions approved, executed and measured by store.", "View log"]
];

const nodeData = {
  supplier: {
    title: "Supplier",
    status: "monitored",
    text: "FreshFlow AI tracks supplier delivery reliability, quality score, lead time and waste contribution.",
    risk: "Medium",
    confidence: "91%",
    impact: "$1.2M",
    action: "Monitor shipment"
  },
  dc: {
    title: "Distribution Center",
    status: "capacity 86%",
    text: "The DC view shows inbound inventory, outbound capacity, replenishment constraints and temperature-controlled zones.",
    risk: "Low",
    confidence: "94%",
    impact: "$680K",
    action: "Prioritize produce dispatch"
  },
  truck: {
    title: "Truck Fleet",
    status: "8,921 monitored",
    text: "IoT sensors track GPS, ETA, temperature and cold-chain anomalies across grocery routes.",
    risk: "High",
    confidence: "96%",
    impact: "$2.3M",
    action: "Reroute Truck #284"
  },
  store: {
    title: "Store Network",
    status: "4,756 stores",
    text: "Store-level data includes POS demand, on-hand stock, shelf life, markdown execution and local events.",
    risk: "Medium",
    confidence: "93%",
    impact: "$4.9M",
    action: "Approve markdowns"
  },
  customer: {
    title: "Customer Demand",
    status: "forecasting",
    text: "The demand model uses POS trends, local events, weather, seasonality and pricing signals.",
    risk: "Low",
    confidence: "97%",
    impact: "$3.1M",
    action: "Increase beverage replenishment"
  }
};

const scenarios = {
  heat: {
    one: ["Waste risk", "+22%"],
    two: ["Beverage demand", "+31%"],
    three: ["Produce shelf life", "-18%"],
    text: "AI recommends increasing beverage replenishment, reducing sensitive produce orders and applying markdowns today in 184 Texas stores. Estimated savings: $2.8M."
  },
  supplier: {
    one: ["Delay risk", "+18h"],
    two: ["Stockout probability", "+12%"],
    three: ["Margin exposure", "$1.4M"],
    text: "AI recommends activating backup suppliers, prioritizing DC Atlanta inventory and rerouting produce shipments. Estimated savings: $1.4M."
  },
  holiday: {
    one: ["Demand spike", "+37%"],
    two: ["Stockout risk", "+19%"],
    three: ["Order adjustment", "+22%"],
    text: "AI recommends increasing replenishment for snacks, beverages and bakery products across high-traffic stores. Estimated sales protected: $3.1M."
  },
  fuel: {
    one: ["Transport cost", "+12%"],
    two: ["Route efficiency", "-9%"],
    three: ["Consolidation gain", "+14%"],
    text: "AI recommends route consolidation, DC load balancing and supplier pickup adjustments. Estimated logistics savings: $900K."
  }
};

function formatMoney(value) {
  return `$${value.toFixed(1)}M`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderKpis(target, data) {
  const el = document.getElementById(target);
  if (!el) return;

  el.innerHTML = data.map(item => `
    <div class="metric-card">
      <span>${item[0]}</span>
      <b>${item[1]}</b>
      <small>${item[2]}</small>
    </div>
  `).join("");
}

function renderExecutiveKpis() {
  renderKpis("executiveKpis", [
    ["Margin Impact", "$18.7M", "Protected this quarter"],
    ["AI ROI", "4.8x", "Projected annualized"],
    ["Accepted Recommendations", state.accepted.toString(), "Human-approved"],
    ["AI Savings Generated", formatMoney(state.savings), "Approved actions"]
  ]);
}

function renderBarChart(period = "week") {
  const chart = $("#barChart");
  if (!chart) return;

  const values = {
    week: [42, 52, 46, 64, 58, 72, 68, 82],
    month: [34, 48, 56, 62, 70, 76, 81, 88],
    quarter: [28, 38, 52, 68, 73, 84, 91, 96]
  };

  const labels = ["M", "T", "W", "T", "F", "S", "S", "N"];

  chart.innerHTML = values[period].map((value, index) => `
    <div style="height:${value}%"><span>${labels[index]}</span></div>
  `).join("");

  $("#periodBadge").textContent = period.charAt(0).toUpperCase() + period.slice(1) + " view";
}

function renderDecisionCards() {
  const container = $("#decisionCards");
  if (!container) return;

  container.innerHTML = actions.map((item, index) => `
    <article class="decision-card">
      <header>
        <div>
          <span class="badge ${item.priority.includes("High") ? "red" : "orange"}">${item.priority}</span>
          <h4>${item.title}</h4>
          <p>${item.area}</p>
        </div>
        <span class="badge blue">${item.confidence}</span>
      </header>

      <div class="decision-meta">
        <span>Savings: $${item.savings.toFixed(1)}M</span>
        <span>Status: ${item.status}</span>
      </div>

      <div class="explain-grid">
        ${item.why.map(row => `
          <div class="explain-row">
            <span>${row[0]}</span>
            <i style="--level:${row[1]}%"></i>
            <b>${row[1]}%</b>
          </div>
        `).join("")}
      </div>

      <div class="decision-actions">
        <button class="btn primary action-approve" data-index="${index}" ${item.status !== "Pending" ? "disabled" : ""}>
          ${item.status === "Pending" ? "Approve" : "Approved"}
        </button>
        <button class="btn simulate-action" data-title="${item.title}">Simulate</button>
        <button class="btn explain-action" data-title="${item.title}">View details</button>
      </div>
    </article>
  `).join("");

  $$(".action-approve").forEach(button => {
    button.addEventListener("click", () => approveAction(Number(button.dataset.index)));
  });

  $$(".simulate-action").forEach(button => {
    button.addEventListener("click", () => showToast(`Simulation ready for ${button.dataset.title}`));
  });

  $$(".explain-action").forEach(button => {
    button.addEventListener("click", () => showToast(`${button.dataset.title}: AI explanation expanded`));
  });
}

function approveAction(index) {
  const item = actions[index];
  if (!item || item.status !== "Pending") return;

  item.status = "Executing";
  renderDecisionCards();
  showToast("AI action approved. Executing...");

  setTimeout(() => {
    item.status = "Completed";
    state.savings += item.savings;
    state.accepted += 1;
    state.adoption = Math.min(99, state.adoption + 1);

    updateAdoption();
    renderExecutiveKpis();
    renderDecisionCards();
    addActivity("Action completed", `${item.title} · ${item.area}`);
    showToast(`Completed. ${formatMoney(item.savings)} protected.`);
  }, 900);
}

function addActivity(title, text) {
  const feed = $("#activityFeed");
  if (!feed) return;

  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  feed.insertAdjacentHTML("afterbegin", `
    <div>
      <span>${hour}:${minute}</span>
      <article><b>${title}</b><p>${text}</p></article>
    </div>
  `);
}

function renderLossTable(filter = "all") {
  const table = $("#lossTable");
  const cards = $("#lossCards");

  const filtered = filter === "all" ? lossItems : lossItems.filter(item => item[2] === filter);

  if (table) {
    table.innerHTML = filtered.map(item => `
      <tr>
        <td>${item[0]}</td>
        <td><b>${item[1]}</b></td>
        <td>${item[2]}</td>
        <td>${item[3]}</td>
        <td><span class="badge ${parseInt(item[4]) > 85 ? "red" : "orange"}">${item[4]}</span></td>
        <td>${item[5]}</td>
        <td>${item[6]}</td>
        <td><button class="btn primary loss-approve" data-name="${item[1]}">Approve</button></td>
      </tr>
    `).join("");
  }

  if (cards) {
    cards.innerHTML = filtered.map(item => `
      <article class="loss-card">
        <header>
          <div>
            <h4>${item[1]}</h4>
            <span class="muted">SKU ${item[0]} · ${item[2]}</span>
          </div>
          <span class="badge ${parseInt(item[4]) > 85 ? "red" : "orange"}">${item[4]}</span>
        </header>

        <dl>
          <div><dt>Shelf life</dt><dd>${item[3]}</dd></div>
          <div><dt>Savings</dt><dd>${item[6]}</dd></div>
        </dl>

        <p class="muted">AI recommendation: <b>${item[5]}</b></p>
        <button class="btn primary loss-approve" data-name="${item[1]}">Approve</button>
      </article>
    `).join("");
  }

  $$(".loss-approve").forEach(button => {
    button.addEventListener("click", () => {
      button.disabled = true;
      button.textContent = "Approved";
      state.accepted += 1;
      renderExecutiveKpis();
      showToast(`${button.dataset.name} action approved`);
    });
  });
}

function renderSuppliers() {
  const table = $("#supplierTable");
  if (!table) return;

  table.innerHTML = suppliers.map(item => `
    <tr>
      <td><b>${item[0]}</b></td>
      <td>${item[1]}</td>
      <td>${item[2]}</td>
      <td>${item[3]}</td>
      <td><span class="badge ${item[4] === "High" ? "red" : item[4] === "Medium" ? "orange" : "green"}">${item[4]}</span></td>
      <td>${item[5]}</td>
      <td>${item[6]}</td>
    </tr>
  `).join("");
}

function renderReports() {
  const grid = $("#reportsGrid");
  if (!grid) return;

  grid.innerHTML = reports.map(item => `
    <div class="card">
      <div class="section-title compact">
        <h3>${item[0]}</h3>
        <span class="badge blue">ready</span>
      </div>

      <p class="muted">${item[1]}</p>

      <div class="decision-actions">
        <button class="btn primary report-btn">${item[2]}</button>
        <button class="btn preview-btn">Send to leadership</button>
      </div>
    </div>
  `).join("");

  $$(".report-btn, .preview-btn").forEach(button => {
    button.addEventListener("click", () => showToast("Report generated for review"));
  });
}

function updateAdoption() {
  if ($("#adoptionScore")) $("#adoptionScore").textContent = `${state.adoption}%`;
  if ($("#adoptionBar")) $("#adoptionBar").style.width = `${state.adoption}%`;
}

function changePage(page) {
  pages.forEach(section => section.classList.remove("active"));

  const target = $(`#page-${page}`);
  if (target) target.classList.add("active");

  navButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  history.replaceState(null, "", `#${page}`);

  if (window.innerWidth <= 1180) {
    sidebar.classList.remove("open");
    backdrop.classList.remove("open");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function askAI(question) {
  const chatBox = $("#chatBox");
  if (!chatBox) return;

  const q = question.trim();
  if (!q) return;

  chatBox.insertAdjacentHTML("beforeend", `<div class="message user">${q}</div>`);

  let answer = `FreshFlow AI detected a high grocery loss risk caused by demand variance, shelf-life pressure and regional supply imbalance. Recommendation: apply targeted markdowns, transfer inventory to nearby high-demand stores and reduce tomorrow's replenishment order. Expected savings: $2.8M. Confidence: 96%.`;

  const lower = q.toLowerCase();

  if (lower.includes("supplier")) {
    answer = `Supplier risk is concentrated in Green Valley Produce due to an 18-hour delay, lower OTIF performance and high waste impact. Recommendation: activate backup supplier for the next shipment cycle. Estimated savings: $1.4M. Confidence: 91%.`;
  }

  if (lower.includes("strawberr")) {
    answer = `Strawberries have a 92% waste risk because shelf life is under 36 hours and demand is below forecast in Texas stores. Recommendation: apply a 15% markdown today and transfer excess inventory to 22 high-demand stores. Estimated savings: $4.9M. Confidence: 96%.`;
  }

  if (lower.includes("texas") || lower.includes("produce")) {
    answer = `Produce waste in Texas increased because of a heat wave, lower weekday demand and earlier-than-expected deliveries. Recommendation: reduce sensitive produce orders, increase beverage replenishment and apply markdowns today in 184 stores. Estimated savings: $2.8M. Confidence: 96%.`;
  }

  setTimeout(() => {
    chatBox.insertAdjacentHTML("beforeend", `<div class="message ai"><b>FreshFlow AI:</b> ${answer}</div>`);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 350);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function setupScenario() {
  $$(".scenario").forEach(button => {
    button.addEventListener("click", () => {
      $$(".scenario").forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const data = scenarios[button.dataset.scenario];

      $("#simMetric1").textContent = data.one[0];
      $("#simValue1").textContent = data.one[1];
      $("#simMetric2").textContent = data.two[0];
      $("#simValue2").textContent = data.two[1];
      $("#simMetric3").textContent = data.three[0];
      $("#simValue3").textContent = data.three[1];
      $("#simText").textContent = data.text;

      state.appliedScenario = false;
      $("#applyScenario").disabled = false;
      $("#applyScenario").textContent = "Apply AI mitigation plan";
    });
  });

  const apply = $("#applyScenario");
  if (apply) {
    apply.addEventListener("click", () => {
      if (state.appliedScenario) return;

      state.appliedScenario = true;
      state.savings += 2.8;
      state.accepted += 1;
      apply.disabled = true;
      apply.textContent = "Mitigation applied";

      renderExecutiveKpis();
      showToast("Scenario mitigation applied. Projected savings updated.");
    });
  }
}

function setupTwin() {
  $$(".twin-step").forEach(button => {
    button.addEventListener("click", () => {
      $$(".twin-step").forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const data = nodeData[button.dataset.node];

      $("#nodeTitle").textContent = data.title;
      $("#nodeStatus").textContent = data.status;
      $("#nodeText").textContent = data.text;
      $("#nodeRisk").textContent = data.risk;
      $("#nodeConfidence").textContent = data.confidence;
      $("#nodeImpact").textContent = data.impact;
      $("#nodeAction").textContent = data.action;
    });
  });
}

function setupNavigation() {
  navButtons.forEach(button => {
    button.addEventListener("click", () => changePage(button.dataset.page));
  });

  $$("[data-go]").forEach(button => {
    button.addEventListener("click", () => changePage(button.dataset.go));
  });

  changePage(location.hash.replace("#", "") || "overview");
}

function setupUI() {
  $("#menuBtn").addEventListener("click", () => {
    sidebar.classList.add("open");
    backdrop.classList.add("open");
  });

  backdrop.addEventListener("click", () => {
    sidebar.classList.remove("open");
    backdrop.classList.remove("open");
  });

  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  $("#roleToggle").addEventListener("click", () => {
    state.role = state.role === "Executive" ? "Operations" : "Executive";
    $("#roleName").textContent = state.role;
    changePage(state.role === "Executive" ? "executive" : "operations");
  });

  $("#notificationToggle").addEventListener("click", () => {
    $("#notifications").classList.toggle("open");
  });

  $("#presentationToggle").addEventListener("click", () => {
    $("#presentationPanel").classList.add("open");
  });

  $("#presentationClose").addEventListener("click", () => {
    $("#presentationPanel").classList.remove("open");
  });

  $$(".tab").forEach(button => {
    button.addEventListener("click", () => {
      $$(".tab").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      renderBarChart(button.dataset.period);
    });
  });

  $$(".filter").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      state.currentFilter = button.dataset.filter;
      renderLossTable(state.currentFilter);
    });
  });

  $$(".quick-prompts button").forEach(button => {
    button.addEventListener("click", () => askAI(button.dataset.prompt));
  });

  $("#askBtn").addEventListener("click", () => {
    const input = $("#aiInput");
    askAI(input.value);
    input.value = "";
  });

  $("#aiInput").addEventListener("keydown", event => {
    if (event.key === "Enter") $("#askBtn").click();
  });

  $("#refreshOps").addEventListener("click", () => {
    showToast("Live operational data refreshed");
  });

  const slider = $("#impactSlider");
  if (slider) {
    slider.addEventListener("input", () => {
      const value = Number(slider.value);
      $("#adoptionSliderValue").textContent = `${value}%`;
      $("#impactSavings").textContent = `$${(value * 0.623).toFixed(1)}M`;
    });
  }
}

function init() {
  renderKpis("overviewKpis", overviewKpis);
  renderExecutiveKpis();
  renderKpis("opsKpis", opsKpis);
  renderBarChart("week");
  renderDecisionCards();
  renderLossTable();
  renderSuppliers();
  renderReports();
  updateAdoption();

  setupNavigation();
  setupUI();
  setupScenario();
  setupTwin();
}

document.addEventListener("DOMContentLoaded", init);
