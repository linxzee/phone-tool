// 搜索功能实现
class SearchEngine {
    constructor() {
        this.tutorials = [];
        this.init();
    }

    // 初始化搜索功能
    init() {
        this.loadTutorialsData();
        this.handleSearchQuery();
    }

    // 加载教程数据
    loadTutorialsData() {
        this.tutorials = [
            {
                title: "深刷提取备份刷入（救砖）",
                description: "适用大多数设备，高通设备大多需要拆机找触点。",
                url: "tutorial/phone/bootroot.html",
                category: "phone",
                tags: ["高通", "联发科", "救砖", "刷机"],
                categoryName: "手机刷机",
                keywords: ["高通", "联发科", "救砖", "刷机", "fastboot", "bootloader"]
            },
            {
                title: "Lineage GSI系统的选择",
                description: "GSI是通用系统镜像，不看手机品牌型号，都能刷。",
                url: "tutorial/phone/Lineage-GSI.html",
                category: "phone",
                tags: ["通用系统", "GSI"],
                categoryName: "手机刷机",
                keywords: ["GSI", "通用系统", "LineageOS", "系统镜像"]
            },
            {
                title: "MTKClient 使用教程",
                description: "MTK芯片固件的提取、备份与刷入指南。",
                url: "tutorial/phone/MTKClient.html",
                category: "phone",
                tags: ["联发科", "MTK"],
                categoryName: "手机刷机",
                keywords: ["MTK", "联发科", "固件提取", "备份", "刷入", "BROM模式", "分区备份"]
            },
            {
                title: "Qualcomm 9008 端口备份",
                description: "使用 Qualcomm Premium Tool 在9008模式下备份分区。",
                url: "tutorial/phone/Qualcomm-Premium-Tool-9008.html",
                category: "phone",
                tags: ["高通", "9008"],
                categoryName: "手机刷机",
                keywords: ["高通", "9008", "Qualcomm", "分区备份", "端口模式"]
            },
            {
                title: "MiKo Pro 9008 操作方法",
                description: "另一款高通9008模式下的固件提取与备份工具。",
                url: "tutorial/phone/MiKoPro.html",
                category: "phone",
                tags: ["高通", "9008"],
                categoryName: "手机刷机",
                keywords: ["MiKo", "高通", "9008", "固件提取", "备份"]
            },
            {
                title: "红魔手机关闭系统更新",
                description: "通过ADB方式免Root关闭红魔手机的系统更新提示。",
                url: "tutorial/phone/redmagic-disable-update.html",
                category: "phone",
                tags: ["系统优化", "红魔"],
                categoryName: "手机刷机",
                keywords: ["红魔", "系统更新", "ADB", "免Root", "系统优化"]
            },
            {
                title: "ADB Sideload 使用教程",
                description: "通过电脑向恢复模式设备推送并安装.zip格式更新包的方法。",
                url: "tutorial/phone/adb-sideload.html",
                category: "phone",
                tags: ["刷机工具", "ADB"],
                categoryName: "手机刷机",
                keywords: ["ADB", "Sideload", "恢复模式", "刷机", "更新包"]
            },
            {
                title: "去除WIFI和信号的X或感叹号",
                description: "解决安卓系统网络连通性检查导致的WIFI/信号感叹号问题。",
                url: "tutorial/phone/remove-wifi-exclamation.html",
                category: "phone",
                tags: ["网络优化", "WIFI"],
                categoryName: "手机刷机",
                keywords: ["WIFI", "感叹号", "网络优化", "信号", "连通性"]
            },
            {
                title: "GApps提供商选择指南",
                description: "主流谷歌框架提供商对比与选择指南，适用于各种自定义ROM。",
                url: "tutorial/phone/GApps-Providers.html",
                category: "phone",
                tags: ["谷歌服务", "GApps"],
                categoryName: "手机刷机",
                keywords: ["GApps", "谷歌服务", "谷歌框架", "自定义ROM"]
            },
            {
                title: "Windows系统重装教程",
                description: "Windows电脑通用重装系统详细指南，包含PE工具使用。",
                url: "tutorial/wintool/Winsystemreship.html",
                category: "system",
                tags: ["系统重装", "Windows"],
                categoryName: "系统工具",
                keywords: ["Windows", "系统重装", "PE工具", "重装系统"]
            },
            {
                title: "TrafficMonitor",
                description: "适用于 Windows 的网速监控悬浮窗工具。",
                url: "tutorial/wintool/TrafficMonitor.html",
                category: "system",
                tags: ["系统监控", "网速"],
                categoryName: "系统工具",
                keywords: ["TrafficMonitor", "网速监控", "悬浮窗", "系统监控"]
            },
            {
                title: "LX Music",
                description: "免费&开源音乐查找工具。",
                url: "tutorial/Utilities/LXMusic.html",
                category: "software",
                tags: ["音乐工具", "LXMusic"],
                categoryName: "软件工具",
                keywords: ["LXMusic", "音乐", "开源", "免费音乐"]
            },
            {
                title: "Clash软件和机场大全",
                description: "主流Clash客户端软件和机场介绍与下载指南。",
                url: "tutorial/Utilities/clash-software.html",
                category: "software",
                tags: ["网络代理", "Clash"],
                categoryName: "软件工具",
                keywords: ["Clash", "网络代理", "机场", "VPN", "代理工具"]
            },
            {
                title: "GitHub加速下载",
                description: "GitHub文件加速下载服务与使用方法。",
                url: "tutorial/Utilities/github-accelerator.html",
                category: "software",
                tags: ["下载工具", "GitHub"],
                categoryName: "软件工具",
                keywords: ["GitHub", "加速下载", "下载工具", "文件下载"]
            },
            {
                title: "Chrome扩展程序停用问题解决",
                description: "解决Chrome 140/141版本中扩展程序被停用的问题。",
                url: "tutorial/Utilities/chrome-extension-fix.html",
                category: "software",
                tags: ["浏览器修复", "Chrome"],
                categoryName: "软件工具",
                keywords: ["Chrome", "扩展程序", "浏览器修复", "停用问题"]
            },
            {
                title: "3Dmigoto 解码教程",
                description: "Unity和虚幻引擎游戏去码工具使用指南。",
                url: "tutorial/Utilities/3dmigoto-unity-unreal-decoder.html",
                category: "game",
                tags: ["游戏解码", "3Dmigoto"],
                categoryName: "游戏相关",
                keywords: ["3Dmigoto", "游戏解码", "Unity", "虚幻引擎", "去码"]
            },
            {
                title: "Unity BepInEx 解码教程",
                description: "Unity引擎游戏使用BepInEx框架进行解码的详细指南。",
                url: "tutorial/Utilities/Unity-BepinEx-Decoder.html",
                category: "game",
                tags: ["游戏解码", "BepInEx"],
                categoryName: "游戏相关",
                keywords: ["BepInEx", "Unity", "游戏解码", "框架", "插件"]
            },
            {
                title: "Unity游戏翻译教程",
                description: "Unity引擎游戏文本翻译与本地化详细指南。",
                url: "tutorial/Utilities/Unity-Game-Translation-Tutorial.html",
                category: "game",
                tags: ["游戏翻译", "Unity"],
                categoryName: "游戏相关",
                keywords: ["Unity", "游戏翻译", "本地化", "文本翻译"]
            },
            {
                title: "本地AI配置教程",
                description: "本地AI模型部署与配置详细指南。",
                url: "tutorial/Utilities/local-ai-config.html",
                category: "software",
                tags: ["AI配置", "本地AI"],
                categoryName: "软件工具",
                keywords: ["AI", "本地AI", "模型部署", "配置", "人工智能"]
            },
            {
                title: "U盘启动快捷键查询列表",
                description: "各品牌电脑、笔记本和主板的U盘启动快捷键查询指南。",
                url: "tutorial/wintool/usb-boot-keys.html",
                category: "system",
                tags: ["系统工具", "U盘启动", "快捷键"],
                categoryName: "系统工具",
                keywords: ["U盘启动", "快捷键", "启动菜单", "BIOS", "F12", "F8", "ESC", "联想", "惠普", "戴尔", "华硕", "主板", "笔记本", "台式机"]
            }
        ];
    }

    // 处理搜索查询
    handleSearchQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        
        if (query) {
            this.performSearch(query);
        } else {
            this.showNoResults("请输入搜索关键词");
        }
    }

    // 执行搜索
    performSearch(query) {
        this.showLoading();
        
        // 模拟搜索延迟
        setTimeout(() => {
            const results = this.searchTutorials(query);
            this.displayResults(results, query);
        }, 500);
    }

    // 搜索教程
    searchTutorials(query) {
        if (!query.trim()) {
            return [];
        }

        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        
        return this.tutorials.filter(tutorial => {
            // 计算匹配分数
            let score = 0;
            let matchedKeywords = [];
            
            searchTerms.forEach(term => {
                // 标题匹配（最高权重）
                if (tutorial.title.toLowerCase().includes(term)) {
                    score += 5;
                    matchedKeywords.push(term);
                }
                // 描述匹配（中等权重）
                if (tutorial.description.toLowerCase().includes(term)) {
                    score += 3;
                    matchedKeywords.push(term);
                }
                // 标签匹配（中等权重）
                if (tutorial.tags.some(tag => tag.toLowerCase().includes(term))) {
                    score += 3;
                    matchedKeywords.push(term);
                }
                // 关键字匹配（高权重）
                if (tutorial.keywords && tutorial.keywords.some(keyword => keyword.toLowerCase().includes(term))) {
                    score += 4;
                    matchedKeywords.push(term);
                }
                // 分类匹配（较低权重）
                if (tutorial.categoryName.toLowerCase().includes(term)) {
                    score += 2;
                    matchedKeywords.push(term);
                }
            });
            
            // 去重匹配的关键字
            tutorial.matchedKeywords = [...new Set(matchedKeywords)];
            
            return score > 0;
        }).sort((a, b) => {
            // 计算两个教程的匹配分数
            const scoreA = this.calculateScore(a, searchTerms);
            const scoreB = this.calculateScore(b, searchTerms);
            return scoreB - scoreA; // 降序排列
        });
    }

    // 计算匹配分数
    calculateScore(tutorial, searchTerms) {
        let score = 0;
        
        searchTerms.forEach(term => {
            // 标题匹配（最高权重）
            if (tutorial.title.toLowerCase().includes(term)) {
                score += 5;
            }
            // 描述匹配（中等权重）
            if (tutorial.description.toLowerCase().includes(term)) {
                score += 3;
            }
            // 标签匹配（中等权重）
            if (tutorial.tags.some(tag => tag.toLowerCase().includes(term))) {
                score += 3;
            }
            // 关键字匹配（高权重）
            if (tutorial.keywords && tutorial.keywords.some(keyword => keyword.toLowerCase().includes(term))) {
                score += 4;
            }
            // 分类匹配（较低权重）
            if (tutorial.categoryName.toLowerCase().includes(term)) {
                score += 2;
            }
        });
        
        return score;
    }

    // 显示搜索结果
    displayResults(results, query) {
        this.hideLoading();
        
        const resultsContainer = document.getElementById('search-results');
        const noResultsElement = document.getElementById('no-results');
        const queryDisplay = document.getElementById('search-query-display');
        const countDisplay = document.getElementById('search-count');
        
        // 更新搜索信息
        queryDisplay.textContent = `"${query}"`;
        countDisplay.textContent = `找到 ${results.length} 个结果`;
        
        // 清空结果容器
        resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            this.showNoResults(`未找到与 "${query}" 相关的结果`);
            return;
        }
        
        // 显示结果
        results.forEach(result => {
            const resultElement = this.createResultElement(result);
            resultsContainer.appendChild(resultElement);
        });
        
        // 显示结果容器
        resultsContainer.style.display = 'grid';
        noResultsElement.style.display = 'none';
    }

    // 创建单个结果元素
    createResultElement(result) {
        const article = document.createElement('article');
        article.className = 'search-result-item';
        article.onclick = () => {
            window.location.href = result.url;
        };
        
        // 高亮显示匹配的关键字
        const highlightedTitle = this.highlightKeywords(result.title, result.matchedKeywords);
        const highlightedDescription = this.highlightKeywords(result.description, result.matchedKeywords);
        
        article.innerHTML = `
            <div class="result-header">
                <h3 class="result-title">${highlightedTitle}</h3>
                <span class="result-category">${result.categoryName}</span>
            </div>
            <p class="result-description">${highlightedDescription}</p>
            <div class="result-meta">
                <div class="result-tags">
                    ${result.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                </div>
                <div class="result-keywords">
                    ${result.matchedKeywords && result.matchedKeywords.length > 0 ? 
                        `<span class="matched-keywords">匹配: ${result.matchedKeywords.slice(0, 3).join(', ')}${result.matchedKeywords.length > 3 ? '...' : ''}</span>` : 
                        ''}
                </div>
                <a href="${result.url}" class="result-link" onclick="event.stopPropagation();">查看详情 →</a>
            </div>
        `;
        
        return article;
    }

    // 高亮显示匹配的关键字
    highlightKeywords(text, keywords) {
        if (!keywords || keywords.length === 0) {
            return text;
        }
        
        let highlightedText = text;
        keywords.forEach(keyword => {
            const regex = new RegExp(`(${keyword})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark class="keyword-highlight">$1</mark>');
        });
        
        return highlightedText;
    }

    // 显示加载状态
    showLoading() {
        document.getElementById('search-results').style.display = 'none';
        document.getElementById('no-results').style.display = 'none';
        document.getElementById('search-loading').style.display = 'block';
    }

    // 隐藏加载状态
    hideLoading() {
        document.getElementById('search-loading').style.display = 'none';
    }

    // 显示无结果状态
    showNoResults(message) {
        document.getElementById('search-results').style.display = 'none';
        document.getElementById('search-loading').style.display = 'none';
        
        const noResultsElement = document.getElementById('no-results');
        noResultsElement.querySelector('h3').textContent = message || '未找到相关结果';
        noResultsElement.style.display = 'block';
        
        // 更新搜索信息
        const queryDisplay = document.getElementById('search-query-display');
        const countDisplay = document.getElementById('search-count');
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        
        if (query) {
            queryDisplay.textContent = `"${query}"`;
        }
        countDisplay.textContent = '找到 0 个结果';
    }
}

// 页面加载完成后初始化搜索功能
document.addEventListener('DOMContentLoaded', function() {
    new SearchEngine();
});

// 为搜索表单添加键盘快捷键支持
document.addEventListener('keydown', function(event) {
    // Ctrl+K 或 Cmd+K 聚焦搜索框
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.getElementById('search-input') || document.getElementById('mobile-search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // ESC 键清除搜索框
    if (event.key === 'Escape') {
        const searchInput = document.getElementById('search-input') || document.getElementById('mobile-search-input');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.blur();
        }
    }
});
