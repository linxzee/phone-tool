/**
 * 统一的主题管理模块
 * 解决多个JavaScript文件中的主题切换代码重复和冲突问题
 */

class ThemeManager {
    constructor() {
        this.htmlElement = document.documentElement;
        this.currentTheme = null;
        this.observers = new Set();
        
        this.init();
    }

    /**
     * 初始化主题管理器
     */
    init() {
        this.applyInitialTheme();
        this.setupEventListeners();
        this.setupSystemThemeListener();
    }

    /**
     * 应用初始主题
     */
    applyInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const autoThemeEnabled = localStorage.getItem('autoThemeEnabled') !== 'false';

        let themeToApply;

        if (autoThemeEnabled) {
            themeToApply = this.getAutoThemeBasedOnTime();
        } else if (savedTheme) {
            themeToApply = savedTheme;
        } else {
            themeToApply = prefersDark ? 'dark' : this.getAutoThemeBasedOnTime();
        }

        this.applyTheme(themeToApply, true);
    }

    /**
     * 根据时间自动选择主题
     * @returns {string} 主题名称
     */
    getAutoThemeBasedOnTime() {
        const hour = new Date().getHours();
        // 18:00 到 6:00 为夜间模式
        return (hour >= 18 || hour < 6) ? 'dark' : 'light';
    }

    /**
     * 应用主题
     * @param {string} theme - 主题名称 ('light' 或 'dark')
     * @param {boolean} isInitial - 是否为初始设置
     */
    applyTheme(theme, isInitial = false) {
        if (this.currentTheme === theme) return;

        this.currentTheme = theme;
        
        // 使用 data-theme 属性而不是 class
        this.htmlElement.setAttribute('data-theme', theme);
        
        // 保存到 localStorage
        localStorage.setItem('theme', theme);
        
        // 如果是手动切换主题，禁用自动主题
        if (!isInitial) {
            localStorage.setItem('autoThemeEnabled', 'false');
        }

        // 通知所有观察者
        this.notifyObservers(theme);
    }

    /**
     * 切换主题
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    /**
     * 设置事件监听器
     */
    setupEventListeners() {
        // 全局主题切换按钮点击事件
        document.addEventListener('click', (event) => {
            if (event.target.closest('#theme-toggle-btn') || 
                event.target.closest('#theme-toggle-btn-mobile')) {
                this.toggleTheme();
            }
        });
    }

    /**
     * 设置系统主题变化监听
     */
    setupSystemThemeListener() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            const autoThemeEnabled = localStorage.getItem('autoThemeEnabled') !== 'false';
            if (autoThemeEnabled && !localStorage.getItem('theme')) {
                this.applyTheme(e.matches ? 'dark' : 'light', true);
            }
        });
    }

    /**
     * 添加主题变化观察者
     * @param {Function} callback - 回调函数
     */
    addObserver(callback) {
        this.observers.add(callback);
    }

    /**
     * 移除主题变化观察者
     * @param {Function} callback - 回调函数
     */
    removeObserver(callback) {
        this.observers.delete(callback);
    }

    /**
     * 通知所有观察者
     * @param {string} theme - 当前主题
     */
    notifyObservers(theme) {
        this.observers.forEach(callback => {
            try {
                callback(theme);
            } catch (error) {
                console.error('Theme observer error:', error);
            }
        });
    }

    /**
     * 获取当前主题
     * @returns {string} 当前主题
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * 启用自动主题切换
     */
    enableAutoTheme() {
        localStorage.setItem('autoThemeEnabled', 'true');
        this.applyInitialTheme();
    }

    /**
     * 禁用自动主题切换
     */
    disableAutoTheme() {
        localStorage.setItem('autoThemeEnabled', 'false');
    }

    /**
     * 检查是否启用自动主题
     * @returns {boolean} 是否启用自动主题
     */
    isAutoThemeEnabled() {
        return localStorage.getItem('autoThemeEnabled') !== 'false';
    }
}

// 创建全局主题管理器实例
window.themeManager = new ThemeManager();

// 立即执行函数设置初始主题，避免页面闪烁
(function() {
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const autoThemeEnabled = localStorage.getItem('autoThemeEnabled') !== 'false';

    let initialTheme;

    if (autoThemeEnabled) {
        const hour = new Date().getHours();
        initialTheme = (hour >= 18 || hour < 6) ? 'dark' : 'light';
    } else if (savedTheme) {
        initialTheme = savedTheme;
    } else {
        initialTheme = prefersDark ? 'dark' : 'light';
    }

    htmlElement.setAttribute('data-theme', initialTheme);
})();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}