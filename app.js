const seedRecords = [
  { sheet: "China Sourcing", po: 1, date: null, category: "SNR", description: "MAGNETS", qty: 50000, cost: 0.16, cbm: 1.1, shippingFee: 7436, phpCost: 1.352, landedCost: 1.5007, selling: 3, gross: 150000, net: 74964, payment: 150000, receivables: 0, status: "PAID", shippingRate: 800, exchangeRate: 8.45, note: null },
  { sheet: "China Sourcing", po: 2, date: "2026-03-13", category: "MAXIBILT", description: "CYCLONE", qty: 350, cost: 130, cbm: 16.7481, shippingFee: 113216.9226, phpCost: 1098.5, landedCost: 1421.9769, selling: 2150, gross: 752500, net: 254808.0774, payment: 752500, receivables: 0, status: "PAID", shippingRate: 800, exchangeRate: 8.45, note: null },
  { sheet: "China Sourcing", po: 3, date: null, category: "MAXIBILT", description: "BARBED WIRE", qty: 525, cost: 29, cbm: 2.8954, shippingFee: 19572.8155, phpCost: 245.05, landedCost: 282.3316, selling: 350, gross: 183750, net: 35525.9345, payment: 183750, receivables: 0, status: null, shippingRate: 800, exchangeRate: 8.45, note: null },
  { sheet: "China Sourcing", po: 4, date: "2026-03-13", category: "SNR", description: "CHICKEN POUCH", qty: 101350, cost: 0.62, cbm: 6, shippingFee: 41280, phpCost: 5.332, landedCost: 5.7393, selling: 6.5, gross: 658775, net: 77096.8, payment: 658775, receivables: 0, status: "PAID", shippingRate: 800, exchangeRate: 8.6, note: null },
  { sheet: "China Sourcing", po: 5, date: null, category: "SNR", description: "MAGNETS", qty: 50000, cost: 0.22, cbm: 1.1, shippingFee: 7524, phpCost: 1.881, landedCost: 2.0315, selling: 3, gross: 150000, net: 48426, payment: 150000, receivables: 0, status: null, shippingRate: 800, exchangeRate: 8.55, note: null },
  { sheet: "China Sourcing", po: 6, date: null, category: "NEATENS", description: "MAILER BAG", qty: 10300, cost: 0.38, cbm: 0.704, shippingFee: 4647.3215, phpCost: 3.211, landedCost: 3.6622, selling: 4.3, gross: 44290, net: 6569.3785, payment: 14843.34, receivables: 29446.66, status: null, shippingRate: 781.22, exchangeRate: 8.45, note: null },
  { sheet: "China Sourcing", po: 7, date: null, category: "NEATENS", description: "ZIPLOCK", qty: 31850, cost: 0.42, cbm: 1.692, shippingFee: 11169.4148, phpCost: 3.549, landedCost: 3.8997, selling: 4.65, gross: 148102.5, net: 23897.4352, payment: 49367.5, receivables: 98735, status: null, shippingRate: 781.22, exchangeRate: 8.45, note: null },
  { sheet: "China Sourcing", po: 8, date: "2025-10-01", category: "NEATENS", description: "ZIPLOCK", qty: 20450, cost: 0.43, cbm: 1.3929, shippingFee: 9227.6786, phpCost: 3.4185, landedCost: 3.8697, selling: 4.6, gross: 94070, net: 14933.9964, payment: 94070, receivables: 0, status: null, shippingRate: 833.3333, exchangeRate: 7.95, note: null },
  { sheet: "China Sourcing", po: 9, date: "2025-10-01", category: "NEATENS", description: "TAPE", qty: 284, cost: 22, cbm: 0.4264, shippingFee: 2825.0893, phpCost: 174.9, landedCost: 184.8475, selling: 234, gross: 66456, net: 13959.3107, payment: 66456, receivables: 0, status: null, shippingRate: 833.3333, exchangeRate: 7.95, note: null },
  { sheet: "China Sourcing", po: 10, date: "2025-10-01", category: "NEATENS", description: "PAPER BAG", qty: 5000, cost: 0.91, cbm: 1.5, shippingFee: 9937.5, phpCost: 7.2345, landedCost: 9.222, selling: 11.5, gross: 57500, net: 11390, payment: 57500, receivables: 0, status: null, shippingRate: 833.3333, exchangeRate: 7.95, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "SNR GOLD CARDS", qty: 200000, cost: 0.1964, cbm: 1.8, shippingFee: 12237.966, phpCost: 1.6596, landedCost: 1.7208, selling: 2.25, gross: 450000, net: 105846.034, payment: 100000, receivables: 350000, status: null, shippingRate: 804.6, exchangeRate: 8.45, note: "8000 pesos" },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "BURGER MACHINE R", qty: 566500, cost: 0.029, cbm: 2.06, shippingFee: 14088.546, phpCost: 0.2465, landedCost: 0.2714, selling: 0.36, gross: 203940, net: 50209.204, payment: 54000, receivables: 149940, status: null, shippingRate: 804.6, exchangeRate: 8.5, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "BURGER MACHINE Y", qty: 548000, cost: 0.029, cbm: 2.06, shippingFee: 14088.546, phpCost: 0.2465, landedCost: 0.2722, selling: 0.36, gross: 197280, net: 48109.454, payment: 54000, receivables: 143280, status: null, shippingRate: 804.6, exchangeRate: 8.5, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "BURGER MACHINE G", qty: 559600, cost: 0.029, cbm: 2.06, shippingFee: 14088.546, phpCost: 0.2465, landedCost: 0.2717, selling: 0.36, gross: 201456, net: 49426.054, payment: 54000, receivables: 147456, status: null, shippingRate: 804.6, exchangeRate: 8.5, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "CHOPSTICKS", qty: 100000, cost: 0.032, cbm: 1.146, shippingFee: 7837.6086, phpCost: 0.272, landedCost: 0.3504, selling: 0.4, gross: 40000, net: 4962.3914, payment: 40000, receivables: 0, status: null, shippingRate: 804.6, exchangeRate: 8.5, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "WHISKEY GLASS", qty: 1500, cost: 5.4, cbm: 2.219, shippingFee: 15175.9629, phpCost: 45.9, landedCost: 56.0173, selling: 72.7, gross: 109050, net: 25024.0371, payment: 88927, receivables: 20123, status: null, shippingRate: 804.6, exchangeRate: 8.5, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "PET SMALL TRAY", qty: 300000, cost: 0.17, cbm: 11.5, shippingFee: 80500.23, phpCost: 1.479, landedCost: 1.7473, selling: 2.25, gross: 675000, net: 150799.77, payment: 270000, receivables: 405000, status: null, shippingRate: 804.6, exchangeRate: 8.7, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "PET BIG TRAY", qty: 300000, cost: 0.235, cbm: 24.1, shippingFee: 168700.482, phpCost: 2.0445, landedCost: 2.6068, selling: 3.75, gross: 1125000, net: 342949.518, payment: 450000, receivables: 675000, status: null, shippingRate: 804.6, exchangeRate: 8.7, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "FLY TRAP TRAPEZOID", qty: 10000, cost: 0.32, cbm: 0.3, shippingFee: 2100.006, phpCost: 2.784, landedCost: 2.994, selling: 9.6, gross: 96000, net: 66059.994, payment: 96000, receivables: 0, status: null, shippingRate: 804.6, exchangeRate: 8.7, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "FLY TRAP RECTANGLE", qty: 4800, cost: 0.3, cbm: 0.3, shippingFee: 2100.006, phpCost: 2.61, landedCost: 3.0475, selling: 24.16, gross: 115968, net: 101339.994, payment: 116000, receivables: -32, status: null, shippingRate: 804.6, exchangeRate: 8.7, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "INDUSTRIAL GLOVES", qty: 500, cost: 115, cbm: 0.195, shippingFee: 1365.0039, phpCost: 1000.5, landedCost: 1003.23, selling: 1331, gross: 665500, net: 163884.9961, payment: 150000, receivables: 515500, status: null, shippingRate: 804.6, exchangeRate: 8.7, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "BALIWAG PAPER", qty: 1000000, cost: 0.033, cbm: 5.2, shippingFee: 36400.104, phpCost: 0.2871, landedCost: 0.3235, selling: 0.4, gross: 400000, net: 76499.896, payment: 120000, receivables: 280000, status: null, shippingRate: 804.6, exchangeRate: 8.7, note: null },
  { sheet: "China Sourcing", po: null, date: null, category: null, description: "BARCODE STICKERS", qty: 30000, cost: 4, cbm: 15.5, shippingFee: 107880, phpCost: 34.8, landedCost: 38.396, selling: 46, gross: 1380000, net: 228120, payment: null, receivables: 1380000, status: null, shippingRate: 800, exchangeRate: 8.7, note: null },
  { sheet: "Straw Tie Price", po: 1, date: null, category: "MACALINDONG TRADING", description: "STRAW TIE", qty: 10000, cost: 2.28, cbm: 6.573, shippingFee: 45748.08, phpCost: 19.836, landedCost: 24.4108, selling: 45, gross: 450000, net: 205891.92, payment: 450000, receivables: 0, status: "PAID", shippingRate: 800, exchangeRate: 8.7, note: null },
  { sheet: "Straw Tie Price", po: null, date: null, category: null, description: "STRAW TIE", qty: 10000, cost: 2.63, cbm: 6.57, shippingFee: 41515.83, phpCost: 23.407, landedCost: 27.5586, selling: 45, gross: 450000, net: 174414.17, payment: null, receivables: 450000, status: null, shippingRate: 710, exchangeRate: 8.9, note: null },
  { sheet: "R&D Cost", po: 1, date: null, category: "SNR", description: "MAGNETS", qty: 50000, cost: 0.16, cbm: 1.1, shippingFee: 7436, phpCost: 1.352, landedCost: 1.5007, selling: 3, gross: 150000, net: 74964, payment: 150000, receivables: 0, status: "PAID", shippingRate: 800, exchangeRate: 8.45, note: null }
].map((record, index) => normalizeRecord({ id: `seed-${index + 1}`, ...record }));

const STORAGE_KEY = "china-sourcing-user-records";
const THEME_KEY = "china-sourcing-theme";
const THEME_COOKIE = "cabsi_theme";
const API_RECORDS_URL = "/api/records";
const API_LOGIN_URL = "/api/login";
const API_SESSION_URL = "/api/session";
const API_LOGOUT_URL = "/api/logout";
const money = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });
const unitMoney = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 4 });
const decimal = new Intl.NumberFormat("en-PH", { maximumFractionDigits: 4 });

const elements = {
  loginScreen: document.querySelector("#loginScreen"),
  appShell: document.querySelector("#appShell"),
  loginForm: document.querySelector("#loginForm"),
  loginError: document.querySelector("#loginError"),
  navButtons: document.querySelectorAll("[data-view-button]"),
  viewJumpButtons: document.querySelectorAll("[data-view-jump]"),
  views: document.querySelectorAll("[data-view]"),
  currentUserName: document.querySelector("#currentUserName"),
  homeReceivable: document.querySelector("#homeReceivable"),
  homeOpenOrders: document.querySelector("#homeOpenOrders"),
  homeRecentList: document.querySelector("#homeRecentList"),
  analyticsPanel: document.querySelector("#analyticsPanel"),
  userSettingsName: document.querySelector("#userSettingsName"),
  userSettingsLogoutButton: document.querySelector("#userSettingsLogoutButton"),
  settingsThemeToggle: document.querySelector("#settingsThemeToggle"),
  settingsThemeLabel: document.querySelector("#settingsThemeLabel"),
  settingsExchangeRate: document.querySelector("#settingsExchangeRate"),
  grossMetric: document.querySelector("#grossMetric"),
  netMetric: document.querySelector("#netMetric"),
  receivableMetric: document.querySelector("#receivableMetric"),
  openMetric: document.querySelector("#openMetric"),
  exchangeMetric: document.querySelector("#exchangeMetric"),
  exchangeMeta: document.querySelector("#exchangeMeta"),
  dialogExchangeRate: document.querySelector("#dialogExchangeRate"),
  searchInput: document.querySelector("#searchInput"),
  categoryFilter: document.querySelector("#categoryFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  recordsBody: document.querySelector("#recordsBody"),
  detailPanel: document.querySelector("#detailPanel"),
  resultCount: document.querySelector("#resultCount"),
  themeToggle: document.querySelector("#themeToggle"),
  logoutButton: document.querySelector("#logoutButton"),
  addButton: document.querySelector("#addButton"),
  itemDialog: document.querySelector("#itemDialog"),
  itemDialogTitle: document.querySelector("#itemDialogTitle"),
  itemForm: document.querySelector("#itemForm"),
  descriptionHistory: document.querySelector("#descriptionHistory"),
  repeatPurchaseHint: document.querySelector("#repeatPurchaseHint"),
  paymentDialog: document.querySelector("#paymentDialog"),
  paymentForm: document.querySelector("#paymentForm"),
  paymentOrderLabel: document.querySelector("#paymentOrderLabel"),
  saveItemButton: document.querySelector("#saveItemButton"),
  closeDialogButton: document.querySelector("#closeDialogButton"),
  cancelDialogButton: document.querySelector("#cancelDialogButton"),
  closePaymentDialogButton: document.querySelector("#closePaymentDialogButton"),
  cancelPaymentDialogButton: document.querySelector("#cancelPaymentDialogButton")
};

let userRecords = readUserRecords();
let selectedId = null;
let liveExchangeRate = null;
let editingId = null;
let isFillingItemForm = false;
let activeView = "home";

function showLogin(message = "") {
  elements.appShell.hidden = true;
  elements.loginScreen.hidden = false;
  elements.loginError.hidden = !message;
  elements.loginError.textContent = message;
  elements.loginForm.elements.username.focus();
}

function showApp() {
  elements.loginScreen.hidden = true;
  elements.appShell.hidden = false;
}

async function checkSession() {
  try {
    const response = await fetch(API_SESSION_URL, { cache: "no-store" });
    if (!response.ok) return false;
    const session = await response.json();
    return Boolean(session.authenticated);
  } catch {
    return false;
  }
}

async function handleLogin(event) {
  event.preventDefault();
  const form = new FormData(elements.loginForm);
  elements.loginError.hidden = true;

  try {
    const response = await fetch(API_LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password")
      })
    });

    if (!response.ok) throw new Error("Login failed");

    elements.loginForm.reset();
    await startApp();
  } catch {
    showLogin("The username or password is incorrect.");
  }
}

async function handleLogout() {
  await fetch(API_LOGOUT_URL, { method: "POST" }).catch(() => {});
  selectedId = null;
  showLogin();
}

async function startApp() {
  showApp();
  setView("home");
  populateFilters();
  render();
  loadExchangeRate();
  await loadSharedRecords();
}

async function initialize() {
  applyTheme(readThemePreference());
  const isAuthenticated = await checkSession();
  if (isAuthenticated) {
    await startApp();
  } else {
    showLogin();
  }
}

function applyTheme(theme) {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = normalizedTheme;
  localStorage.setItem(THEME_KEY, normalizedTheme);
  document.cookie = `${THEME_COOKIE}=${normalizedTheme}; Path=/; Max-Age=31536000; SameSite=Lax`;
  elements.themeToggle.setAttribute("aria-label", `Switch to ${normalizedTheme === "dark" ? "light" : "dark"} mode`);
  elements.settingsThemeLabel.textContent = `${normalizedTheme === "dark" ? "Dark" : "Light"} mode`;
  elements.settingsThemeToggle.setAttribute("aria-label", `Switch to ${normalizedTheme === "dark" ? "light" : "dark"} mode`);
}

function readThemePreference() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) return storedTheme;
  const cookieTheme = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("="))
    .find(([name]) => name === THEME_COOKIE)?.[1];
  return cookieTheme || "light";
}

function setView(viewName) {
  activeView = viewName;
  elements.views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === viewName);
  });
  elements.navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewButton === viewName);
  });
  if (viewName === "purchase-orders") {
    render();
  }
  elements.addButton.hidden = viewName !== "purchase-orders";
}

function readUserRecords() {
  try {
    return (JSON.parse(localStorage.getItem(STORAGE_KEY)) || []).map(normalizeRecord);
  } catch {
    return [];
  }
}

async function loadSharedRecords() {
  try {
    const response = await fetch(API_RECORDS_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Shared records unavailable");
    const records = await response.json();
    if (!Array.isArray(records)) throw new Error("Shared records invalid");
    userRecords = records.map(normalizeRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userRecords));
    populateFilters();
    render();
  } catch {
    // Keep localStorage fallback for offline/file-only use.
  }
}

async function persistUserRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userRecords));
  try {
    await fetch(API_RECORDS_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRecords)
    });
  } catch {
    // Local fallback already saved above.
  }
}

function normalizeRecord(record) {
  const cost = toNumber(record.cost);
  const cbm = toNumber(record.cbm);
  const shippingRate = toNumber(record.shippingRate);
  const exchangeRate = toNumber(record.exchangeRate);
  const qty = toNumber(record.qty);
  const payment = toNumber(record.payment);
  const payments = Array.isArray(record.payments) ? record.payments : [];
  const phpCost = record.phpCost ?? (cost !== null && exchangeRate !== null ? cost * exchangeRate : null);
  const shippingFee = record.shippingFee ?? (
    cbm !== null && shippingRate !== null && exchangeRate !== null ? (shippingRate * exchangeRate) * cbm : null
  );
  const landedCost = record.landedCost ?? (
    shippingFee !== null && qty && phpCost !== null ? (shippingFee / qty) + phpCost : null
  );

  return {
    ...record,
    cost,
    cbm,
    shippingRate,
    exchangeRate,
    qty,
    payment,
    payments,
    phpCost,
    shippingFee,
    landedCost
  };
}

function allRecords() {
  const overrides = new Map(userRecords.map((record) => [record.id, record]));
  const mergedSeeds = seedRecords.map((record) => overrides.get(record.id) || record);
  const manualRecords = userRecords.filter((record) => !record.id.startsWith("seed-"));
  return [...mergedSeeds, ...manualRecords];
}

function normalized(value) {
  return String(value ?? "").trim().toLowerCase();
}

function statusFor(record) {
  if (normalized(record.status) === "paid") return "paid";
  if ((Number(record.receivables) || 0) > 0) return "open";
  return "unmarked";
}

function displayStatus(record) {
  const status = statusFor(record);
  if (status === "paid") return "Paid";
  if (status === "open") return "Open";
  return "Review";
}

function marginFor(record) {
  return Number(record.selling) ? ((Number(record.selling) - (Number(record.landedCost) || 0)) / Number(record.selling)) * 100 : null;
}

function formatMoney(value) {
  return Number.isFinite(Number(value)) ? money.format(Number(value)) : "-";
}

function formatUnitMoney(value) {
  return Number.isFinite(Number(value)) ? unitMoney.format(Number(value)) : "-";
}

function formatCny(value) {
  return Number.isFinite(Number(value)) ? `¥${decimal.format(Number(value))}` : "-";
}

function formatNumber(value) {
  return Number.isFinite(Number(value)) ? decimal.format(Number(value)) : "-";
}

function formatPercent(value) {
  return Number.isFinite(Number(value)) ? `${decimal.format(Number(value))}%` : "-";
}

function populateFilters() {
  const currentCategory = elements.categoryFilter.value || "all";
  fillSelect(elements.categoryFilter, ["all", ...new Set(allRecords().map((record) => record.category).filter(Boolean).sort())], "All customers");
  restoreSelectValue(elements.categoryFilter, currentCategory);
  populateDescriptionHistory();
}

function fillSelect(select, values, allLabel) {
  select.innerHTML = values.map((value) => {
    const label = value === "all" ? allLabel : value;
    return `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
  }).join("");
}

function restoreSelectValue(select, value) {
  select.value = [...select.options].some((option) => option.value === value) ? value : "all";
}

function populateDescriptionHistory() {
  const descriptions = [...new Set(allRecords().map((record) => record.description).filter(Boolean).map((value) => value.trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));
  elements.descriptionHistory.innerHTML = descriptions
    .map((description) => `<option value="${escapeHtml(description)}"></option>`)
    .join("");
}

function filteredRecords() {
  const query = normalized(elements.searchInput.value);
  const category = elements.categoryFilter.value;
  const status = elements.statusFilter.value;

  return allRecords().filter((record) => {
    const searchable = [record.sheet, record.category, record.description, record.note, record.po].map(normalized).join(" ");
    return (!query || searchable.includes(query))
      && (category === "all" || record.category === category)
      && (status === "all" || statusFor(record) === status);
  });
}

function render() {
  const records = filteredRecords();
  const everyRecord = allRecords();
  renderMetrics(records);
  renderRows(records);
  const selectedRecord = records.find((record) => record.id === selectedId) || records[0];
  renderDetail(selectedRecord);
  renderHome(everyRecord);
  renderAnalytics(everyRecord);
}

function renderMetrics(records) {
  const totals = records.reduce((sum, record) => {
    sum.gross += Number(record.gross) || 0;
    sum.net += Number(record.net) || 0;
    sum.receivables += Number(record.receivables) || 0;
    sum.open += statusFor(record) === "open" ? 1 : 0;
    return sum;
  }, { gross: 0, net: 0, receivables: 0, open: 0 });

  elements.grossMetric.textContent = formatMoney(totals.gross);
  elements.netMetric.textContent = formatMoney(totals.net);
  elements.receivableMetric.textContent = formatMoney(totals.receivables);
  elements.openMetric.textContent = String(totals.open);
}

function renderHome(records) {
  const totals = records.reduce((sum, record) => {
    sum.receivables += Number(record.receivables) || 0;
    sum.open += statusFor(record) === "open" ? 1 : 0;
    return sum;
  }, { receivables: 0, open: 0 });
  elements.currentUserName.textContent = "plouis34";
  elements.userSettingsName.textContent = "plouis34";
  elements.homeReceivable.textContent = formatMoney(totals.receivables);
  elements.homeOpenOrders.textContent = String(totals.open);
  elements.homeRecentList.innerHTML = records
    .slice()
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .slice(0, 6)
    .map((record) => `
      <button class="recent-item" type="button" data-recent-id="${record.id}">
        <span>${escapeHtml(record.description || "Untitled item")}</span>
        <strong>${formatMoney(record.receivables)}</strong>
      </button>
    `).join("");

  document.querySelectorAll("[data-recent-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.recentId;
      setView("purchase-orders");
    });
  });
}

function renderAnalytics(records) {
  const totals = records.reduce((sum, record) => {
    sum.gross += Number(record.gross) || 0;
    sum.net += Number(record.net) || 0;
    sum.receivables += Number(record.receivables) || 0;
    return sum;
  }, { gross: 0, net: 0, receivables: 0 });
  const byCustomer = [...records.reduce((map, record) => {
    const customer = record.category || "Unassigned";
    const current = map.get(customer) || { customer, gross: 0, receivables: 0 };
    current.gross += Number(record.gross) || 0;
    current.receivables += Number(record.receivables) || 0;
    map.set(customer, current);
    return map;
  }, new Map()).values()]
    .sort((a, b) => b.receivables - a.receivables)
    .slice(0, 8);

  elements.analyticsPanel.innerHTML = `
    <div class="summary-grid analytics-summary">
      <article class="metric"><span>Total Gross</span><strong>${formatMoney(totals.gross)}</strong></article>
      <article class="metric"><span>Net Profit</span><strong>${formatMoney(totals.net)}</strong></article>
      <article class="metric urgent"><span>Receivables</span><strong>${formatMoney(totals.receivables)}</strong></article>
    </div>
    <article class="dashboard-panel">
      <div class="panel-heading compact">
        <h2>Customer Receivables</h2>
        <p>${byCustomer.length} customers</p>
      </div>
      <div class="analytics-list">
        ${byCustomer.map((customer) => {
          const width = totals.receivables ? Math.min(100, (customer.receivables / totals.receivables) * 100) : 0;
          return `
            <div class="analytics-row">
              <div>
                <strong>${escapeHtml(customer.customer)}</strong>
                <span>${formatMoney(customer.gross)} gross</span>
              </div>
              <div class="bar-track"><span style="width: ${width}%"></span></div>
              <strong>${formatMoney(customer.receivables)}</strong>
            </div>
          `;
        }).join("")}
      </div>
    </article>
  `;
}

function renderRows(records) {
  elements.resultCount.textContent = `${records.length} ${records.length === 1 ? "record" : "records"}`;
  elements.recordsBody.innerHTML = records.map((record) => `
    <tr class="record-row ${record.id === selectedId ? "is-selected" : ""}" data-id="${record.id}">
      <td>${escapeHtml(record.date || "-")}</td>
      <td>
        <div class="item-title">${escapeHtml(record.description || "Untitled item")}</div>
        <div class="subtext">${escapeHtml(record.sheet || "Manual")} ${record.po ? `PO ${escapeHtml(record.po)}` : ""}</div>
      </td>
      <td>${escapeHtml(record.category || "Unassigned")}</td>
      <td>${formatNumber(record.qty)}</td>
      <td>${formatCny(record.cost)}</td>
      <td>${formatUnitMoney(record.landedCost)}</td>
      <td>${formatNumber(record.cbm)}</td>
      <td>${formatUnitMoney(record.selling)}</td>
      <td>${formatCny(record.shippingRate)}</td>
      <td>${formatNumber(record.exchangeRate)}</td>
      <td>${formatMoney(record.gross)}</td>
      <td>${formatMoney(record.receivables)}</td>
      <td><span class="pill ${statusFor(record)}">${displayStatus(record)}</span></td>
      <td><button class="row-action" type="button" data-edit-id="${record.id}">Edit</button></td>
    </tr>
  `).join("");

  document.querySelectorAll(".record-row").forEach((row) => {
    row.addEventListener("click", () => {
      selectedId = row.dataset.id;
      render();
    });
  });
  document.querySelectorAll("[data-edit-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const record = allRecords().find((item) => item.id === button.dataset.editId);
      if (record) openItemDialog(record);
    });
  });
}

function renderDetail(record) {
  if (!record) {
    elements.detailPanel.innerHTML = `<div class="empty-state"><h2>No records</h2><p>Try a different filter or add a new item.</p></div>`;
    return;
  }

  selectedId = record.id;
  const margin = marginFor(record);
  elements.detailPanel.innerHTML = `
    <div class="detail-title">
      <h2>${escapeHtml(record.description || "Untitled item")}</h2>
      <p class="subtext">${escapeHtml(record.category || "Unassigned")} / ${escapeHtml(record.sheet || "Manual")}</p>
      <span class="pill ${statusFor(record)}">${displayStatus(record)}</span>
      <button class="primary-button detail-action" id="updatePaymentButton" type="button">Update Payment</button>
    </div>
    <div class="detail-grid">
      ${detailCard("Quantity", formatNumber(record.qty))}
      ${detailCard("Date", escapeHtml(record.date || "-"))}
      ${detailCard("Gross", formatMoney(record.gross))}
      ${detailCard("Net", formatMoney(record.net))}
      ${detailCard("Margin", formatPercent(margin))}
      ${detailCard("Payment", formatMoney(record.payment))}
      ${detailCard("Receivable", formatMoney(record.receivables))}
      ${detailCard("Cost ¥", formatCny(record.cost))}
      ${detailCard("Cost PHP", formatUnitMoney(record.phpCost))}
      ${detailCard("Landed Cost PHP", formatUnitMoney(record.landedCost))}
      ${detailCard("Shipping Fee PHP", formatMoney(record.shippingFee))}
      ${detailCard("CBM", formatNumber(record.cbm))}
      ${detailCard("SF Rate ¥", formatCny(record.shippingRate))}
      ${detailCard("Manual CNY/PHP", formatNumber(record.exchangeRate))}
      ${detailCard("Selling Price", formatUnitMoney(record.selling))}
    </div>
    ${paymentHistoryHtml(record)}
    ${record.note ? `<p class="note">${escapeHtml(record.note)}</p>` : ""}
  `;
  document.querySelector("#updatePaymentButton").addEventListener("click", () => openPaymentDialog(record));
}

function detailCard(label, value) {
  return `<div class="detail-card"><span class="detail-label">${label}</span><div class="detail-value">${value}</div></div>`;
}

function paymentHistoryHtml(record) {
  if (!record.payments?.length) return "";
  return `
    <div class="payment-history">
      <h3>Payment History</h3>
      ${record.payments.map((payment) => `
        <div class="payment-history-row">
          <span>${escapeHtml(payment.date || "-")}</span>
          <strong>${formatMoney(payment.amount)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function recordFromForm(existingRecord = null) {
  const form = new FormData(elements.itemForm);
  const qty = toNumber(form.get("qty"));
  const cost = toNumber(form.get("cost"));
  const cbm = toNumber(form.get("cbm"));
  const shippingRate = toNumber(form.get("shippingRate"));
  const exchangeRate = toNumber(form.get("exchangeRate"));
  const selling = toNumber(form.get("selling"));
  const payment = toNumber(form.get("payment"));
  const phpCost = cost !== null && exchangeRate !== null ? cost * exchangeRate : null;
  const shippingFee = cbm !== null && shippingRate !== null && exchangeRate !== null ? cbm * shippingRate * exchangeRate : null;
  const landedCost = phpCost !== null && shippingFee !== null && qty ? phpCost + (shippingFee / qty) : null;
  const gross = qty && selling ? qty * selling : null;
  const net = qty && selling && landedCost ? gross - (qty * landedCost) : null;
  const receivables = gross !== null ? gross - (payment || 0) : null;

  return normalizeRecord({
    ...(existingRecord || {}),
    id: existingRecord?.id || `user-${Date.now()}`,
    sheet: existingRecord?.sheet || "Manual",
    po: existingRecord?.po ?? null,
    date: form.get("date") || existingRecord?.date || new Date().toISOString().slice(0, 10),
    category: form.get("category"),
    description: form.get("description"),
    qty,
    cost,
    cbm,
    shippingFee,
    phpCost,
    landedCost,
    selling,
    gross,
    net,
    payment,
    receivables,
    status: null,
    shippingRate,
    exchangeRate,
    note: form.get("note")
  });
}

function saveRecordOverride(record) {
  if (record.id.startsWith("seed-")) {
    userRecords = [record, ...userRecords.filter((item) => item.id !== record.id)];
  } else if (userRecords.some((item) => item.id === record.id)) {
    userRecords = userRecords.map((item) => item.id === record.id ? record : item);
  } else {
    userRecords = [record, ...userRecords];
  }
}

function saveNewRecord(event) {
  event.preventDefault();

  const existingRecord = editingId ? allRecords().find((record) => record.id === editingId) : null;
  const record = recordFromForm(existingRecord);

  saveRecordOverride(record);
  persistUserRecords();
  selectedId = record.id;
  editingId = null;
  elements.itemForm.reset();
  elements.itemDialog.close();
  populateFilters();
  render();
}

function openItemDialog(record = null) {
  editingId = record?.id || null;
  elements.itemDialogTitle.textContent = record ? "Edit purchase order" : "Add sourcing item";
  elements.saveItemButton.textContent = record ? "Save Changes" : "Save Item";
  elements.repeatPurchaseHint.textContent = record
    ? "Editing this purchase order."
    : "Choose a previous item to reuse repeat-purchase details.";
  isFillingItemForm = true;
  elements.itemForm.reset();

  if (record) {
    elements.itemForm.elements.category.value = record.category || "";
    elements.itemForm.elements.date.value = record.date || "";
    elements.itemForm.elements.description.value = record.description || "";
    elements.itemForm.elements.qty.value = record.qty ?? "";
    elements.itemForm.elements.cost.value = record.cost ?? "";
    elements.itemForm.elements.cbm.value = record.cbm ?? "";
    elements.itemForm.elements.shippingRate.value = record.shippingRate ?? "";
    elements.itemForm.elements.exchangeRate.value = record.exchangeRate ?? "";
    elements.itemForm.elements.selling.value = record.selling ?? "";
    elements.itemForm.elements.payment.value = record.payment ?? "";
    elements.itemForm.elements.note.value = record.note || "";
  }

  isFillingItemForm = false;
  elements.itemDialog.showModal();
}

function repeatPurchaseSource(description) {
  const target = normalized(description);
  if (!target) return null;
  return [...userRecords, ...seedRecords].find((record) => normalized(record.description) === target) || null;
}

function applyRepeatPurchaseHistory() {
  if (editingId || isFillingItemForm) return;
  const source = repeatPurchaseSource(elements.itemForm.elements.description.value);
  if (!source) {
    elements.repeatPurchaseHint.textContent = "Choose a previous item to reuse repeat-purchase details.";
    return;
  }

  elements.itemForm.elements.category.value = source.category || "";
  elements.itemForm.elements.cost.value = source.cost ?? "";
  elements.itemForm.elements.cbm.value = source.cbm ?? "";
  elements.itemForm.elements.shippingRate.value = source.shippingRate ?? "";
  elements.itemForm.elements.exchangeRate.value = source.exchangeRate ?? "";
  elements.itemForm.elements.selling.value = source.selling ?? "";
  elements.itemForm.elements.note.value = source.note || "";
  elements.repeatPurchaseHint.textContent = `Repeat purchase history loaded from ${source.sheet || "previous order"}. Enter the new quantity and payment.`;
}

function openPaymentDialog(record) {
  selectedId = record.id;
  elements.paymentOrderLabel.textContent = record.description || "Selected purchase order";
  elements.paymentForm.elements.addPayment.value = "";
  elements.paymentForm.elements.paymentDate.value = new Date().toISOString().slice(0, 10);
  elements.paymentForm.elements.gross.value = formatMoney(record.gross);
  updatePaymentPreview();
  elements.paymentDialog.showModal();
}

function updatePaymentPreview() {
  const record = allRecords().find((item) => item.id === selectedId);
  if (!record) return;
  const existingPayment = Number(record.payment) || 0;
  const addedPayment = toNumber(elements.paymentForm.elements.addPayment.value) || 0;
  const payment = existingPayment + addedPayment;
  const receivables = Math.max((Number(record.gross) || 0) - payment, 0);
  elements.paymentForm.elements.payment.value = formatMoney(payment);
  elements.paymentForm.elements.receivables.value = formatMoney(receivables);
}

function savePaymentUpdate(event) {
  event.preventDefault();
  const record = allRecords().find((item) => item.id === selectedId);
  if (!record) return;

  const existingPayment = Number(record.payment) || 0;
  const addedPayment = toNumber(elements.paymentForm.elements.addPayment.value) || 0;
  const payment = existingPayment + addedPayment;
  const gross = Number(record.gross) || 0;
  const receivables = Math.max(gross - payment, 0);
  const updatedRecord = {
    ...record,
    payment,
    payments: addedPayment > 0
      ? [...(record.payments || []), { amount: addedPayment, date: elements.paymentForm.elements.paymentDate.value || new Date().toISOString().slice(0, 10) }]
      : (record.payments || []),
    receivables,
    status: receivables <= 0 ? "PAID" : record.status
  };

  saveRecordOverride(updatedRecord);

  persistUserRecords();
  elements.paymentDialog.close();
  render();
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && value !== "" ? number : null;
}

function exportCsv() {
  const rows = filteredRecords();
  const headers = ["sheet", "po", "date", "category", "description", "qty", "cost", "phpCost", "cbm", "shippingRate", "exchangeRate", "shippingFee", "landedCost", "selling", "gross", "net", "payment", "receivables", "status", "note"];
  const csv = [
    headers.join(","),
    ...rows.map((record) => headers.map((key) => csvCell(record[key])).join(","))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "china-sourcing-export.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

["input", "change"].forEach((eventName) => {
  elements.searchInput.addEventListener(eventName, render);
  elements.categoryFilter.addEventListener(eventName, render);
  elements.statusFilter.addEventListener(eventName, render);
});

elements.loginForm.addEventListener("submit", handleLogin);
elements.logoutButton.addEventListener("click", handleLogout);
elements.userSettingsLogoutButton.addEventListener("click", handleLogout);
elements.addButton.addEventListener("click", () => openItemDialog());
elements.themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
elements.settingsThemeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
elements.navButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewButton));
});
elements.viewJumpButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewJump));
});
elements.closeDialogButton.addEventListener("click", () => {
  editingId = null;
  elements.itemDialog.close();
});
elements.cancelDialogButton.addEventListener("click", () => {
  editingId = null;
  elements.itemDialog.close();
});
elements.itemForm.addEventListener("submit", saveNewRecord);
elements.itemForm.elements.description.addEventListener("change", applyRepeatPurchaseHistory);
elements.itemForm.elements.description.addEventListener("input", applyRepeatPurchaseHistory);
elements.closePaymentDialogButton.addEventListener("click", () => elements.paymentDialog.close());
elements.cancelPaymentDialogButton.addEventListener("click", () => elements.paymentDialog.close());
elements.paymentForm.elements.addPayment.addEventListener("input", updatePaymentPreview);
elements.paymentForm.addEventListener("submit", savePaymentUpdate);

async function loadExchangeRate() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/CNY");
    if (!response.ok) throw new Error("Exchange request failed");
    const data = await response.json();
    if (data.result !== "success" || !data.rates?.PHP) throw new Error("Missing PHP rate");
    liveExchangeRate = Number(data.rates.PHP);
    elements.exchangeMetric.textContent = `PHP ${decimal.format(liveExchangeRate)}`;
    elements.exchangeMeta.textContent = `Updated ${new Date(data.time_last_update_utc).toLocaleDateString("en-PH")}`;
    elements.dialogExchangeRate.textContent = `Live reference only: 1 CNY = PHP ${decimal.format(liveExchangeRate)}`;
    elements.settingsExchangeRate.textContent = `PHP ${decimal.format(liveExchangeRate)}`;
    render();
  } catch {
    const workbookRate = allRecords().find((record) => Number(record.exchangeRate))?.exchangeRate;
    elements.exchangeMetric.textContent = `PHP ${formatNumber(workbookRate)}`;
    elements.exchangeMeta.textContent = "Workbook fallback";
    elements.dialogExchangeRate.textContent = `Workbook reference only: 1 CNY = PHP ${formatNumber(workbookRate)}`;
    elements.settingsExchangeRate.textContent = `PHP ${formatNumber(workbookRate)}`;
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

initialize();
