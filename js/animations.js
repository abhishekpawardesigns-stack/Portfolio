/* ==========================================================================
   SCROLL REVEAL ANIMATIONS — Ultra Smooth & Eager Loading
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Keep active permanently so scrolling back up never hides content
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.01,
    rootMargin: '250px 0px 250px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Eager Fallback: Reveal all elements currently in or near viewport
  const revealAllVisible = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 300 && rect.bottom > -300) {
        el.classList.add('active');
      }
    });
  };

  revealAllVisible();
  window.addEventListener('scroll', revealAllVisible, { passive: true });
  setTimeout(revealAllVisible, 200);
  setTimeout(revealAllVisible, 600);

  /* ==========================================================================
     TOOLS SECTION PROGRESS & COUNTER ANIMATION
     ========================================================================== */
  const toolsSection = document.querySelector('#tools');
  const toolCards = document.querySelectorAll('.tool-progress-card');
  let toolsAnimated = false;

  const animateTools = () => {
    if (toolsAnimated || !toolCards.length) return;
    toolsAnimated = true;

    toolCards.forEach((card, index) => {
      const targetPercent = parseInt(card.getAttribute('data-percent'), 10) || 0;
      const fillBar = card.querySelector('.tool-progress-fill');
      const badge = card.querySelector('.tool-percent-badge');

      setTimeout(() => {
        // 1. Reveal card
        card.classList.add('animated');

        // 2. Animate fill bar width
        if (fillBar) {
          fillBar.style.width = `${targetPercent}%`;
        }

        // 3. Fast number count-up animation from 0 to targetPercent
        if (badge) {
          const startTime = performance.now();
          const duration = 1200; // Sync with CSS width transition

          const countUp = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic: fast start, smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(easeOut * targetPercent);
            badge.textContent = `${currentVal}%`;

            if (progress < 1) {
              requestAnimationFrame(countUp);
            } else {
              badge.textContent = `${targetPercent}%`;
            }
          };
          requestAnimationFrame(countUp);
        }
      }, index * 180); // Stagger cards sequentially
    });
  };

  if (toolsSection) {
    const toolsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateTools();
          toolsObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    toolsObserver.observe(toolsSection);

    // Fallback check on load & scroll
    const checkToolsInView = () => {
      if (toolsAnimated) return;
      const rect = toolsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        animateTools();
      }
    };
    checkToolsInView();
    window.addEventListener('scroll', checkToolsInView, { passive: true });
  }

  /* ==========================================================================
     TIMELINE SPINE PRECISION ALIGNMENT (First Node to Last Node)
     ========================================================================== */
  const alignTimelineSpine = () => {
    const container = document.querySelector('.vertical-timeline-container');
    if (!container) return;
    const nodes = container.querySelectorAll('.vertical-timeline-node');
    if (nodes.length < 2) return;

    const firstNode = nodes[0];
    const lastNode = nodes[nodes.length - 1];

    const containerRect = container.getBoundingClientRect();
    const firstRect = firstNode.getBoundingClientRect();
    const lastRect = lastNode.getBoundingClientRect();

    const topOffset = (firstRect.top + firstRect.height / 2) - containerRect.top;
    const bottomOffset = (lastRect.top + lastRect.height / 2) - containerRect.top;
    const spineHeight = Math.max(0, bottomOffset - topOffset);

    container.style.setProperty('--timeline-line-top', `${topOffset}px`);
    container.style.setProperty('--timeline-line-height', `${spineHeight}px`);
  };

  alignTimelineSpine();
  window.addEventListener('resize', alignTimelineSpine);
  window.addEventListener('load', alignTimelineSpine);
  setTimeout(alignTimelineSpine, 100);
  setTimeout(alignTimelineSpine, 400);
  setTimeout(alignTimelineSpine, 1000);
});
