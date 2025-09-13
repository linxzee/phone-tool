/**
 * 批量更新教程页面导航栏加载脚本
 * 用于替换所有教程页面中的重复导航栏加载代码
 */

const fs = require('fs');
const path = require('path');

// 教程文件目录
const tutorialDirs = [
    'tutorial/phone',
    'tutorial/wintool', 
    'tutorial/Utilities'
];

// 要更新的HTML文件
const htmlFiles = [];

// 收集所有教程HTML文件
tutorialDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            if (file.endsWith('.html')) {
                htmlFiles.push(path.join(dir, file));
            }
        });
    }
});

// 要替换的旧代码模式
const oldNavbarScript = `
    <script>
        fetch('../../main/components/navbar.html')
            .then(response => {
                if (!response.ok) {
                    console.error('Fetch error:', response.statusText);
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('navbar-placeholder').innerHTML = html;
                if (typeof initNavbar === 'function') {
                    initNavbar();
                }
            })
            .catch(error => {
                console.error('Error loading navbar:', error);
            });
    </script>
`;

// 新的脚本引用
const newScripts = `
    <script src="../../main/js/theme-manager.js" defer></script>
    <script src="../../main/js/navbar-loader.js" defer></script>
    <script src="../../main/js/navbar.js" defer></script>
`;

console.log('开始更新教程页面导航栏加载代码...');

let updatedCount = 0;

htmlFiles.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // 检查是否包含旧的导航栏加载代码
        if (content.includes('fetch(\'../../main/components/navbar.html\')')) {
            // 替换旧的导航栏加载代码
            content = content.replace(oldNavbarScript, newScripts);
            
            // 写入更新后的内容
            fs.writeFileSync(file, content, 'utf8');
            console.log(`✓ 更新完成: ${file}`);
            updatedCount++;
        } else {
            console.log(`- 无需更新: ${file}`);
        }
    } catch (error) {
        console.error(`✗ 更新失败: ${file}`, error.message);
    }
});

console.log(`\n更新完成! 共处理了 ${updatedCount} 个文件。`);