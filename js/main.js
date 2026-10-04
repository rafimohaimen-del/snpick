/**
 * snpick Main Global Scripts
 * Controls mobile drawer, newsletter subscription flow, toast notifications,
 * and category archive filter tabs.
 */

// Universal Toast Notification
function showToast(message, iconSvg = '') {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }

  const defaultIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;

  toast.innerHTML = `${iconSvg || defaultIcon} <span>${message}</span>`;
  toast.classList.add('show');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Mobile Drawer Navigation
  // ------------------------------------------------------------------------
  const mobileToggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  function openDrawer() {
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // ------------------------------------------------------------------------
  // 2. Newsletter Subscription Handling
  // ------------------------------------------------------------------------
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (!input || !input.value.trim() || !input.validity.valid) {
        showToast('Please enter a valid email address.');
        if (input) input.focus();
        return;
      }

      const email = input.value.trim();
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Subscribing...';
      submitBtn.disabled = true;

      // Simulate network request
      setTimeout(() => {
        submitBtn.textContent = 'Subscribed ✓';
        submitBtn.style.backgroundColor = '#16a34a';
        input.value = '';
        showToast(`Welcome! You are subscribed with ${email}`);

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 3500);
      }, 700);
    });
  });

  // ------------------------------------------------------------------------
  // 3. Category Archive Dynamic Filter Pills (category.html)
  // ------------------------------------------------------------------------
  const filterPills = document.querySelectorAll('.filter-pill-btn');
  const feedRows = document.querySelectorAll('.feed-article-row');

  if (filterPills.length > 0 && feedRows.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const filterValue = pill.getAttribute('data-filter') || 'all';

        feedRows.forEach(row => {
          const rowFormat = (row.getAttribute('data-format') || '').toLowerCase();
          if (filterValue === 'all' || rowFormat === filterValue.toLowerCase()) {
            row.style.display = 'grid';
            row.style.animation = 'fadeIn 0.25s ease';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. Update Current Date dynamically in Ticker if desired
  // ------------------------------------------------------------------------
  const tickerDate = document.getElementById('currentDateText');
  if (tickerDate) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    // Default to design date style
    tickerDate.textContent = today.toLocaleDateString('en-US', options);
  }
});
