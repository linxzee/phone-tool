# main 目录：核心资源文件

## 📝 项目简介

`main` 目录是 Lzee 技术工具箱的核心资源存放地，包含了构建网站所需的所有关键文件，如 HTML 组件、CSS 样式、JavaScript 脚本和图片资源。这些文件共同构成了网站的视觉呈现和交互功能。

## 📁 目录结构

-   **[`components/`](main/components/)**：存放可重用的 HTML 组件，例如网站的统一导航栏 (`navbar.html`) 和页脚 (`footer.html`)。支持移动端菜单。
-   **[`css/`](main/css/)**：包含网站的所有样式表文件。其中 [`styles.css`](main/css/styles.css) 是整合后的主样式文件，[`navbar.css`](main/css/navbar.css) 负责导航栏的特定样式。
-   **[`js/`](main/js/)**：存放网站的 JavaScript 脚本。包括导航栏的交互逻辑 (`navbar.js`)、通用工具函数库 (`utils.js`，包含主题管理、代码复制、防抖、节流等功能)，以及下载中心专用功能 (`download.js`)。
-   **[`images/`](main/images/)**：存储网站中使用的所有图片资源，包括教程配图、图标等。

## 📖 使用说明与维护

### 样式文件 (`css/`)

-   **主样式**：网站的通用外观和布局主要由 [`styles.css`](main/css/styles.css) 控制。任何全局性的样式调整都应在此文件中进行。
-   **导航栏样式**：导航栏的特定样式定义在 [`navbar.css`](main/css/navbar.css) 中。
-   **新增样式**：如果需要为特定页面或组件添加新样式，请考虑将其整合到现有文件中或创建新的、有明确命名规范的样式文件。

### JavaScript 脚本 (`js/`)

-   **通用工具**：[`utils.js`](main/js/utils.js) 包含了网站通用的 JavaScript 函数，如主题切换、代码复制等。建议将可复用的功能添加到此文件。
-   **导航栏功能**：[`navbar.js`](main/js/navbar.js) 负责导航栏的动态加载和交互逻辑。
-   **特定页面功能**：针对下载中心等特定页面的功能脚本，如 [`download.js`](main/js/download.js)，应在各自的文件中维护。
-   **模块化**：请遵循模块化原则，保持 JavaScript 代码的清晰和可维护性。

### HTML 组件 (`components/`)

-   **重用性**：[`components/`](main/components/) 目录下的 HTML 文件旨在实现代码重用。例如，[`navbar.html`](main/components/navbar.html) 被多个页面引用，以确保导航栏的一致性。
-   **更新组件**：对组件的任何修改都将影响所有引用该组件的页面。请在修改后进行充分测试。

### 图片资源 (`images/`)

-   **图片管理**：所有网站使用的图片都应存放在 [`images/`](main/images/) 目录及其子目录中。
-   **命名规范**：建议为图片文件使用清晰、描述性的命名，以便于管理和查找。

## 🤝 贡献方式

如果您希望对 `main` 目录下的资源文件进行贡献或改进，请遵循以下步骤：

1.  **Fork 本项目**。
2.  **创建新的分支** (`git checkout -b feature/your-feature-name`)。
3.  **进行更改**：根据您的贡献类型，修改或添加相应的 CSS、JavaScript、HTML 组件或图片文件。
4.  **提交更改** (`git commit -m 'feat: Add new feature or fix bug in main resources'`)。
5.  **推送到分支** (`git push origin feature/your-feature-name`)。
6.  **打开 Pull Request**，详细描述您的更改内容和目的。

我们感谢您对本项目质量和功能的贡献！
