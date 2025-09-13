/**
 * 页脚加载组件
 * 提供统一的页脚加载机制
 */

class FooterLoader {
    constructor() {
        this.footerPlaceholder = document.getElementById('footer-placeholder');
        this.footerPath = this.calculateFooterPath();
        this.isLoading = false;
    }

    /**
     * 初始化页脚加载
     */
    async init() {
        if (!this.footerPlaceholder) {
            console.warn('Footer placeholder not found');
            return;
        }

        if (this.isLoading) return;
        this.isLoading = true;

        try {
            await this.loadFooter();
        } catch (error) {
            console.error('Failed to load footer:', error);
            this.showErrorState();
        } finally {
            this.isLoading = false;
        }
    }

    /**
     * 加载页脚
     */
    async loadFooter() {
        this.showLoadingState();

        const response = await fetch(this.footerPath);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        this.footerPlaceholder.innerHTML = html;
    }

    /**
     * 显示加载状态
     */
    showLoadingState() {
        this.footerPlaceholder.innerHTML = `
            <footer class="main-footer">
                <div class="container">
                    <p>加载页脚中...</p>
                </div>
            </footer>
        `;
    }

    /**
     * 显示错误状态
     */
    showErrorState() {
        this.footerPlaceholder.innerHTML = `
            <footer class="main-footer">
                <div class="container">
                    <p>页脚加载失败</p>
                </div>
            </footer>
        `;
    }

    /**
     * 设置页脚路径
     * @param {string} path - 页脚HTML文件路径
     */
    setFooterPath(path) {
        this.footerPath = path;
    }

    /**
     * 计算页脚路径
     * 根据当前页面路径动态计算正确的页脚文件路径
     */
    calculateFooterPath() {
        const currentPath = window.location.pathname;
        
        // 如果当前页面在教程目录下，使用相对路径
        if (currentPath.includes('/tutorial/')) {
            return '../../main/components/footer.html';
        }
        
        // 默认路径
        return 'main/components/footer.html';
    }

    /**
     * 重新加载页脚
     */
    async reload() {
        await this.init();
    }
}

// 创建全局页脚加载器实例
window.footerLoader = new FooterLoader();

// 自动初始化页脚加载
document.addEventListener('DOMContentLoaded', () => {
    window.footerLoader.init();
});