// 立即执行函数，用于设置初始主题，避免页面加载时闪烁
(function() {
    const htmlElement = document.documentElement;
    
    // Safe localStorage access with error handling
    const safeLocalStorage = {
        getItem: (key) => {
            try {
                return localStorage.getItem(key);
            } catch (error) {
                console.warn('localStorage access failed:', error.message);
                return null;
            }
        }
    };
    
    const currentTheme = safeLocalStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
        htmlElement.classList.add('dark');
    }
})();

// DOM加载完成后再绑定事件监听器
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;

    // Safe localStorage access with error handling
    const safeLocalStorage = {
        setItem: (key, value) => {
            try {
                localStorage.setItem(key, value);
                return true;
            } catch (error) {
                console.warn('localStorage set failed:', error.message);
                return false;
            }
        }
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const isDark = htmlElement.classList.contains('dark');
            safeLocalStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});
