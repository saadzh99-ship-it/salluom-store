// ===== MODAL =====
function openModal(title, amount, price) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalAmount').textContent = amount + ' Blockspin Cash';
  document.getElementById('modalPrice').textContent = '$' + price;
  document.getElementById('playerId').value = '';
  document.getElementById('emailIn').value = '';
  document.getElementById('modalBg').classList.add('open');
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalBg')) closeModal();
}

// ===== APPLE PAY =====
function confirmPay() {
  const pid = document.getElementById('playerId').value.trim();
  const em  = document.getElementById('emailIn').value.trim();

  if (!pid) { alert('⚠️ الرجاء إدخال معرف اللاعب'); return; }
  if (!em)  { alert('⚠️ الرجاء إدخال البريد الإلكتروني'); return; }

  const price = document.getElementById('modalPrice').textContent;
  const title = document.getElementById('modalTitle').textContent;

  // -------------------------------------------------------
  // ربط Stripe هنا لاحقاً:
  // const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
  // stripe.paymentRequest({ ... }) ...
  // -------------------------------------------------------

  alert(
    '✅ تم استلام طلبك!\n\n' +
    '📦 الباقة: ' + title + '\n' +
    '💰 السعر: ' + price + '\n' +
    '🎮 معرف اللاعب: ' + pid + '\n' +
    '📧 الإيصال يُرسل إلى: ' + em + '\n\n' +
    '⚡ سيصلك الـ Cash خلال 60 ثانية!'
  );

  closeModal();
}

// ===== FAQ TOGGLE =====
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  item.classList.toggle('open');
}
