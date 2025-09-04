# Lzee 玩机教程网站

这是一个关于安卓手机刷机、Root、系统修改以及Windows系统重装等玩机教程的静态网站。

**访问地址**: https://phone.dengsir.com

## 📋 教程内容

### 📱 安卓手机教程
- **深刷提取备份刷入（救砖）** - 适用大多数设备，高通设备大多需要拆机找触点
- **Lineage GSI系统的选择** - GSI是通用系统镜像，不看手机品牌型号，都能刷
- **MTKClient 使用教程** - MTK芯片固件的提取、备份与刷入指南
- **Qualcomm 9008 端口备份** - 使用 Qualcomm Premium Tool 在9008模式下备份分区
- **MiKo Pro 9008 操作方法** - 另一款高通9008模式下的固件提取与备份工具
- **红魔手机关闭系统更新** - 通过ADB方式免Root关闭红魔手机的系统更新提示

### 💻 Windows系统教程
- **Windows系统重装教程** - Windows电脑通用重装系统详细指南，包含PE工具使用
- **U盘启动快捷键查询列表** - 各品牌电脑和主板的U盘启动快捷键大全

## 📁 项目结构

```
.
├── index.html              # 主页
├── download.html           # 下载中心
├── CNAME                  # 自定义域名配置
├── 3.0.txt                # 版本信息
├── 历史版本/              # 历史版本文件
│   ├── 1.0.zip
│   └── 2.0.zip
├── 模板/                  # 教程模板文件
│   ├── 教程模板.html
│   └── README.md
├── main/                  # 主要资源文件
│   ├── components/        # 组件文件
│   │   ├── navbar-root.html
│   │   └── navbar.html
│   ├── css/              # 样式文件
│   │   ├── base.css           # 基础通用样式
│   │   ├── navbar.css         # 导航栏样式
│   │   ├── indexstyles.css    # 主页专属样式
│   │   ├── download.css       # 下载页面样式
│   │   ├── docs.css          # 文档页面样式
│   │   └── style.css         # 旧样式文件（已弃用）
│   ├── images/           # 图片资源
│   │   ├── 教程步骤图片 (01-10-register-tool.png 等)
│   │   ├── logo.png
│   │   ├── github-fill.svg
│   │   ├── moon.svg
│   │   ├── sun.svg
│   │   ├── whitegithub.svg
│   │   └── Windows/
│   └── js/               # JavaScript文件
│       ├── copy-code.js      # 代码复制功能
│       ├── docs.js           # 文档页面功能脚本
│       ├── download.js       # 下载页面功能脚本
│       ├── indexjs.js        # 主页功能脚本
│       ├── navbar.js         # 导航栏功能脚本
│       └── script.js         # 旧脚本文件（已弃用）
├── phone/                # 手机教程文档页面
│   ├── bootroot.html      # 深刷提取备份教程
│   ├── Lineage-GSI.html   # Lineage GSI 选择教程
│   ├── MTKClient.html     # MTKClient 使用教程
│   ├── Qualcomm-Premium-Tool-9008.html  # 高通9008备份教程
│   ├── MiKoPro.html       # MiKo Pro 操作方法
│   └── redmagic-disable-update.html  # 红魔手机关闭更新教程
└── wintool/              # Windows工具教程
    ├── usb-boot-keys.html     # U盘启动快捷键查询
    └── Winsystemreship.html   # Windows系统重装教程
```

## ✨ 功能特性

- **响应式设计**：适配桌面和移动设备
- **模块化导航栏**：使用 JavaScript 动态加载，便于维护
- **CSS 模块化**：样式按功能模块分离，提高可维护性
- **暗色/亮色主题切换**：支持用户偏好设置
- **GitHub Pages 就绪**：所有路径引用已优化，可直接部署
- **代码复制功能**：支持教程中的代码片段一键复制
- **分类筛选下载**：下载中心支持按类别筛选工具


## 💻 本地开发

直接在浏览器中打开 `index.html` 即可查看效果，但由于浏览器的安全限制，导航栏的动态加载功能需要本地服务器支持。

推荐使用 VS Code 的 Live Server 扩展：
1. 安装 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 🛠️ 技术栈

- **HTML5**：语义化标记
- **CSS3**：现代样式，包括 CSS 变量、Flexbox、Grid 布局
- **JavaScript (ES6+)**：动态内容加载、主题切换、交互功能
- **模块化设计**：HTML、CSS、JavaScript 分离，提高可维护性
- **Google Fonts**：使用 Noto Sans SC 字体提供更好的中文显示效果

## 🌐 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 📝 贡献指南

1. Fork 本项目
2. 创建新的分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

MIT License

## 📞 联系方式

- GitHub: [Lzee](https://github.com/Lzee)
- 网站: https://phone.dengsir.com

## 🔄 更新日志

### v3.0.1
-✨ 新增Windows系统重装教程
-🔑 新增U盘启动快捷键查询页面
-⚙️ 优化导航栏组件结构
-📱 改进响应式设计

### 🚀 v3.0 (重大更新)
-🏗️ 架构重构：实现完全模块化，提升可维护性
-📱 移动端导航：全面升级响应式导航，优化交互体验
-🎨 主题系统：增强深色/亮色模式，改进切换机制
-⚡ 动态组件：引入导航栏动态加载，减少代码冗余
-🌐 部署优化：完美适配GitHub Pages一键部署

### v2.0
-✨ 新增多个手机刷机教程
-📥 改进下载中心功能
-🎨 优化主题切换体验

### v1.0
-🎉 初始版本发布
-🧱 基础教程框架搭建
-📱 响应式设计实现
