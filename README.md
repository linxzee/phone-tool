# Lzee 玩机教程网站

这是一个关于安卓手机刷机、Root、系统修改等玩机教程的静态网站。

## 项目结构

```
.
├── index.html              # 主页
├── download.html           # 下载中心
├── components/
│   └── navbar.html         # 导航栏组件
├── css/
│   ├── base.css           # 基础通用样式
│   ├── navbar.css         # 导航栏样式
│   ├── indexstyles.css    # 主页专属样式
│   ├── download.css       # 下载页面样式
│   ├── docs.css          # 文档页面样式
│   └── style.css         # 旧样式文件（已弃用）
├── js/
│   ├── navbar.js          # 导航栏功能脚本
│   ├── indexjs.js         # 主页功能脚本
│   ├── download.js        # 下载页面功能脚本
│   ├── docs.js           # 文档页面功能脚本
│   └── script.js         # 旧脚本文件（已弃用）
├── images/                # 图片资源
└── phone/                 # 教程文档页面
    ├── bootroot.html      # 深刷提取备份教程
    ├── Lineage-GSI.html   # Lineage GSI 选择教程
    ├── MTKClient.html     # MTKClient 使用教程
    ├── Qualcomm-Premium-Tool-9008.html  # 高通9008备份教程
    ├── MiKoPro.html       # MiKo Pro 操作方法
    └── redmagic-disable-update.html  # 红魔手机关闭更新教程
```

## 功能特性

- **响应式设计**：适配桌面和移动设备
- **模块化导航栏**：使用 JavaScript 动态加载，便于维护
- **CSS 模块化**：样式按功能模块分离，提高可维护性
- **暗色/亮色主题切换**：支持用户偏好设置
- **GitHub Pages 就绪**：所有路径引用已优化，可直接部署

## 部署到 GitHub Pages

1. 将整个项目上传到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为发布源
4. 访问 `https://[你的用户名].github.io/[仓库名]` 即可查看网站

## 本地开发

直接在浏览器中打开 `index.html` 即可查看效果，但由于浏览器的安全限制，导航栏的动态加载功能需要本地服务器支持。

推荐使用 VS Code 的 Live Server 扩展：
1. 安装 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 技术栈

- **HTML5**：语义化标记
- **CSS3**：现代样式，包括 CSS 变量、Flexbox、Grid 布局
- **JavaScript (ES6+)**：动态内容加载、主题切换、交互功能
- **模块化设计**：HTML、CSS、JavaScript 分离，提高可维护性

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License