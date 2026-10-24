/* ==========================================================================
   Abdelrhman Kabbary - Main Application Script
   Handles Navigation, Dynamic Rendering, Google Drive Inline Video Playback,
   Animations & Interactivity
   ========================================================================== */

let activePlayingItemId = null;

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMarquee();
    initVideoModal();
    initPortfolio();
    initTestimonials();
    initFAQ();
    initStatsCounter();
    initScrollReveals();
    initAiProjectModal();
});

/* ==========================================================================
   0. Smart Video Embed URL Parser (Google Drive, YouTube, Vimeo)
   ========================================================================== */
/**
 * Automatically converts any Google Drive share link into an embeddable preview URL,
 * while supporting YouTube and Vimeo fallbacks.
 * @param {string} url - Original video URL
 * @returns {string} Embeddable preview URL
 */
function getVideoEmbedUrl(url) {
    if (!url || typeof url !== 'string') return '';
    url = url.trim();

    // 1. Google Drive Share Link Auto-Parser
    if (url.includes('drive.google.com')) {
        if (url.includes('/file/d/') && url.includes('/preview')) {
            return url;
        }
        const driveMatch = url.match(/(?:file\/d\/|id=|open\?id=|uc\?id=)([a-zA-Z0-9_-]{25,})/);
        if (driveMatch && driveMatch[1]) {
            return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
        }
    }

    // 2. YouTube (Watch, Shorts, Embed, youtu.be)
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
        return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
    }

    // 3. Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    }

    return url;
}

// Global aliases for full backwards compatibility
function getGoogleDrivePreview(url) {
    return getVideoEmbedUrl(url);
}
window.getVideoEmbedUrl = getVideoEmbedUrl;
window.getGoogleDrivePreview = getVideoEmbedUrl;

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

/* ==========================================================================
   3. Interactive Lightbox Video Modal (VideoModal)
   ========================================================================== */
function initVideoModal() {
    const modal = document.getElementById('videoLightboxModal');
    if (!modal) return;

    const backdrop = document.getElementById('lightboxBackdrop');
    const dialog = document.getElementById('lightboxDialog');
    const closeBtn = document.getElementById('lightboxCloseBtn');
    const categoryElem = document.getElementById('lightboxCategory');
    const titleElem = document.getElementById('lightboxVideoTitle');
    const externalBtn = document.getElementById('lightboxExternalBtn');
    const playerFrame = document.getElementById('lightboxPlayerFrame');
    const descElem = document.getElementById('lightboxDesc');
    const tagsContainer = document.getElementById('lightboxTags');
    const durationElem = document.getElementById('lightboxDuration');

    window.openVideoModal = function (item) {
        if (!item) return;

        // Ensure wrapper is completely cleared before mounting new Google Drive iframe
        if (playerFrame) {
            playerFrame.innerHTML = '';
        }

        // Close AI case study modal if open and clear its hero player
        const aiModal = document.getElementById('aiProjectModal');
        const aiHero = document.getElementById('aiModalHero');
        if (aiModal && aiModal.classList.contains('open')) {
            aiModal.classList.remove('open');
            aiModal.setAttribute('aria-hidden', 'true');
        }
        if (aiHero) {
            aiHero.innerHTML = '';
        }

        const orientation = item.orientation || (item.category === 'short-form' ? 'portrait' : 'landscape');
        const embedUrl = getVideoEmbedUrl(item.driveUrl);
        const hasDriveUrl = !!item.driveUrl;

        // Populate Header Info
        if (categoryElem) categoryElem.textContent = getCategoryBadgeLabel(item.category);
        if (titleElem) titleElem.textContent = item.title;
        if (descElem) descElem.textContent = item.desc || '';
        if (durationElem) durationElem.textContent = item.duration || '';

        // External Link Button in modal header
        if (externalBtn) {
            externalBtn.href = item.driveUrl || 'https://www.behance.net/kabbary';
            const btnSpan = externalBtn.querySelector('span');
            if (btnSpan) {
                btnSpan.textContent = hasDriveUrl ? 'Open Original Link' : 'View on Behance';
            }
        }

        // Tags
        if (tagsContainer) {
            tagsContainer.innerHTML = (item.tags || []).map(t =>
                `<span class="lightbox-tag">${escapeHtml(t)}</span>`
            ).join('');
        }

        // Orientation Styling for Dialog & Player Frame
        if (dialog) {
            if (orientation === 'portrait') {
                dialog.classList.add('portrait-dialog');
                dialog.classList.remove('landscape-dialog');
            } else {
                dialog.classList.add('landscape-dialog');
                dialog.classList.remove('portrait-dialog');
            }
        }

        if (playerFrame) {
            playerFrame.className = `lightbox-player-frame ${orientation}`;

            if (embedUrl) {
                // Show loading spinner while iframe initializes
                playerFrame.innerHTML = `
                    <div class="lightbox-loading-spinner" id="lightboxSpinner">
                        <div class="spinner-ring"></div>
                        <span>Loading cinematic player...</span>
                    </div>
                    <iframe src="${embedUrl}" 
                            title="${escapeHtml(item.title)}" 
                            class="lightbox-iframe" 
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture" 
                            allowfullscreen="true">
                    </iframe>
                `;

                const iframe = playerFrame.querySelector('.lightbox-iframe');
                const spinner = playerFrame.querySelector('.lightbox-loading-spinner');
                if (iframe) {
                    iframe.onload = () => {
                        if (spinner) spinner.remove();
                        iframe.classList.add('loaded');
                    };
                }
            } else {
                playerFrame.innerHTML = `
                    <div style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000;">
                        <img src="${item.thumbnail}" alt="${escapeHtml(item.title)}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                    </div>
                `;
            }
        }

        // Open Modal Animation
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const floatBtn = document.getElementById('floatingWhatsappBtn');
        if (floatBtn) floatBtn.classList.add('is-hidden');
    };

    window.closeVideoModal = function () {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');

        // Immediately destroy the iframe so no background audio or duplicate control bars remain in DOM
        if (playerFrame) {
            playerFrame.innerHTML = '';
        }
        document.body.style.overflow = '';

        const floatBtn = document.getElementById('floatingWhatsappBtn');
        if (floatBtn) floatBtn.classList.remove('is-hidden');
    };

    // Close Event Listeners
    if (closeBtn) closeBtn.addEventListener('click', window.closeVideoModal);
    if (backdrop) backdrop.addEventListener('click', window.closeVideoModal);

    modal.addEventListener('click', (e) => {
        if (dialog && !dialog.contains(e.target)) {
            window.closeVideoModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            window.closeVideoModal();
        }
    });
}

/* Category Display Name Mapper */
const CATEGORY_NAMES = {
    'all': 'All Projects',
    'short-form': 'Short-Form',
    'motion': 'Motion Graphics',
    'long-form': 'Long-Form',
    'videography': 'Videography',
    'ai-videos': 'AI Videos',
    '3d': '3D'
};

function getCategoryBadgeLabel(cat) {
    if (!cat) return 'Video';
    const lower = cat.toLowerCase();
    if (lower === '3d') return '3D';
    return CATEGORY_NAMES[lower] || (cat ? cat.replace('-', ' ') : 'Video');
}

/* ==========================================================================
   4. Portfolio Rendering & Interactive Filter System
   ========================================================================== */
const PORTFOLIO_CATEGORIES = [
    { key: 'short-form', title: 'Short-Form (Reels / Shorts)' },
    { key: 'motion', title: 'Motion Graphics & Chroma' },
    { key: 'long-form', title: 'Long-Form (YouTube)' },
    { key: 'videography', title: 'Videography & Events' },
    { key: 'ai-videos', title: 'AI Videos' },
    { key: '3d', title: '3D Works' }
];

function createCardHtml(item, index = 0) {
    const orientation = item.orientation || (item.category === 'short-form' ? 'portrait' : 'landscape');
    const catLabel = getCategoryBadgeLabel(item.category);
    const driveUrl = item.driveUrl || 'https://www.behance.net/kabbary';
    const hasDriveUrl = !!item.driveUrl;

    return `
    <article class="video-card ${orientation === 'portrait' ? 'portrait-card' : 'landscape-card'}" 
             data-id="${item.id}" 
             data-category="${item.category}" 
             data-orientation="${orientation}"
             style="animation-delay: ${index * 35}ms;">
        
        <!-- Video Thumbnail Area (Clicking opens Lightbox Video Modal) -->
        <div class="card-thumbnail-wrapper" 
             role="button" 
             tabindex="0" 
             aria-label="Watch video: ${escapeHtml(item.title)}" 
             data-item-id="${item.id}"
             data-orientation="${orientation}">
            <img src="${item.thumbnail}" alt="${escapeHtml(item.title)}" class="card-thumbnail" loading="lazy">
            
            <div class="thumbnail-badges">
                <span class="category-pill">${catLabel}</span>
                <span class="orientation-pill ${orientation}">${orientation === 'portrait' ? '9:16 Reel' : '16:9'}</span>
            </div>

            <!-- Centered Play Button Overlay -->
            <div class="play-overlay">
                <div class="play-btn-circle" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                </div>
                <span class="play-overlay-text"></span>
            </div>

            <div class="duration-badge">${item.duration}</div>
        </div>

        <!-- Card Body (Directly underneath thumbnail) -->
        <div class="card-body">
            <!-- Title & Category Row with Mandatory External Link Button -->
            <div class="card-header-row">
                <div class="card-title-wrap">
                    <span class="card-cat-name">${catLabel}</span>
                    <h4 class="card-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</h4>
                </div>
                
                <!-- Mandatory External Hyperlink Icon Button Underneath Video -->
                <a href="${driveUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="card-ext-icon-btn" 
                   title="${hasDriveUrl ? 'Open Google Drive video in new tab' : 'Open project on Behance'}" 
                   aria-label="Open original link for ${escapeHtml(item.title)} in new tab">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>

            <p class="card-desc">${escapeHtml(item.desc)}</p>

            <div class="card-tags">
                ${item.tags.map(t => `<span class="card-tag">${escapeHtml(t)}</span>`).join('')}
            </div>

            <!-- Card Footer Actions -->
            <div class="card-footer">
                <button class="card-watch-btn" type="button" data-item-id="${item.id}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    <span>Watch Video</span>
                </button>

                <a href="${driveUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="card-footer-ext-btn" 
                   title="${hasDriveUrl ? 'Open Google Drive link in new tab' : 'Open Behance link in new tab'}">
                    <span>${hasDriveUrl ? 'Original Link' : 'Behance'}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>

                ${item.aiDetails ? `
                    <button class="card-case-study-btn" type="button" data-item-id="${item.id}" title="View AI Case Study">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        <span>Case Study</span>
                    </button>
                ` : ''}
            </div>
        </div>
    </article>
    `;
}

function createCategorySeparatorHtml(cat, count) {
    const countBadge = `${count} ${count === 1 ? 'Video' : 'Videos'}`;
    return `
        <div class="category-separator">
            <span class="category-separator-indicator" aria-hidden="true"></span>
            <h3 class="category-separator-title">${escapeHtml(cat.title)}</h3>
            <span class="category-count">${countBadge}</span>
            <div class="category-separator-line"></div>
        </div>
    `;
}

function attachCardListeners(rootElem) {
    if (!rootElem) return;

    // 1. Thumbnail click / keyboard opens lightbox modal
    rootElem.querySelectorAll('.card-thumbnail-wrapper').forEach(wrapper => {
        const itemId = wrapper.dataset.itemId;
        const item = PORTFOLIO_DATA.portfolioItems.find(i => i.id === itemId);
        wrapper.addEventListener('click', () => {
            if (item && window.openVideoModal) window.openVideoModal(item);
        });
        wrapper.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (item && window.openVideoModal) window.openVideoModal(item);
            }
        });
    });

    // 2. Watch Video button in card footer opens lightbox modal
    rootElem.querySelectorAll('.card-watch-btn').forEach(btn => {
        const itemId = btn.dataset.itemId;
        const item = PORTFOLIO_DATA.portfolioItems.find(i => i.id === itemId);
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (item && window.openVideoModal) window.openVideoModal(item);
        });
    });

    // 3. External link buttons - stop propagation so parent card click doesn't trigger modal
    rootElem.querySelectorAll('.card-ext-icon-btn, .card-footer-ext-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // 4. Case Study button
    rootElem.querySelectorAll('.card-case-study-btn').forEach(btn => {
        const itemId = btn.dataset.itemId;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.openAiProjectModal) window.openAiProjectModal(itemId);
        });
    });
}

function initPortfolio() {
    const container = document.getElementById('portfolioContainer');
    const tabsContainer = document.getElementById('portfolioTabs');
    if (!container || !PORTFOLIO_DATA.portfolioItems) return;


    // Dynamically calculate and sync category tab count badges
    if (tabsContainer) {
        const allCount = PORTFOLIO_DATA.portfolioItems.length;
        const countAllElem = tabsContainer.querySelector('[data-category="all"] .tab-count');
        if (countAllElem) countAllElem.textContent = allCount;

        const categories = ['short-form', 'motion', 'long-form', 'videography', 'ai-videos', '3d'];
        categories.forEach(cat => {
            const count = PORTFOLIO_DATA.portfolioItems.filter(item =>
                item.category && item.category.toLowerCase() === cat.toLowerCase()
            ).length;
            const countElem = tabsContainer.querySelector(`[data-category="${cat}"] .tab-count`);
            if (countElem) countElem.textContent = count;
        });
    }

    function renderCards(filterCategory = 'all') {
        if (filterCategory === 'all') {
            // Grouped Rendering for "All Projects" with Cinematic Category Separators
            let sectionsHtml = '';
            let globalCardIndex = 0;

            PORTFOLIO_CATEGORIES.forEach(cat => {
                const catItems = PORTFOLIO_DATA.portfolioItems.filter(item =>
                    item.category && item.category.toLowerCase() === cat.key.toLowerCase()
                );

                // Skip category if currently 0 videos
                if (catItems.length === 0) return;

                const isPortrait = cat.key === 'short-form';
                const gridClass = isPortrait ? 'portrait-grid' : 'landscape-grid';

                sectionsHtml += `
                    <div class="portfolio-category-section" data-category="${cat.key}">
                        ${createCategorySeparatorHtml(cat, catItems.length)}
                        <div class="video-grid category-video-grid ${gridClass}">
                            ${catItems.map(item => createCardHtml(item, globalCardIndex++)).join('')}
                        </div>
                    </div>
                `;
            });

            if (!sectionsHtml) {
                container.innerHTML = `
                    <div class="portfolio-empty-state">
                        <p>No projects found.</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = sectionsHtml;
        } else {
            // Single Specific Category Filtered View
            const items = PORTFOLIO_DATA.portfolioItems.filter(item =>
                item.category && item.category.toLowerCase() === filterCategory.toLowerCase()
            );

            if (items.length === 0) {
                container.innerHTML = `
                    <div class="portfolio-empty-state">
                        <p>No videos found for this category.</p>
                    </div>
                `;
                return;
            }

            const isPortrait = filterCategory === 'short-form';
            const gridClass = isPortrait ? 'portrait-grid' : 'landscape-grid';

            container.innerHTML = `
                <div class="video-grid category-video-grid ${gridClass} single-category-grid">
                    ${items.map((item, index) => createCardHtml(item, index)).join('')}
                </div>
            `;
        }

        // Attach listeners across all cards in container
        attachCardListeners(container);
    }

    // Default: Show ALL videos on page load
    renderCards('all');

    // Interactive Category Filter Bar Tabs
    if (tabsContainer) {
        tabsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;

            tabsContainer.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const category = btn.dataset.category || 'all';
            renderCards(category);
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

        // If lightbox video modal is open, close and unmount it
        if (window.closeVideoModal) {
            window.closeVideoModal();
        }

        // Ensure hero wrapper is completely cleared before mounting
        if (heroWrapper) {
            heroWrapper.innerHTML = '';
        }

        const details = item.aiDetails;
        const orientation = item.orientation || 'landscape';
        const embedUrl = getGoogleDrivePreview(details.heroVideoUrl || item.driveUrl);

        // Populate Hero Video
        if (embedUrl) {
            heroWrapper.innerHTML = `
                <div class="iframe-clipping-container ${orientation} loaded" id="aiModalClipContainer" style="position: relative; width: 100%; aspect-ratio: ${orientation === 'portrait' ? '9/16' : '16/9'}; ${orientation === 'portrait' ? 'max-height: 440px;' : ''} margin: 0 auto;">
                    <iframe src="${embedUrl}" title="${escapeHtml(item.title)}" class="inline-player-iframe ${orientation} loaded" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <div class="video-overlay-bottom-left">
                        <a href="${item.driveUrl}" target="_blank" rel="noopener" class="open-tab-btn" title="Open video in new tab" aria-label="Open video in new tab">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
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

        const floatBtn = document.getElementById('floatingWhatsappBtn');
        if (floatBtn) floatBtn.classList.add('is-hidden');
    };

    function closeAiModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        if (heroWrapper) heroWrapper.innerHTML = '';
        document.body.style.overflow = '';

        const floatBtn = document.getElementById('floatingWhatsappBtn');
        if (floatBtn) floatBtn.classList.remove('is-hidden');
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

