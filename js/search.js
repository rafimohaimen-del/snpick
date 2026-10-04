/**
 * snpick Live Search System
 * Implements accessible <dialog closedby="any"> modal with instant query filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('searchModal');
  const openBtns = document.querySelectorAll('.search-open-btn');
  const closeBtn = document.getElementById('closeSearchBtn');
  const input = document.getElementById('searchModalInput');
  const resultsContainer = document.getElementById('searchResultsList');

  if (!modal || !input || !resultsContainer) return;

  function renderResults(query = '') {
    const trimmed = query.trim().toLowerCase();
    resultsContainer.innerHTML = '';

    const list = typeof ARTICLES_DATA !== 'undefined' ? ARTICLES_DATA : [];

    const matches = trimmed === ''
      ? list.slice(0, 5) // Recent / Top stories if empty query
      : list.filter(item => {
          return item.title.toLowerCase().includes(trimmed) ||
                 item.summary.toLowerCase().includes(trimmed) ||
                 item.category.toLowerCase().includes(trimmed) ||
                 item.tags.some(t => t.toLowerCase().includes(trimmed));
        });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <li style="padding: 2rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No stories found matching "<strong style="color: var(--text-primary);">${escapeHtml(query)}</strong>".
        </li>
      `;
      return;
    }

    matches.forEach(story => {
      const li = document.createElement('li');
      li.className = 'search-result-item';

      let highlightedTitle = escapeHtml(story.title);
      if (trimmed.length > 0) {
        const regex = new RegExp(`(${escapeRegExp(trimmed)})`, 'gi');
        highlightedTitle = highlightedTitle.replace(regex, '<mark>$1</mark>');
      }

      li.innerHTML = `
        <span class="search-result-category">${escapeHtml(story.category)} • ${escapeHtml(story.format)}</span>
        <h4 class="search-result-title">${highlightedTitle}</h4>
        <span style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(story.date)} · ${escapeHtml(story.readTime)}</span>
      `;

      li.addEventListener('click', () => {
        window.location.href = story.url;
      });

      resultsContainer.appendChild(li);
    });
  }

  function openSearch() {
    modal.showModal();
    input.value = '';
    renderResults('');
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    modal.close();
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', openSearch);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSearch);
  }

  input.addEventListener('input', (e) => {
    renderResults(e.target.value);
  });

  // Global Keyboard Shortcuts (Ctrl+K, Cmd+K, or /)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.open) {
        closeSearch();
      } else {
        openSearch();
      }
    } else if (e.key === '/' && !modal.open && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    }
  });

  // Fallback for browsers without declarative closedby support (per modern-web-guidance)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    modal.addEventListener('click', (event) => {
      if (event.target !== modal) return;
      const rect = modal.getBoundingClientRect();
      const isInsideContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInsideContent) {
        modal.close();
      }
    });
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
});
