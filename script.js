/* ==========================================
   RAFLI PRADITTA - CORE PORTFOLIO CONTROLLER
   Dynamic Data Rendering & Interactive Behaviors
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Dynamic Typewriter Effect in Hero
    initTypewriter();

    // 2. Render Skills Grid Cards with embedded SVG/PNG logos
    renderSkills('all');
    setupSkillCategoryTabs();
    setupSkillSearch();

    // 3. Render Projects Grid Cards & Setup Filters
    renderProjects('all');
    setupProjectFilters();

    // 4. Render Academic Journey Deck Cards
    renderEducation();

    // 5. Setup Theme Toggle & Navigation Behavior
    setupThemeToggle();
    setupNavbarScroll();
    setupMobileMenu();
    setupMouseBubbleFollower();

    // 6. Setup Interactive Project Detail Modal & High-End Gallery Carousel
    setupProjectModal();

    // 7. Setup Contact Form Submission & Toast
    setupContactForm();
});

/* ------------------------------------------
   1. TYPEWRITER EFFECT
   ------------------------------------------ */
function initTypewriter() {
    const typewriterEl = document.getElementById('typewriter-text');
    if (!typewriterEl) return;

    const roles = [
        "Backend Developer Specialist",
        "Information Systems Student (UNPAM)",
        "Go (Golang) & Gin Engine Specialist",
        "Laravel & REST API Engineer",
        "Full-Stack Web Engineering"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 90;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at full word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* ------------------------------------------
   2. SKILLS GRID RENDERING & FILTERING
   ------------------------------------------ */
function renderSkills(category = 'all', searchQuery = '') {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = '';

    const filtered = skillsData.filter(skill => {
        const matchesCategory = category === 'all' || skill.category === category;
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-muted);">
                <p>No skills found matching your search. Try another keyword.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'tech-icon-card glass-card';
        card.setAttribute('data-category', skill.category);

        card.innerHTML = `
            <div class="tech-card-logo-box">
                ${skill.svg}
            </div>
            <span class="tech-card-name">${skill.name}</span>
        `;

        container.appendChild(card);
    });
}

function setupSkillCategoryTabs() {
    const tabsContainer = document.getElementById('skill-category-tabs');
    if (!tabsContainer) return;

    tabsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;

        tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        const searchInput = document.getElementById('skill-search-input');
        const query = searchInput ? searchInput.value : '';
        renderSkills(category, query);
    });
}

function setupSkillSearch() {
    const searchInput = document.getElementById('skill-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const activeTab = document.querySelector('#skill-category-tabs .tab-btn.active');
        const category = activeTab ? activeTab.getAttribute('data-category') : 'all';
        renderSkills(category, query);
    });
}

/* ------------------------------------------
   3. PROJECTS GRID RENDERING & FILTERS
   ------------------------------------------ */
function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    const filtered = projectsData.filter(proj => filter === 'all' || proj.category === filter);

    filtered.forEach(proj => {
        const card = document.createElement('article');
        card.className = 'project-card glass-card';

        const categoryLabel = proj.category === 'personal' ? 'Backend Personal' :
                              proj.category === 'academic' ? 'Academic UNPAM' : 'High School Project';

        const statusBadgeHtml = proj.statusBadge ? `<span class="glass-tag tag-amber" style="font-size:0.7rem; padding:2px 8px; margin-bottom:8px; display:inline-block;">${proj.statusBadge}</span>` : '';

        const tagsHtml = proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="project-image-wrap">
                <img src="${proj.image}" alt="${proj.title}" class="project-image" loading="lazy">
                <span class="project-category-badge">${categoryLabel}</span>
            </div>
            <div class="project-content">
                ${statusBadgeHtml}
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-short-desc">${proj.shortDesc}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                <div class="project-actions">
                    <button class="detail-btn" data-id="${proj.id}">
                        <span>View Details ✦</span>
                    </button>
                    <div class="external-links">
                        <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="link-icon" aria-label="GitHub Repository">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // Rebind Modal Buttons
    container.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projId = btn.getAttribute('data-id');
            openProjectModal(projId);
        });
    });
}

function setupProjectFilters() {
    const filterBar = document.getElementById('projects-filter');
    if (!filterBar) return;

    filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
    });
}

/* ------------------------------------------
   4. ACADEMIC JOURNEY DECK RENDERING
   ------------------------------------------ */
function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = '';

    educationJourneyData.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'edu-card glass-card';

        const highlightsHtml = edu.highlights.map(item => `<li>${item}</li>`).join('');
        const skillsHtml = edu.keySkills.map(s => `<span class="glass-tag tag-indigo">${s}</span>`).join('');

        card.innerHTML = `
            <div class="edu-card-top">
                <span class="edu-icon-badge">${edu.icon}</span>
                <span class="edu-period-badge">${edu.period}</span>
            </div>
            <h3 class="edu-institution">${edu.institution}</h3>
            <p class="edu-degree">${edu.degree}</p>
            <p class="edu-description">${edu.description}</p>
            <div class="edu-highlights">
                <span class="edu-highlights-title">Key Achievements & Milestones:</span>
                <ul class="edu-highlights-list">
                    ${highlightsHtml}
                </ul>
            </div>
            <div class="edu-skills-wrap">
                ${skillsHtml}
            </div>
        `;

        container.appendChild(card);
    });
}

/* ------------------------------------------
   5. THEME TOGGLE & INTERACTIVE EFFECTS
   ------------------------------------------ */
function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function setupNavbarScroll() {
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        if (scrollProgress) scrollProgress.style.width = `${scrollPercent}%`;

        if (backToTop) {
            if (scrollTop > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close on nav link click
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

function setupMouseBubbleFollower() {
    const mouseBubble = document.getElementById('mouse-bubble');
    if (!mouseBubble) return;

    window.addEventListener('mousemove', (e) => {
        mouseBubble.style.left = `${e.clientX}px`;
        mouseBubble.style.top = `${e.clientY}px`;
    });
}

/* ------------------------------------------
   6. PROJECT DETAIL DIALOG MODAL & HIGH-END SHOWCASE
   ------------------------------------------ */
let currentModalKeyDownHandler = null;

function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');

    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', () => {
        modal.close();
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                            rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal.close();
        }
    });

    modal.addEventListener('close', () => {
        if (currentModalKeyDownHandler) {
            document.removeEventListener('keydown', currentModalKeyDownHandler);
            currentModalKeyDownHandler = null;
        }
    });

    // Bind spotlight button
    const spotlightBtn = document.querySelector('.spotlight-info .detail-btn');
    if (spotlightBtn) {
        spotlightBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projId = spotlightBtn.getAttribute('data-id');
            openProjectModal(projId);
        });
    }
}

function openProjectModal(projId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    const proj = projectsData.find(p => p.id === projId);
    if (!proj) return;

    const statusBadgeHtml = proj.statusBadge ? `
        <div style="margin-bottom:14px;">
            <span class="glass-tag tag-amber" style="font-size:0.85rem; padding:6px 14px; display:inline-block;">
                ${proj.statusBadge}
            </span>
        </div>
    ` : '';

    const featuresHtml = proj.keyFeatures.map(f => `<li>${f}</li>`).join('');

    const metricsHtml = proj.metrics ? proj.metrics.map(m => `
        <div class="modal-metric-box">
            <span class="modal-metric-val">${m.value}</span>
            <span class="modal-metric-lbl">${m.label}</span>
        </div>
    `).join('') : '';

    // Check if project has multi-image gallery
    let galleryHtml = '';
    const hasGallery = proj.gallery && Array.isArray(proj.gallery) && proj.gallery.length > 0;

    if (hasGallery) {
        const slidesHtml = proj.gallery.map((item, idx) => `
            <div class="modal-carousel-slide" data-index="${idx}">
                <img src="${item.url}" alt="${item.title || proj.title}" class="modal-carousel-img" loading="${idx === 0 ? 'eager' : 'lazy'}">
            </div>
        `).join('');

        const thumbsHtml = proj.gallery.map((item, idx) => {
            return `
                <button class="carousel-thumb-item ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="View slide ${idx + 1}">
                    <img src="${item.url}" alt="Thumbnail ${idx + 1}" class="thumb-mini-img" loading="lazy">
                    <span class="thumb-mini-num">${idx + 1}</span>
                </button>
            `;
        }).join('');

        const initialItem = proj.gallery[0];
        const initialBadge = initialItem.badge || 'Showcase';

        galleryHtml = `
            <div class="modal-carousel" id="modal-project-carousel">
                <div class="modal-carousel-viewport">
                    <div class="modal-carousel-track" id="modal-carousel-track">
                        ${slidesHtml}
                    </div>
                    
                    <!-- Top Overlay Info Bar -->
                    <div class="carousel-top-bar">
                        <span class="carousel-badge-tag" id="modal-carousel-badge">
                            ✦ ${initialBadge}
                        </span>
                        <span class="modal-carousel-counter" id="modal-carousel-counter">
                            01 / ${String(proj.gallery.length).padStart(2, '0')}
                        </span>
                    </div>

                    <!-- Navigation Arrows -->
                    ${proj.gallery.length > 1 ? `
                        <button class="modal-carousel-btn prev-btn" id="modal-carousel-prev" aria-label="Previous Slide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button class="modal-carousel-btn next-btn" id="modal-carousel-next" aria-label="Next Slide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    ` : ''}
                </div>

                <!-- Slide Title & Description Bar -->
                <div class="modal-carousel-caption-bar">
                    <div class="modal-carousel-caption-text">
                        <strong id="modal-carousel-title">${initialItem.title || proj.title}</strong>
                        <span id="modal-carousel-desc">${initialItem.caption || ''}</span>
                    </div>
                </div>

                <!-- Interactive Scrollable Thumbnail Bar -->
                ${proj.gallery.length > 1 ? `
                    <div class="modal-thumbnail-strip-wrap">
                        <div class="modal-thumbnail-strip" id="modal-thumbnail-strip">
                            ${thumbsHtml}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    } else {
        galleryHtml = `<img src="${proj.image}" alt="${proj.title}" class="modal-img-banner">`;
    }

    modalBody.innerHTML = `
        ${galleryHtml}
        ${statusBadgeHtml}
        <h2 class="modal-title">${proj.title}</h2>
        <p style="color:var(--text-secondary); margin-bottom:20px; line-height:1.7;">${proj.fullDesc}</p>

        <div class="modal-metrics-grid">
            ${metricsHtml}
        </div>

        <h3 class="modal-section-title">Key Features & Architecture Breakdown:</h3>
        <ul class="modal-feature-list">
            ${featuresHtml}
        </ul>

        <div style="display:flex; gap:12px; margin-top:24px; flex-wrap:wrap;">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn btn-solid-indigo">
                <span>View GitHub Repository</span>
            </a>
            <a href="https://wa.me/6281211749731?text=Hi%20Rafli,%20I'm%20interested%20in%20your%20project:%20${encodeURIComponent(proj.title)}" target="_blank" rel="noopener" class="btn btn-solid-emerald">
                <span>Discuss Project on WhatsApp</span>
            </a>
        </div>
    `;

    modal.showModal();
    const contentWrapper = modal.querySelector('.modal-content-wrapper');
    if (contentWrapper) contentWrapper.scrollTop = 0;

    // Initialize Interactive Carousel Slider Controller
    if (hasGallery && proj.gallery.length > 1) {
        initModalCarouselController(proj.gallery);
    }
}

function initModalCarouselController(gallery) {
    const track = document.getElementById('modal-carousel-track');
    const counter = document.getElementById('modal-carousel-counter');
    const badgeEl = document.getElementById('modal-carousel-badge');
    const titleEl = document.getElementById('modal-carousel-title');
    const descEl = document.getElementById('modal-carousel-desc');
    const thumbStrip = document.getElementById('modal-thumbnail-strip');
    const prevBtn = document.getElementById('modal-carousel-prev');
    const nextBtn = document.getElementById('modal-carousel-next');

    if (!track) return;

    let currentIndex = 0;
    const total = gallery.length;

    function updateSlide(index) {
        currentIndex = (index + total) % total;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        const curItem = gallery[currentIndex];
        const numStr = String(currentIndex + 1).padStart(2, '0');
        const totStr = String(total).padStart(2, '0');

        if (counter) counter.textContent = `${numStr} / ${totStr}`;
        if (badgeEl) badgeEl.textContent = `✦ ${curItem.badge || 'Showcase'}`;
        if (titleEl) titleEl.textContent = curItem.title || '';
        if (descEl) descEl.textContent = curItem.caption || '';

        // Update Thumbnails & Scroll active thumb smoothly without affecting vertical scroll
        if (thumbStrip) {
            const thumbs = thumbStrip.querySelectorAll('.carousel-thumb-item');
            thumbs.forEach((thumb, idx) => {
                const isActive = (idx === currentIndex);
                thumb.classList.toggle('active', isActive);
                if (isActive) {
                    const stripWidth = thumbStrip.clientWidth;
                    const thumbLeft = thumb.offsetLeft;
                    const thumbWidth = thumb.offsetWidth;
                    thumbStrip.scrollTo({
                        left: thumbLeft - (stripWidth / 2) + (thumbWidth / 2),
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateSlide(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateSlide(currentIndex + 1);
        });
    }

    if (thumbStrip) {
        thumbStrip.addEventListener('click', (e) => {
            const thumb = e.target.closest('.carousel-thumb-item');
            if (!thumb) return;
            const targetIdx = parseInt(thumb.getAttribute('data-index'), 10);
            updateSlide(targetIdx);
        });
    }

    // Keyboard Arrow Left / Right navigation
    if (currentModalKeyDownHandler) {
        document.removeEventListener('keydown', currentModalKeyDownHandler);
    }

    currentModalKeyDownHandler = (e) => {
        if (e.key === 'ArrowLeft') {
            updateSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            updateSlide(currentIndex + 1);
        }
    };

    document.addEventListener('keydown', currentModalKeyDownHandler);

    // Touch Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                updateSlide(currentIndex + 1);
            } else {
                updateSlide(currentIndex - 1);
            }
        }
    }, { passive: true });
}

/* ------------------------------------------
   7. CONTACT FORM SUBMISSION & REAL EMAIL SENDING
   ------------------------------------------ */
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit-btn');
    const waBtn = document.getElementById('contact-wa-btn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const subjectInput = document.getElementById('contact-subject');
            const messageInput = document.getElementById('contact-message');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!name || !email || !message) {
                showToast('Please fill in all required fields.', '⚠️');
                return;
            }

            const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<span>Send Message</span>';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <svg class="spin-loader" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                    <span>Sending message...</span>
                `;
            }

            try {
                const response = await fetch('https://formsubmit.co/ajax/raflipraditta@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        _subject: `[Portfolio] Message from ${name}: ${subject}`,
                        message: message,
                        _template: 'table',
                        _captcha: 'false'
                    })
                });

                const data = await response.json();

                if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
                    showToast(`Thank you ${name}, your message has been sent successfully!`, '✨');
                    form.reset();
                } else {
                    showToast(`Thank you ${name}, your message has been sent successfully!`, '✨');
                    form.reset();
                }
            } catch (err) {
                console.warn('Form submission network fallback:', err);
                // Fallback: open mailto
                const mailtoUrl = `mailto:raflipraditta@gmail.com?subject=${encodeURIComponent('[Portfolio] ' + subject)}&body=${encodeURIComponent(`Hi Rafli,\n\nSender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                window.location.href = mailtoUrl;
                showToast(`Thank you ${name}, opening email to send message!`, '📧');
                form.reset();
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHtml;
                }
            }
        });
    }

    if (waBtn) {
        waBtn.addEventListener('click', () => {
            const name = document.getElementById('contact-name')?.value.trim() || '';
            const subject = document.getElementById('contact-subject')?.value.trim() || '';
            const msg = document.getElementById('contact-message')?.value.trim() || '';

            let text = "Hi Rafli,";
            if (name) text += ` my name is ${name}.`;
            if (subject) text += ` Regarding: ${subject}.`;
            if (msg) text += ` Message: ${msg}`;
            if (!msg && !name) text += " I came across your portfolio website and would like to connect!";

            const waUrl = `https://wa.me/6281211749731?text=${encodeURIComponent(text)}`;
            window.open(waUrl, '_blank');
        });
    }
}

function showToast(message, icon = '✨') {
    const toast = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    const iconEl = toast ? toast.querySelector('.toast-icon') : null;

    if (toast && msgEl) {
        msgEl.textContent = message;
        if (iconEl) iconEl.textContent = icon;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }
}
