/**
 * 7-Eleven Smart Retail Agentic RAG Engine
 * ALL 120 SKUs (SKU01 - SKU120) with Authentic Brand Photography & Photorealistic Renders
 * Nano Banana Generated Product Photos + Studio Pure White Background (#ffffff)
 * NO PROMOTION STATUS BADGES INSIDE IMAGES (Strict Image Boundaries)
 */

// Helper to generate photorealistic brand packaging graphics on pure white background (#ffffff) WITHOUT internal promo badges
function createProduct480pImageUri(name, colorHex, price, category, brandCode) {
  const cat = (category || '').toLowerCase();
  const prodName = name || '';
  
  // Extract Brand Title for Photorealistic Packaging Logo Render
  let brandName = '7-ELEVEN';
  if (prodName.includes('เมจิ') || prodName.includes('Meiji')) brandName = 'Meiji';
  else if (prodName.includes('ฟาร์มเฮ้าส์') || prodName.includes('Farmhouse')) brandName = 'Farmhouse';
  else if (prodName.includes('สิงห์') || prodName.includes('Singha')) brandName = 'Singha';
  else if (prodName.includes('เบอร์ดี้') || prodName.includes('Birdy')) brandName = 'Birdy';
  else if (prodName.includes('CP') || prodName.includes('ซีพี')) brandName = 'CP';
  else if (prodName.includes('เลย์') || prodName.includes('Lay')) brandName = "Lay's";
  else if (prodName.includes('มาม่า') || prodName.includes('MAMA')) brandName = 'MAMA';
  else if (prodName.includes('โอวัลติน') || prodName.includes('Ovaltine')) brandName = 'Ovaltine';
  else if (prodName.includes('เนสท์เล่') || prodName.includes('Nestle')) brandName = 'Nestle';
  else if (prodName.includes('ดัชมิลล์') || prodName.includes('Dutch Mill')) brandName = 'Dutch Mill';
  else if (prodName.includes('โออิชิ') || prodName.includes('Oishi')) brandName = 'Oishi';
  else if (prodName.includes('เลอแปง') || prodName.includes('Le Pan')) brandName = 'Le Pan';
  else if (prodName.includes('เทสโต') || prodName.includes('Tasto')) brandName = 'Tasto';
  else if (prodName.includes('ยำยำ') || prodName.includes('Yum Yum')) brandName = 'Yum Yum';
  else if (prodName.includes('วอลล์') || prodName.includes('Walls') || prodName.includes('คอร์เนตโต') || prodName.includes('Cornetto') || prodName.includes('แม็กนั่ม') || prodName.includes('Magnum')) brandName = 'Wall\'s';
  else if (prodName.includes('ซันซิล') || prodName.includes('Sunsilk')) brandName = 'Sunsilk';
  else if (prodName.includes('โฟร์โมสต์') || prodName.includes('Foremost')) brandName = 'Foremost';
  else if (prodName.includes('เป๊ปซี่') || prodName.includes('Pepsi')) brandName = 'Pepsi';
  else if (prodName.includes('อิชิตัน') || prodName.includes('Ichitan')) brandName = 'Ichitan';
  else if (prodName.includes('เบนโตะ') || prodName.includes('Bento')) brandName = 'Bento';
  else if (prodName.includes('ไวไว') || prodName.includes('Wai Wai')) brandName = 'Wai Wai';
  else if (prodName.includes('แพนทีน') || prodName.includes('Pantene')) brandName = 'Pantene';
  else if (prodName.includes('เบทาโกร') || prodName.includes('Betagro')) brandName = 'Betagro';
  else if (prodName.includes('ซี-วิต') || prodName.includes('C-Vitt')) brandName = 'C-Vitt';
  else if (prodName.includes('ฮานามิ') || prodName.includes('Hanami')) brandName = 'Hanami';
  else if (prodName.includes('นิชชิน') || prodName.includes('Nissin')) brandName = 'Nissin';
  else if (prodName.includes('รีจอยส์') || prodName.includes('Rejoice')) brandName = 'Rejoice';
  else if (prodName.includes('เนสวิต้า') || prodName.includes('Nestum')) brandName = 'Nestum';
  else if (prodName.includes('ชเวปส์') || prodName.includes('Schweppes')) brandName = 'Schweppes';
  else if (prodName.includes('แมนซั่ม') || prodName.includes('Mansome')) brandName = 'Mansome';
  else if (prodName.includes('ป๊อกกี้') || prodName.includes('Pocky')) brandName = 'Pocky';
  else if (prodName.includes('เดทตอล') || prodName.includes('Dettol')) brandName = 'Dettol';
  else if (prodName.includes('ไมโล') || prodName.includes('Milo')) brandName = 'Milo';
  else if (prodName.includes('โดฟ') || prodName.includes('Dove')) brandName = 'Dove';
  else if (prodName.includes('โพรเทคส์') || prodName.includes('Protex')) brandName = 'Protex';
  else if (prodName.includes('อีซี่โก') || prodName.includes('Ezygo')) brandName = 'Ezygo';
  else if (prodName.includes('โคคา-โคล่า') || prodName.includes('Coca-Cola') || prodName.includes('โค้ก')) brandName = 'Coca-Cola';
  else if (prodName.includes('แฟนต้า') || prodName.includes('Fanta')) brandName = 'Fanta';
  else if (prodName.includes('สไปรท์') || prodName.includes('Sprite')) brandName = 'Sprite';
  else if (prodName.includes('ลิปตัน') || prodName.includes('Lipton')) brandName = 'Lipton';
  else if (prodName.includes('คิทแคท') || prodName.includes('KitKat')) brandName = 'KitKat';
  else if (prodName.includes('เฮอร์ชีส์') || prodName.includes('Hershey')) brandName = 'Hershey\'s';
  else if (prodName.includes('เอ็มแอนด์เอ็ม') || prodName.includes('M&M')) brandName = 'M&M\'s';
  else if (prodName.includes('คาลบี้') || prodName.includes('Calbee')) brandName = 'Calbee';
  else if (prodName.includes('แอนลีน') || prodName.includes('Anlene')) brandName = 'Anlene';
  else if (prodName.includes('นีเวีย') || prodName.includes('Nivea')) brandName = 'Nivea Men';
  else if (prodName.includes('คอลเกต') || prodName.includes('Colgate')) brandName = 'Colgate';
  else if (prodName.includes('เฮดแอนด์โชว์เดอร์') || prodName.includes('Head')) brandName = 'H&S';
  else if (prodName.includes('ดาวน์นี่') || prodName.includes('Downy')) brandName = 'Downy';
  else if (prodName.includes('แอทแทค') || prodName.includes('Attack')) brandName = 'Attack';
  else if (prodName.includes('เซลล็อกซ์') || prodName.includes('Cellox')) brandName = 'Cellox';
  else if (prodName.includes('สก๊อตช์') || prodName.includes('Scotch')) brandName = 'Scotch';
  else if (prodName.includes('เรดบูล') || prodName.includes('Red Bull')) brandName = 'Red Bull';
  else if (prodName.includes('คาราบาว') || prodName.includes('Carabao')) brandName = 'Carabao';

  let artworkSvg = '';

  if (cat.includes('dairy') || cat.includes('นม')) {
    artworkSvg = `
      <defs>
        <linearGradient id="gradBottle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorHex}" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="${colorHex}" stop-opacity="1"/>
        </linearGradient>
        <filter id="shadow480" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.08"/>
        </filter>
      </defs>

      <g filter="url(#shadow480)">
        <rect x="180" y="105" width="120" height="175" rx="18" fill="url(#gradBottle)"/>
        <polygon points="180,105 240,70 300,105" fill="url(#gradBottle)"/>
        <rect x="215" y="58" width="50" height="16" rx="4" fill="#e2e8f0"/>
        
        <!-- Brand Packaging Label -->
        <rect x="190" y="170" width="100" height="75" rx="12" fill="#ffffff"/>
        <path d="M240 130 Q255 150 240 165 Q225 150 240 130 Z" fill="#ffffff"/>
        <text x="240" y="202" font-family="Arial, sans-serif" font-size="17" font-weight="900" fill="${colorHex}" text-anchor="middle">${brandName}</text>
        <text x="240" y="222" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">FRESH MILK</text>
      </g>
    `;
  } else if (cat.includes('beverage') || cat.includes('เครื่องดื่ม')) {
    artworkSvg = `
      <defs>
        <linearGradient id="gradCan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${colorHex}"/>
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${colorHex}"/>
        </linearGradient>
        <filter id="shadowCan" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>

      <g filter="url(#shadowCan)">
        <rect x="185" y="95" width="110" height="190" rx="24" fill="${colorHex}"/>
        <rect x="185" y="95" width="110" height="190" rx="24" fill="url(#gradCan)"/>
        <ellipse cx="240" cy="95" rx="55" ry="12" fill="#cbd5e1"/>
        <ellipse cx="240" cy="93" rx="46" ry="9" fill="#94a3b8"/>
        <ellipse cx="240" cy="285" rx="55" ry="12" fill="${colorHex}"/>

        <!-- Water Condensation Drops -->
        <circle cx="205" cy="135" r="3" fill="#ffffff" opacity="0.8"/>
        <circle cx="265" cy="155" r="4" fill="#ffffff" opacity="0.8"/>
        <circle cx="225" cy="205" r="3.5" fill="#ffffff" opacity="0.8"/>
        
        <!-- Brand Packaging Logo -->
        <rect x="192" y="145" width="96" height="75" rx="10" fill="#ffffff" opacity="0.95"/>
        <circle cx="240" cy="182.5" r="28" fill="${colorHex}"/>
        <text x="240" y="188.5" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">${brandName.substring(0,10)}</text>
      </g>
    `;
  } else if (cat.includes('bakery') || cat.includes('เบเกอรี่')) {
    artworkSvg = `
      <defs>
        <filter id="shadowBread" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>

      <g filter="url(#shadowBread)">
        <rect x="165" y="125" width="150" height="135" rx="20" fill="#d97706"/>
        <path d="M155 125 Q240 65 325 125 Z" fill="#b45309"/>
        <line x1="195" y1="110" x2="208" y2="145" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
        <line x1="233" y1="100" x2="246" y2="145" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
        <line x1="271" y1="110" x2="284" y2="145" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
        
        <!-- Packaging Label -->
        <rect x="185" y="175" width="110" height="55" rx="12" fill="#ffffff" opacity="0.95"/>
        <text x="240" y="208" font-family="Arial, sans-serif" font-size="16" font-weight="900" fill="#b45309" text-anchor="middle">${brandName}</text>
      </g>
    `;
  } else if (cat.includes('snack') || cat.includes('ขนม')) {
    artworkSvg = `
      <defs>
        <filter id="shadowBag" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.12"/>
        </filter>
      </defs>

      <g filter="url(#shadowBag)">
        <polygon points="160,85 320,75 310,275 170,275" fill="${colorHex}"/>
        <polygon points="160,85 320,75 310,110 170,120" fill="#f59e0b" opacity="0.8"/>
        
        <!-- Snack Brand Seal -->
        <circle cx="240" cy="175" r="46" fill="#ffffff"/>
        <text x="240" y="182" font-family="Arial, sans-serif" font-size="16" font-weight="900" fill="${colorHex}" text-anchor="middle">${brandName}</text>
        <polygon points="170,275 310,275 320,287 160,287" fill="#b45309"/>
      </g>
    `;
  } else if (cat.includes('noodle') || cat.includes('บะหมี่')) {
    artworkSvg = `
      <defs>
        <filter id="shadowCup" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>

      <g filter="url(#shadowCup)">
        <polygon points="175,95 305,95 290,265 190,265" fill="${colorHex}"/>
        <ellipse cx="240" cy="95" rx="65" ry="14" fill="#fef08a"/>
        <line x1="185" y1="60" x2="265" y2="90" stroke="#78350f" stroke-width="6" stroke-linecap="round"/>
        <line x1="195" y1="50" x2="275" y2="80" stroke="#78350f" stroke-width="6" stroke-linecap="round"/>
        
        <rect x="190" y="145" width="100" height="65" rx="12" fill="#ffffff"/>
        <text x="240" y="183" font-family="Arial, sans-serif" font-size="16" font-weight="900" fill="${colorHex}" text-anchor="middle">${brandName}</text>
      </g>
    `;
  } else if (cat.includes('ice') || cat.includes('ไอศกรีม')) {
    artworkSvg = `
      <defs>
        <filter id="shadowIce" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>

      <g filter="url(#shadowIce)">
        <polygon points="205,175 275,175 240,290" fill="#d97706"/>
        <circle cx="240" cy="140" r="48" fill="${colorHex}"/>
        <circle cx="215" cy="150" r="28" fill="#f472b6"/>
        <circle cx="265" cy="150" r="28" fill="#fbbf24"/>
        <circle cx="240" cy="95" r="14" fill="#dc2626"/>
      </g>
    `;
  } else if (cat.includes('personal') || cat.includes('ของใช้ส่วนตัว')) {
    artworkSvg = `
      <defs>
        <filter id="shadowCare" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>

      <g filter="url(#shadowCare)">
        <rect x="190" y="115" width="100" height="155" rx="28" fill="${colorHex}"/>
        <rect x="225" y="75" width="30" height="40" fill="#cbd5e1"/>
        <path d="M218 75 L262 75 L270 63 L210 63 Z" fill="#94a3b8"/>
        <rect x="198" y="155" width="84" height="70" rx="14" fill="#ffffff"/>
        <text x="240" y="196" font-family="Arial, sans-serif" font-size="15" font-weight="900" fill="${colorHex}" text-anchor="middle">${brandName}</text>
      </g>
    `;
  } else if (cat.includes('household') || cat.includes('ของใช้ในบ้าน')) {
    artworkSvg = `
      <defs>
        <filter id="shadowHome" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>

      <g filter="url(#shadowHome)">
        <rect x="175" y="115" width="130" height="145" rx="18" fill="${colorHex}"/>
        <rect x="195" y="85" width="90" height="30" rx="8" fill="#cbd5e1"/>
        <circle cx="240" cy="175" r="35" fill="#ffffff"/>
        <text x="240" y="182" font-family="Arial, sans-serif" font-size="15" font-weight="900" fill="${colorHex}" text-anchor="middle">${brandName}</text>
      </g>
    `;
  } else {
    artworkSvg = `
      <defs>
        <filter id="shadowMeal" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>

      <g filter="url(#shadowMeal)">
        <rect x="170" y="105" width="140" height="155" rx="20" fill="${colorHex}"/>
        <rect x="182" y="117" width="116" height="85" rx="12" fill="#ffffff" opacity="0.95"/>
        <circle cx="215" cy="159" r="22" fill="#f59e0b"/>
        <circle cx="260" cy="159" r="18" fill="#16a34a"/>
        <rect x="185" y="212" width="110" height="30" rx="8" fill="#ffffff"/>
        <text x="240" y="232" font-family="Arial, sans-serif" font-size="15" font-weight="900" fill="${colorHex}" text-anchor="middle">${brandName}</text>
      </g>
    `;
  }

  // Pure White Background (#ffffff) 480p Canvas SVG Container (NO PROMO BADGES INSIDE)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
    <!-- Pure Solid White Background 480p Canvas -->
    <rect width="480" height="480" fill="#ffffff"/>
    
    <!-- Outer Product Container Frame -->
    <rect x="20" y="20" width="440" height="440" rx="32" fill="#ffffff" stroke="#e2e8f0" stroke-width="4"/>
    <rect x="24" y="24" width="432" height="432" rx="28" fill="none" stroke="#f8fafc" stroke-width="8"/>

    <!-- 480p Studio Product Graphic Area (Centered, Clean, No Name/Price Overlays) -->
    <g transform="translate(0, 35)">
      ${artworkSvg}
    </g>
  </svg>`;

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// Full Database of ALL 120 Items (SKU01 - SKU120) with Nano Banana & Authentic Brand Photography
const INITIAL_PROMOTIONS_DB = [
  // --- SKUs 01 to 10 ---
  { id: 1, product_code: 'SKU01', name_th: 'นมสดพาสเจอร์ไรส์ เมจิ 830มล.', name_en: 'Meiji Pasteurized Milk 830ml', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ขวด ลดทันที 10 บาท (เหลือ 80 บาท) อุดมด้วยแคลเซียม', description_en: 'E-Bulletin Promo: Buy 2 bottles get 10 THB discount. Rich in calcium.', price: 45.00, stock_capacity: 100, current_stock: 80, has_promo: true, image: 'assets/meiji_milk.jpg' },
  { id: 2, product_code: 'SKU02', name_th: 'ขนมปังโฮลวีท ฟาร์มเฮ้าส์ 250กรัม', name_en: 'Farmhouse Whole Wheat Bread 250g', category: 'Bakery', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: ซื้อ 1 ถุง แถมฟรี แยมสตรอเบอร์รี่ 1 ซอง', description_en: 'E-Bulletin Promo: Get free Strawberry Jam 1 sachet upon purchasing 1 bag.', price: 22.00, stock_capacity: 150, current_stock: 120, has_promo: true, image: createProduct480pImageUri('Farmhouse Whole Wheat Bread', '#d97706', 22.00, 'Bakery', 'SKU02') },
  { id: 3, product_code: 'SKU03', name_th: 'น้ำดื่มสิงห์ 1500มล. แพ็ค 6', name_en: 'Singha Drinking Water 1500ml Pack 6', category: 'Beverage', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 แพ็ค เพียง 99 บาท (ปกติ 118 บาท) สะอาดมาตรฐานสิงห์', description_en: 'E-Bulletin Promo: Buy 2 packs for 99 THB (Normal 118 THB). Clean water standard.', price: 59.00, stock_capacity: 200, current_stock: 150, has_promo: true, image: createProduct480pImageUri('Singha Water Pack', '#0284c7', 59.00, 'Beverage', 'SKU03') },
  { id: 4, product_code: 'SKU04', name_th: 'แซนด์วิชกระเป๋า แฮมชีส 7-Fresh', name_en: '7-Fresh Ham Cheese Toastie', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่พร้อมกาแฟร้อน ลดทันที 5 บาท มื้อเช้าสุดสะดวก', description_en: 'E-Bulletin Promo: Combo deal with Hot Coffee saves 5 THB. Quick breakfast item.', price: 35.00, stock_capacity: 80, current_stock: 25, has_promo: true, image: createProduct480pImageUri('7-Fresh Ham Cheese Toastie', '#ee3124', 35.00, 'Ready-to-Eat', 'SKU04') },
  { id: 5, product_code: 'SKU05', name_th: 'กาแฟกระป๋อง เบอร์ดี้ ลาเต้ 180มล.', name_en: 'Birdy Latte Can 180ml', category: 'Beverage', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กระป๋อง เพียง 25 บาท (ปกติ 30 บาท) กาแฟพร้อมดื่มนุ่มหอม', description_en: 'E-Bulletin Promo: Buy 2 cans for 25 THB (Normal 30 THB). Ready-to-drink coffee.', price: 15.00, stock_capacity: 300, current_stock: 210, has_promo: true, image: createProduct480pImageUri('Birdy Latte Can', '#10b981', 15.00, 'Beverage', 'SKU05') },
  { id: 6, product_code: 'SKU06', name_th: 'ซาลาเปาหมูสับทรงเครื่อง CP', name_en: 'CP Pork & Chive Steamed Bun', category: 'Ready-to-Eat', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ชิ้น เพียง 45 บาท (ปกติ 52 บาท) ร้อนๆ นุ่มอร่อย', description_en: 'E-Bulletin Promo: Buy 2 for 45 THB (Normal 52 THB). Hot & fluffy bun.', price: 26.00, stock_capacity: 80, current_stock: 40, has_promo: true, image: createProduct480pImageUri('CP Pork Bun', '#008053', 26.00, 'Ready-to-Eat', 'SKU06') },
  { id: 7, product_code: 'SKU07', name_th: 'มันฝรั่งทอดกรอบ เลย์ คลาสสิค 48กรัม', name_en: 'Lay Classic Potato Chips 48g', category: 'Snacks', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ซอง ลด 5 บาท กรอบอร่อยรสคลาสสิก', description_en: 'E-Bulletin Promo: Buy 2 bags save 5 THB. Crispy potato snack.', price: 20.00, stock_capacity: 150, current_stock: 110, has_promo: true, image: 'assets/lays_chips.jpg' },
  { id: 8, product_code: 'SKU08', name_th: 'บะหมี่กึ่งสำเร็จรูป มาม่า ต้มยำกุ้ง 55กรัม', name_en: 'MAMA Instant Noodles Tom Yum 55g', category: 'Instant Noodles', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: ราคาปกติ รสต้มยำกุ้งแท้ต้นตำรับไทย', description_en: 'Regular item. Spicy authentic Thai Tom Yum Goong flavor.', price: 7.00, stock_capacity: 300, current_stock: 250, has_promo: false, image: createProduct480pImageUri('MAMA Tom Yum Noodle', '#ee3124', 7.00, 'Instant Noodles', 'SKU08') },
  { id: 9, product_code: 'SKU09', name_th: 'นมถั่วเหลือง โอวัลติน 225มล. กล่อง', name_en: 'Ovaltine Soy Milk 225ml Box', category: 'Dairy', promo_category: 'Stamp Collection', description_th: 'โปร E-Bulletin: ซื้อ 3 กล่อง รับแสตมป์ ALL Member 1 ดวง', description_en: 'E-Bulletin Promo: Buy 3 boxes get 1 ALL Member stamp.', price: 13.00, stock_capacity: 120, current_stock: 90, has_promo: true, image: createProduct480pImageUri('Ovaltine Soy Milk', '#d97706', 13.00, 'Dairy', 'SKU09') },
  { id: 10, product_code: 'SKU10', name_th: 'ไอศกรีม เนสท์เล่ เอ็กซ์ตรีม วนิลา โคน', name_en: 'Nestle Extreme Vanilla Cone', category: 'Ice Cream', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 โคน เพียง 50 บาท (ปกติ 60 บาท) เวเฟอร์กรุบกรอบ', description_en: 'E-Bulletin Promo: Buy 2 cones for 60 THB. Crunchy wafer.', price: 30.00, stock_capacity: 50, current_stock: 15, has_promo: true, image: createProduct480pImageUri('Nestle Extreme Cone', '#3b82f6', 30.00, 'Ice Cream', 'SKU10') },

  // --- SKUs 11 to 85 ---
  { id: 11, product_code: 'SKU11', name_th: 'ไส้กรอกแฟรงค์หมู CP 150กรัม', name_en: 'CP Pork Sausage Frank 150g', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่เป๊ปซี่ ลด 8 บาท', description_en: 'E-Bulletin Promo: Combo with Pepsi saves 8 THB.', price: 42.00, stock_capacity: 100, current_stock: 50, has_promo: true, image: createProduct480pImageUri('CP Pork Sausage', '#ee3124', 42.00, 'Ready-to-Eat', 'SKU11') },
  { id: 12, product_code: 'SKU12', name_th: 'นมเปรี้ยว ดัชมิลล์ มิกซ์เบอร์รี่ 180มล.', name_en: 'Dutch Mill Mixed Berry Yogurt Drink 180ml', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กล่อง เพียง 20 บาท', description_en: 'E-Bulletin Promo: Buy 2 for 20 THB.', price: 12.00, stock_capacity: 120, current_stock: 80, has_promo: true, image: createProduct480pImageUri('Dutch Mill Berry Drink', '#ec4899', 12.00, 'Dairy', 'SKU12') },
  { id: 13, product_code: 'SKU13', name_th: 'ชาเขียว โออิชิ ฮันนี่เรมอน 500มล.', name_en: 'Oishi Green Tea Honey Lemon 500ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ลดทันที 5 บาท', description_en: 'E-Bulletin Promo: Instant 5 THB discount.', price: 20.00, stock_capacity: 180, current_stock: 120, has_promo: true, image: createProduct480pImageUri('Oishi Green Tea Honey', '#84cc16', 20.00, 'Beverage', 'SKU13') },
  { id: 14, product_code: 'SKU14', name_th: 'เค้กกล้วยหอม เลอแปง แพ็ค 2', name_en: 'Le Pan Banana Cake Pack 2', category: 'Bakery', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: ซื้อ 1 แถม 1', description_en: 'E-Bulletin Promo: Buy 1 Get 1 Free.', price: 16.00, stock_capacity: 110, current_stock: 90, has_promo: true, image: createProduct480pImageUri('Le Pan Banana Cake', '#eab308', 16.00, 'Bakery', 'SKU14') },
  { id: 15, product_code: 'SKU15', name_th: 'มันฝรั่งทอดกรอบ เทสโต รสเกลือ 48กรัม', name_en: 'Tasto Potato Chips Salted 48g', category: 'Snacks', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: มันฝรั่งแผ่นเรียบแท้', description_en: 'Regular item. Original salted potato chips.', price: 20.00, stock_capacity: 150, current_stock: 100, has_promo: false, image: createProduct480pImageUri('Tasto Potato Chips', '#64748b', 20.00, 'Snacks', 'SKU15') },
  { id: 16, product_code: 'SKU16', name_th: 'บะหมี่กึ่งสำเร็จรูป ยำยำ รสซีฟู้ด 55กรัม', name_en: 'Yum Yum Instant Noodles Seafood 55g', category: 'Instant Noodles', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ซอง ลด 2 บาท', description_en: 'E-Bulletin Promo: Buy 2 save 2 THB.', price: 7.00, stock_capacity: 250, current_stock: 200, has_promo: true, image: createProduct480pImageUri('Yum Yum Seafood Noodle', '#06b6d4', 7.00, 'Instant Noodles', 'SKU16') },
  { id: 17, product_code: 'SKU17', name_th: 'ไข่ไก่สด CP แพ็ค 10 ฟอง', name_en: 'CP Fresh Egg Pack 10', category: 'Ready-to-Eat', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: สมาชิก ALL Member ลด 5 บาท', description_en: 'E-Bulletin Promo: ALL Member save 5 THB.', price: 65.00, stock_capacity: 80, current_stock: 30, has_promo: true, image: createProduct480pImageUri('CP Fresh Eggs Pack', '#f97316', 65.00, 'Ready-to-Eat', 'SKU17') },
  { id: 18, product_code: 'SKU18', name_th: 'ไอศกรีม คอร์เนตโต ช็อกโกแลต โคน', name_en: 'Walls Cornetto Chocolate Cone', category: 'Ice Cream', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 โคน ลด 8 บาท', description_en: 'E-Bulletin Promo: Buy 2 cones save 8 THB.', price: 25.00, stock_capacity: 60, current_stock: 40, has_promo: true, image: createProduct480pImageUri('Walls Cornetto Choco', '#78350f', 25.00, 'Ice Cream', 'SKU18') },
  { id: 19, product_code: 'SKU19', name_th: 'เกี๊ยวซ่าหมู CP แช่แข็ง 100กรัม', name_en: 'CP Frozen Pork Gyoza 100g', category: 'Frozen Food', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่น้ำส้ม ลด 5 บาท', description_en: 'E-Bulletin Promo: Combo deal save 5 THB.', price: 39.00, stock_capacity: 50, current_stock: 35, has_promo: true, image: createProduct480pImageUri('CP Pork Gyoza Frozen', '#dc2626', 39.00, 'Frozen Food', 'SKU19') },
  { id: 20, product_code: 'SKU20', name_th: 'แชมพู ซันซิล ชมพู 160มล.', name_en: 'Sunsilk Shampoo Pink 160ml', category: 'Personal Care', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ลดทันที 10 บาท', description_en: 'E-Bulletin Promo: Instant 10 THB discount.', price: 59.00, stock_capacity: 80, current_stock: 60, has_promo: true, image: createProduct480pImageUri('Sunsilk Shampoo Pink', '#ec4899', 59.00, 'Personal Care', 'SKU20') },
  { id: 21, product_code: 'SKU21', name_th: 'นม ยูเอชที โฟร์โมสต์ ช็อกโกแลต 225มล.', name_en: 'Foremost UHT Milk Chocolate 225ml', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กล่อง 22 บาท', description_en: 'E-Bulletin Promo: Buy 2 boxes for 22 THB.', price: 13.00, stock_capacity: 150, current_stock: 110, has_promo: true, image: createProduct480pImageUri('Foremost Milk Choco', '#92400e', 13.00, 'Dairy', 'SKU21') },
  { id: 22, product_code: 'SKU22', name_th: 'เป๊ปซี่ ซีโร่ ชูการ์ 325มล. กระป๋อง', name_en: 'Pepsi Zero Sugar 325ml Can', category: 'Beverage', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กระป๋อง 24 บาท', description_en: 'E-Bulletin Promo: Buy 2 cans for 24 THB.', price: 15.00, stock_capacity: 200, current_stock: 160, has_promo: true, image: createProduct480pImageUri('Pepsi Zero Sugar Can', '#1e293b', 15.00, 'Beverage', 'SKU22') },
  { id: 23, product_code: 'SKU23', name_th: 'ชาเขียว อิชิตัน เก๊กฮวย 500มล.', name_en: 'Ichitan Green Tea Genmai 500ml', category: 'Beverage', promo_category: 'Stamp Collection', description_th: 'โปร E-Bulletin: ซื้อ 2 ขวด รับแสตมป์ 1 ดวง', description_en: 'E-Bulletin Promo: Buy 2 get 1 stamp.', price: 20.00, stock_capacity: 100, current_stock: 75, has_promo: true, image: createProduct480pImageUri('Ichitan Green Tea', '#15803d', 20.00, 'Beverage', 'SKU23') },
  { id: 24, product_code: 'SKU24', name_th: 'ขนมปังเผือก เลอแปง แพ็ค 2', name_en: 'Le Pan Taro Bun Pack 2', category: 'Bakery', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: ขนมปังสอดไส้เผือกนุ่ม', description_en: 'Regular item. Soft taro bun.', price: 15.00, stock_capacity: 120, current_stock: 85, has_promo: false, image: createProduct480pImageUri('Le Pan Taro Bun', '#64748b', 15.00, 'Bakery', 'SKU24') },
  { id: 25, product_code: 'SKU25', name_th: 'หมึกอบกรอบ เบนโตะ สไปซี่ 20กรัม', name_en: 'Bento Squid Snack Spicy 20g', category: 'Snacks', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ซอง 35 บาท', description_en: 'E-Bulletin Promo: Buy 2 for 35 THB.', price: 20.00, stock_capacity: 160, current_stock: 130, has_promo: true, image: createProduct480pImageUri('Bento Spicy Squid', '#b91c1c', 20.00, 'Snacks', 'SKU25') },
  { id: 26, product_code: 'SKU26', name_th: 'บะหมี่กึ่งสำเร็จรูป ไวไว หมูสับ 55กรัม', name_en: 'Wai Wai Instant Noodles Minced Pork 55g', category: 'Instant Noodles', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: รสหมูสับหอมกลิ่นน้ำซุป', description_en: 'Regular item. Classic pork flavor noodle.', price: 7.00, stock_capacity: 220, current_stock: 180, has_promo: false, image: createProduct480pImageUri('Wai Wai Pork Noodle', '#64748b', 7.00, 'Instant Noodles', 'SKU26') },
  { id: 27, product_code: 'SKU27', name_th: 'ข้าวผัดกระเพราหมู CP 230กรัม', name_en: 'CP Stir-fried Pork Basil Rice', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่ชาเขียว ลด 8 บาท', description_en: 'E-Bulletin Promo: Combo deal save 8 THB.', price: 45.00, stock_capacity: 60, current_stock: 40, has_promo: true, image: createProduct480pImageUri('CP Basil Rice', '#b91c1c', 45.00, 'Ready-to-Eat', 'SKU27') },
  { id: 28, product_code: 'SKU28', name_th: 'ไอศกรีม แม็กนั่ม คลาสสิค ช็อกโกแลต', name_en: 'Magnum Classic Chocolate Bar', category: 'Ice Cream', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: สมาชิก ALL Member ลด 10 บาท', description_en: 'E-Bulletin Promo: ALL Member save 10 THB.', price: 50.00, stock_capacity: 40, current_stock: 25, has_promo: true, image: createProduct480pImageUri('Magnum Classic Bar', '#451a03', 50.00, 'Ice Cream', 'SKU28') },
  { id: 29, product_code: 'SKU29', name_th: 'นักเก็ตไก่ CP แช่แข็ง 150กรัม', name_en: 'CP Frozen Chicken Nugget 150g', category: 'Frozen Food', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: ซื้อ 1 แถม 1', description_en: 'E-Bulletin Promo: Buy 1 Get 1 Free.', price: 49.00, stock_capacity: 60, current_stock: 45, has_promo: true, image: createProduct480pImageUri('CP Nuggets 150g', '#d97706', 49.00, 'Frozen Food', 'SKU29') },
  { id: 30, product_code: 'SKU30', name_th: 'แชมพู แพนทีน สมูท 160มล.', name_en: 'Pantene Shampoo Smooth 160ml', category: 'Personal Care', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ลดทันที 10 บาท', description_en: 'E-Bulletin Promo: Instant 10 THB discount.', price: 59.00, stock_capacity: 70, current_stock: 50, has_promo: true, image: createProduct480pImageUri('Pantene Smooth Shampoo', '#eab308', 59.00, 'Personal Care', 'SKU30') },
  { id: 31, product_code: 'SKU31', name_th: 'ไส้กรอกชีส เบทาโกร 150กรัม', name_en: 'Betagro Pork Sausage Cheese 150g', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่สไปรท์ ลด 7 บาท', description_en: 'E-Bulletin Promo: Combo deal save 7 THB.', price: 42.00, stock_capacity: 80, current_stock: 65, has_promo: true, image: createProduct480pImageUri('Betagro Cheese Sausage', '#eab308', 42.00, 'Ready-to-Eat', 'SKU31') },
  { id: 32, product_code: 'SKU32', name_th: 'โยเกิร์ต เมจิ บัลแกเรีย รสธรรมชาติ 110กรัม', name_en: 'Meiji Bulgaria Yogurt Natural 110g', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ถ้วย 35 บาท', description_en: 'E-Bulletin Promo: Buy 2 cups for 35 THB.', price: 20.00, stock_capacity: 90, current_stock: 70, has_promo: true, image: createProduct480pImageUri('Meiji Bulgaria Yogurt', '#0284c7', 20.00, 'Dairy', 'SKU32') },
  { id: 33, product_code: 'SKU33', name_th: 'เครื่องดื่มวิตามิน ซี-วิต เลมอน 140มล.', name_en: 'C-Vitt Lemon Drink 140ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ลดทันที 3 บาท', description_en: 'E-Bulletin Promo: Instant 3 THB discount.', price: 16.00, stock_capacity: 180, current_stock: 140, has_promo: true, image: createProduct480pImageUri('C-Vitt Lemon Drink', '#eab308', 16.00, 'Beverage', 'SKU33') },
  { id: 34, product_code: 'SKU34', name_th: 'ขนมปังปอนด์ ฟาร์มเฮ้าส์ 250กรัม', name_en: 'Farmhouse Butter Toast 250g', category: 'Bakery', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: ขนมปังปอนด์นุ่มหอมเนย', description_en: 'Regular item. Fresh butter loaf bread.', price: 24.00, stock_capacity: 120, current_stock: 95, has_promo: false, image: createProduct480pImageUri('Farmhouse Butter Toast', '#64748b', 24.00, 'Bakery', 'SKU34') },
  { id: 35, product_code: 'SKU35', name_th: 'ข้าวเกรียบกุ้ง ฮานามิ 60กรัม', name_en: 'Hanami Prawn Crackers 60g', category: 'Snacks', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ซอง 35 บาท', description_en: 'E-Bulletin Promo: Buy 2 for 35 THB.', price: 20.00, stock_capacity: 140, current_stock: 110, has_promo: true, image: createProduct480pImageUri('Hanami Prawn Crackers', '#ef4444', 20.00, 'Snacks', 'SKU35') },
  { id: 36, product_code: 'SKU36', name_th: 'นิชชินคัพ บะหมี่รสซีฟู้ด 60กรัม', name_en: 'Nissin Cup Noodle Seafood 60g', category: 'Instant Noodles', promo_category: 'Stamp Collection', description_th: 'โปร E-Bulletin: ซื้อ 2 ถ้วย รับแสตมป์ 1 ดวง', description_en: 'E-Bulletin Promo: Buy 2 cups get 1 stamp.', price: 15.00, stock_capacity: 130, current_stock: 100, has_promo: true, image: createProduct480pImageUri('Nissin Cup Seafood', '#0284c7', 15.00, 'Instant Noodles', 'SKU36') },
  { id: 37, product_code: 'SKU37', name_th: 'ข้าวแกงเขียวหวานไก่ CP 230กรัม', name_en: 'CP Chicken Green Curry Rice', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่น้ำดื่มสิงห์ ลด 6 บาท', description_en: 'E-Bulletin Promo: Combo deal save 6 THB.', price: 45.00, stock_capacity: 50, current_stock: 30, has_promo: true, image: createProduct480pImageUri('CP Chicken Green Curry', '#15803d', 45.00, 'Ready-to-Eat', 'SKU37') },
  { id: 38, product_code: 'SKU38', name_th: 'ไอศกรีม แพดเดิลป๊อป เรนโบว์ วอลล์', name_en: 'Walls Paddle Pop Rainbow Bar', category: 'Ice Cream', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 แท่ง 24 บาท', description_en: 'E-Bulletin Promo: Buy 2 bars for 24 THB.', price: 15.00, stock_capacity: 80, current_stock: 50, has_promo: true, image: createProduct480pImageUri('Walls Paddle Pop Rainbow', '#ec4899', 15.00, 'Ice Cream', 'SKU38') },
  { id: 39, product_code: 'SKU39', name_th: 'ขนมจีบหมู SGL แช่แข็ง 120กรัม', name_en: 'SGL Frozen Pork Dumpling 120g', category: 'Frozen Food', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: ซื้อ 1 แถม 1', description_en: 'E-Bulletin Promo: Buy 1 Get 1 Free.', price: 39.00, stock_capacity: 60, current_stock: 40, has_promo: true, image: createProduct480pImageUri('SGL Pork Dumplings', '#eab308', 39.00, 'Frozen Food', 'SKU39') },
  { id: 40, product_code: 'SKU40', name_th: 'แชมพู รีจอยส์ ริช 160มล.', name_en: 'Rejoice Shampoo Rich 160ml', category: 'Personal Care', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: แชมพูผมนุ่มลื่นสะบัด', description_en: 'Regular item. Smooth hair shampoo.', price: 55.00, stock_capacity: 90, current_stock: 65, has_promo: false, image: createProduct480pImageUri('Rejoice Rich Shampoo', '#64748b', 55.00, 'Personal Care', 'SKU40') },
  { id: 41, product_code: 'SKU41', name_th: 'เครื่องดื่มธัญพืช เนสวิต้า 225มล.', name_en: 'Nestum Cereal Drink 225ml', category: 'Dairy', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: สมาชิก ALL Member ลด 4 บาท', description_en: 'E-Bulletin Promo: ALL Member save 4 THB.', price: 15.00, stock_capacity: 110, current_stock: 80, has_promo: true, image: createProduct480pImageUri('Nestum Cereal Drink', '#854d0e', 15.00, 'Dairy', 'SKU41') },
  { id: 42, product_code: 'SKU42', name_th: 'ชเวปส์ มะนาวโซดา 330มล.', name_en: 'Schweppes Lime Soda 330ml', category: 'Beverage', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กระป๋อง 28 บาท', description_en: 'E-Bulletin Promo: Buy 2 cans for 28 THB.', price: 17.00, stock_capacity: 130, current_stock: 90, has_promo: true, image: createProduct480pImageUri('Schweppes Lime Soda', '#84cc16', 17.00, 'Beverage', 'SKU42') },
  { id: 43, product_code: 'SKU43', name_th: 'น้ำวิตามิน แมนซั่ม 500มล.', name_en: 'Mansome Vitamin Water 500ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ลดทันที 4 บาท', description_en: 'E-Bulletin Promo: Instant 4 THB discount.', price: 20.00, stock_capacity: 120, current_stock: 85, has_promo: true, image: createProduct480pImageUri('Mansome Vitamin Water', '#0284c7', 20.00, 'Beverage', 'SKU43') },
  { id: 44, product_code: 'SKU44', name_th: 'เค้กโรล สตรอเบอร์รี่ เลอแปง', name_en: 'Le Pan Cake Roll Strawberry', category: 'Bakery', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: ซื้อ 1 แถม 1', description_en: 'E-Bulletin Promo: Buy 1 Get 1 Free.', price: 18.00, stock_capacity: 90, current_stock: 70, has_promo: true, image: createProduct480pImageUri('Le Pan Cake Roll', '#ec4899', 18.00, 'Bakery', 'SKU44') },
  { id: 45, product_code: 'SKU45', name_th: 'ป๊อกกี้ ช็อกโกแลต 40กรัม', name_en: 'Pocky Chocolate Stick 40g', category: 'Snacks', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กล่อง 35 บาท', description_en: 'E-Bulletin Promo: Buy 2 for 35 THB.', price: 20.00, stock_capacity: 150, current_stock: 120, has_promo: true, image: createProduct480pImageUri('Pocky Chocolate Stick', '#ef4444', 20.00, 'Snacks', 'SKU45') },
  { id: 46, product_code: 'SKU46', name_th: 'บะหมี่กึ่งสำเร็จรูป มาม่า รสหมูสับ 55กรัม', name_en: 'MAMA Instant Noodle Pork 55g', category: 'Instant Noodles', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: บะหมี่รสหมูสับต้นตำรับ', description_en: 'Regular item. Classic pork instant noodle.', price: 7.00, stock_capacity: 300, current_stock: 220, has_promo: false, image: createProduct480pImageUri('MAMA Minced Pork', '#64748b', 7.00, 'Instant Noodles', 'SKU46') },
  { id: 47, product_code: 'SKU47', name_th: 'ข้าวไข่เจียวหมูสับ CP 230กรัม', name_en: 'CP Omelet Minced Pork Rice', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่น้ำดื่ม ลด 5 บาท', description_en: 'E-Bulletin Promo: Combo deal save 5 THB.', price: 37.00, stock_capacity: 70, current_stock: 45, has_promo: true, image: createProduct480pImageUri('CP Omelet Rice', '#eab308', 37.00, 'Ready-to-Eat', 'SKU47') },
  { id: 48, product_code: 'SKU48', name_th: 'ไอศกรีม เนสท์เล่ ครั้นช์ โคน', name_en: 'Nestle Crunch Ice Cream Cone', category: 'Ice Cream', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 โคน 50 บาท', description_en: 'E-Bulletin Promo: Buy 2 cones for 50 THB.', price: 30.00, stock_capacity: 50, current_stock: 30, has_promo: true, image: createProduct480pImageUri('Nestle Crunch Cone', '#451a03', 30.00, 'Ice Cream', 'SKU48') },
  { id: 49, product_code: 'SKU49', name_th: 'ปีกไก่บนแช่แข็ง เบทาโกร 150กรัม', name_en: 'Betagro Frozen Chicken Wings 150g', category: 'Frozen Food', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: สมาชิก ALL Member ลด 6 บาท', description_en: 'E-Bulletin Promo: ALL Member save 6 THB.', price: 49.00, stock_capacity: 70, current_stock: 50, has_promo: true, image: createProduct480pImageUri('Betagro Chicken Wings', '#d97706', 49.00, 'Frozen Food', 'SKU49') },
  { id: 50, product_code: 'SKU50', name_th: 'สบู่ก้อน เดทตอล 65กรัม', name_en: 'Dettol Antibacterial Soap 65g', category: 'Personal Care', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ลดทันที 5 บาท', description_en: 'E-Bulletin Promo: Instant 5 THB discount.', price: 22.00, stock_capacity: 100, current_stock: 75, has_promo: true, image: createProduct480pImageUri('Dettol Soap 65g', '#16a34a', 22.00, 'Personal Care', 'SKU50') },

  // --- SKUs 51 to 80 (Out of Stock Items, Stock = 0) ---
  { id: 51, product_code: 'SKU51', name_th: 'นมเปรี้ยว ดัชมิลล์ เบอร์รี่ 180มล.', name_en: 'Dutch Mill Berry Drink 180ml', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 กล่อง 20 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 for 20 THB.', price: 12.00, stock_capacity: 100, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Dutch Mill Berry', '#ec4899', 12.00, 'Dairy', 'SKU51') },
  { id: 52, product_code: 'SKU52', name_th: 'ชาเขียว โออิชิ รสดั้งเดิม 500มล.', name_en: 'Oishi Green Tea 500ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ลดทันที 5 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Instant 5 THB discount.', price: 20.00, stock_capacity: 150, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Oishi Green Tea', '#16a34a', 20.00, 'Beverage', 'SKU52') },
  { id: 53, product_code: 'SKU53', name_th: 'ไอศกรีม คอร์เนตโต เฮอร์ชีส์ โคน', name_en: 'Cornetto Hershey Cone', category: 'Ice Cream', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 โคน 50 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 for 50 THB.', price: 30.00, stock_capacity: 60, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Cornetto Hershey Cone', '#451a03', 30.00, 'Ice Cream', 'SKU53') },
  { id: 54, product_code: 'SKU54', name_th: 'แชมพู ซันซิล สีชมพู 160มล.', name_en: 'Sunsilk Pink Shampoo 160ml', category: 'Personal Care', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] แชมพูผมนุ่มลื่น', description_en: 'Regular item: [Out of Stock] Smooth shampoo.', price: 59.00, stock_capacity: 80, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Sunsilk Pink Shampoo', '#ec4899', 59.00, 'Personal Care', 'SKU54') },
  { id: 55, product_code: 'SKU55', name_th: 'ข้าวแกงเขียวหวานไก่ CP', name_en: 'CP Chicken Green Curry', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: [สินค้าหมด] จับคู่กาแฟ ลด 5 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Combo save 5 THB.', price: 45.00, stock_capacity: 60, current_stock: 0, has_promo: true, image: createProduct480pImageUri('CP Chicken Green Curry', '#16a34a', 45.00, 'Ready-to-Eat', 'SKU55') },
  { id: 56, product_code: 'SKU56', name_th: 'มันฝรั่ง เลย์แม็กซ์ บาร์บีคิว 48กรัม', name_en: 'Lay Max Chips BBQ 48g', category: 'Snacks', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ซอง ลด 5 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 save 5 THB.', price: 20.00, stock_capacity: 100, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Lay Max BBQ', '#ef4444', 20.00, 'Snacks', 'SKU56') },
  { id: 57, product_code: 'SKU57', name_th: 'มาม่าคัพ รสต้มยำกุ้ง 60กรัม', name_en: 'MAMA Cup TomYum 60g', category: 'Instant Noodles', promo_category: 'Stamp Collection', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ถ้วย รับแสตมป์ 1 ดวง', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 get 1 stamp.', price: 15.00, stock_capacity: 120, current_stock: 0, has_promo: true, image: createProduct480pImageUri('MAMA Cup TomYum', '#ef4444', 15.00, 'Instant Noodles', 'SKU57') },
  { id: 58, product_code: 'SKU58', name_th: 'เครื่องดื่มธัญพืช เนสวิต้า ยูเอชที', name_en: 'Nestum Cereal UHT 225ml', category: 'Dairy', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] เครื่องดื่มธัญพืชมีประโยชน์', description_en: 'Regular item: [Out of Stock] Healthy cereal drink.', price: 15.00, stock_capacity: 90, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Nestum Cereal UHT', '#854d0e', 15.00, 'Dairy', 'SKU58') },
  { id: 59, product_code: 'SKU59', name_th: 'ขนมปังแซนด์วิช ฟาร์มเฮ้าส์', name_en: 'Farmhouse Sandwich Bread', category: 'Bakery', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 1 แถม 1', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 1 Get 1 Free.', price: 22.00, stock_capacity: 100, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Farmhouse Sandwich Bread', '#eab308', 22.00, 'Bakery', 'SKU59') },
  { id: 60, product_code: 'SKU60', name_th: 'ชเวปส์ มะนาวโซดา 330มล.', name_en: 'Schweppes Lemon Soda 330ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ลด 4 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 save 4 THB.', price: 17.00, stock_capacity: 110, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Schweppes Lemon Soda', '#84cc16', 17.00, 'Beverage', 'SKU60') },
  { id: 61, product_code: 'SKU61', name_th: 'ขนมจีบหมู CP แช่แข็ง 120กรัม', name_en: 'CP Pork Dumpling Frozen 120g', category: 'Frozen Food', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] สมาชิก ALL Member ลด 5 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] ALL Member save 5 THB.', price: 39.00, stock_capacity: 50, current_stock: 0, has_promo: true, image: createProduct480pImageUri('CP Pork Dumpling', '#ef4444', 39.00, 'Frozen Food', 'SKU61') },
  { id: 62, product_code: 'SKU62', name_th: 'เค้กคัสตาร์ด เลอแปง', name_en: 'Le Pan Custard Cake', category: 'Bakery', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] เค้กคัสตาร์ดนุ่มอร่อย', description_en: 'Regular item: [Out of Stock] Soft custard cake.', price: 16.00, stock_capacity: 80, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Le Pan Custard Cake', '#eab308', 16.00, 'Bakery', 'SKU62') },
  { id: 63, product_code: 'SKU63', name_th: 'หมึกอบเบนโตะ สีน้ำเงิน 20กรัม', name_en: 'Bento Squid Spicy Blue 20g', category: 'Snacks', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ซอง 35 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 for 35 THB.', price: 20.00, stock_capacity: 120, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Bento Blue Spicy', '#0284c7', 20.00, 'Snacks', 'SKU63') },
  { id: 64, product_code: 'SKU64', name_th: 'โยเกิร์ต เมจิ รสสตรอเบอร์รี่', name_en: 'Meiji Yoghurt Strawberry', category: 'Dairy', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] สมาชิก ALL Member ลด 3 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] ALL Member save 3 THB.', price: 15.00, stock_capacity: 90, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Meiji Strawberry Yogurt', '#ec4899', 15.00, 'Dairy', 'SKU64') },
  { id: 65, product_code: 'SKU65', name_th: 'กาแฟเบอร์ดี้ แบล็ค 180มล.', name_en: 'Birdy Black Coffee Can', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ลด 3 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 save 3 THB.', price: 15.00, stock_capacity: 150, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Birdy Black Coffee', '#1e293b', 15.00, 'Beverage', 'SKU65') },
  { id: 66, product_code: 'SKU66', name_th: 'ข้าวไก่เทริยากิ CP 230กรัม', name_en: 'CP Teriyaki Chicken Rice', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: [สินค้าหมด] จับคู่โค้ก ลด 7 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Combo save 7 THB.', price: 45.00, stock_capacity: 60, current_stock: 0, has_promo: true, image: createProduct480pImageUri('CP Teriyaki Chicken', '#b91c1c', 45.00, 'Ready-to-Eat', 'SKU66') },
  { id: 67, product_code: 'SKU67', name_th: 'ไอศกรีม แม็กนั่ม ไวท์ช็อกโกแลต', name_en: 'Magnum White Chocolate', category: 'Ice Cream', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] สมาชิก ALL Member ลด 10 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] ALL Member save 10 THB.', price: 50.00, stock_capacity: 40, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Magnum White Chocolate', '#eab308', 50.00, 'Ice Cream', 'SKU67') },
  { id: 68, product_code: 'SKU68', name_th: 'มันฝรั่ง เทสโต รสสาหร่าย 48กรัม', name_en: 'Tasto Chips Seaweed 48g', category: 'Snacks', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] มันฝรั่งรสสาหร่ายแท้', description_en: 'Regular item: [Out of Stock] Seaweed potato chips.', price: 20.00, stock_capacity: 100, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Tasto Seaweed Chips', '#16a34a', 20.00, 'Snacks', 'SKU68') },
  { id: 69, product_code: 'SKU69', name_th: 'ไวไวควิกคัพ รสต้มยำ 60กรัม', name_en: 'Wai Wai Cup TomYum 60g', category: 'Instant Noodles', promo_category: 'Stamp Collection', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ถ้วย รับแสตมป์ 1 ดวง', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 get 1 stamp.', price: 15.00, stock_capacity: 110, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Wai Wai Quick Cup', '#ef4444', 15.00, 'Instant Noodles', 'SKU69') },
  { id: 70, product_code: 'SKU70', name_th: 'ครีมอาบน้ำ เดทตอล 200มล.', name_en: 'Dettol Body Wash 200ml', category: 'Personal Care', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ลดทันที 10 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Instant 10 THB discount.', price: 69.00, stock_capacity: 50, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Dettol Body Wash', '#16a34a', 69.00, 'Personal Care', 'SKU70') },
  { id: 71, product_code: 'SKU71', name_th: 'นม โฟร์โมสต์ รสสตรอเบอร์รี่', name_en: 'Foremost Strawberry Milk', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 กล่อง 22 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 for 22 THB.', price: 13.00, stock_capacity: 100, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Foremost Strawberry Milk', '#ec4899', 13.00, 'Dairy', 'SKU71') },
  { id: 72, product_code: 'SKU72', name_th: 'เป๊ปซี่ ออริจินัล 325มล.', name_en: 'Pepsi Can 325ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 กระป๋อง ลด 4 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 save 4 THB.', price: 15.00, stock_capacity: 180, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Pepsi Can 325ml', '#0284c7', 15.00, 'Beverage', 'SKU72') },
  { id: 73, product_code: 'SKU73', name_th: 'เค้กเนยสด เลอแปง แพ็ค 2', name_en: 'Le Pan Butter Cake Pack 2', category: 'Bakery', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] เค้กเนยสดนุ่มหอม', description_en: 'Regular item: [Out of Stock] Fresh butter cake.', price: 16.00, stock_capacity: 80, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Le Pan Butter Cake', '#eab308', 16.00, 'Bakery', 'SKU73') },
  { id: 74, product_code: 'SKU74', name_th: 'ข้าวเกรียบ ฮานามิ รสดั้งเดิม', name_en: 'Hanami Chips Original 60g', category: 'Snacks', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ซอง 35 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 for 35 THB.', price: 20.00, stock_capacity: 110, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Hanami Original Crackers', '#ef4444', 20.00, 'Snacks', 'SKU74') },
  { id: 75, product_code: 'SKU75', name_th: 'สปาเก็ตตี้ คาโบนาร่า CP', name_en: 'CP Spaghetti Carbonara', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: [สินค้าหมด] จับคู่เครื่องดื่ม ลด 8 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Combo save 8 THB.', price: 49.00, stock_capacity: 50, current_stock: 0, has_promo: true, image: createProduct480pImageUri('CP Spaghetti Carbonara', '#b91c1c', 49.00, 'Ready-to-Eat', 'SKU75') },
  { id: 76, product_code: 'SKU76', name_th: 'ไอศกรีม แพดเดิลป๊อป ช็อกโกแลต', name_en: 'Walls Paddle Pop Choco', category: 'Ice Cream', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] ไอศกรีมช็อกโกแลตอร่อย', description_en: 'Regular item: [Out of Stock] Choco ice cream.', price: 15.00, stock_capacity: 70, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Walls Paddle Pop Choco', '#78350f', 15.00, 'Ice Cream', 'SKU76') },
  { id: 77, product_code: 'SKU77', name_th: 'นักเก็ตไก่ SGL 150กรัม', name_en: 'SGL Crispy Nuggets 150g', category: 'Frozen Food', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 1 แถม 1', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 1 Get 1 Free.', price: 49.00, stock_capacity: 40, current_stock: 0, has_promo: true, image: createProduct480pImageUri('SGL Crispy Nuggets', '#eab308', 49.00, 'Frozen Food', 'SKU77') },
  { id: 78, product_code: 'SKU78', name_th: 'แชมพู แพนทีน ขจัดรังแค', name_en: 'Pantene Shampoo AntiDandruff', category: 'Personal Care', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ลดทันที 10 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Instant 10 THB discount.', price: 59.00, stock_capacity: 60, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Pantene AntiDandruff', '#0284c7', 59.00, 'Personal Care', 'SKU78') },
  { id: 79, product_code: 'SKU79', name_th: 'ยำยำคัพ รสหมูสับ 60กรัม', name_en: 'Yum Yum Cup Minced Pork', category: 'Instant Noodles', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] บะหมี่ถ้วยรสหมูสับ', description_en: 'Regular item: [Out of Stock] Minced pork cup noodle.', price: 15.00, stock_capacity: 100, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Yum Yum Pork Cup', '#64748b', 15.00, 'Instant Noodles', 'SKU79') },
  { id: 80, product_code: 'SKU80', name_th: 'เครื่องดื่ม ซี-วิต ออเร้นจ์ 140มล.', name_en: 'C-Vitt Orange Drink 140ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ลดทันที 3 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Instant 3 THB discount.', price: 16.00, stock_capacity: 150, current_stock: 0, has_promo: true, image: createProduct480pImageUri('C-Vitt Orange Drink', '#f97316', 16.00, 'Beverage', 'SKU80') },

  // --- SKUs 81 to 120 (40 Competitor Brand SKUs) ---
  { id: 81, product_code: 'SKU81', name_th: 'เครื่องดื่มมอลต์สกัด ไมโล 225มล.', name_en: 'Milo Malt Beverage 225ml', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กล่อง 22 บาท (ปกติ 26 บาท) ช็อกโกแลตมอลต์เข้มข้น', description_en: 'E-Bulletin Promo: Buy 2 boxes for 22 THB (Normal 26 THB). Rich chocolate malt.', price: 13.00, stock_capacity: 120, current_stock: 90, has_promo: true, image: createProduct480pImageUri('Milo Malt Beverage', '#008053', 13.00, 'Dairy', 'SKU81') },
  { id: 82, product_code: 'SKU82', name_th: 'แชมพู โดฟ อินเทนส์รีแพร์ 160มล.', name_en: 'Dove Intense Repair Shampoo 160ml', category: 'Personal Care', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ลดทันที 10 บาท สมาชิก ALL Member', description_en: 'E-Bulletin Promo: Instant 10 THB discount for ALL Member.', price: 65.00, stock_capacity: 70, current_stock: 40, has_promo: true, image: createProduct480pImageUri('Dove Intense Repair', '#3b82f6', 65.00, 'Personal Care', 'SKU82') },
  { id: 83, product_code: 'SKU83', name_th: 'มันฝรั่งทอดกรอบ แม็กซ์ สไปซี่บาร์บีคิว 48กรัม', name_en: 'Maxx Potato Chips Spicy BBQ 48g', category: 'Snacks', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] มันฝรั่งแผ่นหยักรสสไปซี่บาร์บีคิว', description_en: 'Regular item: [Out of Stock] Wavy spicy BBQ potato chips.', price: 20.00, stock_capacity: 100, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Maxx Spicy BBQ', '#dc2626', 20.00, 'Snacks', 'SKU83') },
  { id: 84, product_code: 'SKU84', name_th: 'สบู่ก้อน โพรเทคส์ สปอร์ต 65กรัม', name_en: 'Protex Sport Antibacterial Soap 65g', category: 'Personal Care', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: ซื้อ 1 แถม 1 ปกป้องแบคทีเรียยาวนาน', description_en: 'E-Bulletin Promo: Buy 1 Get 1 Free antibacterial soap.', price: 20.00, stock_capacity: 90, current_stock: 60, has_promo: true, image: createProduct480pImageUri('Protex Sport Soap', '#0284c7', 20.00, 'Personal Care', 'SKU84') },
  { id: 85, product_code: 'SKU85', name_th: 'ข้าวไก่เทริยากิ อีซี่โก 230กรัม', name_en: 'Ezygo Chicken Teriyaki Rice 230g', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่กับชาลิปตัน ลด 7 บาท มื้ออร่อยสไตล์ญี่ปุ่น', description_en: 'E-Bulletin Promo: Combo deal with Lipton Ice Tea saves 7 THB.', price: 45.00, stock_capacity: 50, current_stock: 25, has_promo: true, image: createProduct480pImageUri('Ezygo Chicken Teriyaki', '#d97706', 45.00, 'Ready-to-Eat', 'SKU85') },
  { id: 86, product_code: 'SKU86', name_th: 'โคคา-โคล่า รสดั้งเดิม 325มล. กระป๋อง', name_en: 'Coca-Cola Original 325ml Can', category: 'Beverage', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กระป๋อง 24 บาท (ปกติ 30 บาท) สดชื่นเย็นซ่า', description_en: 'E-Bulletin Promo: Buy 2 cans for 24 THB (Normal 30 THB). Ice cold cola.', price: 15.00, stock_capacity: 200, current_stock: 150, has_promo: true, image: 'assets/coke_original.jpg' },
  { id: 87, product_code: 'SKU87', name_th: 'แฟนต้า น้ำส้ม 325มล. กระป๋อง', name_en: 'Fanta Orange Soda 325ml Can', category: 'Beverage', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] น้ำอัดลมรสส้มหอมหวานซ่า', description_en: 'Regular item: [Out of Stock] Sweet orange carbonated soda.', price: 15.00, stock_capacity: 150, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Fanta Orange Soda', '#f58220', 15.00, 'Beverage', 'SKU87') },
  { id: 88, product_code: 'SKU88', name_th: 'สไปรท์ น้ำอัดลมกลิ่นมะนาว 325มล.', name_en: 'Sprite Lemon-Lime Soda 325ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กระป๋อง ลดทันที 4 บาท', description_en: 'E-Bulletin Promo: Buy 2 cans save 4 THB instant discount.', price: 15.00, stock_capacity: 180, current_stock: 110, has_promo: true, image: createProduct480pImageUri('Sprite Lemon Soda', '#10b981', 15.00, 'Beverage', 'SKU88') },
  { id: 89, product_code: 'SKU89', name_th: 'ชาดำเย็นรสเลมอน ลิปตัน 440มล.', name_en: 'Lipton Ice Tea Lemon 440ml', category: 'Beverage', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: สมาชิก ALL Member ซื้อ 2 ขวด 28 บาท (ปกติ 36 บาท)', description_en: 'E-Bulletin Promo: ALL Member buy 2 bottles for 28 THB (Normal 36 THB).', price: 18.00, stock_capacity: 120, current_stock: 80, has_promo: true, image: createProduct480pImageUri('Lipton Ice Tea Lemon', '#eab308', 18.00, 'Beverage', 'SKU89') },
  { id: 90, product_code: 'SKU90', name_th: 'ช็อกโกแลตเวเฟอร์ คิทแคท 35กรัม', name_en: 'KitKat Chocolate Wafer 35g', category: 'Snacks', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ชิ้น 35 บาท (ปกติ 42 บาท) คิดจะพัก คิดถึงคิทแคท', description_en: 'E-Bulletin Promo: Buy 2 for 35 THB (Normal 42 THB). Have a break, have a KitKat.', price: 21.00, stock_capacity: 150, current_stock: 100, has_promo: true, image: createProduct480pImageUri('KitKat Chocolate Wafer', '#ee3124', 21.00, 'Snacks', 'SKU90') },
  { id: 91, product_code: 'SKU91', name_th: 'ช็อกโกแลต เฮอร์ชีส์ คิสเซส 36กรัม', name_en: 'Hershey Kisses Chocolate 36g', category: 'Snacks', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] ช็อกโกแลตทรงหยดน้ำรสเข้มข้น', description_en: 'Regular item: [Out of Stock] Drop-shaped milk chocolate.', price: 25.00, stock_capacity: 80, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Hershey Kisses Choco', '#451a03', 25.00, 'Snacks', 'SKU91') },
  { id: 92, product_code: 'SKU92', name_th: 'ช็อกโกแลต เอ็มแอนด์เอ็ม ถั่วลิสง 37กรัม', name_en: 'M&M Peanut Chocolate 37g', category: 'Snacks', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ซอง ลด 5 บาท กรุบกรอบสอดไส้ถั่ว', description_en: 'E-Bulletin Promo: Buy 2 packs save 5 THB. Crispy peanut chocolate.', price: 25.00, stock_capacity: 100, current_stock: 75, has_promo: true, image: createProduct480pImageUri('M&M Peanut Chocolate', '#eab308', 25.00, 'Snacks', 'SKU92') },
  { id: 93, product_code: 'SKU93', name_th: 'ข้าวสลายเกลือ คาลบี้ รสบาร์บีคิว 50กรัม', name_en: 'Calbee Shrimp Chips 50g', category: 'Snacks', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: ข้าวเกรียบกุ้งคาลบี้ทอดกรอบสไตล์ญี่ปุ่น', description_en: 'Regular item. Japanese style crispy shrimp cracker.', price: 20.00, stock_capacity: 100, current_stock: 65, has_promo: false, image: createProduct480pImageUri('Calbee Shrimp Chips', '#f58220', 20.00, 'Snacks', 'SKU93') },
  { id: 94, product_code: 'SKU94', name_th: 'นมผง เอส-26 โกลด์ 150กรัม', name_en: 'S-26 Gold Milk Powder 150g', category: 'Dairy', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] นมผงสูตรเสริมพัฒนาการเด็ก', description_en: 'Regular item: [Out of Stock] Fortified gold milk powder.', price: 85.00, stock_capacity: 40, current_stock: 0, has_promo: false, image: createProduct480pImageUri('S-26 Gold Milk Powder', '#8b5cf6', 85.00, 'Dairy', 'SKU94') },
  { id: 95, product_code: 'SKU95', name_th: 'นม ยูเอชที แอนลีน โกลด์ 225มล.', name_en: 'Anlene Gold Milk 225ml Box', category: 'Dairy', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: สมาชิก ALL Member ซื้อ 2 กล่อง ลด 6 บาท แคลเซียมสูง', description_en: 'E-Bulletin Promo: ALL Member buy 2 boxes save 6 THB. High calcium.', price: 19.00, stock_capacity: 100, current_stock: 70, has_promo: true, image: createProduct480pImageUri('Anlene Gold UHT Milk', '#10b981', 19.00, 'Dairy', 'SKU95') },
  { id: 96, product_code: 'SKU96', name_th: 'ไส้กรอกแฟรงค์ไก่ CP 150กรัม', name_en: 'CP Chicken Sausage Frank 150g', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่กับเป๊ปซี่ ลด 8 บาท หนังกรอบเนื้อแน่น', description_en: 'E-Bulletin Promo: Combo deal with Pepsi saves 8 THB.', price: 42.00, stock_capacity: 70, current_stock: 45, has_promo: true, image: createProduct480pImageUri('CP Chicken Frank Sausage', '#ee3124', 42.00, 'Ready-to-Eat', 'SKU96') },
  { id: 97, product_code: 'SKU97', name_th: 'ซาลาเปาหมูแดง เบทาโกร', name_en: 'Betagro Pork Steamed Bun', category: 'Ready-to-Eat', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ชิ้น 40 บาท (ปกติ 48 บาท)', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 for 40 THB (Normal 48 THB).', price: 24.00, stock_capacity: 60, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Betagro Pork Steamed Bun', '#008053', 24.00, 'Ready-to-Eat', 'SKU97') },
  { id: 98, product_code: 'SKU98', name_th: 'เค้กคัสตาร์ด เดลิก้า แพ็ค 6', name_en: 'Delica Custard Cake Pack 6', category: 'Bakery', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: เค้กสอดไส้ครีมคัสตาร์ดนุ่มอร่อย', description_en: 'Regular item. Soft sponge custard cream cake.', price: 32.00, stock_capacity: 80, current_stock: 50, has_promo: false, image: createProduct480pImageUri('Delica Custard Cake', '#fbbf24', 32.00, 'Bakery', 'SKU98') },
  { id: 99, product_code: 'SKU99', name_th: 'ขนมปังเนยสด ฟาร์มเฮ้าส์ 250กรัม', name_en: 'Farmhouse Butter Bread 250g', category: 'Bakery', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: ซื้อ 1 ถุง แถมฟรี แยมเบอร์รี่ 1 ซอง', description_en: 'E-Bulletin Promo: Buy 1 get free Berry Jam 1 sachet.', price: 24.00, stock_capacity: 120, current_stock: 85, has_promo: true, image: createProduct480pImageUri('Farmhouse Butter Bread', '#fbbf24', 24.00, 'Bakery', 'SKU99') },
  { id: 100, product_code: 'SKU100', name_th: 'มาม่าคัพ รสต้มยำกุ้ง 60กรัม', name_en: 'MAMA Cup Tom Yum Goong 60g', category: 'Instant Noodles', promo_category: 'Stamp Collection', description_th: 'โปร E-Bulletin: ซื้อ 3 ถ้วย รับแสตมป์ ALL Member 1 ดวง', description_en: 'E-Bulletin Promo: Buy 3 cups get 1 ALL Member stamp.', price: 15.00, stock_capacity: 180, current_stock: 120, has_promo: true, image: createProduct480pImageUri('MAMA Cup TomYum Goong', '#ee3124', 15.00, 'Instant Noodles', 'SKU100') },
  { id: 101, product_code: 'SKU101', name_th: 'ไวไวควิก บะหมี่รสซีฟู้ดสไปซี่ 60กรัม', name_en: 'Wai Wai Quick Spicy Seafood Noodle 60g', category: 'Instant Noodles', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ถ้วย ลด 4 บาท แซ่บจัดจ้าน', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 cups save 4 THB.', price: 15.00, stock_capacity: 100, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Wai Wai Quick Noodle', '#dc2626', 15.00, 'Instant Noodles', 'SKU101') },
  { id: 102, product_code: 'SKU102', name_th: 'ยำยำคัพ รสเป็ดพะโล้ 60กรัม', name_en: 'Yum Yum Cup Spicy Duck 60g', category: 'Instant Noodles', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: บะหมี่ถ้วยรสเป็ดพะโล้หอมกลิ่นเครื่องเทศ', description_en: 'Regular item. Spicy duck flavor instant cup noodle.', price: 15.00, stock_capacity: 120, current_stock: 90, has_promo: false, image: createProduct480pImageUri('Yum Yum Duck Cup', '#d97706', 15.00, 'Instant Noodles', 'SKU102') },
  { id: 103, product_code: 'SKU103', name_th: 'ไอศกรีม แพดเดิลป๊อป ช็อกโกแลต วอลล์', name_en: 'Walls Paddle Pop Choco Ice Cream', category: 'Ice Cream', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] ไอศกรีมเข้มข้นรสช็อกโกแลต', description_en: 'Regular item: [Out of Stock] Chocolate flavor ice cream stick.', price: 15.00, stock_capacity: 50, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Walls Paddle Pop Choco', '#451a03', 15.00, 'Ice Cream', 'SKU103') },
  { id: 104, product_code: 'SKU104', name_th: 'ไอศกรีม เนสท์เล่ ไมโล โคน', name_en: 'Nestle Milo Ice Cream Bar', category: 'Ice Cream', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ชิ้น 35 บาท (ปกติ 44 บาท) รสไมโลเข้มข้น', description_en: 'E-Bulletin Promo: Buy 2 for 35 THB (Normal 44 THB). Milo flavor stick.', price: 22.00, stock_capacity: 60, current_stock: 35, has_promo: true, image: createProduct480pImageUri('Nestle Milo Ice Cream', '#008053', 22.00, 'Ice Cream', 'SKU104') },
  { id: 105, product_code: 'SKU105', name_th: 'ไอศกรีม คอร์เนตโต วนิลา ดิสก์', name_en: 'Cornetto Vanilla Cone', category: 'Ice Cream', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 โคน ลดทันที 8 บาท', description_en: 'E-Bulletin Promo: Buy 2 cones save 8 THB instant discount.', price: 25.00, stock_capacity: 70, current_stock: 40, has_promo: true, image: createProduct480pImageUri('Walls Cornetto Vanilla', '#06b6d4', 25.00, 'Ice Cream', 'SKU105') },
  { id: 106, product_code: 'SKU106', name_th: 'ไอศกรีม แม็กนั่ม อัลมอนด์ วนิลา', name_en: 'Magnum Almond Vanilla Ice Cream', category: 'Ice Cream', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] สมาชิก ALL Member ซื้อ 2 แท่ง 85 บาท (ปกติ 100 บาท)', description_en: 'E-Bulletin Promo: [Out of Stock] ALL Member buy 2 bars for 85 THB.', price: 50.00, stock_capacity: 40, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Magnum Almond Vanilla', '#451a03', 50.00, 'Ice Cream', 'SKU106') },
  { id: 107, product_code: 'SKU107', name_th: 'ไก่กรอบไร้กระดูก SGL 120กรัม', name_en: 'SGL Crispy Fried Chicken 120g', category: 'Frozen Food', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่กับน้ำส้ม ลดทันที 8 บาท', description_en: 'E-Bulletin Promo: Combo deal with Orange Juice saves 8 THB.', price: 45.00, stock_capacity: 50, current_stock: 30, has_promo: true, image: createProduct480pImageUri('SGL Crispy Chicken', '#eab308', 45.00, 'Frozen Food', 'SKU107') },
  { id: 108, product_code: 'SKU108', name_th: 'เกี๊ยวซ่าหมู CP ซอสเกาหลี 100กรัม', name_en: 'CP Pork Gyoza Korean Sauce 100g', category: 'Frozen Food', promo_category: 'Buy 1 Get 1 Free', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 1 แถม 1 ซอสเกาหลีเข้มข้น', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 1 Get 1 Free Korean Sauce Gyoza.', price: 39.00, stock_capacity: 40, current_stock: 0, has_promo: true, image: createProduct480pImageUri('CP Korean Pork Gyoza', '#dc2626', 39.00, 'Frozen Food', 'SKU108') },
  { id: 109, product_code: 'SKU109', name_th: 'โฟมล้างหน้า นีเวียเมน 100มล.', name_en: 'Nivea Men Foam Cleanser 100ml', category: 'Personal Care', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ลดทันที 20 บาท สูตรสะอาดล้ำลึก', description_en: 'E-Bulletin Promo: Instant 20 THB discount for deep clean men foam.', price: 119.00, stock_capacity: 80, current_stock: 55, has_promo: true, image: createProduct480pImageUri('Nivea Men Cleanser', '#0284c7', 119.00, 'Personal Care', 'SKU109') },
  { id: 110, product_code: 'SKU110', name_th: 'ยาสีฟัน คอลเกต ออพติคไวท์ 100กรัม', name_en: 'Colgate Optic White Toothpaste 100g', category: 'Personal Care', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] สมาชิก ALL Member ซื้อ 1 แถม 1', description_en: 'E-Bulletin Promo: [Out of Stock] ALL Member Buy 1 Get 1 Free whitening toothpaste.', price: 99.00, stock_capacity: 50, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Colgate Optic White', '#1d4ed8', 99.00, 'Personal Care', 'SKU110') },
  { id: 111, product_code: 'SKU111', name_th: 'แชมพู เฮดแอนด์โชว์เดอร์ 160มล.', name_en: 'Head & Shoulders Cool Menthol Shampoo 160ml', category: 'Personal Care', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ขวด 99 บาท (ปกติ 118 บาท) เย็นสดชื่นขจัดรังแค', description_en: 'E-Bulletin Promo: Buy 2 bottles for 99 THB (Normal 118 THB). Cool menthol.', price: 59.00, stock_capacity: 90, current_stock: 60, has_promo: true, image: createProduct480pImageUri('H&S Cool Menthol', '#0284c7', 59.00, 'Personal Care', 'SKU111') },
  { id: 112, product_code: 'SKU112', name_th: 'น้ำยาปรับผ้านุ่ม ดาวน์นี่ 550มล.', name_en: 'Downy Fabric Softener Sunrise Fresh 550ml', category: 'Household', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ถุง ลดทันที 15 บาท', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 packs save 15 THB instant discount.', price: 35.00, stock_capacity: 70, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Downy Fabric Softener', '#a855f7', 35.00, 'Household', 'SKU112') },
  { id: 113, product_code: 'SKU113', name_th: 'ผงซักฟอก แอทแทค แอคทีฟ 800กรัม', name_en: 'Attack Detergent Powder 800g', category: 'Household', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ถุง 110 บาท (ปกติ 130 บาท) สลายคราบฝังลึก', description_en: 'E-Bulletin Promo: Buy 2 bags for 110 THB (Normal 130 THB).', price: 65.00, stock_capacity: 60, current_stock: 40, has_promo: true, image: createProduct480pImageUri('Attack Detergent Powder', '#0ea5e9', 65.00, 'Household', 'SKU113') },
  { id: 114, product_code: 'SKU114', name_th: 'กระดาษเช็ดหน้า เซลล็อกซ์ 120แผ่น', name_en: 'Cellox Facial Tissues 120 Sheets', category: 'Household', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: กระดาษทิชชูสัมผัสนุ่มยับยั้งแบคทีเรีย', description_en: 'Regular item. Antibacterial soft facial tissue paper.', price: 42.00, stock_capacity: 100, current_stock: 70, has_promo: false, image: createProduct480pImageUri('Cellox Facial Tissues', '#0ea5e9', 42.00, 'Household', 'SKU114') },
  { id: 115, product_code: 'SKU115', name_th: 'กระดาษซับน้ำมัน สก๊อตช์ 2ม้วน', name_en: 'Scotch Kitchen Towel 2 Rolls', category: 'Household', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สินค้าหมด] กระดาษอเนกประสงค์ซับน้ำมัน', description_en: 'Regular item: [Out of Stock] Oil absorbent kitchen towel.', price: 49.00, stock_capacity: 50, current_stock: 0, has_promo: false, image: createProduct480pImageUri('Scotch Kitchen Towel', '#0ea5e9', 49.00, 'Household', 'SKU115') },
  { id: 116, product_code: 'SKU116', name_th: 'เครื่องดื่มชูกำลัง เรดบูล 150มล.', name_en: 'Red Bull Energy Drink 150ml', category: 'Beverage', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 ขวด ลดทันที 3 บาท เพิ่มพลังงานสดชื่น', description_en: 'E-Bulletin Promo: Buy 2 bottles save 3 THB energy boost.', price: 10.00, stock_capacity: 300, current_stock: 200, has_promo: true, image: createProduct480pImageUri('Red Bull Energy Drink', '#ee3124', 10.00, 'Beverage', 'SKU116') },
  { id: 117, product_code: 'SKU117', name_th: 'เครื่องดื่ม คาราบาวแดง 150มล.', name_en: 'Carabao Dang Energy Drink 150ml', category: 'Beverage', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: เครื่องดื่มชูกำลังวิตามินบี 12 สูง', description_en: 'Regular item. High vitamin B12 energy drink.', price: 10.00, stock_capacity: 250, current_stock: 180, has_promo: false, image: createProduct480pImageUri('Carabao Dang Energy', '#008053', 10.00, 'Beverage', 'SKU117') },
  { id: 118, product_code: 'SKU118', name_th: 'เครื่องดื่ม เรดดี้ บูสท์ 150มล.', name_en: 'Ready Boested Beverage 150ml', category: 'Beverage', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สินค้าหมด] ซื้อ 2 ขวด 22 บาท (ปกติ 30 บาท)', description_en: 'E-Bulletin Promo: [Out of Stock] Buy 2 bottles for 22 THB (Normal 30 THB).', price: 15.00, stock_capacity: 100, current_stock: 0, has_promo: true, image: createProduct480pImageUri('Ready Boost Drink', '#f97316', 15.00, 'Beverage', 'SKU118') },
  { id: 119, product_code: 'SKU119', name_th: 'สปาเก็ตตี้คาโบนาร่า CP 220กรัม', name_en: 'CP Spaghetti Carbonara 220g', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: จับคู่กับเป๊ปซี่ ลดทันที 10 บาท ซอสครีมเข้มข้น', description_en: 'E-Bulletin Promo: Combo deal with Pepsi saves 10 THB.', price: 49.00, stock_capacity: 60, current_stock: 35, has_promo: true, image: createProduct480pImageUri('CP Spaghetti Carbonara', '#ee3124', 49.00, 'Ready-to-Eat', 'SKU119') },
  { id: 120, product_code: 'SKU120', name_th: 'ข้าวไข่เจียวหมูสับ อีซี่โก 230กรัม', name_en: 'Ezygo Rice with Omelet & Pork 230g', category: 'Ready-to-Eat', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: ซื้อ 2 กล่อง ลดทันที 6 บาท อร่อยกลมกล่อม', description_en: 'E-Bulletin Promo: Buy 2 boxes save 6 THB instant discount.', price: 37.00, stock_capacity: 80, current_stock: 50, has_promo: true, image: createProduct480pImageUri('Ezygo Omelet Rice', '#d97706', 37.00, 'Ready-to-Eat', 'SKU120') },
  { id: 121, product_code: 'SKU121', name_th: 'นมถั่วเหลือง ไวตามิ้ลค์ โทมิ้ลค์ 300มล.', name_en: 'Vitamilk To-Milk Soy Milk 300ml', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ขวด ลดทันที 4 บาท', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 bottles get 4 THB discount.', price: 15.00, stock_capacity: 100, current_stock: 8, has_promo: true, image: createProduct480pImageUri('Vitamilk Soy Milk', '#008053', 15.00, 'Dairy', 'SKU121') },
  { id: 122, product_code: 'SKU122', name_th: 'ขนมปังโฮลวีท ฟาร์มเฮ้าส์ 250กรัม', name_en: 'Farmhouse Whole Wheat Bread 250g', category: 'Bakery', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ลดทันที 3 บาท ขนมปังโฮลวีทนุ่มสดใหม่', description_en: 'E-Bulletin Promo: [Low Stock] Instant 3 THB discount for fresh whole wheat bread.', price: 22.00, stock_capacity: 60, current_stock: 5, has_promo: true, image: createProduct480pImageUri('Farmhouse Whole Wheat Bread', '#d97706', 22.00, 'Bakery', 'SKU122') },
  { id: 123, product_code: 'SKU123', name_th: 'ชาดำเย็น ลิปตัน 440มล.', name_en: 'Lipton Ice Tea Lemon 440ml', category: 'Beverage', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ขวด 32 บาท (ปกติ 40 บาท)', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 bottles for 32 THB (Normal 40 THB).', price: 20.00, stock_capacity: 120, current_stock: 10, has_promo: true, image: createProduct480pImageUri('Lipton Ice Tea', '#f58220', 20.00, 'Beverage', 'SKU123') },
  { id: 124, product_code: 'SKU124', name_th: 'เกี๊ยวน้ำกุ้ง ซีพี 150กรัม', name_en: 'CP Shrimp Wonton Soup 150g', category: 'Ready-to-Eat', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] จับคู่กับชาโออิชิ ลดทันที 10 บาท', description_en: 'E-Bulletin Promo: [Low Stock] Combo deal with Oishi tea saves 10 THB.', price: 49.00, stock_capacity: 50, current_stock: 4, has_promo: true, image: createProduct480pImageUri('CP Shrimp Wonton', '#ee3124', 49.00, 'Ready-to-Eat', 'SKU124') },
  { id: 125, product_code: 'SKU125', name_th: 'ขนมปังกรอบ โฮมมี รสเนย 90กรัม', name_en: 'Homey Butter Crisp Biscuits 90g', category: 'Snacks', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สต็อกต่ำ] ขนมปังกรอบหอมเนยสดแท้', description_en: 'Regular item: [Low Stock] Fresh butter crisp biscuits.', price: 12.00, stock_capacity: 80, current_stock: 7, has_promo: false, image: createProduct480pImageUri('Homey Biscuits', '#d97706', 12.00, 'Snacks', 'SKU125') },
  { id: 126, product_code: 'SKU126', name_th: 'บะหมี่ นิชชิน รสต้มยำกุ้งแซ่บ 60กรัม', name_en: 'Nissin Tom Yum Shrimp Cup Noodle 60g', category: 'Instant Noodles', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ถ้วย 25 บาท (ปกติ 30 บาท)', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 cups for 25 THB (Normal 30 THB).', price: 15.00, stock_capacity: 100, current_stock: 9, has_promo: true, image: createProduct480pImageUri('Nissin Tom Yum Noodle', '#ee3124', 15.00, 'Instant Noodles', 'SKU126') },
  { id: 127, product_code: 'SKU127', name_th: 'ไอศกรีม เนสท์เล่ คิตแคท ดิสก์ 80มล.', name_en: 'Nestle KitKat Ice Cream Cone 80ml', category: 'Ice Cream', promo_category: 'ALL Member Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] สมาชิก ALL Member ลดทันที 5 บาท', description_en: 'E-Bulletin Promo: [Low Stock] ALL Member get instant 5 THB discount.', price: 30.00, stock_capacity: 60, current_stock: 3, has_promo: true, image: createProduct480pImageUri('Nestle KitKat Cone', '#ee3124', 30.00, 'Ice Cream', 'SKU127') },
  { id: 128, product_code: 'SKU128', name_th: 'นักเก็ตไก่ ซีพี 160กรัม', name_en: 'CP Chicken Nuggets 160g', category: 'Frozen Food', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ลดทันที 6 บาท ไก่กรอบนุ่มกลมกล่อม', description_en: 'E-Bulletin Promo: [Low Stock] Instant 6 THB discount for crispy chicken nuggets.', price: 42.00, stock_capacity: 50, current_stock: 6, has_promo: true, image: createProduct480pImageUri('CP Chicken Nuggets', '#eab308', 42.00, 'Frozen Food', 'SKU128') },
  { id: 129, product_code: 'SKU129', name_th: 'สบู่โพรเทคส์ ไอซ์ซี่คูล 65กรัม', name_en: 'Protex Icy Cool Soap Bar 65g', category: 'Personal Care', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ก้อน 25 บาท ชำระล้างแบคทีเรีย 99.9%', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 bars for 25 THB. 99.9% antibacterial.', price: 16.00, stock_capacity: 80, current_stock: 10, has_promo: true, image: createProduct480pImageUri('Protex Icy Cool Soap', '#0284c7', 16.00, 'Personal Care', 'SKU129') },
  { id: 130, product_code: 'SKU130', name_th: 'น้ำยาถูพื้น มาจิคลีน 750มล.', name_en: 'Magiclean Floor Cleaner 750ml', category: 'Household', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สต็อกต่ำ] น้ำยาถูพื้นขจัดคราบแห้งไวไม่เหนียวเท้า', description_en: 'Regular item: [Low Stock] Floor cleaner quick dry non-sticky.', price: 55.00, stock_capacity: 40, current_stock: 3, has_promo: false, image: createProduct480pImageUri('Magiclean Floor Cleaner', '#0ea5e9', 55.00, 'Household', 'SKU130') },
  { id: 131, product_code: 'SKU131', name_th: 'นมเปรี้ยว ดัชมิลล์ ผลไม้รวม 400มล.', name_en: 'Dutch Mill Mixed Fruit Yogurt Drink 400ml', category: 'Dairy', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ขวด 36 บาท มีกรดอะมิโนและวิตามิน', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 bottles for 36 THB. Rich in vitamins.', price: 22.00, stock_capacity: 90, current_stock: 12, has_promo: true, image: createProduct480pImageUri('Dutch Mill Mixed Fruit', '#008053', 22.00, 'Dairy', 'SKU131') },
  { id: 132, product_code: 'SKU132', name_th: 'เค้กส้ม เลอแปง 60กรัม', name_en: 'Le Pan Orange Sponge Cake 60g', category: 'Bakery', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ลดทันที 3 บาท เค้กส้มซอสฉ่ำนุ่มละมุน', description_en: 'E-Bulletin Promo: [Low Stock] Instant 3 THB discount for soft orange cake.', price: 15.00, stock_capacity: 70, current_stock: 5, has_promo: true, image: createProduct480pImageUri('Le Pan Orange Cake', '#f58220', 15.00, 'Bakery', 'SKU132') },
  { id: 133, product_code: 'SKU133', name_th: 'น้ำส้มคั้น มินิทเมด สแปลช 250มล.', name_en: 'Minute Maid Splash Orange Juice 250ml', category: 'Beverage', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ขวด 20 บาท อุดมด้วยวิตามินซีสูง', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 bottles for 20 THB. High Vitamin C.', price: 13.00, stock_capacity: 150, current_stock: 18, has_promo: true, image: createProduct480pImageUri('Minute Maid Splash', '#f58220', 13.00, 'Beverage', 'SKU133') },
  { id: 134, product_code: 'SKU134', name_th: 'บะหมี่ มาม่า ออเรียลทัล ฮอตเกาหลี 85กรัม', name_en: 'MAMA Oriental Kitchen Hot Korean 85g', category: 'Instant Noodles', promo_category: 'Combo Deal', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] จับคู่กับโค้ก ลดทันที 5 บาท เส้นเหนียวนุ่ม', description_en: 'E-Bulletin Promo: [Low Stock] Combo deal with Coke saves 5 THB.', price: 15.00, stock_capacity: 110, current_stock: 14, has_promo: true, image: createProduct480pImageUri('MAMA Oriental Kitchen', '#ee3124', 15.00, 'Instant Noodles', 'SKU134') },
  { id: 135, product_code: 'SKU135', name_th: 'ขนมคอร์นพัฟฟ์ รสปลาหมึก 70กรัม', name_en: 'Corn Puff Squid Flavored Snack 70g', category: 'Snacks', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สต็อกต่ำ] ขนมข้าวโพดอบกรอบรสปลาหมึกเข้มข้น', description_en: 'Regular item: [Low Stock] Rich squid flavored corn puff snack.', price: 20.00, stock_capacity: 80, current_stock: 9, has_promo: false, image: createProduct480pImageUri('Corn Puff Squid', '#d97706', 20.00, 'Snacks', 'SKU135') },
  { id: 136, product_code: 'SKU136', name_th: 'เบอร์เกอร์ข้าวเหนียวหมูปิ้ง อีซี่โก 120กรัม', name_en: 'Ezygo Grilled Pork Sticky Rice Burger 120g', category: 'Ready-to-Eat', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ชิ้น 55 บาท หอมกลิ่นหมูปิ้งกลมกล่อม', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 pcs for 55 THB. Authentic grilled pork.', price: 32.00, stock_capacity: 60, current_stock: 5, has_promo: true, image: createProduct480pImageUri('Ezygo Pork Burger', '#008053', 32.00, 'Ready-to-Eat', 'SKU136') },
  { id: 137, product_code: 'SKU137', name_th: 'ไส้กรอกค็อกเทล ซีพี 150กรัม', name_en: 'CP Cocktail Mini Sausage 150g', category: 'Frozen Food', promo_category: 'Instant Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ลดทันที 5 บาท ไส้กรอกหนังกรอบเนื้อแน่น', description_en: 'E-Bulletin Promo: [Low Stock] Instant 5 THB discount for cocktail sausages.', price: 38.00, stock_capacity: 70, current_stock: 8, has_promo: true, image: createProduct480pImageUri('CP Cocktail Sausage', '#ee3124', 38.00, 'Frozen Food', 'SKU137') },
  { id: 138, product_code: 'SKU138', name_th: 'แป้งหอมเย็น ทเวลฟ์พลัส 50กรัม', name_en: '12 Plus Cooling Body Powder 50g', category: 'Personal Care', promo_category: 'Regular Price', description_th: 'สินค้าปกติ: [สต็อกต่ำ] แป้งหอมเย็นสดชื่นยาวนานตลอดวัน', description_en: 'Regular item: [Low Stock] Long lasting fresh cooling body powder.', price: 25.00, stock_capacity: 60, current_stock: 4, has_promo: false, image: createProduct480pImageUri('12 Plus Cooling Powder', '#0284c7', 25.00, 'Personal Care', 'SKU138') },
  { id: 139, product_code: 'SKU139', name_th: 'น้ำยาล้างจาน ไลปอนเอฟ 500มล.', name_en: 'Lipon F Dishwashing Liquid 500ml', category: 'Household', promo_category: 'Buy 2 Get Discount', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ถุง 45 บาท ขจัดคราบมันสะอาดหมดจด', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 bags for 45 THB. Degreasing clean.', price: 29.00, stock_capacity: 80, current_stock: 11, has_promo: true, image: createProduct480pImageUri('Lipon F Dishwashing', '#0ea5e9', 29.00, 'Household', 'SKU139') },
  { id: 140, product_code: 'SKU140', name_th: 'ช็อกโกแลต เอ็มแอนด์เอ็ม ถั่วลิสง 40กรัม', name_en: 'M&M Peanut Chocolate 40g', category: 'Snacks', promo_category: 'Stamp Collection', description_th: 'โปร E-Bulletin: [สต็อกต่ำ] ซื้อ 2 ซอง รับแสตมป์จัดหนัก 2 ดวง', description_en: 'E-Bulletin Promo: [Low Stock] Buy 2 packs earn 2 bonus stamps.', price: 25.00, stock_capacity: 100, current_stock: 15, has_promo: true, image: 'assets/mms_peanut_40g.jpg' }
];

class AgenticRAGEngine {
  constructor() {
    this.db = JSON.parse(JSON.stringify(INITIAL_PROMOTIONS_DB));
    this.config = {
      routerMode: 'AUTO',
      similarityThreshold: 0.10,
      topK: 4,
      lang: 'TH'
    };
    this.vectorStore = [];
    this.buildVectorStore();
  }

  async init() {
    try {
      const res = await fetch('products.json?v=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.db = data;
          this.buildVectorStore();
          console.log(`✅ Dynamically loaded ${this.db.length} products from products.json`);
        }
      }
    } catch (err) {
      console.warn('⚠️ products.json fetch failed, using fallback dataset:', err);
    }
  }

  tokenize(text) {
    if (!text) return [];
    return text.toLowerCase()
      .replace(/[^\w\s\u0e00-\u0e7f]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 1);
  }

  buildVectorStore() {
    this.vectorStore = this.db.map(item => {
      const docText = `${item.product_code} ${item.name_th} ${item.name_en} ${item.category} ${item.promo_category || ''} ${item.description_th} ${item.description_en}`;
      const tokens = this.tokenize(docText);
      const tf = {};
      tokens.forEach(token => {
        tf[token] = (tf[token] || 0) + 1;
      });
      return {
        ...item,
        docText,
        tokens,
        tf
      };
    });
  }

  cosineSimilarity(queryTokens, docTf) {
    if (!queryTokens || queryTokens.length === 0) return 0;
    const queryTf = {};
    queryTokens.forEach(t => queryTf[t] = (queryTf[t] || 0) + 1);

    let dotProduct = 0;
    let queryMagSq = 0;
    let docMagSq = 0;

    for (const term in queryTf) {
      queryMagSq += queryTf[term] * queryTf[term];
      if (docTf[term]) {
        dotProduct += queryTf[term] * docTf[term];
      }
    }

    for (const term in docTf) {
      docMagSq += docTf[term] * docTf[term];
    }

    if (queryMagSq === 0 || docMagSq === 0) return 0;
    return dotProduct / (Math.sqrt(queryMagSq) * Math.sqrt(docMagSq));
  }

  node1EntityExtractor(query) {
    const skuMatch = query.match(/SKU\d{1,3}/i);
    const sku = skuMatch ? skuMatch[0].toUpperCase() : null;

    const isStockQuery = /stock|inventory|how many|many|remaining|left|มีเท่าไหร่|เหลือกี่|สต็อก|เหลือ|หมด|out of stock/i.test(query);
    const isOutOfStockQuery = /out of stock|sold out|หมด|ไม่มีของ|สต็อก 0|สต็อกหมด/i.test(query);
    const isPromoQuery = /promotion|promo|discount|deal|combo|free|save|โปร|ลดราคา|ส่วนลด|แถม/i.test(query);
    const isNoPromoQuery = /no promo|regular|without promo|ไม่มีโปร|ปกติ|ราคาปกติ/i.test(query);

    return {
      sku,
      intent: isStockQuery ? 'INVENTORY_CHECK' : 'PROMOTIONAL_DETAIL',
      isStockQuery,
      isOutOfStockQuery,
      isPromoQuery,
      isNoPromoQuery,
      rawQuery: query
    };
  }

  conditionalRouter(extraction) {
    if (this.config.routerMode === 'SQL_ONLY') return 'NODE_2_SQL';
    if (this.config.routerMode === 'VECTOR_ONLY') return 'NODE_3_VECTOR';
    if (this.config.routerMode === 'HYBRID') return 'HYBRID_BOTH';

    if (extraction.sku || extraction.isOutOfStockQuery || extraction.intent === 'INVENTORY_CHECK') return 'NODE_2_SQL';
    return 'NODE_3_VECTOR';
  }

  node2SqlAgent(extraction) {
    const sku = extraction.sku;
    let sqlQuery = "";
    let results = [];

    if (sku) {
      sqlQuery = `SELECT * FROM convenience_store_promotions WHERE product_code = '${sku}';`;
      results = this.db.filter(i => i.product_code === sku);
    } else if (extraction.isOutOfStockQuery) {
      sqlQuery = `SELECT * FROM convenience_store_promotions WHERE current_stock = 0;`;
      results = this.db.filter(i => i.current_stock === 0);
    } else if (extraction.isNoPromoQuery) {
      sqlQuery = `SELECT * FROM convenience_store_promotions WHERE has_promo = False;`;
      results = this.db.filter(i => !i.has_promo);
    } else {
      sqlQuery = `SELECT * FROM convenience_store_promotions WHERE has_promo = True;`;
      results = this.db.filter(i => i.has_promo);
    }

    return { sqlQuery, results };
  }

  node3VectorAgent(query) {
    const queryTokens = this.tokenize(query);
    const scored = this.vectorStore.map(doc => {
      const score = this.cosineSimilarity(queryTokens, doc.tf);
      return {
        ...doc,
        similarity_score: score
      };
    });

    scored.sort((a, b) => b.similarity_score - a.similarity_score);
    const filtered = scored.filter(d => d.similarity_score >= this.config.similarityThreshold);
    const matches = filtered.slice(0, this.config.topK);

    return { queryTokens, matches };
  }

  runWorkflow(query) {
    const startTime = performance.now();
    const trace = [];

    const extraction = this.node1EntityExtractor(query);
    trace.push({ node: 'Node 1: Entity Extractor', status: 'SUCCESS', output: extraction });

    const routeDecision = this.conditionalRouter(extraction);
    trace.push({ node: 'Conditional Router', status: 'ROUTED', output: { routeDecision } });

    let sqlResult = null;
    let vectorResult = null;
    let finalProducts = [];

    if (routeDecision === 'NODE_2_SQL' || routeDecision === 'HYBRID_BOTH') {
      sqlResult = this.node2SqlAgent(extraction);
      trace.push({ node: 'Node 2: SQL Inventory Agent', status: 'EXECUTED', output: sqlResult });
      finalProducts.push(...sqlResult.results);
    }

    if (routeDecision === 'NODE_3_VECTOR' || routeDecision === 'HYBRID_BOTH') {
      vectorResult = this.node3VectorAgent(query);
      trace.push({ node: 'Node 3: Vector Semantic Agent', status: 'EXECUTED', output: vectorResult });
      vectorResult.matches.forEach(m => {
        if (!finalProducts.some(p => p.product_code === m.product_code)) {
          finalProducts.push(m);
        }
      });
    }

    if (finalProducts.length === 0) {
      finalProducts = this.db.slice(0, 4);
    }

    const endTime = performance.now();
    const latencyMs = (endTime - startTime).toFixed(2);

    const text = this.synthesizeResponseText(query, finalProducts);

    return {
      query,
      routeDecision,
      extraction,
      sqlResult,
      vectorResult,
      trace,
      latencyMs,
      response: {
        text,
        productCards: finalProducts
      }
    };
  }

  synthesizeResponseText(query, products) {
    const isEn = this.config.lang === 'EN';
    if (products.length === 0) {
      return isEn 
        ? `No products found matching "${query}".`
        : `ขออภัยค่ะ ไม่พบรายการสินค้าในระบบที่ตรงกับคำถาม "${query}"`;
    }

    let text = isEn 
      ? `Found **${products.length} items** matching your request:\n\n`
      : `ปัจจุบันมีรายการสินค้าทั้งหมด **${products.length} รายการ** ที่ตรงตามเงื่อนไขดังนี้ค่ะ:\n\n`;

    products.forEach((p, idx) => {
      const name = isEn ? p.name_en : p.name_th;
      const isOut = p.current_stock === 0;
      const isLow = !isOut && (p.current_stock / p.stock_capacity < 0.20);
      const emoji = isOut ? '❌' : (isLow ? '⚠️' : '✅');
      const promoLabel = getPromoCategoryLabel ? getPromoCategoryLabel(p.promo_category) : p.promo_category;

      text += `${idx + 1}. ${emoji} ${name}\n`;
      text += `   • SKU: ${p.product_code}\n`;
      text += `     - ราคา: ฿${p.price.toFixed(2)}\n`;
      text += `     - โปรโมชั่น: ${promoLabel}\n\n`;
    });

    return text;
  }

  updateStock(sku, newStock) {
    const item = this.db.find(i => i.product_code === sku);
    if (item) {
      item.current_stock = parseInt(newStock, 10);
      if (!item.image.endsWith('.jpg')) {
        item.image = createProduct480pImageUri(
          this.config.lang === 'EN' ? item.name_en : item.name_th,
          '#ee3124',
          item.price,
          item.category,
          item.product_code
        );
      }
      this.buildVectorStore();
    }
  }

  addProduct(newProd) {
    const nextId = this.db.length + 1;
    const hasPromo = newProd.description_th.toLowerCase().includes('promo') || newProd.description_th.includes('โปร');
    
    const item = {
      id: nextId,
      product_code: newProd.product_code,
      name_th: newProd.name_th,
      name_en: newProd.name_en || newProd.name_th,
      category: newProd.category,
      promo_category: newProd.promo_category || (hasPromo ? 'Buy 2 Get Discount' : 'Regular Price'),
      description_th: newProd.description_th,
      description_en: newProd.description_en || newProd.description_th,
      price: parseFloat(newProd.price),
      stock_capacity: parseInt(newProd.stock_capacity, 10),
      current_stock: parseInt(newProd.current_stock, 10),
      image: createProduct480pImageUri(newProd.name_th, '#ee3124', parseFloat(newProd.price), newProd.category, newProd.product_code),
      has_promo: hasPromo
    };

    this.db.unshift(item);
    this.buildVectorStore();
  }

  // Category detection helper
  detectCategoryFilter(queryLower) {
    if (queryLower.includes('อาหาร') || queryLower.includes('ของกิน') || queryLower.includes('ข้าว') || queryLower.includes('เมนู')) {
      return { categories: ['Ready-to-Eat', 'Bakery', 'Instant Noodles', 'Frozen Food'], nameTh: 'อาหาร' };
    }
    if (queryLower.includes('เครื่องดื่ม') || queryLower.includes('น้ำ') || queryLower.includes('นม') || queryLower.includes('กาแฟ') || queryLower.includes('ชา') || queryLower.includes('น้ำอัดลม')) {
      return { categories: ['Beverage'], nameTh: 'เครื่องดื่ม' };
    }
    if (queryLower.includes('ขนม') || queryLower.includes('ของทานเล่น') || queryLower.includes('สแน็ค')) {
      return { categories: ['Snacks', 'Ice Cream'], nameTh: 'ขนม' };
    }
    if (queryLower.includes('ของใช้') || queryLower.includes('ของใช้ส่วนตัว')) {
      return { categories: ['Personal Care', 'Household'], nameTh: 'ของใช้' };
    }
    return null;
  }

  // --- Google AI Studio (Gemini Live API Integration for Chat) ---
  async runGeminiLiveChat(query, apiKey) {
    const startTime = performance.now();
    const isEn = this.config.lang === 'EN';
    const queryLower = query.toLowerCase();

    const catInfo = this.detectCategoryFilter(queryLower);
    let targetDb = this.db;
    if (catInfo) {
      targetDb = this.db.filter(p => catInfo.categories.includes(p.category));
    }

    const isOutOfStockQuery = (queryLower.includes('หมด') || queryLower.includes('out of stock')) && !queryLower.includes('ใกล้หมด');
    const isLowStockQuery = queryLower.includes('ใกล้หมด') || queryLower.includes('low stock');

    let allMatched = [];
    if (isOutOfStockQuery) {
      allMatched = targetDb.filter(p => p.current_stock === 0);
    } else if (isLowStockQuery) {
      allMatched = targetDb.filter(p => p.current_stock === 0 || (p.current_stock / p.stock_capacity) < 0.20);
    } else if (catInfo) {
      allMatched = targetDb;
    } else {
      allMatched = this.db.filter(p => 
        queryLower.includes(p.product_code.toLowerCase()) || 
        p.name_th.toLowerCase().includes(queryLower) ||
        (p.name_en && p.name_en.toLowerCase().includes(queryLower)) ||
        (p.description_th && p.description_th.toLowerCase().includes(queryLower))
      );
    }

    const exactCount = allMatched.length;
    const categoryLabelText = catInfo ? `หมวด${catInfo.nameTh}` : 'ในคลัง';
    const statusLabelText = isOutOfStockQuery ? 'หมดสต็อก' : (isLowStockQuery ? 'ใกล้หมดสต็อก' : 'ตรงตามเงื่อนไข');

    // Filtered context prompt summary so Gemini ONLY sees relevant products
    const dbSummary = allMatched.map(p => 
      `- ${p.product_code}: ${p.name_th} (${p.name_en}), หมวด: ${p.category}, โปร: ${p.promo_category || 'ปกติ'}, ราคา: ฿${p.price.toFixed(2)}, สต็อก: ${p.current_stock}/${p.stock_capacity}, รายละเอียด: ${p.description_th}`
    ).join('\n');

    const promptText = `คุณคือ 7-Eleven Smart Retail AI Assistant ผู้เชี่ยวชาญสินค้าและโปรโมชั่น E-Bulletin ของ 7-Eleven
ผลการค้นหาข้อมูลจริงจากระบบคลังสินค้าสำหรับคำถามนี้:
- สินค้า${categoryLabelText}ที่${statusLabelText}: มีทั้งหมด **${exactCount} รายการ**

รายการสินค้าที่ตรงตามเงื่อนไขทั้ง ${exactCount} รายการ:
${dbSummary}

คำถามจากผู้ใช้: "${query}"

กฎเหล็กสำคัญที่สุด (CRITICAL ACCURACY & HIERARCHY RULES):
1. ในประโยคเกริ่นสรุปเปิดตอบ ต้องระบุจำนวนตัวเลขให้ตรงกับ **${exactCount} รายการ** เท่านั้น! (เช่น "ปัจจุบันในคลังสินค้ามีสินค้า${categoryLabelText}ที่${statusLabelText}ทั้งหมด ${exactCount} รายการ ดังนี้:")
2. ให้แสดงรายการสินค้าทุกชิ้นในรายการข้างต้นให้ครบถ้วนทั้ง ${exactCount} รายการ ห้ามนำสินค้าหมวดหมู่อื่นที่ไม่เกี่ยวข้องมาตอบเด็ดขาด
3. การจัด Hierarchy ลำดับชั้นข้อมูลสินค้า (ห้ามใส่เครื่องหมาย * ในบรรทัด ราคา, สต็อก และ โปรโมชั่น):
   - จัดรูปแบบตามโครงสร้างนี้เสมอ:
     1. [Emoji] [ชื่อสินค้า]
        • SKU: [SKU Code]
          - ราคา: ฿[ราคา]
          - สต็อกคงเหลือ: [จำนวนคงเหลือ]/[ความจุสูงสุด] ชิ้น
          - โปรโมชั่น: [ชื่อโปรโมชั่น]

   - กำหนด Emoji นำหน้าชื่อสินค้าอย่างชัดเจน:
     * สินค้าหมดสต็อก (stock = 0): ใช้ Emoji ❌
     * สินค้าใกล้หมดสต็อก (0 < stock < 20%): ใช้ Emoji ⚠️
     * สินค้าปกติ (stock >= 20%): ใช้ Emoji ✅`;

    // Prioritize ultra-fast Flash Lite models for minimum response latency
    const candidateModels = ['gemini-3.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-flash-lite-latest', 'gemini-3.5-flash'];

    let lastErrDetail = '';

    for (const modelName of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: promptText }]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 3072
            }
          })
        });

        if (res.ok) {
          const data = await res.json();
          // Extract text from parts (skip parts that only have thoughtSignature)
          const parts = data.candidates?.[0]?.content?.parts || [];
          const answerText = parts.map(p => p.text || '').filter(t => t.length > 0).join('\n');

          if (answerText) {
            const endTime = performance.now();
            const latencyMs = (endTime - startTime).toFixed(2);

            let answerFormatted = answerText;

            // Ensure opening summary count text matches exactCount
            answerFormatted = answerFormatted.replace(/(\d+)\s*รายการ/g, `${exactCount} รายการ`);

            const reorderSkus = allMatched.map(p => p.product_code);

            return {
              query,
              routeDecision: `GEMINI_API (${modelName})`,
              latencyMs,
              response: {
                text: answerFormatted,
                productCards: allMatched.slice(0, 6),
                allMatchedSkus: reorderSkus,
                reorderSkus: reorderSkus
              },
              trace: [
                { node: 'Google AI Studio API', status: 'SUCCESS', output: { model: modelName, latencyMs: `${latencyMs}ms` } }
              ]
            };
          }
        } else {
          const errText = await res.text().catch(() => '');
          lastErrDetail = `HTTP ${res.status} (${modelName})`;
          console.warn(`Gemini ${modelName} failed:`, errText);
        }
      } catch (err) {
        lastErrDetail = err.message;
        console.warn(`Gemini ${modelName} exception:`, err);
      }
    }

    // Fallback gracefully to local Agentic RAG workflow
    console.error('All Gemini API model attempts failed. Last error:', lastErrDetail);
    const fallbackResult = this.runWorkflow(query);
    fallbackResult.routeDecision = 'LOCAL_RAG_ENGINE';
    return fallbackResult;
  }

  async getGeminiEmbedding(text, apiKey) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${apiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'models/text-embedding-004',
          content: { parts: [{ text }] }
        })
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.embedding?.values || null;
    } catch (e) {
      console.warn('Gemini Embedding API Error:', e);
      return null;
    }
  }
}

window.ragEngine = new AgenticRAGEngine();
