# main 目录说明

## 📁 目录结构

```
main/
├── components/          # 组件文件
│   ├── navbar-root.html    # 根导航栏组件
│   ├── navbar.html         # 导航栏组件
│   └── footer.html         # 页脚组件
├── css/                # 样式文件
│   ├── base.css           # 基础通用样式
│   ├── navbar.css         # 导航栏样式
│   ├── hero.css           # 焦点区域样式
│   ├── indexstyles.css    # 主页专属样式
│   ├── download.css       # 下载页面样式
│   ├── docs.css          # 文档页面样式
│   └── dark-mode.css     # 暗色模式样式
├── images/             # 图片资源
│   ├── logo.png           # 网站Logo
│   ├── github-fill.svg    # GitHub图标
│   ├── moon.svg           # 月亮图标（暗色模式）
│   ├── sun.svg            # 太阳图标（亮色模式）
│   ├── whitegithub.svg    # 白色GitHub图标
│   └── Windows/           # Windows相关图片
└── js/                  # JavaScript文件
    ├── theme-manager.js    # 主题管理器
    ├── navbar-loader.js    # 导航栏加载器
    ├── footer-loader.js    # 页脚加载器
    ├── copy-code.js        # 代码复制功能
    ├── download.js         # 下载页面功能
    ├── indexjs.js          # 主页功能脚本
    └── (其他功能脚本)
```

## 🎯 功能说明

### 组件系统
- **导航栏组件**: 使用 [`navbar-loader.js`](js/navbar-loader.js) 动态加载
- **页脚组件**: 使用 [`footer-loader.js`](js/footer-loader.js) 动态加载
- **主题切换**: 支持亮色/暗色模式自动切换

### 样式系统
- **CSS变量**: 使用CSS自定义属性实现主题切换
- **响应式设计**: 支持桌面和移动设备
- **模块化**: 样式按功能模块分离

### JavaScript功能
- **动态加载**: 组件按需加载，减少初始加载时间
- **错误处理**: 完善的错误处理和加载状态显示
- **主题管理**: 统一的主题状态管理

## 🔧 开发说明

### 添加新组件
1. 在 `components/` 目录创建HTML组件
2. 在 `js/` 目录创建对应的加载器
3. 在需要的页面中添加占位符和脚本引用

### 样式开发
- 通用样式放在 [`base.css`](css/base.css)
- 组件特定样式放在对应的CSS文件中
- 使用CSS变量实现主题切换

### 脚本开发
- 使用ES6+语法
- 添加适当的错误处理
- 支持模块化加载

## 📝 维护说明

- 修改导航栏内容: 编辑 [`components/navbar.html`](components/navbar.html)
- 修改页脚内容: 编辑 [`components/footer.html`](components/footer.html)
- 调整主题颜色: 修改 [`css/base.css`](css/base.css) 中的CSS变量
- 添加新功能: 在 `js/` 目录创建新的脚本文件

## 🌐 浏览器支持

- Chrome (推荐)
- Firefox
- Safari  
- Edge

所有现代浏览器都支持本项目的功能特性。