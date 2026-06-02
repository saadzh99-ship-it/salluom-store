// ===== LANGUAGE TOGGLE =====
let currentLang = 'ar';

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLang();
}

function applyLang() {
  const html = document.documentElement;
  const btn  = document.querySelector('.lang-btn');

  if (currentLang === 'en') {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    html.setAttribute('data-lang', 'en');
    btn.textContent = '🌐 العربية';
  } else {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    html.setAttribute('data-lang', 'ar');
    btn.textContent = '🌐 English';
  }

  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = currentLang === 'ar' ? el.dataset.ar : el.dataset.en;
  });

  // Update modal placeholders
  document.getElementById('playerId').placeholder =
    currentLang === 'ar' ? 'أدخل معرفك في اللعبة' : 'Enter your in-game ID';
  document.getElementById('emailIn').placeholder =
    currentLang === 'ar' ? 'email@example.com' : 'email@example.com';
}

// Init on load
document.addEventListener('DOMContentLoaded', () => applyLang());

// ===== MODAL =====
function openModal(title, amount, price) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalAmount').textContent = amount + ' Blockspin Cash';
  document.getElementById('modalPrice').textContent  = '$' + price;
  document.getElementById('playerId').value = '';
  document.getElementById('emailIn').value  = '';
  document.getElementById('modalBg').classList.add('open');
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalBg')) closeModal();
}

// ===== APPLE PAY CONFIRM =====
function confirmPay() {
  const pid = document.getElementById('playerId').value.trim();
  const em  = document.getElementById('emailIn').value.trim();

  const warnPid   = currentLang === 'ar' ? '⚠️ الرجاء إدخال معرف اللاعب'        : '⚠️ Please enter your Player ID';
  const warnEmail = currentLang === 'ar' ? '⚠️ الرجاء إدخال البريد الإلكتروني'  : '⚠️ Please enter your email';

  if (!pid) { alert(warnPid);   return; }
  if (!em)  { alert(warnEmail); return; }

  const price = document.getElementById('modalPrice').textContent;
  const title = document.getElementById('modalTitle').textContent;

  const msg = currentLang === 'ar'
    ? `✅ تم استلام طلبك!\n\n📦 الباقة: ${title}\n💰 السعر: ${price}\n🎮 معرف اللاعب: ${pid}\n📧 الإيصال يُرسل إلى: ${em}\n\n⚡ سيصلك الـ Cash خلال 60 ثانية!`
    : `✅ Order Received!\n\n📦 Pack: ${title}\n💰 Price: ${price}\n🎮 Player ID: ${pid}\n📧 Receipt sent to: ${em}\n\n⚡ Your Cash arrives within 60 seconds!`;

  alert(msg);
  closeModal();
}

// ===== FAQ =====
function toggleFaq(el) {
  el.closest('.faq-item').classList.toggle('open');
}
