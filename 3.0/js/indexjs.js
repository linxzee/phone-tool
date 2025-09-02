// 主题切换功能
function initThemeToggle() {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;

    if (!themeToggleButton) {
        console.warn('主题切换按钮未找到，将在导航栏加载后重试');
        return;
    }

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

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// 初始化主题切换
document.addEventListener('DOMContentLoaded', () => {
    // 立即尝试初始化主题切换
    initThemeToggle();
    
    // 监听导航栏加载完成事件（如果有的话）
    // 导航栏加载完成后会重新调用主题切换初始化

    // 添加搜索功能
    const searchInput = document.getElementById('nav-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            filterFeatures(searchTerm);
        });
    }

    // 添加键盘快捷键支持
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K 聚焦搜索框
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('nav-search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Esc 清除搜索
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('nav-search-input');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.value = '';
                filterFeatures('');
            }
        }
    });
});

// 功能卡片过滤
function filterFeatures(searchTerm) {
    const featureCards = document.querySelectorAll('.feature-card');
    
    if (!searchTerm) {
        // 显示所有卡片
        featureCards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }

    // 过滤卡片
    featureCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}