document.addEventListener("DOMContentLoaded", function() {
    // 1. 找到导航栏占位符
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) return; // 如果页面没有占位符，就什么也不做

    // 2. 使用 fetch API 加载导航栏 HTML 文件
    fetch('../_navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.text();
        })
        .then(html => {
            // 3. 将加载的 HTML 内容注入到占位符中
            navbarPlaceholder.innerHTML = html;

            // 4. (重要) 高亮当前页面的导航链接
            highlightActiveNavlink();
            
            // 5. 重新初始化主题切换功能
            if (typeof initThemeToggle === 'function') {
                initThemeToggle();
            }
        })
        .catch(error => {
            console.error('加载导航栏失败:', error);
            navbarPlaceholder.innerHTML = '<p style="color: red; text-align: center;">导航栏加载失败</p>';
        });
});

function highlightActiveNavlink() {
    // 获取当前页面的路径
    const currentPagePath = window.location.pathname;
    
    // 找到新加载的导航栏中的所有链接
    const navLinks = document.querySelectorAll('#navbar-placeholder .nav-links a');

    navLinks.forEach(link => {
        // 如果链接的 href 与当前页面路径匹配
        if (link.getAttribute('href') === currentPagePath) {
            link.classList.add('active'); // 添加 'active' 类
        }
    });
}

