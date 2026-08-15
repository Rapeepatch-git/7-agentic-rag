/**
 * 7-Eleven Smart Retail Agentic RAG - UI Application Controller
 * Features:
 * - Unified Products & E-Bulletin View with Catalog vs List View Toggle
 * - 120 SKUs (Competitor Brands & Mixed Stock Status)
 * - Promotion Categories (Buy 2 Discount, B1G1 Free, Combo Deal, ALL Member, Stamp, Instant)
 * - Clean Navigation Menu Names & Hidden Vector Inspector
 */

document.addEventListener('DOMContentLoaded', () => {
  const GEMINI_DEFAULT_API_KEY = localStorage.getItem('gemini_api_key') || '';

  // Floating Chat Drawer Elements & Controls
  const floatingChatTrigger = document.getElementById('floating-chat-trigger');
  const floatingChatDrawer = document.getElementById('floating-chat-drawer');
  const closeFloatingChatBtn = document.getElementById('close-floating-chat-btn');
  const togglePresetsBtn = document.getElementById('toggle-presets-btn');
  const floatingPresetsDrawer = document.getElementById('floating-presets-drawer');
  const setApiKeyBtn = document.getElementById('set-api-key-btn');
  setApiKeyBtn?.addEventListener('click', () => {
    const currentKey = localStorage.getItem('gemini_api_key') || '';
    const newKey = prompt('ตั้งค่า Gemini API Key (วาง Key ของคุณที่นี่ หรือเว้นว่างเพื่อใช้ระบบ Local RAG Engine):', currentKey);
    if (newKey !== null) {
      if (newKey.trim()) {
        localStorage.setItem('gemini_api_key', newKey.trim());
        alert('บันทึก Gemini API Key เรียบร้อยแล้ว!');
      } else {
        localStorage.removeItem('gemini_api_key');
        alert('ยกเลิก API Key แล้ว ระบบจะใช้ Local RAG Engine');
      }
    }
  });

  function openFloatingChat() {
    floatingChatDrawer?.classList.add('active');
  }

  function closeFloatingChat() {
    floatingChatDrawer?.classList.remove('active');
  }

  floatingChatTrigger?.addEventListener('click', () => {
    if (floatingChatDrawer?.classList.contains('active')) {
      closeFloatingChat();
    } else {
      openFloatingChat();
    }
  });

  closeFloatingChatBtn?.addEventListener('click', closeFloatingChat);

  togglePresetsBtn?.addEventListener('click', () => {
    floatingPresetsDrawer?.classList.toggle('active');
  });

  // Display Mode Toggle (Catalog Grid vs List Table)
  const btnModeCatalog = document.getElementById('btn-mode-catalog');
  const btnModeList = document.getElementById('btn-mode-list');
  const catalogContainer = document.getElementById('catalog-container');
  const listContainer = document.getElementById('list-container');
  let currentDisplayMode = 'LIST'; // 'CATALOG' or 'LIST'

  function setDisplayMode(mode) {
    currentDisplayMode = mode;
    if (mode === 'CATALOG') {
      btnModeCatalog?.classList.add('active');
      btnModeList?.classList.remove('active');
      catalogContainer?.classList.add('active');
      listContainer?.classList.remove('active');
    } else {
      btnModeList?.classList.add('active');
      btnModeCatalog?.classList.remove('active');
      listContainer?.classList.add('active');
      catalogContainer?.classList.remove('active');
    }
  }

  btnModeCatalog?.addEventListener('click', () => setDisplayMode('CATALOG'));
  btnModeList?.addEventListener('click', () => setDisplayMode('LIST'));

  // Language Switcher Toggle Buttons (TH / EN)
  const langBtnTh = document.getElementById('lang-btn-th');
  const langBtnEn = document.getElementById('lang-btn-en');
  let currentLang = 'TH'; // 'TH' or 'EN'

  function getCategoryLabel(cat) {
    if (!cat) return '';
    if (currentLang === 'EN') {
      const enMap = {
        'Dairy': 'Dairy',
        'Bakery': 'Bakery',
        'Beverage': 'Beverage',
        'Ready-to-Eat': 'Ready-to-Eat',
        'Snacks': 'Snacks',
        'Instant Noodles': 'Instant Noodles',
        'Ice Cream': 'Ice Cream',
        'Frozen Food': 'Frozen Food',
        'Personal Care': 'Personal Care',
        'Household': 'Household'
      };
      return enMap[cat] || cat;
    } else {
      const thMap = {
        'Dairy': 'นม/ผลิตภัณฑ์นม',
        'Bakery': 'เบเกอรี่/ขนมปัง',
        'Beverage': 'เครื่องดื่ม',
        'Ready-to-Eat': 'อาหารพร้อมทาน',
        'Snacks': 'ขนมขบเคี้ยว',
        'Instant Noodles': 'บะหมี่สำเร็จรูป',
        'Ice Cream': 'ไอศกรีม',
        'Frozen Food': 'อาหารแช่แข็ง',
        'Personal Care': 'ของใช้ส่วนตัว',
        'Household': 'ของใช้ในบ้าน'
      };
      return thMap[cat] || cat;
    }
  }

  function getPromoCategoryLabel(pCat) {
    if (currentLang === 'EN') {
      const enMap = {
        'Buy 2 Get Discount': 'Buy 2 Get Discount',
        'Buy 1 Get 1 Free': 'Buy 1 Get 1 Free',
        'Combo Deal': 'Combo Deal',
        'ALL Member Discount': 'ALL Member Discount',
        'Stamp Collection': 'Stamp Collection',
        'Instant Discount': 'Instant Discount',
        'Regular Price': 'Regular Price',
        'ราคาปกติ': 'Regular Price',
        'สินค้าราคาปกติ': 'Regular Price'
      };
      if (!pCat) return 'Regular Price';
      return enMap[pCat] || pCat;
    } else {
      const thMap = {
        'Buy 2 Get Discount': 'ซื้อ 2 ชิ้นราคาพิเศษ',
        'Buy 1 Get 1 Free': 'ซื้อ 1 แถม 1',
        'Combo Deal': 'จับคู่สุดคุ้ม',
        'ALL Member Discount': 'ส่วนลดสมาชิก ALL Member',
        'Stamp Collection': 'สะสมแสตมป์',
        'Instant Discount': 'ลดทันที',
        'Regular Price': 'สินค้าราคาปกติ',
        'ราคาปกติ': 'สินค้าราคาปกติ',
        'สินค้าราคาปกติ': 'สินค้าราคาปกติ'
      };
      if (!pCat) return 'สินค้าราคาปกติ';
      return thMap[pCat] || pCat;
    }
  }

  // DOM Elements
  const chatMessagesContainer = document.getElementById('chat-messages-container');
  const chatInput = document.getElementById('chat-input');
  const sendChatBtn = document.getElementById('send-chat-btn');
  const clearChatBtn = document.getElementById('clear-chat-btn');
  const presetListContainer = document.getElementById('preset-list-container');
  
  // Unified Products & Bulletin Elements
  const bulletinGrid = document.getElementById('bulletin-grid');
  const dbSearchInput = document.getElementById('db-search-input');
  const catalogSortSelect = document.getElementById('catalog-sort-select');
  const dbStatusFilter = document.getElementById('db-status-filter');
  const dbCategoryFilter = document.getElementById('db-category-filter');
  const dbPromoCatFilter = document.getElementById('db-promocat-filter');
  const dbResetFiltersBtn = document.getElementById('db-reset-filters-btn');
  const dbResultCount = document.getElementById('db-result-count');
  const promotionsTbody = document.getElementById('promotions-tbody');
  const bulletinTitleText = document.getElementById('bulletin-title-text');
  const bulletinDescText = document.getElementById('bulletin-desc-text');

  // Modal Elements
  const openAddModalBtn = document.getElementById('open-add-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const addModal = document.getElementById('add-modal');
  const addProductForm = document.getElementById('add-product-form');

  // Header & Quick Stat Pills
  const pillAll = document.getElementById('pill-all');
  const pillInStock = document.getElementById('pill-instock');
  const pillOutOfStock = document.getElementById('pill-outofstock');
  const pillPromo = document.getElementById('pill-promo');

  // Stats elements
  const statSkuCount = document.getElementById('stat-sku-count');
  const statInStockCount = document.getElementById('stat-instock-count');
  const statOutOfStockCount = document.getElementById('stat-outofstock-count');
  const statPromoCount = document.getElementById('stat-promo-count');
  const statLatency = document.getElementById('stat-latency');

  // Table Sorting State
  let dbSortColumn = 'sku';
  let dbSortAscending = true;

  // Complete Language Dictionary covering 100% of UI elements
  const i18n = {
    TH: {
      bulletin_title: "ศูนย์รวมข้อมูลสินค้า & โบร์ชัวร์โปรโมชั่น",
      bulletin_desc: "สลับมุมมองการแสดงผลระหว่างการ์ดโบร์ชัวร์ (Catalog) หรือตารางสินค้า (List) พร้อมระบบค้นหา หมวดหมู่สินค้า และโปรโมชั่น",
      view_mode_label: "มุมมอง:",
      btn_mode_catalog: "มุมมองแคตตาล็อก",
      btn_mode_list: "มุมมองตาราง",
      quick_filter_title: "ตัวกรองด่วน:",
      pill_all: "ทั้งหมด",
      pill_instock: "สินค้าในสต็อก",
      pill_outofstock: "สินค้าหมดสต็อก",
      pill_promo: "มีโปรโมชั่น",
      pill_regular: "สินค้าราคาปกติ",
      label_search: "ค้นหาชื่อ/SKU:",
      search_placeholder: "ค้นหารหัส SKU หรือชื่อสินค้า...",
      catalog_sort_label: "เรียงลำดับ:",
      label_category: "หมวดหมู่สินค้า:",
      label_promocat: "โปรโมชั่น:",
      btn_reset: "รีเซ็ตตัวกรอง",
      stat_skus: "รายการทั้งหมด",
      stat_instock: "สินค้าในสต็อก",
      stat_outofstock: "สินค้าหมดสต็อก",
      stat_promos: "มีโปรโมชั่น",
      stat_latency: "ความเร็ว Agent",
      btn_dashboard: "แดชบอร์ด",
      btn_reorder_sheet: "ใบสั่งซื้อสินค้า",
      reorder_title: "ใบสั่งซื้อสินค้า",
      reorder_desc: "รายการสินค้าทั้งหมด สามารถเลือกและระบุจำนวนสั่งซื้อได้ (คำนวณจำนวนสั่งซื้อเริ่มต้นจาก Capacity - สต็อกปัจจุบัน)",
      label_select_lowstock: "เลือกเฉพาะสินค้าหมด/ใกล้หมด",
      label_select_all: "เลือกทั้งหมด",
      btn_submit_order: "สั่งซื้อสินค้า",
      th_select: "เลือก",
      th_sku: "SKU Code",
      th_name: "ชื่อสินค้า",
      th_category: "หมวดหมู่",
      th_promocat: "โปรโมชั่น",
      th_price: "ราคา (THB)",
      th_promo: "สถานะโปรโมชั่น",
      th_product_status: "สถานะสินค้า",
      th_stock: "สต็อกคงเหลือ",
      th_details: "รายละเอียดโปรโมชั่น",
      th_order_qty: "จำนวนที่สั่งซื้อ",
      dash_title: "แดชบอร์ดสรุปภาพรวม",
      dash_desc: "สรุปภาพรวมสถานะสินค้า ระดับคลังสต็อก สัดส่วนโปรโมชั่น และรายการแจ้งเตือนสต็อกหมด/ใกล้หมดเรียลไทม์",
      kpi_total_skus: "จำนวนสินค้าทั้งหมด",
      kpi_total_value: "มูลค่าสต็อกปัจจุบัน",
      kpi_critical_stock: "สินค้าหมด / ใกล้หมด (< 20%)",
      kpi_promo_ratio: "สินค้าจัดโปรโมชั่น",
      dash_chart_mode_label: "รูปแบบการแสดงผลกราฟสถิติ:",
      dash_toggle_bars: "กราฟแท่ง",
      dash_toggle_pie: "กราฟวงกลม",
      dash_cat_breakdown: "สัดส่วนสินค้าตามหมวดหมู่",
      dash_promo_breakdown: "สัดส่วนประเภทโปรโมชั่น",
      dash_critical_alert: "รายการสินค้าต้องเติมสต็อกเร่งด่วน",
      dash_critical_desc: "สินค้าที่มีระดับสต็อกต่ำกว่า 20% ของความจุถังคลังสินค้า",
      preset_title: "ตัวอย่างคำถามที่พบบ่อย",
      fab_chat_ai: "ถาม AI",
      preset_queries_header: "ตัวอย่างคำถามด่วน",
      chat_placeholder: "ถาม AI เกี่ยวกับโปรโมชั่น โบร์ชัวร์ หรือข้อมูลสินค้า...",
      btn_send: "ส่งคำถาม",
      btn_clear_chat: "ล้างแชท",
      btn_back: "ย้อนกลับไปหน้าหลัก",
      welcome_msg: `สวัสดีค่ะ! ยินดีต้อนรับสู่ **7-Eleven Smart Retail Agentic RAG** ระบบจัดการโบร์ชัวร์โปรโมชั่นและสินค้าคงคลัง 🏪✨\n\nคุณสามารถเลือกระหว่าง **"มุมมองแคตตาล็อก"** กับ **"มุมมองตาราง"** หรือเลือกปุ่มตัวกรองด่วน (Quick Status Filter) ได้ทันทีค่ะ!`
    },
    EN: {
      bulletin_title: "7-Eleven Products & Promotions Bulletin",
      bulletin_desc: "Switch display mode between Catalog Cards Flyer or List Table View with integrated search & promo categories.",
      view_mode_label: "View Mode:",
      btn_mode_catalog: "Catalog View",
      btn_mode_list: "List Table View",
      quick_filter_title: "Quick Status Filter:",
      pill_all: "All SKUs",
      pill_instock: "In-Stock",
      pill_outofstock: "Out of Stock",
      pill_promo: "Promotions",
      pill_regular: "Regular Price",
      label_search: "Search SKU / Name:",
      search_placeholder: "Search SKU code or product name...",
      catalog_sort_label: "Sort By:",
      label_category: "Category:",
      label_promocat: "Promotions:",
      btn_reset: "Reset Filters",
      stat_skus: "Total SKUs",
      stat_instock: "In-Stock",
      stat_outofstock: "Out of Stock",
      stat_promos: "Promotions",
      stat_latency: "Agent Latency",
      btn_dashboard: "Dashboard",
      btn_reorder_sheet: "Stock Reorder",
      reorder_title: "Stock Reorder Sheet",
      reorder_desc: "Items list with stock & order quantities (Calculated default: Capacity - Current Stock)",
      label_select_lowstock: "Select Low Stock Only (<20%)",
      label_select_all: "Select All",
      btn_submit_order: "Submit Order",
      th_select: "Select",
      th_sku: "SKU Code",
      th_name: "Product Name",
      th_category: "Category",
      th_promocat: "Promotions",
      th_price: "Price (THB)",
      th_promo: "Promo Status",
      th_product_status: "Product Status",
      th_stock: "Stock Level",
      th_details: "Promotion Details",
      th_order_qty: "Order Quantity",
      dash_title: "Executive Inventory & Promo Analytics Dashboard",
      dash_desc: "Overview of product inventory status, stock levels, promo ratios, and real-time critical low stock alerts",
      kpi_total_skus: "Total Product SKUs",
      kpi_total_value: "Current Inventory Value",
      kpi_critical_stock: "Critical Low Stock (<20%)",
      kpi_promo_ratio: "Promotions Product Ratio",
      dash_chart_mode_label: "Chart View Display Mode:",
      dash_toggle_bars: "Bar Chart",
      dash_toggle_pie: "Pie Chart",
      dash_cat_breakdown: "Category Breakdown",
      dash_promo_breakdown: "Promotion Type Breakdown",
      dash_critical_alert: "Critical Stock Alert (<20%)",
      dash_critical_desc: "Products with stock levels below 20% of maximum warehouse capacity",
      preset_title: "Preset Query Examples",
      fab_chat_ai: "Ask AI",
      preset_queries_header: "Quick Preset Queries",
      chat_placeholder: "Ask about E-Bulletin promos or product details...",
      btn_send: "Send Query",
      btn_clear_chat: "Clear Chat",
      btn_back: "Back to Main View",
      welcome_msg: `Welcome to **7-Eleven Smart Retail Agentic RAG** E-Bulletin & Inventory System 🏪✨\n\nToggle display mode between **Catalog View** and **List Table View** or use Quick Status Filter pills above!`
    }
  };

  function populateFilterDropdowns() {
    if (dbCategoryFilter) {
      const currentCatVal = dbCategoryFilter.value || 'ALL';
      dbCategoryFilter.innerHTML = `
        <option value="ALL">${currentLang === 'EN' ? 'All Categories' : 'ทุกหมวดหมู่'}</option>
        <option value="Dairy">${currentLang === 'EN' ? 'Dairy' : 'นม/ผลิตภัณฑ์นม'}</option>
        <option value="Bakery">${currentLang === 'EN' ? 'Bakery' : 'เบเกอรี่/ขนมปัง'}</option>
        <option value="Beverage">${currentLang === 'EN' ? 'Beverage' : 'เครื่องดื่ม'}</option>
        <option value="Ready-to-Eat">${currentLang === 'EN' ? 'Ready-to-Eat' : 'อาหารพร้อมทาน'}</option>
        <option value="Snacks">${currentLang === 'EN' ? 'Snacks' : 'ขนมขบเคี้ยว'}</option>
        <option value="Instant Noodles">${currentLang === 'EN' ? 'Instant Noodles' : 'บะหมี่สำเร็จรูป'}</option>
        <option value="Ice Cream">${currentLang === 'EN' ? 'Ice Cream' : 'ไอศกรีม'}</option>
        <option value="Frozen Food">${currentLang === 'EN' ? 'Frozen Food' : 'อาหารแช่แข็ง'}</option>
        <option value="Personal Care">${currentLang === 'EN' ? 'Personal Care' : 'ของใช้ส่วนตัว'}</option>
        <option value="Household">${currentLang === 'EN' ? 'Household' : 'ของใช้ในบ้าน'}</option>
      `;
      dbCategoryFilter.value = currentCatVal;
    }

    if (dbPromoCatFilter) {
      const currentPromoVal = dbPromoCatFilter.value || 'ALL';
      dbPromoCatFilter.innerHTML = `
        <option value="ALL">${currentLang === 'EN' ? 'All Promotions' : 'โปรโมชั่นทั้งหมด'}</option>
        <option value="Buy 2 Get Discount">${currentLang === 'EN' ? 'Buy 2 Get Discount' : 'ซื้อ 2 ชิ้นราคาพิเศษ'}</option>
        <option value="Buy 1 Get 1 Free">${currentLang === 'EN' ? 'Buy 1 Get 1 Free' : 'ซื้อ 1 แถม 1'}</option>
        <option value="Combo Deal">${currentLang === 'EN' ? 'Combo Deal' : 'จับคู่สุดคุ้ม'}</option>
        <option value="ALL Member Discount">${currentLang === 'EN' ? 'ALL Member Discount' : 'ส่วนลดสมาชิก ALL Member'}</option>
        <option value="Stamp Collection">${currentLang === 'EN' ? 'Stamp Collection' : 'สะสมแสตมป์'}</option>
        <option value="Instant Discount">${currentLang === 'EN' ? 'Instant Discount' : 'ลดทันที'}</option>
        <option value="Regular Price">${currentLang === 'EN' ? 'Regular Price' : 'สินค้าราคาปกติ'}</option>
      `;
      dbPromoCatFilter.value = currentPromoVal;
    }

    if (catalogSortSelect) {
      const currentSortVal = catalogSortSelect.value || 'sku_asc';
      catalogSortSelect.innerHTML = `
        <option value="sku_asc">${currentLang === 'EN' ? 'SKU Code' : 'รหัสสินค้า'}</option>
        <option value="name_asc">${currentLang === 'EN' ? 'Product Name (A-Z)' : 'ชื่อสินค้า A-Z'}</option>
        <option value="price_asc">${currentLang === 'EN' ? 'Price: Low to High' : 'ราคา: น้อย ➔ มาก'}</option>
        <option value="price_desc">${currentLang === 'EN' ? 'Price: High to Low' : 'ราคา: มาก ➔ น้อย'}</option>
        <option value="stock_desc">${currentLang === 'EN' ? 'Highest Stock' : 'สต็อก: มาก ➔ น้อย'}</option>
        <option value="stock_asc">${currentLang === 'EN' ? 'Lowest Stock' : 'สต็อก: น้อย ➔ มาก'}</option>
        <option value="category_asc">${currentLang === 'EN' ? 'Category' : 'หมวดหมู่สินค้า'}</option>
        <option value="promocat_asc">${currentLang === 'EN' ? 'Promotions' : 'โปรโมชั่น'}</option>
      `;
      catalogSortSelect.value = currentSortVal;
    }
  }

  // Sample Presets Dictionary
  const samplePresets = {
    TH: [
      { tag: "🛒 สั่งซื้อสินค้าหมด • Deep Link", query: "มีสินค้าอะไรหมดในสต็อกบ้าง? พาไปสั่งซื้อสินค้า" },
      { tag: "แบรนด์คู่แข่ง • โค้ก vs เป๊ปซี่", query: "เปรียบเทียบโปรโมชั่นโค้กกับเป๊ปซี่และเครื่องดื่มน้ำอัดลม" },
      { tag: "แบรนด์คู่แข่ง • ไมโล vs โอวัลติน", query: "ไมโลกับโอวัลตินมีโปรโมชั่นอะไรบ้าง?" },
      { tag: "หมวดโปร • ซื้อ 1 แถม 1", query: "ค้นหาสินค้าที่มีโปรโมชั่น ซื้อ 1 แถม 1 ทั้งหมด" },
      { tag: "หมวดโปร • จับคู่สุดคุ้ม", query: "มีสินค้าประเภทไหนบ้างที่มีโปรโมชั่นจับคู่สุดคุ้ม?" },
      { tag: "สมาชิก ALL Member", query: "ส่วนลดสำหรับสมาชิก ALL Member มีสินค้าอะไรบ้าง?" }
    ],
    EN: [
      { tag: "🛒 Reorder Out-of-Stock • Deep Link", query: "Which items are out of stock? Take me to order checklist" },
      { tag: "Competitor Brands • Coke vs Pepsi", query: "Compare promotions for Coca-Cola, Pepsi, and soda drinks" },
      { tag: "Competitor Brands • Milo vs Ovaltine", query: "What promotions are available for Milo and Ovaltine?" },
      { tag: "Promo Type • Buy 1 Get 1 Free", query: "Search all items with Buy 1 Get 1 Free promotions" },
      { tag: "Promo Type • Combo Deal", query: "Which products feature Combo Deals?" },
      { tag: "ALL Member Deals", query: "What discounts are available for ALL Member users?" }
    ]
  };

  let autoSelectedSkus = new Set();

  // Quick Status Filter State (Default 'ALL')
  let currentStatusFilter = 'ALL';
  const quickPills = document.querySelectorAll('.quick-filter-pill');

  function applyQuickStatusFilter(statusValue) {
    currentStatusFilter = statusValue;
    syncQuickFilterPills(statusValue);
    if (viewReorder && viewReorder.classList.contains('active')) {
      renderReorderChecklist();
    } else {
      renderUnifiedProductsView();
    }
  }

  function syncQuickFilterPills(statusValue) {
    quickPills.forEach(pill => {
      if (pill.getAttribute('data-status') === statusValue) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const statusVal = pill.getAttribute('data-status');
      applyQuickStatusFilter(statusVal);
    });
  });

  // Segmented Language Toggle Switch Listeners
  langBtnTh?.addEventListener('click', () => setLanguage('TH'));
  langBtnEn?.addEventListener('click', () => setLanguage('EN'));

  function setLanguage(lang) {
    currentLang = lang;
    window.ragEngine.config.lang = lang;

    if (lang === 'TH') {
      langBtnTh?.classList.add('active');
      langBtnEn?.classList.remove('active');
    } else {
      langBtnEn?.classList.add('active');
      langBtnTh?.classList.remove('active');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    if (chatInput) chatInput.placeholder = i18n[lang].chat_placeholder;
    if (dbSearchInput) dbSearchInput.placeholder = i18n[lang].search_placeholder;

    // Update Deep Link Box labels across chat history
    document.querySelectorAll('.ai-reorder-deeplink-box').forEach(box => {
      const count = box.getAttribute('data-count') || '';
      const btnSpan = box.querySelector('.deeplink-btn-span');
      if (btnSpan) {
        btnSpan.textContent = lang === 'EN' ? `Reorder Items (${count} items)` : `สั่งซื้อสินค้า (${count} รายการ)`;
      }
    });

    populateFilterDropdowns();
    renderPresets();
    if (viewDashboard && viewDashboard.classList.contains('active')) {
      renderDashboard();
    } else if (viewReorder && viewReorder.classList.contains('active')) {
      renderReorderChecklist();
    } else {
      renderUnifiedProductsView();
    }
    updateHeaderStats();
  }

  function renderPresets() {
    if (!presetListContainer) return;
    presetListContainer.innerHTML = '';

    samplePresets[currentLang].forEach(preset => {
      const btn = document.createElement('button');
      btn.className = 'preset-btn';
      btn.setAttribute('data-query', preset.query);
      btn.innerHTML = `
        <span class="preset-tag">${preset.tag}</span>
        <div>"${preset.query}"</div>
      `;
      btn.addEventListener('click', () => {
        openFloatingChat();
        chatInput.value = preset.query;
        handleUserSend();
      });
      presetListContainer.appendChild(btn);
    });
  }

  // Initial Welcome Message
  appendAssistantMessage({
    text: i18n.TH.welcome_msg,
    trace: null,
    productCards: []
  });

  async function initApp() {
    if (window.ragEngine && typeof window.ragEngine.init === 'function') {
      await window.ragEngine.init();
    }
    populateFilterDropdowns();
    renderPresets();
    renderUnifiedProductsView();
    updateHeaderStats();
  }

  initApp();

  // Unified Filter Event Listeners (Search, Catalog Sort, Category, Promo Category)
  dbSearchInput?.addEventListener('input', () => renderUnifiedProductsView());
  catalogSortSelect?.addEventListener('change', () => renderUnifiedProductsView());
  dbCategoryFilter?.addEventListener('change', () => renderUnifiedProductsView());
  dbPromoCatFilter?.addEventListener('change', () => renderUnifiedProductsView());

  dbResetFiltersBtn?.addEventListener('click', () => {
    if (dbSearchInput) dbSearchInput.value = '';
    if (catalogSortSelect) catalogSortSelect.value = 'sku_asc';
    if (dbCategoryFilter) dbCategoryFilter.value = 'ALL';
    if (dbPromoCatFilter) dbPromoCatFilter.value = 'ALL';
    currentStatusFilter = 'ALL';
    syncQuickFilterPills('ALL');
    dbSortColumn = 'sku';
    dbSortAscending = true;
    renderUnifiedProductsView();
  });

  // DB Table Sort Header Click Event Listeners
  document.querySelectorAll('.sortable-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.getAttribute('data-sort');
      if (dbSortColumn === col) {
        dbSortAscending = !dbSortAscending;
      } else {
        dbSortColumn = col;
        dbSortAscending = true;
      }
      renderUnifiedProductsView();
    });
  });

  // Send message event
  sendChatBtn?.addEventListener('click', handleUserSend);
  chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserSend();
  });

  clearChatBtn?.addEventListener('click', () => {
    chatMessagesContainer.innerHTML = '';
    appendAssistantMessage({
      text: currentLang === 'TH' ? `ล้างประวัติการสนทนาเรียบร้อยค่ะ` : `Chat history cleared successfully.`,
      trace: null,
      productCards: []
    });
  });

  async function handleUserSend() {
    const query = chatInput.value.trim();
    if (!query) return;

    appendUserMessage(query);
    chatInput.value = '';

    const apiKey = localStorage.getItem('gemini_api_key') || GEMINI_DEFAULT_API_KEY;

    // Loading indicator bubble
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message-bubble assistant';
    loadingDiv.innerHTML = `
      <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
      <div class="msg-content"><i class="fa-solid fa-spinner fa-spin" style="color: var(--711-orange);"></i> กำลังประมวลผลคำตอบจาก Gemini AI...</div>
    `;
    chatMessagesContainer.appendChild(loadingDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    let result;
    if (apiKey) {
      result = await window.ragEngine.runGeminiLiveChat(query, apiKey);
    } else {
      result = window.ragEngine.runWorkflow(query);
    }

    loadingDiv.remove();

    if (statLatency) statLatency.textContent = `${result.latencyMs} ms`;
    appendAssistantMessage(result.response, result.trace, result.routeDecision, result.sqlResult, result.vectorResult);

    // Intent detection: Auto trigger Deep Link if user explicitly requested reordering
    const isReorderIntent = queryLower.includes('สั่งสินค้า') || 
                            queryLower.includes('สั่งซื้อ') || 
                            queryLower.includes('เติมสต็อก') || 
                            queryLower.includes('reorder') || 
                            queryLower.includes('order checklist');

    if (isReorderIntent) {
      let skusToOrder = [];
      if (result.response.allMatchedSkus && result.response.allMatchedSkus.length > 0) {
        skusToOrder = result.response.allMatchedSkus;
      } else if (result.response.productCards && result.response.productCards.length > 0) {
        skusToOrder = result.response.productCards.map(p => p.product_code);
      } else {
        const outOfStockItems = window.ragEngine.db.filter(p => p.current_stock === 0);
        skusToOrder = outOfStockItems.map(p => p.product_code);
      }

      if (skusToOrder.length > 0) {
        setTimeout(() => {
          openReorderSheetWithSkus(skusToOrder);
        }, 800);
      }
    }
  }

  function appendUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message-bubble user';
    msgDiv.innerHTML = `
      <div class="msg-avatar">YOU</div>
      <div class="msg-content">${escapeHtml(text)}</div>
    `;
    chatMessagesContainer.appendChild(msgDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  function appendAssistantMessage(responseObj, trace = null, routeDecision = null, sqlResult = null, vectorResult = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message-bubble assistant';

    let contentHtml = `<div>${formatMarkdown(responseObj.text)}</div>`;

    // LangGraph Agentic Trace Log hidden per user request

    // Filter to ONLY items that meet the reorder logic: stock < 20% (including stock === 0)
    let reorderSkus = [];
    if (responseObj.reorderSkus && Array.isArray(responseObj.reorderSkus)) {
      reorderSkus = responseObj.reorderSkus;
    } else {
      const candidateSkus = responseObj.allMatchedSkus || (responseObj.productCards ? responseObj.productCards.map(p => p.product_code) : []);
      reorderSkus = candidateSkus.filter(sku => {
        const item = window.ragEngine.db.find(i => i.product_code === sku);
        return item && (item.current_stock === 0 || (item.current_stock / item.stock_capacity) < 0.20);
      });
    }

    // Deep Link Button MUST ONLY appear if there are items with stock < 20%!
    if (reorderSkus.length > 0) {
      const btnText = currentLang === 'EN' ? `Reorder Items (${reorderSkus.length} items)` : `สั่งซื้อสินค้า (${reorderSkus.length} รายการ)`;

      contentHtml += `
        <div class="ai-reorder-deeplink-box" data-count="${reorderSkus.length}" style="margin-top: 14px;">
          <button type="button" class="btn-ai-deeplink-reorder" data-skus="${reorderSkus.join(',')}" style="background: #005D3B; color: #ffffff; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 800; font-size: 13.5px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; box-shadow: var(--shadow-sm); transition: all 0.2s ease;">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="deeplink-btn-span">${btnText}</span>
          </button>
        </div>
      `;
    }

    msgDiv.innerHTML = `
      <div class="msg-avatar">7</div>
      <div class="msg-content">${contentHtml}</div>
    `;

    chatMessagesContainer.appendChild(msgDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  // Unified Rendering Function (Filters items once, then renders both Catalog Grid & List Table)
  function renderUnifiedProductsView() {
    let items = [...window.ragEngine.db];

    // 1. Search Query Filter (SKU / Name TH / Name EN)
    const searchQuery = dbSearchInput ? dbSearchInput.value.trim().toLowerCase() : '';
    if (searchQuery) {
      items = items.filter(i => 
        i.product_code.toLowerCase().includes(searchQuery) ||
        i.name_th.toLowerCase().includes(searchQuery) ||
        i.name_en.toLowerCase().includes(searchQuery)
      );
    }

    // 2. Status Filter (Controlled Exclusively by Quick Filter Pills)
    const statusVal = currentStatusFilter;
    if (statusVal === 'IN_STOCK') {
      items = items.filter(i => i.current_stock > 0);
    } else if (statusVal === 'OUT_OF_STOCK') {
      items = items.filter(i => i.current_stock === 0);
    } else if (statusVal === 'PROMO') {
      items = items.filter(i => i.has_promo);
    } else if (statusVal === 'REGULAR') {
      items = items.filter(i => !i.has_promo);
    }

    // 3. Category Filter
    const catVal = dbCategoryFilter ? dbCategoryFilter.value : 'ALL';
    if (catVal !== 'ALL') {
      items = items.filter(i => i.category.toLowerCase() === catVal.toLowerCase());
    }

    // 4. Promotion Category Filter
    const promoCatVal = dbPromoCatFilter ? dbPromoCatFilter.value : 'ALL';
    if (promoCatVal !== 'ALL') {
      items = items.filter(i => (i.promo_category || '').toLowerCase() === promoCatVal.toLowerCase());
    }

    // Update Result Count Label
    const resultCountContainer = document.getElementById('db-result-count-container');
    if (resultCountContainer) {
      if (currentLang === 'EN') {
        resultCountContainer.innerHTML = `Showing <strong><span id="db-result-count">${items.length}</span></strong> Items`;
      } else {
        resultCountContainer.innerHTML = `แสดงผล <strong><span id="db-result-count">${items.length}</span></strong> รายการ`;
      }
    } else if (dbResultCount) {
      dbResultCount.textContent = items.length;
    }

    // 5. Dedicated Catalog View Sorting (Controlled specifically by catalogSortSelect)
    let catalogItems = [...items];
    const catSortVal = catalogSortSelect ? catalogSortSelect.value : 'sku_asc';
    const [catCol, catDir] = catSortVal.split('_');
    const isCatAsc = catDir === 'asc';

    catalogItems.sort((a, b) => {
      let valA, valB;
      if (catCol === 'sku') {
        valA = parseInt(a.product_code.replace(/\D/g, ''), 10);
        valB = parseInt(b.product_code.replace(/\D/g, ''), 10);
      } else if (catCol === 'name') {
        valA = currentLang === 'EN' ? a.name_en : a.name_th;
        valB = currentLang === 'EN' ? b.name_en : b.name_th;
      } else if (catCol === 'category') {
        valA = a.category;
        valB = b.category;
      } else if (catCol === 'promocat') {
        valA = a.promo_category || '';
        valB = b.promo_category || '';
      } else if (catCol === 'price') {
        valA = a.price;
        valB = b.price;
      } else if (catCol === 'stock') {
        valA = a.current_stock;
        valB = b.current_stock;
      } else {
        valA = a.id;
        valB = b.id;
      }

      if (valA < valB) return isCatAsc ? -1 : 1;
      if (valA > valB) return isCatAsc ? 1 : -1;
      return 0;
    });

    // 6. List Table View Sorting (Controlled by Table Column Header clicks: dbSortColumn & dbSortAscending)
    items.sort((a, b) => {
      let valA, valB;
      if (dbSortColumn === 'sku') {
        valA = parseInt(a.product_code.replace(/\D/g, ''), 10);
        valB = parseInt(b.product_code.replace(/\D/g, ''), 10);
      } else if (dbSortColumn === 'name') {
        valA = currentLang === 'EN' ? a.name_en : a.name_th;
        valB = currentLang === 'EN' ? b.name_en : b.name_th;
      } else if (dbSortColumn === 'category') {
        valA = a.category;
        valB = b.category;
      } else if (dbSortColumn === 'promocat') {
        valA = a.promo_category || '';
        valB = b.promo_category || '';
      } else if (dbSortColumn === 'price') {
        valA = a.price;
        valB = b.price;
      } else if (dbSortColumn === 'promo') {
        valA = a.has_promo ? 1 : 0;
        valB = b.has_promo ? 1 : 0;
      } else if (dbSortColumn === 'stock') {
        valA = a.stock_capacity > 0 ? (a.current_stock / a.stock_capacity) : 0;
        valB = b.stock_capacity > 0 ? (b.current_stock / b.stock_capacity) : 0;
      } else {
        valA = a.id;
        valB = b.id;
      }

      if (valA < valB) return dbSortAscending ? -1 : 1;
      if (valA > valB) return dbSortAscending ? 1 : -1;
      return 0;
    });

    // Render 1: Catalog View Cards (Sorted by catalogSortSelect)
    renderCatalogGrid(catalogItems);

    // Render 2: List Table Rows (Sorted by Table Header clicks)
    renderListTableRows(items);
  }

  function renderCatalogGrid(items) {
    if (!bulletinGrid) return;
    bulletinGrid.innerHTML = '';

    if (items.length === 0) {
      bulletinGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b; background: white; border-radius: 16px; border: 1px dashed #cbd5e1;">
          <i class="fa-solid fa-box-open" style="font-size: 36px; color: #94a3b8; margin-bottom: 12px;"></i>
          <h3>${currentLang === 'EN' ? 'No items found matching your filters.' : 'ไม่พบสินค้าตามเงื่อนไขที่คุณเลือก'}</h3>
        </div>
      `;
      return;
    }

    items.forEach(item => {
      const card = document.createElement('div');
      const isOutOfStock = item.current_stock === 0;

      card.className = `bulletin-card ${isOutOfStock ? 'outofstock-item' : (item.has_promo ? 'promo-item' : 'regular-item')}`;

      let promoTag = item.has_promo
        ? `<div class="bulletin-promo-badge"><i class="fa-solid fa-fire"></i> ${escapeHtml(getPromoCategoryLabel(item.promo_category))}</div>`
        : `<div class="bulletin-regular-badge">⚪ ${escapeHtml(getPromoCategoryLabel('Regular Price'))}</div>`;

      if (isOutOfStock) {
        promoTag = `<div class="bulletin-outofstock-badge"><i class="fa-solid fa-ban"></i> OUT OF STOCK</div>`;
      }

      const prodName = currentLang === 'EN' ? item.name_en : item.name_th;
      const primaryDesc = currentLang === 'EN' ? item.description_en : item.description_th;
      const secondaryDesc = currentLang === 'EN' ? item.description_th : item.description_en;

      const stockPct = Math.round((item.current_stock / item.stock_capacity) * 100);
      let stockColor = '#10b981';
      if (stockPct < 50) stockColor = '#f59e0b';
      if (isOutOfStock) stockColor = '#ef4444';

      card.innerHTML = `
        <div class="bulletin-card-img-wrap">
          <img src="${item.image}" alt="${escapeHtml(prodName)}" class="bulletin-card-img" />
          <div class="bulletin-sku-pill">${item.product_code}</div>
          ${promoTag}
        </div>

        <div class="bulletin-card-body">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="bulletin-category-tag">${escapeHtml(getCategoryLabel(item.category))}</span>
          </div>

          <h3 class="bulletin-product-title" style="margin-top: 4px;">${escapeHtml(prodName)}</h3>
          
          <div class="bulletin-price-row">
            <span class="bulletin-price">฿${item.price.toFixed(2)}</span>
            <span class="bulletin-stock-tag" style="color: ${stockColor}; font-weight: bold; font-size: 11px;">
              ${isOutOfStock ? (currentLang === 'EN' ? '❌ Out of Stock (0 pcs)' : '❌ สินค้าหมด (0 ชิ้น)') : `<i class="fa-solid fa-boxes-stacked"></i> ${item.current_stock}/${item.stock_capacity} ${currentLang === 'EN' ? 'pcs' : 'ชิ้น'}`}
            </span>
          </div>

          <div class="catalog-desc-wrapper" id="cat-desc-wrap-${item.product_code}">
            <button type="button" class="btn-cat-read-more" data-sku="${item.product_code}">
              <span>${currentLang === 'EN' ? 'Details' : 'อ่านเพิ่มเติม'}</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="cat-desc-dropdown-menu">
              <div class="cat-desc-dropdown-primary">${escapeHtml(primaryDesc)}</div>
              <div class="cat-desc-dropdown-secondary">${escapeHtml(secondaryDesc)}</div>
            </div>
          </div>
        </div>
      `;

      bulletinGrid.appendChild(card);
    });

    bulletinGrid.querySelectorAll('.btn-cat-read-more').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const sku = btn.getAttribute('data-sku');
        const wrap = document.getElementById(`cat-desc-wrap-${sku}`);
        const isCurrentlyActive = wrap?.classList.contains('active');
        
        document.querySelectorAll('.catalog-desc-wrapper.active').forEach(w => {
          if (w !== wrap) w.classList.remove('active');
        });
        
        if (wrap) {
          wrap.classList.toggle('active', !isCurrentlyActive);
        }
      });
    });
  }

  function renderListTableRows(items) {
    if (!promotionsTbody) return;
    promotionsTbody.innerHTML = '';

    // Update Sort Indicators in Header
    document.querySelectorAll('.sortable-table th[data-sort]').forEach(th => {
      const col = th.getAttribute('data-sort');
      const iconSpan = th.querySelector('.sort-icon');
      if (iconSpan) {
        if (col === dbSortColumn) {
          iconSpan.textContent = dbSortAscending ? '▲' : '▼';
          th.classList.add('sorted-active');
        } else {
          iconSpan.textContent = '↕';
          th.classList.remove('sorted-active');
        }
      }
    });

    if (items.length === 0) {
      promotionsTbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 30px; color: #64748b;">
            <i class="fa-solid fa-magnifying-glass" style="font-size: 24px; color: #94a3b8; margin-bottom: 8px;"></i>
            <div>${currentLang === 'EN' ? 'No product items match search / filter criteria' : 'ไม่พบรายการสินค้าตรงตามเงื่อนไขค้นหา/ตัวกรอง'}</div>
          </td>
        </tr>
      `;
      return;
    }

    items.forEach(item => {
      const tr = document.createElement('tr');
      const isOutOfStock = item.current_stock === 0;
      const isLowStock = !isOutOfStock && (item.current_stock / item.stock_capacity < 0.20);

      let productStatusBadge = '';
      if (isOutOfStock) {
        productStatusBadge = `<span style="color: #ef4444; font-weight: 800; background: #fee2e2; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? '❌ OUT OF STOCK (0)' : '❌ หมดสต็อก (0)'}</span>`;
      } else if (isLowStock) {
        productStatusBadge = `<span style="color: #d97706; font-weight: 800; background: #fef3c7; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? `⚠️ Low Stock (${item.current_stock}/${item.stock_capacity})` : `⚠️ ใกล้หมด (${item.current_stock}/${item.stock_capacity})`}</span>`;
      } else {
        productStatusBadge = `<span style="color: #005D3B; font-weight: 800; background: #E6F4EF; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? `✅ In Stock (${item.current_stock}/${item.stock_capacity})` : `✅ มีสินค้า (${item.current_stock}/${item.stock_capacity})`}</span>`;
      }

      const primaryName = currentLang === 'EN' ? item.name_en : item.name_th;
      const secondaryName = currentLang === 'EN' ? item.name_th : item.name_en;
      const displayName = `<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><strong>${escapeHtml(primaryName)}</strong></div><div style="font-size: 11px; color: #64748b; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(secondaryName)}</div>`;

      const primaryDesc = currentLang === 'EN' ? item.description_en : item.description_th;
      const secondaryDesc = currentLang === 'EN' ? item.description_th : item.description_en;

      const displayDesc = `
        <div class="promo-desc-wrapper" id="desc-wrap-${item.product_code}">
          <div class="promo-desc-collapsed">
            <div style="font-weight: 700; color: var(--711-text-main); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%;">${escapeHtml(primaryDesc)}</div>
            <div style="font-size: 11px; color: #64748b; margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%;">${escapeHtml(secondaryDesc)}</div>
          </div>
          <button type="button" class="btn-read-more" data-sku="${item.product_code}">
            <span>${currentLang === 'EN' ? 'Read All' : 'อ่านเพิ่มเติม'}</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      `;

      const isRegularCategory = !item.promo_category || item.promo_category === 'Regular Price' || item.promo_category === 'สินค้าราคาปกติ';

      const promoCategoryTag = isRegularCategory
        ? `<span style="font-size: 11px; font-weight: bold; color: #475569; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 3px 8px; border-radius: 12px; white-space: nowrap;">${escapeHtml(getPromoCategoryLabel(item.promo_category))}</span>`
        : `<span style="font-size: 11px; font-weight: bold; color: var(--711-orange); background: var(--711-orange-light); padding: 3px 8px; border-radius: 12px; white-space: nowrap;">${escapeHtml(getPromoCategoryLabel(item.promo_category))}</span>`;

      tr.innerHTML = `
        <td><strong style="color: var(--711-green);">${item.product_code}</strong></td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <img src="${item.image}" class="table-img" alt="${escapeHtml(primaryName)}" />
            <div>${displayName}</div>
          </div>
        </td>
        <td><span class="table-category-tag">${escapeHtml(getCategoryLabel(item.category))}</span></td>
        <td>${promoCategoryTag}</td>
        <td>${productStatusBadge}</td>
        <td><strong>฿${item.price.toFixed(2)}</strong></td>
        <td style="font-size: 12px;">${displayDesc}</td>
      `;
      promotionsTbody.appendChild(tr);
    });

    document.querySelectorAll('.btn-read-more').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sku = btn.getAttribute('data-sku');
        const wrapper = document.getElementById(`desc-wrap-${sku}`);
        const tr = btn.closest('tr');
        const labelSpan = btn.querySelector('span');

        if (wrapper) {
          const isExpanded = wrapper.classList.toggle('expanded');
          if (tr) {
            tr.classList.toggle('row-expanded', isExpanded);
          }
          if (labelSpan) {
            labelSpan.textContent = isExpanded 
              ? (currentLang === 'EN' ? 'Show Less' : 'ย่อข้อความ')
              : (currentLang === 'EN' ? 'Read All' : 'อ่านเพิ่มเติม');
          }
        }
      });
    });

    document.querySelectorAll('.stock-slider').forEach(slider => {
      slider.addEventListener('input', (e) => {
        const sku = e.target.getAttribute('data-sku');
        const val = e.target.value;
        window.ragEngine.updateStock(sku, val);
        renderUnifiedProductsView();
        updateHeaderStats();
      });
    });
  }

  function updateHeaderStats() {
    const totalItems = window.ragEngine.db.length;
    const inStockItems = window.ragEngine.db.filter(i => i.current_stock > 0).length;
    const outOfStockItems = window.ragEngine.db.filter(i => i.current_stock === 0).length;
    const promoItems = window.ragEngine.db.filter(i => i.has_promo).length;
    const regularItems = window.ragEngine.db.filter(i => !i.has_promo).length;

    const statRegularCount = document.getElementById('stat-regular-count');

    if (statSkuCount) statSkuCount.textContent = totalItems;
    if (statInStockCount) statInStockCount.textContent = inStockItems;
    if (statOutOfStockCount) statOutOfStockCount.textContent = outOfStockItems;
    if (statPromoCount) statPromoCount.textContent = promoItems;
    if (statRegularCount) statRegularCount.textContent = regularItems;
  }

  openAddModalBtn?.addEventListener('click', () => addModal?.classList.add('active'));
  closeModalBtn?.addEventListener('click', () => addModal?.classList.remove('active'));

  addProductForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newSku = document.getElementById('add-sku').value.trim();
    const newNameTh = document.getElementById('add-name-th').value.trim();
    const newNameEn = document.getElementById('add-name-en').value.trim();
    const newCat = document.getElementById('add-category').value;
    const newPromoCat = document.getElementById('add-promocat').value;
    const newPrice = document.getElementById('add-price').value;
    const newStock = document.getElementById('add-stock').value;
    const newCap = document.getElementById('add-capacity').value;
    const newDescTh = document.getElementById('add-desc-th').value.trim();
    const newDescEn = document.getElementById('add-desc-en').value.trim();

    window.ragEngine.addProduct({
      product_code: newSku,
      name_th: newNameTh,
      name_en: newNameEn,
      category: newCat,
      promo_category: newPromoCat,
      price: newPrice,
      current_stock: newStock,
      stock_capacity: newCap,
      description_th: newDescTh,
      description_en: newDescEn
    });

    addModal.classList.remove('active');
    addProductForm.reset();

    renderUnifiedProductsView();
    updateHeaderStats();
  });

  function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  function formatMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^[ ]{2,}/gm, (m) => '&nbsp;'.repeat(m.length * 2))
      .replace(/\n/g, '<br/>');
  }

  // --- Low Stock Reorder Checklist View Controller ---
  const viewProducts = document.getElementById('view-products');
  const viewReorder = document.getElementById('view-reorder');
  const btnOpenReorder = document.getElementById('btn-open-reorder');
  const btnBackToCatalog = document.getElementById('btn-back-to-catalog');
  const reorderTbody = document.getElementById('reorder-tbody');
  const checkAllReorder = document.getElementById('check-all-reorder');
  const checkLowstockReorder = document.getElementById('check-lowstock-reorder');
  const reorderSelectedCount = document.getElementById('reorder-selected-count');
  const reorderTotalQty = document.getElementById('reorder-total-qty');
  const btnSubmitReorder = document.getElementById('btn-submit-reorder');
  const btnTopSubmitReorder = document.getElementById('btn-top-submit-reorder');

  let reorderSortColumn = 'stock';
  let reorderSortAscending = true;

  function renderReorderChecklist() {
    if (!reorderTbody) return;
    reorderTbody.innerHTML = '';

    const isOnlyLowStockFilter = checkLowstockReorder ? checkLowstockReorder.checked : false;



    // Include items based on current status filter AND low stock checkbox filter
    let lowStockItems = window.ragEngine.db.filter(item => {
      if (autoSelectedSkus && autoSelectedSkus.has(item.product_code)) {
        return true;
      }

      let matchStatus = true;
      if (currentStatusFilter === 'IN_STOCK') matchStatus = item.current_stock > 0;
      else if (currentStatusFilter === 'OUT_OF_STOCK') matchStatus = item.current_stock === 0;
      else if (currentStatusFilter === 'PROMO') matchStatus = item.has_promo;
      else if (currentStatusFilter === 'REGULAR') matchStatus = !item.has_promo;

      if (!matchStatus) return false;

      if (isOnlyLowStockFilter) {
        return item.current_stock === 0 || (item.current_stock / item.stock_capacity < 0.20);
      }
      return true;
    });

    // Reorder Table Sorting
    lowStockItems.sort((a, b) => {
      let valA, valB;
      if (reorderSortColumn === 'select' || reorderSortColumn === 'checked') {
        valA = autoSelectedSkus.has(a.product_code) || (isOnlyLowStockFilter && (a.current_stock === 0 || (a.current_stock / a.stock_capacity) < 0.20)) ? 1 : 0;
        valB = autoSelectedSkus.has(b.product_code) || (isOnlyLowStockFilter && (b.current_stock === 0 || (b.current_stock / b.stock_capacity) < 0.20)) ? 1 : 0;
      } else if (reorderSortColumn === 'sku') {
        valA = parseInt(a.product_code.replace(/\D/g, ''), 10);
        valB = parseInt(b.product_code.replace(/\D/g, ''), 10);
      } else if (reorderSortColumn === 'name') {
        valA = currentLang === 'EN' ? a.name_en : a.name_th;
        valB = currentLang === 'EN' ? b.name_en : b.name_th;
      } else if (reorderSortColumn === 'category') {
        valA = a.category;
        valB = b.category;
      } else if (reorderSortColumn === 'promo') {
        valA = a.has_promo ? 1 : 0;
        valB = b.has_promo ? 1 : 0;
      } else if (reorderSortColumn === 'promocat') {
        valA = a.promo_category || '';
        valB = b.promo_category || '';
      } else if (reorderSortColumn === 'stock') {
        valA = a.stock_capacity > 0 ? (a.current_stock / a.stock_capacity) : 0;
        valB = b.stock_capacity > 0 ? (b.current_stock / b.stock_capacity) : 0;
      } else if (reorderSortColumn === 'price') {
        valA = a.price;
        valB = b.price;
      } else if (reorderSortColumn === 'qty') {
        valA = a.stock_capacity;
        valB = b.stock_capacity;
      } else {
        valA = a.id;
        valB = b.id;
      }

      if (valA < valB) return reorderSortAscending ? -1 : 1;
      if (valA > valB) return reorderSortAscending ? 1 : -1;
      
      // Secondary fallback sort by SKU code integer
      const skuA = parseInt(a.product_code.replace(/\D/g, ''), 10);
      const skuB = parseInt(b.product_code.replace(/\D/g, ''), 10);
      return skuA - skuB;
    });

    // Update Reorder Sort Header Icons
    document.querySelectorAll('#reorder-table th[data-sort]').forEach(th => {
      const col = th.getAttribute('data-sort');
      const iconSpan = th.querySelector('.reorder-sort-icon');
      if (iconSpan) {
        if (col === reorderSortColumn) {
          iconSpan.textContent = reorderSortAscending ? '▲' : '▼';
          th.classList.add('sorted-active');
        } else {
          iconSpan.textContent = '↕';
          th.classList.remove('sorted-active');
        }
      }
    });

    if (lowStockItems.length === 0) {
      if (isOnlyLowStockFilter) {
        reorderTbody.innerHTML = `
          <tr>
            <td colspan="8" style="text-align: center; padding: 48px 24px; background: #ffffff;">
              <div style="width: 64px; height: 64px; background: #E6F4EF; color: #005D3B; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 16px auto;">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <h3 style="font-size: 18px; font-weight: 800; color: #005D3B; margin: 0 0 6px 0;">ไม่พบสินค้าหมดหรือใกล้หมดในขณะนี้</h3>
              <p style="font-size: 13.5px; color: #64748b; margin: 0 0 16px 0;">ขณะนี้สินค้าทุกรายการในคลังสินค้ามีระดับสต็อกพร้อมจำหน่ายเกิน 20% สมบูรณ์ 100%!</p>
              <button type="button" id="btn-reset-reorder-filter" style="background: #005D3B; color: #ffffff; padding: 8px 20px; border-radius: 20px; font-weight: 800; font-size: 13px; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-boxes-stacked"></i> แสดงสินค้าทั้งหมดทุกรายการ
              </button>
            </td>
          </tr>
        `;
        document.getElementById('btn-reset-reorder-filter')?.addEventListener('click', () => {
          if (checkLowstockReorder) {
            checkLowstockReorder.checked = false;
            renderReorderChecklist();
          }
        });
      } else {
        reorderTbody.innerHTML = `
          <tr>
            <td colspan="8" style="text-align: center; padding: 40px; color: #64748b;">
              <i class="fa-solid fa-circle-check" style="font-size: 32px; color: #10b981; margin-bottom: 10px;"></i>
              <div style="font-size: 14px; font-weight: bold;">${currentLang === 'EN' ? 'No items found matching filter criteria' : 'ไม่พบสินค้าตามเงื่อนไขที่เลือก'}</div>
            </td>
          </tr>
        `;
      }
      updateReorderSummary();
      return;
    }

    lowStockItems.forEach(item => {
      const tr = document.createElement('tr');
      const isOutOfStock = item.current_stock === 0;
      const isLowStock = isOutOfStock || (item.current_stock / item.stock_capacity < 0.20);
      const primaryName = currentLang === 'EN' ? item.name_en : item.name_th;
      const secondaryName = currentLang === 'EN' ? item.name_th : item.name_en;

      // Auto check low-stock items when filter is active OR if pre-selected via Deep Link
      const isChecked = (isOnlyLowStockFilter || autoSelectedSkus.has(item.product_code)) ? true : false;

      // Default order quantity calculated from max - actual (stock_capacity - current_stock)
      const defaultOrderQty = Math.max(1, item.stock_capacity - item.current_stock);

      const isRegularCategory = !item.promo_category || item.promo_category === 'Regular Price' || item.promo_category === 'สินค้าราคาปกติ';

      const promoCategoryTag = isRegularCategory
        ? `<span style="font-size: 11px; font-weight: bold; color: #475569; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 3px 8px; border-radius: 12px; white-space: nowrap;">${escapeHtml(getPromoCategoryLabel(item.promo_category))}</span>`
        : `<span style="font-size: 11px; font-weight: bold; color: var(--711-orange); background: var(--711-orange-light); padding: 3px 8px; border-radius: 12px; white-space: nowrap;">${escapeHtml(getPromoCategoryLabel(item.promo_category))}</span>`;

      let productStatusBadge = '';
      if (isOutOfStock) {
        productStatusBadge = `<span style="color: #ef4444; font-weight: 800; background: #fee2e2; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? '❌ OUT OF STOCK (0)' : '❌ หมดสต็อก (0)'}</span>`;
      } else if (isLowStock) {
        productStatusBadge = `<span style="color: #d97706; font-weight: 800; background: #fef3c7; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? `⚠️ Low Stock (${item.current_stock}/${item.stock_capacity})` : `⚠️ ใกล้หมด (${item.current_stock}/${item.stock_capacity})`}</span>`;
      } else {
        productStatusBadge = `<span style="color: #005D3B; font-weight: 800; background: #E6F4EF; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? `✅ In Stock (${item.current_stock}/${item.stock_capacity})` : `✅ มีสินค้า (${item.current_stock}/${item.stock_capacity})`}</span>`;
      }

      tr.innerHTML = `
        <td style="text-align: center;">
          <input type="checkbox" class="reorder-item-check" data-sku="${item.product_code}" ${isChecked ? 'checked' : ''} style="width: 16px; height: 16px; accent-color: #005D3B; cursor: pointer;" />
        </td>
        <td><strong style="color: var(--711-green);">${item.product_code}</strong></td>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${item.image}" class="table-img" alt="${escapeHtml(primaryName)}" />
            <div>
              <div style="font-weight: 800;">${escapeHtml(primaryName)}</div>
              <div style="font-size: 11px; color: #64748b;">${escapeHtml(secondaryName)}</div>
            </div>
          </div>
        </td>
        <td><span class="table-category-tag">${escapeHtml(getCategoryLabel(item.category))}</span></td>
        <td>${promoCategoryTag}</td>
        <td>${productStatusBadge}</td>
        <td><strong>฿${item.price.toFixed(2)}</strong></td>
        <td style="text-align: center;">
          <div class="qty-stepper">
            <button type="button" class="qty-stepper-btn qty-minus" data-sku="${item.product_code}">-</button>
            <input type="number" class="qty-stepper-input reorder-qty-input" data-sku="${item.product_code}" min="1" max="${item.stock_capacity * 2}" value="${defaultOrderQty}" />
            <button type="button" class="qty-stepper-btn qty-plus" data-sku="${item.product_code}">+</button>
          </div>
        </td>
      `;

      reorderTbody.appendChild(tr);
    });

    document.querySelectorAll('.reorder-item-check').forEach(chk => {
      chk.addEventListener('change', () => {
        const sku = chk.getAttribute('data-sku');
        if (chk.checked) {
          autoSelectedSkus.add(sku);
        } else {
          autoSelectedSkus.delete(sku);
        }
        updateReorderSummary();
      });
    });

    document.querySelectorAll('.reorder-qty-input').forEach(inp => {
      inp.addEventListener('input', updateReorderSummary);
    });

    document.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sku = btn.getAttribute('data-sku');
        const inp = document.querySelector(`.reorder-qty-input[data-sku="${sku}"]`);
        if (inp) {
          let val = parseInt(inp.value, 10) || 1;
          if (val > 1) {
            inp.value = val - 1;
            updateReorderSummary();
          }
        }
      });
    });

    document.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sku = btn.getAttribute('data-sku');
        const inp = document.querySelector(`.reorder-qty-input[data-sku="${sku}"]`);
        if (inp) {
          let val = parseInt(inp.value, 10) || 0;
          inp.value = val + 1;
          updateReorderSummary();
        }
      });
    });

    updateReorderSummary();
  }

  function openReorderSheetWithSkus(skuArray) {
    if (!skuArray || skuArray.length === 0) return;

    autoSelectedSkus = new Set(skuArray);

    currentStatusFilter = 'ALL';
    syncQuickFilterPills('ALL');

    if (checkLowstockReorder) {
      checkLowstockReorder.checked = false;
    }

    // Switch main view to Reorder Sheet & update top header navigation
    openReorderView();

    setTimeout(() => {
      skuArray.forEach(sku => {
        const chk = document.querySelector(`.reorder-item-check[data-sku="${sku}"]`);
        if (chk) {
          chk.checked = true;
          const tr = chk.closest('tr');
          if (tr) {
            tr.style.backgroundColor = '#dcfce7';
            tr.style.transition = 'background-color 0.4s ease';
            setTimeout(() => {
              tr.style.backgroundColor = '';
            }, 3500);
          }
        }
      });

      updateReorderSummary();

      const reorderCard = document.querySelector('.reorder-card');
      if (reorderCard) {
        reorderCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-ai-deeplink-reorder');
    if (btn) {
      const skusAttr = btn.getAttribute('data-skus');
      if (skusAttr) {
        const skuArray = skusAttr.split(',').map(s => s.trim()).filter(Boolean);
        openReorderSheetWithSkus(skuArray);
      }
    }
  });

  function updateReorderSummary() {
    let selectedCount = 0;
    let totalQty = 0;
    let lowStockTotal = 0;
    let lowStockChecked = 0;

    const rows = document.querySelectorAll('#reorder-tbody tr');
    rows.forEach(tr => {
      const chk = tr.querySelector('.reorder-item-check');
      const qtyInp = tr.querySelector('.reorder-qty-input');

      if (chk) {
        const sku = chk.getAttribute('data-sku');
        const item = window.ragEngine.db.find(i => i.product_code === sku);
        const isLowStock = item && (item.current_stock === 0 || (item.current_stock / item.stock_capacity < 0.20));

        if (isLowStock) {
          lowStockTotal++;
          if (chk.checked) lowStockChecked++;
        }

        if (chk.checked && qtyInp) {
          selectedCount++;
          const qty = parseInt(qtyInp.value, 10) || 0;
          totalQty += qty;
        }
      }
    });

    const reorderSelectedSummary = document.getElementById('reorder-selected-summary');
    const reorderTotalSummary = document.getElementById('reorder-total-summary');

    if (reorderSelectedSummary) {
      if (currentLang === 'EN') {
        reorderSelectedSummary.innerHTML = `Selected Items: <strong id="reorder-selected-count" style="color: ${selectedCount === 0 ? '#ef4444' : '#005D3B'};">${selectedCount}</strong> items`;
      } else {
        reorderSelectedSummary.innerHTML = `จำนวนรายการที่เลือก: <strong id="reorder-selected-count" style="color: ${selectedCount === 0 ? '#ef4444' : '#005D3B'};">${selectedCount}</strong> รายการ`;
      }
    }

    if (reorderTotalSummary) {
      if (currentLang === 'EN') {
        reorderTotalSummary.innerHTML = `Total Order Qty: <strong id="reorder-total-qty" style="color: ${totalQty === 0 ? '#ef4444' : '#005D3B'};">${totalQty}</strong> pcs`;
      } else {
        reorderTotalSummary.innerHTML = `รวมสั่งซื้อทั้งสิ้น: <strong id="reorder-total-qty" style="color: ${totalQty === 0 ? '#ef4444' : '#005D3B'};">${totalQty}</strong> ชิ้น`;
      }
    }

    // Enable / Disable order submit button when no items are checked
    const isDisable = (selectedCount === 0);
    const btnList = [btnTopSubmitReorder, btnSubmitReorder].filter(Boolean);
    btnList.forEach(btn => {
      btn.disabled = isDisable;
      if (isDisable) {
        btn.style.setProperty('background-color', '#cbd5e1', 'important');
        btn.style.setProperty('color', '#94a3b8', 'important');
        btn.style.setProperty('cursor', 'not-allowed', 'important');
        btn.style.setProperty('box-shadow', 'none', 'important');
      } else {
        btn.style.setProperty('background-color', '#005D3B', 'important');
        btn.style.setProperty('color', '#ffffff', 'important');
        btn.style.setProperty('cursor', 'pointer', 'important');
        btn.style.setProperty('box-shadow', '0 2px 4px rgba(0,0,0,0.1)', 'important');
      }
    });

    const allChecks = document.querySelectorAll('.reorder-item-check');
    const checkedChecks = document.querySelectorAll('.reorder-item-check:checked');
    if (checkAllReorder && allChecks.length > 0 && !checkLowstockReorder?.checked) {
      checkAllReorder.checked = (allChecks.length === checkedChecks.length);
    }
  }

  checkLowstockReorder?.addEventListener('change', (e) => {
    if (e.target.checked && checkAllReorder) {
      checkAllReorder.checked = false;
    }
    renderReorderChecklist();
  });

  checkAllReorder?.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      if (checkLowstockReorder) checkLowstockReorder.checked = false;
      renderReorderChecklist();
      document.querySelectorAll('.reorder-item-check').forEach(chk => {
        chk.checked = true;
      });
      updateReorderSummary();
    } else {
      document.querySelectorAll('.reorder-item-check').forEach(chk => {
        chk.checked = false;
      });
      updateReorderSummary();
    }
  });

  document.querySelectorAll('#reorder-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.getAttribute('data-sort');
      if (reorderSortColumn === col) {
        reorderSortAscending = !reorderSortAscending;
      } else {
        reorderSortColumn = col;
        reorderSortAscending = (col === 'select' || col === 'checked') ? false : true;
      }
      renderReorderChecklist();
    });
  });

  btnOpenReorder?.addEventListener('click', () => {
    viewProducts?.classList.remove('active');
    viewReorder?.classList.add('active');
    renderReorderChecklist();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btnBackToCatalog?.addEventListener('click', () => {
    viewReorder?.classList.remove('active');
    viewProducts?.classList.add('active');
    renderUnifiedProductsView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function executeSubmitReorder() {
    const rows = document.querySelectorAll('#reorder-tbody tr');
    let updatedSKUsCount = 0;
    let totalItemsQty = 0;

    rows.forEach(tr => {
      const chk = tr.querySelector('.reorder-item-check');
      const qtyInp = tr.querySelector('.reorder-qty-input');

      if (chk && chk.checked && qtyInp) {
        updatedSKUsCount++;
        const qty = parseInt(qtyInp.value, 10) || 0;
        totalItemsQty += qty;
      }
    });

    if (updatedSKUsCount === 0) {
      alert(currentLang === 'EN' ? 'Please select at least one item to reorder.' : 'กรุณาเลือกอย่างน้อย 1 รายการเพื่อสั่งซื้อเติมสต็อก');
      return;
    }

    // 1. Confirmation Popup Prompt FIRST before ordering
    const confirmMessage = currentLang === 'EN'
      ? `Confirm placing stock order for ${updatedSKUsCount} items (Total: ${totalItemsQty} pcs)?`
      : `คุณต้องการยืนยันการสั่งซื้อสินค้าจำนวน ${updatedSKUsCount} รายการ (รวมสั่งซื้อ ${totalItemsQty} ชิ้น) ใช่หรือไม่?`;

    const userConfirmed = confirm(confirmMessage);
    if (!userConfirmed) return;

    // 2. Execute Stock Reorder Update
    rows.forEach(tr => {
      const chk = tr.querySelector('.reorder-item-check');
      const qtyInp = tr.querySelector('.reorder-qty-input');

      if (chk && chk.checked && qtyInp) {
        const sku = chk.getAttribute('data-sku');
        const qty = parseInt(qtyInp.value, 10) || 0;

        const targetItem = window.ragEngine.db.find(i => i.product_code === sku);
        if (targetItem) {
          targetItem.current_stock += qty;
        }
      }
    });

    // 3. Success Notification & STAY on Reorder View Page
    alert(currentLang === 'EN' 
      ? `Successfully submitted stock reorder for ${updatedSKUsCount} SKUs! Stock levels updated back to maximum.`
      : `ทำการสั่งซื้อสินค้าเติมสต็อกสำเร็จจำนวน ${updatedSKUsCount} รายการเรียบร้อยแล้ว! ระบบได้อัปเดตระดับสต็อกสินค้าให้เต็มตามเดิมแล้วค่ะ`);

    renderReorderChecklist();
    updateHeaderStats();
    if (viewDashboard && viewDashboard.classList.contains('active')) {
      renderDashboard();
    }
  }

  btnTopSubmitReorder?.addEventListener('click', executeSubmitReorder);

  // --- Executive Analytics Dashboard Logic ---
  const navDashboardBtn = document.getElementById('nav-dashboard-btn');
  const btnDashboardBack = document.getElementById('btn-dashboard-back');
  const btnDashToReorder = document.getElementById('btn-dash-to-reorder');
  const viewDashboard = document.getElementById('view-dashboard');

  function renderDashboard() {
    const db = window.ragEngine.db;
    if (!db || db.length === 0) return;

    // 1. KPI Stats
    const totalSKUs = db.length;
    const totalValue = db.reduce((sum, i) => sum + (i.current_stock * i.price), 0);
    const lowStockItems = db.filter(i => i.stock_capacity > 0 && (i.current_stock / i.stock_capacity < 0.20));
    const promoItems = db.filter(i => i.has_promo);
    const promoPct = ((promoItems.length / totalSKUs) * 100).toFixed(1);

    const dashTotalSkus = document.getElementById('dash-total-skus');
    const dashTotalValue = document.getElementById('dash-total-value');
    const dashLowstockCount = document.getElementById('dash-lowstock-count');
    const dashPromoCount = document.getElementById('dash-promo-count');
    const dashPromoPct = document.getElementById('dash-promo-pct');

    if (dashTotalSkus) dashTotalSkus.innerHTML = `${totalSKUs} <span style="font-size: 14px; font-weight: 700; color: #64748b;">SKUs</span>`;
    if (dashTotalValue) dashTotalValue.textContent = `฿${totalValue.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (dashLowstockCount) dashLowstockCount.innerHTML = `${lowStockItems.length} <span style="font-size: 14px; font-weight: 700;">${currentLang === 'EN' ? 'items' : 'รายการ'}</span>`;
    if (dashPromoCount) dashPromoCount.innerHTML = `${promoItems.length} <span style="font-size: 14px; font-weight: 700; color: #64748b;">${currentLang === 'EN' ? 'items' : 'รายการ'}</span>`;
    if (dashPromoPct) dashPromoPct.innerHTML = `<i class="fa-solid fa-bullhorn"></i> ${currentLang === 'EN' ? `Accounted for ${promoPct}% of total SKUs` : `คิดเป็น ${promoPct}% ของสินค้าทั้งหมด`}`;

    const dashTotalSkusSub = document.getElementById('dash-total-skus-sub');
    const dashCapacityPct = document.getElementById('dash-capacity-pct');
    const dashCriticalSub = document.getElementById('dash-critical-sub');
    const dashCatCountBadge = document.getElementById('dash-cat-count-badge');

    if (dashTotalSkusSub) dashTotalSkusSub.innerHTML = currentLang === 'EN' ? '<i class="fa-solid fa-check-circle"></i> Covering 10 main categories' : '<i class="fa-solid fa-check-circle"></i> ครอบคลุม 10 หมวดหลัก';
    if (dashCapacityPct) dashCapacityPct.innerHTML = currentLang === 'EN' ? '<i class="fa-solid fa-chart-simple"></i> Calculated from retail selling prices' : '<i class="fa-solid fa-chart-simple"></i> คำนวณจากราคาขายปัจจุบัน';
    if (dashCriticalSub) dashCriticalSub.innerHTML = currentLang === 'EN' ? '<i class="fa-solid fa-triangle-exclamation"></i> Immediate stock refill required' : '<i class="fa-solid fa-triangle-exclamation"></i> ต้องการการเติมสต็อกด่วน';
    if (dashCatCountBadge) dashCatCountBadge.textContent = currentLang === 'EN' ? '10 Categories' : '10 หมวด';

    // 2. Category Breakdown
    const catMap = {};
    db.forEach(i => {
      catMap[i.category] = (catMap[i.category] || 0) + 1;
    });

    const catContainer = document.getElementById('dash-category-breakdown');
    if (catContainer) {
      catContainer.innerHTML = '';
      if (dashChartMode === 'PIE') {
        renderPieChartUI(catContainer, 'canvas-cat-pie', 'legend-cat-pie', catMap, totalSKUs);
      } else {
        const sortedCats = Object.entries(catMap).sort((a, b) => b[1] - a[1]);
        const colors = ['#005D3B', '#f58220', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b', '#6366f1', '#10b981', '#64748b'];

        sortedCats.forEach(([catName, count], idx) => {
          const pct = ((count / totalSKUs) * 100).toFixed(1);
          const barColor = colors[idx % colors.length];

          const row = document.createElement('div');
          row.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; margin-bottom: 4px; color: var(--711-text-main);">
              <span>${getCategoryLabel(catName)}</span>
              <span>${count} SKUs (${pct}%)</span>
            </div>
            <div style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
              <div style="width: ${pct}%; height: 100%; background: ${barColor}; border-radius: 4px; transition: width 0.4s ease;"></div>
            </div>
          `;
          catContainer.appendChild(row);
        });
      }
    }

    // 3. Promo Category Breakdown
    const promoCatMap = {};
    db.forEach(i => {
      const pCat = i.promo_category || 'Regular Price';
      promoCatMap[pCat] = (promoCatMap[pCat] || 0) + 1;
    });

    const promoCatContainer = document.getElementById('dash-promocat-breakdown');
    if (promoCatContainer) {
      promoCatContainer.innerHTML = '';
      if (dashChartMode === 'PIE') {
        renderPieChartUI(promoCatContainer, 'canvas-promo-pie', 'legend-promo-pie', promoCatMap, totalSKUs);
      } else {
        const sortedPromoCats = Object.entries(promoCatMap).sort((a, b) => b[1] - a[1]);
        const colors = ['#f58220', '#005D3B', '#ef4444', '#8b5cf6', '#3b82f6', '#64748b'];

        sortedPromoCats.forEach(([pCatName, count], idx) => {
          const pct = ((count / totalSKUs) * 100).toFixed(1);
          const barColor = colors[idx % colors.length];

          const row = document.createElement('div');
          row.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; margin-bottom: 4px; color: var(--711-text-main);">
              <span>${getPromoCategoryLabel(pCatName)}</span>
              <span>${count} SKUs (${pct}%)</span>
            </div>
            <div style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
              <div style="width: ${pct}%; height: 100%; background: ${barColor}; border-radius: 4px; transition: width 0.4s ease;"></div>
            </div>
          `;
          promoCatContainer.appendChild(row);
        });
      }
    }

    // 4. Critical Stock Table
    const criticalTbody = document.getElementById('dash-critical-stock-tbody');
    if (criticalTbody) {
      criticalTbody.innerHTML = '';

      const criticalItems = [...lowStockItems].sort((a, b) => {
        const ratioA = a.stock_capacity > 0 ? (a.current_stock / a.stock_capacity) : 0;
        const ratioB = b.stock_capacity > 0 ? (b.current_stock / b.stock_capacity) : 0;
        return ratioA - ratioB;
      });

      if (criticalItems.length === 0) {
        criticalTbody.innerHTML = `
          <tr>
            <td colspan="6" style="text-align: center; padding: 24px; color: #005D3B; font-weight: 700;">
              ${currentLang === 'EN' ? '🎉 No out-of-stock or critical low-stock items. All inventory stock is 100% full!' : '🎉 ไม่มีสินค้าที่สต็อกหมดหรือใกล้หมด ทุกรายการสต็อกสมบูรณ์!'}
            </td>
          </tr>
        `;
      } else {
        criticalItems.forEach(item => {
          const isOutOfStock = item.current_stock === 0;
          const isLowStock = !isOutOfStock && (item.current_stock / item.stock_capacity < 0.20);

          let statusBadge = '';
          if (isOutOfStock) {
            statusBadge = `<span style="color: #ef4444; font-weight: 800; background: #fee2e2; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? '❌ OUT OF STOCK (0)' : '❌ หมดสต็อก (0)'}</span>`;
          } else if (isLowStock) {
            statusBadge = `<span style="color: #d97706; font-weight: 800; background: #fef3c7; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? `⚠️ Low Stock (${item.current_stock}/${item.stock_capacity})` : `⚠️ ใกล้หมด (${item.current_stock}/${item.stock_capacity})`}</span>`;
          } else {
            statusBadge = `<span style="color: #005D3B; font-weight: 800; background: #E6F4EF; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; display: inline-block; white-space: nowrap;">${currentLang === 'EN' ? `✅ In Stock (${item.current_stock}/${item.stock_capacity})` : `✅ มีสินค้า (${item.current_stock}/${item.stock_capacity})`}</span>`;
          }

          const isRegularCategory = !item.promo_category || item.promo_category === 'Regular Price' || item.promo_category === 'สินค้าราคาปกติ';

          const promoCategoryTag = isRegularCategory
            ? `<span style="font-size: 11px; font-weight: bold; color: #475569; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 3px 8px; border-radius: 12px; white-space: nowrap;">${escapeHtml(getPromoCategoryLabel(item.promo_category))}</span>`
            : `<span style="font-size: 11px; font-weight: bold; color: var(--711-orange); background: var(--711-orange-light); padding: 3px 8px; border-radius: 12px; white-space: nowrap;">${escapeHtml(getPromoCategoryLabel(item.promo_category))}</span>`;

          const primaryName = currentLang === 'EN' ? item.name_en : item.name_th;
          const secondaryName = currentLang === 'EN' ? item.name_th : item.name_en;

          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong style="color: var(--711-green);">${item.product_code}</strong></td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px;">
                <img src="${item.image}" class="table-img" alt="${escapeHtml(primaryName)}" />
                <div>
                  <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><strong>${escapeHtml(primaryName)}</strong></div>
                  <div style="font-size: 11px; color: #64748b; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(secondaryName)}</div>
                </div>
              </div>
            </td>
            <td><span class="table-category-tag">${escapeHtml(getCategoryLabel(item.category))}</span></td>
            <td>${promoCategoryTag}</td>
            <td style="white-space: nowrap;">${statusBadge}</td>
            <td><strong>฿${item.price.toFixed(2)}</strong></td>
          `;
          criticalTbody.appendChild(tr);
        });
      }
    }
  }

  // Navigation Triggers & Top Header Transformation (For Dashboard & Reorder Views)
  const hdrDashboardBackBtn = document.getElementById('hdr-dashboard-back-btn');
  const hdrLogoArea = document.getElementById('hdr-logo-area');
  const hdrDashboardTitleArea = document.getElementById('hdr-dashboard-title-area');
  const hdrReorderTitleArea = document.getElementById('hdr-reorder-title-area');
  function openDashboardView() {
    viewProducts?.classList.remove('active');
    viewReorder?.classList.remove('active');
    viewDashboard?.classList.add('active');
    navDashboardBtn?.classList.add('active');
    btnOpenReorder?.classList.remove('active');

    // Transform Top Header: Replace 7-Eleven logo with Dashboard Title & show far-left Back Button
    if (hdrDashboardBackBtn) hdrDashboardBackBtn.style.display = 'inline-flex';
    if (hdrLogoArea) hdrLogoArea.style.display = 'none';
    if (hdrDashboardTitleArea) hdrDashboardTitleArea.style.display = 'flex';
    if (hdrReorderTitleArea) hdrReorderTitleArea.style.display = 'none';

    renderDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openReorderView() {
    viewProducts?.classList.remove('active');
    viewDashboard?.classList.remove('active');
    viewReorder?.classList.add('active');
    navDashboardBtn?.classList.remove('active');
    btnOpenReorder?.classList.add('active');

    // Transform Top Header: Replace 7-Eleven logo with Reorder Title & show far-left Back Button
    if (hdrDashboardBackBtn) hdrDashboardBackBtn.style.display = 'inline-flex';
    if (hdrLogoArea) hdrLogoArea.style.display = 'none';
    if (hdrDashboardTitleArea) hdrDashboardTitleArea.style.display = 'none';
    if (hdrReorderTitleArea) hdrReorderTitleArea.style.display = 'flex';

    renderReorderChecklist();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeAllSubViews() {
    viewDashboard?.classList.remove('active');
    viewReorder?.classList.remove('active');
    viewProducts?.classList.add('active');
    navDashboardBtn?.classList.remove('active');
    btnOpenReorder?.classList.remove('active');

    // Restore Top Header: Show 7-Eleven logo
    if (hdrDashboardBackBtn) hdrDashboardBackBtn.style.display = 'none';
    if (hdrLogoArea) hdrLogoArea.style.display = 'flex';
    if (hdrDashboardTitleArea) hdrDashboardTitleArea.style.display = 'none';
    if (hdrReorderTitleArea) hdrReorderTitleArea.style.display = 'none';

    renderUnifiedProductsView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navDashboardBtn?.addEventListener('click', openDashboardView);
  hdrDashboardBackBtn?.addEventListener('click', closeAllSubViews);

  btnOpenReorder?.addEventListener('click', openReorderView);

  const btnDashCriticalReorder = document.getElementById('btn-dash-critical-reorder');
  btnDashCriticalReorder?.addEventListener('click', () => {
    openReorderView();
    setTimeout(() => {
      if (checkLowstockReorder) {
        checkLowstockReorder.checked = true;
        checkLowstockReorder.dispatchEvent(new Event('change'));
      }
    }, 50);
  });

  btnBackToCatalog?.addEventListener('click', closeAllSubViews);

  // --- Dashboard Chart Mode & Pie Chart Rendering Engine ---
  let dashChartMode = 'BARS'; // 'BARS' or 'PIE'

  const btnChartBars = document.getElementById('btn-chart-bars');
  const btnChartPie = document.getElementById('btn-chart-pie');

  btnChartBars?.addEventListener('click', () => {
    dashChartMode = 'BARS';
    btnChartBars.classList.add('active');
    btnChartPie?.classList.remove('active');
    renderDashboard();
  });

  btnChartPie?.addEventListener('click', () => {
    dashChartMode = 'PIE';
    btnChartPie.classList.add('active');
    btnChartBars?.classList.remove('active');
    renderDashboard();
  });

  function renderPieChartUI(container, canvasId, legendId, dataMap, totalCount) {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%;">
        <div style="position: relative; width: 200px; height: 200px; display: flex; align-items: center; justify-content: center;">
          <canvas id="${canvasId}" style="width: 200px; height: 200px;"></canvas>
        </div>
        <div id="${legendId}" style="width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 6px; max-height: 200px; overflow-y: auto; padding-right: 4px;"></div>
      </div>
    `;

    setTimeout(() => {
      drawPieCanvas(canvasId, legendId, dataMap, totalCount);
    }, 20);
  }

  function drawPieCanvas(canvasId, legendId, dataMap, totalCount) {
    const canvas = document.getElementById(canvasId);
    const legendContainer = document.getElementById(legendId);
    if (!canvas || !legendContainer) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const width = 200;
    const height = 200;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const outerRadius = Math.min(centerX, centerY) - 6;
    const innerRadius = outerRadius * 0.54;

    const colors = [
      '#005D3B', '#f58220', '#3b82f6', '#8b5cf6', '#ec4899',
      '#14b8a6', '#f59e0b', '#6366f1', '#10b981', '#ef4444', '#64748b'
    ];

    const entries = Object.entries(dataMap).sort((a, b) => b[1] - a[1]);
    let startAngle = -Math.PI / 2;

    legendContainer.innerHTML = '';

    entries.forEach(([key, count], idx) => {
      const sliceAngle = (count / totalCount) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;
      const color = colors[idx % colors.length];
      const pct = ((count / totalCount) * 100).toFixed(1);

      // Slice
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      startAngle = endAngle;

      // Legend Item
      const item = document.createElement('div');
      item.style.cssText = `
        display: flex; align-items: center; justify-content: space-between;
        font-size: 11px; font-weight: 700; padding: 4px 6px; border-radius: 6px;
        background: #f8fafc; border: 1px solid #e2e8f0;
      `;
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 6px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${color}; flex-shrink: 0;"></span>
          <span style="overflow: hidden; text-overflow: ellipsis;" title="${key}">${key}</span>
        </div>
        <span style="color: #64748b; font-size: 10.5px; margin-left: 6px; flex-shrink: 0;">${count} (${pct}%)</span>
      `;
      legendContainer.appendChild(item);
    });

    // Center Donut text
    ctx.fillStyle = '#1e293b';
    ctx.font = '900 22px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(totalCount, centerX, centerY - 6);

    ctx.fillStyle = '#64748b';
    ctx.font = '700 11px Inter, sans-serif';
    ctx.fillText('SKUs', centerX, centerY + 14);
  }
});
