// ✅ FIX: Scroll to top on load
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// 🔑 GROQ API SETTINGS - ВСТАВЬТЕ СВОЙ API КЛЮЧ
const GROQ_API_KEY = 'gsk_YOUR_API_KEY_HERE'; // Замените на ваш ключ Groq
const AI_MODEL = 'llama-3.1-8b-instant';

const i18n = {
  ru: {
    page_title: "Studio Key — Разработка сайтов под ключ",
    nav_services: "Услуги", nav_portfolio: "Портфолио", nav_calc: "Калькулятор", nav_prices: "Цены", nav_contacts: "Контакты",
    slide1_kicker: "🚀 Профессиональная разработка", slide1_title: "Сайты, которые приносят прибыль", slide1_sub: "Современные, быстрые и адаптивные решения для бизнеса. Запуск за 10-21 день.", slide1_btn1: "Рассчитать стоимость", slide1_btn2: "Наши работы",
    slide2_kicker: "💼 80+ успешных проектов", slide2_title: "От лендинга до интернет-магазина", slide2_sub: "Любая сложность: от простых страниц до сложных CRM-систем и маркетплейсов.", slide2_btn1: "Калькулятор", slide2_btn2: "WhatsApp",
    slide3_kicker: "👨‍💻 Команда профессионалов", slide3_title: "Поддержка 24/7 и гарантия", slide3_sub: "Не бросаем после запуска. Техническая поддержка, обучение, доработки. Гарантия 6 месяцев.", slide3_btn1: "Получить консультацию", slide3_btn2: "Узнать больше",
    video_btn: "Смотреть видео о нас", video_title: "Как мы создаём сайты", video_desc: "Посмотрите 2-минутное видео о нашем подходе.",
    vf1: "✅ Прозрачный процесс", vf2: "✅ Еженедельные отчёты", vf3: "✅ Индивидуальный дизайн", vf4: "✅ Гарантия 6 месяцев",
    calc_title: "Калькулятор стоимости", calc_desc: "Рассчитайте предварительную стоимость за 1 минуту", calc_type: "Тип сайта:",
    type_landing: "Лендинг", type_corp: "Корпоративный", type_shop: "Интернет-магазин",
    calc_extras: "Дополнительно:", extra_design: "Уникальный дизайн", extra_seo: "SEO-оптимизация", extra_cms: "CMS управление", extra_app: "Мобильное приложение",
    calc_total: "Примерная стоимость:", calc_btn: "Заказать со скидкой 10%",
    adv_title: "Почему выбирают нас", adv_desc: "Берём на себя весь цикл создания сайта",
    adv1_title: "Быстро", adv1_desc: "Запуск от 10 дней без потери качества", adv2_title: "Качественно", adv2_desc: "Продуманный UX, чистый код",
    adv3_title: "Адаптивно", adv3_desc: "Идеально работает на телефонах и ПК", adv4_title: "SEO-готово", adv4_desc: "Техническая оптимизация с нуля",
    services_title: "Услуги и тарифы", services_desc: "Выберите подходящий формат", badge_popular: "Популярно",
    svc_landing: "Лендинг", svc_landing_desc: "Одностраничный сайт для быстрого запуска.",
    svc_corp: "Корпоративный сайт", svc_corp_desc: "Многостраничный сайт с блогом и CRM.",
    svc_shop: "Интернет-магазин", svc_shop_desc: "Полноценный магазин с корзиной и оплатой.",
    btn_order_landing: "Заказать лендинг", btn_discuss: "Обсудить проект", btn_launch_shop: "Запустить магазин",
    sl1: "✓ 1-2 экрана + формы", sl2: "✓ Адаптивная вёрстка", sl3: "✓ Базовое SEO", sl4: "✓ Хостинг + домен .RU",
    sc1: "✓ До 10 страниц", sc2: "✓ CMS управление", sc3: "✓ Интеграции (CRM, карты)", sc4: "✓ Многоязычность",
    ss1: "✓ Каталог и карточки", ss2: "✓ Корзина + оплата", ss3: "✓ Личный кабинет", ss4: "✓ Аналитика продаж",
    portfolio_title: "Портфолио", portfolio_desc: "Недавние проекты",
    pt1: "FinTech Платёжная система", pt2: "SaaS Управление проектами", pt3: "DevOps Платформа", pt4: "Студия Дизайна", pt5: "NoCode Конструктор", pt6: "Магазин Электроники",
    p1: "Корпоративный сайт с API.", p2: "Лендинг для B2B продукта.", p3: "Сайт-презентация.", p4: "Минималистичное портфолио.", p5: "Образовательная платформа.", p6: "E-commerce.",
    process_title: "Этапы работы", process_desc: "Прозрачный процесс от заявки до запуска",
    step1: "Заявка и бриф", step1_desc: "Обсуждаем цели.", step2: "Дизайн и прототип", step2_desc: "Создаём концепцию.", step3: "Разработка", step3_desc: "Код и интеграции.", step4: "Тест и запуск", step4_desc: "Проверка и обучение.",
    contact_title: "Расскажите о проекте", contact_desc: "Ответим в течение рабочего дня.", work_hours: "Пн-Пт: 9:00 - 18:00", messengers: "Мессенджеры:",
    f_name: "Имя *", f_phone: "Телефон *", f_email: "Email *", f_msg: "Сообщение", f_sub: "Подписаться на новости", f_submit: "Отправить заявку", f_note: "🔒 Данные защищены.",
    ph_name: "Как к вам обращаться", ph_phone: "+7 ( ) _ --", ph_email: "you@example.com", ph_msg: "Кратко опишите задачу",
    footer_about: "Разработка сайтов с 2019 года.", f_links: "Ссылки", f_legal: "Документы", privacy: "Политика", terms: "Условия", f_contacts: "Контакты", rights: "Все права защищены.",
    modal_cb_title: "Заказать звонок", modal_cb_desc: "Перезвоним за 5 минут", ph_phone_modal: "+7 ( ) _ --", modal_cb_sub: "Подписаться", modal_cb_btn: "Жду звонка",
    chat_title: "💬 AI Ассистент", chat_welcome: "Привет! Я AI-помощник Studio Key. Спросите меня о ценах, сроках или услугах. 👇", chat_ph: "Введите вопрос...",
    cookie_text: "💬 Мы используем cookies.", cookie_accept: "Принять",
    val_required: "Обязательное поле", val_email: "Введите email", val_phone: "Введите телефон",
    chat_typing: "AI печатает...",
    ai_prices: "💰 Наши цены:\n• Лендинг — 15 000₽\n• Корпоративный — 40 000₽\n• Интернет-магазин — 80 000₽",
    ai_timeline: "⏱ Сроки разработки:\n• Лендинг — 10-14 дней\n• Корпоративный — 14-21 день\n• Магазин — 21-30 дней",
    ai_support: "🛠 Мы предоставляем:\n• Гарантию 6 месяцев\n• Техподдержку 24/7\n• Бесплатные правки",
    ai_default: "Спасибо за вопрос! Оставьте заявку в форме ниже, и мы подробно ответим на все вопросы. Или напишите нам в WhatsApp/Telegram!"
  },
  en: {
    page_title: "Studio Key — Web Development",
    nav_services: "Services", nav_portfolio: "Portfolio", nav_calc: "Calculator", nav_prices: "Pricing", nav_contacts: "Contacts",
    slide1_kicker: "🚀 Professional Dev", slide1_title: "Sites that drive profit", slide1_sub: "Modern, fast, responsive solutions. Launch in 10-21 days.", slide1_btn1: "Calculate Cost", slide1_btn2: "Our Works",
    slide2_kicker: "💼 80+ projects", slide2_title: "From landing to e-commerce", slide2_sub: "Any complexity: from simple pages to CRM systems.", slide2_btn1: "Calculator", slide2_btn2: "WhatsApp",
    slide3_kicker: "👨‍💻 Pro Team", slide3_title: "24/7 Support", slide3_sub: "We don't abandon you. Tech support & updates. 6-month warranty.", slide3_btn1: "Get Consultation", slide3_btn2: "Learn More",
    video_btn: "Watch Video", video_title: "How We Build", video_desc: "2-min video about our approach.",
    vf1: "✅ Transparent process", vf2: "✅ Weekly reports", vf3: "✅ Custom design", vf4: "✅ 6-month warranty",
    calc_title: "Cost Calculator", calc_desc: "Estimate price in 1 min", calc_type: "Site Type:",
    type_landing: "Landing", type_corp: "Corporate", type_shop: "E-commerce",
    calc_extras: "Extras:", extra_design: "Unique Design", extra_seo: "SEO Optimization", extra_cms: "CMS Management", extra_app: "Mobile App",
    calc_total: "Est. Price:", calc_btn: "Order with 10% OFF",
    adv_title: "Why Choose Us", adv_desc: "Full cycle development",
    adv1_title: "Fast", adv1_desc: "Launch from 10 days", adv2_title: "Quality", adv2_desc: "Clean code, reliable",
    adv3_title: "Responsive", adv3_desc: "Works on all devices", adv4_title: "SEO Ready", adv4_desc: "Technical SEO built-in",
    services_title: "Services & Pricing", services_desc: "Choose your plan", badge_popular: "Popular",
    svc_landing: "Landing", svc_landing_desc: "One-page site for ads.",
    svc_corp: "Corporate Site", svc_corp_desc: "Multi-page with blog & CRM.",
    svc_shop: "E-commerce", svc_shop_desc: "Full online store.",
    btn_order_landing: "Order Landing", btn_discuss: "Discuss Project", btn_launch_shop: "Launch Store",
    sl1: "✓ 1-2 screens", sl2: "✓ Responsive", sl3: "✓ Basic SEO", sl4: "✓ Hosting",
    sc1: "✓ Up to 10 pages", sc2: "✓ CMS", sc3: "✓ Integrations", sc4: "✓ Multi-lang",
    ss1: "✓ Catalog", ss2: "✓ Cart & Pay", ss3: "✓ Account", ss4: "✓ Analytics",
    portfolio_title: "Portfolio", portfolio_desc: "Recent projects",
    pt1: "FinTech System", pt2: "SaaS Tool", pt3: "DevOps Platform", pt4: "Design Studio", pt5: "NoCode Builder", pt6: "Electronics Store",
    p1: "Corporate site.", p2: "B2B landing.", p3: "DevOps site.", p4: "Minimalist portfolio.", p5: "Education platform.", p6: "E-commerce.",
    process_title: "Workflow", process_desc: "From request to launch",
    step1: "Brief", step1_desc: "Discuss goals.", step2: "Design", step2_desc: "Create concept.", step3: "Dev", step3_desc: "Code & Integrate.", step4: "Launch", step4_desc: "Test & Deploy.",
    contact_title: "Tell us about project", contact_desc: "Reply within 1 business day.", work_hours: "Mon-Fri: 9AM - 6PM", messengers: "Messengers:",
    f_name: "Name *", f_phone: "Phone *", f_email: "Email *", f_msg: "Message", f_sub: "Subscribe", f_submit: "Send Request", f_note: "🔒 Data protected.",
    ph_name: "Your name", ph_phone: "+1 ( ) _ -", ph_email: "you@example.com", ph_msg: "Describe task",
    footer_about: "Web dev since 2019.", f_links: "Links", f_legal: "Legal", privacy: "Privacy", terms: "Terms", f_contacts: "Contacts", rights: "All rights reserved.",
    modal_cb_title: "Request Callback", modal_cb_desc: "Call in 5 min", ph_phone_modal: "+1 ( ) _ -", modal_cb_sub: "Subscribe", modal_cb_btn: "Call Me",
    chat_title: "💬 AI Assistant", chat_welcome: "Hi! I'm Studio Key AI. Ask about prices, terms, or services. 👇", chat_ph: "Type a question...",
    cookie_text: "We use cookies.", cookie_accept: "Accept",
    val_required: "Required field", val_email: "Enter valid email", val_phone: "Enter valid phone",
    chat_typing: "AI is typing...",
    ai_prices: "💰 Our prices:\n• Landing — $170\n• Corporate — $460\n• E-commerce — $920",
    ai_timeline: "⏱ Development time:\n• Landing — 10-14 days\n• Corporate — 14-21 days\n• Store — 21-30 days",
    ai_support: "🛠 We provide:\n• 6-month warranty\n• 24/7 tech support\n• Free revisions",
    ai_default: "Thanks for your question! Leave a request in the form below and we'll answer all your questions. Or write to us on WhatsApp/Telegram!"
  }
};

let currentLang = localStorage.getItem('sk_lang') || 'ru';
let USD_RATE = 1 / 87;

// === 1. Уведомления ===
function showNotification(message, type = 'success') {
  const existing = document.querySelector('.custom-notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = 'custom-notification';
  const borderColor = type === 'success' ? '#10b981' : '#ef4444';
  const icon = type === 'success' ? '✅' : '❌';
  
  notification.style.cssText = `position: fixed; top: 20px; right: 20px; background: #151e32; border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid ${borderColor}; color: #f8fafc; padding: 16px 24px; border-radius: 10px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); z-index: 10001; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center; gap: 12px; max-width: 400px; animation: slideInNotif 0.4s ease forwards; font-family: 'Inter', sans-serif;`;
  notification.innerHTML = `<span style="font-size:1.2rem">${icon}</span><span>${message}</span>`;
  
  document.body.appendChild(notification);
  
  if (!document.getElementById('notif-anim-style')) {
    const style = document.createElement('style');
    style.id = 'notif-anim-style';
    style.textContent = `@keyframes slideInNotif { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } } @keyframes slideOutNotif { from { transform: translateX(0); opacity: 1; } to { transform: translateX(120%); opacity: 0; } }`;
    document.head.appendChild(style);
  }
  
  setTimeout(() => {
    notification.style.animation = 'slideOutNotif 0.4s ease forwards';
    setTimeout(() => notification.remove(), 400);
  }, 3500);
}

// === 2. Курс валют ===
async function fetchCurrencyRate() {
  const CACHE_KEY = 'sk_usd_rate', CACHE_TIME = 'sk_usd_rate_time', CACHE_DURATION = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const cached = localStorage.getItem(CACHE_KEY), cachedAt = localStorage.getItem(CACHE_TIME);
  
  if (cached && cachedAt && (now - cachedAt < CACHE_DURATION)) {
    USD_RATE = parseFloat(cached);
    updateCalcPricesUI();
    return;
  }
  
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/RUB');
    const data = await res.json();
    if (data?.rates?.USD) {
      USD_RATE = data.rates.USD;
      localStorage.setItem(CACHE_KEY, USD_RATE);
      localStorage.setItem(CACHE_TIME, now);
      updateCalcPricesUI();
    }
  } catch (e) { console.warn('Currency API error:', e); }
}

// === 3. Смена языка ===
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sk_lang', lang);
  document.documentElement.lang = lang;
  
  // FIX: Очистка ошибок валидации при смене языка
  document.querySelectorAll('.field-error').forEach(error => error.remove());
  document.querySelectorAll('input, textarea').forEach(field => {
    field.style.borderColor = '';
  });
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });
  
  const btn = document.getElementById('langSwitch');
  if (btn) {
    const spans = btn.querySelectorAll('.lang-part');
    if (spans.length === 2) {
      spans[0].className = lang === 'ru' ? 'lang-part lang-active' : 'lang-part lang-inactive';
      spans[1].className = lang === 'en' ? 'lang-part lang-active' : 'lang-part lang-inactive';
    }
  }
  
  const welcomeMsg = document.querySelector('#chatMessages .msg.bot');
  if (welcomeMsg) welcomeMsg.textContent = i18n[lang].chat_welcome;
  
  updateCalcPricesUI();
}

document.getElementById('langSwitch')?.addEventListener('click', () => applyLanguage(currentLang === 'ru' ? 'en' : 'ru'));

// === 4. Скролл и хедер ===
let ticking = false;
const header = document.querySelector('.header');
const btt = document.getElementById('backToTop');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle('header--scrolled', y > scrollThreshold);
      btt.classList.toggle('visible', y > 300);
      ticking = false;
    });
    ticking = true;
  }
});

btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// === 5. Валидация форм ===
function setupValidation() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.setAttribute('novalidate', 'true');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => { if (input.value.trim() !== '') clearError(input); });
    });
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;
      const msgs = { required: i18n[currentLang].val_required, email: i18n[currentLang].val_email, phone: i18n[currentLang].val_phone };
      
      inputs.forEach(input => {
        if (!input.value || !input.value.trim()) { showError(input, msgs.required, 'required'); isValid = false; }
        else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) { showError(input, msgs.email, 'email'); isValid = false; }
        else if (input.type === 'tel' && !/^[+]?[\d\s-()]{7,18}$/.test(input.value)) { showError(input, msgs.phone, 'phone'); isValid = false; }
        else clearError(input);
      });
      
      if (isValid) {
        showNotification(currentLang === 'ru' ? '✅ Заявка успешно отправлена!' : '✅ Request sent successfully!', 'success');
        this.reset();
        const modal = form.closest('.modal');
        if (modal) closeModal(modal.id);
      } else {
        showNotification(currentLang === 'ru' ? '❌ Заполните все обязательные поля' : '❌ Please fill in all required fields', 'error');
      }
    });
  });
}

function validateField(field) {
  const msgs = { required: i18n[currentLang].val_required, email: i18n[currentLang].val_email, phone: i18n[currentLang].val_phone };
  if (!field.value || !field.value.trim()) { showError(field, msgs.required, 'required'); return false; }
  if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) { showError(field, msgs.email, 'email'); return false; }
  if (field.type === 'tel' && !/^[+]?[\d\s-()]{7,18}$/.test(field.value)) { showError(field, msgs.phone, 'phone'); return false; }
  clearError(field);
  return true;
}

function showError(field, message, type = 'required') {
  clearError(field);
  const error = document.createElement('div');
  error.className = 'field-error';
  error.dataset.errorType = type;
  error.textContent = message;
  error.style.cssText = 'color: #ef4444; font-size: 0.85rem; margin-top: 5px; font-weight: 500;';
  field.style.borderColor = '#ef4444';
  field.parentNode.appendChild(error);
}

function clearError(field) {
  field.style.borderColor = '';
  const error = field.parentNode.querySelector('.field-error');
  if (error) error.remove();
}

// === 6. Слайдер ===
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0, interval;

function goSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  current = (i + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function next() { goSlide(current + 1); }
function prev() { goSlide(current - 1); }
function startSlider() { interval = setInterval(next, 5000); }
function stopSlider() { clearInterval(interval); }

document.querySelector('.slider-next')?.addEventListener('click', () => { stopSlider(); next(); startSlider(); });
document.querySelector('.slider-prev')?.addEventListener('click', () => { stopSlider(); prev(); startSlider(); });
dots.forEach((d, i) => d.addEventListener('click', () => { stopSlider(); goSlide(i); startSlider(); }));

if (slides.length) startSlider();

// === 7. Калькулятор ===
const baseRub = { landing: 15000, corporate: 40000, shop: 80000 };

function formatCurrency(rub) {
  return currentLang === 'ru' ? `${rub.toLocaleString('ru-RU')} ₽` : `$${Math.round(rub * USD_RATE).toLocaleString('en-US')}`;
}

function updateCalcPricesUI() {
  const baseDisplay = currentLang === 'ru'
    ? { landing: '15 000₽', corporate: '40 000₽', shop: '80 000₽' }
    : { landing: `$${Math.round(15000 * USD_RATE)}`, corporate: `$${Math.round(40000 * USD_RATE)}`, shop: `$${Math.round(80000 * USD_RATE)}` };
  
  Object.entries(baseDisplay).forEach(([type, val]) => {
    const el = document.querySelector(`input[value="${type}"]`)?.closest('.radio-card')?.querySelector('.radio-price');
    if (el) el.textContent = val;
  });
  
  const extrasDisplay = currentLang === 'ru'
    ? ['+10 000₽', '+5 000₽', '+7 000₽', '+8 000₽']
    : [`+$${Math.round(10000 * USD_RATE)}`, `+$${Math.round(5000 * USD_RATE)}`, `+$${Math.round(7000 * USD_RATE)}`, `+$${Math.round(8000 * USD_RATE)}`];
  
  document.querySelectorAll('input[name="extras"]').forEach((cb, i) => {
    const el = cb.closest('.checkbox-item')?.querySelector('.checkbox-price');
    if (el) el.textContent = extrasDisplay[i];
  });
  
  document.querySelectorAll('.service-price[data-base-rub]').forEach(el => {
    el.textContent = formatCurrency(parseInt(el.dataset.baseRub));
  });
  
  const activeBadge = document.querySelector('.service-card.active .service-badge');
  if (activeBadge) activeBadge.textContent = i18n[currentLang].badge_popular;
  
  calc();
}

function calc() {
  let sum = 0;
  const sel = document.querySelector('input[name="siteType"]:checked');
  if (sel) sum += baseRub[sel.value] || 0;
  document.querySelectorAll('input[name="extras"]:checked').forEach(c => sum += +c.dataset.price);
  document.getElementById('totalPrice').textContent = formatCurrency(sum);
}

document.querySelectorAll('input[name="siteType"], input[name="extras"]').forEach(el => el.addEventListener('change', calc));

// Переключение карточек услуг
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.service-card').forEach(c => {
      c.classList.remove('active');
      const badge = c.querySelector('.service-badge'); if (badge) badge.remove();
      c.querySelector('.btn').classList.replace('btn-primary', 'btn-ghost');
    });
    card.classList.add('active');
    const badge = document.createElement('div');
    badge.className = 'service-badge';
    badge.textContent = i18n[currentLang].badge_popular;
    card.prepend(badge);
    card.querySelector('.btn').classList.replace('btn-ghost', 'btn-primary');
  });
});

// === 8. Модальные окна ===
function openModal(id) { document.getElementById(id)?.classList.add('active'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('active'); }

document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m) closeModal(m.id); }));
document.querySelectorAll('[data-modal-close]').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.modalClose)));

// Модальные окна услуг
document.querySelectorAll('[data-service-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.dataset.serviceModal;
    const titles = {
      landing: currentLang === 'ru' ? 'Заказать лендинг' : 'Order Landing',
      corporate: currentLang === 'ru' ? 'Заказать корпоративный сайт' : 'Order Corporate Site',
      shop: currentLang === 'ru' ? 'Заказать интернет-магазин' : 'Order Online Store'
    };
    const descs = {
      landing: currentLang === 'ru' ? 'Оставьте заявку, обсудим детали запуска.' : 'Leave a request, we\'ll discuss launch details.',
      corporate: currentLang === 'ru' ? 'Расскажите о проекте, подготовим предложение.' : 'Tell us about your project.',
      shop: currentLang === 'ru' ? 'Заполните форму, обсудим функционал магазина.' : 'Fill the form, we\'ll discuss functionality.'
    };
    
    document.getElementById('serviceModalTitle').textContent = titles[service] || btn.textContent;
    document.getElementById('serviceModalDesc').textContent = descs[service] || '';
    document.getElementById('selectedService').value = service;
    openModal('serviceModal');
  });
});

// === 9. Видео ===
document.getElementById('openVideoBtn')?.addEventListener('click', openVideoModal);
const RUTUBE_VIDEO_ID = 'f4213876335ab87a3dfdb1f6c0dbda5f';

function openVideoModal() {
  openModal('videoModal');
  document.getElementById('videoFrame').src = `https://rutube.ru/play/embed/${RUTUBE_VIDEO_ID}?autoplay=1`;
}

function closeVideoModal() {
  closeModal('videoModal');
  document.getElementById('videoFrame').src = '';
}

// ==========================================
// 🤖 AI CHAT - GROQ API для GitHub Pages
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const chatWin = document.querySelector('.chat-window');
  const chatMsg = document.getElementById('chatMessages');
  const chatIn = document.getElementById('chatInput');
  const chatToggle = document.getElementById('chatToggle');
  const chatCloseBtn = document.querySelector('.chat-close');
  const chatSendBtn = document.querySelector('.chat-send');

  // AI ответы для GitHub Pages (без сервера)
  function getAIResponse(message) {
    const msg = message.toLowerCase();
    const responses = i18n[currentLang];
    
    if (msg.includes('цена') || msg.includes('стоимость') || msg.includes('price') || msg.includes('cost')) {
      return responses.ai_prices;
    } else if (msg.includes('срок') || msg.includes('время') || msg.includes('timeline') || msg.includes('days')) {
      return responses.ai_timeline;
    } else if (msg.includes('поддержк') || msg.includes('гаранти') || msg.includes('support') || msg.includes('warranty')) {
      return responses.ai_support;
    } else if (msg.includes('привет') || msg.includes('здравств') || msg.includes('hi') || msg.includes('hello')) {
      return responses.chat_welcome;
    } else {
      return responses.ai_default;
    }
  }

  // Прямой запрос к Groq API
  async function queryGroqAPI(userMessage) {
    if (!GROQ_API_KEY || GROQ_API_KEY === 'gsk_YOUR_API_KEY_HERE') {
      throw new Error('API key not set');
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          { 
            role: "system", 
            content: currentLang === 'ru' 
              ? "Ты помощник веб-студии Studio Key. Отвечай кратко и по делу на русском языке. Наши цены: Лендинг 15 000₽, Корпоративный сайт 40 000₽, Интернет-магазин 80 000₽. Сроки: 10-30 дней. Предоставляем гарантию 6 месяцев и техподдержку 24/7." 
              : "You are Studio Key web development assistant. Answer briefly in English. Our prices: Landing $170, Corporate $460, E-commerce $920. Timeline: 10-30 days. We provide 6-month warranty and 24/7 support."
          },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  window.toggleChat = () => { if (chatWin) chatWin.classList.toggle('open'); };
  if (chatToggle) chatToggle.addEventListener('click', toggleChat);
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', toggleChat);

  window.sendChat = async () => {
    const rawTxt = chatIn.value.trim();
    if (!rawTxt) return;

    const userDiv = document.createElement('div');
    userDiv.className = 'msg user';
    userDiv.textContent = rawTxt;
    chatMsg.appendChild(userDiv);
    chatIn.value = '';
    chatMsg.scrollTop = chatMsg.scrollHeight;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'msg bot';
    typingDiv.style.fontStyle = 'italic';
    typingDiv.style.opacity = '0.7';
    typingDiv.textContent = i18n[currentLang].chat_typing;
    chatMsg.appendChild(typingDiv);
    chatMsg.scrollTop = chatMsg.scrollHeight;

    try {
      let answer;
      // Если API ключ не установлен, используем mock-ответы
      if (!GROQ_API_KEY || GROQ_API_KEY === 'gsk_YOUR_API_KEY_HERE') {
        await new Promise(resolve => setTimeout(resolve, 800));
        answer = getAIResponse(rawTxt);
      } else {
        answer = await queryGroqAPI(rawTxt);
      }
      
      chatMsg.removeChild(typingDiv);
      
      const botDiv = document.createElement('div');
      botDiv.className = 'msg bot';
      botDiv.textContent = answer;
      botDiv.style.whiteSpace = 'pre-line';
      chatMsg.appendChild(botDiv);
      chatMsg.scrollTop = chatMsg.scrollHeight;
    } catch (error) {
      chatMsg.removeChild(typingDiv);
      
      const errorDiv = document.createElement('div');
      errorDiv.className = 'msg bot';
      errorDiv.style.color = '#ef4444';
      errorDiv.textContent = currentLang === 'ru' 
        ? `❌ Ошибка: ${error.message}. Проверьте API ключ.` 
        : `❌ Error: ${error.message}. Check API key.`;
      chatMsg.appendChild(errorDiv);
      chatMsg.scrollTop = chatMsg.scrollHeight;
      console.error('AI Chat Error:', error);
    }
  };

  if (chatSendBtn) chatSendBtn.addEventListener('click', window.sendChat);
  if (chatIn) chatIn.addEventListener('keypress', e => { if (e.key === 'Enter') window.sendChat(); });

  // === Инициализация ===
  applyLanguage(currentLang);
  setupValidation();
  calc();
  fetchCurrencyRate();

  if (!localStorage.getItem('cookies')) {
    setTimeout(() => document.getElementById('cookieBanner')?.classList.add('visible'), 2000);
  }
  document.getElementById('acceptCookiesBtn')?.addEventListener('click', () => {
    localStorage.setItem('cookies', '1');
    document.getElementById('cookieBanner')?.classList.remove('visible');
  });

  document.querySelector('.burger')?.addEventListener('click', () => {
    document.querySelector('.nav')?.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => document.querySelector('.nav')?.classList.remove('active'));
  });

  const obs = new IntersectionObserver(e => {
    e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-animate]').forEach(el => obs.observe(el));
});