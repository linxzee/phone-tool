/**
 * 统一的导航栏加载组件
 * 提供错误处理、加载状态和统一的导航栏加载机制
 */

class NavbarLoader {
    constructor() {
        this.navbarPlaceholder = document.getElementById('navbar-placeholder');
        this.navbarPath = this.calculateNavbarPath();
        this.isLoading = false;
    }

    /**
     * 初始化导航栏加载
     */
    async init() {
        if (!this.navbarPlaceholder) {
            console.warn('Navbar placeholder not found');
            return;
        }

        if (this.isLoading) return;
        this.isLoading = true;

        try {
            await this.loadNavbar();
        } catch (error) {
            console.error('Failed to load navbar:', error);
            this.showErrorState();
        } finally {
            this.isLoading = false;
        }
    }

    /**
     * 加载导航栏
     */
    async loadNavbar() {
        this.showLoadingState();

        const response = await fetch(this.navbarPath);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        this.navbarPlaceholder.innerHTML = html;

        // 初始化导航栏功能
        this.initNavbarFunctionality();
    }

    /**
     * 显示加载状态
     */
    showLoadingState() {
        this.navbarPlaceholder.innerHTML = `
            <div class="navbar-loading" style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 64px;
                background: var(--bg-default);
                border-bottom: 1px solid var(--border-color);
            ">
                <div style="
                    width: 24px;
                    height: 24px;
                    border: 2px solid var(--border-color);
                    border-top: 2px solid var(--color-primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                "></div>
            </div>
        `;
    }

    /**
     * 显示错误状态
     */
    showErrorState() {
        this.navbarPlaceholder.innerHTML = `
            <div class="navbar-error" style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 64px;
                background: var(--bg-default);
                border-bottom: 1px solid var(--border-color);
                color: var(--text-secondary);
                font-size: 14px;
            ">
                <span>导航栏加载失败</span>
            </div>
        `;
    }

    /**
     * 初始化导航栏功能
     */
    initNavbarFunctionality() {
        // 确保主题管理器已加载
        if (typeof themeManager !== 'undefined') {
            // 导航栏功能已由 theme-manager.js 处理
            console.log('Navbar functionality initialized');
        } else {
            console.warn('Theme manager not available for navbar initialization');
        }
    }

    /**
     * 计算导航栏路径
     * 根据当前页面路径动态计算正确的导航栏文件路径
     */
    calculateNavbarPath() {
        const currentPath = window.location.pathname;
        
        // 如果当前页面在教程目录下，使用相对路径
        if (currentPath.includes('/tutorial/')) {
            return '../../main/components/navbar-root.html';
        }
        
        // 默认路径
        return 'main/components/navbar-root.html';
    }

    /**
     * 设置导航栏路径
     * @param {string} path - 导航栏HTML文件路径
     */
    setNavbarPath(path) {
        this.navbarPath = path;
    }

    /**
     * 重新加载导航栏
     */
    async reload() {
        await this.init();
    }
}

// 创建全局导航栏加载器实例
window.navbarLoader = new NavbarLoader();

// 自动初始化导航栏加载
document.addEventListener('DOMContentLoaded', () => {
    window.navbarLoader.init();
});

// 添加加载动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .navbar-loading {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 64px;
        background: var(--bg-default);
        border-bottom: 1px solid var(--border-color);
    }
    
    .navbar-error {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 64px;
        background: var(--bg-default);
        border-bottom: 1px solid var(--border-color);
        color: var(--text-secondary);
        font-size: 14px;
    }
`;
document.head.appendChild(style);

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavbarLoader;
}