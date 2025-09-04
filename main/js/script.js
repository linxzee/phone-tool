// 立即执行函数，用于设置初始主题，避免页面加载时闪烁
(function() {
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
    }
})();

// DOM加载完成后再绑定事件监听器
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            const isDark = newTheme === 'dark';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});