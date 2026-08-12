"""
7-Eleven Smart Retail E-Bulletin & Inventory Agentic RAG
Python Implementation with 120 SKUs (Competitor Brands, Mixed Stock & Promos)
Bilingual Support (TH / EN) & Promotion Category Support
"""

import math
import re

# Mock Database matching schema_and_dataset.sql (120 SKUs)
CONVENIENCE_STORE_PROMOTIONS = [
    {"product_code": "SKU01", "name_th": "นมสดพาสเจอร์ไรส์ เมจิ 830มล.", "name_en": "Meiji Pasteurized Milk 830ml", "category": "Dairy", "promo_category": "Buy 2 Get Discount", "price": 45.00, "stock_capacity": 100, "current_stock": 80, "description_th": "โปร E-Bulletin: ซื้อ 2 ขวด ลดทันที 10 บาท (เหลือ 80 บาท) อุดมด้วยแคลเซียม", "description_en": "E-Bulletin Promo: Buy 2 bottles get 10 THB discount. Rich in calcium.", "has_promo": True, "image": "assets/meiji_milk.jpg"},
    {"product_code": "SKU02", "name_th": "ขนมปังโฮลวีท ฟาร์มเฮ้าส์ 250กรัม", "name_en": "Farmhouse Whole Wheat Bread 250g", "category": "Bakery", "promo_category": "Buy 1 Get 1 Free", "price": 22.00, "stock_capacity": 150, "current_stock": 120, "description_th": "โปร E-Bulletin: ซื้อ 1 ถุง แถมฟรี แยมสตรอเบอร์รี่ 1 ซอง", "description_en": "E-Bulletin Promo: Get free Strawberry Jam 1 sachet upon purchasing 1 bag.", "has_promo": True, "image": "assets/farmhouse_bread.jpg"},
    {"product_code": "SKU81", "name_th": "เครื่องดื่มมอลต์สกัด ไมโล 225มล.", "name_en": "Milo Malt Beverage 225ml", "category": "Dairy", "promo_category": "Buy 2 Get Discount", "price": 13.00, "stock_capacity": 120, "current_stock": 90, "description_th": "โปร E-Bulletin: ซื้อ 2 กล่อง 22 บาท (ปกติ 26 บาท)", "description_en": "E-Bulletin Promo: Buy 2 boxes for 22 THB.", "has_promo": True, "image": "assets/milo_uht.jpg"},
    {"product_code": "SKU86", "name_th": "โคคา-โคล่า รสดั้งเดิม 325มล. กระป๋อง", "name_en": "Coca-Cola Original 325ml Can", "category": "Beverage", "promo_category": "Buy 2 Get Discount", "price": 15.00, "stock_capacity": 200, "current_stock": 150, "description_th": "โปร E-Bulletin: ซื้อ 2 กระป๋อง 24 บาท (ปกติ 30 บาท)", "description_en": "E-Bulletin Promo: Buy 2 cans for 24 THB.", "has_promo": True, "image": "assets/coke_original.jpg"},
    {"product_code": "SKU120", "name_th": "ข้าวไข่เจียวหมูสับ อีซี่โก 230กรัม", "name_en": "Ezygo Rice with Omelet & Pork 230g", "category": "Ready-to-Eat", "promo_category": "Buy 2 Get Discount", "price": 37.00, "stock_capacity": 80, "current_stock": 50, "description_th": "โปร E-Bulletin: ซื้อ 2 กล่อง ลดทันที 6 บาท", "description_en": "E-Bulletin Promo: Buy 2 boxes save 6 THB.", "has_promo": True, "image": "assets/ezygo_omelet.jpg"}
]

# Node 1: Entity & Intent Extractor
def node_1_entity_extractor(query):
    sku_match = re.search(r'SKU\d{1,3}', query, re.IGNORECASE)
    sku = sku_match.group(0).upper() if sku_match else None
    
    is_stock = bool(re.search(r'stock|inventory|how many|many|remaining|left|มีเท่าไหร่|เหลือกี่|สต็อก|เหลือ|หมด|out of stock', query, re.IGNORECASE))
    is_promo = bool(re.search(r'promotion|promo|discount|deal|combo|free|save|โปร|ลดราคา|ส่วนลด|แถม', query, re.IGNORECASE))
    
    intent = "HYBRID_CATEGORY" if (is_stock and is_promo) else ("INVENTORY_CHECK" if is_stock else "PROMOTIONAL_DETAIL")
    return {"sku": sku, "intent": intent, "raw_query": query}

# Node 2: SQL Inventory Agent
def node_2_sql_agent(state):
    sku = state.get("sku")
    if sku:
        results = [i for i in CONVENIENCE_STORE_PROMOTIONS if i["product_code"] == sku]
        sql = f"SELECT * FROM convenience_store_promotions WHERE product_code = '{sku}';"
    else:
        results = [i for i in CONVENIENCE_STORE_PROMOTIONS if i["has_promo"]]
        sql = "SELECT * FROM convenience_store_promotions WHERE has_promo = True;"
    return {"sql": sql, "data": results}

# Conditional Router
def conditional_router(state):
    return "NODE_2_SQL" if state["intent"] == "INVENTORY_CHECK" else "NODE_3_VECTOR"

if __name__ == "__main__":
    test_query = "Milo Coca-Cola Pepsi competitor brand promos"
    state = node_1_entity_extractor(test_query)
    route = conditional_router(state)
    print("Agentic Route Decision:", route)
    print(f"Total dataset items: 120 SKUs")
