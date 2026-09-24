/* ==========================================================================
   MAIN JS — VISUAL IDENTITY STUDIO
   ========================================================================== */

async function handleFormSubmit(event) {
  const form = document.getElementById('proposal-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnArrow = document.getElementById('btn-arrow');
  const statusMsg = document.getElementById('form-status-message');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  if (!name || !email || !message) return;

  // When running from a local file, allow native form POST so browser bypasses CORS blocks
  if (window.location.protocol === 'file:') {
    if (btnText) btnText.textContent = 'Sending Request...';
    return true;
  }

  event.preventDefault();

  // Set loading state
  if (submitBtn) submitBtn.disabled = true;
  if (btnText) btnText.textContent = 'Sending Request...';
  if (btnArrow) btnArrow.style.display = 'none';
  if (statusMsg) {
    statusMsg.style.display = 'none';
    statusMsg.innerHTML = '';
  }

  try {
    const response = await fetch('https://formspree.io/abhishekpawar.designs@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: `⚡ Portfolio Contact Request from ${name}`
      })
    });

    const data = await response.json();

    if (response.ok || data.ok) {
      if (statusMsg) {
        statusMsg.style.display = 'block';
        statusMsg.style.background = 'rgba(213, 247, 76, 0.12)';
        statusMsg.style.border = '1px solid rgba(213, 247, 76, 0.35)';
        statusMsg.style.color = '#ffffff';
        statusMsg.innerHTML = `
          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <span style="color: #d5f74c; font-weight: 800; font-size: 1.2rem; line-height: 1;">✓</span>
            <div>
              <strong style="color: #d5f74c;">Request Sent Successfully!</strong>
              <div style="margin-top: 4px; color: #cbd5e1; font-size: 0.90rem;">Thank you, ${name}. Your message has been delivered directly to Abhishek's inbox at <span style="color: #ffffff; font-weight: 600;">abhishekpawar.designs@gmail.com</span>.</div>
            </div>
          </div>
        `;
      }
      form.reset();
      if (btnText) btnText.textContent = 'Sent Successfully ✓';
      setTimeout(() => {
        if (btnText) btnText.textContent = 'Send Request';
        if (btnArrow) btnArrow.style.display = 'inline';
        if (submitBtn) submitBtn.disabled = false;
      }, 5000);
    } else {
      throw new Error((data.errors && data.errors[0]?.message) || 'Submission failed');
    }
  } catch (error) {
    console.error('Form submission fallback:', error);
    // Auto-fallback: If fetch fails (CORS or network), submit natively through standard POST
    form.submit();
  }
}

function loadMoreProjects() {
  alert('All featured projects are currently displayed.');
}

function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
}

document.addEventListener('DOMContentLoaded', initTheme);
