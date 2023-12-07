# toolkitcss

A CSS toolkit helpers compiled by [sass](https://github.com/sass/dart-sass).

[release Notes](./CHANGELOG.md)

# Installation

``` bash
# yarn
$ yarn add toolkitcss
```

# Usage

2 种方式使用。

-  直接导入编译后的 `css` 文件。
-  导入未编译的 `scss` 源文件。
## 导入编译后的 css

``` js
// @/main.js
import 'toolkitcss/dist/index.css'
```

## 导入 scss 源文件

如果你的项目使用的也是 `sass(dart-sass)`，可以将 `scss` 源文件导入至你的公共 **styles** 中。

**例如：**

``` scss
// @/styles/toolkitcss/index.scss

// 你可以在导入之前自定义编译变量

// 例如，修改 spacing 工具类的上限值
$--spacing-upper-limit-value: 60;

// more ...

@import '~toolkitcss/src/lib/styles/index';

// ...
```

然后在项目入口文件中导入：

``` js
// @/main.js

// ...

import '@/styles/toolkitcss/index.scss' // global css

```