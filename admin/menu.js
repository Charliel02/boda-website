// The Menu view: the recipes, ready-made weeks and foods the app's week planner is built from.
//
// It edits three tables: menu_recipes, menu_catalog_weeks and menu_foods. Nothing here decides what is
// allowed: the database does (admin-only writes and a check on every row), and a save it refuses comes
// back as "Rejected by the server". This page holds no key beyond the public one in index.html.
//
// The plate preview is the app's own code (menu-preview.js, built from the app repo's
// features/menu/next/adminPreview.ts), so a plate, a price and an allergen line here are what a
// member's phone would show. Rebuild that file when the planner's sizing or prices change.

import { loadReport, previewRecipe, previewWeek } from './menu-preview.js';

const ALLERGENS = ['milk', 'egg', 'fish', 'shellfish', 'tree_nuts', 'peanuts', 'wheat', 'soy', 'sesame'];
const ROLES = ['protein', 'carb', 'veg', 'fat', 'fixed'];
const MEALS = ['dinner', 'breakfast', 'lunch', 'snack'];
const WEEK_TAGS = ['budget', 'protein', 'fast', 'veg', 'prep', 'family'];
const COVERS = ['breakfast', 'lunch', 'dinner'];
const PENDING_PHOTO = 'https://preview.invalid/pending.jpg';

const CSS = `
  .mn-tabs{display:flex;gap:8px;margin:0 0 16px}
  .mn-note{background:#FDEBE1;color:#993C1D;border-radius:12px;padding:10px 13px;font-size:12.5px;margin:0 0 14px}
  .mn-note ul{margin:4px 0 0;padding-left:18px}
  .mn-ok{color:var(--good);font-size:12.5px;margin:0 0 14px}
  .mn-comp{background:var(--white);border:1px solid var(--line);border-radius:11px;padding:8px;margin-bottom:8px}
  .mn-comp .l1,.mn-comp .l2{display:flex;gap:6px;align-items:center}
  .mn-comp .l2{margin-top:6px}
  .mn-comp select,.mn-comp input{padding:7px 8px;border:1px solid var(--line);border-radius:8px;background:var(--white);min-width:0}
  .mn-comp .food{flex:1} .mn-comp .n{width:64px} .mn-comp .note{flex:1} .mn-comp .x{border:0;background:none;cursor:pointer;color:var(--muted);font-size:16px}
  .mn-comp label{font-size:10.5px;color:var(--muted)}
  .mn-pick{display:flex;gap:6px;align-items:center;background:var(--white);border:1px solid var(--line);border-radius:9px;padding:6px 9px;margin-bottom:5px;font-size:13px}
  .mn-pick span{flex:1} .mn-pick button{border:0;background:none;cursor:pointer;color:var(--muted)}
  .mn-prev{background:var(--white);border-radius:12px;padding:12px 14px;margin:16px 0;font-size:12.5px}
  .mn-prev h4{margin:0 0 6px;font-size:13px}
  .mn-plates{display:flex;gap:12px;margin:8px 0}
  .mn-plates>div{flex:1;border:1px solid var(--line);border-radius:10px;padding:8px 10px}
  .mn-plates ul{margin:6px 0 0;padding-left:16px}
  .mn-sel{width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--white)}
  .field .mn-checks label{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;margin:0 14px 6px 0;text-transform:none;letter-spacing:0;font-weight:500;color:inherit}
  .field .mn-checks input{width:auto;padding:0;margin:0}
  .imgbox .prev{flex:none}
`;

export function createMenu({ sb, $, esc, main, sheetTable, openDrawer, closeDrawer, slugify, foodSearch }) {
  document.head.appendChild(Object.assign(document.createElement('style'), { textContent: CSS }));

  const data = { foods: [], recipes: [], weeks: [], loaded: false, error: null };
  let tab = 'recipes';
  let filter = 'all';
  let query = '';

  // ── small helpers ─────────────────────────────────────────
  const val = id => $(id).value.trim();
  const numOrNull = v => (v === '' || v == null ? null : Number(v));
  const listOf = s => s.split(',').map(x => x.trim()).filter(Boolean);
  const checked = id => [...$(id).querySelectorAll('input:checked')].map(i => i.value);
  const pill = s => `<span class="pill ${s === 'live' ? 'live' : s === 'draft' ? 'scheduled' : 'done'}">${esc(s)}</span>`;
  const checks = (id, all, on) => `<div class="mn-checks" id="${id}">${all.map(v =>
    `<label><input type="checkbox" value="${esc(v)}" ${on.includes(v) ? 'checked' : ''} /> ${esc(v.replace('_', ' '))}</label>`).join('')}</div>`;
  const flag = (id, label, on) => `<label><input type="checkbox" id="${id}" ${on ? 'checked' : ''} /> ${esc(label)}</label>`;
  const field = (label, inner, cls = '') => `<div class="field ${cls}"><label>${esc(label)}</label>${inner}</div>`;
  const input = (id, v, extra = '') => `<input id="${id}" value="${esc(v ?? '')}" ${extra} />`;
  const thumb = photo => (photo && /^https:\/\//.test(photo)
    ? `<img class="thumb" src="${esc(photo)}" alt="" loading="lazy">`
    : `<div class="thumb ph" title="${photo ? 'This photo is bundled inside the app' : 'No photo'}">${photo ? 'app' : '+'}</div>`);
  const foodName = id => data.foods.find(f => f.food_id === id)?.short_name ?? id;
  const recipeName = id => data.recipes.find(r => r.id === id)?.name ?? id;

  // What each status can become. The first button keeps the status it has.
  const actions = status => (status === 'live'
    ? [['live', 'Save (stays live)', 'primary'], ['retired', 'Retire', '']]
    : status === 'retired'
      ? [['retired', 'Save', ''], ['live', 'Publish again', 'primary']]
      : [['draft', 'Save draft', ''], ['live', 'Publish', 'primary']]);
  const actionsHtml = status => `
    <div class="problems" id="mProblems"></div>
    <div class="actions">${actions(status).map(([to, label, cls]) =>
      `<button class="btn ${cls}" data-to="${to}">${esc(label)}</button>`).join('')}
      <span class="tiny muted" id="mMsg"></span></div>`;

  // One write path for all three tables. Insert for a new row so a taken id is refused, not overwritten.
  async function saveRow(table, key, row, isNew) {
    const q = isNew ? sb.from(table).insert(row) : sb.from(table).update(row).eq(key, row[key]);
    const { data: back, error } = await q.select(key);
    if (error) return `Rejected by the server: ${error.message}`;
    if (!back?.length) return 'Nothing was saved. Only a signed-in admin can change the Menu.';
    return null;
  }
  function wireSave(build, table, key, isNew) {
    $('drawer').querySelectorAll('[data-to]').forEach(btn => btn.onclick = async () => {
      const buttons = [...$('drawer').querySelectorAll('[data-to]')];
      $('mProblems').textContent = '';
      buttons.forEach(b => (b.disabled = true));
      $('mMsg').textContent = 'Saving…';
      let problem = null;
      try {
        const row = await build(btn.dataset.to);
        problem = typeof row === 'string' ? row : await saveRow(table, key, row, isNew);
      } catch (e) { problem = e.message || String(e); }
      $('mMsg').textContent = '';
      if (problem) { $('mProblems').textContent = problem; buttons.forEach(b => (b.disabled = false)); return; }
      closeDrawer();
      await load();
      view();
    });
  }

  // Redraw an editor's preview as it is typed in. Set as properties, not listeners: the drawer element
  // outlives each editor, so a listener would keep firing for an editor that has closed.
  function livePreview(preview) {
    let timer = null;
    const soon = ms => () => { clearTimeout(timer); timer = setTimeout(() => { try { preview(); } catch { /* editor closed */ } }, ms); };
    $('drawer').oninput = preview ? soon(350) : null;
    $('drawer').onchange = preview ? soon(50) : null;
    if (preview) preview();
  }

  // ── data ──────────────────────────────────────────────────
  async function load() {
    const [foods, recipes, weeks] = await Promise.all([
      sb.from('menu_foods').select('*').order('short_name').limit(2000),
      sb.from('menu_recipes').select('*').order('sort').limit(2000),
      sb.from('menu_catalog_weeks').select('*').order('sort').limit(2000),
    ]);
    const bad = foods.error || recipes.error || weeks.error;
    if (bad) { data.error = bad.message; data.loaded = true; return; }
    const ids = foods.data.map(f => f.food_id);
    const nutrition = ids.length
      ? await sb.from('foods').select('id,name,category,serving_grams,calories,protein_g,carbs_g,fat_g,fiber_g').in('id', ids).limit(2000)
      : { data: [] };
    if (nutrition.error) { data.error = nutrition.error.message; data.loaded = true; return; }
    const byId = new Map(nutrition.data.map(n => [n.id, n]));
    // Numbers can arrive as text; the planner needs numbers. Same shape the app builds for itself.
    data.foods = foods.data.map(f => {
      const x = byId.get(f.food_id);
      return {
        ...f, unit_grams: numOrNull(f.unit_grams), pack_grams: Number(f.pack_grams), pack_price: Number(f.pack_price),
        pack_yield: Number(f.pack_yield), buy_as_ratio: numOrNull(f.buy_as_ratio),
        name: x?.name ?? null, category: x?.category ?? null, serving_grams: x ? Number(x.serving_grams) : null,
        calories: x ? Number(x.calories) : null, protein_g: x ? Number(x.protein_g) : null, carbs_g: x ? Number(x.carbs_g) : null,
        fat_g: x ? Number(x.fat_g) : null, fiber_g: x ? Number(x.fiber_g) : null,
      };
    });
    data.recipes = recipes.data;
    data.weeks = weeks.data;
    data.error = null;
    data.loaded = true;
  }
  const snapshot = () => ({ fetchedAt: 'admin', foods: data.foods.filter(f => f.name), recipes: data.recipes, weeks: data.weeks });

  // ── the view ──────────────────────────────────────────────
  function view() {
    if (!data.loaded) {
      main.innerHTML = '<h1>Menu</h1><div class="spinner">Loading…</div>';
      load().then(view);
      return;
    }
    if (data.error) {
      main.innerHTML = `<h1>Menu</h1><div class="empty">Could not read the Menu tables: ${esc(data.error)}</div>`;
      return;
    }
    let health = '';
    try {
      const rep = loadReport(snapshot());
      health = !rep.applied
        ? `<div class="mn-note"><b>The app could not load this catalog</b> and would fall back to its built-in copy.<ul>${rep.skipped.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>`
        : rep.skipped.length
          ? `<div class="mn-note"><b>The app would leave ${rep.skipped.length} live ${rep.skipped.length === 1 ? 'row' : 'rows'} out:</b><ul>${rep.skipped.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>`
          : `<p class="mn-ok">The app would load all of it: ${rep.foods} foods, ${rep.recipes} live recipes, ${rep.weeks} live weeks.</p>`;
    } catch (e) {
      health = `<div class="mn-note">The catalog check itself failed: ${esc(e.message)}</div>`;
    }
    main.innerHTML = `
      <h1>Menu</h1>
      <p class="lede">The recipes, ready-made weeks and foods the week planner is built from. Members do not
        see changes made here yet: the app still uses its built-in copy until its database switch is turned on.</p>
      ${health}
      <div class="mn-tabs">${[['recipes', `Recipes ${data.recipes.length}`], ['weeks', `Weeks ${data.weeks.length}`], ['foods', `Foods ${data.foods.length}`]]
        .map(([t, label]) => `<button class="chip ${t === tab ? 'on' : ''}" data-mt="${t}">${esc(label)}</button>`).join('')}</div>
      <div id="mnBody"></div>`;
    main.querySelectorAll('[data-mt]').forEach(b => b.onclick = () => { tab = b.dataset.mt; filter = 'all'; query = ''; view(); });
    ({ recipes: bodyRecipes, weeks: bodyWeeks, foods: bodyFoods })[tab]();
  }

  function bar(filters, placeholder, newLabel, onNew, draw) {
    $('mnBody').innerHTML = `
      <div class="sheet-bar">
        <input type="search" id="mq" placeholder="${esc(placeholder)}" value="${esc(query)}" />
        ${filters.map(f => `<button class="chip ${f === filter ? 'on' : ''}" data-mf="${esc(f)}">${esc(f)}</button>`).join('')}
        <button class="btn primary" id="mNew">${esc(newLabel)}</button>
      </div>
      <div id="mTable"></div><p class="rowcount" id="mCount"></p>`;
    $('mq').addEventListener('input', e => { query = e.target.value; draw(); });
    $('mnBody').querySelectorAll('[data-mf]').forEach(b => b.onclick = () => { filter = b.dataset.mf; view(); });
    $('mNew').onclick = onNew;
    draw();
  }
  const rowClicks = open => $('mTable').querySelectorAll('[data-id]').forEach(tr => (tr.onclick = () => open(tr.dataset.id)));

  // ── Recipes ───────────────────────────────────────────────
  function bodyRecipes() {
    bar(['all', ...MEALS, 'draft', 'retired'], 'Search name, cuisine or food', 'New recipe', () => openRecipe(null), () => {
      const q = query.trim().toLowerCase();
      const rows = data.recipes.filter(r => {
        if (MEALS.includes(filter) && r.meal !== filter) return false;
        if ((filter === 'draft' || filter === 'retired') && r.status !== filter) return false;
        if (!q) return true;
        return `${r.name} ${r.cuisine} ${r.made_by ?? ''} ${r.components.map(c => foodName(c.food)).join(' ')}`.toLowerCase().includes(q);
      });
      $('mTable').innerHTML = sheetTable(
        [{ label: 'Photo', w: '52px' }, { label: 'Name' }, { label: 'Meal' }, { label: 'Cuisine' },
         { label: 'Time', cls: 'num' }, { label: 'Made by' }, { label: '' }],
        rows.map(r => `<tr data-id="${esc(r.id)}">
          <td>${thumb(r.photo)}</td>
          <td class="nm">${esc(r.name)}<div class="tiny muted">${esc(r.description)}</div></td>
          <td class="muted">${esc(r.meal)}</td><td class="muted">${esc(r.cuisine)}</td>
          <td class="num muted">${r.minutes}m</td><td class="muted">${esc(r.made_by ?? '')}</td>
          <td>${pill(r.status)}</td></tr>`),
        data.recipes.length ? 'Nothing matches that search.' : 'No Menu recipes yet.');
      $('mCount').textContent = `${rows.length} of ${data.recipes.length} recipes · ${data.recipes.filter(r => r.status === 'live').length} live`;
      rowClicks(openRecipe);
    });
  }

  const compHtml = (c, i) => `<div class="mn-comp" data-comp="${i}">
    <div class="l1">
      <select class="food">${c.food ? '' : '<option value="">Pick a food…</option>'}${data.foods.map(f =>
        `<option value="${esc(f.food_id)}" ${f.food_id === c.food ? 'selected' : ''}>${esc(f.short_name)}</option>`).join('')}</select>
      <select class="role">${ROLES.map(r => `<option ${r === c.role ? 'selected' : ''}>${r}</option>`).join('')}</select>
      <button class="x" data-del="${i}" title="Remove">×</button>
    </div>
    <div class="l2">
      <label>grams</label><input class="n grams" type="number" min="0" value="${c.grams ?? ''}" />
      <label>from</label><input class="n min" type="number" min="0" value="${c.min ?? ''}" />
      <label>to</label><input class="n max" type="number" min="0" value="${c.max ?? ''}" />
      <input class="note" placeholder="note, e.g. diced" value="${esc(c.note ?? '')}" />
    </div></div>`;

  function openRecipe(id) {
    const isNew = !id;
    const r = isNew
      ? { id: '', name: '', description: '', meal: 'dinner', cuisine: 'American', minutes: 30, components: [], pantry: [], steps: [],
          level: 1, oven: false, one_pan: false, kid: false, spicy: false, keeps: false, photo: null, photo_matches: true,
          made_by: null, status: 'draft', sort: Math.max(0, ...data.recipes.map(x => x.sort)) + 1, source_recipe_id: null }
      : data.recipes.find(x => x.id === id);
    if (!r) return;
    let comps = r.components.map(c => ({ ...c }));
    const usedBy = isNew ? [] : data.weeks.filter(w => w.meals.includes(r.id) || w.breakfasts.includes(r.id));
    const cuisines = [...new Set(data.recipes.map(x => x.cuisine))].sort();

    openDrawer(`
      <button class="btn sm" id="dClose">← Back</button>
      <h2 style="margin-top:14px">${isNew ? 'New Menu recipe' : esc(r.name)} ${isNew ? '' : pill(r.status)}</h2>
      ${isNew ? '' : `<p class="tiny muted">id: ${esc(r.id)}${usedBy.length ? ` · in ${usedBy.length} ${usedBy.length === 1 ? 'week' : 'weeks'}: ${esc(usedBy.map(w => w.title).join(', '))}` : ''}</p>`}

      <div class="imgbox">
        <div class="prev" id="mPhotoPrev">${r.photo && /^https:/.test(r.photo)
          ? `<img src="${esc(r.photo)}" style="width:82px;height:82px;border-radius:12px;object-fit:cover">`
          : r.photo ? 'in the app' : 'no photo'}</div>
        <div>
          <input type="file" id="mPhoto" accept="image/png,image/jpeg,image/webp" />
          <p class="tiny muted" style="margin:6px 0 0">Uploads when you save, shrunk to fit a phone.
            ${r.photo && !/^https:/.test(r.photo) ? 'The current photo is bundled inside the app, so it cannot be shown here.' : 'A recipe cannot be published without one.'}</p>
        </div>
      </div>

      ${field('Name', input('mName', r.name, 'maxlength="60"'))}
      ${isNew ? field('Id (lower case, set once)', input('mId', '', 'placeholder="made from the name"')) : ''}
      ${field('Description, one line', input('mDesc', r.description, 'maxlength="160"'))}
      <div class="row">
        ${field('Meal', `<select id="mMeal" class="mn-sel">${MEALS.map(m => `<option ${m === r.meal ? 'selected' : ''}>${m}</option>`).join('')}</select>`, 'grow')}
        ${field('Cuisine', `${input('mCuisine', r.cuisine, 'list="mCuisines"')}<datalist id="mCuisines">${cuisines.map(c => `<option value="${esc(c)}">`).join('')}</datalist>`, 'grow')}
      </div>
      <div class="row">
        ${field('Minutes', input('mMinutes', r.minutes, 'type="number" min="5" max="240"'), 'grow')}
        ${field('Effort, 1 easy to 3', input('mLevel', r.level, 'type="number" min="1" max="3"'), 'grow')}
        ${field('Order in lists', input('mSort', r.sort, 'type="number"'), 'grow')}
      </div>
      ${field('Made by (shown to members; leave empty for none)', input('mMadeBy', r.made_by, 'maxlength="60"'))}
      <div class="field"><label>About it</label><div class="mn-checks">
        ${flag('mOven', 'uses the oven', r.oven)} ${flag('mOnePan', 'one pan', r.one_pan)} ${flag('mKid', 'kid-friendly', r.kid)}
        ${flag('mSpicy', 'spicy', r.spicy)} ${flag('mKeeps', 'keeps from prep day', r.keeps)} ${flag('mMatches', 'the photo shows this dish', r.photo_matches)}
      </div></div>

      <h3 style="font-size:14px;margin:20px 0 4px">What is on the plate</h3>
      <p class="tiny muted" style="margin:0 0 8px">Grams as eaten for one standard serving, and the range the app may
        size each food within. A meal needs exactly one protein and one carb; everything else is veg, fat or fixed.
        A food that is not in the list has to be added under Foods first.</p>
      <div id="mComps"></div>
      <button class="btn sm" id="mAddComp">+ Add a food</button>

      <div class="field" style="margin-top:18px"><label>Seasoning and pantry, separated by commas (on the list, not on the plate)</label>
        ${input('mPantry', r.pantry.join(', '))}</div>
      <div class="field"><label>Steps, one per line, each a full sentence</label>
        <textarea id="mSteps" style="min-height:140px">${esc(r.steps.join('\n'))}</textarea></div>

      <div class="mn-prev" id="mPreview"></div>
      ${actionsHtml(r.status)}
    `);
    $('dClose').onclick = closeDrawer;

    const readComps = () => [...$('mComps').querySelectorAll('.mn-comp')].forEach((el, i) => {
      const note = el.querySelector('.note').value.trim();
      comps[i] = {
        ...comps[i], food: el.querySelector('.food').value, role: el.querySelector('.role').value,
        grams: Number(el.querySelector('.grams').value), min: Number(el.querySelector('.min').value), max: Number(el.querySelector('.max').value),
      };
      if (note) comps[i].note = note; else delete comps[i].note;
    });
    const drawComps = () => {
      $('mComps').innerHTML = comps.map(compHtml).join('');
      $('mComps').querySelectorAll('[data-del]').forEach(b => b.onclick = () => { readComps(); comps.splice(Number(b.dataset.del), 1); drawComps(); preview(); });
    };
    drawComps();
    $('mAddComp').onclick = () => { readComps(); comps.push({ food: '', role: 'veg', grams: 80, min: 40, max: 160 }); drawComps(); };

    let idTouched = false;
    if (isNew) {
      $('mId').addEventListener('input', () => { idTouched = true; });
      $('mName').addEventListener('input', () => { if (!idTouched) $('mId').value = slugify($('mName').value); });
    }

    const collect = () => {
      readComps();
      return {
        id: isNew ? val('mId') : r.id, source_recipe_id: r.source_recipe_id ?? null, name: val('mName'), description: val('mDesc'),
        meal: $('mMeal').value, cuisine: val('mCuisine'), minutes: Number(val('mMinutes')), components: comps.filter(c => c.food),
        pantry: listOf($('mPantry').value), steps: $('mSteps').value.split('\n').map(s => s.trim()).filter(Boolean),
        level: Number(val('mLevel')), oven: $('mOven').checked, one_pan: $('mOnePan').checked, kid: $('mKid').checked,
        spicy: $('mSpicy').checked, keeps: $('mKeeps').checked, photo: r.photo ?? null, photo_matches: $('mMatches').checked,
        made_by: val('mMadeBy') || null, sort: Number(val('mSort')) || 0,
      };
    };

    function preview() {
      if (!$('mPreview')) return;
      const row = collect();
      if ($('mPhoto').files[0]) row.photo = PENDING_PHOTO;
      const box = $('mPreview');
      if (!row.id || !row.name || !row.components.length) { box.innerHTML = '<span class="muted">Add a name and some foods to see the plate.</span>'; return; }
      let p;
      try { p = previewRecipe(snapshot(), row); } catch (e) { box.innerHTML = `<span class="muted">Cannot work out the plate yet: ${esc(e.message)}</span>`; return; }
      if (p.problem) { box.innerHTML = `<div class="mn-note" style="margin:0"><b>The app would leave this recipe out:</b> ${esc(p.problem)}.</div>`; return; }
      const w = p.asWritten;
      box.innerHTML = `
        <h4>How the app would serve it</h4>
        <div>As written: ${w.kcal} kcal · ${w.protein} g protein · ${w.carbs} g carbs · ${w.fat} g fat · ${w.fiber} g fibre</div>
        <div class="mn-plates">${p.plates.map(pl => `<div>
          <b>${pl.goal.toLocaleString()} kcal a day</b>
          <div class="muted">${pl.kcal} kcal (aim ${pl.target}) · ${pl.protein} P · ${pl.carbs} C · ${pl.fat} F</div>
          <ul>${pl.lines.map(l => `<li>${esc(l.amount)} ${esc(l.name.toLowerCase())}</li>`).join('')}
            ${pl.sides.map(s => `<li class="muted">side: ${esc(s)}</li>`).join('')}</ul>
          ${pl.misses.length ? `<div class="muted">${esc(pl.misses.join(', '))}</div>` : ''}
        </div>`).join('')}</div>
        <div>${esc(p.contains)}</div>
        <div>About $${p.price} to shop (${esc(p.priceNote)}); $${p.perServing.toFixed(2)} a serving.</div>
        ${p.warnings.length ? `<div class="mn-note" style="margin:10px 0 0"><b>Worth a look before publishing:</b><ul>${p.warnings.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}`;
    }
    livePreview(preview);

    wireSave(async to => {
      const row = collect();
      if (!/^[a-z0-9_]+$/.test(row.id)) return 'The id can only use lower-case letters, numbers and underscores.';
      const file = $('mPhoto').files[0];
      if (file) row.photo = await uploadPhoto(file, row.id);
      return { ...row, status: to };
    }, 'menu_recipes', 'id', isNew);
  }

  // Photos go to the public `menu-photos` bucket (admin-only writes). Shrunk first: the app draws them small.
  async function uploadPhoto(file, id) {
    let blob = file;
    try {
      const bmp = await createImageBitmap(file);
      const k = Math.min(1, 960 / Math.max(bmp.width, bmp.height));
      const canvas = Object.assign(document.createElement('canvas'), { width: Math.round(bmp.width * k), height: Math.round(bmp.height * k) });
      canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
      blob = await new Promise(done => canvas.toBlob(done, 'image/jpeg', 0.82)) ?? file;
    } catch { /* an image the browser cannot redraw is sent as it is */ }
    if (blob.size > 5 * 1024 * 1024) throw new Error('The photo must be under 5 MB.');
    const path = `recipes/${id}-${Date.now()}.jpg`;
    const { error } = await sb.storage.from('menu-photos').upload(path, blob, { contentType: blob.type || 'image/jpeg' });
    if (error) throw new Error(`Rejected by the server: ${error.message}`);
    return sb.storage.from('menu-photos').getPublicUrl(path).data.publicUrl;
  }

  // ── Weeks ─────────────────────────────────────────────────
  function bodyWeeks() {
    bar(['all', 'draft', 'retired'], 'Search title, shelf or recipe', 'New week', () => openWeek(null), () => {
      const q = query.trim().toLowerCase();
      const rows = data.weeks.filter(w => {
        if (filter !== 'all' && w.status !== filter) return false;
        if (!q) return true;
        return `${w.title} ${w.style} ${w.shelf ?? ''} ${w.made_by ?? ''} ${[...w.meals, ...w.breakfasts].map(recipeName).join(' ')}`.toLowerCase().includes(q);
      });
      $('mTable').innerHTML = sheetTable(
        [{ label: 'Title' }, { label: 'Recipes', cls: 'num' }, { label: 'Plans' }, { label: 'Tags' }, { label: 'Shelf' }, { label: 'Made by' }, { label: '' }],
        rows.map(w => `<tr data-id="${esc(w.id)}">
          <td class="nm">${esc(w.title)}<div class="tiny muted">${esc(w.hook || w.style)}</div></td>
          <td class="num">${w.meals.length + w.breakfasts.length}</td>
          <td class="muted">${esc((w.covers.length ? w.covers : ['dinner']).join(', '))}</td>
          <td><div class="tagline">${w.tags.map(t => `<span class="tg">${esc(t)}</span>`).join('')}</div></td>
          <td class="muted">${esc(w.shelf ?? '')}</td><td class="muted">${esc(w.made_by ?? '')}</td>
          <td>${pill(w.status)}</td></tr>`),
        data.weeks.length ? 'Nothing matches that search.' : 'No ready-made weeks yet.');
      $('mCount').textContent = `${rows.length} of ${data.weeks.length} weeks · ${data.weeks.filter(w => w.status === 'live').length} live`;
      rowClicks(openWeek);
    });
  }

  function openWeek(id) {
    const isNew = !id;
    const w = isNew
      ? { id: '', title: '', style: '', hook: '', tags: [], covers: [], meals: [], breakfasts: [], shelf: null, made_by: null,
          status: 'draft', sort: Math.max(0, ...data.weeks.map(x => x.sort)) + 1 }
      : data.weeks.find(x => x.id === id);
    if (!w) return;
    const picks = { meals: [...w.meals], breakfasts: [...w.breakfasts] };
    const shelves = [...new Set(data.weeks.map(x => x.shelf).filter(Boolean))].sort();

    openDrawer(`
      <button class="btn sm" id="dClose">← Back</button>
      <h2 style="margin-top:14px">${isNew ? 'New ready-made week' : esc(w.title)} ${isNew ? '' : pill(w.status)}</h2>
      ${isNew ? '' : `<p class="tiny muted">id: ${esc(w.id)}</p>`}
      ${field('Title', input('wTitle', w.title, 'maxlength="40"'))}
      ${isNew ? field('Id (lower case, set once)', input('wId', '', 'placeholder="made from the title"')) : ''}
      ${field('Style, a few words', input('wStyle', w.style))}
      ${field('Hook, the line under the title', input('wHook', w.hook))}
      <div class="field"><label>Tags</label>${checks('wTags', WEEK_TAGS, w.tags)}</div>
      <div class="field"><label>Meals it plans (none ticked means dinner only)</label>${checks('wCovers', COVERS, w.covers)}</div>

      <h3 style="font-size:14px;margin:18px 0 4px">Recipes</h3>
      <p class="tiny muted" style="margin:0 0 8px">A live week has 3, 5, 7 or 10 recipes in all, and every one of them must be live.</p>
      <div id="wMeals"></div>
      <h3 style="font-size:14px;margin:18px 0 4px">Breakfasts, if it plans them</h3>
      <div id="wBreakfasts"></div>

      <div class="row" style="margin-top:16px">
        ${field('Shelf on the page', `${input('wShelf', w.shelf, 'list="wShelves"')}<datalist id="wShelves">${shelves.map(s => `<option value="${esc(s)}">`).join('')}</datalist>`, 'grow')}
        ${field('Order', input('wSort', w.sort, 'type="number"'), 'grow')}
      </div>
      <p class="tiny muted" style="margin:-6px 0 12px">The order of weeks on the app's own shelves is still set inside the app; a week added here goes after them.</p>
      ${field('Made by (shown to members; leave empty for none)', input('wMadeBy', w.made_by, 'maxlength="60"'))}
      <div class="mn-prev" id="wPreview"></div>
      ${actionsHtml(w.status)}
    `);
    $('dClose').onclick = closeDrawer;

    const drawPicks = (key, boxId, only) => {
      const taken = new Set([...picks.meals, ...picks.breakfasts]);
      const options = data.recipes.filter(r => !taken.has(r.id) && r.status !== 'retired' && (!only || r.meal === only));
      $(boxId).innerHTML = picks[key].map((rid, i) => {
        const r = data.recipes.find(x => x.id === rid);
        return `<div class="mn-pick"><span>${esc(r?.name ?? rid)} <span class="muted tiny">${esc(r ? r.meal : 'unknown')}${r && r.status !== 'live' ? ` · ${esc(r.status)}` : ''}</span></span>
          <button data-up="${i}" title="Move up">↑</button><button data-rm="${i}" title="Remove">×</button></div>`;
      }).join('') + `<select class="mn-sel" data-add><option value="">+ Add a recipe…</option>${options.map(r =>
        `<option value="${esc(r.id)}">${esc(r.name)} (${esc(r.meal)}${r.status !== 'live' ? `, ${esc(r.status)}` : ''})</option>`).join('')}</select>`;
      const again = () => { drawPicks('meals', 'wMeals'); drawPicks('breakfasts', 'wBreakfasts', 'breakfast'); preview(); };
      $(boxId).querySelector('[data-add]').onchange = e => { if (e.target.value) { picks[key].push(e.target.value); again(); } };
      $(boxId).querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { picks[key].splice(Number(b.dataset.rm), 1); again(); });
      $(boxId).querySelectorAll('[data-up]').forEach(b => b.onclick = () => {
        const i = Number(b.dataset.up);
        if (i > 0) { [picks[key][i - 1], picks[key][i]] = [picks[key][i], picks[key][i - 1]]; again(); }
      });
    };

    let idTouched = false;
    if (isNew) {
      $('wId').addEventListener('input', () => { idTouched = true; });
      $('wTitle').addEventListener('input', () => { if (!idTouched) $('wId').value = slugify($('wTitle').value); });
    }
    const collect = () => ({
      id: isNew ? val('wId') : w.id, title: val('wTitle'), style: val('wStyle'), hook: val('wHook'), tags: checked('wTags'),
      covers: checked('wCovers'), meals: [...picks.meals], breakfasts: [...picks.breakfasts], shelf: val('wShelf') || null,
      made_by: val('wMadeBy') || null, sort: Number(val('wSort')) || 0,
    });

    function preview() {
      if (!$('wPreview')) return;
      const row = collect();
      const box = $('wPreview');
      if (!row.id || !row.title || !row.meals.length) { box.innerHTML = '<span class="muted">Add a title and some recipes to see the week.</span>'; return; }
      const notLive = [...row.meals, ...row.breakfasts].filter(rid => data.recipes.find(r => r.id === rid)?.status !== 'live');
      if (notLive.length) {
        box.innerHTML = `<div class="mn-note" style="margin:0">${esc(notLive.map(recipeName).join(', '))} ${notLive.length === 1 ? 'is' : 'are'} not live yet, so this week can be saved as a draft but not published, and its price cannot be worked out.</div>`;
        return;
      }
      let p;
      try { p = previewWeek(snapshot(), row); } catch (e) { box.innerHTML = `<span class="muted">Cannot work out the week yet: ${esc(e.message)}</span>`; return; }
      if (p.problem) { box.innerHTML = `<div class="mn-note" style="margin:0"><b>The app would leave this week out:</b> ${esc(p.problem)}.</div>`; return; }
      const n = row.meals.length + row.breakfasts.length;
      const warnings = [...p.warnings, ...([3, 5, 7, 10].includes(n) ? [] : [`It has ${n} recipes. A live week has 3, 5, 7 or 10.`])];
      box.innerHTML = `
        <h4>How the app would offer it</h4>
        <div>About $${p.price} for one person who plans every meal it covers, ${p.mealsEach} meals in all.</div>
        ${warnings.length ? `<div class="mn-note" style="margin:10px 0 0"><b>Worth a look before publishing:</b><ul>${warnings.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}`;
    }
    drawPicks('meals', 'wMeals');
    drawPicks('breakfasts', 'wBreakfasts', 'breakfast');
    livePreview(preview);

    wireSave(async to => {
      const row = collect();
      if (!/^[a-z0-9_]+$/.test(row.id)) return 'The id can only use lower-case letters, numbers and underscores.';
      return { ...row, status: to };
    }, 'menu_catalog_weeks', 'id', isNew);
  }

  // ── Foods ─────────────────────────────────────────────────
  function bodyFoods() {
    bar(['all', 'store price', 'stand-in price', 'pantry'], 'Search name, shop name or allergen', 'Add a food', pickNewFood, () => {
      const q = query.trim().toLowerCase();
      const rows = data.foods.filter(f => {
        if (filter === 'store price' && f.price_source !== 'kroger') return false;
        if (filter === 'stand-in price' && f.price_source !== 'standin') return false;
        if (filter === 'pantry' && !f.pantry) return false;
        if (!q) return true;
        return `${f.short_name} ${f.name ?? ''} ${f.shop_name} ${f.allergens.join(' ')} ${f.avoid_groups.join(' ')}`.toLowerCase().includes(q);
      });
      $('mTable').innerHTML = sheetTable(
        [{ label: 'Food' }, { label: 'Contains' }, { label: 'Bought as' }, { label: 'Price', cls: 'num' }, { label: 'Per 100 g', cls: 'num' }, { label: 'In', cls: 'num' }],
        rows.map(f => {
          const uses = data.recipes.filter(r => r.components.some(c => c.food === f.food_id)).length;
          return `<tr data-id="${esc(f.food_id)}">
            <td class="nm">${esc(f.short_name)}<div class="tiny muted">${esc(f.name ?? 'not in the food database')}</div></td>
            <td><div class="tagline">${f.allergens.map(a => `<span class="tg">${esc(a.replace('_', ' '))}</span>`).join('')}</div></td>
            <td class="muted">${esc(f.pack_label)}${f.pantry ? ' · pantry' : ''}</td>
            <td class="num">$${f.pack_price.toFixed(2)}<div class="tiny muted">${f.price_source === 'kroger' ? 'store' : 'stand-in'}</div></td>
            <td class="num muted">${f.calories != null ? Math.round(f.calories / f.serving_grams * 100) + ' kcal' : ''}</td>
            <td class="num muted">${uses}</td></tr>`;
        }),
        'Nothing matches that search.');
      $('mCount').textContent = `${rows.length} of ${data.foods.length} foods · ${data.foods.filter(f => f.price_source === 'standin').length} on a stand-in price`;
      rowClicks(openFood);
    });
  }

  // A new Menu food starts from a row in the food database, which is where its nutrition lives.
  function pickNewFood() {
    openDrawer(`
      <button class="btn sm" id="dClose">← Back</button>
      <h2 style="margin-top:14px">Add a food to the Menu</h2>
      <p class="tiny muted">Find it in the food database first: that is where its nutrition comes from. Pick a plain,
        whole food as it is eaten (cooked rice, not dry).</p>
      ${field('Search the food database', input('fq', '', 'placeholder="e.g. cooked farro" autocomplete="off"'))}
      <div id="fHits"></div>`);
    $('dClose').onclick = closeDrawer;
    livePreview(null);
    let timer = null;
    $('fq').addEventListener('input', () => {
      clearTimeout(timer);
      const q = val('fq');
      if (q.length < 2) { $('fHits').innerHTML = ''; return; }
      timer = setTimeout(async () => {
        const hits = await foodSearch(q);
        $('fHits').innerHTML = hits.length ? hits.map((h, i) => {
          const have = data.foods.some(f => f.food_id === h.id);
          return `<div class="mn-pick"><span>${esc(h.name)}${h.brand ? ` <span class="muted tiny">${esc(h.brand)}</span>` : ''}</span>
            ${have ? '<span class="muted tiny" style="flex:0">already on the Menu</span>' : `<button class="btn sm" data-hit="${i}">Use</button>`}</div>`;
        }).join('') : '<p class="tiny muted">Nothing found.</p>';
        $('fHits').querySelectorAll('[data-hit]').forEach(b => b.onclick = () => {
          const h = hits[Number(b.dataset.hit)];
          openFood(null, { food_id: h.id, name: h.name });
        });
      }, 260);
    });
  }

  function openFood(id, fresh) {
    const isNew = !id;
    const f = isNew
      ? { food_id: fresh.food_id, name: fresh.name, short_name: fresh.name, allergens: [], avoid_groups: [], unit_grams: null, unit_one: null,
          unit_many: null, pack_label: '', pack_grams: '', pack_price: '', pack_yield: 1, price_source: 'standin', small_pack: null,
          buy_as_food: null, buy_as_ratio: null, pantry: false, keeps: false, shop_name: fresh.name, shop_class: 'fresh', shop_query: null, shop_brands: [] }
      : data.foods.find(x => x.food_id === id);
    if (!f) return;
    const users = data.recipes.filter(r => r.components.some(c => c.food === f.food_id));
    const groups = [...new Set(data.foods.flatMap(x => x.avoid_groups))].sort();
    const sp = f.small_pack ?? {};

    openDrawer(`
      <button class="btn sm" id="dClose">← Back</button>
      <h2 style="margin-top:14px">${esc(isNew ? `Add ${f.name}` : f.short_name)}</h2>
      <p class="tiny muted">${esc(f.name ?? 'Not in the food database')} · id: ${esc(f.food_id)}
        ${f.calories != null ? ` · ${Math.round(f.calories / f.serving_grams * 100)} kcal and ${Math.round(f.protein_g / f.serving_grams * 100)} g protein per 100 g, from the food database` : ''}</p>
      ${users.length ? `<div class="mn-note">Used by ${users.length} ${users.length === 1 ? 'recipe' : 'recipes'}: ${esc(users.slice(0, 8).map(r => r.name).join(', '))}${users.length > 8 ? '…' : ''}.
        A change here changes every one of them, including what they say they contain.</div>` : ''}

      ${field('Short name, as the plate lists it', input('fShort', f.short_name))}
      <div class="field"><label>Contains (tick one even if only some brands do)</label>${checks('fAllergens', ALLERGENS, f.allergens)}</div>
      ${field('Things people leave out, separated by commas', `${input('fGroups', f.avoid_groups.join(', '))}
        <p class="tiny muted" style="margin:5px 0 0">In use: ${esc(groups.join(', '))}</p>`)}

      <h3 style="font-size:14px;margin:18px 0 4px">Counted whole</h3>
      <p class="tiny muted" style="margin:0 0 8px">Only for foods that come as a whole thing, like an egg or a tortilla. Leave all three empty otherwise.</p>
      <div class="row">
        ${field('Grams in one', input('fUnitG', f.unit_grams, 'type="number" min="0" step="any"'), 'grow')}
        ${field('One', input('fUnit1', f.unit_one, 'placeholder="egg"'), 'grow')}
        ${field('Many', input('fUnitN', f.unit_many, 'placeholder="eggs"'), 'grow')}
      </div>

      <h3 style="font-size:14px;margin:18px 0 4px">How it is bought</h3>
      <div class="row">
        ${field('Pack, as the list says it', input('fPack', f.pack_label, 'placeholder="1 lb pack"'), 'grow')}
        ${field('Grams in the pack', input('fPackG', f.pack_grams, 'type="number" min="0" step="any"'), 'grow')}
      </div>
      <div class="row">
        ${field('Price $', input('fPrice', f.pack_price, 'type="number" min="0" step="0.01"'), 'grow')}
        ${field('Eaten grams per gram bought', input('fYield', f.pack_yield, 'type="number" min="0" step="any"'), 'grow')}
        ${field('Price from', `<select id="fSource" class="mn-sel"><option value="standin" ${f.price_source === 'standin' ? 'selected' : ''}>stand-in</option><option value="kroger" ${f.price_source === 'kroger' ? 'selected' : ''}>store</option></select>`, 'grow')}
      </div>
      <p class="tiny muted" style="margin:-6px 0 10px">Chicken loses weight when cooked (about 0.75); dry rice gains it (about 3).</p>
      <div class="row">
        ${field('Smaller pack (optional)', input('fSpLabel', sp.label, 'placeholder="8 oz pack"'), 'grow')}
        ${field('Grams', input('fSpG', sp.grams, 'type="number" min="0" step="any"'), 'grow')}
        ${field('Price $', input('fSpPrice', sp.price, 'type="number" min="0" step="0.01"'), 'grow')}
      </div>
      <div class="row">
        ${field('Bought as another food (optional)', `<select id="fBuyAs" class="mn-sel"><option value="">itself</option>${data.foods.filter(x => x.food_id !== f.food_id).map(x =>
          `<option value="${esc(x.food_id)}" ${x.food_id === f.buy_as_food ? 'selected' : ''}>${esc(x.short_name)}</option>`).join('')}</select>`, 'grow')}
        ${field('Its grams per gram of this', input('fBuyRatio', f.buy_as_ratio, 'type="number" min="0" step="any"'), 'grow')}
      </div>
      <div class="field"><div class="mn-checks">
        ${flag('fPantry', 'pantry item: on the list, left out of the price', f.pantry)}
        ${flag('fKeeps', 'keeps for months, so left-over is not waste', f.keeps)}
      </div></div>

      <h3 style="font-size:14px;margin:18px 0 4px">At the store</h3>
      <div class="row">
        ${field('Name on the shopping list', input('fShop', f.shop_name), 'grow')}
        ${field('Kind', `<select id="fClass" class="mn-sel"><option ${f.shop_class === 'fresh' ? 'selected' : ''}>fresh</option><option ${f.shop_class === 'packaged' ? 'selected' : ''}>packaged</option></select>`, 'grow')}
      </div>
      ${field('What to search the store for (needed for packaged)', input('fQuery', f.shop_query))}
      ${field('Brands to prefer, separated by commas', input('fBrands', f.shop_brands.join(', ')))}

      <div class="problems" id="mProblems"></div>
      <div class="actions"><button class="btn primary" data-to="save">${isNew ? 'Add to the Menu' : 'Save'}</button>
        <span class="tiny muted" id="mMsg"></span></div>
    `);
    $('dClose').onclick = closeDrawer;
    livePreview(null);

    wireSave(async () => {
      const spLabel = val('fSpLabel');
      const yieldBy = Number(val('fYield')) || 1;
      return {
        food_id: f.food_id, short_name: val('fShort'), allergens: checked('fAllergens'), avoid_groups: listOf($('fGroups').value),
        unit_grams: numOrNull(val('fUnitG')), unit_one: val('fUnit1') || null, unit_many: val('fUnitN') || null,
        pack_label: val('fPack'), pack_grams: numOrNull(val('fPackG')), pack_price: numOrNull(val('fPrice')), pack_yield: yieldBy,
        price_source: $('fSource').value,
        small_pack: spLabel ? { label: spLabel, grams: Number(val('fSpG')), price: Number(val('fSpPrice')), yield: f.small_pack?.yield ?? yieldBy } : null,
        buy_as_food: $('fBuyAs').value || null, buy_as_ratio: $('fBuyAs').value ? numOrNull(val('fBuyRatio')) : null,
        pantry: $('fPantry').checked, keeps: $('fKeeps').checked,
        shop_name: val('fShop'), shop_class: $('fClass').value, shop_query: val('fQuery') || null, shop_brands: listOf($('fBrands').value),
      };
    }, 'menu_foods', 'food_id', isNew);
  }

  return { view, load };
}
