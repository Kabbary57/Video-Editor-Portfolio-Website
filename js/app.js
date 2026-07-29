/* ==========================================================================
   Abdelrhman Kabbary - Main Application Script
   Handles Navigation, Dynamic Rendering, Google Drive Inline Video Playback,
   Animations & Interactivity
   ========================================================================== */

let activePlayingItemId = null;

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMarquee();
    initPortfolio();
    initTestimonials();
    initFAQ();
    initStatsCounter();
    initScrollReveals();
    initAiProjectModal();
});

/* 0. Google Drive Video Preview Helper */
/**
 * Converts a Google Drive share link into an embeddable /preview URL.
 * Handles standard share links, already formatted preview URLs, and alternative formats.
 * @param {string} url - Google Drive share link or preview URL
 * @returns {string} - Converted Google Drive preview URL or original if invalid
 */
function getGoogleDrivePreview(url) {
    if (!url || typeof url !== 'string') return '';

    // Return original URL if it's already a preview link
    if (url.includes('/file/d/') && url.includes('/preview')) {
        return url;
    }

    // Extract File ID using regex for standard Drive patterns
    const match = url.match(/(?:file\/d\/|id=|open\?id=|uc\?id=)([a-zA-Z0-9_-]{25,})/);
    if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
    }

    return url;
}

// Make helper accessible globally
window.getGoogleDrivePreview = getGoogleDrivePreview;

/* 1. Navbar & Mobile Drawer */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Header Scroll state
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link scroll spy
        let currentSection = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Hamburger Toggle
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburgerBtn.classList.toggle('active');
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            hamburgerBtn.classList.remove('active');
        });
    });
}

/* 2. Infinite Marquee */
function initMarquee() {
    const marqueeTrack = document.getElementById('marqueeTrack');
    if (!marqueeTrack || !PORTFOLIO_DATA.clientBrands) return;

    // Duplicate list 3 times for seamless loop
    const brands = [...PORTFOLIO_DATA.clientBrands, ...PORTFOLIO_DATA.clientBrands, ...PORTFOLIO_DATA.clientBrands];

    marqueeTrack.innerHTML = brands.map(brand => `
        <div class="marquee-item">
            <span class="icon">${brand.icon}</span>
            <span>${brand.name}</span>
        </div>
    `).join('');
}

/* 3. Inline Video Playback Manager */
function togglePlayback(itemId) {
    const item = PORTFOLIO_DATA.portfolioItems.find(i => i.id === itemId);
    if (!item) return;

    // Toggle behavior: if clicking the currently playing video, stop it
    if (activePlayingItemId === itemId) {
        stopPlayback(itemId);
        return;
    }

    // Single active video rule: stop any previously playing video
    if (activePlayingItemId) {
        stopPlayback(activePlayingItemId);
    }

    // Start playing new video
    startPlayback(item);
}

function startPlayback(item) {
    const wrapper = document.querySelector(`.card-thumbnail-wrapper[data-item-id="${item.id}"]`);
    const cardBtn = document.querySelector(`.preview-btn[data-item-id="${item.id}"]`);
    if (!wrapper) return;

    const orientation = item.orientation || (item.category === 'short-form' ? 'portrait' : 'landscape');
    activePlayingItemId = item.id;
    wrapper.classList.add('is-playing');
    wrapper.dataset.orientation = orientation;

    const embedUrl = getGoogleDrivePreview(item.driveUrl);

    // Create and attach loading spinner
    const spinner = document.createElement('div');
    spinner.className = 'video-loading-spinner';
    spinner.innerHTML = '<div class="spinner-ring"></div>';
    wrapper.appendChild(spinner);

    // Dynamic clipping container for perfect centering and cropping
    const clipContainer = document.createElement('div');
    clipContainer.className = `iframe-clipping-container ${orientation}`;

    // Create embedded iframe
    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.title = item.title;
    iframe.className = `inline-player-iframe ${orientation}`;
    iframe.setAttribute('allow', 'autoplay; fullscreen');
    iframe.setAttribute('allowfullscreen', 'true');

    // On iframe load finish, remove spinner and reveal iframe with animation
    iframe.onload = () => {
        if (spinner.parentNode) spinner.remove();
        iframe.classList.add('loaded');
        clipContainer.classList.add('loaded');
    };

    clipContainer.appendChild(iframe);

    // Close overlay button over iframe for quick stopping
    const closeBtn = document.createElement('button');
    closeBtn.className = 'stop-playback-btn';
    closeBtn.setAttribute('aria-label', 'Stop playback');
    closeBtn.setAttribute('title', 'Stop playback');
    closeBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        <span>Close Video</span>
    `;

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        stopPlayback(item.id);
    });

    wrapper.appendChild(clipContainer);
    wrapper.appendChild(closeBtn);

    // Update card action button
    if (cardBtn) {
        cardBtn.classList.add('active-playing');
        cardBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            <span>Stop Preview</span>
        `;
    }
}

function stopPlayback(itemId) {
    const wrapper = document.querySelector(`.card-thumbnail-wrapper[data-item-id="${itemId}"]`);
    const cardBtn = document.querySelector(`.preview-btn[data-item-id="${itemId}"]`);

    if (wrapper) {
        wrapper.classList.remove('is-playing');
        const clipContainer = wrapper.querySelector('.iframe-clipping-container');
        const spinner = wrapper.querySelector('.video-loading-spinner');
        const closeBtn = wrapper.querySelector('.stop-playback-btn');

        if (clipContainer) clipContainer.remove();
        if (spinner) spinner.remove();
        if (closeBtn) closeBtn.remove();
    }

    if (cardBtn) {
        cardBtn.classList.remove('active-playing');
        cardBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>Preview Edit</span>
        `;
    }

    if (activePlayingItemId === itemId) {
        activePlayingItemId = null;
    }
}

/* 4. Portfolio Rendering & Tab Filtering */
function initPortfolio() {
    const container = document.getElementById('portfolioContainer');
    const tabsContainer = document.getElementById('portfolioTabs');
    if (!container || !PORTFOLIO_DATA.portfolioItems) return;

    const categories = [
        { id: "short-form", title: "Short-Form Content (Reels / TikTok / Shorts)", isVertical: true },
        { id: "long-form", title: "Long-Form (YouTube Storytelling Projects)", isVertical: false },
        { id: "videography", title: "Videography & Event Coverage", isVertical: false },
        { id: "motion", title: "Motion Graphics & Chroma Keying", isVertical: false },
        { id: "ai-videos", title: "AI Videos (Generative AI Productions)", isVertical: false }
    ];

    function renderPortfolio(filterCategory = 'all') {
        if (activePlayingItemId) {
            stopPlayback(activePlayingItemId);
        }

        container.innerHTML = '';

        categories.forEach(cat => {
            if (filterCategory !== 'all' && filterCategory !== cat.id) return;

            const items = PORTFOLIO_DATA.portfolioItems.filter(item => item.category === cat.id);
            if (items.length === 0) return;

            const subsection = document.createElement('div');
            subsection.className = 'portfolio-subsection reveal active';

            const titleElem = document.createElement('h3');
            titleElem.className = 'subsection-title';
            titleElem.innerHTML = `<span>${cat.title}</span>`;
            subsection.appendChild(titleElem);

            const grid = document.createElement('div');
            grid.className = cat.isVertical ? 'video-grid vertical-scroll' : 'video-grid';

            grid.innerHTML = items.map(item => {
                const itemOrientation = item.orientation || (cat.isVertical ? 'portrait' : 'landscape');
                return `
                <div class="video-card ${itemOrientation === 'portrait' ? 'vertical-card' : ''}" data-card-id="${item.id}">
                    <div class="card-thumbnail-wrapper" role="button" tabindex="0" aria-label="Play or stop video ${escapeHtml(item.title)}" data-item-id="${item.id}" data-orientation="${itemOrientation}">
                        <img src="${item.thumbnail}" alt="${escapeHtml(item.title)}" class="card-thumbnail" loading="lazy">
                        <div class="category-tag">${cat.id.replace('-', ' ')}</div>
                        <div class="play-overlay">
                            <div class="play-btn-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </div>
                        </div>
                        <div class="duration-badge">${item.duration}</div>
                    </div>
                    
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <p class="card-desc">${item.desc}</p>
                        
                        <div class="card-tags">
                            ${item.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
                        </div>
                        
                        <div class="card-footer">
                            <button class="card-link preview-btn" data-item-id="${item.id}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                <span>Preview Edit</span>
                            </button>
                            ${item.aiDetails ? `
                                <button class="card-link case-study-btn" data-item-id="${item.id}">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                    <span>Case Study</span>
                                </button>
                            ` : ''}
                            ${item.behanceUrl ? `
                                <a href="${item.behanceUrl}" target="_blank" rel="noopener" class="card-link">
                                    <span>Behance</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
            }).join('');

            subsection.appendChild(grid);
            container.appendChild(subsection);
        });

        // Delegate event listeners for click and keyboard accessibility
        container.querySelectorAll('.card-thumbnail-wrapper').forEach(wrapper => {
            const itemId = wrapper.dataset.itemId;

            wrapper.addEventListener('click', (e) => {
                // Prevent trigger if clicking close button
                if (e.target.closest('.stop-playback-btn')) return;
                togglePlayback(itemId);
            });

            wrapper.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    togglePlayback(itemId);
                }
            });
        });

        container.querySelectorAll('.preview-btn').forEach(btn => {
            const itemId = btn.dataset.itemId;
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlayback(itemId);
            });
        });

        container.querySelectorAll('.case-study-btn').forEach(btn => {
            const itemId = btn.dataset.itemId;
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (window.openAiProjectModal) {
                    window.openAiProjectModal(itemId);
                }
            });
        });
    }

    // Initial render
    renderPortfolio('all');

    // Tab Event listeners
    if (tabsContainer) {
        tabsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;

            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            renderPortfolio(category);
        });
    }
}

/* 5. Testimonials Rendering */
function initTestimonials() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid || !PORTFOLIO_DATA.testimonials) return;

    grid.innerHTML = PORTFOLIO_DATA.testimonials.map(item => `
        <div class="review-card">
            <div class="stars-row">
                ${Array(item.rating).fill('★').join(' ')}
            </div>
            <p class="review-quote">"${item.quote}"</p>
            <div class="review-author">
                <img src="${item.avatar}" alt="${escapeHtml(item.name)}" class="author-avatar" loading="lazy">
                <div class="author-info">
                    <h4>${item.name}</h4>
                    <span>${item.role}</span>
                </div>
            </div>
        </div>
    `).join('');
}

/* 6. FAQ Accordion */
function initFAQ() {
    const accordion = document.getElementById('faqAccordion');
    if (!accordion || !PORTFOLIO_DATA.faqs) return;

    accordion.innerHTML = PORTFOLIO_DATA.faqs.map((faq, index) => {
        const isFirst = index === 0;
        const itemId = `faq-item-${index}`;
        const answerId = `faq-answer-${index}`;
        return `
            <div class="faq-item ${isFirst ? 'active' : ''}" id="${itemId}">
                <button class="faq-question" aria-expanded="${isFirst ? 'true' : 'false'}" aria-controls="${answerId}">
                    <span>${faq.question}</span>
                    <span class="faq-icon" aria-hidden="true">+</span>
                </button>
                <div class="faq-answer" id="${answerId}" role="region" aria-labelledby="${itemId}">
                    <p>${faq.answer}</p>
                </div>
            </div>
        `;
    }).join('');

    accordion.addEventListener('click', (e) => {
        const btn = e.target.closest('.faq-question');
        if (!btn) return;

        const item = btn.closest('.faq-item');
        const isActive = item.classList.contains('active');

        // Close all items & update aria-expanded
        accordion.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            const qBtn = i.querySelector('.faq-question');
            if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked item if it wasn't already active
        if (!isActive) {
            item.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
}

/* 7. Stats Counter Animation */
function initStatsCounter() {
    const statCards = document.querySelectorAll('.stat-card');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateNumbers();
            }
        });
    }, { threshold: 0.5 });

    statCards.forEach(card => observer.observe(card));

    function animateNumbers() {
        document.querySelectorAll('.stat-number').forEach(elem => {
            const target = parseInt(elem.dataset.target, 10);
            if (isNaN(target)) return;

            let count = 0;
            const duration = 1500;
            const increment = target / (duration / 16);

            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    elem.textContent = target + (elem.textContent.includes('%') ? '%' : elem.textContent.includes('M+') ? 'M+' : '+');
                    clearInterval(timer);
                } else {
                    elem.textContent = Math.floor(count) + (elem.textContent.includes('%') ? '%' : elem.textContent.includes('M+') ? 'M+' : '+');
                }
            }, 16);
        });
    }
}

/* 8. Scroll Reveal Animations */
function initScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
}

/* 9. Dedicated AI Project Details Case Study Modal */
function initAiProjectModal() {
    const modal = document.getElementById('aiProjectModal');
    const backdrop = document.getElementById('aiModalBackdrop');
    const closeBtn = document.getElementById('aiModalClose');
    const heroWrapper = document.getElementById('aiModalHero');

    const titleElem = document.getElementById('aiModalTitle');
    const categoryBadge = document.getElementById('aiModalCategory');
    const orientationBadge = document.getElementById('aiModalOrientation');
    const roleElem = document.getElementById('aiModalRole');
    const overviewElem = document.getElementById('aiModalOverview');
    const toolsContainer = document.getElementById('aiModalTools');
    const workflowContainer = document.getElementById('aiModalWorkflow');
    const resultElem = document.getElementById('aiModalResult');

    if (!modal) return;

    window.openAiProjectModal = function (itemId) {
        const item = PORTFOLIO_DATA.portfolioItems.find(i => i.id === itemId);
        if (!item || !item.aiDetails) return;

        // Stop any currently playing inline video
        if (activePlayingItemId) {
            stopPlayback(activePlayingItemId);
        }

        const details = item.aiDetails;
        const orientation = item.orientation || 'landscape';
        const embedUrl = getGoogleDrivePreview(details.heroVideoUrl || item.driveUrl);

        // Populate Hero Video
        if (embedUrl) {
            heroWrapper.innerHTML = `
                <div class="iframe-clipping-container ${orientation} loaded" style="position: relative; width: 100%; aspect-ratio: ${orientation === 'portrait' ? '9/16' : '16/9'}; max-height: ${orientation === 'portrait' ? '460px' : '400px'}; margin: 0 auto;">
                    <iframe src="${embedUrl}" title="${escapeHtml(item.title)}" class="inline-player-iframe ${orientation} loaded" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
            `;
        } else {
            heroWrapper.innerHTML = `<img src="${item.thumbnail}" alt="${escapeHtml(item.title)}" style="width:100%; height:auto; display:block;">`;
        }

        // Title & Badges
        if (titleElem) titleElem.textContent = item.title;
        if (categoryBadge) categoryBadge.textContent = 'AI Video Production';
        if (orientationBadge) orientationBadge.textContent = orientation === 'portrait' ? '9:16 Vertical Reel' : '16:9 Widescreen';

        // Role & Overview
        if (roleElem) roleElem.textContent = details.role || 'AI Video Director & Editor';
        if (overviewElem) overviewElem.textContent = details.overview || item.desc;

        // Tools Used
        if (toolsContainer) {
            toolsContainer.innerHTML = (details.toolsUsed || []).map(tool => `
                <span class="ai-tool-chip">
                    <span class="chip-sparkle">✨</span>
                    <span>${escapeHtml(tool)}</span>
                </span>
            `).join('');
        }

        // Workflow Timeline Steps
        if (workflowContainer) {
            workflowContainer.innerHTML = (details.workflow || []).map(step => `
                <div class="workflow-step-card">
                    <h4 class="step-title">${escapeHtml(step.step)}</h4>
                    <p class="step-desc">${escapeHtml(step.desc)}</p>
                </div>
            `).join('');
        }

        // Final Result
        if (resultElem) resultElem.textContent = details.finalResult || 'High performance AI video production.';

        // Show Modal
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    function closeAiModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        if (heroWrapper) heroWrapper.innerHTML = '';
        document.body.style.overflow = '';
    }

    if (backdrop) backdrop.addEventListener('click', closeAiModal);
    if (closeBtn) closeBtn.addEventListener('click', closeAiModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeAiModal();
        }
    });
}

// Utility HTML escape
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

