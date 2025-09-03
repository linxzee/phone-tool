/**
 * 代码块复制功能
 * 为所有 pre 和 .code-block 元素添加复制按钮
 */

document.addEventListener('DOMContentLoaded', function() {
    // 为所有代码块添加复制按钮
    function addCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre, .code-block');
        
        codeBlocks.forEach(block => {
            // 检查是否已经添加了复制按钮
            if (block.querySelector('.copy-btn')) {
                return;
            }
            
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.textContent = '复制';
            copyButton.setAttribute('aria-label', '复制代码');
            
            // 获取代码内容
            let codeContent = '';
            if (block.tagName === 'PRE') {
                // 对于 pre 元素，获取内部的 code 元素内容或直接获取文本
                const codeElement = block.querySelector('code');
                codeContent = codeElement ? codeElement.textContent : block.textContent;
            } else {
                // 对于 .code-block 元素，直接获取文本
                codeContent = block.textContent;
            }
            
            // 移除多余的空格和换行
            codeContent = codeContent.trim();
            
            copyButton.addEventListener('click', function() {
                copyToClipboard(codeContent, copyButton);
            });
            
            block.appendChild(copyButton);
        });
    }
    
    // 复制到剪贴板函数
    function copyToClipboard(text, button) {
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
    }
    
    // 初始化复制按钮
    addCopyButtons();
    
    // 监听动态内容变化（如果有的话）
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                addCopyButtons();
            }
        });
    });
    
    // 观察整个文档的变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});