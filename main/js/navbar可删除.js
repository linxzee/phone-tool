const initNavbar = () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // 主题切换功能已由 theme-manager.js 统一处理
    // 这里只处理移动端菜单功能

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