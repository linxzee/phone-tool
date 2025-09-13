/**
 * 导航栏初始化函数
 * 包含主题切换和移动端菜单功能
 */
const initNavbar = () => {
    // 获取DOM元素
    const elements = {
        themeToggleBtn: document.getElementById('theme-toggle-btn'),
        themeToggleBtnMobile: document.getElementById('theme-toggle-btn-mobile'),
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        mobileMenu: document.getElementById('mobile-menu'),
        htmlElement: document.documentElement
    };

    // 主题管理功能
    const themeManager = {
        /**
         * 应用主题
         * @param {string} theme - 'dark' 或 'light'
         */
        applyTheme: (theme) => {
            elements.htmlElement.setAttribute('data-theme', theme);
        },

        /**
         * 根据时间自动切换主题 (18:00-06:00为暗色模式)
         */
        autoSwitchTheme: () => {
            const hour = new Date().getHours();
            const isNight = hour >= 18 || hour < 6;
            const currentTheme = elements.htmlElement.getAttribute('data-theme');
            
            if ((isNight && currentTheme !== 'dark') || (!isNight && currentTheme !== 'light')) {
                const newTheme = isNight ? 'dark' : 'light';
                themeManager.applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            }
        },

        /**
         * 切换主题
         */
        toggleTheme: () => {
            const currentTheme = elements.htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            themeManager.applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            localStorage.setItem('manualThemeOverride', 'true'); // 手动切换时标记为手动覆盖
        }
    };

    // 移动菜单管理
    const mobileMenuManager = {
        isMenuOpen: false,

        /**
         * 切换移动菜单状态
         */
        toggleMenu: () => {
            mobileMenuManager.isMenuOpen = !mobileMenuManager.isMenuOpen;
            
            elements.mobileMenuToggle.classList.toggle('active', mobileMenuManager.isMenuOpen);
            elements.mobileMenu.classList.toggle('active', mobileMenuManager.isMenuOpen);
            document.body.style.overflow = mobileMenuManager.isMenuOpen ? 'hidden' : '';
        },

        /**
         * 关闭菜单
         */
        closeMenu: () => {
            if (mobileMenuManager.isMenuOpen) {
                mobileMenuManager.toggleMenu();
            }
        }
    };

    // 初始化主题
    const initTheme = () => {
        console.log('navbar.js: initTheme() called');
        // 设置 manualThemeOverride 的初始值（如果不存在）
        if (localStorage.getItem('manualThemeOverride') === null) {
            localStorage.setItem('manualThemeOverride', 'false');
        }
        
        const manualThemeOverride = localStorage.getItem('manualThemeOverride') === 'true';
        const savedTheme = localStorage.getItem('theme');

        if (manualThemeOverride && savedTheme) {
            themeManager.applyTheme(savedTheme);
        } else {
            themeManager.autoSwitchTheme();
        }

        // 每小时检查一次自动主题切换
        setInterval(() => {
            if (localStorage.getItem('manualThemeOverride') !== 'true') {
                themeManager.autoSwitchTheme();
            }
        }, 3600000);
    };

    // 绑定事件
    const bindEvents = () => {
        // 主题切换按钮
        if (elements.themeToggleBtn) {
            elements.themeToggleBtn.addEventListener('click', themeManager.toggleTheme);
        }
        if (elements.themeToggleBtnMobile) {
            elements.themeToggleBtnMobile.addEventListener('click', themeManager.toggleTheme);
        }

        // 移动菜单功能
        if (elements.mobileMenuToggle && elements.mobileMenu) {
            // 汉堡菜单点击
            elements.mobileMenuToggle.addEventListener('click', mobileMenuManager.toggleMenu);

            // 菜单项点击关闭
            elements.mobileMenu.querySelectorAll('.mobile-menu-item').forEach(item => {
                item.addEventListener('click', mobileMenuManager.closeMenu);
            });

            // 点击外部关闭
            document.addEventListener('click', (event) => {
                if (mobileMenuManager.isMenuOpen &&
                    !elements.mobileMenuToggle.contains(event.target) &&
                    !elements.mobileMenu.contains(event.target)) {
                    mobileMenuManager.closeMenu();
                }
            });

            // ESC键关闭
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && mobileMenuManager.isMenuOpen) {
                    mobileMenuManager.closeMenu();
                }
            });

            // 窗口大小改变时关闭
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768 && mobileMenuManager.isMenuOpen) {
                    mobileMenuManager.closeMenu();
                }
            });
        }
    };

    // 初始化
    initTheme();
    bindEvents();
};