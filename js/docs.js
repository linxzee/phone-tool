// 立即执行函数 (IIFE) 用于设置初始主题，防止页面加载时闪烁
(() => {
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
        },
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
    
    // 定义应用主题的函数
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
        // 将用户的选择保存到 localStorage
        safeLocalStorage.setItem('theme', theme);
    };

    // 获取保存的主题或根据系统偏好设置
    const savedTheme = safeLocalStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light'); // 默认浅色主题
    }
})();

// DOM完全加载后，再为按钮绑定点击事件
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
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

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // 切换 'dark' 类
            const isDark = htmlElement.classList.toggle('dark');
            // 将新的主题状态保存到 localStorage
            safeLocalStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});
