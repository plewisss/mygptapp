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
  mobileViewTitle: document.querySelector("#mobileViewTitle"),
  mobileMenuButton: document.querySelector("#mobileMenuButton"),
  mobileCategoryMenu: document.querySelector("#mobileCategoryMenu"),
  mobileMenuLogoutButton: document.querySelector("#mobileMenuLogoutButton"),
  currentUserName: document.querySelector("#currentUserName"),
  homeReceivable: document.querySelector("#homeReceivable"),
  homeOpenOrders: document.querySelector("#homeOpenOrders"),
  homeRecentList: document.querySelector("#homeRecentList"),
  financePanel: document.querySelector("#financePanel"),
  financeUpdatedAt: document.querySelector("#financeUpdatedAt"),
  analyticsPanel: document.querySelector("#analyticsPanel"),
  userSettingsName: document.querySelector("#userSettingsName"),
  userSettingsLogoutButton: document.querySelector("#userSettingsLogoutButton"),
  settingsLogoutButton: document.querySelector("#settingsLogoutButton"),
  settingsThemeToggle: document.querySelector("#settingsThemeToggle"),
  settingsThemeLabel: document.querySelector("#settingsThemeLabel"),
  settingsExchangeRate: document.querySelector("#settingsExchangeRate"),
  grossMetric: document.querySelector("#grossMetric"),
  netMetric: document.querySelector("#netMetric"),
  receivableMetric: document.querySelector("#receivableMetric"),
  openMetric: document.querySelector("#openMetric"),
  exchangeMetric: document.querySelector("#exchangeMetric"),
  exchangeMeta: document.querySelector("#exchangeMeta"),
  bottomStats: document.querySelector("#bottomStats"),
  bottomExchangeMetric: document.querySelector("#bottomExchangeMetric"),
  bottomExchangeDelta: document.querySelector("#bottomExchangeDelta"),
  bottomGrossMetric: document.querySelector("#bottomGrossMetric"),
  bottomNetMetric: document.querySelector("#bottomNetMetric"),
  bottomNetRatio: document.querySelector("#bottomNetRatio"),
  bottomReceivableMetric: document.querySelector("#bottomReceivableMetric"),
  bottomReceivableRatio: document.querySelector("#bottomReceivableRatio"),
  bottomPaidMetric: document.querySelector("#bottomPaidMetric"),
  bottomPaidRatio: document.querySelector("#bottomPaidRatio"),
  grossNetTrend: document.querySelector("#grossNetTrend"),
  trendSummary: document.querySelector("#trendSummary"),
  receivablesPanel: document.querySelector("#receivablesPanel"),
  paymentsPanel: document.querySelector("#paymentsPanel"),
  customersPanel: document.querySelector("#customersPanel"),
  productsPanel: document.querySelector("#productsPanel"),
  shipmentsPanel: document.querySelector("#shipmentsPanel"),
  reportsPanel: document.querySelector("#reportsPanel"),
  exchangeRatesPanel: document.querySelector("#exchangeRatesPanel"),
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
  mobileAddButton: document.querySelector("#mobileAddButton"),
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
  setView("finance");
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
  elements.themeToggle?.setAttribute("aria-label", `Switch to ${normalizedTheme === "dark" ? "light" : "dark"} mode`);
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
  elements.mobileViewTitle.textContent = viewLabel(viewName);
  closeMobileMenu();
  if (viewName === "purchase-orders") {
    render();
  }
  elements.addButton.hidden = viewName !== "purchase-orders";
  elements.mobileAddButton.hidden = viewName !== "purchase-orders";
  elements.bottomStats.hidden = viewName !== "purchase-orders";
}

function toggleMobileMenu() {
  const willOpen = elements.mobileCategoryMenu.hidden;
  elements.mobileCategoryMenu.hidden = !willOpen;
  elements.mobileMenuButton.setAttribute("aria-expanded", String(willOpen));
}

function closeMobileMenu() {
  if (!elements.mobileCategoryMenu) return;
  elements.mobileCategoryMenu.hidden = true;
  elements.mobileMenuButton?.setAttribute("aria-expanded", "false");
}

function viewLabel(viewName) {
  return ({
    finance: "Finance",
    "purchase-orders": "Orders",
    receivables: "Receivables",
    customers: "Customers",
    products: "Products",
    shipments: "Shipments",
    payments: "Payments",
    reports: "Reports",
    settings: "More",
    home: "Dashboard"
  })[viewName] || "CABSI";
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

function formatCompactMoney(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "-";
  if (Math.abs(number) >= 1_000_000) return `₱${decimal.format(number / 1_000_000)}M`;
  if (Math.abs(number) >= 1_000) return `₱${decimal.format(number / 1_000)}K`;
  return money.format(number);
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
  renderGrossNetTrend(records);
  const selectedRecord = records.find((record) => record.id === selectedId) || records[0];
  renderDetail(selectedRecord);
  renderHome(everyRecord);
  renderFinance(everyRecord);
  renderAnalytics(everyRecord);
  renderSideViews(everyRecord);
}

function renderMetrics(records) {
  const totals = records.reduce((sum, record) => {
    sum.gross += Number(record.gross) || 0;
    sum.net += Number(record.net) || 0;
    sum.receivables += Number(record.receivables) || 0;
    sum.paid += Number(record.payment) || 0;
    sum.open += statusFor(record) === "open" ? 1 : 0;
    return sum;
  }, { gross: 0, net: 0, receivables: 0, paid: 0, open: 0 });

  elements.grossMetric.textContent = formatMoney(totals.gross);
  elements.netMetric.textContent = formatMoney(totals.net);
  elements.receivableMetric.textContent = formatMoney(totals.receivables);
  elements.openMetric.textContent = String(totals.open);
  elements.bottomGrossMetric.textContent = formatMoney(totals.gross);
  elements.bottomNetMetric.textContent = formatMoney(totals.net);
  elements.bottomReceivableMetric.textContent = formatMoney(totals.receivables);
  elements.bottomPaidMetric.textContent = formatMoney(totals.paid);
  elements.bottomNetRatio.textContent = `${formatPercent(ratioOf(totals.net, totals.gross))} of gross`;
  elements.bottomReceivableRatio.textContent = `${formatPercent(ratioOf(totals.receivables, totals.gross))} of gross`;
  elements.bottomPaidRatio.textContent = `${formatPercent(ratioOf(totals.paid, totals.gross))} of gross`;
  elements.bottomExchangeMetric.textContent = liveExchangeRate ? decimal.format(liveExchangeRate) : workbookExchangeRate(records);
  elements.bottomExchangeDelta.textContent = liveExchangeRate ? "Live reference" : "Workbook average";
}

function ratioOf(value, total) {
  return Number(total) ? (Number(value) / Number(total)) * 100 : null;
}

function workbookExchangeRate(records) {
  const rates = records.map((record) => Number(record.exchangeRate)).filter(Number.isFinite);
  if (!rates.length) return "-";
  return decimal.format(rates.reduce((sum, rate) => sum + rate, 0) / rates.length);
}

function renderGrossNetTrend(records) {
  const points = monthlyTotals(records);
  if (!points.length) {
    elements.grossNetTrend.innerHTML = `<div class="empty-state compact"><h2>No dated records</h2><p>Add purchase order dates to build the trend.</p></div>`;
    elements.trendSummary.textContent = "Monthly sales and profit movement";
    return;
  }

  const maxValue = Math.max(...points.flatMap((point) => [point.gross, point.net]), 1);
  elements.trendSummary.textContent = `${points.length} month${points.length === 1 ? "" : "s"} shown`;
  elements.grossNetTrend.innerHTML = points.map((point) => {
    const grossHeight = Math.max(4, (point.gross / maxValue) * 100);
    const netHeight = Math.max(4, (point.net / maxValue) * 100);
    return `
      <div class="trend-point">
        <div class="trend-bars">
          <span class="trend-bar gross" style="height: ${grossHeight}%"></span>
          <span class="trend-bar net" style="height: ${netHeight}%"></span>
        </div>
        <strong>${escapeHtml(point.label)}</strong>
        <small>${formatMoney(point.net)} net</small>
      </div>
    `;
  }).join("");
}

function monthlyTotals(records) {
  return [...records.reduce((map, record) => {
    const date = record.date ? new Date(record.date) : null;
    if (!date || Number.isNaN(date.getTime())) return map;
    const key = record.date.slice(0, 7);
    const current = map.get(key) || { key, label: date.toLocaleDateString("en-PH", { month: "short", year: "2-digit" }), gross: 0, net: 0 };
    current.gross += Number(record.gross) || 0;
    current.net += Number(record.net) || 0;
    map.set(key, current);
    return map;
  }, new Map()).values()].sort((a, b) => a.key.localeCompare(b.key)).slice(-8);
}

function renderSideViews(records) {
  const totals = totalRecords(records);
  const receivableRecords = records.filter((record) => Number(record.receivables) > 0)
    .sort((a, b) => (Number(b.receivables) || 0) - (Number(a.receivables) || 0));
  elements.receivablesPanel.innerHTML = insightList({
    metrics: [
      ["Open Receivables", formatMoney(totals.receivables)],
      ["Open Orders", String(totals.open)],
      ["Receivable Ratio", `${formatPercent(ratioOf(totals.receivables, totals.gross))} of gross`]
    ],
    title: "Largest Open Balances",
    rows: receivableRecords.slice(0, 10).map((record) => [
      record.category || "Unassigned",
      record.description || "Untitled item",
      formatMoney(record.receivables)
    ])
  });

  elements.paymentsPanel.innerHTML = insightList({
    metrics: [
      ["Paid", formatMoney(totals.paid)],
      ["Gross", formatMoney(totals.gross)],
      ["Paid Ratio", `${formatPercent(ratioOf(totals.paid, totals.gross))} of gross`]
    ],
    title: "Recent Payment Status",
    rows: records.slice().sort((a, b) => (Number(b.payment) || 0) - (Number(a.payment) || 0)).slice(0, 10).map((record) => [
      record.category || "Unassigned",
      record.description || "Untitled item",
      formatMoney(record.payment)
    ])
  });

  elements.customersPanel.innerHTML = groupedInsight(records, "category", "Customer Exposure", "customer");
  elements.productsPanel.innerHTML = groupedInsight(records, "description", "Product Sales", "product");
  elements.shipmentsPanel.innerHTML = insightList({
    metrics: [
      ["Total CBM", formatNumber(totals.cbm)],
      ["Shipping Fees", formatMoney(totals.shippingFee)],
      ["Avg Ship Rate", workbookExchangeRate(records)]
    ],
    title: "Largest Shipments",
    rows: records.slice().sort((a, b) => (Number(b.cbm) || 0) - (Number(a.cbm) || 0)).slice(0, 10).map((record) => [
      record.description || "Untitled item",
      record.category || "Unassigned",
      `${formatNumber(record.cbm)} CBM`
    ])
  });
  elements.reportsPanel.innerHTML = insightList({
    metrics: [
      ["Total Gross", formatMoney(totals.gross)],
      ["Net Profit", formatMoney(totals.net)],
      ["Receivables", formatMoney(totals.receivables)],
      ["Paid", formatMoney(totals.paid)]
    ],
    title: "Gross vs Net by Month",
    rows: monthlyTotals(records).map((point) => [
      point.label,
      formatMoney(point.gross),
      `${formatMoney(point.net)} net`
    ])
  });
  elements.exchangeRatesPanel.innerHTML = insightList({
    metrics: [
      ["Live CNY/PHP", liveExchangeRate ? decimal.format(liveExchangeRate) : "-"],
      ["Workbook Avg", workbookExchangeRate(records)],
      ["Records", String(records.length)]
    ],
    title: "Workbook Exchange Rates",
    rows: records.slice().sort((a, b) => (Number(b.exchangeRate) || 0) - (Number(a.exchangeRate) || 0)).slice(0, 10).map((record) => [
      record.description || "Untitled item",
      record.category || "Unassigned",
      decimal.format(Number(record.exchangeRate) || 0)
    ])
  });
}

function totalRecords(records) {
  return records.reduce((sum, record) => {
    sum.gross += Number(record.gross) || 0;
    sum.net += Number(record.net) || 0;
    sum.receivables += Number(record.receivables) || 0;
    sum.paid += Number(record.payment) || 0;
    sum.cbm += Number(record.cbm) || 0;
    sum.shippingFee += Number(record.shippingFee) || 0;
    sum.open += statusFor(record) === "open" ? 1 : 0;
    return sum;
  }, { gross: 0, net: 0, receivables: 0, paid: 0, cbm: 0, shippingFee: 0, open: 0 });
}

function groupedInsight(records, field, title, noun) {
  const groups = [...records.reduce((map, record) => {
    const key = record[field] || `Unassigned ${noun}`;
    const current = map.get(key) || { key, gross: 0, receivables: 0, count: 0 };
    current.gross += Number(record.gross) || 0;
    current.receivables += Number(record.receivables) || 0;
    current.count += 1;
    map.set(key, current);
    return map;
  }, new Map()).values()].sort((a, b) => b.gross - a.gross);
  const totals = totalRecords(records);

  return insightList({
    metrics: [
      [`Total ${noun}s`, String(groups.length)],
      ["Total Gross", formatMoney(totals.gross)],
      ["Receivables", formatMoney(totals.receivables)]
    ],
    title,
    rows: groups.slice(0, 10).map((group) => [
      group.key,
      `${group.count} order${group.count === 1 ? "" : "s"}`,
      formatMoney(group.gross)
    ])
  });
}

function insightList({ metrics, title, rows }) {
  return `
    <div class="insight-metrics">
      ${metrics.map(([label, value]) => `<article class="metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`).join("")}
    </div>
    <article class="dashboard-panel">
      <div class="panel-heading compact">
        <h2>${escapeHtml(title)}</h2>
        <p>${rows.length} rows</p>
      </div>
      <div class="insight-list">
        ${rows.map(([primary, secondary, value]) => `
          <div class="insight-row">
            <div>
              <strong>${escapeHtml(primary)}</strong>
              <span>${escapeHtml(secondary)}</span>
            </div>
            <strong>${escapeHtml(value)}</strong>
          </div>
        `).join("")}
      </div>
    </article>
  `;
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

function renderFinance(records) {
  const totals = totalRecords(records);
  const unpaid = Math.max(0, totals.receivables);
  const paidRatio = ratioOf(totals.paid, totals.paid + unpaid) || 0;
  const unpaidRatio = 100 - paidRatio;
  const aging = receivableAging(records);
  const customers = groupedRows(records, "category")
    .sort((a, b) => b.receivables - a.receivables)
    .slice(0, 10);
  const maxCustomerReceivable = Math.max(...customers.map((customer) => customer.receivables), 1);
  const paidUnpaid = monthlyPaidUnpaid(records);
  const trend = monthlyTotals(records);
  const maxMonthlyCash = Math.max(...paidUnpaid.flatMap((point) => [point.paid, point.unpaid]), 1);
  const maxNet = Math.max(...trend.map((point) => point.net), 1);
  const recent = records.slice()
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .slice(0, 6);

  elements.financeUpdatedAt.textContent = `Updated ${new Date().toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" })}`;
  elements.financePanel.innerHTML = `
    <section class="finance-kpis">
      ${financeMetric("Total Gross", formatMoney(totals.gross), `${formatPercent(ratioOf(totals.gross, totals.gross))} tracked`)}
      ${financeMetric("Net Profit", formatMoney(totals.net), `${formatPercent(ratioOf(totals.net, totals.gross))} of gross`)}
      ${financeMetric("Receivables", formatMoney(totals.receivables), `${formatPercent(ratioOf(totals.receivables, totals.gross))} of gross`, "danger")}
      ${financeMetric("Open Orders", String(totals.open), "Need collection review")}
      ${financeMetric("CNY/PHP", liveExchangeRate ? decimal.format(liveExchangeRate) : workbookExchangeRate(records), liveExchangeRate ? "Live reference" : "Workbook average")}
    </section>
    <section class="finance-grid">
      <article class="finance-card receivables-overview">
        <div class="panel-heading compact">
          <h2>Receivables Overview</h2>
          <p>${formatMoney(unpaid)} open</p>
        </div>
        <div class="receivable-layout">
          <div class="receivable-total">
            <span>Total Receivables</span>
            <strong>${formatMoney(unpaid)}</strong>
            <p><i class="dot paid-dot"></i>Paid <b>${formatMoney(totals.paid)}</b> <small>${formatPercent(paidRatio)}</small></p>
            <p><i class="dot unpaid-dot"></i>Unpaid <b>${formatMoney(unpaid)}</b> <small>${formatPercent(unpaidRatio)}</small></p>
          </div>
          <div class="donut" style="--paid:${paidRatio}; --unpaid:${unpaidRatio}">
            <strong>${formatCompactMoney(unpaid)}</strong>
            <span>Total</span>
          </div>
          <div class="finance-breakdown">
            <h3>Aging</h3>
            <div><span>0-30 Days</span><strong>${formatMoney(aging.current)}</strong><small>${formatPercent(ratioOf(aging.current, unpaid))}</small></div>
            <div><span>31-60 Days</span><strong>${formatMoney(aging.mid)}</strong><small>${formatPercent(ratioOf(aging.mid, unpaid))}</small></div>
            <div class="overdue"><span>Overdue</span><strong>${formatMoney(aging.overdue)}</strong><small>${formatPercent(ratioOf(aging.overdue, unpaid))}</small></div>
          </div>
        </div>
      </article>
      <article class="finance-card customer-balances">
        <div class="panel-heading compact">
          <h2>Customer Balances</h2>
          <p>${customers.length} customers</p>
        </div>
        <div class="balance-list">
          ${customers.map((customer, index) => `
            <div class="balance-row">
              <span>${index + 1}</span>
              <strong>${escapeHtml(customer.key)}</strong>
              <div class="mini-track"><i style="width:${Math.max(4, (customer.receivables / maxCustomerReceivable) * 100)}%"></i></div>
              <b>${formatMoney(customer.receivables)}</b>
            </div>
          `).join("")}
          <div class="balance-total"><span>Total</span><strong>${formatMoney(customers.reduce((sum, customer) => sum + customer.receivables, 0))}</strong></div>
        </div>
      </article>
      <article class="finance-card">
        <div class="panel-heading compact">
          <h2>Paid vs Unpaid</h2>
          <p>By month</p>
        </div>
        <div class="finance-bars">
          ${paidUnpaid.map((point) => `
            <div class="finance-bar-point">
              <div class="paired-bars">
                <span class="paid-bar" style="height:${Math.max(4, (point.paid / maxMonthlyCash) * 100)}%"></span>
                <span class="unpaid-bar" style="height:${Math.max(4, (point.unpaid / maxMonthlyCash) * 100)}%"></span>
              </div>
              <strong>${escapeHtml(point.label)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="finance-card">
        <div class="panel-heading compact">
          <h2>Net Profit Trend</h2>
          <p>Monthly</p>
        </div>
        <div class="net-trend">
          ${trend.map((point) => `
            <div class="net-point">
              <span style="height:${Math.max(4, (point.net / maxNet) * 100)}%"></span>
              <strong>${escapeHtml(point.label)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="finance-card recent-finance-orders">
        <div class="panel-heading compact">
          <h2>Recent Purchase Orders</h2>
          <p>${recent.length} latest</p>
        </div>
        <div class="finance-table">
          <div class="finance-table-head"><span>Date</span><span>Customer</span><span>Item</span><span>Gross</span><span>Receivables</span><span>Status</span></div>
          ${recent.map((record) => `
            <div class="finance-table-row">
              <span>${escapeHtml(record.date || "-")}</span>
              <span>${escapeHtml(record.category || "Unassigned")}</span>
              <strong>${escapeHtml(record.description || "Untitled item")}</strong>
              <span>${formatMoney(record.gross)}</span>
              <span>${formatMoney(record.receivables)}</span>
              <span class="pill ${statusFor(record)}">${displayStatus(record)}</span>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function financeMetric(label, value, delta, tone = "") {
  return `
    <article class="finance-metric ${tone}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(delta)}</small>
    </article>
  `;
}

function groupedRows(records, field) {
  return [...records.reduce((map, record) => {
    const key = record[field] || "Unassigned";
    const current = map.get(key) || { key, gross: 0, receivables: 0, paid: 0, count: 0 };
    current.gross += Number(record.gross) || 0;
    current.receivables += Number(record.receivables) || 0;
    current.paid += Number(record.payment) || 0;
    current.count += 1;
    map.set(key, current);
    return map;
  }, new Map()).values()];
}

function monthlyPaidUnpaid(records) {
  return monthlyTotals(records).map((point) => {
    const monthRecords = records.filter((record) => record.date && record.date.slice(0, 7) === point.key);
    return {
      ...point,
      paid: monthRecords.reduce((sum, record) => sum + (Number(record.payment) || 0), 0),
      unpaid: monthRecords.reduce((sum, record) => sum + (Number(record.receivables) || 0), 0)
    };
  });
}

function receivableAging(records) {
  const today = new Date();
  return records.reduce((sum, record) => {
    const receivable = Number(record.receivables) || 0;
    if (receivable <= 0) return sum;
    const date = record.date ? new Date(record.date) : null;
    const age = date && !Number.isNaN(date.getTime()) ? Math.max(0, Math.floor((today - date) / 86_400_000)) : 61;
    if (age <= 30) sum.current += receivable;
    else if (age <= 60) sum.mid += receivable;
    else sum.overdue += receivable;
    return sum;
  }, { current: 0, mid: 0, overdue: 0 });
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
elements.settingsLogoutButton.addEventListener("click", handleLogout);
elements.mobileMenuLogoutButton.addEventListener("click", handleLogout);
elements.addButton.addEventListener("click", () => openItemDialog());
elements.mobileAddButton.addEventListener("click", () => openItemDialog());
elements.mobileMenuButton?.addEventListener("click", toggleMobileMenu);
elements.themeToggle?.addEventListener("click", () => {
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
