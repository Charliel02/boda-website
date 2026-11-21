// features/menu/next/catalog/foods.ts
var f = (id, name, category, serving_grams, calories, protein_g, carbs_g, fat_g, fiber_g, allergens = null) => ({ id, name, category, serving_grams, calories, protein_g, carbs_g, fat_g, fiber_g, allergens });
var FOODS = Object.fromEntries([
  // Protein
  f("chicken_breast_cooked", "Chicken breast, cooked roasted (skinless)", "protein", 85, 140.25, 26.35, 0, 3.03, 0),
  f("chicken_thigh_cooked", "Chicken thigh, cooked roasted (skinless)", "protein", 52, 108.68, 13.52, 0, 5.67, 0),
  f("ground_beef_90_cooked", "Ground beef, 90% lean, cooked", "protein", 85, 184.45, 22.18, 0, 9.94, 0),
  f("ground_turkey_cooked", "Ground turkey, 93% lean, cooked", "protein", 85, 172.55, 22.95, 0, 8.5, 0),
  f("salmon_cooked", "Salmon, Atlantic, cooked", "protein", 85, 175.1, 18.79, 0, 10.54, 0, ["fish"]),
  f("tuna_canned_water", "Tuna, canned in water", "protein", 85, 98.6, 21.68, 0, 0.7, 0, ["fish"]),
  f("shrimp_cooked", "Shrimp, cooked", "protein", 85, 84.15, 20.4, 0.17, 0.26, 0, ["shellfish"]),
  f("tofu_firm", "Tofu, firm (calcium-set)", "protein", 126, 181.44, 19.91, 5.38, 10.99, 2.9, ["soy"]),
  f("egg_scrambled", "Egg, scrambled", "protein", 61, 90.89, 6.1, 0.98, 6.65, 0, ["egg", "milk"]),
  f("black_beans_cooked", "Black beans, cooked", "protein", 172, 227.04, 15.24, 40.76, 0.93, 14.96),
  f("kidney_beans_cooked", "Kidney beans, cooked", "protein", 177, 224.79, 15.35, 40.36, 0.89, 11.33),
  f("lentils_cooked", "Lentils, cooked", "protein", 198, 229.68, 17.86, 39.8, 0.75, 15.64),
  f("hummus", "Hummus", "protein", 15, 24.9, 1.19, 2.15, 1.44, 0.9, ["sesame"]),
  // Dairy
  f("greek_yogurt_2pct", "Greek yogurt, plain 2% low-fat", "dairy", 200, 146, 19.9, 7.88, 3.84, 0, ["milk"]),
  f("greek_yogurt_nonfat", "Greek yogurt, plain nonfat", "dairy", 245, 144.55, 24.99, 8.82, 0.96, 0, ["milk"]),
  f("milk_2pct", "Milk, 2% reduced fat", "dairy", 244, 122, 8.2, 11.96, 4.83, 0, ["milk"]),
  f("cheddar", "Cheese, cheddar", "dairy", 28, 112.84, 6.41, 0.87, 9.32, 0, ["milk"]),
  f("feta_cheese", "Cheese, feta", "dairy", 28, 73.92, 3.98, 1.15, 5.96, 0, ["milk"]),
  f("parmesan_grated", "Cheese, parmesan, grated", "dairy", 5, 21, 1.42, 0.69, 1.39, 0, ["milk"]),
  f("sour_cream_light", "Sour cream, light (reduced-fat)", "dairy", 15, 20.7, 0.53, 1.08, 1.59, 0, ["milk"]),
  f("butter_salted", "Butter, salted", "dairy", 14.2, 101.81, 0.12, 0.01, 11.52, 0, ["milk"]),
  // Grains and starches
  f("rice_white_cooked", "Rice, white, cooked", "grains", 158, 205.4, 4.25, 44.56, 0.44, 0.63),
  f("jasmine_rice_cooked", "Rice, jasmine, cooked", "grains", 158, 205.4, 4.58, 44.24, 0.47, 0.63),
  f("spaghetti_cooked", "Spaghetti, cooked", "grains", 140, 221.2, 8.12, 43.4, 1.26, 2.52, ["wheat"]),
  f("oats_rolled_dry", "Oats, rolled, dry", "grains", 81, 315.09, 13.69, 53.7, 5.59, 8.59),
  f("bread_whole_wheat", "Bread, whole wheat", "grains", 28, 70.56, 3.44, 11.96, 0.98, 1.68, ["wheat"]),
  f("flour_tortilla", "Tortilla, flour (8 inch)", "grains", 49, 148.96, 4.02, 24.25, 3.67, 1.47, ["wheat"]),
  f("corn_tortilla", "Tortilla, corn (6 inch)", "grains", 26, 56.68, 1.48, 11.6, 0.74, 1.64),
  f("sweet_potato_baked", "Sweet potato, baked", "produce", 114, 102.6, 2.29, 23.6, 0.17, 3.76),
  // Vegetables and fruit
  f("broccoli_cooked", "Broccoli, cooked", "produce", 156, 54.6, 3.71, 11.2, 0.64, 5.15),
  f("green_beans_cooked", "Green beans, cooked", "produce", 125, 43.75, 2.36, 9.85, 0.35, 4),
  f("bell_pepper_cooked", "Bell pepper, cooked", "produce", 136, 38.08, 1.25, 9.11, 0.27, 1.63),
  f("zucchini_cooked", "Zucchini, cooked", "produce", 180, 27, 2.03, 4.84, 0.65, 1.8),
  f("spinach_cooked", "Spinach, cooked", "produce", 180, 41.4, 5.35, 6.75, 0.47, 4.32),
  f("carrots_cooked", "Carrots, cooked", "produce", 156, 54.6, 1.19, 12.82, 0.28, 4.68),
  f("onion_raw", "Onion", "produce", 110, 44, 1.21, 10.27, 0.11, 1.87),
  f("garlic_raw", "Garlic", "produce", 3, 4.47, 0.19, 0.99, 0.01, 0.06),
  f("romaine_raw", "Lettuce, romaine", "produce", 47, 7.99, 0.58, 1.55, 0.14, 0.99),
  f("tomato_raw", "Tomato, red ripe", "produce", 123, 22.14, 1.08, 4.78, 0.25, 1.48),
  f("cucumber_raw", "Cucumber, with peel", "produce", 119, 17.85, 0.77, 4.32, 0.13, 0.59),
  f("corn_canned", "Corn, canned", "produce", 164, 100.04, 3.2, 23.45, 0.82, 2.62),
  f("blueberry_raw", "Blueberries", "produce", 148, 84.36, 1.1, 21.46, 0.49, 3.55),
  f("strawberry_raw", "Strawberries", "produce", 144, 46.08, 0.96, 11.09, 0.43, 2.88),
  f("banana_raw", "Banana", "produce", 118, 105.02, 1.3, 26.9, 0.35, 3.07),
  f("lime_juice", "Lime juice", "beverages", 15, 3.75, 0.06, 1.26, 0.01, 0.06),
  // Sauces, oils and seasoning
  f("marinara_sauce", "Marinara sauce", "condiments", 125, 70, 1.88, 11.62, 2, 2.5),
  f("tomato_sauce", "Tomato sauce, canned", "produce", 122, 29.28, 1.46, 6.47, 0.37, 1.83),
  f("salsa", "Salsa", "produce", 36, 12.96, 0.54, 2.52, 0.07, 0.65),
  f("soy_sauce", "Soy sauce", "pantry", 16, 8.48, 1.3, 0.79, 0.09, 0.13, ["soy", "wheat"]),
  f("teriyaki_sauce", "Teriyaki sauce", "condiments", 18, 16.02, 1.07, 2.81, 0, 0.02, ["soy", "wheat"]),
  f("chicken_broth", "Chicken broth", "prepared", 240, 36, 4.8, 2.4, 1.2, 0),
  f("olive_oil", "Olive oil", "pantry", 13.5, 119.34, 0, 0, 13.5, 0),
  f("sesame_oil", "Sesame oil", "pantry", 13.6, 120.22, 0, 0, 13.6, 0, ["sesame"]),
  f("sesame_seeds", "Sesame seeds", "fats", 9, 51.57, 1.59, 2.11, 4.47, 1.06, ["sesame"]),
  f("peanut_butter", "Peanut butter, smooth", "fats", 16, 94.08, 4.02, 3.2, 8.06, 0.96, ["peanuts"]),
  f("mayonnaise", "Mayonnaise", "pantry", 14, 95.2, 0.13, 0.08, 10.47, 0, ["egg"]),
  f("honey", "Honey", "pantry", 21, 63.84, 0.06, 17.3, 0, 0.04),
  f("chili_powder", "Chili powder", "herbs", 2.7, 7.61, 0.36, 1.34, 0.39, 0.94),
  f("cumin_ground", "Cumin, ground", "herbs", 2.1, 7.88, 0.37, 0.93, 0.47, 0.22),
  // Added 2026-11-02 for the second batch of recipes, copied from production the same way.
  f("pork_tenderloin_cooked", "Pork tenderloin, cooked", "protein", 85, 121.55, 22.1, 0, 2.98, 0),
  f("ground_chicken_cooked", "Ground chicken, cooked", "protein", 85, 160.65, 20.23, 0, 9.27, 0),
  f("cod_cooked", "Cod, Atlantic, cooked", "protein", 85, 89.25, 19.38, 0, 0.73, 0, ["fish"]),
  f("turkey_deli", "Turkey breast, deli sliced", "protein", 28, 29.12, 3.78, 0.98, 0.48, 0.06),
  f("egg_hardboiled", "Egg, hard-boiled", "protein", 50, 77.5, 6.3, 0.56, 5.3, 0, ["egg"]),
  f("chickpeas_cooked", "Chickpeas (garbanzo), cooked", "protein", 164, 268.96, 14.53, 44.94, 4.25, 12.46),
  f("cottage_cheese_2pct", "Cottage cheese, 2%", "dairy", 226, 189.84, 24.86, 9.72, 5.2, 0, ["milk"]),
  f("potato_baked", "Potato, baked (with skin)", "produce", 173, 160.89, 4.33, 36.68, 0.22, 3.81),
  f("quinoa_cooked", "Quinoa, cooked", "grains", 185, 222, 8.14, 39.41, 3.55, 5.18),
  f("pasta_cooked", "Pasta, cooked", "grains", 140, 221.2, 8.12, 43.26, 1.3, 2.52, ["wheat"]),
  f("egg_noodles_cooked", "Egg noodles, cooked", "grains", 160, 220.8, 7.26, 40.32, 3.31, 1.92, ["wheat", "egg"]),
  f("hamburger_bun", "Hamburger bun", "grains", 52, 152.88, 5.2, 26.42, 2.29, 1.14, ["wheat"]),
  f("pita_bread", "Pita bread", "grains", 60, 165, 5.46, 33.42, 0.72, 1.32, ["wheat"]),
  f("english_muffin", "English muffin", "grains", 57, 129.39, 5.07, 25.54, 0.97, 2, ["wheat"]),
  f("peas_cooked", "Peas, green, cooked", "produce", 160, 134.4, 8.58, 24.96, 0.35, 8.8),
  f("cabbage_raw", "Cabbage, green", "produce", 89, 22.25, 1.14, 5.16, 0.09, 2.23),
  f("cauliflower_cooked", "Cauliflower, cooked", "produce", 124, 28.52, 2.28, 5.1, 0.56, 2.85),
  f("scallion_raw", "Green onion / Scallion", "produce", 15, 4.8, 0.27, 1.1, 0.03, 0.39),
  f("ginger_raw", "Ginger root", "produce", 2, 1.6, 0.04, 0.36, 0.01, 0.04),
  f("avocado_raw", "Avocado", "produce", 150, 240, 3, 12.79, 22.05, 10.05),
  f("lemon_juice", "Lemon juice", "beverages", 15, 3.3, 0.05, 1.03, 0.04, 0.04),
  f("coconut_milk_light", "Coconut milk, light (canned)", "fats", 240, 175.2, 1.68, 2.4, 18, 1.2),
  f("pesto", "Pesto", "condiments", 30, 125.4, 1.5, 1.8, 12, 0.45, ["milk", "tree_nuts"]),
  f("bbq_sauce", "BBQ sauce", "condiments", 34, 58.48, 0.28, 13.87, 0.21, 0.27),
  f("almonds", "Almonds, raw", "fats", 28, 162.12, 5.94, 6.05, 13.97, 3.5, ["tree_nuts"]),
  f("curry_powder", "Curry powder", "herbs", 2, 6.5, 0.29, 1.12, 0.28, 1.06),
  f("vegetable_broth", "Vegetable broth", "prepared", 240, 28.8, 1.2, 4.8, 0.48, 0),
  // ---- Added 2026-11-16 for the 50 database meals. Numbers copied from public.foods the same day;
  // allergens filled by hand as above (production's column is still empty for whole foods).
  f("balsamic_vinegar", "Vinegar, balsamic", "condiments", 16, 14.08, 0.08, 2.72, 0, 0),
  f("curry_paste_red", "Red curry paste", "condiments", 16, 19.2, 0.48, 2.88, 0.64, 0.64, ["shellfish"]),
  f("fish_sauce", "Fish sauce", "condiments", 18, 6.3, 0.91, 0.66, 0, 0.16, ["fish"]),
  f("oyster_sauce", "Oyster sauce", "condiments", 16, 8.16, 0.22, 1.74, 0.04, 0.05, ["shellfish", "soy", "wheat"]),
  f("red_wine_vinegar", "Red wine vinegar", "condiments", 15, 2.85, 0.01, 0.04, 0, 0),
  f("rice_vinegar", "Rice vinegar", "condiments", 15, 2.7, 0, 0.14, 0, 0),
  f("sriracha", "Sriracha", "condiments", 5, 4.65, 0.1, 0.95, 0.05, 0.11),
  f("tzatziki", "Tzatziki", "condiments", 30, 30, 0.75, 1.05, 2.4, 0.09, ["milk"]),
  f("white_vinegar", "Vinegar, white", "condiments", 15, 2.7, 0, 0.01, 0, 0),
  f("worcestershire_sauce", "Worcestershire sauce", "condiments", 17, 13.26, 0, 3.31, 0, 0.15, ["fish"]),
  f("egg_whole_raw", "Egg, whole, raw", "dairy", 50, 71.5, 6.3, 0.36, 4.75, 0, ["egg"]),
  f("heavy_cream", "Cream, heavy whipping", "dairy", 15, 51, 0.43, 0.43, 5.42, 0, ["milk"]),
  f("mozzarella", "Cheese, mozzarella, whole milk", "dairy", 28, 84, 6.22, 0.62, 6.27, 0, ["milk"]),
  f("ricotta_partskim", "Cheese, ricotta, part-skim", "dairy", 124, 171.12, 14.14, 6.32, 9.8, 0, ["milk"]),
  f("cashews", "Cashews, raw", "fats", 28, 154.84, 5.1, 8.46, 12.26, 0.92, ["tree_nuts"]),
  f("tahini", "Tahini (sesame paste)", "fats", 15, 89.25, 2.55, 3.18, 8.07, 1.4, ["sesame"]),
  f("walnuts", "Walnuts, English", "fats", 28, 183.12, 4.26, 3.84, 18.26, 1.88, ["tree_nuts"]),
  f("basmati_rice_cooked", "Rice, basmati, cooked", "grains", 163, 197.23, 5.71, 41.08, 0.65, 1.14),
  f("couscous_cooked", "Couscous, cooked", "grains", 157, 175.84, 5.95, 36.42, 0.25, 2.2, ["wheat"]),
  f("rice_brown_cooked", "Rice, brown, cooked", "grains", 195, 239.85, 5.34, 49.92, 1.89, 3.12),
  f("basil_fresh", "Basil, fresh", "herbs", 2.5, 0.57, 0.08, 0.07, 0.02, 0.04),
  f("garam_masala", "Garam masala", "herbs", 2, 7.58, 0.3, 0.9, 0.3, 0.5),
  f("parsley_fresh", "Parsley, fresh", "herbs", 3.8, 1.37, 0.11, 0.24, 0.03, 0.13),
  f("cornstarch", "Cornstarch", "pantry", 8, 30.48, 0.02, 7.3, 0, 0.07),
  f("ketchup", "Ketchup", "pantry", 17, 17.17, 0.18, 4.66, 0.02, 0.05),
  f("panko", "Panko breadcrumbs", "pantry", 25, 91.5, 3, 18, 1, 1, ["wheat"]),
  f("sugar_brown", "Sugar, brown, packed", "pantry", 220, 836, 0.26, 215.82, 0, 0),
  f("mashed_potatoes", "Mashed potatoes", "prepared", 210, 237.3, 3.99, 35.7, 8.82, 3.15, ["milk"]),
  f("asparagus_cooked", "Asparagus, cooked", "produce", 180, 39.6, 4.32, 7.4, 0.4, 3.6),
  f("bok_choy_raw", "Bok choy", "produce", 70, 9.1, 1.05, 1.53, 0.14, 0.7),
  f("capers", "Capers", "produce", 8.6, 1.98, 0.2, 0.42, 0.07, 0.28),
  f("celery_raw", "Celery", "produce", 40, 6.4, 0.28, 1.19, 0.07, 0.64),
  f("coleslaw_mix_raw", "Coleslaw mix (shredded)", "produce", 70, 17.5, 0.9, 4.06, 0.07, 1.75),
  f("kalamata_olives", "Kalamata olives", "produce", 20, 35, 0.24, 0.9, 3.4, 0.66),
  f("kale_cooked", "Kale, cooked", "produce", 130, 36.4, 2.47, 7.32, 0.52, 2.6),
  f("mushrooms_cooked", "Mushrooms, cooked", "produce", 156, 43.68, 3.39, 8.25, 0.73, 3.43),
  f("potato_boiled", "Potato, boiled", "produce", 156, 135.72, 2.92, 31.36, 0.16, 2.81),
  f("tomato_paste", "Tomato paste", "produce", 16, 13.12, 0.69, 3.02, 0.08, 0.66),
  f("beef_sirloin_cooked", "Beef sirloin steak, cooked", "protein", 85, 180.2, 24.48, 0, 8.24, 0),
  f("edamame_cooked", "Edamame, cooked", "protein", 155, 187.55, 18.45, 13.81, 8.06, 8.06, ["soy"]),
  f("flank_steak_cooked", "Beef flank steak, cooked", "protein", 85, 163.2, 23.46, 0, 6.97, 0),
  f("ground_pork_cooked", "Ground pork, cooked", "protein", 85, 252.45, 21.84, 0, 17.68, 0),
  f("miso", "Miso paste", "protein", 17, 33.66, 1.99, 4.32, 1.02, 0.92, ["soy"]),
  f("red_lentils_cooked", "Lentils, red, cooked", "protein", 200, 200, 15.2, 34, 0.8, 10),
  f("refried_beans", "Refried beans", "protein", 126, 113.4, 6.93, 19.03, 1.76, 6.43),
  // Added 2026-11-20 for the breakfasts, lunches and snacks. Copied from production the same day.
  f("bacon_cooked", "Bacon, cooked", "protein", 8, 43.28, 2.96, 0.11, 3.36, 0),
  f("flour_whole_wheat", "Flour, whole wheat", "pantry", 120, 408, 15.84, 86.4, 3, 12.84, ["wheat"]),
  f("maple_syrup", "Maple syrup, pure", "pantry", 20, 52, 0.01, 13.4, 0.01, 0),
  f("apple_raw", "Apple, with skin", "produce", 182, 94.64, 0.47, 25.12, 0.31, 4.37),
  f("caesar_dressing", "Caesar dressing", "condiments", 30, 162.6, 0.75, 1.08, 17.34, 0.12, ["egg", "fish", "milk"]),
  f("crouton", "Croutons", "grains", 8, 32.56, 0.95, 5.88, 0.53, 0.4, ["wheat"]),
  f("blue_cheese", "Cheese, blue", "dairy", 28, 98.84, 5.99, 0.66, 8.04, 0, ["milk"]),
  f("tortilla_chips", "Tortilla chips", "grains", 28, 136.92, 1.96, 17.78, 6.55, 1.29),
  f("cannellini_cooked", "White beans (cannellini), cooked", "protein", 179, 248.81, 17.42, 44.93, 0.63, 11.28),
  f("butternut_cooked", "Butternut squash, cooked", "produce", 205, 82, 1.84, 21.52, 0.18, 6.56),
  f("rice_cake", "Rice cake, plain", "snacks", 9, 34.83, 0.74, 7.33, 0.25, 0.38),
  f("chocolate_chips_semisweet", "Chocolate chips, semisweet", "pantry", 11, 52.69, 0.46, 6.94, 3.27, 0.65, ["soy"]),
  f("dates_deglet", "Dates, Deglet Noor", "produce", 7.1, 20.02, 0.17, 5.33, 0.03, 0.57),
  f("triscuit", "Woven wheat crackers (Triscuit-type)", "snacks", 28, 117.6, 2.52, 19.04, 3.92, 3.08, ["wheat"]),
  f("hash_browns", "Hash browns", "produce", 64, 169.6, 1.86, 22.4, 8.26, 2.05)
].map((x) => [x.id, x]));
var MAY_CONTAIN = {
  hamburger_bun: ["milk", "egg", "soy", "sesame"],
  bread_whole_wheat: ["milk", "soy", "sesame"],
  english_muffin: ["milk", "soy"],
  pita_bread: ["soy", "sesame"],
  flour_tortilla: ["soy"],
  corn_tortilla: ["wheat"],
  panko: ["milk", "soy"],
  egg_noodles_cooked: ["soy"],
  bbq_sauce: ["soy", "fish"],
  teriyaki_sauce: ["sesame"],
  marinara_sauce: ["milk"],
  pesto: ["peanuts"],
  mayonnaise: ["soy"],
  chicken_broth: ["soy"],
  vegetable_broth: ["soy"],
  turkey_deli: ["milk", "soy"],
  refried_beans: ["soy"],
  fish_sauce: ["shellfish"],
  curry_powder: ["wheat"],
  garam_masala: ["wheat"],
  miso: ["wheat"],
  tzatziki: ["egg"],
  hummus: ["soy"],
  oats_rolled_dry: ["wheat"],
  caesar_dressing: ["soy"],
  crouton: ["milk", "soy"],
  chocolate_chips_semisweet: ["milk"],
  triscuit: ["soy"],
  tortilla_chips: ["wheat"],
  rice_cake: ["soy", "sesame"],
  hash_browns: ["wheat"],
  bacon_cooked: []
};
for (const id of Object.keys(FOODS)) {
  const f2 = FOODS[id];
  f2.allergens = [.../* @__PURE__ */ new Set([...f2.allergens ?? [], ...MAY_CONTAIN[id] ?? []])];
}
var ALLERGENS_FILLED = Object.values(FOODS).filter((x) => x.allergens).map((x) => x.id);
function nutrientsOf(foodId, grams) {
  const r2 = FOODS[foodId];
  const k = grams / r2.serving_grams;
  return { kcal: r2.calories * k, protein: r2.protein_g * k, carbs: r2.carbs_g * k, fat: r2.fat_g * k, fiber: r2.fiber_g * k };
}
var addNutrients = (a, b) => ({ kcal: a.kcal + b.kcal, protein: a.protein + b.protein, carbs: a.carbs + b.carbs, fat: a.fat + b.fat, fiber: a.fiber + b.fiber });
var ZERO = { kcal: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
var UNITS = {
  corn_tortilla: { grams: 26, one: "tortilla", many: "tortillas" },
  flour_tortilla: { grams: 49, one: "tortilla", many: "tortillas" },
  bread_whole_wheat: { grams: 28, one: "slice", many: "slices" },
  egg_scrambled: { grams: 61, one: "egg", many: "eggs" },
  egg_hardboiled: { grams: 50, one: "egg", many: "eggs" },
  hamburger_bun: { grams: 52, one: "bun", many: "buns" },
  pita_bread: { grams: 60, one: "pita", many: "pitas" },
  english_muffin: { grams: 57, one: "muffin", many: "muffins" },
  rice_cake: { grams: 9, one: "rice cake", many: "rice cakes" },
  bacon_cooked: { grams: 8, one: "slice", many: "slices" },
  dates_deglet: { grams: 7.1, one: "date", many: "dates" }
};
var SHORT = {
  chicken_breast_cooked: "Chicken breast",
  chicken_thigh_cooked: "Chicken thigh",
  ground_beef_90_cooked: "Lean ground beef",
  ground_turkey_cooked: "Ground turkey",
  salmon_cooked: "Salmon",
  tuna_canned_water: "Tuna",
  shrimp_cooked: "Shrimp",
  tofu_firm: "Firm tofu",
  egg_scrambled: "Eggs",
  black_beans_cooked: "Black beans",
  kidney_beans_cooked: "Kidney beans",
  lentils_cooked: "Lentils",
  hummus: "Hummus",
  greek_yogurt_2pct: "Greek yogurt",
  greek_yogurt_nonfat: "Nonfat Greek yogurt",
  milk_2pct: "Milk",
  cheddar: "Cheddar",
  feta_cheese: "Feta",
  parmesan_grated: "Parmesan",
  sour_cream_light: "Light sour cream",
  butter_salted: "Butter",
  rice_white_cooked: "White rice",
  jasmine_rice_cooked: "Jasmine rice",
  spaghetti_cooked: "Spaghetti",
  oats_rolled_dry: "Rolled oats",
  bread_whole_wheat: "Whole-wheat bread",
  flour_tortilla: "Flour tortillas",
  corn_tortilla: "Corn tortillas",
  sweet_potato_baked: "Sweet potato",
  broccoli_cooked: "Broccoli",
  green_beans_cooked: "Green beans",
  bell_pepper_cooked: "Bell pepper",
  zucchini_cooked: "Zucchini",
  spinach_cooked: "Spinach",
  carrots_cooked: "Carrots",
  onion_raw: "Onion",
  garlic_raw: "Garlic",
  romaine_raw: "Romaine",
  tomato_raw: "Tomato",
  cucumber_raw: "Cucumber",
  corn_canned: "Corn",
  blueberry_raw: "Blueberries",
  strawberry_raw: "Strawberries",
  banana_raw: "Banana",
  lime_juice: "Lime juice",
  marinara_sauce: "Marinara",
  tomato_sauce: "Tomato sauce",
  salsa: "Salsa",
  soy_sauce: "Soy sauce",
  teriyaki_sauce: "Teriyaki sauce",
  chicken_broth: "Chicken broth",
  olive_oil: "Olive oil",
  sesame_oil: "Sesame oil",
  sesame_seeds: "Sesame seeds",
  peanut_butter: "Peanut butter",
  mayonnaise: "Mayo",
  honey: "Honey",
  chili_powder: "Chili powder",
  cumin_ground: "Cumin",
  pork_tenderloin_cooked: "Pork tenderloin",
  ground_chicken_cooked: "Ground chicken",
  cod_cooked: "Cod",
  turkey_deli: "Deli turkey",
  egg_hardboiled: "Hard-boiled eggs",
  chickpeas_cooked: "Chickpeas",
  cottage_cheese_2pct: "Cottage cheese",
  potato_baked: "Potatoes",
  quinoa_cooked: "Quinoa",
  pasta_cooked: "Pasta",
  egg_noodles_cooked: "Egg noodles",
  hamburger_bun: "Burger buns",
  pita_bread: "Pita",
  english_muffin: "English muffins",
  peas_cooked: "Peas",
  cabbage_raw: "Cabbage",
  cauliflower_cooked: "Cauliflower",
  scallion_raw: "Green onions",
  ginger_raw: "Ginger",
  avocado_raw: "Avocado",
  lemon_juice: "Lemon juice",
  coconut_milk_light: "Light coconut milk",
  pesto: "Pesto",
  bbq_sauce: "BBQ sauce",
  almonds: "Almonds",
  curry_powder: "Curry powder",
  vegetable_broth: "Vegetable broth",
  balsamic_vinegar: "Balsamic vinegar",
  curry_paste_red: "Red curry paste",
  fish_sauce: "Fish sauce",
  oyster_sauce: "Oyster sauce",
  red_wine_vinegar: "Red wine vinegar",
  rice_vinegar: "Rice vinegar",
  sriracha: "Sriracha",
  tzatziki: "Tzatziki",
  white_vinegar: "White vinegar",
  worcestershire_sauce: "Worcestershire sauce",
  egg_whole_raw: "Egg",
  heavy_cream: "Heavy cream",
  mozzarella: "Mozzarella",
  ricotta_partskim: "Ricotta",
  cashews: "Cashews",
  tahini: "Tahini",
  walnuts: "Walnuts",
  basmati_rice_cooked: "Basmati rice",
  couscous_cooked: "Couscous",
  rice_brown_cooked: "Brown rice",
  basil_fresh: "Basil",
  garam_masala: "Garam masala",
  parsley_fresh: "Parsley",
  cornstarch: "Cornstarch",
  ketchup: "Ketchup",
  panko: "Panko",
  sugar_brown: "Brown sugar",
  mashed_potatoes: "Mashed potato",
  asparagus_cooked: "Asparagus",
  bok_choy_raw: "Bok choy",
  capers: "Capers",
  celery_raw: "Celery",
  coleslaw_mix_raw: "Coleslaw mix",
  kalamata_olives: "Kalamata olives",
  kale_cooked: "Kale",
  mushrooms_cooked: "Mushrooms",
  potato_boiled: "Baby potatoes",
  tomato_paste: "Tomato paste",
  beef_sirloin_cooked: "Sirloin steak",
  edamame_cooked: "Edamame",
  flank_steak_cooked: "Flank steak",
  ground_pork_cooked: "Ground pork",
  miso: "Miso",
  red_lentils_cooked: "Red lentils",
  refried_beans: "Refried beans",
  bacon_cooked: "Bacon",
  flour_whole_wheat: "Whole-wheat flour",
  maple_syrup: "Maple syrup",
  apple_raw: "Apple",
  caesar_dressing: "Caesar dressing",
  crouton: "Croutons",
  blue_cheese: "Blue cheese",
  tortilla_chips: "Tortilla chips",
  cannellini_cooked: "Cannellini beans",
  butternut_cooked: "Butternut squash",
  rice_cake: "Rice cakes",
  chocolate_chips_semisweet: "Chocolate chips",
  dates_deglet: "Dates",
  triscuit: "Wheat crackers",
  hash_browns: "Hash browns"
};
var shortName = (id) => SHORT[id] ?? FOODS[id]?.name ?? id;

// features/menu/next/catalog/presentation.ts
var photo = (file) => file.startsWith("local:") ? file : `https://www.themealdb.com/images/media/meals/${file}.jpg/medium`;
var p = (file, level, { oven = false, onePan = false, kid = false, spicy = false, keeps = false, match = true } = {}) => ({ photo: photo(file), photoMatches: match, level, oven, onePan, kid, spicy, keeps });
var PRESENTATION = {
  // The 50 database dinners. `match: false` marks a photo that does not look like the dish.
  lemon_garlic_chicken: p("local:lemon_garlic_chicken", 1, { oven: true, kid: true, keeps: true }),
  chicken_souvlaki: p("3um6il1763794322", 1, { kid: true }),
  chicken_shawarma_bowl: p("local:chicken_shawarma_bowl", 2, { oven: true, keeps: true }),
  chicken_burrito_bowl: p("local:chicken_burrito_bowl", 1, { kid: true, keeps: true }),
  chicken_fajitas: p("local:chicken_fajitas", 1, { onePan: true, kid: true }),
  bbq_chicken_potato: p("a08uqk1761848682", 1, { oven: true, kid: true }),
  chicken_tikka_masala: p("wyxwsp1486979827", 2, { onePan: true, keeps: true }),
  butter_chicken: p("lqampv1762325397", 2, { onePan: true, kid: true, keeps: true }),
  chicken_piccata: p("local:chicken_piccata", 2),
  chicken_marsala: p("local:chicken_marsala", 2),
  creamy_pesto_chicken: p("local:creamy_pesto_chicken", 1, { onePan: true, kid: true, keeps: true }),
  caprese_chicken: p("local:caprese_chicken", 1, { oven: true, kid: true }),
  spinach_feta_chicken: p("local:spinach_feta_chicken", 2, { oven: true }),
  thai_basil_chicken: p("el64dy1763483009", 1, { onePan: true, spicy: true }),
  thai_peanut_chicken: p("1525872624", 1, { onePan: true, keeps: true }),
  chicken_adobo: p("sypxpx1515365095", 1, { onePan: true, keeps: true }),
  tahini_chicken_bowl: p("local:tahini_chicken_bowl", 1, { oven: true, keeps: true }),
  greek_chicken_quinoa_bowl: p("k29viq1585565980", 1, { keeps: true }),
  pesto_chicken_couscous: p("qxytrx1511304021", 1, { keeps: true }),
  turkey_stir_fry: p("kyuxew1763479470", 1, { onePan: true, kid: true, keeps: true }),
  beef_broccoli: p("m0p0j81765568742", 1, { onePan: true, kid: true }),
  chimichurri_steak: p("local:chimichurri_steak", 2, { oven: true }),
  bulgogi_beef: p("1529443236", 1, { onePan: true, kid: true }),
  southwest_steak_bowl: p("local:southwest_steak_bowl", 1, { keeps: true }),
  spaghetti_bolognese: p("sutysw1468247559", 1, { kid: true, keeps: true }),
  baked_ziti: p("local:baked_ziti", 2, { oven: true, kid: true, keeps: true }),
  beef_enchiladas: p("qtuwxu1468233098", 2, { oven: true, kid: true, keeps: true }),
  cottage_pie: p("pvfkz61761595976", 2, { oven: true, kid: true, keeps: true }),
  swedish_meatballs: p("local:swedish_meatballs", 2, { kid: true, keeps: true }),
  sloppy_joes: p("atd5sh1583188467", 1, { onePan: true, kid: true, keeps: true }),
  egg_roll_bowl: p("brmxra1782681940", 1, { onePan: true }),
  honey_garlic_pork: p("local:honey_garlic_pork", 2, { oven: true }),
  turkey_meatloaf: p("ypuxtw1511297463", 2, { oven: true, kid: true, keeps: true }),
  teriyaki_salmon_bowl: p("xxyupu1468262513", 1, { oven: true }),
  lemon_salmon_tray_bake: p("1548772327", 1, { oven: true, onePan: true }),
  honey_sriracha_salmon: p("local:honey_sriracha_salmon", 1, { oven: true, spicy: true }),
  miso_salmon: p("local:miso_salmon", 1, { oven: true }),
  greek_salmon_sheet_pan: p("local:greek_salmon_sheet_pan", 1, { oven: true, onePan: true }),
  baked_lemon_cod: p("local:baked_lemon_cod", 1, { oven: true }),
  fish_tacos: p("uvuyxu1503067369", 2, { oven: true, kid: true }),
  salmon_tacos: p("local:salmon_tacos", 2),
  shrimp_scampi_pasta: p("usywpp1511189717", 1),
  honey_garlic_shrimp: p("local:honey_garlic_shrimp", 1, { onePan: true }),
  red_lentil_dal: p("wuxrtu1483564410", 1, { onePan: true, keeps: true }),
  sweet_potato_black_bean_chili: p("wqurxy1511453156", 1, { onePan: true, keeps: true }),
  peanut_tofu_bowl: p("local:peanut_tofu_bowl", 2, { oven: true }),
  tofu_broccoli_stir_fry: p("minfsc1763766806", 1, { onePan: true }),
  lentil_bolognese: p("local:lentil_bolognese", 1, { keeps: true }),
  quinoa_stuffed_peppers: p("b66myb1683207208", 2, { oven: true, keeps: true }),
  sweet_potato_chickpea_bowl: p("local:sweet_potato_chickpea_bowl", 1, { oven: true, keeps: true }),
  // The mock's breakfast-only and lunch-only recipes, unchanged.
  chicken_hummus_wrap: p("swo87v1763595282", 1, { keeps: true }),
  tuna_sandwich: p("wooxjq1784663522", 1),
  overnight_oats: p("c400ok1764439058", 1, { kid: true, keeps: true }),
  eggs_toast_spinach: p("yvpuuy1511797244", 1, { onePan: true, kid: true }),
  yogurt_berry_bowl: p("rpvptu1511641092", 1, { kid: true }),
  turkey_avocado_sandwich: p("djdg8l1784578885", 1, { kid: true }),
  greek_chickpea_quinoa: p("k29viq1585565980", 1, { keeps: true }),
  egg_salad_pita: p("2dsltq1560461468", 1, { keeps: true }),
  cottage_berry_toast: p("1543774956", 1),
  egg_muffin_sandwich: p("utxryw1511721587", 1, { kid: true }),
  pb_banana_oats: p("sywswr1511383814", 1, { kid: true }),
  // Breakfasts, lunches and snacks from the recipe database (2026-11-20). Every photo is generated and bundled.
  sausage_egg_tacos: p("local:sausage_egg_tacos", 1, { kid: true }),
  black_bean_breakfast_burrito: p("local:black_bean_breakfast_burrito", 1),
  huevos_rancheros: p("local:huevos_rancheros", 1),
  sweet_potato_hash: p("local:sweet_potato_hash", 2, { onePan: true }),
  veggie_frittata_toast: p("local:veggie_frittata_toast", 2, { oven: true, keeps: true }),
  cottage_egg_bites: p("local:cottage_egg_bites", 1, { oven: true, kid: true, keeps: true }),
  tomato_feta_scramble: p("local:tomato_feta_scramble", 1, { onePan: true }),
  blueberry_pancakes: p("local:blueberry_pancakes", 2, { kid: true }),
  apple_baked_oatmeal: p("local:apple_baked_oatmeal", 1, { oven: true, kid: true, keeps: true }),
  chicken_caesar_wrap: p("local:chicken_caesar_wrap", 1, { kid: true }),
  chicken_salad_sandwich: p("local:chicken_salad_sandwich", 1, { kid: true, keeps: true }),
  avocado_tuna_sandwich: p("local:avocado_tuna_sandwich", 1),
  cobb_salad: p("local:cobb_salad", 2),
  taco_salad: p("local:taco_salad", 1, { kid: true }),
  chicken_caprese_salad: p("local:chicken_caprese_salad", 1),
  salmon_avocado_salad: p("local:salmon_avocado_salad", 1, { oven: true }),
  chickpea_salad_pita: p("local:chickpea_salad_pita", 1, { keeps: true }),
  edamame_quinoa_salad: p("local:edamame_quinoa_salad", 1, { keeps: true }),
  chicken_noodle_soup: p("local:chicken_noodle_soup", 2, { onePan: true, kid: true, keeps: true }),
  minestrone: p("local:minestrone", 2, { onePan: true, keeps: true }),
  lentil_soup: p("local:lentil_soup", 1, { onePan: true, keeps: true }),
  hummus_carrots_pita: p("local:hummus_carrots_pita", 1, { kid: true }),
  guacamole_chips: p("local:guacamole_chips", 1),
  cottage_ranch_veg: p("local:cottage_ranch_veg", 1),
  rice_cakes_pb_banana: p("local:rice_cakes_pb_banana", 1, { kid: true }),
  pb_energy_balls: p("local:pb_energy_balls", 1, { kid: true, keeps: true }),
  deviled_eggs: p("local:deviled_eggs", 1, { keeps: true }),
  avocado_toast: p("local:avocado_toast", 1),
  roasted_chickpeas: p("local:roasted_chickpeas", 1, { oven: true }),
  granola_bars: p("local:granola_bars", 1, { kid: true, keeps: true }),
  tzatziki_veg: p("local:tzatziki_veg", 1),
  apple_peanut_butter: p("local:apple_peanut_butter", 1, { kid: true }),
  yogurt_berries: p("local:yogurt_berries", 1, { kid: true }),
  cheese_crackers: p("local:cheese_crackers", 1, { kid: true }),
  hard_boiled_eggs: p("local:hard_boiled_eggs", 1, { keeps: true }),
  almonds_handful: p("local:almonds_handful", 1, { keeps: true })
};

// features/menu/catalog/recipes.ts
var RANGE = {
  protein: [1 / 3, 2.5],
  carb: [0, 2.5],
  veg: [0.7, 1.3],
  fat: [0.5, 2.5],
  fixed: [0.9, 1.1]
};
var line = (role) => (food, grams) => {
  const [lo, hi] = RANGE[role];
  return { food, grams, role, min: Math.round(grams * lo), max: Math.round(grams * hi) };
};
var P = line("protein");
var C = line("carb");
var V = line("veg");
var F = line("fat");
var X = line("fixed");
var r = (id, source, name, description, cuisine, minutes, components, pantry = []) => ({ id, source, name, description, cuisine, minutes, components, pantry });
var SP = ["salt", "black pepper"];
var MENU_RECIPES = [
  // ---- Chicken
  r(
    "lemon_garlic_chicken",
    "rcp_767bd09fb3",
    "Lemon garlic chicken, rice & broccoli",
    "Roast chicken breast with lemon and garlic over rice, with broccoli.",
    "American",
    35,
    [P("chicken_breast_cooked", 150), C("rice_white_cooked", 180), V("broccoli_cooked", 120), F("olive_oil", 9), X("garlic_raw", 6), X("lemon_juice", 15)],
    [...SP, "dried oregano", "parsley"]
  ),
  r(
    "chicken_souvlaki",
    "rcp_31d5df29fd",
    "Chicken souvlaki, rice & Greek salad",
    "Oregano-lemon chicken with rice, cucumber and tomato, and tzatziki.",
    "Greek",
    30,
    [P("chicken_breast_cooked", 150), C("rice_white_cooked", 170), V("cucumber_raw", 80), V("tomato_raw", 80), F("olive_oil", 9), X("tzatziki", 45), X("lemon_juice", 10)],
    [...SP, "dried oregano", "paprika", "garlic"]
  ),
  r(
    "chicken_shawarma_bowl",
    "rcp_e6cddd63e2",
    "Chicken shawarma bowl",
    "Spiced chicken thighs over jasmine rice with cucumber, tomato and hummus.",
    "Middle Eastern",
    50,
    [P("chicken_thigh_cooked", 140), C("jasmine_rice_cooked", 170), V("cucumber_raw", 70), V("tomato_raw", 70), F("hummus", 30), F("feta_cheese", 15), F("olive_oil", 5), X("lemon_juice", 10)],
    [...SP, "ground cumin", "paprika", "turmeric", "garlic"]
  ),
  r(
    "chicken_burrito_bowl",
    "rcp_1ba87e6588",
    "Chicken burrito bowl",
    "Chipotle chicken over rice with black beans, lettuce, salsa and cheese.",
    "Mexican",
    40,
    [P("chicken_thigh_cooked", 130), C("rice_white_cooked", 150), V("black_beans_cooked", 80), V("romaine_raw", 40), F("cheddar", 20), F("avocado_raw", 40), X("salsa", 60), X("lime_juice", 10)],
    [...SP, "chili powder", "ground cumin", "chipotle in adobo"]
  ),
  r(
    "chicken_fajitas",
    "rcp_93d5241110",
    "Chicken fajitas",
    "Lime-cumin chicken with peppers and onion in warm tortillas.",
    "Mexican",
    35,
    [P("chicken_breast_cooked", 140), C("flour_tortilla", 98), V("bell_pepper_cooked", 100), V("onion_raw", 50), F("cheddar", 20), F("olive_oil", 7), X("lime_juice", 10)],
    [...SP, "ground cumin", "garlic powder"]
  ),
  r(
    "bbq_chicken_potato",
    "rcp_293874cdf6",
    "BBQ chicken, baked potato & green beans",
    "Oven-baked BBQ chicken thighs with a baked potato and green beans.",
    "American",
    60,
    [P("chicken_thigh_cooked", 150), C("potato_baked", 200), V("green_beans_cooked", 120), F("butter_salted", 7), X("bbq_sauce", 35)],
    SP
  ),
  r(
    "chicken_tikka_masala",
    "rcp_7ff1b0e6d6",
    "Chicken tikka masala & rice",
    "Yogurt-marinated chicken in a creamy tomato sauce over basmati, with spinach.",
    "Indian",
    60,
    [P("chicken_thigh_cooked", 140), C("basmati_rice_cooked", 170), V("spinach_cooked", 80), F("heavy_cream", 25), F("olive_oil", 5), X("tomato_sauce", 120), X("greek_yogurt_2pct", 30), X("onion_raw", 40), X("garam_masala", 3)],
    ["salt", "turmeric", "ground cumin", "ground coriander", "ginger-garlic paste"]
  ),
  r(
    "butter_chicken",
    "rcp_c4bd14a81e",
    "Butter chicken & rice",
    "Chicken in a mild buttery tomato sauce over basmati, with peas.",
    "Indian",
    45,
    [P("chicken_breast_cooked", 140), C("basmati_rice_cooked", 170), V("peas_cooked", 80), F("butter_salted", 10), F("heavy_cream", 25), X("tomato_sauce", 120), X("greek_yogurt_2pct", 30), X("onion_raw", 40), X("garam_masala", 3)],
    ["salt", "turmeric", "ground cumin", "chili powder", "ginger-garlic paste"]
  ),
  r(
    "chicken_piccata",
    "rcp_f55d253e27",
    "Chicken piccata, pasta & asparagus",
    "Pan-fried chicken cutlets in a lemon-caper butter sauce with pasta and asparagus.",
    "Italian",
    40,
    [P("chicken_breast_cooked", 150), C("pasta_cooked", 160), V("asparagus_cooked", 110), F("butter_salted", 10), F("olive_oil", 7), X("lemon_juice", 20), X("capers", 9), X("chicken_broth", 60)],
    [...SP, "flour", "dry white wine", "garlic", "parsley"]
  ),
  r(
    "chicken_marsala",
    "rcp_50cd773bca",
    "Chicken marsala, mash & green beans",
    "Chicken in a mushroom marsala sauce with mashed potato and green beans.",
    "Italian",
    30,
    [P("chicken_breast_cooked", 150), C("mashed_potatoes", 190), V("green_beans_cooked", 100), V("mushrooms_cooked", 70), F("olive_oil", 7), F("heavy_cream", 20), X("chicken_broth", 60)],
    [...SP, "flour", "dry marsala wine", "shallot", "garlic", "parsley"]
  ),
  r(
    "creamy_pesto_chicken",
    "rcp_ef0f2964d5",
    "Creamy pesto chicken & pasta",
    "Chicken and tomatoes in a creamy basil pesto sauce over penne.",
    "Italian",
    35,
    [P("chicken_breast_cooked", 140), C("pasta_cooked", 170), V("tomato_raw", 100), F("pesto", 20), F("heavy_cream", 20), F("olive_oil", 4), X("garlic_raw", 5)],
    SP
  ),
  r(
    "caprese_chicken",
    "rcp_86e14bf603",
    "Caprese chicken & roast potatoes",
    "Chicken thighs baked under mozzarella, tomato and basil, with roast potatoes.",
    "Italian",
    40,
    [P("chicken_thigh_cooked", 150), C("potato_baked", 190), V("tomato_raw", 100), V("romaine_raw", 40), F("mozzarella", 30), F("olive_oil", 9), X("basil_fresh", 3)],
    [...SP, "balsamic vinegar"]
  ),
  r(
    "spinach_feta_chicken",
    "rcp_1ff2fc53f0",
    "Spinach & feta stuffed chicken, rice",
    "Chicken breast stuffed with spinach, feta and ricotta, served with rice.",
    "Greek",
    40,
    [P("chicken_breast_cooked", 150), C("rice_white_cooked", 180), V("spinach_cooked", 90), F("feta_cheese", 20), F("ricotta_partskim", 30), F("olive_oil", 7), X("garlic_raw", 5)],
    [...SP, "paprika", "dried oregano", "dried dill", "scallions"]
  ),
  r(
    "thai_basil_chicken",
    "rcp_fee34b4f12",
    "Thai basil chicken & jasmine rice",
    "Ground chicken stir-fried with garlic and basil over jasmine rice, with green beans.",
    "Thai",
    15,
    [P("ground_chicken_cooked", 140), C("jasmine_rice_cooked", 180), V("green_beans_cooked", 110), F("olive_oil", 7), X("soy_sauce", 15), X("fish_sauce", 9), X("garlic_raw", 8), X("basil_fresh", 8)],
    ["sugar", "shallot", "chilies (optional)"]
  ),
  r(
    "thai_peanut_chicken",
    "rcp_8995d90290",
    "Thai peanut chicken stir-fry & rice",
    "Chicken, broccoli and peppers in a peanut sauce over rice.",
    "Thai",
    20,
    [P("chicken_breast_cooked", 130), C("jasmine_rice_cooked", 160), V("broccoli_cooked", 80), V("bell_pepper_cooked", 60), F("peanut_butter", 20), F("olive_oil", 4), X("soy_sauce", 12), X("honey", 7), X("curry_paste_red", 8), X("rice_vinegar", 5)],
    ["fresh ginger", "garlic"]
  ),
  r(
    "chicken_adobo",
    "rcp_5062e701ce",
    "Chicken adobo, rice & bok choy",
    "Chicken thighs braised in soy, vinegar and garlic over rice, with bok choy.",
    "Filipino",
    45,
    [P("chicken_thigh_cooked", 150), C("rice_white_cooked", 180), V("bok_choy_raw", 120), F("olive_oil", 5), X("soy_sauce", 25), X("white_vinegar", 20), X("garlic_raw", 8), X("onion_raw", 30), X("sugar_brown", 5)],
    ["bay leaves", "black peppercorns"]
  ),
  r(
    "tahini_chicken_bowl",
    "rcp_fae98a997b",
    "Tahini chicken bowl",
    "Za'atar chicken thighs with roast zucchini and broccoli over rice, with tahini sauce.",
    "Middle Eastern",
    30,
    [P("chicken_thigh_cooked", 140), C("rice_white_cooked", 160), V("zucchini_cooked", 80), V("broccoli_cooked", 80), F("tahini", 15), F("olive_oil", 7), X("lemon_juice", 15), X("garlic_raw", 5)],
    ["salt", "za'atar"]
  ),
  r(
    "greek_chicken_quinoa_bowl",
    "rcp_b47b69e302",
    "Greek chicken quinoa bowl",
    "Lemon-oregano chicken over quinoa with cucumber, tomato, feta and olives.",
    "Greek",
    30,
    [P("chicken_breast_cooked", 150), C("quinoa_cooked", 170), V("cucumber_raw", 80), V("tomato_raw", 80), F("feta_cheese", 25), F("kalamata_olives", 20), F("olive_oil", 9), X("lemon_juice", 15), X("honey", 4)],
    [...SP, "dried oregano", "red onion"]
  ),
  r(
    "pesto_chicken_couscous",
    "rcp_49a4c87de3",
    "Pesto chicken couscous bowl",
    "Grilled chicken over couscous with zucchini, tomato and pesto.",
    "Mediterranean",
    35,
    [P("chicken_breast_cooked", 150), C("couscous_cooked", 170), V("zucchini_cooked", 90), V("tomato_raw", 80), F("pesto", 20), F("parmesan_grated", 8), F("olive_oil", 5)],
    SP
  ),
  r(
    "turkey_stir_fry",
    "rcp_7c85ce2413",
    "Ground turkey stir-fry & rice",
    "Ground turkey with zucchini, carrot and pepper in a ginger-soy sauce over rice.",
    "Asian",
    30,
    [P("ground_turkey_cooked", 140), C("rice_white_cooked", 180), V("zucchini_cooked", 70), V("bell_pepper_cooked", 60), F("sesame_oil", 5), X("soy_sauce", 18), X("carrots_cooked", 40), X("sugar_brown", 5), X("rice_vinegar", 5), X("cornstarch", 3)],
    ["fresh ginger", "sriracha (optional)"]
  ),
  // ---- Beef, pork & turkey
  r(
    "beef_broccoli",
    "rcp_15efb239b2",
    "Beef & broccoli, rice",
    "Sliced flank steak and broccoli in a soy-oyster sauce over rice.",
    "Chinese",
    30,
    [P("flank_steak_cooked", 130), C("rice_white_cooked", 180), V("broccoli_cooked", 130), F("olive_oil", 7), F("sesame_oil", 3), X("soy_sauce", 15), X("oyster_sauce", 12), X("garlic_raw", 6), X("ginger_raw", 4), X("cornstarch", 4)],
    ["rice vinegar"]
  ),
  r(
    "chimichurri_steak",
    "rcp_034da6edc4",
    "Chimichurri steak, potatoes & asparagus",
    "Seared flank steak with parsley-garlic chimichurri, roast potatoes and asparagus.",
    "Argentinian",
    25,
    [P("flank_steak_cooked", 140), C("potato_baked", 190), V("asparagus_cooked", 120), F("olive_oil", 14), X("parsley_fresh", 8), X("garlic_raw", 5), X("red_wine_vinegar", 8)],
    [...SP, "dried oregano", "red pepper flakes"]
  ),
  r(
    "bulgogi_beef",
    "rcp_26f293f5b7",
    "Bulgogi beef, rice & cucumber",
    "Thin-sliced sirloin in a sweet soy marinade over rice, with cucumber.",
    "Korean",
    20,
    [P("beef_sirloin_cooked", 130), C("rice_white_cooked", 180), V("cucumber_raw", 90), V("carrots_cooked", 50), F("sesame_oil", 6), X("soy_sauce", 20), X("sugar_brown", 8), X("onion_raw", 30), X("garlic_raw", 5), X("sesame_seeds", 3)],
    ["fresh ginger", "scallions", "black pepper"]
  ),
  r(
    "southwest_steak_bowl",
    "rcp_3d844f427a",
    "Southwest steak bowl",
    "Chili-lime flank steak over rice with black beans, corn, lettuce and avocado.",
    "Mexican",
    20,
    [P("flank_steak_cooked", 120), C("rice_white_cooked", 140), V("black_beans_cooked", 80), V("romaine_raw", 50), F("avocado_raw", 50), F("sour_cream_light", 20), X("corn_canned", 50), X("tomato_raw", 50), X("lime_juice", 10)],
    ["salt", "chili powder", "ground cumin"]
  ),
  r(
    "spaghetti_bolognese",
    "rcp_ddcffb2755",
    "Spaghetti bolognese",
    "Lean beef simmered in tomato sauce over spaghetti, with a side salad.",
    "Italian",
    40,
    [P("ground_beef_90_cooked", 120), C("spaghetti_cooked", 200), V("romaine_raw", 60), F("parmesan_grated", 10), F("olive_oil", 9), X("tomato_sauce", 150), X("onion_raw", 40), X("garlic_raw", 6), X("tomato_paste", 10)],
    [...SP, "dried thyme", "bay leaf", "red wine (optional)"]
  ),
  r(
    "baked_ziti",
    "rcp_64837848df",
    "Baked ziti",
    "Pasta baked with beef, tomato sauce, ricotta and mozzarella, with a side salad.",
    "Italian",
    70,
    [P("ground_beef_90_cooked", 100), C("pasta_cooked", 180), V("romaine_raw", 60), F("ricotta_partskim", 50), F("mozzarella", 30), F("olive_oil", 7), X("tomato_sauce", 140), X("onion_raw", 30), X("garlic_raw", 5)],
    [...SP, "dried basil", "dried oregano"]
  ),
  r(
    "beef_enchiladas",
    "rcp_48019e5d36",
    "Beef enchiladas",
    "Beef and bean enchiladas baked in red sauce under cheese, with a side salad.",
    "Mexican",
    45,
    [P("ground_beef_90_cooked", 100), C("flour_tortilla", 98), V("romaine_raw", 60), F("cheddar", 28), F("olive_oil", 5), X("refried_beans", 60), X("tomato_sauce", 100), X("onion_raw", 30), X("garlic_raw", 5)],
    ["salt", "ground cumin", "paprika", "dried oregano", "cilantro"]
  ),
  r(
    "cottage_pie",
    "rcp_fb46626063",
    "Cottage pie",
    "Beef and vegetables in gravy under a mashed potato top, with peas.",
    "British",
    90,
    [P("ground_beef_90_cooked", 120), C("mashed_potatoes", 220), V("peas_cooked", 80), V("carrots_cooked", 50), F("olive_oil", 5), F("parmesan_grated", 6), X("onion_raw", 40), X("celery_raw", 25), X("tomato_paste", 10), X("worcestershire_sauce", 6)],
    [...SP, "flour", "beef stock", "dried thyme", "bay leaf", "garlic"]
  ),
  r(
    "swedish_meatballs",
    "rcp_c993735468",
    "Swedish meatballs, mash & green beans",
    "Beef meatballs in cream gravy with mashed potato and green beans.",
    "Swedish",
    50,
    [P("ground_beef_90_cooked", 120), C("mashed_potatoes", 200), V("green_beans_cooked", 110), F("heavy_cream", 25), F("butter_salted", 5), X("panko", 10), X("egg_whole_raw", 12), X("onion_raw", 20)],
    [...SP, "ground nutmeg", "allspice", "flour", "beef broth"]
  ),
  r(
    "sloppy_joes",
    "rcp_0f9f2f0962",
    "Sloppy joes & slaw",
    "Saucy ground beef on a soft roll with coleslaw.",
    "American",
    50,
    [P("ground_beef_90_cooked", 120), C("hamburger_bun", 52), V("coleslaw_mix_raw", 90), F("mayonnaise", 12), F("butter_salted", 4), X("tomato_sauce", 90), X("ketchup", 20), X("onion_raw", 35), X("bell_pepper_cooked", 35), X("sugar_brown", 5), X("worcestershire_sauce", 6)],
    ["black pepper", "Dijon mustard", "garlic", "cider vinegar"]
  ),
  r(
    "egg_roll_bowl",
    "rcp_c9a4319d4e",
    "Egg roll in a bowl",
    "Ground beef and cabbage stir-fried with ginger and soy, over rice.",
    "Asian",
    15,
    [P("ground_beef_90_cooked", 130), C("rice_white_cooked", 150), V("coleslaw_mix_raw", 160), F("sesame_oil", 7), X("soy_sauce", 18), X("egg_whole_raw", 25), X("garlic_raw", 5), X("scallion_raw", 10)],
    ["ground ginger", "sriracha (optional)"]
  ),
  r(
    "honey_garlic_pork",
    "rcp_fc7c7ad84a",
    "Honey garlic pork, sweet potato & green beans",
    "Pork tenderloin in honey-garlic sauce with baked sweet potato and green beans.",
    "American",
    35,
    [P("pork_tenderloin_cooked", 150), C("sweet_potato_baked", 200), V("green_beans_cooked", 120), F("olive_oil", 9), X("honey", 15), X("soy_sauce", 12), X("garlic_raw", 8)],
    [...SP, "paprika", "garlic powder", "cider vinegar"]
  ),
  r(
    "turkey_meatloaf",
    "rcp_3d547b496c",
    "Turkey meatloaf, mash & green beans",
    "Lean turkey meatloaf with a ketchup glaze, mashed potato and green beans.",
    "American",
    65,
    [P("ground_turkey_cooked", 150), C("mashed_potatoes", 200), V("green_beans_cooked", 120), F("olive_oil", 5), X("ketchup", 25), X("panko", 12), X("egg_whole_raw", 12), X("onion_raw", 25), X("worcestershire_sauce", 5)],
    ["salt", "dried marjoram"]
  ),
  // ---- Fish & shrimp
  r(
    "teriyaki_salmon_bowl",
    "rcp_342296b382",
    "Teriyaki salmon bowl",
    "Glazed salmon over rice with edamame, cucumber and avocado.",
    "Japanese",
    25,
    [P("salmon_cooked", 130), C("rice_white_cooked", 170), V("edamame_cooked", 50), V("cucumber_raw", 70), F("avocado_raw", 40), F("sesame_oil", 3), X("teriyaki_sauce", 25), X("carrots_cooked", 30)],
    ["garlic", "ground ginger", "rice vinegar"]
  ),
  r(
    "lemon_salmon_tray_bake",
    "rcp_394c0cc80e",
    "Lemon garlic salmon tray bake",
    "Salmon, baby potatoes, asparagus and tomatoes roasted on one tray.",
    "American",
    25,
    [P("salmon_cooked", 140), C("potato_boiled", 190), V("asparagus_cooked", 100), V("tomato_raw", 70), F("olive_oil", 9), F("parmesan_grated", 6), X("lemon_juice", 15), X("garlic_raw", 5)],
    [...SP, "Dijon mustard"]
  ),
  r(
    "honey_sriracha_salmon",
    "rcp_ef2d480fa9",
    "Honey sriracha salmon rice bowl",
    "Sweet-hot roasted salmon over brown rice with cucumber and avocado.",
    "Asian",
    30,
    [P("salmon_cooked", 130), C("rice_brown_cooked", 170), V("cucumber_raw", 90), F("avocado_raw", 40), F("sesame_oil", 3), X("honey", 12), X("sriracha", 8), X("soy_sauce", 12), X("rice_vinegar", 8)],
    ["fresh ginger", "salt"]
  ),
  r(
    "miso_salmon",
    "rcp_e480b0127e",
    "Miso salmon, rice & bok choy",
    "Miso-glazed salmon with rice and bok choy.",
    "Japanese",
    25,
    [P("salmon_cooked", 140), C("rice_white_cooked", 180), V("bok_choy_raw", 130), F("sesame_oil", 4), X("miso", 17), X("soy_sauce", 8), X("honey", 6), X("sesame_seeds", 3)],
    ["mirin", "scallions"]
  ),
  r(
    "greek_salmon_sheet_pan",
    "rcp_63ee99313c",
    "Sheet-pan Greek salmon",
    "Salmon roasted with baby potatoes, zucchini and tomatoes, finished with feta.",
    "Greek",
    45,
    [P("salmon_cooked", 140), C("potato_boiled", 180), V("zucchini_cooked", 80), V("tomato_raw", 70), F("feta_cheese", 20), F("olive_oil", 9), F("kalamata_olives", 15), X("lemon_juice", 15), X("garlic_raw", 5)],
    [...SP, "dried oregano", "dried thyme", "fresh dill", "Dijon mustard", "red onion"]
  ),
  r(
    "baked_lemon_cod",
    "rcp_bec11c2781",
    "Baked lemon cod, potatoes & green beans",
    "Cod baked with lemon, garlic and butter, with roast potatoes and green beans.",
    "Mediterranean",
    22,
    [P("cod_cooked", 170), C("potato_baked", 210), V("green_beans_cooked", 120), F("olive_oil", 9), F("butter_salted", 8), X("lemon_juice", 20), X("garlic_raw", 6), X("parsley_fresh", 5)],
    [...SP, "flour", "ground coriander", "paprika", "ground cumin"]
  ),
  r(
    "fish_tacos",
    "rcp_c0a79c9e2a",
    "Fish tacos",
    "Crisp baked cod in corn tortillas with cabbage and a lime crema.",
    "Mexican",
    30,
    [P("cod_cooked", 140), C("corn_tortilla", 78), V("cabbage_raw", 80), F("avocado_raw", 40), F("sour_cream_light", 25), F("olive_oil", 5), X("panko", 18), X("egg_whole_raw", 12), X("lime_juice", 10)],
    ["smoked paprika", "garlic powder", "black pepper"]
  ),
  r(
    "salmon_tacos",
    "rcp_e9bd0c8c33",
    "Salmon tacos with avocado crema",
    "Spice-rubbed salmon in tortillas with cabbage and avocado crema.",
    "Mexican",
    40,
    [P("salmon_cooked", 120), C("corn_tortilla", 78), V("cabbage_raw", 80), F("avocado_raw", 45), F("sour_cream_light", 20), F("olive_oil", 4), X("lime_juice", 10), X("onion_raw", 15), X("sugar_brown", 3)],
    ["smoked paprika", "garlic powder", "cider vinegar", "jalapeno (optional)"]
  ),
  r(
    "shrimp_scampi_pasta",
    "rcp_ac61c68ff0",
    "Shrimp scampi pasta",
    "Garlic-lemon shrimp tossed with linguine, with broccoli.",
    "Italian",
    30,
    [P("shrimp_cooked", 150), C("pasta_cooked", 190), V("broccoli_cooked", 110), F("butter_salted", 8), F("olive_oil", 9), F("parmesan_grated", 8), X("garlic_raw", 8), X("lemon_juice", 15), X("parsley_fresh", 5)],
    ["dry white wine", "red pepper flakes"]
  ),
  r(
    "honey_garlic_shrimp",
    "rcp_2dfab78e77",
    "Honey garlic shrimp stir-fry & rice",
    "Shrimp and asparagus in a honey-garlic soy sauce over rice.",
    "Asian",
    15,
    [P("shrimp_cooked", 160), C("rice_white_cooked", 190), V("asparagus_cooked", 120), F("olive_oil", 9), X("honey", 15), X("soy_sauce", 15), X("garlic_raw", 6), X("ginger_raw", 4), X("cornstarch", 3), X("rice_vinegar", 5)]
  ),
  // ---- Meatless
  r(
    "red_lentil_dal",
    "rcp_3eb1b79d27",
    "Red lentil dal & rice",
    "Red lentils simmered with tomato and coconut milk over basmati, with spinach.",
    "Indian",
    30,
    [P("red_lentils_cooked", 200), C("basmati_rice_cooked", 150), V("spinach_cooked", 80), F("coconut_milk_light", 60), F("olive_oil", 7), X("tomato_sauce", 80), X("onion_raw", 40), X("garlic_raw", 5), X("ginger_raw", 4), X("curry_powder", 3)],
    ["salt", "turmeric", "ground coriander", "cinnamon"]
  ),
  r(
    "sweet_potato_black_bean_chili",
    "rcp_f00f35aa84",
    "Sweet potato & black bean chili",
    "A smoky chili of black beans, sweet potato and peppers.",
    "American",
    40,
    [P("black_beans_cooked", 220), C("sweet_potato_baked", 140), V("bell_pepper_cooked", 70), F("olive_oil", 7), X("greek_yogurt_2pct", 50), X("tomato_sauce", 150), X("onion_raw", 40), X("garlic_raw", 5), X("tomato_paste", 10), X("chili_powder", 3), X("cumin_ground", 2)],
    ["salt", "dried oregano", "smoked paprika", "vegetable stock"]
  ),
  r(
    "peanut_tofu_bowl",
    "rcp_72972d185b",
    "Peanut tofu bowl",
    "Crisp baked tofu over rice with peppers, kale and peanut sauce.",
    "Asian",
    45,
    [P("tofu_firm", 170), C("rice_white_cooked", 170), V("bell_pepper_cooked", 70), V("kale_cooked", 60), F("peanut_butter", 20), F("avocado_raw", 35), F("sesame_oil", 3), X("soy_sauce", 15), X("honey", 6), X("cornstarch", 5), X("panko", 10)],
    ["scallions"]
  ),
  r(
    "tofu_broccoli_stir_fry",
    "rcp_8605b05d6e",
    "Tofu & broccoli stir-fry, rice",
    "Crisp tofu and broccoli in a ginger-garlic soy sauce over rice, with cashews.",
    "Chinese",
    30,
    [P("tofu_firm", 180), C("rice_white_cooked", 180), V("broccoli_cooked", 140), F("cashews", 15), F("olive_oil", 7), F("sesame_oil", 3), X("soy_sauce", 18), X("garlic_raw", 6), X("ginger_raw", 4), X("cornstarch", 5), X("sugar_brown", 4), X("rice_vinegar", 5)],
    ["salt", "white pepper"]
  ),
  r(
    "lentil_bolognese",
    "rcp_a9228fbe47",
    "Lentil bolognese",
    "Red lentils and walnuts in a rich tomato sauce over pasta, with a side salad.",
    "Italian",
    55,
    [P("red_lentils_cooked", 170), C("pasta_cooked", 170), V("romaine_raw", 60), F("walnuts", 15), F("olive_oil", 9), X("tomato_sauce", 150), X("onion_raw", 40), X("garlic_raw", 6), X("tomato_paste", 10), X("balsamic_vinegar", 5)],
    ["salt", "dried oregano", "dried thyme", "vegetable broth"]
  ),
  r(
    "quinoa_stuffed_peppers",
    "rcp_e4856603d4",
    "Quinoa stuffed peppers",
    "Peppers stuffed with quinoa, black beans and corn under cheddar.",
    "Mexican",
    50,
    [P("black_beans_cooked", 130), C("quinoa_cooked", 150), V("bell_pepper_cooked", 180), F("cheddar", 30), F("avocado_raw", 40), X("corn_canned", 50), X("greek_yogurt_2pct", 30), X("lime_juice", 10), X("chili_powder", 2), X("cumin_ground", 2)],
    [...SP, "garlic powder", "cilantro"]
  ),
  r(
    "sweet_potato_chickpea_bowl",
    "rcp_31c9bd55be",
    "Sweet potato chickpea bowl",
    "Roast sweet potato, chickpeas, broccoli and kale with a tahini sauce.",
    "Mediterranean",
    30,
    [P("chickpeas_cooked", 200), C("sweet_potato_baked", 150), V("broccoli_cooked", 90), V("kale_cooked", 60), F("tahini", 20), F("olive_oil", 9), X("lemon_juice", 15), X("onion_raw", 30), X("honey", 5)],
    ["salt", "ground cumin", "chili powder", "garlic powder"]
  )
];

// features/menu/catalog/steps.ts
var MENU_STEPS = {
  lemon_garlic_chicken: ["Toss the chicken with olive oil, garlic, lemon, oregano, salt and pepper.", "Roast at 425\xB0F for 18 to 22 minutes, until cooked through.", "Cook the rice and steam the broccoli while it roasts."],
  chicken_souvlaki: ["Marinate the chicken in olive oil, lemon, garlic, oregano and paprika for at least 15 minutes.", "Grill or pan-sear 5 to 6 minutes a side, until cooked through.", "Cook the rice, chop the cucumber and tomato, and serve with tzatziki."],
  chicken_shawarma_bowl: ["Toss the chicken thighs with lemon, olive oil, garlic, cumin, paprika and turmeric.", "Roast at 425\xB0F for 25 to 30 minutes, then slice.", "Cook the rice and serve with cucumber, tomato, hummus and feta."],
  chicken_burrito_bowl: ["Coat the chicken thighs in lime, chili powder, cumin and chopped chipotle.", "Sear 6 to 7 minutes a side, rest, then chop.", "Cook the rice, warm the beans, and build the bowls with lettuce, salsa, cheese and avocado."],
  chicken_fajitas: ["Slice the chicken, peppers and onion; toss with lime, cumin, garlic powder and oil.", "Cook in a hot pan 8 to 10 minutes, until the chicken is done and the peppers are soft.", "Warm the tortillas and serve with cheese."],
  bbq_chicken_potato: ["Prick the potatoes and bake at 400\xB0F for 50 to 60 minutes.", "Season the chicken thighs, bake alongside for 35 minutes, then brush with BBQ sauce and bake 10 more.", "Steam the green beans and split the potatoes with butter."],
  chicken_tikka_masala: ["Coat the chicken in yogurt, garam masala, turmeric, cumin and coriander; sear until browned.", "Soften the onion with ginger-garlic paste, add the tomato sauce and simmer 15 minutes, then stir in the cream and chicken and simmer 5 to 8 minutes more, until the chicken is cooked through.", "Cook the basmati and wilt the spinach to serve alongside."],
  butter_chicken: ["Coat the chicken in yogurt, garam masala, turmeric, cumin and chili powder; sear until browned.", "Melt the butter, soften the onion with ginger-garlic paste, add the tomato sauce and simmer 15 minutes; stir in the cream and the chicken and simmer 5 to 8 minutes more, until the chicken is cooked through.", "Cook the basmati and the peas."],
  chicken_piccata: ["Dust the chicken cutlets in flour and pan-fry in olive oil 3 to 4 minutes a side, until cooked through; set aside.", "Simmer the garlic, wine, broth, lemon juice and capers for 5 minutes, swirl in the butter, and return the chicken.", "Boil the pasta and roast or steam the asparagus."],
  chicken_marsala: ["Dust the chicken in flour and pan-fry in olive oil until golden; set aside.", "Brown the mushrooms with shallot and garlic, add the marsala and broth, reduce by half, then stir in the cream, return the chicken and simmer 5 minutes, until it is cooked through.", "Make the mashed potato and steam the green beans."],
  creamy_pesto_chicken: ["Boil the penne.", "Cut the chicken into bite-size pieces and cook in olive oil 6 to 8 minutes, until cooked through; add the garlic and tomatoes and cook 3 minutes.", "Stir in the cream and pesto, simmer 2 minutes, and toss with the pasta."],
  caprese_chicken: ["Cube the potatoes, toss with olive oil and salt, and roast at 425\xB0F for 35 minutes.", "Sear the chicken thighs 4 minutes a side, top with tomato and mozzarella, and bake in the same oven 12 to 15 minutes, until the chicken is cooked through and the cheese has melted.", "Scatter with basil and serve with the lettuce and a little balsamic."],
  spinach_feta_chicken: ["Mix the spinach, feta, ricotta, garlic, scallions and dill.", "Cut a pocket in each chicken breast, fill, season with paprika and oregano, and bake at 400\xB0F for 25 to 30 minutes.", "Cook the rice."],
  thai_basil_chicken: ["Cook the jasmine rice and steam the green beans.", "Fry the garlic and shallot in oil for 30 seconds, add the ground chicken and cook 6 to 8 minutes, until browned and cooked through.", "Stir in the soy sauce, fish sauce and a pinch of sugar, then the basil until just wilted."],
  thai_peanut_chicken: ["Cook the jasmine rice.", "Whisk the peanut butter, soy sauce, honey, curry paste, vinegar, ginger and garlic with a splash of water.", "Stir-fry the sliced chicken 5 to 6 minutes, until cooked through, then the broccoli and pepper for 3 minutes; add the sauce and simmer 2 minutes."],
  chicken_adobo: ["Brown the chicken thighs in oil, then the onion and garlic.", "Add the soy sauce, vinegar, brown sugar, bay leaves, peppercorns and a splash of water; simmer 25 to 30 minutes.", "Cook the rice and steam the bok choy."],
  tahini_chicken_bowl: ["Toss the chicken thighs with olive oil, garlic, lemon and za'atar; roast at 425\xB0F for 25 minutes with the zucchini and broccoli.", "Cook the rice.", "Whisk the tahini with lemon and water and spoon it over the bowls."],
  greek_chicken_quinoa_bowl: ["Cook the quinoa.", "Marinate the chicken in olive oil, lemon, honey and oregano, then sear 6 to 7 minutes a side and slice.", "Serve over the quinoa with cucumber, tomato, feta and olives."],
  pesto_chicken_couscous: ["Grill or sear the chicken 6 to 7 minutes a side, until cooked through, and the sliced zucchini 2 to 3 minutes a side.", "Pour boiling water over the couscous, cover for 5 minutes, and fluff.", "Toss the couscous with the pesto and tomato, top with the chicken and parmesan."],
  turkey_stir_fry: ["Cook the rice.", "Whisk the soy sauce, brown sugar, vinegar, ginger and cornstarch with a splash of water.", "Brown the turkey in sesame oil, add the zucchini, carrot and pepper for 4 minutes, then the sauce until glossy."],
  beef_broccoli: ["Cook the rice.", "Toss the sliced steak with half the soy sauce and the cornstarch; sear in a hot pan and set aside.", "Stir-fry the broccoli with garlic and ginger, add the oyster sauce and remaining soy, and return the beef."],
  chimichurri_steak: ["Cube the potatoes and roast at 425\xB0F for 35 minutes; add the asparagus for the last 10.", "Chop the parsley and garlic and stir with olive oil, vinegar, oregano and red pepper flakes.", "Sear the steak 3 to 4 minutes a side, rest 5 minutes, slice across the grain and spoon over the chimichurri."],
  bulgogi_beef: ["Marinate the sliced sirloin in soy sauce, brown sugar, sesame oil, garlic and ginger for 15 minutes.", "Cook the rice.", "Sear the beef with the onion and carrot in a very hot pan for 3 to 4 minutes; serve with cucumber and sesame seeds."],
  southwest_steak_bowl: ["Cook the rice and warm the black beans and corn.", "Rub the steak with chili powder, cumin, salt and lime; sear 3 to 4 minutes a side, rest and slice.", "Build the bowls with lettuce, tomato, avocado and sour cream."],
  spaghetti_bolognese: ["Brown the beef with the onion and garlic in olive oil.", "Add the tomato sauce, tomato paste and thyme; simmer 20 minutes.", "Boil the spaghetti, toss with the sauce, top with parmesan and serve with the salad."],
  baked_ziti: ["Boil the pasta until just short of done.", "Brown the beef with onion and garlic, add the tomato sauce, basil and oregano, and simmer 10 minutes.", "Layer the pasta, sauce, ricotta and mozzarella in a dish and bake at 375\xB0F for 25 minutes; serve with the salad."],
  beef_enchiladas: ["Brown the beef with onion, garlic, cumin, paprika and oregano; stir in the refried beans.", "Fill the tortillas, lay them seam-down in a dish, and cover with the tomato sauce and cheese.", "Bake at 375\xB0F for 20 minutes and serve with the salad."],
  cottage_pie: ["Brown the beef with onion, carrot and celery; stir in flour, tomato paste, Worcestershire, thyme and stock and simmer 20 minutes.", "Boil and mash the potatoes.", "Spread the mash over the beef, top with parmesan, bake at 400\xB0F for 25 minutes, and serve with peas."],
  swedish_meatballs: ["Mix the beef with the panko, egg, onion, nutmeg and allspice; roll into small balls and brown in butter.", "Stir flour into the pan, add the broth and cream, and simmer the meatballs 10 minutes.", "Make the mashed potato and steam the green beans."],
  sloppy_joes: ["Soften the onion and pepper in butter, add the beef and brown.", "Stir in the tomato sauce, ketchup, brown sugar, Worcestershire and mustard; simmer 20 minutes.", "Toss the coleslaw mix with mayonnaise and a little vinegar; spoon the beef onto the buns."],
  egg_roll_bowl: ["Cook the rice.", "Brown the beef with the garlic and ginger, add the coleslaw mix and soy sauce, and cook 4 minutes.", "Push it aside, scramble the egg in the pan, stir together, and finish with sesame oil and green onions."],
  honey_garlic_pork: ["Bake the sweet potatoes at 400\xB0F for 45 minutes.", "Season and sear the pork tenderloin, roast in the same oven 15 to 18 minutes, until 145\xB0F in the middle, then rest 5 minutes and slice.", "Simmer the garlic, honey, soy sauce and vinegar 2 minutes for the sauce; steam the green beans."],
  turkey_meatloaf: ["Mix the turkey with the panko, egg, onion, Worcestershire, marjoram and half the ketchup.", "Shape into a loaf, spread with the remaining ketchup, and bake at 375\xB0F for 50 minutes, until 165\xB0F in the middle.", "Make the mashed potato and steam the green beans."],
  teriyaki_salmon_bowl: ["Cook the rice and the edamame.", "Brush the salmon with teriyaki sauce and bake at 400\xB0F for 12 minutes.", "Build the bowls with cucumber, carrot and avocado."],
  lemon_salmon_tray_bake: ["Halve the potatoes, toss with oil, and roast at 425\xB0F for 15 minutes.", "Mix the lemon, garlic, mustard and olive oil and spoon over the salmon.", "Add the salmon, asparagus and tomatoes to the tray, roast 10 to 12 minutes, and finish with parmesan."],
  honey_sriracha_salmon: ["Cook the brown rice.", "Whisk the honey, sriracha, soy sauce and ginger; coat the salmon and roast at 400\xB0F for 12 minutes.", "Toss the cucumber with rice vinegar and sesame oil; serve with the avocado."],
  miso_salmon: ["Whisk the miso, soy sauce, honey and mirin; coat the salmon.", "Broil or bake at 425\xB0F for 10 to 12 minutes.", "Cook the rice, steam the bok choy, and finish with sesame oil and seeds."],
  greek_salmon_sheet_pan: ["Halve the potatoes, toss with oil, oregano and thyme, and roast at 425\xB0F for 20 minutes.", "Add the zucchini, tomatoes and the salmon rubbed with lemon, garlic and mustard; roast 12 minutes.", "Scatter with feta, olives and dill."],
  baked_lemon_cod: ["Cube the potatoes and roast at 425\xB0F for 30 minutes.", "Dust the cod in flour, coriander, paprika and cumin; bake 10 to 12 minutes with the lemon, garlic, butter and olive oil spooned over.", "Steam the green beans and finish with parsley."],
  fish_tacos: ["Dip the cod strips in egg, then in panko mixed with paprika and garlic powder.", "Bake at 425\xB0F for 12 to 15 minutes, turning once.", "Warm the tortillas and fill with the fish, cabbage, avocado and sour cream mixed with lime."],
  salmon_tacos: ["Rub the salmon with oil, brown sugar, paprika and garlic powder; roast at 425\xB0F for 12 minutes and flake.", "Mash the avocado with the sour cream and lime; toss the onion with a little vinegar.", "Warm the tortillas and fill with salmon, cabbage, onion and the crema."],
  shrimp_scampi_pasta: ["Boil the pasta, adding the broccoli for the last 3 minutes; keep a cup of the water.", "Cook the garlic in butter and olive oil, add the shrimp for 2 to 3 minutes, then the wine and lemon.", "Toss with the pasta and a splash of the water; finish with parmesan and parsley."],
  honey_garlic_shrimp: ["Cook the rice.", "Whisk the honey, soy sauce, garlic, ginger, vinegar and cornstarch.", "Stir-fry the asparagus 3 minutes, add the shrimp for 2 minutes, then the sauce until glossy."],
  red_lentil_dal: ["Soften the onion, garlic and ginger in oil; stir in the curry powder, turmeric and coriander.", "Add the rinsed lentils, tomato sauce, coconut milk and water; simmer 20 minutes until soft.", "Cook the basmati and stir the spinach into the dal to wilt."],
  sweet_potato_black_bean_chili: ["Soften the onion, garlic and pepper in oil; stir in the tomato paste, chili powder, cumin, oregano and paprika.", "Add the diced sweet potato, beans, tomato sauce and stock; simmer 25 minutes.", "Serve topped with Greek yogurt."],
  peanut_tofu_bowl: ["Press and cube the tofu; toss with soy sauce, cornstarch and panko and bake at 400\xB0F for 25 minutes.", "Cook the rice; soften the pepper and kale in a pan.", "Whisk the peanut butter with soy sauce, honey and water; build the bowls with avocado."],
  tofu_broccoli_stir_fry: ["Cook the rice.", "Toss the cubed tofu in cornstarch and fry in oil until crisp; set aside.", "Stir-fry the broccoli with garlic and ginger, add the soy sauce, brown sugar and vinegar, return the tofu and top with cashews."],
  lentil_bolognese: ["Soften the onion and garlic in olive oil; stir in the tomato paste, oregano and thyme.", "Add the lentils, walnuts, tomato sauce and broth; simmer 25 minutes and finish with balsamic.", "Boil the pasta, toss with the sauce and serve with the salad."],
  quinoa_stuffed_peppers: ["Cook the quinoa; halve and seed the peppers.", "Mix the quinoa with the beans, corn, lime, chili powder and cumin; fill the peppers and top with cheddar.", "Bake at 375\xB0F for 30 minutes; serve with avocado and Greek yogurt."],
  sweet_potato_chickpea_bowl: ["Roast the sweet potato and onion at 425\xB0F for 15 minutes.", "Add the chickpeas tossed in cumin, chili powder and garlic powder, and the broccoli; roast 12 more minutes, adding the kale for the last 5.", "Whisk the tahini with lemon, honey and water and drizzle over."]
};

// features/menu/next/catalog/recipes.ts
var RANGE2 = { protein: [1 / 3, 2.5], carb: [1 / 3, 2.5], fat: [0.5, 2.5], veg: [0.7, 1.3], fixed: [0.9, 1.1] };
var c = (food, grams, role, range, note) => {
  const [lo, hi] = range ?? RANGE2[role];
  return { food, grams, role, min: Math.round(grams * lo), max: Math.round(grams * hi), note };
};
var MOCK_CATALOG = [
  // ---- Dinners
  {
    id: "chicken_rice_broccoli",
    name: "Garlic chicken, rice & broccoli",
    description: "Roast chicken breast over rice with soy-garlic broccoli.",
    meal_types: ["lunch", "dinner"],
    cuisine: "American",
    cook_time_minutes: 30,
    components: [
      c("chicken_breast_cooked", 150, "protein"),
      c("rice_white_cooked", 180, "carb", [0, 2.5]),
      c("broccoli_cooked", 100, "veg"),
      c("olive_oil", 7, "fat"),
      c("soy_sauce", 16, "fixed"),
      c("garlic_raw", 6, "fixed")
    ],
    steps: ["Roast the chicken at 220\xB0C for 20 minutes.", "Cook the rice.", "Steam the broccoli and toss with soy and garlic."]
  },
  {
    id: "spaghetti_bolognese",
    name: "Spaghetti bolognese",
    description: "Lean beef simmered in marinara over spaghetti.",
    meal_types: ["dinner"],
    cuisine: "Italian",
    cook_time_minutes: 35,
    components: [
      c("ground_beef_90_cooked", 120, "protein"),
      c("spaghetti_cooked", 200, "carb"),
      c("marinara_sauce", 150, "veg"),
      c("onion_raw", 40, "veg"),
      c("garlic_raw", 6, "fixed"),
      c("parmesan_grated", 10, "fat")
    ],
    steps: ["Brown the beef with onion and garlic.", "Add the marinara and simmer 15 minutes.", "Toss with the spaghetti and top with parmesan."]
  },
  {
    id: "beef_tacos",
    name: "Beef tacos",
    description: "Seasoned beef in corn tortillas with salsa, lettuce and cheddar.",
    meal_types: ["dinner"],
    cuisine: "Mexican",
    cook_time_minutes: 20,
    components: [
      c("ground_beef_90_cooked", 110, "protein"),
      c("corn_tortilla", 78, "carb", [0.33, 2.5], "3 tortillas"),
      c("salsa", 54, "veg"),
      c("romaine_raw", 30, "veg"),
      c("cheddar", 20, "fat"),
      c("chili_powder", 3, "fixed"),
      c("cumin_ground", 2, "fixed")
    ],
    steps: ["Brown the beef with chili powder and cumin.", "Warm the tortillas.", "Fill with beef, lettuce, salsa and cheddar."]
  },
  {
    id: "teriyaki_salmon",
    name: "Teriyaki salmon & green beans",
    description: "Glazed salmon over jasmine rice with green beans.",
    meal_types: ["lunch", "dinner"],
    cuisine: "Asian",
    cook_time_minutes: 25,
    components: [
      c("salmon_cooked", 140, "protein"),
      c("jasmine_rice_cooked", 170, "carb", [0, 2.5]),
      c("green_beans_cooked", 100, "veg"),
      c("teriyaki_sauce", 18, "fixed"),
      c("sesame_seeds", 5, "fat")
    ],
    steps: ["Brush the salmon with teriyaki and bake at 200\xB0C for 12 minutes.", "Cook the rice.", "Steam the green beans and finish with sesame."]
  },
  {
    id: "turkey_chili",
    name: "Turkey & kidney bean chili",
    description: "A big pot of lean turkey chili with peppers and beans.",
    meal_types: ["lunch", "dinner"],
    cuisine: "American",
    cook_time_minutes: 40,
    components: [
      c("ground_turkey_cooked", 110, "protein"),
      c("kidney_beans_cooked", 120, "carb"),
      c("tomato_sauce", 180, "veg"),
      c("onion_raw", 60, "veg"),
      c("bell_pepper_cooked", 60, "veg"),
      c("chili_powder", 3, "fixed"),
      c("cumin_ground", 2, "fixed")
    ],
    steps: ["Brown the turkey with onion and pepper.", "Add the beans, tomato sauce and spices.", "Simmer 25 minutes."]
  },
  {
    id: "chicken_stir_fry",
    name: "Chicken & vegetable stir-fry",
    description: "Chicken thigh, peppers and broccoli in soy and sesame over rice.",
    meal_types: ["dinner"],
    cuisine: "Asian",
    cook_time_minutes: 20,
    components: [
      c("chicken_thigh_cooked", 140, "protein"),
      c("rice_white_cooked", 170, "carb", [0, 2.5]),
      c("bell_pepper_cooked", 80, "veg"),
      c("broccoli_cooked", 60, "veg"),
      c("soy_sauce", 16, "fixed"),
      c("sesame_oil", 5, "fat"),
      c("garlic_raw", 6, "fixed")
    ],
    steps: ["Stir-fry the chicken until browned.", "Add the vegetables and garlic for 4 minutes.", "Finish with soy and sesame oil; serve over rice."]
  },
  {
    id: "chicken_burrito_bowl",
    name: "Chicken burrito bowl",
    description: "Chicken, rice, black beans, corn and salsa in a bowl.",
    meal_types: ["lunch", "dinner"],
    cuisine: "Mexican",
    cook_time_minutes: 25,
    components: [
      c("chicken_breast_cooked", 130, "protein"),
      c("rice_white_cooked", 150, "carb", [0, 2.5]),
      c("black_beans_cooked", 80, "veg", [0.5, 1.5]),
      c("corn_canned", 50, "veg"),
      c("salsa", 54, "veg"),
      c("romaine_raw", 30, "veg"),
      c("cheddar", 15, "fat"),
      c("lime_juice", 10, "fixed")
    ],
    steps: ["Season and roast the chicken.", "Cook the rice and stir in lime.", "Build bowls with beans, corn, salsa, lettuce and cheddar."]
  },
  {
    id: "sheet_pan_chicken_sweet_potato",
    name: "Sheet-pan chicken & sweet potato",
    description: "Chicken thighs roasted with sweet potato and zucchini.",
    meal_types: ["dinner"],
    cuisine: "American",
    cook_time_minutes: 40,
    components: [
      c("chicken_thigh_cooked", 150, "protein"),
      c("sweet_potato_baked", 200, "carb"),
      c("zucchini_cooked", 100, "veg"),
      c("olive_oil", 7, "fat"),
      c("garlic_raw", 6, "fixed")
    ],
    steps: ["Toss everything in oil and garlic on one tray.", "Roast at 210\xB0C for 35 minutes."]
  },
  {
    id: "tofu_stir_fry",
    name: "Crispy tofu & broccoli stir-fry",
    description: "Pan-crisped tofu with broccoli and peppers over rice.",
    meal_types: ["dinner"],
    cuisine: "Asian",
    cook_time_minutes: 25,
    components: [
      c("tofu_firm", 180, "protein"),
      c("rice_white_cooked", 160, "carb", [0, 2.5]),
      c("broccoli_cooked", 90, "veg"),
      c("bell_pepper_cooked", 60, "veg"),
      c("soy_sauce", 16, "fixed"),
      c("sesame_oil", 5, "fat"),
      c("garlic_raw", 6, "fixed")
    ],
    steps: ["Press and cube the tofu; pan-fry until crisp.", "Stir-fry the vegetables with garlic.", "Toss with soy and sesame; serve over rice."]
  },
  {
    id: "lentil_soup",
    name: "Lentil & spinach soup",
    description: "Hearty lentils with carrot, onion and spinach.",
    meal_types: ["lunch", "dinner"],
    cuisine: "Mediterranean",
    cook_time_minutes: 35,
    components: [
      c("lentils_cooked", 200, "protein"),
      c("bread_whole_wheat", 28, "carb", [0, 3], "1 slice on the side"),
      c("carrots_cooked", 60, "veg"),
      c("onion_raw", 40, "veg"),
      c("spinach_cooked", 60, "veg"),
      c("vegetable_broth", 240, "fixed"),
      c("olive_oil", 5, "fat")
    ],
    steps: ["Soften the onion and carrot in oil.", "Add the lentils and broth and simmer 20 minutes.", "Stir in the spinach; serve with bread."]
  },
  // ---- Lunches
  {
    id: "chicken_hummus_wrap",
    name: "Chicken & hummus wrap",
    description: "Chicken, hummus, tomato, lettuce and feta in a flour tortilla.",
    meal_types: ["lunch"],
    cuisine: "Mediterranean",
    cook_time_minutes: 10,
    components: [
      c("chicken_breast_cooked", 110, "protein"),
      c("flour_tortilla", 49, "carb", void 0, "1 tortilla, 2 for bigger goals"),
      c("hummus", 30, "fat"),
      c("romaine_raw", 40, "veg"),
      c("tomato_raw", 60, "veg"),
      c("feta_cheese", 15, "fat")
    ],
    steps: ["Spread hummus over the tortilla.", "Add chicken, lettuce, tomato and feta.", "Roll tightly and cut in half."]
  },
  {
    id: "tuna_sandwich",
    name: "Tuna salad sandwich",
    description: "Tuna with a little mayo, cucumber and lettuce on whole wheat.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 10,
    components: [
      c("tuna_canned_water", 100, "protein"),
      { ...c("bread_whole_wheat", 56, "carb", void 0, "2 slices, one sandwich"), step: 56 },
      c("mayonnaise", 14, "fat"),
      c("cucumber_raw", 60, "veg"),
      c("romaine_raw", 20, "veg")
    ],
    steps: ["Mix the tuna with mayo.", "Layer on bread with cucumber and lettuce."]
  },
  // ---- Breakfasts
  {
    id: "overnight_oats",
    name: "Blueberry overnight oats",
    description: "Oats soaked in milk with Greek yogurt, blueberries and honey.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [
      c("oats_rolled_dry", 50, "carb"),
      c("greek_yogurt_2pct", 150, "protein"),
      c("milk_2pct", 120, "fixed", [0.75, 1.25]),
      c("blueberry_raw", 75, "veg"),
      c("honey", 10, "fixed")
    ],
    steps: ["Stir oats, milk and yogurt together in a jar.", "Top with blueberries and honey.", "Refrigerate overnight."]
  },
  {
    id: "eggs_toast_spinach",
    name: "Scrambled eggs, toast & spinach",
    description: "Soft scrambled eggs with wilted spinach on whole-wheat toast.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 10,
    // Toast capped at two slices (2026-11-20): a 3,000 kcal goal used to get three.
    components: [
      c("egg_scrambled", 122, "protein", void 0, "2 eggs"),
      c("bread_whole_wheat", 56, "carb", [0.5, 1], "2 slices"),
      c("spinach_cooked", 60, "veg"),
      c("butter_salted", 5, "fat")
    ],
    steps: ["Wilt the spinach in butter.", "Scramble the eggs over low heat.", "Serve on toast."]
  },
  {
    id: "yogurt_berry_bowl",
    name: "Greek yogurt berry bowl",
    description: "Nonfat Greek yogurt with strawberries, banana and peanut butter.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [
      c("greek_yogurt_nonfat", 245, "protein"),
      c("banana_raw", 60, "carb", [0, 2.5]),
      c("strawberry_raw", 100, "veg"),
      c("peanut_butter", 16, "fat")
    ],
    steps: ["Spoon the yogurt into a bowl.", "Top with sliced strawberries and banana and a spoon of peanut butter."]
  },
  // ---- Second batch (2026-11-02): more staples so weeks of 7 and 10 have real choices.
  {
    id: "pork_tenderloin_potatoes",
    name: "Roast pork tenderloin & potatoes",
    description: "Garlic pork tenderloin with roast potatoes and green beans.",
    meal_types: ["dinner"],
    cuisine: "American",
    cook_time_minutes: 40,
    components: [
      c("pork_tenderloin_cooked", 150, "protein"),
      c("potato_baked", 200, "carb"),
      c("green_beans_cooked", 100, "veg"),
      c("olive_oil", 7, "fat"),
      c("garlic_raw", 6, "fixed")
    ],
    steps: ["Rub the pork with oil and garlic.", "Roast with the cubed potatoes at 220\xB0C for 25 minutes.", "Rest the pork; steam the green beans."]
  },
  {
    id: "chicken_curry",
    name: "Chicken & pea curry",
    description: "Chicken thighs simmered in light coconut curry with peas, over rice.",
    meal_types: ["lunch", "dinner"],
    cuisine: "Indian",
    cook_time_minutes: 35,
    components: [
      c("chicken_thigh_cooked", 140, "protein"),
      c("rice_white_cooked", 170, "carb", [0, 2.5]),
      c("coconut_milk_light", 80, "fat"),
      c("onion_raw", 50, "veg"),
      c("peas_cooked", 60, "veg"),
      c("curry_powder", 4, "fixed"),
      c("garlic_raw", 6, "fixed"),
      c("ginger_raw", 4, "fixed")
    ],
    steps: ["Soften the onion, garlic and ginger.", "Add curry powder, chicken and coconut milk; simmer 20 minutes.", "Stir in the peas; serve over rice."]
  },
  {
    id: "chickpea_spinach_curry",
    name: "Chickpea & spinach curry",
    description: "Chickpeas in a tomato-coconut curry with spinach, over rice.",
    meal_types: ["lunch", "dinner"],
    cuisine: "Indian",
    cook_time_minutes: 25,
    components: [
      c("chickpeas_cooked", 200, "protein"),
      c("rice_white_cooked", 150, "carb", [0, 2.5]),
      c("coconut_milk_light", 60, "fat"),
      c("tomato_sauce", 120, "veg"),
      c("spinach_cooked", 80, "veg"),
      c("onion_raw", 40, "veg"),
      c("curry_powder", 4, "fixed"),
      c("garlic_raw", 6, "fixed")
    ],
    steps: ["Soften the onion and garlic with the curry powder.", "Add chickpeas, tomato sauce and coconut milk; simmer 15 minutes.", "Wilt in the spinach; serve over rice."]
  },
  {
    id: "bbq_chicken_potato",
    name: "BBQ chicken & baked potato",
    description: "BBQ-glazed chicken breast with a buttered baked potato and corn.",
    meal_types: ["dinner"],
    cuisine: "American",
    cook_time_minutes: 45,
    components: [
      c("chicken_breast_cooked", 150, "protein"),
      c("potato_baked", 200, "carb"),
      c("corn_canned", 80, "veg"),
      c("bbq_sauce", 34, "fixed"),
      c("butter_salted", 7, "fat")
    ],
    steps: ["Bake the potatoes at 200\xB0C for 45 minutes.", "Brush the chicken with BBQ sauce and bake for the last 20.", "Warm the corn; split the potatoes with butter."]
  },
  {
    id: "pesto_chicken_pasta",
    name: "Pesto chicken pasta",
    description: "Pasta tossed with pesto, chicken, zucchini and cherry tomatoes.",
    meal_types: ["lunch", "dinner"],
    cuisine: "Italian",
    cook_time_minutes: 20,
    components: [
      c("chicken_breast_cooked", 120, "protein"),
      c("pasta_cooked", 180, "carb"),
      c("zucchini_cooked", 80, "veg"),
      c("tomato_raw", 60, "veg"),
      c("pesto", 25, "fat"),
      c("parmesan_grated", 5, "fat")
    ],
    steps: ["Cook the pasta.", "Pan-fry the chicken and zucchini.", "Toss everything with pesto, tomatoes and parmesan."]
  },
  {
    id: "lemon_cod_quinoa",
    name: "Lemon cod, quinoa & cauliflower",
    description: "Baked lemon cod over quinoa with roast cauliflower.",
    meal_types: ["dinner"],
    cuisine: "Mediterranean",
    cook_time_minutes: 30,
    components: [
      c("cod_cooked", 160, "protein"),
      c("quinoa_cooked", 160, "carb"),
      c("cauliflower_cooked", 120, "veg"),
      c("olive_oil", 8, "fat"),
      c("lemon_juice", 10, "fixed"),
      c("garlic_raw", 3, "fixed")
    ],
    steps: ["Roast the cauliflower in half the oil at 220\xB0C for 25 minutes.", "Cook the quinoa.", "Bake the cod with lemon, garlic and the rest of the oil for 12 minutes."]
  },
  {
    id: "turkey_burgers",
    name: "Turkey burgers",
    description: "Lean turkey burgers on buns with cheddar, lettuce and tomato.",
    meal_types: ["dinner"],
    cuisine: "American",
    cook_time_minutes: 20,
    components: [
      c("ground_turkey_cooked", 120, "protein"),
      c("hamburger_bun", 52, "carb", void 0, "1 bun"),
      c("romaine_raw", 20, "veg"),
      c("tomato_raw", 40, "veg"),
      c("onion_raw", 20, "veg"),
      c("cheddar", 20, "fat")
    ],
    steps: ["Shape the turkey into patties.", "Grill or pan-fry 5 minutes a side; melt the cheddar on top.", "Build on buns with lettuce, tomato and onion."]
  },
  {
    id: "chicken_lo_mein",
    name: "Chicken lo mein",
    description: "Egg noodles with chicken, cabbage, carrot and pepper in soy and sesame.",
    meal_types: ["dinner"],
    cuisine: "Asian",
    cook_time_minutes: 20,
    components: [
      c("chicken_breast_cooked", 120, "protein"),
      c("egg_noodles_cooked", 180, "carb"),
      c("cabbage_raw", 60, "veg"),
      c("carrots_cooked", 40, "veg"),
      c("bell_pepper_cooked", 50, "veg"),
      c("soy_sauce", 16, "fixed"),
      c("sesame_oil", 5, "fat"),
      c("scallion_raw", 10, "fixed")
    ],
    steps: ["Cook the noodles.", "Stir-fry the chicken, then the vegetables.", "Toss with the noodles, soy and sesame oil; top with green onion."]
  },
  {
    id: "shrimp_fried_rice",
    name: "Shrimp fried rice",
    description: "Shrimp, egg, peas and carrot fried with rice and soy.",
    meal_types: ["lunch", "dinner"],
    cuisine: "Asian",
    cook_time_minutes: 15,
    components: [
      c("shrimp_cooked", 120, "protein"),
      c("rice_white_cooked", 180, "carb", [0, 2.5]),
      c("peas_cooked", 50, "veg"),
      c("carrots_cooked", 40, "veg"),
      c("egg_scrambled", 61, "fixed", void 0, "1 egg"),
      c("soy_sauce", 16, "fixed"),
      c("sesame_oil", 5, "fat"),
      c("scallion_raw", 10, "fixed")
    ],
    steps: ["Scramble the egg and set aside.", "Fry the shrimp, peas and carrot.", "Add the rice and soy; fold the egg back in."]
  },
  {
    id: "black_bean_tacos",
    name: "Black bean & avocado tacos",
    description: "Spiced black beans in corn tortillas with avocado, salsa and lime.",
    meal_types: ["dinner"],
    cuisine: "Mexican",
    cook_time_minutes: 15,
    components: [
      c("black_beans_cooked", 160, "protein"),
      c("corn_tortilla", 78, "carb", [0.33, 2.5], "3 tortillas"),
      c("avocado_raw", 50, "fat"),
      c("salsa", 54, "veg"),
      c("romaine_raw", 30, "veg"),
      c("lime_juice", 10, "fixed"),
      c("cumin_ground", 2, "fixed")
    ],
    steps: ["Warm the beans with cumin and mash a few.", "Warm the tortillas.", "Fill with beans, lettuce, avocado and salsa; squeeze over lime."]
  },
  {
    id: "thai_chicken_rice",
    name: "Thai-style chicken & green beans",
    description: "Ground chicken stir-fried with green beans, pepper, garlic and lime over jasmine rice.",
    meal_types: ["lunch", "dinner"],
    cuisine: "Asian",
    cook_time_minutes: 15,
    components: [
      c("ground_chicken_cooked", 130, "protein"),
      c("jasmine_rice_cooked", 170, "carb", [0, 2.5]),
      c("green_beans_cooked", 70, "veg"),
      c("bell_pepper_cooked", 60, "veg"),
      c("soy_sauce", 16, "fixed"),
      c("honey", 7, "fixed"),
      c("garlic_raw", 6, "fixed"),
      c("lime_juice", 10, "fixed")
    ],
    steps: ["Cook the rice.", "Stir-fry the chicken with garlic until browned.", "Add the beans and pepper, then soy, honey and lime."]
  },
  {
    id: "turkey_avocado_sandwich",
    name: "Turkey & avocado sandwich",
    description: "Deli turkey, avocado, lettuce and tomato on whole wheat.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [
      c("turkey_deli", 120, "protein"),
      { ...c("bread_whole_wheat", 56, "carb", void 0, "2 slices, one sandwich"), step: 56 },
      c("avocado_raw", 50, "fat"),
      c("romaine_raw", 20, "veg"),
      c("tomato_raw", 40, "veg")
    ],
    steps: ["Mash the avocado onto the bread.", "Layer turkey, lettuce and tomato."]
  },
  {
    id: "greek_chickpea_quinoa",
    name: "Greek chickpea quinoa salad",
    description: "Quinoa, chickpeas, cucumber, tomato and feta with lemon and olive oil.",
    meal_types: ["lunch"],
    cuisine: "Mediterranean",
    cook_time_minutes: 15,
    components: [
      c("chickpeas_cooked", 160, "protein"),
      c("quinoa_cooked", 120, "carb"),
      c("cucumber_raw", 60, "veg"),
      c("tomato_raw", 60, "veg"),
      c("feta_cheese", 30, "fat"),
      c("olive_oil", 7, "fat"),
      c("lemon_juice", 10, "fixed")
    ],
    steps: ["Cook and cool the quinoa.", "Toss with chickpeas, cucumber, tomato and feta.", "Dress with lemon and olive oil."]
  },
  {
    id: "egg_salad_pita",
    name: "Egg salad pita",
    description: "Chopped hard-boiled eggs with a little mayo, lettuce and cucumber in pita.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 15,
    components: [
      c("egg_hardboiled", 150, "protein", void 0, "3 eggs"),
      c("pita_bread", 60, "carb", void 0, "1 pita"),
      c("mayonnaise", 10, "fat"),
      c("romaine_raw", 20, "veg"),
      c("cucumber_raw", 40, "veg")
    ],
    steps: ["Boil the eggs 10 minutes, cool and chop.", "Mix with mayo.", "Fill the pita with lettuce, cucumber and egg salad."]
  },
  {
    id: "cottage_berry_toast",
    name: "Cottage cheese, berries & toast",
    description: "Cottage cheese with blueberries, almonds and honey, and a slice of toast.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [
      c("cottage_cheese_2pct", 200, "protein"),
      c("bread_whole_wheat", 28, "carb", [1, 3], "1 slice"),
      c("blueberry_raw", 75, "veg"),
      c("almonds", 15, "fat"),
      c("honey", 7, "fixed")
    ],
    steps: ["Spoon the cottage cheese into a bowl.", "Top with blueberries, almonds and honey.", "Toast the bread."]
  },
  {
    id: "egg_muffin_sandwich",
    name: "Egg & cheese muffin",
    description: "Two eggs and cheddar on a toasted English muffin with tomato.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 10,
    components: [
      c("egg_scrambled", 122, "protein", void 0, "2 eggs"),
      c("english_muffin", 57, "carb", void 0, "1 muffin"),
      c("cheddar", 15, "fat"),
      c("tomato_raw", 40, "veg")
    ],
    steps: ["Toast the muffin.", "Cook the eggs in a pan as one round.", "Stack egg, cheddar and tomato in the muffin."]
  },
  {
    id: "pb_banana_oats",
    name: "Peanut butter banana oatmeal",
    description: "Hot oats cooked in milk with banana, peanut butter and a scoop of Greek yogurt.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 10,
    components: [
      c("oats_rolled_dry", 50, "carb"),
      c("greek_yogurt_2pct", 120, "protein"),
      c("milk_2pct", 150, "fixed", [0.75, 1.25]),
      c("banana_raw", 60, "veg"),
      c("peanut_butter", 16, "fat")
    ],
    steps: ["Simmer the oats in milk for 5 minutes.", "Top with sliced banana, peanut butter and the yogurt."]
  }
];
var bread2 = (note = "2 slices") => ({ ...c("bread_whole_wheat", 56, "carb", [0.5, 1], note) });
var sandwich = () => ({ ...c("bread_whole_wheat", 56, "carb", void 0, "2 slices, one sandwich"), step: 56 });
var onTheSide = () => c("bread_whole_wheat", 28, "fixed", [0, 2], "1 slice on the side");
var DATABASE_ADDONS = [
  // Breakfasts
  {
    id: "sausage_egg_tacos",
    source: "rcp_798795676b",
    name: "Sausage, egg & cheese breakfast tacos",
    description: "Scrambled eggs with turkey sausage, onion and cheddar in warm flour tortillas.",
    meal_types: ["breakfast"],
    cuisine: "Mexican",
    cook_time_minutes: 10,
    components: [
      c("egg_scrambled", 122, "protein", void 0, "2 eggs"),
      c("flour_tortilla", 98, "carb", [0.5, 1.5], "2 tortillas"),
      c("ground_turkey_cooked", 40, "fixed", [0.5, 2]),
      c("cheddar", 15, "fat"),
      c("onion_raw", 30, "veg")
    ],
    steps: [
      "Brown the ground turkey with the onion, a pinch of sage, garlic powder, salt and pepper, 5 to 6 minutes, until no pink is left.",
      "Pour in the beaten eggs and stir over medium heat until just set, about 2 minutes.",
      "Warm the tortillas in a dry pan. Fill with the eggs and sausage and top with the cheddar."
    ]
  },
  {
    id: "black_bean_breakfast_burrito",
    source: "rcp_3e93d7ad58",
    name: "Black bean breakfast burrito",
    description: "Eggs, black beans, hash browns and cheddar in a tortilla, with salsa and avocado.",
    meal_types: ["breakfast"],
    cuisine: "Mexican",
    cook_time_minutes: 20,
    components: [
      c("egg_scrambled", 122, "protein", void 0, "2 eggs"),
      c("flour_tortilla", 49, "carb", [1, 2], "1 tortilla"),
      c("black_beans_cooked", 60, "fixed", [0.5, 2]),
      c("hash_browns", 40, "fixed", [0.5, 1.5]),
      c("salsa", 30, "fixed"),
      c("avocado_raw", 30, "fat"),
      c("cheddar", 15, "fat")
    ],
    steps: [
      "Cook the hash browns in a pan until crisp and golden, following the bag.",
      "Warm the rinsed black beans. Scramble the eggs in a little butter until just set.",
      "Lay the hash browns, beans, eggs and cheddar down the middle of the tortilla. Add the salsa and avocado, fold in the sides and roll."
    ]
  },
  {
    id: "huevos_rancheros",
    source: "rcp_f8010791ec",
    name: "Huevos rancheros",
    description: "Fried eggs on warm corn tortillas with black beans, salsa and avocado.",
    meal_types: ["breakfast"],
    cuisine: "Mexican",
    cook_time_minutes: 20,
    components: [
      c("egg_whole_raw", 100, "protein", void 0, "2 eggs"),
      c("corn_tortilla", 52, "carb", void 0, "2 tortillas"),
      c("black_beans_cooked", 90, "fixed", [0.5, 2]),
      c("salsa", 60, "fixed"),
      c("avocado_raw", 40, "fat"),
      c("olive_oil", 5, "fat")
    ],
    steps: [
      "Warm the rinsed black beans with half the salsa in a small pan.",
      "Warm the tortillas in a dry pan, about 30 seconds a side.",
      "Fry the eggs in the oil until the whites are set, 2 to 3 minutes.",
      "Spoon the beans over the tortillas, top with the eggs, the rest of the salsa and the sliced avocado."
    ]
  },
  {
    id: "sweet_potato_hash",
    source: "rcp_1265cd5bc8",
    name: "Sweet potato breakfast hash",
    description: "Sweet potato, bacon, pepper and kale cooked in one pan, with eggs on top.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 35,
    components: [
      c("egg_whole_raw", 100, "protein", void 0, "2 eggs"),
      c("sweet_potato_baked", 150, "carb"),
      c("bacon_cooked", 16, "fat", void 0, "2 slices"),
      c("bell_pepper_cooked", 60, "veg"),
      c("kale_cooked", 40, "veg"),
      c("onion_raw", 30, "veg"),
      c("olive_oil", 5, "fat")
    ],
    steps: [
      "Cook the chopped bacon in a large pan until crisp, then lift it out and leave the fat.",
      "Add the diced sweet potato, onion and pepper with cumin, paprika and garlic powder. Cook, stirring now and then, 12 to 15 minutes, until the sweet potato is tender.",
      "Stir in the kale and bacon until the kale wilts.",
      "Make wells in the hash, crack in the eggs, cover and cook 4 to 5 minutes, until the whites are set."
    ]
  },
  {
    id: "veggie_frittata_toast",
    source: "rcp_1be1a0abfa",
    name: "Veggie frittata & toast",
    description: "Baked eggs with pepper, zucchini, broccoli and feta, with whole-wheat toast.",
    meal_types: ["breakfast"],
    cuisine: "Mediterranean",
    cook_time_minutes: 45,
    components: [
      c("egg_whole_raw", 125, "protein"),
      bread2(),
      c("bell_pepper_cooked", 40, "veg"),
      c("zucchini_cooked", 40, "veg"),
      c("broccoli_cooked", 40, "veg"),
      c("feta_cheese", 20, "fat"),
      c("milk_2pct", 20, "fixed"),
      c("olive_oil", 5, "fat")
    ],
    steps: [
      "Heat the oven to 400\xB0F. Toss the chopped pepper, zucchini and broccoli with the oil, salt and pepper and roast 15 minutes.",
      "Whisk the eggs with the milk, a pinch of baking powder, parsley and thyme. Stir in the feta and the roasted vegetables.",
      "Pour into an oiled oven-safe pan and bake 15 to 20 minutes, until set in the middle.",
      "Toast the bread. Slices of frittata keep in the fridge for four days."
    ]
  },
  {
    id: "cottage_egg_bites",
    source: "rcp_87fba0bab3",
    name: "Cottage cheese egg bites, toast & fruit",
    description: "Eggs baked with cottage cheese and cheddar, with toast and strawberries.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 40,
    components: [
      c("egg_whole_raw", 100, "protein", void 0, "2 eggs"),
      bread2(),
      c("cottage_cheese_2pct", 60, "fixed", [0.5, 2]),
      c("cheddar", 15, "fat"),
      c("strawberry_raw", 100, "veg")
    ],
    steps: [
      "Heat the oven to 350\xB0F and oil a muffin tin.",
      "Blend the eggs with the cottage cheese, salt and pepper until smooth. Stir in the cheddar.",
      "Pour into the tin and bake 20 to 25 minutes, until puffed and set.",
      "Toast the bread and serve with the strawberries. The bites keep in the fridge for four days."
    ]
  },
  {
    id: "tomato_feta_scramble",
    source: "rcp_3dea0852d8",
    name: "Scrambled eggs with tomato & feta, toast",
    description: "Eggs scrambled into cooked-down tomato with feta, on whole-wheat toast.",
    meal_types: ["breakfast"],
    cuisine: "Mediterranean",
    cook_time_minutes: 15,
    components: [c("egg_scrambled", 122, "protein", void 0, "2 eggs"), bread2(), c("tomato_raw", 120, "veg"), c("feta_cheese", 30, "fat"), c("olive_oil", 5, "fat")],
    steps: [
      "Cook the chopped tomato in the oil over medium heat for 6 to 8 minutes, until most of its juice has gone.",
      "Pour in the beaten eggs and stir gently until just set, about 2 minutes.",
      "Crumble in the feta. Toast the bread and serve the eggs on top."
    ]
  },
  {
    id: "blueberry_pancakes",
    source: "rcp_1455a81401",
    name: "Blueberry pancakes & yogurt",
    description: "Whole-wheat blueberry pancakes with maple syrup and a bowl of Greek yogurt.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 20,
    components: [
      c("greek_yogurt_2pct", 170, "protein"),
      c("flour_whole_wheat", 45, "carb"),
      c("egg_whole_raw", 25, "fixed", [0.75, 1.5]),
      c("milk_2pct", 60, "fixed", [0.75, 1.5]),
      c("blueberry_raw", 60, "veg"),
      c("maple_syrup", 20, "fixed"),
      c("butter_salted", 5, "fat")
    ],
    steps: [
      "Whisk the flour with baking powder, baking soda, cinnamon and a pinch of salt.",
      "Whisk the egg and milk with a spoonful of the yogurt and a little vanilla, then stir into the flour until just mixed. Fold in the blueberries.",
      "Melt the butter in a pan over medium heat. Cook the batter in rounds, 2 to 3 minutes a side, until golden and cooked through.",
      "Serve with the maple syrup and the rest of the yogurt on the side."
    ]
  },
  {
    id: "apple_baked_oatmeal",
    source: "rcp_2666d4d0c3",
    name: "Apple cinnamon baked oatmeal",
    description: "Oats baked with apple, cinnamon and egg, topped with Greek yogurt.",
    meal_types: ["breakfast"],
    cuisine: "American",
    cook_time_minutes: 60,
    // The oats and the yogurt hold close to the recipe: left free, a 2,000 kcal plate cut the oats to 15 g
    // and made up the rest with peanut butter toast, which is no longer baked oatmeal.
    components: [
      c("greek_yogurt_2pct", 150, "protein", [0.8, 2]),
      c("oats_rolled_dry", 45, "carb", [0.7, 2]),
      c("apple_raw", 80, "veg"),
      c("egg_whole_raw", 20, "fixed", [0.75, 1.5]),
      c("milk_2pct", 80, "fixed", [0.75, 1.25]),
      c("sugar_brown", 12, "fixed")
    ],
    steps: [
      "Heat the oven to 350\xB0F and oil a baking dish.",
      "Toss the diced apple with half the brown sugar, cinnamon and a squeeze of lemon and spread it in the dish.",
      "Whisk the egg, milk, the rest of the sugar, vanilla, baking powder and a pinch of salt. Stir in the oats and pour over the apple.",
      "Bake 35 to 40 minutes, until set and golden. Serve warm or cold with the yogurt on top. It keeps in the fridge for five days."
    ]
  },
  // Lunches
  {
    id: "chicken_caesar_wrap",
    source: "rcp_e9af9c5504",
    name: "Chicken Caesar wrap",
    description: "Chicken, romaine, parmesan and croutons in Caesar dressing, wrapped in a tortilla.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 10,
    components: [
      c("chicken_breast_cooked", 120, "protein"),
      c("flour_tortilla", 49, "carb", void 0, "1 tortilla, 2 for bigger goals"),
      c("romaine_raw", 60, "veg"),
      c("caesar_dressing", 20, "fat"),
      c("parmesan_grated", 8, "fat"),
      c("crouton", 8, "fixed"),
      c("lemon_juice", 5, "fixed")
    ],
    steps: [
      "Cook the chicken breast in a pan over medium heat, 6 to 7 minutes a side, until cooked through, then slice it. Leftover cooked chicken works too.",
      "Toss the chicken with the dressing, lemon juice, parmesan, a pinch of garlic powder and pepper.",
      "Lay the romaine on the tortilla, add the chicken and the halved croutons, fold in the sides and roll."
    ]
  },
  {
    id: "chicken_salad_sandwich",
    source: "rcp_1fe427d0aa",
    name: "Chicken salad sandwich",
    description: "Chopped chicken with celery, onion and a little mayo on whole wheat, with lettuce.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 10,
    components: [c("chicken_breast_cooked", 120, "protein"), sandwich(), c("mayonnaise", 15, "fat"), c("celery_raw", 30, "veg"), c("romaine_raw", 20, "veg"), c("onion_raw", 10, "fixed")],
    steps: [
      "Cook the chicken breast in a pan over medium heat, 6 to 7 minutes a side, until cooked through, then cool and chop it finely. Leftover cooked chicken works too.",
      "Mix the chicken with the mayo, chopped celery and onion, a little Dijon mustard, salt and pepper.",
      "Pile onto the bread with the lettuce. The chicken salad keeps in the fridge for three days."
    ]
  },
  {
    id: "avocado_tuna_sandwich",
    source: "rcp_16ffbdabd3",
    name: "Avocado tuna salad sandwich",
    description: "Tuna mashed with avocado, lime, celery and onion on whole wheat, with lettuce.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 10,
    components: [
      c("tuna_canned_water", 110, "protein"),
      sandwich(),
      c("avocado_raw", 60, "fat"),
      c("celery_raw", 25, "veg"),
      c("romaine_raw", 20, "veg"),
      c("onion_raw", 10, "fixed"),
      c("lime_juice", 8, "fixed")
    ],
    steps: [
      "Mash the avocado with the lime juice and a pinch of salt.",
      "Drain the tuna and fold it in with the chopped celery and onion.",
      "Pile onto the bread with the lettuce. Eat the same day: avocado browns."
    ]
  },
  {
    id: "cobb_salad",
    source: "rcp_c25bd98c7b",
    name: "Cobb salad",
    description: "Chicken, hard-boiled egg, bacon, avocado, tomato and blue cheese over romaine.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 20,
    components: [
      c("chicken_breast_cooked", 110, "protein"),
      c("bread_whole_wheat", 28, "carb", [0, 3], "1 slice on the side"),
      c("egg_hardboiled", 50, "fixed", [1, 2], "1 egg"),
      c("romaine_raw", 100, "veg"),
      c("tomato_raw", 60, "veg"),
      c("bacon_cooked", 16, "fat", void 0, "2 slices"),
      c("avocado_raw", 50, "fat"),
      c("blue_cheese", 15, "fat"),
      c("olive_oil", 5, "fat"),
      c("red_wine_vinegar", 8, "fixed")
    ],
    steps: [
      "Boil the egg 10 minutes, cool it under cold water and peel. Cook the bacon in a pan until crisp.",
      "Cook the chicken breast in the same pan, 6 to 7 minutes a side, until cooked through, then chop it.",
      "Shred the romaine into a bowl and lay the chicken, sliced egg, crumbled bacon, avocado, tomato and blue cheese over it in rows.",
      "Whisk the oil and vinegar with salt and pepper and pour over. Serve with the bread."
    ]
  },
  {
    id: "taco_salad",
    source: "rcp_76425d3359",
    name: "Taco salad",
    description: "Seasoned ground beef over romaine with tomato, cheddar, avocado, salsa and tortilla chips.",
    meal_types: ["lunch"],
    cuisine: "Mexican",
    cook_time_minutes: 20,
    components: [
      c("ground_beef_90_cooked", 110, "protein"),
      c("tortilla_chips", 28, "carb", [0, 2.5]),
      c("romaine_raw", 100, "veg"),
      c("tomato_raw", 60, "veg"),
      c("cheddar", 20, "fat"),
      c("avocado_raw", 40, "fat"),
      c("salsa", 30, "fixed"),
      c("onion_raw", 20, "fixed")
    ],
    steps: [
      "Brown the ground beef with the onion, 6 to 8 minutes, until no pink is left. Stir in chili powder, cumin, garlic powder, salt and a splash of water and simmer 3 minutes.",
      "Shred the romaine into a bowl and top with the beef, tomato, cheddar and avocado.",
      "Spoon over the salsa and crush the tortilla chips on top."
    ]
  },
  {
    id: "chicken_caprese_salad",
    source: "rcp_8c6d46e6ee",
    name: "Chicken caprese salad",
    description: "Balsamic chicken over romaine with tomato, mozzarella, avocado and basil.",
    meal_types: ["lunch"],
    cuisine: "Italian",
    cook_time_minutes: 20,
    components: [
      c("chicken_thigh_cooked", 130, "protein"),
      c("bread_whole_wheat", 28, "carb", [0, 3], "1 slice on the side"),
      c("romaine_raw", 80, "veg"),
      c("tomato_raw", 100, "veg"),
      c("mozzarella", 30, "fat"),
      c("avocado_raw", 40, "fat"),
      c("olive_oil", 5, "fat"),
      c("balsamic_vinegar", 10, "fixed"),
      c("basil_fresh", 3, "fixed")
    ],
    steps: [
      "Whisk the balsamic vinegar with the oil, a little garlic, salt and pepper. Toss the chicken thighs in half of it.",
      "Cook the chicken in a pan over medium-high heat, 5 to 6 minutes a side, until cooked through, then slice it.",
      "Shred the romaine into a bowl and top with the chicken, tomato, mozzarella, avocado and basil. Pour over the rest of the dressing. Serve with the bread."
    ]
  },
  {
    id: "salmon_avocado_salad",
    source: "rcp_a6fd477dbf",
    name: "Salmon avocado salad",
    description: "Mustard-roasted salmon over romaine and red cabbage with tomato and avocado.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 25,
    components: [
      c("salmon_cooked", 120, "protein"),
      c("bread_whole_wheat", 28, "carb", [0, 3], "1 slice on the side"),
      c("romaine_raw", 80, "veg"),
      c("tomato_raw", 60, "veg"),
      c("cabbage_raw", 30, "veg"),
      c("avocado_raw", 50, "fat"),
      c("olive_oil", 7, "fat"),
      c("red_wine_vinegar", 8, "fixed")
    ],
    steps: [
      "Heat the oven to 425\xB0F. Brush the salmon with a little Dijon mustard, sprinkle with dried parsley and salt, and roast 12 to 15 minutes, until it flakes.",
      "Whisk the oil and vinegar with garlic powder, salt and pepper.",
      "Toss the romaine, shredded cabbage and tomato with the dressing. Top with the avocado and the salmon. Serve with the bread."
    ]
  },
  {
    id: "chickpea_salad_pita",
    source: "rcp_6253fce637",
    name: "Mediterranean chickpea salad & pita",
    description: "Chickpeas, cucumber, pepper, tomato and feta in lemon and olive oil, with pita.",
    meal_types: ["lunch"],
    cuisine: "Mediterranean",
    cook_time_minutes: 10,
    components: [
      c("chickpeas_cooked", 160, "protein"),
      c("pita_bread", 60, "carb", void 0, "1 pita"),
      c("cucumber_raw", 60, "veg"),
      c("bell_pepper_cooked", 40, "veg"),
      c("tomato_raw", 60, "veg"),
      c("feta_cheese", 30, "fat"),
      c("olive_oil", 7, "fat"),
      c("lemon_juice", 10, "fixed"),
      c("parsley_fresh", 3, "fixed")
    ],
    steps: [
      "Drain and rinse the chickpeas. Dice the cucumber, pepper and tomato.",
      "Whisk the lemon juice and oil with a pinch of oregano, salt and pepper.",
      "Toss everything with the feta and parsley. Serve with warm pita. The salad keeps in the fridge for three days."
    ]
  },
  {
    id: "edamame_quinoa_salad",
    source: "rcp_3b1b6c4155",
    name: "Edamame quinoa salad",
    description: "Quinoa and edamame with corn, pepper and tomato in a lime and cumin dressing.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 25,
    components: [
      c("edamame_cooked", 120, "protein"),
      c("quinoa_cooked", 150, "carb"),
      c("corn_canned", 50, "veg"),
      c("bell_pepper_cooked", 40, "veg"),
      c("tomato_raw", 50, "veg"),
      c("olive_oil", 9, "fat"),
      c("lime_juice", 10, "fixed"),
      c("onion_raw", 10, "fixed")
    ],
    steps: [
      "Rinse the quinoa and simmer it in twice its volume of water, covered, for 15 minutes. Rest 5 minutes, fluff and cool.",
      "Cook the shelled edamame in boiling water for 3 minutes and drain.",
      "Whisk the lime juice and oil with garlic, cumin, salt and pepper.",
      "Toss the quinoa, edamame, corn, diced pepper, tomato and onion with the dressing. It keeps in the fridge for four days."
    ]
  },
  {
    id: "chicken_noodle_soup",
    source: "rcp_74f5296a8c",
    name: "Chicken noodle soup & bread",
    description: "Chicken, egg noodles, carrot, celery, peas and spinach in broth, with bread.",
    meal_types: ["lunch"],
    cuisine: "American",
    cook_time_minutes: 45,
    components: [
      c("chicken_breast_cooked", 110, "protein"),
      c("egg_noodles_cooked", 100, "carb"),
      onTheSide(),
      c("carrots_cooked", 50, "veg"),
      c("celery_raw", 30, "veg"),
      c("peas_cooked", 30, "veg"),
      c("spinach_cooked", 30, "veg"),
      c("onion_raw", 30, "fixed"),
      c("chicken_broth", 300, "fixed"),
      c("olive_oil", 5, "fat")
    ],
    steps: [
      "Soften the diced onion, carrot and celery in the oil for 5 minutes. Add a little garlic and thyme.",
      "Add the broth and the whole chicken breast. Simmer 15 to 18 minutes, until the chicken is cooked through, then lift it out and shred it.",
      "Add the egg noodles and cook until tender, about 6 minutes.",
      "Return the chicken with the peas and spinach for 2 minutes. Finish with lemon juice and pepper. Serve with the bread. The soup keeps in the fridge for four days."
    ]
  },
  {
    id: "minestrone",
    source: "rcp_9ea0b07d5b",
    name: "Minestrone & bread",
    description: "White beans, pasta, squash, carrot, celery and kale in a tomato broth, with bread.",
    meal_types: ["lunch"],
    cuisine: "Italian",
    cook_time_minutes: 55,
    // Beans and pasta hold close to the recipe so the soup stays a soup.
    components: [
      c("cannellini_cooked", 120, "protein", [0.75, 2]),
      c("pasta_cooked", 80, "carb", [0.5, 2]),
      onTheSide(),
      c("bacon_cooked", 8, "fat", void 0, "1 slice"),
      c("butternut_cooked", 70, "veg"),
      c("carrots_cooked", 40, "veg"),
      c("celery_raw", 30, "veg"),
      c("kale_cooked", 40, "veg"),
      c("tomato_sauce", 100, "fixed"),
      c("onion_raw", 30, "fixed"),
      c("chicken_broth", 250, "fixed"),
      c("olive_oil", 5, "fat")
    ],
    steps: [
      "Cook the diced bacon in the oil in a large pot until crisp.",
      "Add the diced squash, carrot, celery and onion and cook 8 minutes. Add a little garlic and thyme.",
      "Add the tomato, broth and a bay leaf and simmer 20 minutes, until the squash is tender.",
      "Stir in the kale, the drained beans and the cooked pasta for 5 minutes. Season and serve with the bread. The soup keeps in the fridge for four days."
    ]
  },
  {
    id: "lentil_soup",
    source: "rcp_a37d156e2f",
    name: "Lentil soup & bread",
    description: "Red lentils and rice simmered with carrot, celery, cumin and lemon, with bread.",
    meal_types: ["lunch"],
    cuisine: "Mediterranean",
    cook_time_minutes: 40,
    components: [
      c("red_lentils_cooked", 200, "protein"),
      c("rice_white_cooked", 50, "carb"),
      onTheSide(),
      c("carrots_cooked", 50, "veg"),
      c("celery_raw", 30, "veg"),
      c("onion_raw", 40, "fixed"),
      c("vegetable_broth", 300, "fixed"),
      c("olive_oil", 7, "fat"),
      c("lemon_juice", 10, "fixed")
    ],
    steps: [
      "Soften the diced onion, carrot and celery in the oil for 5 minutes. Add a little garlic, turmeric and cumin.",
      "Add the rinsed red lentils, the rice and the broth. Simmer 20 to 25 minutes, until the lentils have broken down.",
      "Stir in the lemon juice, salt and pepper. Blend part of it for a smoother soup. Serve with the bread. The soup keeps in the fridge for five days."
    ]
  },
  // Snacks
  {
    id: "hummus_carrots_pita",
    source: "rcp_4493455844",
    name: "Hummus, carrots & pita",
    description: "Hummus with carrot sticks and warm pita.",
    meal_types: ["snack"],
    cuisine: "Mediterranean",
    cook_time_minutes: 5,
    // The pita is always there (the name says so). A whole pita makes this the biggest snack, about 260 kcal.
    components: [c("hummus", 40, "protein", [0.5, 1.5]), c("pita_bread", 60, "carb", [1, 1], "1 pita"), c("carrots_cooked", 80, "veg")],
    steps: ["Cut the carrots into sticks and the pita into wedges.", "Serve with the hummus."]
  },
  {
    id: "guacamole_chips",
    source: "rcp_0bebf72389",
    name: "Guacamole & tortilla chips",
    description: "Avocado mashed with tomato, onion and lime, with tortilla chips.",
    meal_types: ["snack"],
    cuisine: "Mexican",
    cook_time_minutes: 10,
    components: [c("tortilla_chips", 28, "carb", [0.5, 2]), c("avocado_raw", 60, "fat"), c("tomato_raw", 20, "veg"), c("onion_raw", 10, "fixed"), c("lime_juice", 5, "fixed")],
    steps: ["Mash the avocado with the lime juice and a pinch of salt.", "Stir in the finely chopped tomato and onion, and cilantro if there is some.", "Serve with the chips."]
  },
  {
    id: "cottage_ranch_veg",
    source: "rcp_94fd920393",
    name: "Cottage cheese ranch dip & vegetables",
    description: "Cottage cheese blended with ranch seasoning, with cucumber and pepper to dip.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [c("cottage_cheese_2pct", 150, "protein"), c("cucumber_raw", 80, "veg"), c("bell_pepper_cooked", 60, "veg")],
    steps: ["Blend the cottage cheese with a spoonful of ranch seasoning until smooth.", "Cut the cucumber and pepper into sticks and serve with the dip."]
  },
  {
    id: "rice_cakes_pb_banana",
    source: "rcp_6142f23e7a",
    name: "Rice cakes with peanut butter & banana",
    description: "Two rice cakes spread with peanut butter and topped with sliced banana.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [c("peanut_butter", 16, "protein", [0.5, 1.5]), c("rice_cake", 18, "carb", [1, 2], "2 rice cakes"), c("banana_raw", 60, "veg")],
    steps: ["Spread the peanut butter on the rice cakes.", "Top with the sliced banana."]
  },
  {
    id: "pb_energy_balls",
    source: "rcp_1f52e6ee16",
    name: "Peanut butter energy balls",
    description: "Oats, peanut butter, honey and chocolate chips rolled into balls. No baking.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 10,
    components: [c("peanut_butter", 20, "protein"), c("oats_rolled_dry", 20, "carb"), c("honey", 10, "fixed"), c("chocolate_chips_semisweet", 8, "fat")],
    steps: [
      "Stir the peanut butter and honey with a little vanilla, cinnamon and a pinch of salt.",
      "Mix in the oats and chocolate chips.",
      "Chill 20 minutes, then roll into balls. They keep in the fridge for a week."
    ]
  },
  {
    id: "deviled_eggs",
    source: "rcp_e96265b9fa",
    name: "Deviled eggs",
    description: "Hard-boiled eggs filled with yolk mashed with a little mayo and mustard.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 25,
    components: [c("egg_hardboiled", 100, "protein", void 0, "2 eggs"), c("mayonnaise", 10, "fat")],
    steps: [
      "Boil the eggs 10 minutes, cool under cold water and peel.",
      "Halve them and mash the yolks with the mayo, a little Dijon mustard, salt and pepper.",
      "Spoon the filling back into the whites. They keep in the fridge for two days."
    ]
  },
  {
    id: "avocado_toast",
    source: "rcp_e858139a8b",
    name: "Avocado toast",
    description: "Mashed avocado with lemon on whole-wheat toast.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 10,
    components: [c("bread_whole_wheat", 28, "carb", [1, 2], "1 slice"), c("avocado_raw", 60, "fat"), c("lemon_juice", 5, "fixed")],
    steps: ["Toast the bread and rub it with a cut clove of garlic.", "Mash the avocado with the lemon juice, salt and pepper and spread it on the toast."]
  },
  {
    id: "roasted_chickpeas",
    source: "rcp_79f3b05278",
    name: "Crispy roasted chickpeas",
    description: "Chickpeas roasted with cumin and smoked paprika until crisp.",
    meal_types: ["snack"],
    cuisine: "Mediterranean",
    cook_time_minutes: 45,
    components: [c("chickpeas_cooked", 120, "protein"), c("olive_oil", 5, "fat")],
    steps: [
      "Heat the oven to 400\xB0F. Drain the chickpeas and pat them completely dry.",
      "Toss with the oil, cumin, smoked paprika, garlic powder and salt.",
      "Roast 30 to 35 minutes, shaking the tray halfway, until crisp. Eat the same day."
    ]
  },
  {
    id: "granola_bars",
    source: "rcp_c10068d623",
    name: "Granola bars",
    description: "Dates, oats, almonds, peanut butter and honey pressed into bars. No baking.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 15,
    components: [c("peanut_butter", 8, "protein"), c("oats_rolled_dry", 15, "carb"), c("dates_deglet", 21.3, "veg", void 0, "3 dates"), c("almonds", 8, "fat"), c("honey", 5, "fixed")],
    steps: [
      "Blend the dates to a paste. Toast the oats in a dry pan for 5 minutes.",
      "Warm the peanut butter and honey together and stir in the dates, oats and chopped almonds.",
      "Press firmly into a lined tin, chill 20 minutes and cut into bars. They keep in the fridge for a week."
    ]
  },
  {
    id: "tzatziki_veg",
    source: "rcp_7b2ab1b559",
    name: "Tzatziki & vegetables",
    description: "Cucumber yogurt dip with cucumber and carrot sticks.",
    meal_types: ["snack"],
    cuisine: "Mediterranean",
    cook_time_minutes: 10,
    components: [c("tzatziki", 90, "protein"), c("cucumber_raw", 80, "veg"), c("carrots_cooked", 80, "veg")],
    steps: ["Cut the cucumber and carrots into sticks.", "Serve with the tzatziki."]
  },
  // Snacks that are foods put together, not recipes: no database row to start from.
  {
    id: "apple_peanut_butter",
    name: "Apple & peanut butter",
    description: "A sliced apple with peanut butter to dip.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [c("peanut_butter", 16, "protein"), c("apple_raw", 182, "veg", [0.9, 1.1])],
    steps: ["Slice the apple.", "Serve with the peanut butter."]
  },
  {
    id: "yogurt_berries",
    name: "Greek yogurt & berries",
    description: "Greek yogurt with blueberries and a little honey.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [c("greek_yogurt_2pct", 170, "protein"), c("blueberry_raw", 75, "veg"), c("honey", 5, "fixed")],
    steps: ["Spoon the yogurt into a bowl.", "Top with the blueberries and honey."]
  },
  {
    id: "cheese_crackers",
    name: "Cheese & crackers",
    description: "Cheddar with woven wheat crackers.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [c("cheddar", 28, "protein"), c("triscuit", 28, "carb")],
    steps: ["Slice the cheddar.", "Serve with the crackers."]
  },
  {
    id: "hard_boiled_eggs",
    name: "Hard-boiled eggs",
    description: "Two hard-boiled eggs with salt and pepper.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 15,
    components: [c("egg_hardboiled", 100, "protein", [1, 2], "2 eggs")],
    steps: ["Boil the eggs 10 minutes, then cool under cold water.", "Peel and season. Unpeeled, they keep in the fridge for a week."]
  },
  {
    id: "almonds_handful",
    name: "A handful of almonds",
    description: "About 23 almonds.",
    meal_types: ["snack"],
    cuisine: "American",
    cook_time_minutes: 5,
    components: [c("almonds", 28, "protein", [0.75, 1.5])],
    steps: ["Measure out the almonds.", "Eat them as they are, or toast them in a dry pan for 3 minutes."]
  }
];
var CUISINE = {
  Greek: "Mediterranean",
  "Middle Eastern": "Mediterranean",
  Chinese: "Asian",
  Japanese: "Asian",
  Korean: "Asian",
  Filipino: "Asian",
  British: "American",
  Swedish: "American",
  Argentinian: "American"
};
var DATABASE_DINNERS = MENU_RECIPES.map((r2) => ({
  id: r2.id,
  name: r2.name,
  description: r2.description,
  meal_types: PRESENTATION[r2.id]?.keeps ? ["lunch", "dinner"] : ["dinner"],
  cuisine: CUISINE[r2.cuisine] ?? r2.cuisine,
  cook_time_minutes: r2.minutes,
  components: r2.components.map((x) => ({ ...x })),
  steps: MENU_STEPS[r2.id] ?? []
}));
var addOnOnly = (r2) => r2.meal_types.length === 1 && r2.meal_types[0] !== "dinner";
var SOURCES = { overnight_oats: "rcp_46ebd4e852" };
var CATALOG = [
  ...DATABASE_DINNERS,
  ...MOCK_CATALOG.filter(addOnOnly).map((r2) => SOURCES[r2.id] ? { ...r2, source: SOURCES[r2.id] } : r2),
  ...DATABASE_ADDONS
];
function recipeNutrients(r2, grams = (x) => x.grams) {
  return r2.components.reduce((n, x) => addNutrients(n, nutrientsOf(x.food, grams(x))), ZERO);
}
var recipeAllergens = (r2) => [...new Set(r2.components.flatMap((x) => FOODS[x.food]?.allergens ?? []))];

// features/menu/catalog/shopping.ts
var fresh = (buy) => ({ buy, cls: "fresh" });
var pack = (buy, query, ...brands) => ({ buy, cls: "packaged", query, brands });
var SHOP = {
  // Meat and fish: bought raw, by weight
  chicken_breast_cooked: fresh("Chicken breast, boneless skinless"),
  chicken_thigh_cooked: fresh("Chicken thighs, boneless skinless"),
  ground_chicken_cooked: fresh("Ground chicken"),
  ground_turkey_cooked: fresh("Ground turkey, 93% lean"),
  ground_beef_90_cooked: fresh("Ground beef, 90% lean"),
  ground_pork_cooked: fresh("Ground pork"),
  flank_steak_cooked: fresh("Flank steak"),
  beef_sirloin_cooked: fresh("Sirloin steak"),
  pork_tenderloin_cooked: fresh("Pork tenderloin"),
  salmon_cooked: fresh("Salmon fillets"),
  cod_cooked: fresh("Cod fillets"),
  shrimp_cooked: fresh("Shrimp, raw, peeled and deveined"),
  // Produce
  garlic_raw: fresh("Garlic"),
  onion_raw: fresh("Yellow onion"),
  ginger_raw: fresh("Fresh ginger"),
  tomato_raw: fresh("Tomatoes"),
  avocado_raw: fresh("Avocado"),
  romaine_raw: fresh("Romaine lettuce"),
  cucumber_raw: fresh("Cucumber"),
  broccoli_cooked: fresh("Broccoli"),
  green_beans_cooked: fresh("Green beans"),
  bell_pepper_cooked: fresh("Bell peppers"),
  zucchini_cooked: fresh("Zucchini"),
  asparagus_cooked: fresh("Asparagus"),
  carrots_cooked: fresh("Carrots"),
  spinach_cooked: fresh("Baby spinach"),
  kale_cooked: fresh("Kale"),
  cabbage_raw: fresh("Green cabbage"),
  coleslaw_mix_raw: fresh("Coleslaw mix"),
  bok_choy_raw: fresh("Bok choy"),
  mushrooms_cooked: fresh("White mushrooms"),
  celery_raw: fresh("Celery"),
  scallion_raw: fresh("Green onions"),
  parsley_fresh: fresh("Fresh parsley"),
  basil_fresh: fresh("Fresh basil"),
  potato_baked: fresh("Russet potatoes"),
  potato_boiled: fresh("Baby potatoes"),
  mashed_potatoes: fresh("Russet potatoes"),
  sweet_potato_baked: fresh("Sweet potatoes"),
  lemon_juice: fresh("Lemons"),
  lime_juice: fresh("Limes"),
  // Bakery
  hamburger_bun: fresh("Hamburger buns"),
  // Grains, pasta, beans
  rice_white_cooked: pack("Long grain white rice", "long grain white rice 32 oz", "Mahatma", "Ben's Original", "Riceland"),
  jasmine_rice_cooked: pack("Jasmine rice", "jasmine rice 32 oz", "Mahatma", "Dynasty", "Lundberg"),
  basmati_rice_cooked: pack("Basmati rice", "basmati rice 32 oz", "Mahatma", "Royal", "Lundberg"),
  rice_brown_cooked: pack("Brown rice", "brown rice 32 oz", "Mahatma", "Ben's Original", "Lundberg"),
  quinoa_cooked: pack("Quinoa", "quinoa 16 oz", "Bob's Red Mill", "Ancient Harvest"),
  couscous_cooked: pack("Couscous", "couscous 10 oz", "Near East", "Bob's Red Mill"),
  pasta_cooked: pack("Penne pasta", "penne pasta 16 oz", "Barilla", "De Cecco", "Ronzoni"),
  spaghetti_cooked: pack("Spaghetti", "spaghetti 16 oz", "Barilla", "De Cecco", "Ronzoni"),
  flour_tortilla: pack("Flour tortillas", "flour tortillas soft taco 10 count", "Mission", "Guerrero"),
  corn_tortilla: pack("Corn tortillas", "corn tortillas 30 count", "Mission", "Guerrero"),
  black_beans_cooked: pack("Black beans, canned", "black beans 15 oz can", "Bush's", "Goya"),
  chickpeas_cooked: pack("Chickpeas, canned", "chickpeas garbanzo 15 oz can", "Goya", "Bush's"),
  red_lentils_cooked: pack("Red lentils, dry", "red lentils 16 oz", "Bob's Red Mill", "Goya"),
  refried_beans: pack("Refried beans", "refried beans 16 oz can", "Old El Paso", "Rosarita"),
  corn_canned: pack("Corn, canned", "whole kernel corn 15 oz can", "Del Monte", "Green Giant"),
  panko: pack("Panko breadcrumbs", "panko bread crumbs 8 oz", "Kikkoman", "Progresso"),
  cornstarch: pack("Cornstarch", "corn starch 16 oz", "Argo", "Clabber Girl"),
  // Dairy, eggs, chilled
  butter_salted: pack("Butter, salted", "salted butter 16 oz", "Land O'Lakes", "Challenge"),
  heavy_cream: pack("Heavy cream", "heavy whipping cream 16 oz", "Land O'Lakes", "Horizon Organic"),
  parmesan_grated: pack("Parmesan, grated", "grated parmesan cheese 8 oz", "Kraft", "BelGioioso"),
  feta_cheese: pack("Feta, crumbled", "crumbled feta cheese", "Athenos", "President"),
  cheddar: pack("Cheddar, shredded", "shredded sharp cheddar cheese 8 oz", "Tillamook", "Sargento", "Kraft"),
  mozzarella: pack("Mozzarella, shredded", "shredded mozzarella cheese 8 oz", "Sargento", "Kraft", "Galbani"),
  ricotta_partskim: pack("Ricotta, part-skim", "part skim ricotta cheese 15 oz", "Galbani", "Polly-O"),
  greek_yogurt_2pct: pack("Greek yogurt, plain 2%", "plain greek yogurt 2% 32 oz", "Fage", "Chobani"),
  sour_cream_light: pack("Sour cream, light", "light sour cream 16 oz", "Daisy", "Breakstone's"),
  egg_whole_raw: pack("Eggs, large", "large eggs 12 count", "Eggland's Best", "Vital Farms"),
  tofu_firm: pack("Tofu, extra firm", "extra firm tofu 14 oz", "Nasoya", "House Foods"),
  hummus: pack("Hummus", "classic hummus 10 oz", "Sabra", "Cedar's"),
  tzatziki: pack("Tzatziki", "tzatziki sauce", "Cedar's", "Hannah"),
  pesto: pack("Basil pesto", "basil pesto 6 oz jar", "Barilla", "Classico"),
  edamame_cooked: pack("Edamame, shelled, frozen", "shelled edamame frozen 12 oz", "Seapoint Farms", "Birds Eye"),
  peas_cooked: pack("Peas, frozen", "frozen sweet peas 12 oz", "Birds Eye", "Green Giant"),
  // Oils, sauces, condiments
  olive_oil: pack("Olive oil, extra virgin", "extra virgin olive oil 500 ml", "California Olive Ranch", "Bertolli", "Colavita"),
  sesame_oil: pack("Toasted sesame oil", "toasted sesame oil 5 oz", "Kadoya", "Dynasty"),
  soy_sauce: pack("Soy sauce", "soy sauce 15 oz", "Kikkoman", "La Choy"),
  teriyaki_sauce: pack("Teriyaki sauce", "teriyaki marinade sauce 10 oz", "Kikkoman", "Soy Vay"),
  oyster_sauce: pack("Oyster sauce", "oyster sauce", "Lee Kum Kee", "Kikkoman"),
  fish_sauce: pack("Fish sauce", "fish sauce", "Thai Kitchen", "Red Boat"),
  sriracha: pack("Sriracha", "sriracha hot chili sauce 17 oz", "Huy Fong", "Tabasco"),
  miso: pack("Miso paste", "white miso paste", "Hikari", "Miso Master"),
  curry_paste_red: pack("Red curry paste", "red curry paste 4 oz", "Thai Kitchen", "Mae Ploy"),
  coconut_milk_light: pack("Coconut milk, light", "lite coconut milk 13.66 oz can", "Thai Kitchen", "Goya"),
  tomato_sauce: pack("Tomato sauce, canned", "tomato sauce 15 oz can", "Hunt's", "Contadina"),
  tomato_paste: pack("Tomato paste", "tomato paste 6 oz can", "Hunt's", "Contadina"),
  salsa: pack("Salsa", "salsa medium 16 oz", "Pace", "Tostitos", "Herdez"),
  bbq_sauce: pack("BBQ sauce", "original barbecue sauce 18 oz", "Sweet Baby Ray's", "Stubb's"),
  ketchup: pack("Ketchup", "tomato ketchup 20 oz", "Heinz", "Hunt's"),
  mayonnaise: pack("Mayonnaise", "real mayonnaise 30 oz", "Hellmann's", "Duke's"),
  worcestershire_sauce: pack("Worcestershire sauce", "worcestershire sauce 10 oz", "Lea & Perrins", "French's"),
  honey: pack("Honey", "honey 12 oz", "Nature Nate's", "Sue Bee"),
  sugar_brown: pack("Brown sugar", "light brown sugar 2 lb", "Domino", "C&H"),
  rice_vinegar: pack("Rice vinegar", "rice vinegar 12 oz", "Marukan", "Nakano"),
  white_vinegar: pack("White vinegar", "distilled white vinegar 32 oz", "Heinz"),
  red_wine_vinegar: pack("Red wine vinegar", "red wine vinegar 12 oz", "Pompeian", "Colavita"),
  balsamic_vinegar: pack("Balsamic vinegar", "balsamic vinegar of modena 8.5 oz", "Pompeian", "Colavita"),
  chicken_broth: pack("Chicken broth", "chicken broth 32 oz carton", "Swanson", "Pacific Foods"),
  capers: pack("Capers", "capers non pareil 3.5 oz", "Mezzetta", "Reese"),
  kalamata_olives: pack("Kalamata olives, pitted", "pitted kalamata olives", "Mezzetta", "Divina"),
  tahini: pack("Tahini", "tahini sesame paste 16 oz", "Soom", "Joyva", "Once Again"),
  peanut_butter: pack("Peanut butter, creamy", "creamy peanut butter 16 oz", "Jif", "Smucker's", "Skippy"),
  cashews: pack("Cashews, roasted", "roasted cashews", "Planters", "Blue Diamond"),
  walnuts: pack("Walnuts", "chopped walnuts", "Diamond of California", "Fisher"),
  sesame_seeds: pack("Sesame seeds", "sesame seeds", "McCormick", "Simply Organic"),
  // Spices that carry calories in a recipe
  garam_masala: pack("Garam masala", "garam masala", "McCormick", "Simply Organic"),
  curry_powder: pack("Curry powder", "curry powder", "McCormick", "Simply Organic"),
  chili_powder: pack("Chili powder", "chili powder", "McCormick", "Simply Organic"),
  cumin_ground: pack("Ground cumin", "ground cumin", "McCormick", "Simply Organic"),
  // ---- Foods only the mock's breakfasts, lunches and sides use (not the 50 dinners). Proposed, same as above.
  banana_raw: fresh("Bananas"),
  blueberry_raw: fresh("Blueberries"),
  strawberry_raw: fresh("Strawberries"),
  cauliflower_cooked: fresh("Cauliflower"),
  bread_whole_wheat: fresh("Whole wheat bread"),
  english_muffin: fresh("English muffins"),
  pita_bread: fresh("Pita bread"),
  turkey_deli: fresh("Deli turkey breast, sliced"),
  egg_scrambled: pack("Eggs, large", "large eggs 12 count", "Eggland's Best", "Vital Farms"),
  egg_hardboiled: pack("Eggs, large", "large eggs 12 count", "Eggland's Best", "Vital Farms"),
  greek_yogurt_nonfat: pack("Greek yogurt, plain nonfat", "plain nonfat greek yogurt 32 oz", "Fage", "Chobani"),
  cottage_cheese_2pct: pack("Cottage cheese, 2%", "cottage cheese 2% 16 oz", "Good Culture", "Daisy"),
  milk_2pct: pack("Milk, 2%", "2% reduced fat milk half gallon", "Horizon Organic", "Organic Valley"),
  oats_rolled_dry: pack("Rolled oats", "old fashioned rolled oats 18 oz", "Quaker", "Bob's Red Mill"),
  egg_noodles_cooked: pack("Egg noodles", "wide egg noodles 12 oz", "No Yolks", "Manischewitz"),
  kidney_beans_cooked: pack("Kidney beans, canned", "dark red kidney beans 15 oz can", "Bush's", "Goya"),
  lentils_cooked: pack("Lentils, dry", "lentils 16 oz", "Bob's Red Mill", "Goya"),
  tuna_canned_water: pack("Tuna in water, canned", "chunk light tuna in water 5 oz can", "StarKist", "Bumble Bee"),
  marinara_sauce: pack("Marinara sauce", "marinara sauce 24 oz jar", "Rao's", "Prego"),
  vegetable_broth: pack("Vegetable broth", "vegetable broth 32 oz carton", "Swanson", "Pacific Foods"),
  almonds: pack("Almonds", "whole natural almonds", "Blue Diamond", "Planters"),
  // ---- Added 2026-11-20 for the breakfasts, lunches and snacks. Brands are PROPOSED, like the rest.
  bacon_cooked: pack("Bacon", "bacon 12 oz", "Oscar Mayer", "Hormel"),
  flour_whole_wheat: pack("Whole wheat flour", "whole wheat flour 5 lb", "King Arthur", "Bob's Red Mill"),
  maple_syrup: pack("Maple syrup, pure", "pure maple syrup 8 oz", "Maple Grove Farms", "Butternut Mountain Farm"),
  apple_raw: fresh("Apples"),
  caesar_dressing: pack("Caesar dressing", "caesar dressing 12 oz", "Ken's Steak House", "Newman's Own"),
  crouton: pack("Croutons", "seasoned croutons 5 oz", "New York Bakery", "Fresh Gourmet"),
  blue_cheese: pack("Blue cheese, crumbled", "blue cheese crumbles 5 oz", "Salemville", "Athenos"),
  tortilla_chips: pack("Tortilla chips", "tortilla chips 11 oz", "Tostitos", "Mission"),
  cannellini_cooked: pack("Cannellini beans, canned", "cannellini beans 15 oz can", "Goya", "Bush's"),
  butternut_cooked: fresh("Butternut squash"),
  rice_cake: pack("Rice cakes, plain", "lightly salted rice cakes", "Quaker", "Lundberg"),
  chocolate_chips_semisweet: pack("Semisweet chocolate chips", "semi-sweet chocolate chips 12 oz", "Nestle Toll House", "Ghirardelli"),
  dates_deglet: pack("Dates, pitted", "pitted dates 8 oz", "Sunsweet", "Dole"),
  triscuit: pack("Woven wheat crackers", "original woven wheat crackers 8.5 oz", "Triscuit"),
  hash_browns: pack("Hash browns, frozen", "shredded hash browns frozen 30 oz", "Ore-Ida", "Simply Potatoes")
};
var PANTRY = {
  "salt": pack("Salt", "iodized salt 26 oz", "Morton"),
  "black pepper": pack("Black pepper, ground", "ground black pepper", "McCormick"),
  "black peppercorns": pack("Black peppercorns", "whole black peppercorns", "McCormick"),
  "white pepper": pack("White pepper, ground", "ground white pepper", "McCormick"),
  "dried oregano": pack("Dried oregano", "oregano leaves", "McCormick", "Simply Organic"),
  "dried thyme": pack("Dried thyme", "thyme leaves", "McCormick", "Simply Organic"),
  "dried basil": pack("Dried basil", "basil leaves", "McCormick", "Simply Organic"),
  "dried dill": pack("Dried dill", "dill weed", "McCormick", "Simply Organic"),
  "dried marjoram": pack("Dried marjoram", "marjoram leaves", "McCormick"),
  "ground cumin": pack("Ground cumin", "ground cumin", "McCormick", "Simply Organic"),
  "ground coriander": pack("Ground coriander", "ground coriander", "McCormick", "Simply Organic"),
  "ground ginger": pack("Ground ginger", "ground ginger", "McCormick", "Simply Organic"),
  "ground nutmeg": pack("Ground nutmeg", "ground nutmeg", "McCormick"),
  "allspice": pack("Ground allspice", "ground allspice", "McCormick"),
  "cinnamon": pack("Ground cinnamon", "ground cinnamon", "McCormick", "Simply Organic"),
  "turmeric": pack("Ground turmeric", "ground turmeric", "McCormick", "Simply Organic"),
  "paprika": pack("Paprika", "paprika", "McCormick", "Simply Organic"),
  "smoked paprika": pack("Smoked paprika", "smoked paprika", "McCormick", "Simply Organic"),
  "chili powder": pack("Chili powder", "chili powder", "McCormick", "Simply Organic"),
  "garlic powder": pack("Garlic powder", "garlic powder", "McCormick", "Simply Organic"),
  "red pepper flakes": pack("Crushed red pepper", "crushed red pepper", "McCormick"),
  "za'atar": pack("Za'atar", "zaatar seasoning", "Ziyad", "Sadaf"),
  "bay leaf": pack("Bay leaves", "bay leaves", "McCormick"),
  "bay leaves": pack("Bay leaves", "bay leaves", "McCormick"),
  "sugar": pack("Sugar", "granulated sugar 4 lb", "Domino", "C&H"),
  "flour": pack("All-purpose flour", "all purpose flour 5 lb", "Gold Medal", "King Arthur"),
  "Dijon mustard": pack("Dijon mustard", "dijon mustard 12 oz", "Grey Poupon", "Maille"),
  "cider vinegar": pack("Apple cider vinegar", "apple cider vinegar 16 oz", "Bragg", "Heinz"),
  "rice vinegar": pack("Rice vinegar", "rice vinegar 12 oz", "Marukan", "Nakano"),
  "balsamic vinegar": pack("Balsamic vinegar", "balsamic vinegar of modena 8.5 oz", "Pompeian", "Colavita"),
  "mirin": pack("Mirin", "mirin sweet cooking rice wine", "Kikkoman", "Eden"),
  "ginger-garlic paste": pack("Ginger garlic paste", "ginger garlic paste", "Shan", "Deep"),
  "chipotle in adobo": pack("Chipotle peppers in adobo", "chipotle peppers in adobo sauce 7 oz", "La Costena", "Embasa"),
  "beef stock": pack("Beef broth", "beef broth 32 oz carton", "Swanson", "Pacific Foods"),
  "beef broth": pack("Beef broth", "beef broth 32 oz carton", "Swanson", "Pacific Foods"),
  "vegetable stock": pack("Vegetable broth", "vegetable broth 32 oz carton", "Swanson", "Pacific Foods"),
  "vegetable broth": pack("Vegetable broth", "vegetable broth 32 oz carton", "Swanson", "Pacific Foods"),
  "sriracha (optional)": pack("Sriracha", "sriracha hot chili sauce 17 oz", "Huy Fong", "Tabasco"),
  // Wine is name-only: alcohol can't be sent by barcode in many states, and any dry bottle works.
  "dry white wine": fresh("Dry white wine"),
  "dry marsala wine": fresh("Dry marsala wine"),
  "red wine (optional)": fresh("Dry red wine"),
  // Fresh
  "garlic": fresh("Garlic"),
  "fresh ginger": fresh("Fresh ginger"),
  "scallions": fresh("Green onions"),
  "parsley": fresh("Fresh parsley"),
  "cilantro": fresh("Fresh cilantro"),
  "fresh dill": fresh("Fresh dill"),
  "shallot": fresh("Shallots"),
  "red onion": fresh("Red onion"),
  "jalapeno (optional)": fresh("Jalapeno"),
  "chilies (optional)": fresh("Thai chilies")
};

// features/menu/next/catalog/avoid.ts
var BY_ALLERGEN = {
  fish: ["fish"],
  shellfish: ["shellfish"],
  dairy: ["milk"],
  egg: ["egg"],
  soy: ["soy"],
  sesame: ["sesame"],
  peanuts: ["peanuts"],
  treenuts: ["tree_nuts"],
  nuts: ["tree_nuts", "peanuts"],
  // Gluten is wheat, plus oats: most oats are grown and milled with wheat. Barley and rye would join here.
  gluten: ["wheat"]
};
var OATS = ["oats_rolled_dry"];
var BY_GROUP = {
  pork: ["pork_tenderloin_cooked", "ground_pork_cooked", "bacon_cooked"],
  beef: ["ground_beef_90_cooked", "flank_steak_cooked", "beef_sirloin_cooked"],
  chicken: ["chicken_breast_cooked", "chicken_thigh_cooked", "ground_chicken_cooked", "chicken_broth"],
  turkey: ["ground_turkey_cooked", "turkey_deli"],
  lamb: [],
  tofu: ["tofu_firm"],
  cheese: ["cheddar", "feta_cheese", "parmesan_grated", "cottage_cheese_2pct", "mozzarella", "ricotta_partskim", "blue_cheese"],
  beans: ["black_beans_cooked", "kidney_beans_cooked", "refried_beans", "edamame_cooked", "cannellini_cooked"],
  lentils: ["lentils_cooked", "red_lentils_cooked"],
  chickpeas: ["chickpeas_cooked", "hummus"],
  onions: ["onion_raw", "scallion_raw"],
  garlic: ["garlic_raw"],
  tomatoes: ["tomato_raw", "tomato_sauce", "marinara_sauce", "salsa", "tomato_paste", "ketchup"],
  peppers: ["bell_pepper_cooked"],
  coconut: ["coconut_milk_light"],
  mayo: ["mayonnaise"],
  honey: ["honey"],
  ginger: ["ginger_raw"],
  broccoli: ["broccoli_cooked"],
  cabbage: ["cabbage_raw", "coleslaw_mix_raw", "bok_choy_raw"],
  spinach: ["spinach_cooked"],
  peas: ["peas_cooked"],
  corn: ["corn_canned", "corn_tortilla", "tortilla_chips"],
  cucumber: ["cucumber_raw"],
  carrots: ["carrots_cooked"],
  potatoes: ["potato_baked", "potato_boiled", "mashed_potatoes", "hash_browns"],
  rice: ["rice_white_cooked", "jasmine_rice_cooked", "basmati_rice_cooked", "rice_brown_cooked"],
  pasta: ["spaghetti_cooked", "pasta_cooked", "egg_noodles_cooked", "couscous_cooked"],
  bread: ["bread_whole_wheat", "flour_tortilla", "corn_tortilla", "hamburger_bun", "pita_bread", "english_muffin", "crouton"],
  avocado: ["avocado_raw"],
  // Things people say they avoid that no catalog food is yet; kept so the choice stays and starts working
  // the day a recipe uses one.
  olives: ["kalamata_olives"],
  pickles: [],
  mustard: [],
  eggplant: [],
  celery: ["celery_raw"],
  squash: ["butternut_cooked"],
  // Asked by the first-visit intake (screens/onboarding/Section2.tsx DISLIKES).
  mushrooms: ["mushrooms_cooked"],
  quinoa: ["quinoa_cooked"],
  tuna: ["tuna_canned_water"],
  beets: [],
  okra: []
};
function excludedFoods(avoid) {
  const out = /* @__PURE__ */ new Set();
  const allergens = new Set(avoid.flatMap((a) => BY_ALLERGEN[a] ?? []));
  for (const f2 of Object.values(FOODS)) if (f2.allergens?.some((a) => allergens.has(a))) out.add(f2.id);
  if (avoid.includes("gluten")) OATS.forEach((id) => out.add(id));
  for (const a of avoid) for (const id of BY_GROUP[a] ?? []) out.add(id);
  return out;
}
var recipeAvoided = (r2, avoid, ex = excludedFoods(avoid)) => r2.components.some((x) => ex.has(x.food)) || avoid.includes("spicy") && PRESENTATION[r2.id].spicy;
var KNOWN_VALUES = [...Object.keys(BY_ALLERGEN), ...Object.keys(BY_GROUP), "spicy"];

// features/menu/next/catalog/packs.ts
var p2 = (label, grams, price, yieldAsEaten = 1, source = "standin", pantry = false) => ({ label, grams, price, yield: yieldAsEaten, source, pantry: pantry || void 0 });
var K = "kroger";
var PACKS = {
  // Protein
  chicken_breast_cooked: p2("1.5 lb pack of chicken breasts", 680, 6.99, 0.75),
  chicken_thigh_cooked: p2("1.5 lb pack of boneless thighs", 680, 5.99, 0.72),
  ground_beef_90_cooked: p2("1 lb lean ground beef", 454, 6.49, 0.75),
  ground_turkey_cooked: p2("1 lb ground turkey", 454, 5.49, 0.75),
  salmon_cooked: p2("1 lb salmon fillets", 454, 10.99, 0.8),
  tuna_canned_water: p2("5 oz can of tuna", 113, 1.29),
  // drained weight
  shrimp_cooked: p2("1 lb bag of frozen shrimp", 454, 8.99, 0.8),
  tofu_firm: p2("14 oz block of firm tofu", 397, 2.29),
  egg_scrambled: p2("2 dozen eggs", 24 * 61, 5.99, 1, K),
  // counted in eggs: one egg is one 61 g serving
  black_beans_cooked: p2("15 oz can of black beans", 240, 1.09),
  // drained
  kidney_beans_cooked: p2("15 oz can of kidney beans", 240, 1.09),
  lentils_cooked: p2("1 lb bag of dry lentils", 454, 1.79, 2.5),
  hummus: p2("10 oz tub of hummus", 283, 3.99),
  // Dairy
  greek_yogurt_2pct: p2("32 oz tub of 2% Greek yogurt", 907, 5.49),
  greek_yogurt_nonfat: p2("32 oz tub of nonfat Greek yogurt", 907, 4.99),
  milk_2pct: p2("half gallon of 2% milk", 1950, 2.79),
  cheddar: p2("8 oz block of cheddar", 227, 2.99),
  feta_cheese: p2("6 oz tub of feta", 170, 3.79),
  parmesan_grated: p2("8 oz grated parmesan", 227, 4.49),
  sour_cream_light: p2("16 oz light sour cream", 454, 2.29),
  butter_salted: p2("1 lb butter", 454, 4.99),
  // Grains and starches
  rice_white_cooked: p2("2 lb bag of white rice", 907, 2.49, 2.7),
  jasmine_rice_cooked: p2("2 lb bag of jasmine rice", 907, 3.99, 2.7),
  spaghetti_cooked: p2("1 lb box of spaghetti", 454, 1.49, 2.25),
  oats_rolled_dry: p2("18 oz canister of rolled oats", 510, 3.29),
  bread_whole_wheat: p2("loaf of whole-wheat bread (20 slices)", 20 * 28, 3.29),
  flour_tortilla: p2("pack of 10 flour tortillas", 10 * 49, 1.99, 1, K),
  corn_tortilla: p2("pack of 30 corn tortillas", 30 * 26, 2.79),
  sweet_potato_baked: p2("1 lb sweet potatoes", 454, 1.29, 0.8),
  // Vegetables and fruit
  broccoli_cooked: p2("1 lb broccoli crowns", 454, 2.49, 0.85),
  green_beans_cooked: p2("12 oz bag of green beans", 340, 2.99, 0.9),
  bell_pepper_cooked: p2("bell pepper", 170, 1.29, 0.8),
  zucchini_cooked: p2("1 lb zucchini", 454, 1.79, 0.9),
  spinach_cooked: p2("10 oz bag of spinach", 283, 3.99, 0.42),
  carrots_cooked: p2("1 lb carrots", 454, 1.99, 0.9, K),
  onion_raw: p2("1 lb yellow onions", 454, 0.79, 0.9, K),
  garlic_raw: p2("head of garlic", 50, 0.75, 0.87, K),
  romaine_raw: p2("3 romaine hearts", 510, 3.49, 0.9),
  tomato_raw: p2("20 oz vine tomatoes", 567, 2.99, 0.95, K),
  cucumber_raw: p2("English cucumber", 400, 1.79, 0.97, K),
  corn_canned: p2("15 oz can of corn", 250, 0.99),
  // drained
  blueberry_raw: p2("11 oz blueberries", 312, 3.99),
  strawberry_raw: p2("1 lb strawberries", 454, 2.99, 0.9),
  banana_raw: p2("banana", 180, 0.27, 0.65),
  lime_juice: p2("lime", 30, 0.5),
  // grams of juice in one lime, like the lemon below; was a 16 oz bottle, but the list says "Limes"
  // Sauces, oils and seasoning
  marinara_sauce: p2("24 oz jar of marinara", 680, 2.99),
  tomato_sauce: p2("15 oz can of tomato sauce", 425, 0.99),
  salsa: p2("16 oz jar of salsa", 454, 2.99),
  soy_sauce: p2("10 oz soy sauce", 340, 2.49, 1, K, true),
  teriyaki_sauce: p2("10 oz teriyaki sauce", 340, 3.49),
  chicken_broth: p2("32 oz carton of chicken broth", 946, 1.5, 1, K),
  olive_oil: p2("32 oz olive oil", 861, 10.99, 1, K, true),
  sesame_oil: p2("12.7 oz sesame oil", 345, 11.99, 1, K, true),
  sesame_seeds: p2("3.75 oz sesame seeds", 106, 3.99, 1, "standin", true),
  peanut_butter: p2("16 oz peanut butter", 454, 2.79),
  mayonnaise: p2("15 oz mayo", 425, 3.49),
  honey: p2("24 oz honey", 680, 5.99, 1, K, true),
  chili_powder: p2("2.5 oz chili powder", 71, 2.49, 1, "standin", true),
  cumin_ground: p2("1.5 oz cumin", 42, 3.49, 1, "standin", true),
  // Second batch
  pork_tenderloin_cooked: p2("1.25 lb pork tenderloin", 567, 5.99, 0.75),
  ground_chicken_cooked: p2("1 lb ground chicken", 454, 4.99, 0.75),
  cod_cooked: p2("1 lb cod fillets", 454, 8.99, 0.8),
  turkey_deli: p2("9 oz deli turkey", 255, 4.99),
  egg_hardboiled: { ...p2("2 dozen eggs", 24 * 50, 5.99, 1, K), buyAs: { food: "egg_scrambled", ratio: 61 / 50 } },
  chickpeas_cooked: p2("15 oz can of chickpeas", 240, 1.09),
  cottage_cheese_2pct: p2("16 oz cottage cheese", 454, 3.29),
  potato_baked: p2("5 lb bag of potatoes", 2268, 3.99, 0.85),
  quinoa_cooked: p2("12 oz bag of quinoa", 340, 4.49, 3),
  pasta_cooked: p2("1 lb box of pasta", 454, 1.49, 2.25),
  egg_noodles_cooked: p2("12 oz bag of egg noodles", 340, 2.29, 2.8),
  hamburger_bun: p2("pack of 8 burger buns", 8 * 52, 2.49),
  pita_bread: p2("pack of 6 pitas", 6 * 60, 2.99),
  english_muffin: p2("pack of 6 English muffins", 6 * 57, 2.99),
  peas_cooked: p2("12 oz bag of frozen peas", 340, 1.09, 1, K),
  cabbage_raw: p2("head of green cabbage", 900, 1.99, 0.85),
  cauliflower_cooked: p2("head of cauliflower", 600, 2.99, 0.7),
  scallion_raw: p2("bunch of green onions", 100, 0.99, 0.9),
  ginger_raw: p2("knob of ginger", 60, 0.75, 0.85),
  avocado_raw: p2("avocado", 200, 1.67, 0.75, K),
  lemon_juice: p2("lemon", 45, 0.69),
  // grams of juice in one lemon
  coconut_milk_light: p2("13.5 oz can of light coconut milk", 400, 2.29),
  pesto: p2("6.5 oz jar of pesto", 184, 3.99),
  bbq_sauce: p2("18 oz BBQ sauce", 510, 2.49),
  almonds: p2("6 oz bag of almonds", 170, 4.49),
  curry_powder: p2("2 oz curry powder", 57, 3.49, 1, "standin", true),
  vegetable_broth: p2("32 oz carton of vegetable broth", 946, 1.79),
  // ---- Added 2026-11-16 for the 50 database meals. Every row is a stand-in: a typical US supermarket
  // pack and price written by hand, not read from any store. Yields are hand-set too.
  flank_steak_cooked: p2("1.5 lb flank steak", 680, 14.99, 0.75),
  beef_sirloin_cooked: p2("1 lb sirloin steak", 454, 9.99, 0.75),
  ground_pork_cooked: p2("1 lb ground pork", 454, 4.99, 0.72),
  edamame_cooked: p2("12 oz bag of shelled edamame", 340, 3.29),
  red_lentils_cooked: p2("1 lb bag of red lentils", 454, 2.99, 2.4),
  refried_beans: p2("16 oz can of refried beans", 454, 1.49),
  egg_whole_raw: p2("dozen eggs", 12 * 50, 3.49),
  heavy_cream: p2("16 oz heavy cream", 473, 3.99),
  mozzarella: p2("8 oz shredded mozzarella", 227, 2.99),
  ricotta_partskim: p2("15 oz tub of ricotta", 425, 3.49),
  tzatziki: p2("10 oz tub of tzatziki", 283, 4.49),
  basmati_rice_cooked: p2("2 lb bag of basmati rice", 907, 4.99, 2.9),
  rice_brown_cooked: p2("2 lb bag of brown rice", 907, 2.99, 2.4),
  couscous_cooked: p2("10 oz box of couscous", 283, 2.79, 2.5),
  mashed_potatoes: { ...p2("5 lb bag of potatoes", 2268, 3.99, 0.95), buyAs: { food: "potato_baked", ratio: 0.85 / 0.95 } },
  potato_boiled: p2("1.5 lb bag of baby potatoes", 680, 3.99, 0.97),
  panko: p2("8 oz box of panko", 227, 2.49),
  asparagus_cooked: p2("1 lb bunch of asparagus", 454, 3.99, 0.8),
  bok_choy_raw: p2("1 lb bok choy", 454, 2.49, 0.88),
  kale_cooked: p2("bunch of kale", 250, 1.99, 0.6),
  mushrooms_cooked: p2("8 oz white mushrooms", 227, 2.49, 0.7),
  celery_raw: p2("bunch of celery", 450, 1.99, 0.9),
  coleslaw_mix_raw: p2("14 oz bag of coleslaw mix", 397, 1.99),
  basil_fresh: p2("0.75 oz pack of basil", 21, 2.49, 0.8),
  parsley_fresh: p2("bunch of parsley", 60, 0.99, 0.6),
  kalamata_olives: p2("6 oz jar of kalamata olives", 170, 3.99),
  capers: p2("3.5 oz jar of capers", 99, 2.79, 1, "standin", true),
  cashews: p2("8 oz cashews", 227, 5.99),
  walnuts: p2("8 oz chopped walnuts", 227, 4.99),
  tahini: p2("16 oz jar of tahini", 454, 7.99, 1, "standin", true),
  tomato_paste: p2("6 oz can of tomato paste", 170, 0.99),
  ketchup: p2("20 oz ketchup", 567, 2.99, 1, "standin", true),
  worcestershire_sauce: p2("10 oz Worcestershire sauce", 283, 3.49, 1, "standin", true),
  sriracha: p2("17 oz sriracha", 482, 4.49, 1, "standin", true),
  fish_sauce: p2("7 oz fish sauce", 200, 3.99, 1, "standin", true),
  oyster_sauce: p2("9 oz oyster sauce", 255, 3.49, 1, "standin", true),
  miso: p2("13 oz tub of white miso", 369, 5.99, 1, "standin", true),
  curry_paste_red: p2("4 oz jar of red curry paste", 113, 3.29, 1, "standin", true),
  garam_masala: p2("1.7 oz garam masala", 48, 4.99, 1, "standin", true),
  cornstarch: p2("16 oz cornstarch", 454, 1.99, 1, "standin", true),
  sugar_brown: p2("2 lb brown sugar", 907, 2.99, 1, "standin", true),
  rice_vinegar: p2("12 oz rice vinegar", 355, 3.29, 1, "standin", true),
  white_vinegar: p2("32 oz white vinegar", 946, 1.99, 1, "standin", true),
  red_wine_vinegar: p2("12 oz red wine vinegar", 355, 2.99, 1, "standin", true),
  balsamic_vinegar: p2("8.5 oz balsamic vinegar", 250, 3.99, 1, "standin", true),
  // Added 2026-11-20 for the breakfasts, lunches and snacks. Stand-in packs and prices, like the rest.
  bacon_cooked: p2("12 oz pack of bacon", 340, 5.99, 0.3),
  // bacon loses most of its weight in the pan
  flour_whole_wheat: p2("5 lb bag of whole wheat flour", 2268, 4.49),
  maple_syrup: p2("8 oz pure maple syrup", 315, 5.99, 1, "standin", true),
  apple_raw: p2("3 lb bag of apples", 1361, 4.49, 0.9),
  caesar_dressing: p2("12 oz bottle of Caesar dressing", 340, 3.79),
  crouton: p2("5 oz bag of croutons", 142, 2.29),
  blue_cheese: p2("5 oz tub of blue cheese crumbles", 142, 3.99),
  tortilla_chips: p2("11 oz bag of tortilla chips", 312, 3.99),
  cannellini_cooked: p2("15 oz can of cannellini beans", 250, 1.19),
  // drained
  butternut_cooked: p2("butternut squash", 900, 2.99, 0.75),
  rice_cake: p2("4.5 oz pack of rice cakes", 126, 2.99),
  // 14 cakes
  chocolate_chips_semisweet: p2("12 oz bag of semisweet chocolate chips", 340, 3.49),
  dates_deglet: p2("8 oz bag of pitted dates", 227, 3.99),
  triscuit: p2("8.5 oz box of woven wheat crackers", 241, 3.99),
  hash_browns: p2("30 oz bag of frozen hash browns", 850, 3.49)
};
var KEEPS = /* @__PURE__ */ new Set([
  "rice_white_cooked",
  "jasmine_rice_cooked",
  "basmati_rice_cooked",
  "rice_brown_cooked",
  "quinoa_cooked",
  "couscous_cooked",
  "pasta_cooked",
  "spaghetti_cooked",
  "egg_noodles_cooked",
  "lentils_cooked",
  "red_lentils_cooked",
  "oats_rolled_dry",
  "panko",
  "cashews",
  "walnuts",
  "almonds",
  "peanut_butter",
  "flour_whole_wheat",
  "dates_deglet",
  "chocolate_chips_semisweet"
]);
var SMALL = {
  greek_yogurt_2pct: p2("5.3 oz cup of Greek yogurt", 150, 1.29),
  greek_yogurt_nonfat: p2("5.3 oz cup of nonfat Greek yogurt", 150, 1.29),
  chicken_breast_cooked: p2("1 lb pack of chicken breasts", 454, 4.99, 0.75),
  chicken_thigh_cooked: p2("1 lb pack of boneless thighs", 454, 4.29, 0.72),
  romaine_raw: p2("romaine heart", 170, 1.49, 0.9),
  cashews: p2("2 oz bag of cashews", 57, 1.49),
  walnuts: p2("2 oz bag of walnuts", 57, 1.69),
  potato_baked: p2("russet potato", 300, 0.89, 0.85),
  cabbage_raw: p2("half head of green cabbage", 450, 1.19, 0.85)
};

// features/menu/next/targets.ts
var ADULT_FORMULA_MIN_AGE = 13;
var isChild = (age) => {
  const a = parseInt(age, 10);
  return !!a && a < ADULT_FORMULA_MIN_AGE;
};

// features/menu/next/catalog/sides.ts
var ALL = ["breakfast", "lunch", "dinner"];
var SIDES = [
  { id: "greek_yogurt_cup", name: "Greek yogurt cup", slots: ALL, parts: [{ food: "greek_yogurt_nonfat", grams: 170 }] },
  { id: "glass_of_milk", name: "Glass of milk", slots: ["breakfast", "lunch"], childSlots: ["dinner"], parts: [{ food: "milk_2pct", grams: 244 }] },
  { id: "strawberries", name: "Cup of strawberries", slots: ALL, parts: [{ food: "strawberry_raw", grams: 144 }] },
  { id: "banana", name: "Banana", slots: ["breakfast", "lunch"], parts: [{ food: "banana_raw", grams: 118 }] },
  { id: "blueberries", name: "Cup of blueberries", slots: ["breakfast", "lunch"], parts: [{ food: "blueberry_raw", grams: 148 }] },
  { id: "two_eggs", name: "Two eggs", slots: ["breakfast"], parts: [{ food: "egg_scrambled", grams: 122 }] },
  { id: "pb_toast", name: "Peanut butter toast", slots: ["breakfast"], parts: [{ food: "bread_whole_wheat", grams: 28 }, { food: "peanut_butter", grams: 16 }] },
  { id: "hummus_cucumber", name: "Hummus & cucumber", slots: ["lunch"], parts: [{ food: "hummus", grams: 30 }, { food: "cucumber_raw", grams: 100 }] },
  {
    id: "side_salad",
    name: "Side salad",
    slots: ["lunch", "dinner"],
    parts: [{ food: "romaine_raw", grams: 85 }, { food: "cucumber_raw", grams: 60 }, { food: "tomato_raw", grams: 60 }, { food: "olive_oil", grams: 7 }]
  },
  { id: "steamed_broccoli", name: "Steamed broccoli", slots: ["lunch", "dinner"], parts: [{ food: "broccoli_cooked", grams: 150 }] }
];
var sideNutrients = (s) => s.parts.reduce((n, p3) => addNutrients(n, nutrientsOf(p3.food, p3.grams)), ZERO);
var sideAllergens = (s) => [...new Set(s.parts.flatMap((p3) => FOODS[p3.food]?.allergens ?? []))];

// features/menu/next/catalog/plate.ts
var KEYS = ["kcal", "protein", "carbs", "fat", "fiber"];
var WEIGHT = {
  kcal: [4, 4],
  protein: [4, 1],
  carbs: [1.5, 1.5],
  fat: [1.5, 1.5],
  fiber: [1, 0]
};
var HOLD = { protein: 0.05, carb: 0.05, fat: 0.3, veg: 1, fixed: 4 };
var BALANCE = 0.15;
var TOLERANCE = {
  kcal: [-0.07, 0.07],
  protein: [-0.05, 0.2],
  carbs: [-0.15, 0.15],
  fat: [-0.2, 0.2],
  fiber: [-0.15, Infinity]
};
var mealTarget = (goal, share) => ({ kcal: goal.kcal * share, protein: goal.protein * share, carbs: goal.carbs * share, fat: goal.fat * share, fiber: goal.fiber * share });
var rel = (n, t) => t ? (n - t) / t : 0;
function statusOf(total, target) {
  const out = {};
  for (const k of KEYS) {
    const e = rel(total[k], target[k]);
    out[k] = e < TOLERANCE[k][0] ? "under" : e > TOLERANCE[k][1] ? "over" : "ok";
  }
  return out;
}
var PLATE_KEYS = ["kcal", "protein", "carbs", "fat"];
var misses = (s) => PLATE_KEYS.filter((k) => s[k] !== "ok").length;
function missCost(n, t) {
  let s = 0;
  for (const k of KEYS) {
    if (!t[k]) continue;
    const e = rel(n[k], t[k]);
    s += WEIGHT[k][e < 0 ? 0 : 1] * e * e;
  }
  return s;
}
function prepare(r2) {
  const per = r2.components.map((x) => nutrientsOf(x.food, 1));
  const p3 = r2.components.findIndex((x) => x.role === "protein");
  const c2 = r2.components.findIndex((x) => x.role === "carb");
  const objective = (x, target, extra) => {
    const n = { ...extra };
    for (let i = 0; i < x.length; i++) for (const k of KEYS) n[k] += per[i][k] * x[i];
    let s = missCost(n, target);
    r2.components.forEach((y, i) => {
      const d = (x[i] - y.grams) / y.grams;
      s += HOLD[y.role] * d * d;
    });
    if (p3 >= 0 && c2 >= 0) {
      const d = x[p3] / r2.components[p3].grams - x[c2] / r2.components[c2].grams;
      s += BALANCE * d * d;
    }
    return s;
  };
  return { objective };
}
function golden(f2, a, b) {
  const g = (Math.sqrt(5) - 1) / 2;
  let c2 = b - g * (b - a);
  let d = a + g * (b - a);
  let fc = f2(c2);
  let fd = f2(d);
  for (let i = 0; i < 40 && b - a > 0.01; i++) {
    if (fc < fd) {
      b = d;
      d = c2;
      fd = fc;
      c2 = b - g * (b - a);
      fc = f2(c2);
    } else {
      a = c2;
      c2 = d;
      fc = fd;
      d = a + g * (b - a);
      fd = f2(d);
    }
  }
  return (a + b) / 2;
}
function descend(x, lo, hi, f2) {
  for (let sweep = 0; sweep < 100; sweep++) {
    let moved = 0;
    for (let i = 0; i < x.length; i++) {
      if (hi[i] - lo[i] < 1e-9) {
        x[i] = lo[i];
        continue;
      }
      const old = x[i];
      const best = golden((v) => {
        x[i] = v;
        return f2(x);
      }, lo[i], hi[i]);
      x[i] = best;
      moved = Math.max(moved, Math.abs(best - old));
    }
    if (moved < 0.05) break;
  }
  return x;
}
var stepOf = (y) => y.step ?? UNITS[y.food]?.grams;
var roundTo = (v, step, lo, hi) => {
  const r2 = Math.round(v / step) * step;
  return r2 < lo ? Math.ceil(lo / step) * step : r2 > hi ? Math.floor(hi / step) * step : r2;
};
function fit(r2, target, extra) {
  const { objective } = prepare(r2);
  const f2 = (x2) => objective(x2, target, extra);
  const lo = r2.components.map((x2) => x2.min);
  const hi = r2.components.map((x2) => x2.max);
  const x = descend(r2.components.map((y) => Math.min(Math.max(y.grams, y.min), y.max)), lo, hi, f2);
  const whole = r2.components.map((y, i) => UNITS[y.food] ? i : -1).filter((i) => i >= 0);
  const options = whole.map((i) => {
    const u = stepOf(r2.components[i]);
    const least = Math.ceil(lo[i] / u - 1e-9);
    const most = Math.floor(hi[i] / u + 1e-9);
    const down = Math.min(most, Math.max(least, Math.floor(x[i] / u)));
    const up = Math.min(most, Math.max(least, Math.ceil(x[i] / u)));
    return [.../* @__PURE__ */ new Set([down, up])].map((n) => n * u);
  });
  let best = [...x];
  let bestCost = Infinity;
  const combos = options.reduce((acc, opts) => acc.flatMap((a) => opts.map((o) => [...a, o])), [[]]);
  for (const combo of combos) {
    const lo2 = [...lo];
    const hi2 = [...hi];
    whole.forEach((i, j) => {
      lo2[i] = combo[j];
      hi2[i] = combo[j];
    });
    const y = descend([...x].map((v, i) => Math.min(Math.max(v, lo2[i]), hi2[i])), lo2, hi2, f2);
    const cost = f2(y);
    if (cost < bestCost) {
      bestCost = cost;
      best = y;
    }
  }
  const grams = best.map((v, i) => {
    const y = r2.components[i];
    if (UNITS[y.food]) return v;
    return roundTo(v, y.role === "fixed" ? 1 : 5, y.min, y.max);
  });
  return { grams, cost: f2(grams) };
}
function solvePlate(r2, target, opts) {
  const avoid = opts.avoid ?? [];
  const build = (sides) => {
    const extra = sides.reduce((n, s) => addNutrients(n, sideNutrients(s)), ZERO);
    const { grams, cost } = fit(r2, target, extra);
    const total = r2.components.reduce((n, y, i) => addNutrients(n, nutrientsOf(y.food, grams[i])), extra);
    return { grams, cost, total, status: statusOf(total, target), sides };
  };
  let plate = build([]);
  if (opts.sides !== false) {
    for (let round = 0; round < 2 && misses(plate.status) > 0; round++) {
      const used = /* @__PURE__ */ new Set([...r2.components.map((y) => y.food), ...plate.sides.flatMap((s) => s.parts.map((p3) => p3.food))]);
      const options = SIDES.filter((s) => (s.slots.includes(opts.slot) || opts.child && s.childSlots?.includes(opts.slot)) && !plate.sides.includes(s) && !sideAllergens(s).some((a) => avoid.includes(a)) && !s.parts.some((p3) => opts.avoidFoods?.has(p3.food)) && !s.parts.some((p3) => used.has(p3.food)));
      let best = null;
      for (const s of options) {
        const trial = build([...plate.sides, s]);
        if (!best || trial.cost < best.cost) best = trial;
      }
      if (!best || best.cost > plate.cost * 0.75 || misses(best.status) > misses(plate.status)) break;
      plate = best;
    }
  }
  return {
    recipe: r2.id,
    target,
    lines: r2.components.map((y, i) => ({
      food: y.food,
      role: y.role,
      grams: plate.grams[i],
      asWritten: y.grams,
      units: UNITS[y.food] ? Math.round(plate.grams[i] / UNITS[y.food].grams) : void 0
    })),
    sides: plate.sides,
    total: plate.total,
    status: plate.status,
    onTarget: misses(plate.status) === 0
  };
}

// features/menu/next/catalog/prices.ts
var needsOf = (p3) => [
  ...p3.lines.map((l) => ({ food: l.food, grams: l.grams })),
  ...p3.sides.flatMap((s) => s.parts.map((x) => ({ food: x.food, grams: x.grams })))
];
function shoppingList(needs) {
  const eaten = {};
  for (const n of needs) {
    if (!(n.grams > 0)) continue;
    const as = PACKS[n.food]?.buyAs;
    const food = as ? as.food : n.food;
    eaten[food] = (eaten[food] ?? 0) + (as ? n.grams * as.ratio : n.grams);
  }
  const all = Object.entries(eaten).map(([food, g]) => {
    const usual = PACKS[food];
    if (!usual) throw new Error(`No pack for ${food}; add it to packs.ts before pricing anything that uses it`);
    const small = SMALL[food];
    const pack2 = small && g / small.yield <= small.grams ? small : usual;
    const bought = g / pack2.yield;
    const packs = Math.max(1, Math.ceil(bought / pack2.grams - 5e-3));
    return {
      food,
      name: shortName(food),
      pack: pack2,
      eaten: g,
      bought,
      packs,
      // `used` is priced at the usual pack's rate, the same rate a plate's "est. $X a serving" uses, so the
      // servings always add up to it whichever pack size was bought. Never more than what was paid.
      cost: packs * pack2.price,
      used: Math.min(packs * pack2.price, g / usual.yield / usual.grams * usual.price),
      left: Math.max(0, packs * pack2.grams - bought)
    };
  });
  const byName = (a, b) => a.name.localeCompare(b.name);
  const lines = all.filter((l) => !l.pack.pantry).sort(byName);
  const pantry = all.filter((l) => l.pack.pantry).sort(byName);
  const total = lines.reduce((n, l) => n + l.cost, 0);
  const used = lines.reduce((n, l) => n + l.used, 0);
  const keepsLeft = lines.filter((l) => KEEPS.has(l.food)).reduce((n, l) => n + (l.cost - l.used), 0);
  return { lines, pantry, total, used, leftValue: total - used, freshLeft: total - used - keepsLeft, keepsLeft };
}
var servingCost = (p3) => needsOf(p3).reduce((n, x) => n + needCost(x), 0);
function needCost(x) {
  const as = PACKS[x.food]?.buyAs;
  const food = as ? as.food : x.food;
  const k = PACKS[food];
  if (!k) throw new Error(`No pack for ${food}`);
  return k.pantry ? 0 : (as ? x.grams * as.ratio : x.grams) / k.yield / k.grams * k.price;
}

// features/menu/next/data.ts
var KNOWN_RECIPES = [...CATALOG];
var RECIPE = {};
var asWritten = (r2) => ({
  recipe: r2.id,
  target: recipeNutrients(r2),
  sides: [],
  total: recipeNutrients(r2),
  status: {},
  onTarget: true,
  lines: r2.components.map((x) => ({ food: x.food, role: x.role, grams: x.grams, asWritten: x.grams }))
});
var ADD_ON_DAYS = 5;
var MEALS = {};
var mealOf = (r2) => {
  const n = recipeNutrients(r2);
  const only = r2.meal_types.length === 1 && r2.meal_types[0] !== "dinner" ? r2.meal_types[0] : null;
  const meal = {
    id: r2.id,
    name: r2.name,
    blurb: r2.description,
    photo: PRESENTATION[r2.id].photo,
    kcal: Math.round(n.kcal),
    protein: Math.round(n.protein),
    minutes: r2.cook_time_minutes,
    perServing: servingCost(asWritten(r2)),
    ...only ? { kind: only, pack: ADD_ON_DAYS, packLabel: `${ADD_ON_DAYS} days each` } : {}
  };
  return meal;
};
var LD = ["lunch", "dinner"];
var WEEKS = [
  // 3 recipes: big cooks
  {
    id: "prep3",
    title: "Big-Batch Pots",
    style: "Three pots, cooked on prep day",
    tags: ["prep"],
    covers: LD,
    meals: ["sweet_potato_black_bean_chili", "chicken_tikka_masala", "red_lentil_dal"],
    hook: "Chili, tikka masala and dal for lunches and dinners"
  },
  {
    id: "protein3",
    title: "Chicken & Salmon Boxes",
    style: "Three high-protein bowls, cooked once",
    tags: ["prep", "protein"],
    covers: LD,
    meals: ["lemon_garlic_chicken", "greek_chicken_quinoa_bowl", "southwest_steak_bowl"],
    hook: "Lemon chicken, a Greek quinoa bowl and a steak bowl, portioned for the week"
  },
  {
    id: "veg3",
    title: "Lentils & Chickpeas",
    style: "Three plant-based cooks",
    tags: ["prep", "veg"],
    covers: LD,
    meals: ["red_lentil_dal", "sweet_potato_chickpea_bowl", "quinoa_stuffed_peppers"],
    hook: "Dal, a chickpea bowl and stuffed peppers, no meat"
  },
  {
    id: "family3",
    title: "Family Trays",
    style: "Three big family cooks",
    tags: ["family", "prep"],
    covers: ["dinner"],
    meals: ["baked_ziti", "cottage_pie", "chicken_burrito_bowl"],
    hook: "Baked ziti, cottage pie and burrito bowls the kids will eat"
  },
  {
    id: "taco3",
    title: "Taco Week",
    style: "Tortillas three ways",
    tags: [],
    meals: ["chicken_fajitas", "fish_tacos", "beef_enchiladas"],
    hook: "Chicken fajitas, fish tacos and beef enchiladas"
  },
  {
    id: "wok3",
    title: "Wok Week",
    style: "One wok, with rice and soy all week",
    tags: [],
    meals: ["beef_broccoli", "turkey_stir_fry", "tofu_broccoli_stir_fry"],
    hook: "Beef and broccoli, turkey stir-fry and tofu, takeout-style"
  },
  {
    id: "quick3",
    title: "15-Minute Rotation",
    style: "Dinners on repeat, none over 15 minutes",
    tags: ["fast"],
    meals: ["thai_basil_chicken", "honey_garlic_shrimp", "egg_roll_bowl"],
    hook: "Thai basil chicken, honey garlic shrimp and egg roll bowls"
  },
  {
    id: "budget3",
    title: "Shoestring Suppers",
    style: "Cheap dinners, each cooked twice",
    tags: ["budget"],
    meals: ["lentil_bolognese", "tofu_broccoli_stir_fry", "chicken_adobo"],
    hook: "Lentil bolognese, tofu stir-fry and chicken adobo"
  },
  {
    id: "meatless3",
    title: "Meatless Nights",
    style: "Tofu, lentils and beans",
    tags: ["veg"],
    meals: ["tofu_broccoli_stir_fry", "lentil_bolognese", "quinoa_stuffed_peppers"],
    hook: "Stir-fry, lentil bolognese and stuffed peppers with no meat"
  },
  {
    id: "grab3",
    title: "Grab-and-Go Bowls",
    style: "Bowls that travel, cooked on prep day",
    tags: ["prep"],
    covers: LD,
    meals: ["chicken_burrito_bowl", "pesto_chicken_couscous", "chicken_shawarma_bowl"],
    hook: "Burrito, pesto couscous and shawarma bowls"
  },
  // 5 recipes
  {
    id: "weeknight5",
    title: "Weeknight Favourites",
    style: "The dinners people make most",
    tags: [],
    meals: ["spaghetti_bolognese", "lemon_garlic_chicken", "chicken_fajitas", "teriyaki_salmon_bowl", "beef_broccoli"],
    hook: "Bolognese, fajitas, salmon and beef and broccoli"
  },
  {
    id: "budget5",
    title: "Penny-Wise Dinners",
    style: "Cheap, filling, still on goal",
    tags: ["budget"],
    meals: ["lentil_bolognese", "tofu_broccoli_stir_fry", "chicken_adobo", "sweet_potato_black_bean_chili", "tahini_chicken_bowl"],
    hook: "Lentil bolognese, adobo, chili and a tahini bowl"
  },
  {
    id: "fast5",
    title: "20-Minute Dinners",
    style: "Nothing over 20 minutes",
    tags: ["fast"],
    meals: ["thai_basil_chicken", "honey_garlic_shrimp", "egg_roll_bowl", "bulgogi_beef", "thai_peanut_chicken"],
    hook: "Stir-fries, bulgogi and garlic shrimp"
  },
  {
    id: "takeout5",
    title: "Takeout Night In",
    style: "Rice, soy and garlic shared all week",
    tags: [],
    meals: ["beef_broccoli", "chicken_tikka_masala", "thai_peanut_chicken", "bulgogi_beef", "teriyaki_salmon_bowl"],
    hook: "Beef and broccoli, tikka masala and teriyaki at home"
  },
  {
    id: "family5",
    title: "Family Favourites",
    style: "Kid-friendly dinners",
    tags: ["family"],
    meals: ["spaghetti_bolognese", "bbq_chicken_potato", "chicken_fajitas", "sloppy_joes", "turkey_meatloaf"],
    hook: "Bolognese, BBQ chicken, fajitas and sloppy joes"
  },
  {
    id: "tacopasta5",
    title: "Tacos & Pasta",
    style: "The dinners everyone asks for",
    tags: [],
    meals: ["chicken_fajitas", "fish_tacos", "spaghetti_bolognese", "creamy_pesto_chicken", "shrimp_scampi_pasta"],
    hook: "Fajitas, fish tacos, bolognese and two pastas"
  },
  {
    id: "lean5",
    title: "Lean Plates",
    style: "Fish, chicken and pork, nothing heavy",
    tags: ["protein"],
    meals: ["lemon_garlic_chicken", "baked_lemon_cod", "honey_garlic_pork", "honey_garlic_shrimp", "chicken_souvlaki"],
    hook: "Cod, shrimp and lean meat, 40 g of protein or more"
  },
  {
    id: "skillet5",
    title: "Pan & Tray Dinners",
    style: "Each dinner in a single pan or tray",
    tags: [],
    meals: ["lemon_salmon_tray_bake", "greek_salmon_sheet_pan", "chicken_adobo", "sweet_potato_black_bean_chili", "egg_roll_bowl"],
    hook: "Tray-bake salmon, adobo and chili, less washing up"
  },
  {
    id: "comfort5",
    title: "Sunday Comfort",
    style: "Warm dinners worth sitting down for",
    tags: [],
    meals: ["cottage_pie", "swedish_meatballs", "turkey_meatloaf", "chicken_marsala", "baked_ziti"],
    hook: "Cottage pie, meatballs, meatloaf and baked ziti"
  },
  // 7 recipes
  {
    id: "classics7",
    title: "The Classics",
    style: "A different classic every night",
    tags: [],
    meals: ["spaghetti_bolognese", "chicken_fajitas", "lemon_garlic_chicken", "teriyaki_salmon_bowl", "bbq_chicken_potato", "beef_broccoli", "turkey_meatloaf"],
    hook: "Seven dinners everyone knows"
  },
  {
    id: "protein7",
    title: "Training Block",
    style: "Lean protein every night",
    tags: ["protein"],
    meals: ["lemon_garlic_chicken", "chimichurri_steak", "baked_lemon_cod", "greek_chicken_quinoa_bowl", "honey_garlic_pork", "honey_garlic_shrimp", "spinach_feta_chicken"],
    hook: "Chicken, steak, cod, pork and shrimp"
  },
  {
    id: "budget7",
    title: "Cheap & Cheerful",
    style: "A cheap week that still hits your numbers",
    tags: ["budget"],
    meals: ["lentil_bolognese", "tofu_broccoli_stir_fry", "chicken_adobo", "sweet_potato_black_bean_chili", "tahini_chicken_bowl", "sweet_potato_chickpea_bowl", "thai_peanut_chicken"],
    hook: "Lentil bolognese, adobo, chili and peanut chicken"
  },
  {
    id: "fast7",
    title: "Quick Pans",
    style: "Seven dinners, 25 minutes or less",
    tags: [],
    meals: ["thai_basil_chicken", "honey_garlic_shrimp", "egg_roll_bowl", "bulgogi_beef", "thai_peanut_chicken", "southwest_steak_bowl", "baked_lemon_cod"],
    hook: "Stir-fries, a steak bowl and lemon cod"
  },
  {
    id: "family7",
    title: "Kids\u2019 Table",
    style: "Seven kid-friendly dinners",
    tags: ["family"],
    meals: ["spaghetti_bolognese", "bbq_chicken_potato", "chicken_fajitas", "sloppy_joes", "turkey_meatloaf", "baked_ziti", "beef_broccoli"],
    hook: "Pasta, fajitas, sloppy joes and meatloaf"
  },
  {
    id: "ricebowl7",
    title: "Rice Bowls",
    style: "Rice, garlic and soy shared all week",
    tags: [],
    meals: ["teriyaki_salmon_bowl", "beef_broccoli", "bulgogi_beef", "thai_basil_chicken", "chicken_adobo", "honey_sriracha_salmon", "chicken_shawarma_bowl"],
    hook: "Teriyaki, bulgogi, adobo and a shawarma bowl"
  },
  {
    id: "comfort7",
    title: "Cold-Night Dinners",
    style: "Warm, filling dinners",
    tags: [],
    meals: ["cottage_pie", "swedish_meatballs", "turkey_meatloaf", "chicken_marsala", "baked_ziti", "butter_chicken", "sweet_potato_black_bean_chili"],
    hook: "Cottage pie, meatballs, butter chicken and chili"
  },
  {
    id: "pan7",
    title: "Fewer Dishes",
    style: "Every dinner in a single pan or tray",
    tags: [],
    meals: ["lemon_salmon_tray_bake", "greek_salmon_sheet_pan", "chicken_adobo", "sweet_potato_black_bean_chili", "egg_roll_bowl", "chicken_tikka_masala", "red_lentil_dal"],
    hook: "Tray-bake salmon, adobo, tikka masala and dal, less washing up"
  },
  {
    id: "fish7",
    title: "Salmon, Cod & Shrimp",
    style: "Seafood every night, still high protein",
    tags: ["protein"],
    meals: ["teriyaki_salmon_bowl", "baked_lemon_cod", "honey_garlic_shrimp", "lemon_salmon_tray_bake", "fish_tacos", "shrimp_scampi_pasta", "miso_salmon"],
    hook: "Salmon three ways, lemon cod, fish tacos and shrimp"
  },
  {
    id: "pesc7",
    title: "Fish & Plants",
    style: "No meat, but fish and shrimp",
    tags: [],
    meals: ["teriyaki_salmon_bowl", "red_lentil_dal", "shrimp_scampi_pasta", "quinoa_stuffed_peppers", "baked_lemon_cod", "tofu_broccoli_stir_fry", "fish_tacos"],
    hook: "For pescatarians: salmon, cod, dal and tofu"
  },
  // 10 recipes: lunches and dinners, or all three meals. The lunches and breakfasts are still the mock's own.
  {
    id: "lunchdinner10",
    title: "Lunch & Dinner, Sorted",
    style: "Five lunches, five dinners",
    tags: [],
    covers: LD,
    meals: ["chicken_hummus_wrap", "tuna_sandwich", "greek_chickpea_quinoa", "turkey_avocado_sandwich", "egg_salad_pita", "spaghetti_bolognese", "chicken_fajitas", "chicken_tikka_masala", "teriyaki_salmon_bowl", "honey_garlic_pork"],
    hook: "Wraps and salads by day, classics at night"
  },
  {
    id: "protein10",
    title: "Packed Protein",
    style: "Protein at every meal",
    tags: ["protein"],
    covers: LD,
    meals: ["chicken_hummus_wrap", "tuna_sandwich", "lemon_garlic_chicken", "chimichurri_steak", "teriyaki_salmon_bowl", "baked_lemon_cod", "greek_chicken_quinoa_bowl", "chicken_burrito_bowl", "honey_garlic_pork", "honey_garlic_shrimp"],
    hook: "Lean lunches and protein-first dinners"
  },
  {
    id: "budget10",
    title: "Brown-Bag Budget",
    style: "Ten recipes, small shop",
    tags: ["budget"],
    covers: LD,
    meals: ["egg_salad_pita", "greek_chickpea_quinoa", "tuna_sandwich", "red_lentil_dal", "spaghetti_bolognese", "chicken_burrito_bowl", "sweet_potato_black_bean_chili", "egg_roll_bowl", "turkey_stir_fry", "lentil_bolognese"],
    hook: "Egg salad, chickpea salad, dal and chili"
  },
  {
    id: "family10",
    title: "Lunchbox & Family Table",
    style: "Lunchboxes and family dinners",
    tags: ["family"],
    covers: LD,
    meals: ["turkey_avocado_sandwich", "chicken_fajitas", "bbq_chicken_potato", "spaghetti_bolognese", "baked_ziti", "sloppy_joes", "turkey_meatloaf", "beef_broccoli", "chicken_burrito_bowl", "creamy_pesto_chicken"],
    hook: "Sandwiches for lunch, favourites for dinner"
  },
  {
    id: "fullday10",
    title: "The Whole Day",
    style: "Every meal of the day",
    tags: [],
    covers: ["breakfast", "lunch", "dinner"],
    breakfasts: ["overnight_oats", "egg_muffin_sandwich", "cottage_berry_toast"],
    meals: ["chicken_hummus_wrap", "turkey_avocado_sandwich", "greek_chickpea_quinoa", "lemon_garlic_chicken", "teriyaki_salmon_bowl", "chicken_tikka_masala", "turkey_meatloaf"],
    hook: "Oats, eggs and cottage cheese, then lunch and dinner"
  },
  {
    id: "desk10",
    title: "Desk Lunch, Easy Dinner",
    style: "Lunches to pack, dinners in 20 minutes",
    tags: ["fast"],
    covers: LD,
    meals: ["chicken_hummus_wrap", "greek_chickpea_quinoa", "egg_salad_pita", "tuna_sandwich", "thai_basil_chicken", "honey_garlic_shrimp", "egg_roll_bowl", "bulgogi_beef", "thai_peanut_chicken", "southwest_steak_bowl"],
    hook: "Wraps, salads and sandwiches by day, quick pans at night"
  },
  {
    id: "proteinday10",
    title: "Protein, Morning to Night",
    style: "Protein-first breakfasts, lunches and dinners",
    tags: ["protein"],
    covers: ["breakfast", "lunch", "dinner"],
    breakfasts: ["yogurt_berry_bowl", "cottage_berry_toast", "overnight_oats"],
    meals: ["chicken_hummus_wrap", "tuna_sandwich", "lemon_garlic_chicken", "teriyaki_salmon_bowl", "chimichurri_steak", "honey_garlic_pork", "baked_lemon_cod"],
    hook: "Yogurt, cottage cheese and oats, then lean lunches and dinners"
  },
  {
    id: "budgetday10",
    title: "Small-Shop Days",
    style: "Every meal of the day on a small shop",
    tags: ["budget"],
    covers: ["breakfast", "lunch", "dinner"],
    breakfasts: ["pb_banana_oats", "egg_muffin_sandwich", "overnight_oats"],
    meals: ["egg_salad_pita", "tuna_sandwich", "red_lentil_dal", "sweet_potato_black_bean_chili", "spaghetti_bolognese", "egg_roll_bowl", "chicken_burrito_bowl"],
    hook: "Banana oats, egg muffins, egg salad and dal"
  }
];
var SHELVES = [
  { title: "Budget weeks", note: "The smallest shops", weeks: ["budget3", "budget5", "budget7", "budget10", "budgetday10"] },
  { title: "Weeknight favourites", note: "The dinners people make most", weeks: ["weeknight5", "taco3", "tacopasta5", "classics7", "comfort5", "comfort7", "lunchdinner10", "fullday10"] },
  { title: "Buy once, cook all week", note: "Meals that share their groceries", weeks: ["takeout5", "wok3", "ricebowl7", "prep3", "protein3", "grab3", "veg3", "skillet5", "pan7"] },
  { title: "Fast & high protein", note: "For busy weeks and training blocks", weeks: ["fast5", "quick3", "fast7", "lean5", "protein7", "fish7", "protein10", "desk10", "proteinday10", "protein3"] },
  { title: "No meat", note: "Plant-based, or fish and plants", weeks: ["meatless3", "veg3", "pesc7"] }
];
var FAMILY_WEEKS = ["family3", "family5", "family7", "family10"];
var BUNDLED_SHELVES = SHELVES.map((x) => ({ ...x, weeks: [...x.weeks] }));
var BUNDLED_FAMILY_WEEKS = [...FAMILY_WEEKS];
var KNOWN_WEEKS = [...WEEKS];
var has = (r2, t) => r2.meal_types.includes(t);
var FAMILY_SINGLES = [];
var BREAKFAST = [];
var LUNCH = [];
var SNACKS = [];
var POPULAR_ALL = ["spaghetti_bolognese", "chicken_fajitas", "chicken_tikka_masala", "teriyaki_salmon_bowl", "beef_broccoli", "lemon_garlic_chicken", "creamy_pesto_chicken", "fish_tacos"];
var POPULAR = [];
var weekById = (id) => WEEKS.find((w) => w.id === id) ?? KNOWN_WEEKS.find((w) => w.id === id);
var isOffered = (id) => CATALOG.some((r2) => r2.id === id);
var eaters = (h) => [
  { goal: h.goal ?? DEFAULT_GOAL, child: false, ...h.plain ? { sides: false } : {} },
  ...h.people.map((p3) => ({ goal: p3.goal, child: isChild(p3.answers.age), ...h.plain ? { sides: false } : {} }))
];
var plateCache = /* @__PURE__ */ new Map();
function plateFor(id, type, e, avoid = []) {
  const key = JSON.stringify([id, type, e.goal, e.child, avoid, e.sides]);
  let p3 = plateCache.get(key);
  if (!p3) {
    p3 = solvePlate(RECIPE[id], mealTarget(e.goal, SHARE[type]), { slot: type, child: e.child, avoidFoods: excludedFoods(avoid), sides: e.sides });
    plateCache.set(key, p3);
  }
  return p3;
}
var householdPlates = (id, type, h) => eaters(h).map((e) => plateFor(id, type, e, h.avoid));
var mealNeeds = (id, type, h, times = 1) => Array.from({ length: times }).flatMap(() => householdPlates(id, type, h).flatMap(needsOf));
var hKey = (h) => JSON.stringify([h.goal, h.people.map((p3) => [p3.goal, p3.answers.age]), h.targets, h.noCook, h.past, h.shopDay, h.avoid, h.plain]);
var listCache = /* @__PURE__ */ new Map();
var cachedList = (key, needs) => {
  let l = listCache.get(key);
  if (!l) {
    l = shoppingList(needs());
    listCache.set(key, l);
  }
  return l;
};
var weekNeeds = (w, h) => resolveWeek(w, h).slots.flatMap((x) => mealNeeds(x.id, x.type, h));
var weekList = (w, h) => cachedList(`w:${w.id}:${hKey(h)}`, () => weekNeeds(w, h));
var weekTotal = (w, h) => weekList(w, h).total;
var mealSlot = (m2) => m2.kind ?? "dinner";
var mealPrice = (m2, h) => cachedList(`m:${m2.id}:${hKey(h)}`, () => mealNeeds(m2.id, mealSlot(m2), h, m2.pack ?? 1)).total;
var BUILD = { breakfast: [], lunch: [], dinner: [] };
var DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekendDays = (start) => DAYS.map((_, p3) => p3).filter((p3) => (start + p3) % 7 >= 5);
var m = (cuisine, level, contains, oven = false, onePan = false) => ({ cuisine, level, contains, oven, onePan });
var AS_ALLERGEN = { milk: "dairy", wheat: "gluten", egg: "egg", tree_nuts: "nuts", peanuts: "nuts", shellfish: "shellfish", fish: "fish", soy: "soy", sesame: "sesame" };
var ALLERGEN_ORDER = ["dairy", "gluten", "egg", "nuts", "shellfish", "fish", "soy", "sesame", "pork", "spicy"];
var META = {};
var metaOf = (r2) => {
  const pr = PRESENTATION[r2.id];
  const contains = new Set(recipeAllergens(r2).map((a) => AS_ALLERGEN[a]).filter((a) => !!a));
  if (r2.components.some((x) => /(^|_)(pork|ham|bacon|sausage)(_|$)/.test(x.food))) contains.add("pork");
  if (pr.spicy) contains.add("spicy");
  return m(r2.cuisine, pr.level, ALLERGEN_ORDER.filter((x) => contains.has(x)), pr.oven, pr.onePan);
};
var ROLE_ORDER = { protein: 0, carb: 1, veg: 2, fat: 3, fixed: 4 };
var INGREDIENTS = {};
var ingredientsOf = (r2) => [...r2.components].sort((a, b) => ROLE_ORDER[a.role] - ROLE_ORDER[b.role] || b.grams - a.grams).map((x) => shortName(x.food));
var KID_FRIENDLY = /* @__PURE__ */ new Set();
var ALLERGEN_LABEL = {
  dairy: "Dairy",
  gluten: "Gluten",
  egg: "Eggs",
  nuts: "Nuts",
  shellfish: "Shellfish",
  fish: "Fish",
  soy: "Soy",
  sesame: "Sesame",
  pork: "Pork",
  spicy: "Spicy food"
};
var sideLabel = (name) => /^Greek\b/.test(name) ? name : name[0].toLowerCase() + name.slice(1);
function sideAdds(id, plates) {
  const says = new Set(META[id].contains);
  const out = /* @__PURE__ */ new Map();
  for (const p3 of plates) for (const sd of p3.sides) for (const a of sideAllergens(sd)) {
    const x = AS_ALLERGEN[a];
    if (!x || says.has(x)) continue;
    if (!out.has(sd.name)) out.set(sd.name, /* @__PURE__ */ new Set());
    out.get(sd.name).add(x);
  }
  return [...out].map(([side, adds]) => ({ side, adds: [...adds] }));
}
function containsLine(id, plates = []) {
  const names = (list2) => list2.map((a) => ALLERGEN_LABEL[a].toLowerCase()).join(", ");
  const own = META[id].contains;
  const adds = sideAdds(id, plates).map((x) => `${names(x.adds)} in the ${sideLabel(x.side)}`);
  const extra = adds.length <= 1 ? adds[0] ?? "" : `${adds.slice(0, -1).join(", ")} and ${adds[adds.length - 1]}`;
  if (!own.length) return extra ? `Contains ${extra} on the side` : "No common allergens";
  return `Contains ${names(own)}${extra ? `, plus ${extra}` : ""}`;
}
var AVOID_OPTIONS = [
  { label: "Seafood", group: "Most common", values: ["fish", "shellfish"], also: "salmon tuna prawns shrimp" },
  { label: "Pork", group: "Most common", values: ["pork"], also: "ham bacon sausage" },
  { label: "Dairy (lactose)", group: "Most common", chip: "Dairy", values: ["dairy"], also: "milk cheese butter cream yogurt" },
  { label: "Gluten", group: "Most common", values: ["gluten"], also: "wheat bread pasta flour" },
  { label: "Nuts", group: "Most common", values: ["nuts"], also: "peanuts cashews pine nuts" },
  { label: "Spicy food", group: "Most common", chip: "Spicy", values: ["spicy"], also: "chilli hot" }
];
var MORE_AVOID = [
  { label: "Fish", group: "Meat & fish", values: ["fish"], also: "salmon tuna" },
  { label: "Shellfish", group: "Meat & fish", values: ["shellfish"], also: "prawns shrimp" },
  { label: "Beef", group: "Meat & fish", values: ["beef"], also: "steak" },
  { label: "Chicken", group: "Meat & fish", values: ["chicken"], also: "poultry" },
  { label: "Turkey", group: "Meat & fish", values: ["turkey"] },
  { label: "Lamb", group: "Meat & fish", values: ["lamb"] },
  { label: "Tuna", group: "Meat & fish", values: ["tuna"] },
  { label: "Tofu", group: "Beans & tofu", values: ["tofu"] },
  { label: "Eggs", group: "Allergies", values: ["egg"] },
  { label: "Soy", group: "Allergies", values: ["soy"], also: "tofu" },
  { label: "Sesame", group: "Allergies", values: ["sesame"], also: "tahini" },
  { label: "Peanuts", group: "Allergies", values: ["peanuts"] },
  { label: "Tree nuts", group: "Allergies", values: ["treenuts"], also: "almonds walnuts cashews pecans" },
  { label: "Cheese", group: "Allergies", values: ["cheese"] },
  { label: "Beans", group: "Beans & tofu", values: ["beans"] },
  { label: "Lentils", group: "Beans & tofu", values: ["lentils"] },
  { label: "Chickpeas", group: "Beans & tofu", values: ["chickpeas"], also: "hummus" },
  { label: "Onions", group: "Vegetables", values: ["onions"], also: "scallions" },
  { label: "Garlic", group: "Vegetables", values: ["garlic"] },
  { label: "Tomatoes", group: "Vegetables", values: ["tomatoes"] },
  { label: "Bell peppers", group: "Vegetables", chip: "Peppers", values: ["peppers"], also: "capsicum" },
  { label: "Coconut", group: "Sauces & extras", values: ["coconut"] },
  { label: "Olives", group: "Sauces & extras", values: ["olives"] },
  { label: "Pickles", group: "Sauces & extras", values: ["pickles"] },
  { label: "Mustard", group: "Sauces & extras", values: ["mustard"] },
  { label: "Mayonnaise", group: "Sauces & extras", chip: "Mayo", values: ["mayo"], also: "mayo" },
  { label: "Honey", group: "Sauces & extras", values: ["honey"] },
  { label: "Ginger", group: "Sauces & extras", values: ["ginger"] },
  { label: "Eggplant", group: "Vegetables", values: ["eggplant"], also: "aubergine" },
  { label: "Broccoli", group: "Vegetables", values: ["broccoli"] },
  { label: "Cabbage", group: "Vegetables", values: ["cabbage"] },
  { label: "Spinach", group: "Vegetables", values: ["spinach"] },
  { label: "Peas", group: "Vegetables", values: ["peas"] },
  { label: "Corn", group: "Vegetables", values: ["corn"] },
  { label: "Cucumber", group: "Vegetables", values: ["cucumber"] },
  { label: "Carrots", group: "Vegetables", values: ["carrots"] },
  { label: "Celery", group: "Vegetables", values: ["celery"] },
  { label: "Squash", group: "Vegetables", values: ["squash"], also: "pumpkin" },
  { label: "Potatoes", group: "Vegetables", values: ["potatoes"] },
  { label: "Avocado", group: "Vegetables", values: ["avocado"] },
  { label: "Mushrooms", group: "Vegetables", values: ["mushrooms"] },
  { label: "Beets", group: "Vegetables", values: ["beets"], also: "beetroot" },
  { label: "Okra", group: "Vegetables", values: ["okra"] },
  { label: "Rice", group: "Rice, pasta & bread", values: ["rice"] },
  { label: "Pasta", group: "Rice, pasta & bread", values: ["pasta"], also: "noodles" },
  { label: "Quinoa", group: "Rice, pasta & bread", values: ["quinoa"] },
  { label: "Bread", group: "Rice, pasta & bread", values: ["bread"], also: "tortillas wraps buns" }
];
var ALL_AVOID = [...AVOID_OPTIONS, ...MORE_AVOID];
var allowed = (id, avoid) => !recipeAvoided(RECIPE[id], avoid);
var DEFAULT_GOAL = { kcal: 2e3, protein: 150, carbs: 200, fat: 67, fiber: 28 };
var SHARE = { breakfast: 0.25, lunch: 0.35, dinner: 0.4, snack: 0.1 };
var ORDER = { breakfast: 0, lunch: 1, dinner: 2 };
var weekCovers = (w) => w.covers ?? ["dinner"];
function mealDays(h, type) {
  const past = h.past ?? [];
  const WEEKEND = weekendDays(h.shopDay);
  let days = DAYS.map((_, d) => d).filter((d) => !past.includes(d) && !(type === "dinner" && h.noCook.includes(d)));
  if (type === "lunch") days = [...days.filter((d) => !WEEKEND.includes(d)), ...days.filter((d) => WEEKEND.includes(d))];
  return days.slice(0, h.targets[type]).sort((a, b) => a - b);
}
var PREP_DAY = -1;
function similarRecipes(pool, type, h, n, taken) {
  const cuisines = pool.map((id) => META[id].cuisine);
  const top = cuisines.sort((a, b) => cuisines.filter((x) => x === b).length - cuisines.filter((x) => x === a).length)[0];
  return BUILD[type === "breakfast" ? "breakfast" : "dinner"].filter((id) => allowed(id, h.avoid) && !pool.includes(id) && !taken.includes(id)).sort((a, b) => Number(META[b].cuisine === top) - Number(META[a].cuisine === top) || MEALS[a].perServing - MEALS[b].perServing).slice(0, n);
}
var cache = /* @__PURE__ */ new WeakMap();
function resolveWeek(w, h) {
  const key = JSON.stringify([h.targets, h.noCook, h.past, h.shopDay, h.avoid]);
  const hit = cache.get(w)?.get(key);
  if (hit) return hit;
  const covers = weekCovers(w);
  let style = w.tags.includes("prep") ? "prep" : "fresh";
  const planned = covers.filter((ty) => h.targets[ty] > 0);
  const sizedForDefault = planned.length === 0;
  const hh = sizedForDefault ? { ...h, targets: { ...h.targets, ...Object.fromEntries(covers.map((ty) => [ty, 5])) } } : h;
  const use = sizedForDefault ? covers : planned;
  const slots = [];
  const recipes = [];
  const fillers = [];
  const assign = (types, pool) => {
    const list2 = types.flatMap((ty) => mealDays(hh, ty).map((day) => ({ day, type: ty }))).sort((a, b) => a.day - b.day || ORDER[a.type] - ORDER[b.type]);
    if (!list2.length) return;
    const want = Math.min(pool.length, list2.length);
    if (style === "fresh" && want < list2.length) style = "few";
    let picks = pool.slice(0, want);
    if (picks.length < want) {
      const extra = similarRecipes(pool, types[0], h, want - picks.length, recipes);
      fillers.push(...extra);
      picks = [...picks, ...extra];
    }
    recipes.push(...picks);
    const n = picks.length;
    const counts = picks.map((_, i) => Math.floor(list2.length / n) + (i < list2.length % n ? 1 : 0));
    const seq = [];
    if (style === "few") picks.forEach((id, i) => {
      for (let k = 0; k < counts[i]; k++) seq.push(id);
    });
    else {
      const left = [...counts];
      while (left.some((x) => x > 0)) picks.forEach((id, i) => {
        if (left[i] > 0) {
          seq.push(id);
          left[i]--;
        }
      });
    }
    const first = {};
    list2.forEach((x, i) => {
      const id = seq[i];
      slots.push({ ...x, id, madeOn: style === "prep" ? PREP_DAY : style === "few" && id in first ? first[id] : null });
      if (!(id in first)) first[id] = x.day;
    });
  };
  if (use.includes("breakfast")) assign(["breakfast"], w.breakfasts ?? []);
  assign(use.filter((ty) => ty !== "breakfast"), w.meals);
  slots.sort((a, b) => a.day - b.day || ORDER[a.type] - ORDER[b.type]);
  const covered = { breakfast: 0, lunch: 0, dinner: 0 };
  for (const x of slots) covered[x.type]++;
  const out = { slots, covered, style, recipes, fillers, sizedForDefault, alsoCovers: covers.filter((ty) => h.targets[ty] === 0) };
  if (!cache.has(w)) cache.set(w, /* @__PURE__ */ new Map());
  cache.get(w).set(key, out);
  return out;
}
var refill = (o, entries) => {
  for (const k of Object.keys(o)) delete o[k];
  for (const [k, v] of entries) o[k] = v;
};
var reset = (a, v) => {
  a.length = 0;
  a.push(...v);
};
function rebuildCatalog() {
  refill(RECIPE, KNOWN_RECIPES.map((r2) => [r2.id, r2]));
  refill(MEALS, KNOWN_RECIPES.map((r2) => [r2.id, mealOf(r2)]));
  refill(META, KNOWN_RECIPES.map((r2) => [r2.id, metaOf(r2)]));
  refill(INGREDIENTS, KNOWN_RECIPES.map((r2) => [r2.id, ingredientsOf(r2)]));
  KID_FRIENDLY.clear();
  for (const r2 of CATALOG) if (PRESENTATION[r2.id].kid) KID_FRIENDLY.add(r2.id);
  const only = (t) => CATALOG.filter((r2) => r2.meal_types.length === 1 && r2.meal_types[0] === t).map((r2) => r2.id);
  reset(FAMILY_SINGLES, CATALOG.filter((r2) => has(r2, "dinner") && PRESENTATION[r2.id].kid).map((r2) => r2.id));
  reset(BREAKFAST, only("breakfast"));
  reset(LUNCH, only("lunch"));
  reset(SNACKS, only("snack"));
  for (const t of ["breakfast", "lunch", "dinner"]) reset(BUILD[t], CATALOG.filter((r2) => has(r2, t)).map((r2) => r2.id));
  reset(POPULAR, POPULAR_ALL.filter(isOffered));
  plateCache.clear();
  listCache.clear();
  cache = /* @__PURE__ */ new WeakMap();
}
rebuildCatalog();

// features/menu/next/catalog/remote.ts
var MADE_BY = { recipe: {}, week: {} };
var BUNDLED = {
  recipes: [...CATALOG],
  known: [...KNOWN_RECIPES],
  weeks: [...WEEKS],
  knownWeeks: [...KNOWN_WEEKS],
  presentation: { ...PRESENTATION }
};
var ALLERGENS = /* @__PURE__ */ new Set(["milk", "egg", "fish", "shellfish", "tree_nuts", "peanuts", "wheat", "soy", "sesame"]);
var ROLES = /* @__PURE__ */ new Set(["protein", "carb", "veg", "fat", "fixed"]);
var MEALS_OK = /* @__PURE__ */ new Set(["breakfast", "lunch", "dinner", "snack"]);
var TAGS = /* @__PURE__ */ new Set(["budget", "protein", "fast", "veg", "prep", "family"]);
var num = (v) => typeof v === "number" && Number.isFinite(v);
var text = (v) => typeof v === "string" && v.trim().length > 0;
var list = (v) => Array.isArray(v) && v.every((x) => typeof x === "string");
var reset2 = (a, v) => {
  a.length = 0;
  a.push(...v);
};
function foodProblem(f2) {
  if (!text(f2.food_id) || !text(f2.short_name) || !text(f2.name)) return "no id or name";
  if (![f2.serving_grams, f2.calories, f2.protein_g, f2.carbs_g, f2.fat_g, f2.fiber_g].every(num) || !(f2.serving_grams > 0)) return "no nutrition";
  if (!text(f2.pack_label) || !num(f2.pack_grams) || !(f2.pack_grams > 0) || !num(f2.pack_price) || f2.pack_price < 0 || !num(f2.pack_yield) || !(f2.pack_yield > 0)) return "bad pack";
  if (!text(f2.shop_name) || f2.shop_class !== "fresh" && f2.shop_class !== "packaged") return "bad shop name";
  if (!list(f2.allergens) || !f2.allergens.every((a) => ALLERGENS.has(a)) || !list(f2.avoid_groups) || !list(f2.shop_brands)) return "bad lists";
  if (f2.unit_grams != null && (!(f2.unit_grams > 0) || !text(f2.unit_one) || !text(f2.unit_many))) return "bad unit";
  if (f2.small_pack && !(text(f2.small_pack.label) && f2.small_pack.grams > 0 && f2.small_pack.price >= 0 && f2.small_pack.yield > 0)) return "bad small pack";
  if (f2.buy_as_food != null && !(num(f2.buy_as_ratio) && f2.buy_as_ratio > 0)) return "bad buy-as";
  return null;
}
function recipeProblem(r2, foodKnown, photoOk) {
  if (!text(r2.id) || !/^[a-z0-9_]+$/.test(r2.id)) return "bad id";
  if (!text(r2.name) || !text(r2.description) || !text(r2.cuisine)) return "no name, description or cuisine";
  if (!MEALS_OK.has(r2.meal)) return `unknown meal "${r2.meal}"`;
  if (!num(r2.minutes) || r2.minutes < 5 || r2.minutes > 240) return "bad minutes";
  if (![1, 2, 3].includes(r2.level)) return "bad level";
  if (!Array.isArray(r2.components) || !r2.components.length) return "no components";
  const seen = /* @__PURE__ */ new Set();
  for (const x of r2.components) {
    if (!x || !text(x.food) || !foodKnown(x.food)) return `"${x?.food}" is not a food the Menu knows`;
    if (seen.has(x.food)) return `${x.food} is listed twice`;
    seen.add(x.food);
    if (!ROLES.has(x.role)) return `${x.food} has role "${x.role}"`;
    if (!num(x.grams) || !num(x.min) || !num(x.max) || !(x.grams > 0) || x.min < 0 || !(x.min <= x.grams && x.grams <= x.max)) return `${x.food} grams are outside its range`;
  }
  const count = (role) => r2.components.filter((x) => x.role === role).length;
  if (r2.meal === "snack" ? count("protein") > 1 || count("carb") > 1 : count("protein") !== 1 || count("carb") !== 1) return "needs one main protein and one main starch";
  if (!list(r2.steps) || r2.steps.length < 2) return "fewer than two steps";
  if (!text(r2.photo) || !photoOk(r2.photo)) return "no usable photo";
  return null;
}
function weekProblem(w, recipeOk, mealOf2) {
  if (!text(w.id) || !/^[a-z0-9_]+$/.test(w.id) || !text(w.title)) return "bad id or title";
  if (!list(w.meals) || !w.meals.length || !list(w.breakfasts) || !list(w.tags) || !list(w.covers)) return "bad lists";
  if (!w.tags.every((t) => TAGS.has(t)) || !w.covers.every((t) => t === "breakfast" || t === "lunch" || t === "dinner")) return "unknown tag or meal";
  const ids = [...w.meals, ...w.breakfasts];
  if (new Set(ids).size !== ids.length) return "a recipe is listed twice";
  const missing = ids.find((id) => !recipeOk(id));
  if (missing) return `${missing} is not an offered recipe`;
  if (![3, 5, 7, 10].includes(ids.length)) return `has ${ids.length} recipes, not 3, 5, 7 or 10`;
  if (w.breakfasts.some((id) => mealOf2(id) !== "breakfast")) return "its breakfasts are not breakfast recipes";
  return null;
}
var toRecipe = (r2) => ({
  id: r2.id,
  name: r2.name,
  description: r2.description,
  // A dinner that keeps is also offered as a packed lunch, the same rule the built-in catalog uses.
  meal_types: r2.meal === "dinner" ? r2.keeps ? ["lunch", "dinner"] : ["dinner"] : [r2.meal],
  cuisine: r2.cuisine,
  cook_time_minutes: r2.minutes,
  components: r2.components.map((x) => ({
    food: x.food,
    grams: x.grams,
    role: x.role,
    min: x.min,
    max: x.max,
    ...x.note ? { note: x.note } : {},
    ...x.step ? { step: x.step } : {}
  })),
  steps: [...r2.steps],
  ...r2.source_recipe_id ? { source: r2.source_recipe_id } : {}
});
var toPresentation = (r2) => ({
  photo: r2.photo,
  photoMatches: !!r2.photo_matches,
  level: r2.level,
  oven: !!r2.oven,
  onePan: !!r2.one_pan,
  kid: !!r2.kid,
  spicy: !!r2.spicy,
  keeps: !!r2.keeps
});
var toWeek = (w) => ({
  id: w.id,
  title: w.title,
  style: w.style ?? "",
  hook: w.hook ?? "",
  tags: w.tags,
  meals: [...w.meals],
  ...w.covers.length ? { covers: w.covers } : {},
  ...w.breakfasts.length ? { breakfasts: [...w.breakfasts] } : {}
});
function commitFood(f2) {
  const id = f2.food_id;
  FOODS[id] = {
    id,
    name: f2.name,
    category: f2.category,
    serving_grams: f2.serving_grams,
    calories: f2.calories,
    protein_g: f2.protein_g,
    carbs_g: f2.carbs_g,
    fat_g: f2.fat_g,
    fiber_g: f2.fiber_g,
    allergens: [...f2.allergens]
  };
  SHORT[id] = f2.short_name;
  if (f2.unit_grams != null) UNITS[id] = { grams: f2.unit_grams, one: f2.unit_one, many: f2.unit_many };
  else delete UNITS[id];
  const pack2 = {
    label: f2.pack_label,
    grams: f2.pack_grams,
    price: f2.pack_price,
    yield: f2.pack_yield,
    source: f2.price_source === "kroger" ? "kroger" : "standin",
    pantry: f2.pantry || void 0,
    ...f2.buy_as_food ? { buyAs: { food: f2.buy_as_food, ratio: f2.buy_as_ratio } } : {}
  };
  PACKS[id] = pack2;
  if (f2.small_pack) SMALL[id] = { label: f2.small_pack.label, grams: f2.small_pack.grams, price: f2.small_pack.price, yield: f2.small_pack.yield, source: "standin", pantry: void 0 };
  else delete SMALL[id];
  const keeps = KEEPS;
  if (f2.keeps) keeps.add(id);
  else keeps.delete(id);
  const shop = f2.shop_class === "fresh" ? { buy: f2.shop_name, cls: "fresh" } : { buy: f2.shop_name, cls: "packaged", query: f2.shop_query ?? f2.shop_name, brands: [...f2.shop_brands] };
  SHOP[id] = shop;
  for (const g of Object.keys(BY_GROUP)) {
    const has2 = BY_GROUP[g].includes(id);
    const want = f2.avoid_groups.includes(g);
    if (want && !has2) BY_GROUP[g].push(id);
    if (!want && has2) BY_GROUP[g] = BY_GROUP[g].filter((x) => x !== id);
  }
}
function restoreBundled() {
  reset2(CATALOG, BUNDLED.recipes);
  reset2(KNOWN_RECIPES, BUNDLED.known);
  reset2(WEEKS, BUNDLED.weeks);
  reset2(KNOWN_WEEKS, BUNDLED.knownWeeks);
  for (const k of Object.keys(BUNDLED.presentation)) PRESENTATION[k] = BUNDLED.presentation[k];
  reset2(SHELVES, BUNDLED_SHELVES.map((x) => ({ ...x, weeks: [...x.weeks] })));
  reset2(FAMILY_WEEKS, [...BUNDLED_FAMILY_WEEKS]);
  MADE_BY.recipe = {};
  MADE_BY.week = {};
  rebuildCatalog();
}
function applyCatalog(snap, opts = {}) {
  const photoOk = opts.photoOk ?? (() => true);
  const skipped = [];
  const foods = snap.foods.filter((f2) => {
    const why = foodProblem(f2);
    if (why) skipped.push(`food ${f2?.food_id}: ${why}`);
    return !why;
  });
  const incoming = new Set(foods.map((f2) => f2.food_id));
  const goodFoods = foods.filter((f2) => {
    if (f2.buy_as_food && !incoming.has(f2.buy_as_food) && !PACKS[f2.buy_as_food]) {
      skipped.push(`food ${f2.food_id}: bought as ${f2.buy_as_food}, which is unknown`);
      return false;
    }
    return true;
  });
  const foodIds = new Set(goodFoods.map((f2) => f2.food_id));
  const foodKnown = (id) => foodIds.has(id) || !!FOODS[id] && !!PACKS[id] && !!SHOP[id];
  const recipes = snap.recipes.filter((r2) => {
    const why = recipeProblem(r2, foodKnown, photoOk);
    if (why) skipped.push(`recipe ${r2?.id}: ${why}`);
    return !why;
  });
  const offered = recipes.filter((r2) => r2.offered !== false).sort((a, b) => a.sort - b.sort);
  if (!offered.some((r2) => r2.meal === "dinner")) {
    return { applied: false, foods: 0, recipes: 0, weeks: 0, skipped: [...skipped, "no usable dinners: the built-in catalog stays"] };
  }
  const offeredIds = new Set(offered.map((r2) => r2.id));
  const mealById = new Map(recipes.map((r2) => [r2.id, r2.meal]));
  const knownAfter = /* @__PURE__ */ new Set([...KNOWN_RECIPES.map((r2) => r2.id), ...recipes.map((r2) => r2.id)]);
  const weeks = snap.weeks.filter((w) => {
    const live = w.offered !== false;
    const why = weekProblem(w, (id) => live ? offeredIds.has(id) : knownAfter.has(id), (id) => mealById.get(id) ?? KNOWN_RECIPES.find((r2) => r2.id === id)?.meal_types[0]);
    if (why) skipped.push(`week ${w?.id}: ${why}`);
    return !why;
  });
  const offeredWeeks = weeks.filter((w) => w.offered !== false).sort((a, b) => a.sort - b.sort);
  try {
    for (const f2 of goodFoods) commitFood(f2);
    const known = new Map(KNOWN_RECIPES.map((r2) => [r2.id, r2]));
    for (const r2 of recipes) {
      known.set(r2.id, toRecipe(r2));
      PRESENTATION[r2.id] = toPresentation(r2);
      if (text(r2.made_by)) MADE_BY.recipe[r2.id] = r2.made_by.trim();
      else delete MADE_BY.recipe[r2.id];
    }
    reset2(CATALOG, offered.map((r2) => known.get(r2.id)));
    reset2(KNOWN_RECIPES, [...known.values()]);
    const knownWeeks = new Map(KNOWN_WEEKS.map((w) => [w.id, w]));
    for (const w of weeks) {
      knownWeeks.set(w.id, toWeek(w));
      if (text(w.made_by)) MADE_BY.week[w.id] = w.made_by.trim();
      else delete MADE_BY.week[w.id];
    }
    reset2(WEEKS, offeredWeeks.map((w) => knownWeeks.get(w.id)));
    reset2(KNOWN_WEEKS, [...knownWeeks.values()]);
    const live = new Set(offeredWeeks.map((w) => w.id));
    const shelves = BUNDLED_SHELVES.map((x) => ({ ...x, weeks: x.weeks.filter((id) => live.has(id)) }));
    const everShelved = new Set(BUNDLED_SHELVES.flatMap((x) => x.weeks));
    const bundledFamily = new Set(BUNDLED_FAMILY_WEEKS);
    const family = BUNDLED_FAMILY_WEEKS.filter((id) => live.has(id));
    for (const w of offeredWeeks) {
      if (everShelved.has(w.id) || bundledFamily.has(w.id)) continue;
      if (!text(w.shelf)) {
        if (w.tags.includes("family")) family.push(w.id);
        continue;
      }
      const shelf = shelves.find((x) => x.title === w.shelf);
      if (shelf) shelf.weeks.push(w.id);
      else shelves.push({ title: w.shelf, note: "", weeks: [w.id] });
    }
    reset2(SHELVES, shelves);
    reset2(FAMILY_WEEKS, family);
    rebuildCatalog();
  } catch (e) {
    restoreBundled();
    return { applied: false, foods: 0, recipes: 0, weeks: 0, skipped: [...skipped, `apply failed, built-in catalog restored: ${e.message}`] };
  }
  return { applied: true, foods: goodFoods.length, recipes: offered.length, weeks: offeredWeeks.length, skipped };
}

// features/menu/next/adminPreview.ts
var BIG = { kcal: 3e3, protein: 200, carbs: 330, fat: 100, fiber: 42 };
var base = {
  people: [],
  budget: 60,
  store: "self",
  targets: { breakfast: 0, lunch: 0, dinner: 7 },
  noCook: [],
  avoid: [],
  goal: DEFAULT_GOAL,
  cookStyle: "fresh",
  recipes: 7,
  shopDay: 0
};
var NO_PHOTO = "https://preview.invalid/none.jpg";
var single = (w) => w.endsWith("ies") ? w : w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w;
var r1 = (n) => Math.round(n * 10) / 10;
function withRows(snap, recipe, week) {
  const live = (rows) => rows.filter((r2) => (r2.status ?? "live") === "live");
  const recipes = live(snap.recipes).filter((r2) => r2.id !== recipe?.id);
  const weeks = live(snap.weeks).filter((w) => w.id !== week?.id);
  return applyCatalog({
    fetchedAt: snap.fetchedAt,
    foods: snap.foods,
    recipes: recipe ? [...recipes, { ...recipe, photo: recipe.photo || NO_PHOTO, offered: true }] : recipes,
    weeks: week ? [...weeks, { ...week, offered: true }] : weeks
  });
}
function previewRecipe(snap, row) {
  const rep = withRows(snap, row);
  if (!rep.applied) return { problem: rep.skipped.at(-1) ?? "the catalog could not be loaded" };
  const why = rep.skipped.find((x) => x.startsWith(`recipe ${row.id}:`));
  if (why) return { problem: why.slice(`recipe ${row.id}: `.length) };
  const r2 = RECIPE[row.id];
  const meal = MEALS[row.id];
  const slot = mealSlot(meal);
  const n = recipeNutrients(r2);
  const warnings = [];
  const plates = [DEFAULT_GOAL, BIG].map((goal) => {
    const p3 = plateFor(row.id, slot, { goal, child: false });
    const target = goal.kcal * SHARE[slot];
    for (const l of p3.lines) {
      const x = r2.components.find((c2) => c2.food === l.food);
      const name = shortName(l.food).toLowerCase();
      if ((l.role === "protein" || l.role === "carb") && x.min > 0 && l.grams < x.grams * 0.45) {
        warnings.push(`At ${goal.kcal.toLocaleString()} kcal the ${name} drops to ${Math.round(l.grams)} g, under half of the ${x.grams} g as written. Raise its minimum, or the plate stops being this dish.`);
      }
      if (l.grams <= 0 && row.name.toLowerCase().includes(single(name.split(" ").pop()))) {
        warnings.push(`At ${goal.kcal.toLocaleString()} kcal there is no ${name} on the plate, but the name promises it. Give it a minimum above 0.`);
      }
    }
    return {
      goal: goal.kcal,
      kcal: Math.round(p3.total.kcal),
      target: Math.round(target),
      protein: Math.round(p3.total.protein),
      carbs: Math.round(p3.total.carbs),
      fat: Math.round(p3.total.fat),
      fiber: r1(p3.total.fiber),
      lines: p3.lines.filter((l) => l.grams > 0).map((l) => {
        const u = UNITS[l.food];
        const count = u ? Math.round(l.grams / u.grams) : 0;
        return { name: shortName(l.food), amount: u ? `${count} ${count === 1 ? u.one : u.many}` : `${Math.round(l.grams)} g` };
      }),
      sides: p3.sides.map((s) => s.name),
      misses: Object.keys(p3.status).filter((k) => k !== "fiber" && p3.status[k] !== "ok").map((k) => `${k} ${p3.status[k]}`)
    };
  });
  const std = plates[0];
  if (slot === "snack" ? std.kcal < 100 || std.kcal > 300 : Math.abs(std.kcal - std.target) / std.target > 0.15) {
    warnings.push(slot === "snack" ? `A snack should land between 100 and 300 kcal at a standard goal; this one is ${std.kcal}.` : `At a standard goal this comes to ${std.kcal} kcal against ${std.target}: it cannot reach the target inside its ranges.`);
  }
  if (std.sides.length >= 2) warnings.push(`It needs two sides to reach a standard goal (${std.sides.join(", ")}): the sides are doing the meal's work.`);
  if (!PRESENTATION[row.id]?.photo || PRESENTATION[row.id].photo === NO_PHOTO) warnings.push("No photo yet. It cannot be published without one.");
  return {
    problem: null,
    asWritten: { kcal: Math.round(n.kcal), protein: Math.round(n.protein), carbs: Math.round(n.carbs), fat: Math.round(n.fat), fiber: r1(n.fiber) },
    plates,
    contains: containsLine(row.id, [plateFor(row.id, slot, { goal: DEFAULT_GOAL, child: false })]),
    price: Math.ceil(mealPrice(meal, base) - 1e-9),
    priceNote: meal.pack ? `${meal.pack} days for one person, bought in whole packs` : "one dinner for one person, bought in whole packs",
    perServing: Math.round(meal.perServing * 100) / 100,
    warnings: [...new Set(warnings)]
  };
}
function previewWeek(snap, row) {
  const rep = withRows(snap, void 0, row);
  if (!rep.applied) return { problem: rep.skipped.at(-1) ?? "the catalog could not be loaded" };
  const why = rep.skipped.find((x) => x.startsWith(`week ${row.id}:`));
  if (why) return { problem: why.slice(`week ${row.id}: `.length) };
  const w = weekById(row.id);
  const ids = [...w.meals, ...w.breakfasts ?? []];
  const covers = w.covers ?? ["dinner"];
  const h = {
    ...base,
    recipes: ids.length,
    targets: { breakfast: covers.includes("breakfast") ? 7 : 0, lunch: covers.includes("lunch") ? 7 : 0, dinner: covers.includes("dinner") ? 7 : 0 }
  };
  const warnings = [];
  const notKid = ids.filter((id) => !PRESENTATION[id].kid);
  if (w.tags.includes("family") && notKid.length) warnings.push(`A family week, but ${notKid.map((id) => RECIPE[id].name).join(", ")} ${notKid.length === 1 ? "is" : "are"} not marked kid-friendly.`);
  const notKeeps = ids.filter((id) => !PRESENTATION[id].keeps);
  if (w.tags.includes("prep") && notKeeps.length) warnings.push(`A prep week, but ${notKeeps.map((id) => RECIPE[id].name).join(", ")} ${notKeeps.length === 1 ? "does" : "do"} not keep from prep day.`);
  const wrongMeal = w.meals.filter((id) => !RECIPE[id].meal_types.some((t) => covers.includes(t)));
  if (wrongMeal.length) warnings.push(`${wrongMeal.map((id) => RECIPE[id].name).join(", ")} ${wrongMeal.length === 1 ? "is" : "are"} not a meal this week covers (${covers.join(", ")}).`);
  const resolved = resolveWeek(w, h);
  if (resolved.recipes.length !== ids.length) warnings.push(`Only ${resolved.recipes.length} of its ${ids.length} recipes get cooked for someone who plans ${covers.join(" and ")}: the planner will not show it to them.`);
  return {
    problem: null,
    price: Math.ceil(weekTotal(w, h) - 1e-9),
    mealsEach: resolved.slots.length,
    recipes: ids.map((id) => ({ id, name: RECIPE[id].name })),
    warnings
  };
}
var loadReport = (snap) => withRows(snap);
export {
  loadReport,
  previewRecipe,
  previewWeek
};
