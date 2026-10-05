/**
 * snpick Article Reading Utilities
 * Controls scroll reading progress bar, share modal / clipboard copy, and bookmarking
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Progress Bar
  const progressBar = document.getElementById('readingProgressBar');
  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // 2. Copy Link Button
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Article link copied to clipboard!');
      } catch (err) {
        showToast('Article URL: ' + window.location.href);
      }
    });
  }

  // 3. Share Article Button
  const shareBtn = document.getElementById('shareArticleBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: document.title,
        text: 'Why a shipping crisis in the Red Sea ends up on your grocery bill — snpick',
        url: window.location.href
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          // User cancelled or unsupported
        }
      } else {
        // Fallback: copy to clipboard
        try {
          await navigator.clipboard.writeText(window.location.href);
          showToast('Article link copied to clipboard!');
        } catch (err) {
          showToast('Article URL: ' + window.location.href);
        }
      }
    });
  }

  // 3. Bookmark Button
  const bookmarkBtn = document.getElementById('bookmarkArticleBtn');
  if (bookmarkBtn) {
    const ARTICLE_ID = 'snpick-bookmark-red-sea';
    let isBookmarked = localStorage.getItem(ARTICLE_ID) === 'true';

    function updateBookmarkUI() {
      if (isBookmarked) {
        bookmarkBtn.style.color = 'var(--brand-orange)';
        bookmarkBtn.setAttribute('title', 'Saved in reading list');
      } else {
        bookmarkBtn.style.color = '';
        bookmarkBtn.setAttribute('title', 'Save for later');
      }
    }

    updateBookmarkUI();

    bookmarkBtn.addEventListener('click', () => {
      isBookmarked = !isBookmarked;
      localStorage.setItem(ARTICLE_ID, isBookmarked ? 'true' : 'false');
      updateBookmarkUI();
      showToast(isBookmarked ? 'Saved to your reading list!' : 'Removed from your reading list.');
    });
  }
});
