/**
 * 通用工具函数库
 * 包含主题管理、代码复制等通用功能
 */

// ==========================================================================
// 1. 主题管理功能
// ==========================================================================

/**
 * 初始化主题设置
 * 在页面加载时立即执行，避免主题闪烁
 * 注意：这个函数现在只处理初始主题设置，自动切换功能由 navbar.js 处理
 */
(function initThemeImmediately() {
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('utils.js: initThemeImmediately - currentTheme:', currentTheme, 'prefersDark:', prefersDark);

    if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        console.log('utils.js: initThemeImmediately - Setting theme to dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        console.log('utils.js: initThemeImmediately - Setting theme to light');
    }
})();

/**
 * 主题管理器
 */
const themeManager = {
    /**
     * 初始化主题功能
     */
    init: function() {
        console.log('utils.js: themeManager.init() called');
        this.setupThemeToggle();
    },

    /**
     * 设置主题切换按钮
     */
    setupThemeToggle: function() {
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
    },

    /**
     * 应用主题
     * @param {string} theme - 'dark' 或 'light'
     */
    applyTheme: function(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    },

    /**
     * 切换主题
     */
    toggleTheme: function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
};

// ==========================================================================
// 2. 代码复制功能
// ==========================================================================

/**
 * 代码复制管理器
 */
const codeCopyManager = {
    /**
     * 初始化代码复制功能
     */
    init: function() {
        this.addCopyButtons();
        this.setupMutationObserver();
    },

    /**
     * 为所有代码块添加复制按钮
     */
    addCopyButtons: function() {
        const codeBlocks = document.querySelectorAll('.code-block');
        
        codeBlocks.forEach(block => {
            // 检查是否已经添加了复制按钮
            if (block.querySelector('.copy-btn')) {
                return;
            }
            
            // 确保元素是可见的代码块
            const computedStyle = window.getComputedStyle(block);
            if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
                return;
            }
            
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.textContent = '复制';
            copyButton.setAttribute('aria-label', '复制代码');
            
            // 获取代码内容
            const codeContent = block.textContent.trim();
            
            copyButton.addEventListener('click', () => {
                this.copyToClipboard(codeContent, copyButton);
            });
            
            block.appendChild(copyButton);
        });
    },

    /**
     * 复制文本到剪贴板
     * @param {string} text - 要复制的文本
     * @param {HTMLElement} button - 复制按钮元素
     */
    copyToClipboard: function(text, button) {
        navigator.clipboard.writeText(text).then(() => {
            // 显示复制成功状态
            const originalText = button.textContent;
            button.textContent = '已复制!';
            button.classList.add('copied');
            
            // 2秒后恢复原始状态
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('复制失败:', err);
            button.textContent = '复制失败';
            
            // 2秒后恢复原始状态
            setTimeout(() => {
                button.textContent = '复制';
            }, 2000);
        });
    },

    /**
     * 设置突变观察器监听动态内容变化
     */
    setupMutationObserver: function() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    this.addCopyButtons();
                }
            });
        });
        
        // 观察整个文档的变化
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
};

// ==========================================================================
// 3. 通用工具函数
// ==========================================================================

/**
 * 格式化数字（添加千位分隔符）
 * @param {number} num - 要格式化的数字
 * @returns {string} 格式化后的字符串
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 节流函数
 * @param {Function} func - 要节流的函数
 * @param {number} limit - 时间限制（毫秒）
 * @returns {Function} 节流后的函数
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 安全获取元素
 * @param {string} selector - CSS选择器
 * @returns {HTMLElement|null} 找到的元素或null
 */
function getElement(selector) {
    return document.querySelector(selector);
}

/**
 * 安全获取所有元素
 * @param {string} selector - CSS选择器
 * @returns {NodeList} 找到的元素列表
 */
function getElements(selector) {
    return document.querySelectorAll(selector);
}

// ==========================================================================
// 4. 初始化函数
// ==========================================================================

/**
 * 初始化所有通用功能
 */
function initUtils() {
    // 初始化主题功能
    themeManager.init();
    
    // 初始化代码复制功能
    codeCopyManager.init();
    
    console.log('通用工具函数库初始化完成');
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', initUtils);

// ==========================================================================
// 5. 分类过滤功能
// ==========================================================================

/**
 * 分类过滤器
 */
const categoryFilter = {
    /**
     * 初始化分类过滤功能
     */
    init: function() {
        console.log('utils.js: categoryFilter.init() called');
        this.setupFilterButtons();
    },

    /**
     * 设置过滤按钮事件
     */
    setupFilterButtons: function() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const featureCards = document.querySelectorAll('.feature-card');

        if (filterButtons.length === 0 || featureCards.length === 0) {
            console.log('utils.js: No filter buttons or feature cards found');
            return;
        }

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // 为当前点击的按钮添加active类
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                this.filterCards(category);
            });
        });

        console.log('utils.js: Filter buttons setup complete');
    },

    /**
     * 根据分类过滤卡片
     * @param {string} category - 分类名称
     */
    filterCards: function(category) {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'block';
            } else {
                const cardCategory = card.getAttribute('data-category');
                if (cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });

        // 添加平滑过渡效果
        setTimeout(() => {
            featureCards.forEach(card => {
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            });
        }, 10);
    }
};

// ==========================================================================
// 6. 初始化函数更新
// ==========================================================================

/**
 * 初始化所有通用功能
 */
function initUtils() {
    // 初始化主题功能
    themeManager.init();
    
    // 初始化代码复制功能
    codeCopyManager.init();
    
    // 初始化分类过滤功能
    categoryFilter.init();
    
    console.log('通用工具函数库初始化完成');
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', initUtils);

// 导出到全局作用域
window.themeManager = themeManager;
window.codeCopyManager = codeCopyManager;
window.categoryFilter = categoryFilter;
window.formatNumber = formatNumber;
window.debounce = debounce;
window.throttle = throttle;
window.getElement = getElement;
window.getElements = getElements;
