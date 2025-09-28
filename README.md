# Lzee 玩机教程网站

## 📝 项目简介

Lzee 玩机教程网站是一个专注于安卓手机刷机、Root、系统修改以及 Windows 系统重装等玩机教程的静态网站。本网站旨在为用户提供详细、易懂的教程，帮助用户更好地掌握设备。

**访问地址**: https://phone.dengsir.com

## 🚀 功能特性

- **响应式设计**：适配桌面和移动设备，提供一致的用户体验。
- **模块化导航栏**：使用 JavaScript 动态加载，便于内容维护和扩展。
- **暗色/亮色主题切换**：支持用户根据偏好自由切换网站主题。
- **GitHub Pages 优化**：所有路径引用已优化，可直接部署到 GitHub Pages。
- **代码复制功能**：教程中的代码片段支持一键复制，提高操作便捷性。
- **分类筛选下载**：下载中心支持按类别筛选工具，方便用户查找所需资源。

## 📁 项目结构

```
.
├── index.html             # 主页
├── download.html          # 下载中心
├── CNAME                  # 自定义域名配置
├── main/                  # 主要资源文件目录
│   ├── README.md          # main 目录说明文件
│   ├── components/        # 组件文件
│   │   └── navbar.html    # 统一的导航栏组件
│   ├── css/               # 样式文件
│   │   ├── navbar.css     # 导航栏专用样式
│   │   └── styles.css     # 统一的主样式文件 (整合了所有通用样式)
│   ├── js/                # JavaScript文件
│   │   ├── navbar.js      # 导航栏功能脚本
│   │   ├── utils.js       # 通用工具函数库 (主题管理、代码复制、防抖、节流等)
│   │   └── download.js    # 下载中心专用功能
│   └── images/            # 图片资源目录
│       ├── Windows/       # Windows 相关图片
│       └── ...            # 其他图片文件
├── tutorial/              # 教程文档目录
│   ├── README.md          # 教程目录说明文件
│   ├── phone/             # 手机教程文档页面
│   │   └── ...            # 手机教程 HTML 文件
│   ├── wintool/           # Windows工具教程
│   │   └── ...            # Windows工具教程 HTML 文件
│   └── Utilities/         # 实用工具教程
│       └── ...            # 实用工具教程 HTML 文件
├── 模板/                  # 模板文件目录
│   ├── 教程模板.html      # 教程页面模板
│   └── README.md          # 模板目录说明文件
└── README.md              # 项目根目录 README (此文件)
```

## 🛠️ 安装指南 (本地开发)

本项目是一个静态网站，无需复杂的安装过程。您可以通过以下方式在本地进行开发和预览：

1.  **克隆仓库**：
    ```bash
    git clone https://github.com/Lzee/phone-tool.git
    cd phone-tool
    ```

2.  **本地预览**：
    直接在浏览器中打开 `index.html` 文件即可查看网站效果。
    **注意**：由于浏览器安全限制，导航栏等动态加载功能可能需要本地服务器支持才能正常工作。

3.  **推荐使用 VS Code Live Server 扩展**：
    为了获得完整的本地开发体验，推荐使用 VS Code 的 Live Server 扩展：
    a.  安装 [Live Server 扩展](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)。
    b.  在 VS Code 中，右键点击 `index.html` 文件。
    c.  选择 "Open with Live Server"。

## 📖 使用说明

本网站主要提供以下几类教程：

###  安卓手机教程

涵盖了从设备深刷、Root 到系统修改等多个方面，例如：
-   **深刷提取备份刷入（救砖）**：适用于大多数设备，高通设备可能需要拆机找触点。
-   **Lineage GSI 系统的选择**：通用系统镜像 (GSI) 的选择与刷入指南。
-   **MTKClient 使用教程**：MTK 芯片设备的固件提取、备份与刷入。
-   **Qualcomm 9008 端口备份**：使用 Qualcomm Premium Tool 在 9008 模式下备份分区。
-   **MiKo Pro 9008 操作方法**：另一款高通 9008 模式下的固件提取与备份工具。
-   **红魔手机关闭系统更新**：通过 ADB 方式免 Root 关闭红魔手机的系统更新提示。
-   **ADB Sideload 使用教程**：通过电脑向恢复模式设备推送并安装 .zip 格式更新包。
-   **去除 WIFI 和信号的 X 或！感叹号**：解决安卓系统网络连通性检查导致的 WIFI/信号感叹号问题。
-   **GApps 提供商选择指南**：主流谷歌框架提供商对比与选择指南，适用于各种自定义 ROM。

### 💻 Windows 系统教程

提供 Windows 系统的重装和工具使用指南，例如：
-   **Windows 系统重装教程**：Windows 电脑通用重装系统详细指南，包含 PE 工具使用。
-   **U盘启动快捷键查询列表**：各品牌电脑和主板的 U 盘启动快捷键大全。

### 🛠️ 实用工具

介绍了一些实用的软件工具，例如：
-   **LX Music**：免费&开源音乐查找工具。

## 🤝 贡献方式

我们欢迎并感谢所有对本项目感兴趣的贡献者。如果您希望为本项目做出贡献，请遵循以下步骤：

1.  **Fork 本项目**：点击 GitHub 页面右上角的 "Fork" 按钮，将项目复制到您的个人仓库。
2.  **创建新的分支**：
    ```bash
    git checkout -b feature/YourAmazingFeature
    ```
    (请将 `YourAmazingFeature` 替换为您的功能名称)
3.  **提交更改**：
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
    (请使用清晰的提交信息描述您的更改)
4.  **推送到分支**：
    ```bash
    git push origin feature/YourAmazingFeature
    ```
5.  **打开 Pull Request (PR)**：在 GitHub 上，导航到您的 Fork 仓库，然后点击 "New pull request" 按钮，提交您的更改。

我们会在收到 PR 后尽快进行审核。感谢您的支持！

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 [`LICENSE`](LICENSE:1) 文件。

## 📞 联系方式

-   GitHub: [Lzee](https://github.com/Lzee)
-   网站: https://phone.dengsir.com

## 🔄 更新日志

### v4.0 (最新)
-   🎨 **CSS 架构重构**: 整合所有样式文件为 `styles.css`，引入新 CSS 变量，优化夜间模式。
-   💡 **JS 功能增强**: 新增 `utils.js` 通用工具库，包含主题管理、代码复制、防抖、节流等功能。
-   🔗 **导航栏优化**: 统一导航栏组件，资源路径改为绝对路径，提升兼容性。
-   📈 **整体性能与维护性提升**: 减少 HTTP 请求，模块化代码结构，提高开发效率。

### v3.0.2
-   🌙 **功能新增**：夜间模式支持时间自动切换功能
-   📝 **模板优化**：教程模板更新，支持夜间模式自动切换并修复导航栏加载路径

### v3.0.1
-   🏗️ **架构优化**：重构文件结构，新增tutorial目录统一管理教程文档
-   📁 **目录重组**：将所有教程文件迁移到tutorial/phone/和tutorial/wintool/子目录
-   🔗 **路径更新**：主页链接路径适配新的目录结构
-   📋 **版本管理**：添加3.0.1.txt版本信息文件和历史版本存档
-   🌐 **域名配置**：新增CNAME文件配置自定义域名phone.dengsir.com
-   📚 **文档完善**：更新README.md项目结构说明和更新日志

### v3.0 (重大更新)
-   🏗️ 架构重构：实现完全模块化，提升可维护性
-   📱 移动端导航：全面升级响应式导航，优化交互体验
-   🎨 主题系统：增强深色/亮色模式，改进切换机制
-   ⚡ 动态组件：引入导航栏动态加载，减少代码冗余
-   🌐 部署优化：完美适配 GitHub Pages 一键部署

### v2.0
-   ✨ 新增多个手机刷机教程
-   📥 改进下载中心功能
-   🎨 优化主题切换体验

### v1.0
-   🎉 初始版本发布
-   🧱 基础教程框架搭建
-   📱 响应式设计实现
