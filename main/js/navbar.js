const initNavbar = () => {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const themeToggleButtonMobile = document.getElementById('theme-toggle-btn-mobile');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const htmlElement = document.documentElement;

    // Function to apply the theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    };

    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Theme toggle function
    const toggleTheme = () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Toggle theme on desktop button click
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    // Toggle theme on mobile button click
    if (themeToggleButtonMobile) {
        themeToggleButtonMobile.addEventListener('click', toggleTheme);
    }

    // Mobile menu toggle functionality
    if (mobileMenuToggle && mobileMenu) {
        let isMenuOpen = false;

        const toggleMobileMenu = () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                mobileMenuToggle.classList.add('active');
                mobileMenu.classList.add('active');
                // 防止页面滚动
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                // 恢复页面滚动
                document.body.style.overflow = '';
            }
        };

        // 点击汉堡菜单按钮
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);

        // 点击菜单项后关闭菜单
        const mobileMenuItems = mobileMenu.querySelectorAll('.mobile-menu-item');
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });

        // 点击菜单外部区域关闭菜单
        document.addEventListener('click', (event) => {
            if (isMenuOpen &&
                !mobileMenuToggle.contains(event.target) &&
                !mobileMenu.contains(event.target)) {
                toggleMobileMenu();
            }
        });

        // ESC键关闭菜单
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                toggleMobileMenu();
            }
        });

        // 窗口大小改变时关闭移动菜单
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                toggleMobileMenu();
            }
        });
    }
};