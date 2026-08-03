/* ============================================================
   الموقع الشخصي للمبرمج - JavaScript
   جميع الحقوق محفوظة © 2025
   ============================================================ */

// ====================================================================
// 📦 البيانات - قم بتعديلها حسب بياناتك
// ====================================================================
 
// --- المهارات ---
const skillsData = [
    { name: 'HTML & CSS', icon: 'fab fa-html5', desc: 'تطوير واجهات متجاوبة', level: 95 },
    { name: 'JavaScript', icon: 'fab fa-js', desc: 'تطوير تفاعلي مع ES6+', level: 90 },
    { name: 'React.js', icon: 'fab fa-react', desc: 'تطوير تطبيقات SPA', level: 85 },
    { name: 'Node.js', icon: 'fab fa-node-js', desc: 'تطوير الخلفيات (Backend)', level: 80 },
    { name: 'Python', icon: 'fab fa-python', desc: 'تطوير وذكاء اصطناعي', level: 75 },
    { name: 'Git & GitHub', icon: 'fab fa-git-alt', desc: 'إدارة الإصدارات', level: 90 },
    { name: 'MongoDB', icon: 'fas fa-database', desc: 'قواعد بيانات NoSQL', level: 75 },
    { name: 'TypeScript', icon: 'fas fa-code', desc: 'تطوير آمن بالأنواع', level: 70 },
    { name: 'Sass/SCSS', icon: 'fab fa-sass', desc: 'CSS بقوة إضافية', level: 80 },
    { name: 'Docker', icon: 'fab fa-docker', desc: 'حاويات ونشر', level: 65 },
    { name: 'Firebase', icon: 'fas fa-fire', desc: 'خدمات سحابية', level: 70 },
    { name: 'REST API', icon: 'fas fa-plug', desc: 'بناء وتصميم APIs', level: 80 },
];

// --- المشاريع ---
const projectsData = [
    {
        title: 'منصة تعليمية',
        category: 'web',
        categoryLabel: 'تطبيقات ويب',
        desc: 'منصة تعليمية متكاملة تسمح للمدرسين بنشر الدورات والطلاب بالتسجيل ومتابعة المحتوى.',
        tech: ['React', 'Node.js', 'MongoDB'],
        icon: 'fas fa-graduation-cap',
        image: 'imges/1598-1.jpg',
        github: 'https://github.com/',
        live: 'https://www.taalam-platform.com/',
    },
    {
        title: 'تطبيق إدارة المهام',
        category: 'mobile',
        categoryLabel: 'تطبيقات موبايل',
        desc: 'تطبيق موبايل لإدارة المهام اليومية مع إشعارات وتذكيرات وتقارير إحصائية.',
        tech: ['Flutter', 'Firebase'],
        icon: 'fas fa-tasks',
        image: 'Carudsimges/images.jpg',
        github: 'https://github.com/',
        live: 'https://www.odoo.com/ar?network=o&utm_source=bing&utm_medium=cpc&utm_campaign=MEA-Low-AR-ERP&utm_term=%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85utm_gclid=&msclkid=e47d69c5a8131ada4ded03a96c198877',
    },
    {
        title: 'نظام نقاط البيع (POS)',
        category: 'web',
        categoryLabel: 'تطبيقات ويب',
        desc: 'نظام متكامل لإدارة المبيعات والمخزون والفواتير مع واجهة مستخدم سهلة.',
        tech: ['Vue.js', 'Express', 'MySQL'],
        icon: 'fas fa-cash-register',
        image: 'imges/images(3).jpg',
        github: 'https://github.com/',
        live: 'https://sabbar.com/blog/point-of-sale-system',
    },
    {
        title: 'بوت ذكاء اصطناعي',
        category: 'ai',
        categoryLabel: 'ذكاء اصطناعي',
        desc: 'بوت محادثة ذكي يستخدم تقنيات NLP للإجابة عن الأسئلة وتقديم المساعدة.',
        tech: ['Python', 'TensorFlow', 'FastAPI'],
        icon: 'fas fa-robot',
        image: 'imges/OIP.webp',
        github: 'https://github.com/',
        live: 'https://gemini.google.com/?hl=ar',
    },
    {
        title: 'لوحة تحكم تحليلات',
        category: 'web',
        categoryLabel: 'تطبيقات ويب',
        desc: 'لوحة تحكم لعرض وتحليل البيانات باستخدام رسوم بيانية وتقارير لحظية.',
        tech: ['React', 'D3.js', 'Node.js'],
        icon: 'fas fa-chart-bar',
        image: 'imges/download.webp',
        github: 'https://github.com/',
        live: 'https://www.chatdiagram.com/ar/template/business-analytics-dashboard-structure',
    },
    {
        title: 'API للتجارة الإلكترونية',
        category: 'backend',
        categoryLabel: 'الخلفية (Backend)',
        desc: 'REST API متكامل للتجارة الإلكترونية مع دعم المصادقة والدفع وإدارة المنتجات.',
        tech: ['Node.js', 'Express', 'PostgreSQL'],
        icon: 'fas fa-server',
        image: 'Carudsimges/Pro APL.webp',
        github: 'https://github.com/',
        live: 'https://www.namaait.com/ar/articles/126/%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA',
    },
];

// --- الفيديوهات ---
const videosData = [
    {
        title: 'مقدمة في React.js | دورة تعلم React من الصفر',
        desc: 'شرح مفاهيم React الأساسية: المكونات، الـ State، الـ Props، ودورة حياة المكونات.',
        duration: '45:30',
        views: '15,234',
        date: 'منذ 3 أيام',
        image: 'vaduo-imges/vaduo-react.webp',
        link: 'https://www.youtube.com/watch?v=LgB3j2y1b-4&list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
    },
    {
        title: 'بناء API كامل بـ Node.js و Express',
        desc: 'خطوة بخطوة: بناء REST API متكامل مع المصادقة وقاعدة البيانات.',
        duration: '52:15',
        views: '12,890',
        date: 'منذ أسبوع',
        image: 'imges/video-nodejs.jpg',
        link: 'https://www.youtube.com/watch?v=ZOxWsjHIZhs&list=PLNFDrRZdysFx0Mc0z6tHHh-0FfZDoGaS7',
    },
    {
        title: 'CSS Grid vs Flexbox | متى تستخدم كل منهما؟',
        desc: 'مقارنة شاملة بين CSS Grid و Flexbox مع أمثلة عملية وتطبيقات حقيقية.',
        duration: '38:45',
        views: '20,567',
        date: 'منذ أسبوعين',
        image: 'imges/video-css.jpg',
        link: 'https://www.youtube.com/watch?v=aEj6k-gi9-s',
    },
    {
        title: 'مشروع عملي: تطبيق الطقس باستخدام API',
        desc: 'بناء تطبيق للطقس متكامل باستخدام JavaScript و Fetch API مع واجهة جميلة.',
        duration: '1:05:20',
        views: '18,432',
        date: 'منذ 3 أسابيع',
        image: 'imges/video-weather.jpg',
        link: 'https://www.youtube.com/watch?v=Q6b6CWY5ZYY',
    },
    {
        title: 'مقدمة في TypeScript | لماذا يجب أن تتعلمه؟',
        desc: 'تعلم TypeScript من الصفر مع مقارنة بـ JavaScript وفوائد استخدامه في المشاريع الكبيرة.',
        duration: '55:10',
        views: '9,876',
        date: 'منذ شهر',
        image: 'imges/video-typescript.jpg',
        link: 'https://www.youtube.com/watch?v=yUndnE-2osg&list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ',
    },
    {
        title: 'كيف تنشر تطبيقك على الإنترنت؟ | دليل شامل للنشر',
        desc: 'شرح طرق النشر المختلفة: Vercel, Netlify, Heroku, و AWS مع مقارنة بينها.',
        duration: '48:00',
        views: '14,321',
        date: 'منذ شهر',
        image: 'imges/video-deploy.jpg',
        link: 'https://www.youtube.com/watch?v=3bJ5OlbiXYU',
    },
];

// --- الكورسات ---
const coursesData = [
    {
        title: 'دورة HTML & CSS الشاملة',
        desc: 'تعلم بناء مواقع ويب احترافية من الصفر باستخدام HTML5 و CSS3. تشمل Flexbox, Grid, Animations والمزيد.',
        icon: 'fab fa-html5',
        lessons: 45,
        hours: 20,
        level: 'مبتدئ',
        link: 'https://www.youtube.com/watch?v=Dv39fDYei9A&list=PLknwEmKsW8OtLRQPTLms79499meY2D6ij',
    },
    {
        title: 'دورة JavaScript المتكاملة',
        desc: 'من الصفر إلى الاحتراف في JavaScript. تغطي ES6+, DOM, Async, OOP والمفاهيم المتقدمة.',
        icon: 'fab fa-js',
        lessons: 60,
        hours: 30,
        level: 'متوسط',
        link: 'https://www.youtube.com/watch?v=PWuTLTFMtYw&list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE',
    },
    {
        title: 'دورة React.js الحديثة',
        desc: 'بناء تطبيقات ويب تفاعلية مع React.js, Hooks, Context, Redux, و Next.js.',
        icon: 'fab fa-react',
        lessons: 50,
        hours: 25,
        level: 'متقدم',
        link: 'https://www.youtube.com/watch?v=ihRRf3EjTV8&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS',
    },
    {
        title: 'دورة Node.js و Express',
        desc: 'بناء خلفيات قوية لتطبيقات الويب باستخدام Node.js و Express مع MongoDB.',
        icon: 'fab fa-node-js',
        lessons: 40,
        hours: 18,
        level: 'متوسط',
        link: 'https://www.youtube.com/watch?v=LG7ff9TVWjM',
    },
];

// ====================================================================
// ⚙️ الوظائف الرئيسية
// ====================================================================

// --- إنشاء بطاقات المهارات ---
function renderSkills() {
    const grid = document.querySelector('.skills-grid');
    grid.innerHTML = skillsData.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h4>${skill.name}</h4>
            <p>${skill.desc}</p>
            <div class="skill-level">
                <div class="skill-progress" data-level="${skill.level}"></div>
            </div>
        </div>
    `).join('');
}

// --- إنشاء بطاقات المشاريع ---
function renderProjects(projects = projectsData) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projects.map(project => {
        // إذا كان المشروع يحتوي على صورة، استخدمها كخلفية، وإلا استخدم التدرج اللوني
        const imageStyle = project.image
            ? `style="background-image: url('${project.image}')"`
            : `style="background: linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()})"`;
        return `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image" ${imageStyle}>
                ${project.image ? '' : `<i class="${project.icon}"></i>`}
                <div class="project-overlay">
                    <a href="${project.github}" target="_blank" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="${project.live}" target="_blank" title="معاينة حية">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
            <div class="project-info">
                <span class="project-category">${project.categoryLabel}</span>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// --- إنشاء بطاقات الفيديوهات ---
function renderVideos() {
    const grid = document.getElementById('videosGrid');
    grid.innerHTML = videosData.map(video => {
        // إذا كان الفيديو يحتوي على صورة، استخدمها كخلفية، وإلا استخدم التدرج اللوني
        const thumbnailStyle = video.image
            ? `style="background-image: url('${video.image}'); background-size: cover; background-position: center;"`
            : `style="background: linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()})"`;
        return `
        <div class="video-card" onclick="window.open('${video.link}', '_blank')">
            <div class="video-thumbnail" ${thumbnailStyle}>
                <i class="fas fa-play" style="font-size: 2.5rem; color: rgba(255,255,255,0.2);"></i>
                <div class="play-btn">
                    <i class="fas fa-play"></i>
                </div>
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.desc}</p>
                <div class="video-meta">
                    <span><i class="fas fa-eye"></i> ${video.views} مشاهدة</span>
                    <span><i class="fas fa-calendar-alt"></i> ${video.date}</span>
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// --- إنشاء بطاقات الكورسات ---
function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = coursesData.map(course => `
        <div class="course-card">
            <div class="course-icon">
                <i class="${course.icon}"></i>
            </div>
            <h3>${course.title}</h3>
            <p>${course.desc}</p>
            <div class="course-meta">
                <span><i class="fas fa-video"></i> ${course.lessons} درس</span>
                <span><i class="fas fa-clock"></i> ${course.hours} ساعة</span>
                <span><i class="fas fa-signal"></i> ${course.level}</span>
            </div>
            <a href="${course.link}" class="course-link" target="_blank">
                ابدأ التعلم الآن
                <i class="fas fa-arrow-left"></i>
            </a>
        </div>
    `).join('');
}

// --- توليد ألوان عشوائية جميلة ---
function getRandomColor() {
    const colors = ['#6c63ff', '#f72585', '#4361ee', '#4cc9f0', '#7209b7', '#f77f00', '#06d6a0', '#e63946'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// ====================================================================
// 🎯 التأثيرات والتفاعلات
// ====================================================================

// --- تأثير الكتابة (Typing Effect) ---
function initTypingEffect() {
const phrases = ['Web Code', 'Software Engineer', 'Web Developer', 'Content Creator'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    type();
}

// --- تفعيل مهارات التقدم المتحركة (Animated Progress Bars) ---
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
}

// --- تفعيل عداد الأرقام (Animated Counter) ---
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 30; // مدة الرسوم المتحركة
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString() + '+';
            }
        };
        
        updateCounter();
    });
}

// --- تصفية المشاريع ---
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // تحديث حالة الأزرار
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // تصفية المشاريع
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// --- قائمة المزيد للتعلم (Learn Dropdown) ---
function initLearnDropdown() {
    const dropdown = document.getElementById('learnDropdown');
    const dropdownBtn = document.getElementById('learnDropdownBtn');
    const dropdownMenu = document.getElementById('learnDropdownMenu');

    if (!dropdown || !dropdownBtn || !dropdownMenu) return;

    // فتح/إغلاق القائمة عند الضغط على الزر
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    // إغلاق القائمة عند الضغط على أي رابط داخلها
    dropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            dropdown.classList.remove('open');
        });
    });

    // إغلاق القائمة عند الضغط في أي مكان آخر
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });

    // إغلاق القائمة عند الضغط على زر Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdown.classList.remove('open');
        }
    });
}

// --- القائمة المتنقلة (Mobile Menu) ---
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // إغلاق القائمة عند الضغط على رابط
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// --- ظهور الأقسام عند التمرير (Scroll Reveal) ---
function initScrollReveal() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// --- شريط التنقل المتحرك (Navbar Scroll Effect) ---
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const scrollBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // زر العودة للأعلى
        if (window.scrollY > 500) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
}

// --- روابط التنقل النشطة (Active Nav Link) ---
function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// --- نموذج التواصل (Contact Form) - إرسال عبر FormSubmit (مجاني، لا يحتاج تسجيل) ---
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    // تعيين رابط العودة بعد الإرسال
    const nextInput = form.querySelector('input[name="_next"]');
    if (nextInput) {
        nextInput.value = window.location.origin + window.location.pathname + '?success=true';
    }
    
    // ─── التحقق من وجود رسالة نجاح من FormSubmit ─────────────
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const formMessage = document.createElement('div');
        formMessage.className = 'form-message form-message-success';
        formMessage.innerHTML = '✅ تم إرسال رسالتك بنجاح! سأرد عليك في أقرب وقت ممكن. شكراً لتواصلك 🙏';
        formMessage.style.cssText = `
            padding: 12px 16px;
            border-radius: 12px;
            margin-bottom: 20px;
            font-size: 0.95rem;
            font-weight: 500;
            text-align: center;
            background: rgba(6, 214, 160, 0.1);
            color: #06d6a0;
            border: 1px solid rgba(6, 214, 160, 0.3);
        `;
        form.insertBefore(formMessage, form.firstChild);
        
        // إزالة parameter من URL بدون إعادة تحميل
        window.history.replaceState({}, document.title, window.location.pathname);
        
        // إزالة الرسالة بعد 6 ثوان
        setTimeout(() => {
            formMessage.style.opacity = '0';
            formMessage.style.transition = 'opacity 0.5s ease';
            setTimeout(() => formMessage.remove(), 500);
        }, 6000);
    }
    
    // ─── التحقق من صحة البيانات قبل الإرسال ──────────────────
    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // إزالة رسائل الخطأ السابقة
        const oldMsg = form.querySelector('.form-message');
        if (oldMsg && oldMsg.classList.contains('form-message-error')) {
            oldMsg.remove();
        }
        
        if (!name) {
            e.preventDefault();
            showFormMessage(form, '❌ يرجى إدخال الاسم', 'error');
            return;
        }
        if (!email) {
            e.preventDefault();
            showFormMessage(form, '❌ يرجى إدخال البريد الإلكتروني', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            e.preventDefault();
            showFormMessage(form, '❌ البريد الإلكتروني غير صالح', 'error');
            return;
        }
        if (!message || message.length < 10) {
            e.preventDefault();
            showFormMessage(form, '❌ الرسالة قصيرة جداً (10 أحرف على الأقل)', 'error');
            return;
        }
        
        // ─── إظهار حالة الإرسال (FormSubmit سيعيد التوجيه) ──
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;
        
        // سيتم إعادة التوجيه إلى _next URL بعد النجاح
        // ملاحظة: FormSubmit سيعيد التوجيه تلقائياً بعد الإرسال
    });
}

// ─── دالة التحقق من صحة البريد الإلكتروني ──────────────────
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ─── دالة عرض الرسائل في النموذج ────────────────────────────
function showFormMessage(form, message, type) {
    // إزالة أي رسالة سابقة
    const existingMsg = form.querySelector('.form-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    // إنشاء عنصر الرسالة
    const msgDiv = document.createElement('div');
    msgDiv.className = `form-message form-message-${type}`;
    msgDiv.innerHTML = message;
    msgDiv.style.cssText = `
        padding: 12px 16px;
        border-radius: 12px;
        margin-bottom: 20px;
        font-size: 0.95rem;
        font-weight: 500;
        text-align: center;
        animation: fadeInUp 0.3s ease;
        ${
            type === 'success'
                ? 'background: rgba(6, 214, 160, 0.1); color: #06d6a0; border: 1px solid rgba(6, 214, 160, 0.3);'
                : 'background: rgba(230, 57, 70, 0.1); color: #e63946; border: 1px solid rgba(230, 57, 70, 0.3);'
        }
    `;
    
    // إدراج الرسالة في بداية النموذج
    form.insertBefore(msgDiv, form.firstChild);
    
    // إزالة الرسالة تلقائياً بعد 6 ثوان
    setTimeout(() => {
        if (msgDiv.parentNode) {
            msgDiv.style.opacity = '0';
            msgDiv.style.transition = 'opacity 0.5s ease';
            setTimeout(() => msgDiv.remove(), 500);
        }
    }, 6000);
}

// --- التبديل بين الوضع الليلي والنهاري (Theme Toggle) ---
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = toggleBtn.querySelector('i');
    
    // التحقق من الوضع المحفوظ
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        
        // تأثير الدوران
        toggleBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => { toggleBtn.style.transform = ''; }, 300);
    });
}

// --- زر العودة للأعلى ---
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ====================================================================
// 🚀 تشغيل كل شيء عند تحميل الصفحة
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Rendering
    renderSkills();
    renderProjects();
    renderVideos();
    renderCourses();
    
// Interactions
    initTypingEffect();
    initLearnDropdown();
    initMobileMenu();
    initNavbarScroll();
    initActiveNav();
    initProjectFilter();
    initScrollReveal();
initContactForm();
    initThemeToggle();
    initScrollToTop();
    
    // Trigger animations when skills section comes into view
    const skillsSection = document.querySelector('.skills');
    const aboutSection = document.querySelector('.about');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                if (entry.target.classList.contains('about')) {
                    animateCounters();
                }
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) observer.observe(skillsSection);
    if (aboutSection) observer.observe(aboutSection);
    
    console.log('✅ الموقع الشخصي يعمل بنجاح!');
});

