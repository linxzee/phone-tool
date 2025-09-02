// 下载项目数据
const downloadItems = [
    {
        id: 1,
        title: "MTKClient 工具",
        description: "联发科芯片的固件提取、备份与刷入工具，支持多种MTK设备。",
        category: "mtk",
        version: "v2.6.0",
        size: "15.2 MB",
        downloads: 12500,
        icon: "M",
        downloadUrl: "https://linxize.lanzout.com/ixjAA34zovra",
        infoUrl: "phone/MTKClient.html",
        updated: "2024-12-15"
    },
    {
        id: 2,
        title: "Qualcomm Premium Tool",
        description: "高通9008模式下的专业备份工具，支持分区提取和刷入。",
        category: "qualcomm",
        version: "v1.8.5",
        size: "28.7 MB",
        downloads: 8900,
        icon: "Q",
        downloadUrl: "https://linxize.lanzout.com/iH91934zgobe",
        infoUrl: "phone/Qualcomm-Premium-Tool-9008.html",
        updated: "2024-11-20"
    },
    {
        id: 3,
        title: "MiKo Pro 工具",
        description: "另一款优秀的高通9008模式工具，操作简单，功能强大。",
        category: "qualcomm",
        version: "v2.1.3",
        size: "22.4 MB",
        downloads: 6700,
        icon: "M",
        downloadUrl: "https://soya.infini-cloud.net/share/130187d81e0ece24",
        infoUrl: "phone/MiKoPro.html",
        updated: "2024-10-05"
    },
    {
        id: 4,
        title: "LineageOS GSI 镜像",
        description: "通用系统镜像，适用于大多数Android设备的LineageOS系统。",
        category: "system",
        version: "21.0",
        size: "2.1 GB",
        downloads: 23400,
        icon: "L",
        downloadUrl: "https://sourceforge.net/projects/andyyan-gsi/files/",
        infoUrl: "phone/Lineage-GSI.html",
        updated: "2024-12-01"
    },
    {
        id: 5,
        title: "Bootloader 解锁工具",
        description: "通用Bootloader解锁工具包，包含必要的驱动和脚本。",
        category: "utility",
        version: "v1.2.0",
        size: "45.3 MB",
        downloads: 15600,
        icon: "B",
        downloadUrl: "#",
        infoUrl: "phone/bootroot.html",
        updated: "2024-09-10"
    },
    {
        id: 6,
        title: "ADB 和 Fastboot 工具包",
        description: "Android SDK平台工具，包含ADB和Fastboot命令必备环境包。",
        category: "utility",
        version: "v36.0.0",
        size: "15.5 MB",
        downloads: 31200,
        icon: "A",
        downloadUrl: "https://googledownloads.cn/android/repository/platform-tools-latest-windows.zip",
        infoUrl: "#",
        updated: "2025-01-15"
    },
    {
        id: 7,
        title: "TWRP Recovery",
        description: "第三方恢复镜像，支持多种设备的刷机和备份功能。",
        category: "system",
        version: "v3.7.0",
        size: "85.6 MB",
        downloads: 18900,
        icon: "T",
        downloadUrl: "#",
        infoUrl: "#",
        updated: "2024-11-25"
    },
    {
        id: 8,
        title: "Magisk Manager",
        description: "Android系统Root和管理工具，支持模块化功能扩展。",
        category: "utility",
        version: "v27.0",
        size: "8.9 MB",
        downloads: 45600,
        icon: "M",
        downloadUrl: "#",
        infoUrl: "#",
        updated: "2024-12-05"
    }
];

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    renderDownloadItems();
    setupEventListeners();
});


// 渲染下载项目
function renderDownloadItems(items = downloadItems) {
    const grid = document.getElementById('downloads-grid');
    if (!grid) return;
    
    if (items.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                </svg>
                <h3>未找到匹配的工具</h3>
                <p>尝试使用不同的关键词搜索或选择其他分类</p>
            </div>
        `;
    } else {
        grid.innerHTML = items.map(item => createDownloadCard(item)).join('');
    }
}

// 创建下载卡片HTML
function createDownloadCard(item) {
    const categoryClass = `tag-${item.category}`;
    const categoryName = getCategoryName(item.category);
    
    return `
        <div class="download-card" data-category="${item.category}" data-id="${item.id}">
            <div class="download-header">
                <div class="download-icon">${item.icon}</div>
                <h3 class="download-title">${item.title}</h3>
            </div>
            <p class="download-description">${item.description}</p>
            <div class="download-meta">
                <span class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h3a.75.75 0 000-1.5h-2.25V5z" clip-rule="evenodd" />
                    </svg>
                    ${item.version}
                </span>
                <span class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S15.385 2.25 10 2.25zM9.75 6a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6.75A.75.75 0 009.75 6z" clip-rule="evenodd" />
                    </svg>
                    ${item.size}
                </span>
                <span class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                    </svg>
                    ${formatNumber(item.downloads)}
                </span>
            </div>
            <span class="category-tag ${categoryClass}">${categoryName}</span>
            <div class="download-actions">
                <a href="${item.downloadUrl}" class="download-btn btn-primary" onclick="trackDownload(${item.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 8px;">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    下载
                </a>
                ${item.infoUrl ? `
                <a href="${item.infoUrl}" class="download-btn btn-secondary" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 8px;">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                    教程
                </a>
                ` : ''}
            </div>
        </div>
    `;
}

// 获取分类名称
function getCategoryName(category) {
    const categories = {
        'mtk': '联发科工具',
        'qualcomm': '高通工具',
        'system': '系统镜像',
        'utility': '实用工具',
        'all': '全部'
    };
    return categories[category] || category;
}

// 格式化数字（添加千位分隔符）
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 设置事件监听器
function setupEventListeners() {
    // 分类过滤
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加active类到当前按钮
            button.classList.add('active');
            
            const category = button.dataset.category;
            filterDownloads(category);
        });
    });
    
    // 搜索功能
    const searchInput = document.getElementById('nav-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            filterBySearch(searchTerm);
        });
    }
}

// 过滤下载项目
function filterDownloads(category) {
    let filteredItems;
    if (category === 'all') {
        filteredItems = downloadItems;
    } else {
        filteredItems = downloadItems.filter(item => item.category === category);
    }
    renderDownloadItems(filteredItems);
}

// 搜索过滤
function filterBySearch(searchTerm) {
    if (!searchTerm) {
        // 获取当前激活的分类
        const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
        filterDownloads(activeCategory);
        return;
    }
    
    const filteredItems = downloadItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    
    renderDownloadItems(filteredItems);
}

// 跟踪下载（模拟功能）
function trackDownload(itemId) {
    const item = downloadItems.find(i => i.id === itemId);
    if (item) {
        item.downloads++;
        console.log(`下载跟踪: ${item.title} - 总下载量: ${item.downloads}`);
        
        // 在实际应用中，这里可以发送到分析服务
        // analytics.trackDownload(itemId);
    }
}

// 添加键盘快捷键支持
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('nav-search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Esc 清除搜索
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('search-input');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            filterBySearch('');
        }
    }
});

// 导出函数供全局使用
window.trackDownload = trackDownload;
window.filterDownloads = filterDownloads;
window.filterBySearch = filterBySearch;