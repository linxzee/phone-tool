const themeToggleBtn = document.getElementById('theme-toggle-btn');
const htmlElement = document.documentElement;

// 优先从 localStorage 获取主题，其次检查系统偏好
const currentTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 初始化主题
if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
    htmlElement.classList.add('dark');
}

// 监听按钮点击事件
themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    // 将新主题状态存入 localStorage
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
